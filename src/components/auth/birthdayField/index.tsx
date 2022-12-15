import { t } from 'ttag';
import { TextMaskField } from '@components/form';
import { Text, Grid, FormControl, FormHelperText } from '@ui';
import { FieldLabel } from '@components/fieldLabel';

// styles
import { useStyles } from './styles';

import { useCallback, useEffect, useRef } from 'react';

export const BirthdayField = ({ name, error, helperText, dayInputRef }) => {
  const classes = useStyles({});
  const monthInputRef = useRef(null);
  const yearInput = useRef(null);

  const dayChangeHandler = useCallback(
    (e) => {
      if (e.target.value.length >= 2) {
        monthInputRef.current.firstElementChild.focus();
      }
    },
    [monthInputRef],
  );

  const yearDayChangeHandler = useCallback(
    (e) => {
      if (e.target.value.length >= 2) {
        yearInput.current.firstElementChild.focus();
      }
    },
    [yearInput],
  );

  return (
    <>
      <FormControl fullWidth>{<FieldLabel label={t`Birthday` + ' *'} error={error} />}</FormControl>
      <Grid container alignItems="flex-end" spacing={3} wrap="nowrap">
        <Grid item>
          <Text color="#656C91">{t`Day`}</Text>
          <TextMaskField
            name={`${name}.day`}
            mask={[/\d/, /\d/]}
            autoComplete="off"
            placeholder="DD"
            autoFocus
            onInput={dayChangeHandler}
            inputRef={dayInputRef}
          />
        </Grid>
        <Grid item>
          <span className={classes.spacer}>{'/'}</span>
        </Grid>
        <Grid item>
          <Text color="#656C91">{t`Month`}</Text>
          <TextMaskField
            name={`${name}.month`}
            mask={[/\d/, /\d/]}
            autoComplete="off"
            showHelper={false}
            placeholder="MM"
            inputRef={monthInputRef}
            onInput={yearDayChangeHandler}
          />
        </Grid>
        <Grid item>
          <span className={classes.spacer}>{'/'}</span>
        </Grid>
        <Grid item>
          <Text color="#656C91">{t`Year`}</Text>
          <TextMaskField
            name={`${name}.year`}
            mask={[/\d/, /\d/, /\d/, /\d/]}
            autoComplete="off"
            showHelper={false}
            placeholder="YYYY"
            inputRef={yearInput}
          />
        </Grid>
      </Grid>
      <FormControl fullWidth error={!!error}>
        {error && !!helperText ? <FormHelperText color="#E33355">{helperText}</FormHelperText> : null}
      </FormControl>
    </>
  );
};
// @ts-ignore
BirthdayField.defaultProps = {
  error: false,
};
