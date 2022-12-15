import { t } from 'ttag';
import { PageBody } from '@components/page';
import { PageHeader } from '@components/pageHeader';
import { ContactsForm } from './form';
import { Grid } from '@ui';
import { SUPPORT_CONTACTS, CONTACTS } from './utils';

// styles
import { useStyles } from './styles';

export const Contacts = () => {
  const classes = useStyles({});

  const renderItem = (item, index) => {
    if (!item.url) return '';
    return (
      <li key={index} className={classes.listItem}>
        <a className={classes.iconHolder} href={item.url} target="_blank" rel="noreferrer">
          <img className={classes.icon} src={item.icon} alt={item.caption} />
        </a>
        <div>
          <span className={classes.itemTitle}>{item.title}</span>
          <a className={classes.itemLink} href={item.url} target="_blank" rel="noreferrer">
            {item.caption}
          </a>
        </div>
      </li>
    );
  };

  return (
    <div className={classes.root}>
      <PageHeader
        rootClassName={classes.header}
        headerClassName={classes.headerBg}
        title={t`Feel free to contact us, we’re very friendly`}
      />
      <div className={classes.container}>
        <PageBody>
          <div className={classes.content}>
            <div className={classes.contactsInformationTextBox}>
              <p className={classes.contactsInformationText}>
                {t`We love all our users and are attentive to all requirements and wishes regarding our service.`}
              </p>
            </div>
            <Grid className={classes.contactsBox} container direction="column" spacing={6} wrap="nowrap">
              <Grid item>
                <div className={classes.supportHolder}>
                  <div className={classes.supportHeader}>{t`Support`}</div>
                  <div className={classes.listHolder}>
                    <ul className={classes.list}>{SUPPORT_CONTACTS.map(renderItem)}</ul>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <p className={classes.sectionTitle}>{t`Social contacts`}</p>
                <div className={classes.listHolder}>
                  <ul className={classes.list}>{CONTACTS.map(renderItem)}</ul>
                </div>
              </Grid>
            </Grid>
            <div className={classes.formHolder}>
              <ContactsForm />
            </div>
          </div>
        </PageBody>
      </div>
    </div>
  );
};
