import { HTMLAttributes, ElementType } from 'react';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'bodySmall' | 'caption' | 'overline';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: ElementType;
  children: React.ReactNode;
}

const variantConfig: Record<TypographyVariant, { tag: ElementType; classes: string }> = {
  h1: { tag: 'h1', classes: 'font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-neutral-900' },
  h2: { tag: 'h2', classes: 'font-display text-2xl md:text-3xl lg:text-4xl font-normal leading-tight text-neutral-900' },
  h3: { tag: 'h3', classes: 'font-display text-xl md:text-2xl font-normal leading-snug text-neutral-800' },
  h4: { tag: 'h4', classes: 'font-body text-lg md:text-xl font-semibold leading-snug text-neutral-800' },
  body: { tag: 'p', classes: 'font-body text-base leading-relaxed text-neutral-600' },
  bodySmall: { tag: 'p', classes: 'font-body text-sm leading-relaxed text-neutral-500' },
  caption: { tag: 'span', classes: 'font-body text-xs leading-normal text-neutral-400' },
  overline: { tag: 'span', classes: 'font-body text-[11px] font-bold uppercase tracking-[0.2em] text-primary-500' },
};

export default function Typography({ variant = 'body', as, className = '', children, ...props }: TypographyProps) {
  const { tag, classes } = variantConfig[variant];
  const Component = as || tag;
  return <Component className={`${classes} ${className}`} {...props}>{children}</Component>;
}
