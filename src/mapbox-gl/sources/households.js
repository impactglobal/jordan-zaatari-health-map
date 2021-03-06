import { csvParseRows } from 'd3-dsv';
import turfHelpers from '@turf/helpers';
import * as columns from '../../constants/columns/household.js';
import reach from '../../constants/reach.js';
import utils from '../utils/index.js';
import sources from '../../constants/sources.js';

function sourceHouseholds({ map }) {
  return fetch(reach.HOUSEHOLDS)
    .then((response) => response.text())
    .then((csv) => {
      const [, ...data] = csvParseRows(csv);
      const features = data.map(csvToPoints);
      addSource({ features, map });
    });
}

function addSource({ features, map }) {
  utils.addSourceToMap({ features, map, sourceId: sources.HOUSEHOLDS });
}

function csvToPoints(row) {
  const longitude = Number(row[columns.longitude.COL]);
  const latitude = Number(row[columns.latitude.COL]);
  return turfHelpers.point([longitude, latitude], {
    [columns.id.KEY]: row[columns.id.COL],
  });
}

export default sourceHouseholds;
