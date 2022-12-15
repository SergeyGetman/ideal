import { Form, Formik } from 'formik';
import { IconButton } from '@ui';

// icons
import CrossIcon from '@svg_icons/cross.svg';

// styles
import { useStyles } from '../styles';
import PreSignUpSubmitError from '@components/auth/preSignUp/preSignUpSubmitError';
import PreSignUpSubmitSuccess from '@components/auth/preSignUp/preSignUpSubmitSuccess';
import PreSignUpSideBar from '@components/auth/preSignUp/preSignUpSideBar';
import PreSignUpFormFields from '@components/auth/preSignUp/preSignUpFormFields';
import BirthDayBackground from '@components/auth/preSignUp/birthDayBackground';
import { usePreSignUpFormController } from '@components/auth/preSignUp/hooks';

export const PreSignUp = ({ data, bgRef, onClose }) => {
  const { response, formikConfig } = usePreSignUpFormController({
    extraFormData: data,
  });
  const classes = useStyles({});

  return (
    <Formik {...formikConfig}>
      <Form>
        <BirthDayBackground canShowMessage={!response} ref={bgRef} />
        <div className={classes.root}>
          <div className={classes.formHolder}>
            {!response ? (
              <PreSignUpFormFields countriesList={data.countryList} country={data.country} />
            ) : (
              <>{response === 'error' ? <PreSignUpSubmitError /> : <PreSignUpSubmitSuccess />}</>
            )}
            <IconButton
              className={classes.close}
              iconColor="#3E4776"
              iconSize={20}
              glyph={CrossIcon}
              onClick={onClose}
            />
          </div>
          <PreSignUpSideBar />
        </div>
      </Form>
    </Formik>
  );
};
