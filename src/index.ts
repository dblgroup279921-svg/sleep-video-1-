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
        padding: '40px', // মোবাইল স্ক্রিনের জন্য চারপাশে কিছুটা মার্জিন
      }}
    >
      <h1
        style={{
          fontSize: '70px', // ওপরে-নিচে লম্বা স্ক্রিনের জন্য ফন্ট সাইজ কিছুটা কমানো হয়েছে
          fontFamily: 'system-ui, -apple-system, sans-serif',
          color: '#58a6ff',
          opacity: opacity,
          fontWeight: 800,
          textAlign: 'center', // টেক্সটটি যেন লাইনের মাঝখানে থাকে
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
      width={1080}   // প্রস্থ ১০৮০ পিক্সেল (9:16)
      height={1920}  // উচ্চতা ১৯২০ পিক্সেল (9:16)
    />
  );
};

registerRoot(RemotionRoot);
