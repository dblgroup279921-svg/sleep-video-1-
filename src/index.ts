import { registerRoot, Composition, AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import React from 'react';

const VideoComponent: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0d1117',
      }}
    >
      <h1
        style={{
          fontSize: '90px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          color: '#58a6ff',
          opacity: opacity,
          fontWeight: 800,
        }}
      >
        Sleep Motion Video
      </h1>
    </AbsoluteFill>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Main"
        component={VideoComponent}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

registerRoot(RemotionRoot);
