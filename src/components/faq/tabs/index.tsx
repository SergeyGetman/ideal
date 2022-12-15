import { t } from 'ttag';
import clsx from 'clsx';
import { useUrlQueries } from '@hooks/useUrlQueries';
import { ButtonBase, Text, Box } from '@ui';

// styles
import { useStyles } from './styles';

const TABS = [
  {
    icon: 'flag',
    value: 'start',
    caption: t`Getting started`,
    description: t`In this section, we have collected all the possible questions and answers you are interested in on the topic "how to start playing with a Pokercast"`,
  },
  {
    icon: 'user',
    value: 'user',
    caption: t`User area`,
    description: '',
  },
  {
    icon: 'deposit',
    value: 'deposit',
    caption: t`Deposit & withdrawal`,
    description: '',
  },
  {
    icon: 'mobile_app',
    value: 'app',
    caption: t`Mobile application`,
    description: '',
  },
];

export const Tabs = () => {
  const classes = useStyles({});
  const { urlQueries, onSetQueries } = useUrlQueries();

  const activeTab = !urlQueries['search']
    ? urlQueries['category']
      ? TABS.find((tab) => tab.value === urlQueries['category'])
      : TABS[0]
    : null;

  return (
    <>
      <ul className={classes.list}>
        {TABS.map((tab, index) => {
          const isActive = tab.value === activeTab?.value;
          return (
            <li key={index} className={classes.item}>
              <ButtonBase
                className={clsx(classes.button, isActive && classes.buttonActive)}
                onClick={() => onSetQueries({ category: tab.value })}
              >
                <span className={classes.buttonContent}>
                  <span className={clsx(classes.buttonIcon, 'glyph', `glyph-${tab.icon}`)}></span>
                  <span className={classes.buttonCaption}>{tab.caption}</span>
                </span>
              </ButtonBase>
            </li>
          );
        })}
      </ul>
      {!!activeTab && (
        <Box sx={{ mt: '30px' }}>
          <Text variant="h3" className={classes.headingOfQueryList}>
            {activeTab.caption}
          </Text>
          {activeTab.description && (
            <div className={classes.description}>
              <Text variant="subtitle1" align="center" color="rgba(101, 108, 145, 0.8)">
                {activeTab.description}
              </Text>
            </div>
          )}
        </Box>
      )}
    </>
  );
};
