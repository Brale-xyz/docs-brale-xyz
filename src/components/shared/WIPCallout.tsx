import { ReactNode } from 'react';

type Props = Readonly<{
  callout: ReactNode;
}>;

export function WIPCallout({ callout }: Props): ReactNode {
  return (
    <div className="prose my-5 flex items-start gap-2">
      <div className="mt-[10px] h-2 w-2 flex-shrink-0 rounded-full bg-yellow-600 dark:bg-yellow-500"></div>
      <p className="m-0 text-yellow-600 dark:text-yellow-500 [&_a]:text-yellow-600 dark:[&_a]:text-yellow-500">
        {callout}
      </p>
    </div>
  );
}
