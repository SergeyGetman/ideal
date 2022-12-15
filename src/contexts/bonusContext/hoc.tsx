import { useBonusConfig } from './hook';

// HOC
export function withBonusConfig(Component) {
  return function Wrapper(props) {
    const bonusConfig = useBonusConfig();
    return <Component {...props} {...bonusConfig} />;
  };
}
