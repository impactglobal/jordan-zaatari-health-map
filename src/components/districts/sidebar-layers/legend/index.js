import React from 'react';
import messages from '../../../../translations/districts.js';
import styles from '../../../../styles/index.js';
import * as colors from '../../../../constants/colors.js';
import LegendItem from '../../../common/legend/legend-item.js';

export default ({ state }) => (
  <div>
    <div className={styles.flex.verticalLeft}>
      <div className={styles.component.legendTitle}>
        {messages.legend.title[state.lang]}
      </div>
      <LegendItem color={colors.MEDIUM_BLUE}
                  name={messages.legend.acted[state.lang]} />
      <LegendItem color={colors.YELLOW}
                  name={messages.legend.jen[state.lang]} />
      <LegendItem color={colors.GREEN}
                  name={messages.legend.oxfam[state.lang]} />
    </div>
  </div>
);
