import { ReactNode } from 'react';
import CodeBlock from '@theme/CodeBlock';

type HTTPMethodProps = Readonly<{
  method: string;
  endpoint: string;
}>;

export function HTTPMethod({ method, endpoint }: HTTPMethodProps): ReactNode {
  return (
    <div className="global-rounded global-border mb-5 flex items-center bg-white pl-4 dark:bg-gray-900">
      <code className="global-border bg-secondary px-1.5 text-sm">{method}</code>
      <div className="flex-1 overflow-x-auto whitespace-pre-wrap break-all">
        <CodeBlock language="shell" className="m-0 grow border-none">
          {endpoint}
        </CodeBlock>
      </div>
    </div>
  );
}
