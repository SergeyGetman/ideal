import { t } from 'ttag';
import { Grid, Text } from '@ui';

export const UnderConstruction = ({ title, text }) => {
  return (
    <Grid container direction="column" spacing={5} wrap="nowrap">
      {!!title && (
        <Grid item>
          <Text variant="h3">{title}</Text>
        </Grid>
      )}
      {!!text && (
        <Grid item>
          <Text color="#656C91" style={{ fontSize: 16 }}>
            {text}
          </Text>
        </Grid>
      )}
    </Grid>
  );
};

UnderConstruction.defaultProps = {
  title: t`Under construction...`,
  text: t`All information for this page coming soon.`,
};
