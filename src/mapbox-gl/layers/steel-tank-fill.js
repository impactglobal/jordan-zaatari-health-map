import store from '../../store/index.js';
import { REACH } from '../../constants/resources.js';
import COLORS from '../../constants/colors.js';
import FILTERS from '../../constants/filters/waste-water.js';

const SOURCE_ID = 'steel-tanks';
const LAYER_ID = 'steel-tanks-circle';
const FILTER_PROP = 'Layer';

function modifyLayer({ map }) {
  const state = store.getState();
  if (state.filters.wasteWater[FILTERS.STEEL_TANKS]) {
    map.setFilter(LAYER_ID, ['has', FILTER_PROP]);
  } else {
    const filters = state.filters.wasteWater;
    const filtersActive = Object.values(filters).includes(true);
    const searchActive = state.search.wasteWater;
    if (filtersActive || searchActive) {
      map.setFilter(LAYER_ID, ['!has', FILTER_PROP]);
    } else {
      map.setFilter(LAYER_ID, ['has', FILTER_PROP]);
    }
  }
}

function addLayer({ map }) {
  if (!map.getSource(SOURCE_ID)) {
    map.addSource(SOURCE_ID, {
      data: REACH.STEEL_TANKS,
      type: 'geojson',
    });
  }
  map.addLayer({
    id: LAYER_ID,
    paint: {
      'circle-color': COLORS.DARK_GREY_100,
      'circle-radius': 6.5,
      'circle-opacity': 0.8,
    },
    source: SOURCE_ID,
    type: 'circle',
  });
  modifyLayer({ map });
}

export default function ({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  addLayer({ map });
}
