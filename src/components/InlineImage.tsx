import { ReactNode } from 'react';

import { ExternalLink } from '@site/src/components';
import { formatUrl } from '@site/src/lib';

type BaseImage = Readonly<{
  alt: string;
  externalSrc?: string;
  externalSrcTitle?: string;
  imgClass?: string;
  cropClass?: string;
  caption?: string;
}>;

type ImageBothModes = BaseImage & {
  srcLight: string;
  srcDark: string;
};

type ImageLightOnly = BaseImage & {
  srcLight: string;
  srcDark?: never;
};

type ImageDarkOnly = BaseImage & {
  srcLight?: never;
  srcDark: string;
};

export type Image = ImageBothModes | ImageLightOnly | ImageDarkOnly;

export function InlineImage({
  srcLight,
  srcDark,
  alt,
  externalSrc,
  externalSrcTitle,
  imgClass,
  cropClass,
  caption,
}: Image): ReactNode {
  return (
    <div className="not-prose mb-10 mt-8 flex flex-col gap-y-4">
      <div className="round overflow-hidden border border-primary">
        <div className={cropClass}>
          {srcLight && (
            <img
              src={srcLight}
              alt={alt}
              className={`${imgClass ?? ''} ${srcDark ? 'block dark:hidden' : 'block'}`}
            />
          )}
          {srcDark && (
            <img
              src={srcDark}
              alt={alt}
              className={`${imgClass ?? ''} ${srcLight ? 'hidden dark:block' : 'block'}`}
            />
          )}
        </div>
      </div>
      {(externalSrc || caption) && (
        <div className="not-prose flex flex-col gap-y-3 text-sm text-gray-500 dark:text-gray-400">
          {caption && (
            <div className="text-sm text-gray-500 dark:text-gray-400 md:hidden">{caption}</div>
          )}
          <div className="flex">
            <div
              className={`flex ${
                externalSrc && caption
                  ? 'flex-col gap-y-3 md:w-full md:flex-row md:items-center md:justify-between md:gap-x-4'
                  : ''
              }`}
            >
              {externalSrc && (
                <div className="flex shrink-0 items-center gap-x-1">
                  <span>Source: </span>
                  <ExternalLink
                    href={externalSrc}
                    title={externalSrcTitle}
                    className="flex items-center gap-x-1 text-primary underline hover:no-underline print:no-underline"
                  >
                    <span>{formatUrl(externalSrc)}</span>
                  </ExternalLink>
                </div>
              )}
              {caption && (
                <div className="hidden text-sm text-gray-500 dark:text-gray-400 md:block">
                  {caption}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
