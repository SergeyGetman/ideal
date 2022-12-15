import { useLocale } from './hook';

// HOC
export function withLocale(Component) {
  return function Wrapper(props) {
    const localeData = useLocale();
    return <Component {...props} {...localeData} />;
  };
}
