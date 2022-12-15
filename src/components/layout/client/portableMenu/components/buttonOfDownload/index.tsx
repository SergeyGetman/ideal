import { SITE_NAME } from '@utils/constants';
import { t } from 'ttag';
import { Glyph } from '@ui';
import { useStyles } from './styles';
import DownloadAppButtonContainer from '@containers/DownloadAppButtonContainer';

export const ButtonOfDownload = () => {
  const classes = useStyles({});

  return (
    <div className={classes.buttonDownloadHolder}>
      <DownloadAppButtonContainer className={classes.button}>
        <span className={classes.buttonDownloadCaption}>
          <Glyph name="button-arrow" className={classes.buttonArrow} />
          <span className={classes.buttonCaptionText}>
            {t`Download `}
            {SITE_NAME}
          </span>
        </span>
      </DownloadAppButtonContainer>
    </div>
  );
};
