import React from 'react';

type YouTubeProps = Readonly<{
  videoId: string;
  className?: string;
}>;

export function YouTubeEmbed({ videoId, className = '' }: YouTubeProps): React.ReactElement {
  return (
    <div className={`global-rounded global-border mt-8 overflow-clip ${className}`}>
      <div className="relative w-full pt-[56.25%]">
        <iframe
          data-testid="youtube"
          title={`youTube-${videoId}`}
          src={`https://www.youtube.com/embed/${videoId}?color=white&rel=0`}
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute left-0 top-0 h-full w-full border-none"
        ></iframe>
      </div>
    </div>
  );
}
