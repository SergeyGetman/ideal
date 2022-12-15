import { useEffect } from 'react';
import { t } from 'ttag';
import { PageBody } from '@components/page';
import { PageHeader } from '@components/pageHeader';
import { CollapseList } from '@components/collapseList';
import { Feedback } from '@components/feedback';
import { Grid, Text } from '@ui';
import {
  IOS_DOWNLOAD_URL,
  MACOS_DOWNLOAD_URL,
  ANDROID_DOWNLOAD_URL,
  WINDOWS_DOWNLOAD_URL,
  WINDOWS_ONLINE_DOWNLOAD_URL,
} from '@utils/constants';
import { handleAutoDownload } from '@utils/downloadApp';

// styles
import { useStyles } from './styles';

export const Download = () => {
  const classes = useStyles({});

  useEffect(() => {
    handleAutoDownload();
  }, []);

  return (
    <div className={classes.root}>
      <PageHeader rootClassName={classes.header} title={t`Thank you for downloading PokerCasta`} />
      <div className={classes.container}>
        <div className={classes.content}>
          <PageBody>
            <Grid container direction="column" className={classes.gridContainer} wrap="nowrap">
              <Grid item>
                <Text variant="h3" align="center" gutterBottom>
                  {t`The app downloading will now start automatically...`}
                </Text>
                <Text color="#656C91" align="center" style={{ fontSize: 16 }}>
                  {t`Having issues installing?`}{' '}
                  <a href={'#guide'} target="_blank" rel="noreferrer" className={classes.guideLink}>
                    {t`Installation Guide`}
                  </a>
                </Text>
              </Grid>
              <Grid item>
                <Text variant="h4" align="center">
                  {t`If you need a different version of the installation package for a different operating system, you can find it here`}
                </Text>
                <div className={classes.listHolder}>
                  <CollapseList
                    collapse={true}
                    list={[
                      {
                        title: t`All available versions of the PokerCasta app`,
                        text: (
                          <ul className={classes.downloadList}>
                            <li>
                              {t`For Windows (XP, Vista, 7, 8, 10)`}
                              {' - '}
                              {t`Download `}
                              <a href={WINDOWS_ONLINE_DOWNLOAD_URL} rel="noreferrer" className={classes.downloadLink}>
                                {t`PokerCastaOnlineInstaller.exe`}
                              </a>
                              {t` or `}
                              <a href={WINDOWS_DOWNLOAD_URL} rel="noreferrer" className={classes.downloadLink}>
                                {t`PokerCastaInstaller.exe`}
                              </a>
                              {t` installation file`}
                            </li>
                            <li>
                              {t`For MacOS X (Lion, Mavericks, Yosemite, El Capitan, Sierra, High Sierra, Mohave)`}
                              {' - '}
                              {t`Download `}
                              <a href={MACOS_DOWNLOAD_URL} rel="noreferrer" className={classes.downloadLink}>
                                {t`PokerCastaInstaller.dmg`}
                              </a>
                              {t` installation file`}
                            </li>
                            <li>
                              {t`For Android (12.0.2)`}
                              {' - '}
                              {t`Download `}
                              <a href={ANDROID_DOWNLOAD_URL} rel="noreferrer" className={classes.downloadLink}>
                                {t`PokerCastaInstaller.apk`}
                              </a>
                              {t` installation file`}
                            </li>
                            <li>
                              {t`For iOS (14.5.1)`}
                              {' - '}
                              {t`Visit `}
                              <a
                                href={IOS_DOWNLOAD_URL}
                                target="_blank"
                                rel="noreferrer"
                                className={classes.downloadLink}
                              >
                                {t`App Store`}
                              </a>
                            </li>
                          </ul>
                        ),
                      },
                    ]}
                  />
                </div>
              </Grid>
              <Grid display="none" item>
                <Feedback />
              </Grid>
            </Grid>
          </PageBody>
        </div>
      </div>
    </div>
  );
};
