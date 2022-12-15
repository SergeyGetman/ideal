import { t } from 'ttag';
import { Grid, Text } from '@ui';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';
import { useStyles } from './styles';

interface BonusesProps {
  title: string;
  descriptionText: string;
  subTitle: string;
  missionText: string;
}

export const BonusesDescription = ({ title, descriptionText, subTitle, missionText }: BonusesProps) => {
  const classes = useStyles({});
  return (
    <>
      <div className={classes.content}>
        <Grid container direction="column" spacing={5} wrap="nowrap">
          {!!title && (
            <Grid item>
              <Text variant="h3">
                {title} <span className={classes.fireIcon} />
              </Text>
            </Grid>
          )}
          {!!descriptionText && (
            <Grid item>
              <Text className={classes.text}>{descriptionText}</Text>
            </Grid>
          )}
          {!!subTitle && (
            <Grid item>
              <Text className={classes.subTitle}>{subTitle}</Text>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon className={classes.marker} />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ style: listStyles }}
                    primary={t`Any bonus we offer should be easily understood and 
              easily explained to our audience.`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon className={classes.marker} />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ style: listStyles }}
                    primary={t`The only thing to care about is enhansing pleasure from playing the game.`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon className={classes.marker} />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ style: listStyles }}
                    primary={t`Any bonus should be awarded instantly.`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon className={classes.marker} />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ style: listStyles }}
                    primary={t`There should be no additional rules that may imply 
              cancelation, retrieval or blocking withdrawal of money including any bonus funds.`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon className={classes.marker} />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ style: listStyles }}
                    primary={t`If you qualify for the bonus, the money is yours - period.`}
                  />
                </ListItem>
              </List>
            </Grid>
          )}
          {!!missionText && (
            <Grid item>
              <Text className={classes.text}>{missionText}</Text>
            </Grid>
          )}
        </Grid>
      </div>
    </>
  );
};

BonusesDescription.defaultProps = {
  title: t`Fully transparent bonus policies`,
  descriptionText: t`Here, at PokerCasta, we take a fully transparent approach to making our bonus policies. 
  It's our conscious choice to make the rules as open and simple as possible.`,
  subTitle: t`Here are some basic points that are the cornerstone for our bonuses:`,
  missionText: t`We, at PokerCasta, aim to be the only room where you get your full bonuses with no strings attached.`,
};

const listStyles = {
  fontSize: 16,
  color: '#656C91',
};
