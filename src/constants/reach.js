import urls from './urls.js';

const reach = {
  DISTRICT_BOUNDARIES: `${urls.RESOURCES}/reach/DistrictBoundaries_2016_12.geojson`,
  BLOCK_BOUNDARIES: `${urls.RESOURCES}/reach/BlockBoundaries_2016_12.geojson`,
  CAMP_FACILITIES: `${urls.RESOURCES}/reach/CampFacilities_2017_02.geojson`,
  FLOOD_POINTS: `${urls.RESOURCES}/reach/FloodPoints_2016_12.geojson`,
  FLOOD_POINTS_UNICEF: `${urls.RESOURCES}/reach/FloodPoints_UNICEF_2016_12.geojson`,
  FLOOD_LINES: `${urls.RESOURCES}/reach/FloodLines_2016_12.geojson`,
  FLOOD_WATER_PATH: `${urls.RESOURCES}/reach/FloodWaterPath_2015_11.geojson`,
  HOUSEHOLDS: `${urls.RESOURCES}/reach/Households_2017_04.csv`,
  PIPES_SEPTIC: `${urls.RESOURCES}/reach/Pipes_Septic_2017_03.geojson`,
  PIPES_SOLID_FREE: `${urls.RESOURCES}/reach/Pipes_SolidFree_2017_03.geojson`,
  SEPTIC_TANKS: `${urls.RESOURCES}/reach/SepticTanks_2017_04.csv`,
  STEEL_TANKS: `${urls.RESOURCES}/reach/SteelTanks_2017_04.csv`,
  WWN_CAMP: `${urls.RESOURCE_CENTRE}/reach_jor_map_zaatari_ccm_wwn_progress_jun2016_a1.pdf`,
  WWN_DISTRICT: `${urls.RESOURCE_CENTRE}/reach_jor_map_zaatari_ccm_wwn_septic_tanks_by_district_june2016_a1_0.pdf`,
};

export default reach;
