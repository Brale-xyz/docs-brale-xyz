import { ReactNode } from 'react';
import CodeBlock from '@theme/CodeBlock';

type HTTPMethod = 'GET' | 'POST';

type HTTPMethodProps = Readonly<{
  method: HTTPMethod;
  endpoint: string;
}>;

function getMethodStyles(method: HTTPMethod): string {
  const baseClasses = 'global-border px-1.5 text-sm font-medium';

  switch (method) {
    case 'GET':
      return `${baseClasses} bg-green-100 text-green-800 border-green-400 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800`;
    case 'POST':
      return `${baseClasses} bg-blue-100 text-blue-800 border-blue-400 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-800 border-gray-400 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800`;
  }
}

export function HTTPMethod({ method, endpoint }: HTTPMethodProps): ReactNode {
  return (
    <div className="global-rounded global-border mb-5 flex items-center bg-white pl-4 dark:bg-gray-900">
      <code className={getMethodStyles(method)}>{method}</code>
      <div className="flex-1 overflow-x-auto whitespace-pre-wrap break-all">
        <CodeBlock className="m-0 grow border-none">{endpoint}</CodeBlock>
      </div>
    </div>
  );
}
