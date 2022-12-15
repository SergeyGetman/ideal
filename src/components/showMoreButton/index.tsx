import { t } from 'ttag';
import { Text, Button } from '@ui';

// styles
import { useStyles } from './styles';

export const ShowMoreButton = ({ size, loading, disabled, caption, onClick }) => {
  const classes = useStyles({});

  const handleCLick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    onClick();
  };

  return (
    <div className={classes.root}>
      <Button size={size} fullWidth loading={loading} disabled={disabled} variant="outlined" onClick={handleCLick}>
        <Text color="#E33355">
          <b>{caption}</b>
        </Text>
      </Button>
    </div>
  );
};

ShowMoreButton.defaultProps = {
  size: 'large',
  disabled: false,
  loading: false,
  caption: t`Show more`,
};
