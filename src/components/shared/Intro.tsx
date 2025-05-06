import { ReactNode } from 'react';

type IntroProps = Readonly<{
  heading: string;
  subheading?: string;
}>;

export function Intro({ heading, subheading }: IntroProps): ReactNode {
  return (
    <div className="mb-10 flex justify-between border-b border-gray-300 pb-6 dark:border-gray-700">
      <div>
        <h1>{heading}</h1>
        {subheading && <p className="text-xl leading-7">{subheading}</p>}
      </div>
    </div>
  );
}
