import { t } from 'ttag';
import { PageBody } from '@components/page';
import { PageHeader } from '@components/pageHeader';
// import { CustomContent } from '@components/customContent';
// import { Text, Box } from '@ui';
import { FILES, getFileIcon } from './utils';

// styles
import { useStyles } from './styles';

export const Polices = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <PageHeader
        rootClassName={classes.header}
        headerClassName={classes.headerBg}
        title={t`General terms & conditions, Gaming & CUSTOMER POLICY`}
      />
      <div className={classes.container}>
        <PageBody>
          <div className={classes.content}>
            {/*
            <Text variant="h3" color="textPrimary" gutterBottom>
              {t`Overview about our policy, terms and conditions`}
            </Text>
            <Text>
              {t`Below you will find our Privacy Policy which tells you about how we will process your personal data and about rights that you have under data protection. We strongly recommend that you familiarise yourself with this Privacy Policy. However, we understand that people have busy lives and so want to provide you with a quick overview of how we will use your personal data – please remember though that this first section is an overview only and should not be read instead of reading the full Privacy Policy below.`}
            </Text>
            */}

            <div className={classes.filedHolder}>
              <ul className={classes.files}>
                {FILES.map((item, index) => {
                  const fileType = item.url.split('.').pop();
                  return (
                    <li key={index} className={classes.filesItem}>
                      <a href={item.url} target="_blank" className={classes.fileIconLink} rel="noreferrer">
                        {fileType}
                        <img className={classes.fileIcon} src={getFileIcon(fileType)} alt={fileType} />
                      </a>
                      <a href={item.url} target="_blank" className={classes.fileName} rel="noreferrer">
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/*
            <Text>
              <b>{t`We process your personal data`}</b>&nbsp;
              {t`for the purposes discussed in detail below, but the two main purposes are to enable us to provide you with a service and to comply with our regulatory obligations, specifically:`}
            </Text>

            <CustomContent>
              <ul>
                <li>
                  {t`On the first of these, in order for us to offer you with a service we will need you to register a user account and provide bank details to deposit money.`}
                </li>
                <li>
                  {t`On the regulatory aspect, we are required to monitor our customers and to keep records of transactions to ensure that we are offering a fair, responsible and safe service – and this includes verifying your age and monitoring our customers to ensure that they are gambling within their means.`}
                </li>
              </ul>
            </CustomContent>

            <Box sx={{ mt: '30px' }}>
              <Text variant="h4" color="textPrimary" gutterBottom>
                {t`All documents you can find in this section`}
              </Text>
              <Text gutterBottom>
                {t`In order to provide you services, you will need to create a user account. When creating this user account, you will need to submit certain personal data such as your name, age, address and email. Additional information will also be required for you to utilise some of our services, such as your bank card details.`}
              </Text>
              <Text>
                {t`We also collect information about the transactions you make, including your gambling activity. We may collect personal data through surveys which we, or companies engaged by us for such purpose, undertake. In addition, we collect information about your use of our websites, mobile applications and services. We will also collect other information necessary for us to process your personal data for the purposes set out in this Privacy Policy.`}
              </Text>
            </Box>

            <Box sx={{ mt: '30px' }}>
              <Text variant="h4" color="textPrimary" gutterBottom>
                {t`Acceptance criteria for New Clients (based on their relevant risk)`}
              </Text>
              <Text gutterBottom>
                {t`The Client Acceptance Policy (hereinafter - “CAP”), following the principles and guidelines described in this Guidance, defines the criteria for accepting new Clients and determines the measure for classifying the Client that the Company must follow, and especially the employees who must participate in the process of opening of client accounts.`}
              </Text>
              <Text>
                {t`The CO is responsible for application all of the provisions of the CAP. As such, the Head of administration / back office staff / department / employee / officials must also assist the CO in implementing CAP, if required.`}
              </Text>
            </Box>
            */}
          </div>
        </PageBody>
      </div>
    </div>
  );
};
