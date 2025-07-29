import React from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type { WrapperProps } from '@docusaurus/types';
import IntercomWidget from '@site/src/components/IntercomWidget';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): React.JSX.Element {
  return (
    <>
      <Layout {...props} />
      <IntercomWidget />
    </>
  );
}
