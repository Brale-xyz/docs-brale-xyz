import { ReactNode } from 'react';

type Props = Readonly<{
  children: React.ReactNode;
  href: string;
  title: string;
  className?: string;
}>;

export function ExternalLink({ children, ...rest }: Props): ReactNode {
  return (
    <a rel="noreferrer" target="_blank" {...rest}>
      {children}
    </a>
  );
}
