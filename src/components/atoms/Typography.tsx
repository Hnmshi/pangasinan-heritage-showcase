import { HTMLAttributes, ElementType } from 'react';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'bodySmall' | 'caption' | 'overline';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: ElementType;
  children: React.ReactNode;
}

const variantConfig: Record<TypographyVariant, { tag: ElementType; classes: string }> = {
  h1: { tag: 'h1', classes: 'font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-neutral-800' },
  h2: { tag: 'h2', classes: 'font-display text-2xl md:text-3xl font-bold leading-tight text-neutral-800' },
  h3: { tag: 'h3', classes: 'font-display text-xl md:text-2xl font-semibold leading-snug text-neutral-700' },
  h4: { tag: 'h4', classes: 'font-body text-lg md:text-xl font-semibold leading-snug text-neutral-700' },
  body: { tag: 'p', classes: 'font-body text-base leading-relaxed text-neutral-600' },
  bodySmall: { tag: 'p', classes: 'font-body text-sm leading-relaxed text-neutral-500' },
  caption: { tag: 'span', classes: 'font-body text-xs leading-normal text-neutral-400' },
  overline: { tag: 'span', classes: 'font-body text-xs font-semibold uppercase tracking-widest text-primary-500' },
};

export default function Typography({ variant = 'body', as, className = '', children, ...props }: TypographyProps) {
  const { tag, classes } = variantConfig[variant];
  const Component = as || tag;
  return <Component className={`${classes} ${className}`} {...props}>{children}</Component>;
}
