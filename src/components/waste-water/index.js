import React from 'react';
import radium from 'radium';
import styles from '../../styles/index.js';
import Header from '../common/header/index.js';
import Footer from '../common/footer/index.js';
import SidebarHome from '../common/home/index.js';
import SidebarLayers from './sidebar-layers/index.js';
import SidebarInfo from './sidebar-info/index.js';
import MapboxGL from './mapbox-gl/index.js';
import { ARABIC } from '../../constants/language.js';
import { IMG } from '../../constants/resources.js';
import MESSAGES from '../../messages/waste-water.js';

export default radium(({ state }) => (
  <div dir={state.lang === ARABIC ? 'rtl' : 'ltr'}
       style={{
         ...styles.flex.vertical.normal,
         fontFamily: styles.font.default,
       }}>
    <Header MESSAGES={MESSAGES}
            state={state} />
    <div style={{
      ...styles.flex.vertical.left,
      ...styles.flex.item.space,
      position: 'relative',
      width: '100%',
    }}>
      <SidebarHome state={state} />
      <SidebarInfo state={state} />
      <SidebarLayers state={state} />
      <MapboxGL state={state} />
    </div>
    <Footer donorLogo={IMG.LOGO_UNHCR} />
  </div>
));
