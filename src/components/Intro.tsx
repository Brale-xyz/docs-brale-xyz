import { ReactNode } from 'react';

type IntroProps = Readonly<{
  heading: string;
  subheading?: ReactNode;
}>;

export function Intro({ heading, subheading }: IntroProps): ReactNode {
  return (
    <div className="mb-10 flex justify-between border-x-0 border-b-[1px] border-t-0 border-solid border-gray-300 pb-6 dark:border-gray-700">
      <div>
        <h1>{heading}</h1>
        {subheading && <p className="text-xl">{subheading}</p>}
      </div>
    </div>
  );
}
