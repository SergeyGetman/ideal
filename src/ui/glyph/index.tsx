import { FC, memo } from 'react';
import clsx from 'clsx';

// types
type GlyphProps = {
  name?: string;
  className?: string;
};

export const Glyph: FC<GlyphProps> = memo(({ name, className }: GlyphProps) => {
  return <span className={clsx(className, 'glyph', `glyph-${name}`)} />;
});

Glyph.defaultProps = {
  className: null,
};
