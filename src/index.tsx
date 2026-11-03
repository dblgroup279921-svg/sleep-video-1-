import { registerRoot, Composition, AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
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
        padding: '40px', // টেক্সট ফিক্স করার জন্য উপাদান কিছুটা নামানো
      }}
    >
      <h1
        style={{
          fontSize: '70px', // ওপর-নিচ লম্বা স্ক্রিনের জন্য ফন্ট সাইজ কিছুটা কমানো
          fontFamily: 'system-ui, -apple-system, sans-serif',
          color: '#58a6ff',
          opacity: opacity,
          fontWeight: 800,
          textAlign: 'center', // টেক্সটটি মাঝ পজিশনে রাখার জন্য
          lineHeight: 1.2,
        }}
      >
        Sleep Motion Video
      </h1>
    </AbsoluteFill>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="Main"
      component={VideoComponent}
      durationInFrames={150}
      fps={30}
      width={1080} // এটি ৯:১৬ রেশিও (9:16)
      height={1920} // এটি ৯:১৬ রেশিও (9:16)
    />
  );
};

registerRoot(RemotionRoot);
