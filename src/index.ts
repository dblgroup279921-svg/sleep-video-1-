import { registerRoot, Composition, AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import React from 'react';

// ১. ভিডিওর মূল ডিজাইন ও অ্যানিমেশন (Component)
const VideoComponent: React.FC = () => {
  const frame = useCurrentFrame();

  // টেক্সটটি ১ সেকেন্ডের মধ্যে মসৃণভাবে ভেসে ওঠার জন্য (Fade-in)
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0d1117', // একটি সুন্দর ডার্ক থিম ব্যাকগ্রাউন্ড
      }}
    >
      <h1
        style={{
          fontSize: '90px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          color: '#58a6ff', // আকর্ষণীয় সায়ান/ব্লু কালার
          opacity: opacity,
          fontWeight: 800,
        }}
      >
        Sleep Motion Video
      </h1>
    </AbsoluteFill>
  );
};

// ২. রুট কনফিগারেশন (Root)
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Main"                 // আপনার package.json-এর "npm run render" স্ক্রিপ্টের সাথে হুবহু মিল রাখা হয়েছে
        component={VideoComponent}
        durationInFrames={150}    // ৩০ fps হিসেবে ভিডিওটি মোট ৫ সেকেন্ড লম্ব হবে
        fps={30}
        width={1920}              // Full HD Width
        height={1080}             // Full HD Height
      />
    </>
  );
};

registerRoot(RemotionRoot);
