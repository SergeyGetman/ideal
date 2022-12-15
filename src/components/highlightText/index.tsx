import { makeStyles } from '@utils/styles';
import { isNotEmptyArray } from '@utils/common';

// styles
const useStyles = makeStyles(() => ({
  highlight: {
    '& mark': {
      backgroundColor: '#EAE223',
    },
  },
}));

export const HighlightText = ({ children, searchValue, searchSeparator, caseSensitive }) => {
  if (!children) return null;
  if (!searchValue) return children;

  const classes = useStyles({});
  const searchParts = searchValue.split(searchSeparator);
  const sourceArray = children.split('');

  const transformString = (string) => (caseSensitive ? string : string.toLowerCase());

  let renderHtml = '';
  const coincidenceIndexArray = [];

  for (const part of searchParts) {
    const coincidenceIndex = transformString(children).indexOf(transformString(part));
    if (coincidenceIndex >= 0) {
      for (let i = coincidenceIndex; i < coincidenceIndex + part.length; i++) {
        coincidenceIndexArray.push(i);
      }
    }
  }

  for (const [index, chart] of sourceArray.entries()) {
    renderHtml = coincidenceIndexArray.includes(index)
      ? renderHtml.concat('<mark>', chart, '</mark>')
      : renderHtml.concat(chart);
  }

  return isNotEmptyArray(coincidenceIndexArray) ? (
    <span dangerouslySetInnerHTML={{ __html: renderHtml }} className={classes.highlight} />
  ) : (
    children
  );
};

HighlightText.defaultProps = {
  searchValue: '',
  searchSeparator: ' ',
  caseSensitive: false,
};
