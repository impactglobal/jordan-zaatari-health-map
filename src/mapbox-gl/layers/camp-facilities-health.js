import store from '../../store/index.js';
import { REACH } from '../../constants/resources.js';
import COLORS from '../../constants/colors.js';

const { mapboxgl } = window;

function modifyLayer({ map }) {
  const filter = [];
  const filters = store.getState().filters.health;
  for (const [key, value] of Object.entries(filters)) {
    if (value) filter.push(['==', key, 'Yes']);
  }
  if (!filter.length) filter.push(['has', 'OBJECTID_1']);
  map.setFilter('health-facilities-fill', ['any', ...filter]);
}

function addPopup({ map }) {
  map.on('click', (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ['health-facilities-fill'],
    });
    if (features.length && features[0].properties.Summary_St !== 'null') {
      const feature = features[0];
      new mapboxgl.Popup({ closeButton: false })
        .setLngLat(map.unproject(e.point))
        .setHTML(`
          <p><b>${feature.properties.Name_EN} / ${feature.properties.Name_AR}</b></p>
          <p><b>Hours:</b> ${feature.properties.Health_Hrs}</p>
          <p><b>Services:</b> ${feature.properties.Summary_St}</p>
        `)
        .addTo(map);
    }
  });
  map.on('mousemove', (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ['health-facilities-fill'],
    });
    const canvas = map.getCanvas();
    canvas.style.cursor = (
      features.length && features[0].properties.Summary_St !== 'null') ? 'pointer' : '';
  });
}

function addLayer({ map }) {
  if (!map.getSource('camp-facilities')) {
    map.addSource('camp-facilities', {
      data: REACH.CAMP_FACILITIES,
      type: 'geojson',
    });
  }
  map.addLayer({
    id: 'health-facilities-base',
    paint: {
      'fill-color': COLORS.DARK_GREY_50,
      'fill-opacity': 0.8,
    },
    source: 'camp-facilities',
    type: 'fill',
  });
  map.addLayer({
    id: 'health-facilities-fill',
    paint: {
      'fill-color': {
        property: 'Health_Typ',
        stops: [
          ['Healthcare Facility', COLORS.LIGHT_RED_100],
          ['Camp Facility with Health Services', COLORS.MEDIUM_BLUE],
          ['Camp Facility', COLORS.DARK_GREY_50],
        ],
        type: 'categorical',
      },
      'fill-opacity': 0.8,
    },
    source: 'camp-facilities',
    type: 'fill',
  });
  map.addLayer({
    id: 'health-facilities-outline',
    paint: {
      'line-color': COLORS.WHITE,
    },
    source: 'camp-facilities',
    type: 'line',
  });
  modifyLayer({ map });
}

export default function ({ map }) {
  store.subscribe(() => modifyLayer({ map }));
  addLayer({ map });
  addPopup({ map });
}