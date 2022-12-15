import { join } from 'path';

export const pathJoin = (path) => join(__dirname, path);

export const isProduction = process.argv[process.argv.indexOf('--mode') + 1] === 'production';
export const isDevelopment = !isProduction;

export const aliasItems = {
  '@components': pathJoin('../src/components'),
  '@contexts': pathJoin('../src/contexts'),
  '@hooks': pathJoin('../src/hooks'),
  '@routing': pathJoin('../src/routing'),
  '@svg_icons': pathJoin('../src/svg_icons'),
  '@ui': pathJoin('../src/ui'),
  '@utils': pathJoin('../src/utils'),
  '@containers': pathJoin('../src/containers'),
};
