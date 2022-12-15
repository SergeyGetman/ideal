import { useState, useCallback } from 'react';
import { t } from 'ttag';
import { getCurrentDate } from '@utils/date'; // getDate
import { sortByKeyASC, thousandSeparator } from '@utils/common';
import { Text, Grid, Box, SwipeableDrawer, Skeleton } from '@ui'; // ButtonBase
import { DatePicker } from '@components/pickers/datePicker/async';
import { isoToCountryName, isoToFlag } from '@utils/countries';

// styles
import { useStyles } from './styles';

// data
import { useData } from './data';

const SKELETON_COUNT = 5;

export const Winners = () => {
  const classes = useStyles({});
  const [winnersDate, setWinnersDate] = useState(getCurrentDate());
  const [dateOpen, setDateOpen] = useState(false);

  const { isLoading, data } = useData({ date: winnersDate });

  const handleOpen = useCallback(() => setDateOpen(true), []);
  const handleClose = useCallback(() => setDateOpen(false), []);

  const handleChangeDate = (date) => {
    setDateOpen(false);
    setWinnersDate(date);
  };

  const getCountry = useCallback((iso) => {
    const countryText = isoToCountryName(iso);
    const countryFlag = isoToFlag(iso);

    return (
      <span className={classes.country}>
        {!!countryFlag && <i className={classes.countryFlag}>{countryFlag}</i>}
        <span>{countryText || iso}</span>
      </span>
    );
  }, []);

  return (
    <>
      <Box sx={{ marginBottom: '20px' }}>
        <Grid
          container
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={4}
        >
          <Grid item xs>
            <Text variant="h3" className={classes.title}>{t`Top tournament winners of the month`}</Text>
          </Grid>
          {/*<Grid item>
            <ButtonBase className={classes.dateButton} onClick={useCallback(() => setDateOpen(true), [])}>
              <span className={classes.buttonArrow} />
              <span>{getDate(winnersDate)}</span>
            </ButtonBase>
          </Grid>*/}
        </Grid>
      </Box>
      <div className={classes.tableHolder}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th className={classes.labelCell} style={{ width: 60 }}>{t`place`}</th>
              <th className={classes.labelCell} style={{ width: 200 }}>{t`player`}</th>
              <th className={classes.labelCell}>{t`country`}</th>
              <th className={classes.labelCell} style={{ width: 140 }}>{t`reward`}</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <>
                {[...Array(SKELETON_COUNT)].map((item, index) => {
                  return (
                    <tr key={index} className={classes.row}>
                      <td>
                        <span className={classes.place}>{index + 1}</span>
                      </td>
                      <td>
                        <Skeleton variant="text" width="80%" />
                      </td>
                      <td>
                        <Skeleton variant="text" width={60} />
                      </td>
                      <td>
                        <Skeleton variant="text" width="80%" />
                      </td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <>
                {sortByKeyASC(data, 'place').map((item) => (
                  <tr key={item.id} className={classes.row}>
                    <td>
                      <span className={classes.place}>{item.place}</span>
                    </td>
                    <td>{item.name}</td>
                    <td>{getCountry(item.country)}</td>
                    <td>
                      {'$'}
                      {thousandSeparator(item.reward)}
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      <SwipeableDrawer anchor="right" open={dateOpen} onOpen={handleOpen} onClose={handleClose}>
        <div className={classes.datePickerHolder}>
          <Text variant="h5" gutterBottom noWrap>
            {t`Select date`}:
          </Text>
          <DatePicker value={winnersDate} disableFuture onChange={handleChangeDate} />
        </div>
      </SwipeableDrawer>
    </>
  );
};
