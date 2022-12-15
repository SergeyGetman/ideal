import { CustomContent } from '@components/customContent';
import { ReadItemInfo } from '@components/readItemInfo';

// styles
import { useStyles } from './styles';

export const ArticlesRead = ({ data }) => {
  const classes = useStyles({});
  const { content, ...otherData } = data;

  return (
    <div className={classes.root}>
      <div className={classes.infoHolder}>
        <ReadItemInfo data={otherData} />
      </div>
      <div className={classes.contentHolder}>
        <CustomContent>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </CustomContent>
      </div>
    </div>
  );
};
