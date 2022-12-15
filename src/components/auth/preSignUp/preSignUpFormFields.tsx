import { Box, Button, FormControl, FormHelperText, Grid, Link, Text } from '@ui';
import { jt, t } from 'ttag';
import { AutocompleteField, CheckboxField, TextField } from '@components/form';
import { isoToFlag } from '@utils/countries';
import { getFilterOptions } from '@components/auth/utils';
import { BirthdayField } from '@components/auth/birthdayField';
import { useFormikContext } from 'formik';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { clientRouts } from '@routing/routs';
import { useGetCountries, useGetCountryCode } from '@components/auth/data';
import { useBgStyles } from '@components/auth/preSignUp/styles';

const PreSignUpFormFields = ({ countriesList, country }) => {
  const [ruleAge, setRuleAge] = useState(country?.age || 18);
  const { errors, values, isSubmitting, isValid, touched, setFieldTouched } = useFormikContext<any>();
  const { data: countries } = useGetCountries();

  const countryCode = useGetCountryCode();
  const classes = useBgStyles({});
  const dayInputRef = useRef(null);

  const termsLink = (
    <Link
      color="secondary"
      component={RouteLink}
      target="_blank"
      to={clientRouts.polices}
      key="termLink"
    >{t`terms and conditions`}</Link>
  );

  const textRef = useRef(null);

  useEffect(() => {
    if (countryCode) {
      setTimeout(() => {
        textRef.current.focus();
        setFieldTouched('email', false);
      });
    }
  }, [textRef, countryCode]);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key == 'Enter') {
        dayInputRef.current.firstElementChild.focus();
      }
    },

    [dayInputRef],
  );

  const getOptionLabel = (option) => {
    return option.name;
  };
  const getOptionDisabled = (option) => option.isBanned;
  const isOptionEqualToValue = (option, value) => option.code === value.code;

  return (
    <Grid container direction="column" justifyContent="center" spacing={6} wrap="nowrap">
      <Grid item>
        <Text variant="h3" component="div">{t`Sign up`}</Text>
      </Grid>
      <Grid item>
        <Grid container direction="column" spacing={6} wrap="nowrap">
          <Grid item>
            <TextField
              inputRef={textRef}
              required
              name="email"
              label={t`Email`}
              autoFocus
              autoComplete="on"
              showHelper
              placeholder={t`Enter your email`}
              onKeyPress={handleKeyPress}
            />
          </Grid>
          <Grid item>
            <AutocompleteField
              name="country"
              label={t`Country` + ' *'}
              placeholder={t`Select your country`}
              options={countries.map((country) => ({ ...country, isBanned: country.is_banned }))}
              getOptionLabel={getOptionLabel}
              getOptionDisabled={getOptionDisabled}
              isOptionEqualToValue={isOptionEqualToValue}
              showHelper
              startAdornment={
                values.country ? <span className={classes.spanStyle}>{isoToFlag(values.country.code)}</span> : null
              }
              renderOption={(props, option) => {
                return (
                  <Box component="li" sx={classes.root} {...props}>
                    <span>{isoToFlag(option.code)}</span>
                    {option.name} ({option.code})
                  </Box>
                );
              }}
              filterOptions={getFilterOptions}
              initialValue={countryCode}
            />
          </Grid>
          <Grid item>
            <BirthdayField
              error={!!touched?.birthdate && !!errors?.birthdate}
              name="birthdate"
              helperText={t`inputs must be: DD on 1 for 31 : MM on 1 for 12 : YYYY min 1940`}
              dayInputRef={dayInputRef}
            />
          </Grid>
          <Grid item>
            <Grid container direction="column" justifyContent="center" spacing={3} wrap="nowrap">
              <Grid item>
                <CheckboxField
                  label={jt`I agree with ${termsLink} and confirm I'm at least ${ruleAge} years old`}
                  name="adult"
                  required
                />
                {!!errors?.adult ? (
                  <FormControl fullWidth error={true}>
                    <FormHelperText color="#E33355">{errors?.adult}</FormHelperText>
                  </FormControl>
                ) : null}
              </Grid>
              <Grid item>
                <CheckboxField label={t`I would like to receive information by email and/or sms`} name="subscribe" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button className={classes.buttonStyle} loading={isSubmitting} fullWidth type="submit" disabled={!isValid}>
              {t`Sign up`}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PreSignUpFormFields;
