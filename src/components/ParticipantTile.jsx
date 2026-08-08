import React, { useState, useEffect } from 'react';
import { getInitials, getTileGradient, getAvatarColor } from '../data/participants';

const MicMutedIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"/>
  </svg>
);

const MicOnIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
  </svg>
);

// Speaking bars animation
const SpeakingBars = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '16px' }}>
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        style={{
          width: '3px',
          borderRadius: '2px',
          backgroundColor: '#34a853',
          animation: `speakBar 0.5s ease-in-out ${i * 0.15}s infinite alternate`,
        }}
      />
    ))}
  </div>
);

export default function ParticipantTile({ participant, size = 'normal', isNew = false }) {
  const [speaking, setSpeaking] = useState(false);
  const [animateIn, setAnimateIn] = useState(isNew);

  useEffect(() => {
    if (isNew) {
      const t = setTimeout(() => setAnimateIn(false), 700);
      return () => clearTimeout(t);
    }
  }, [isNew]);

  // Randomised speaking simulation — only for unmuted participants
  useEffect(() => {
    if (participant.muted) return;
    // Stagger start so not everyone "speaks" at the same time
    const startDelay = Math.random() * 4000;
    let interval;
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        const willSpeak = Math.random() < 0.12;
        if (willSpeak) {
          setSpeaking(true);
          setTimeout(() => setSpeaking(false), 900 + Math.random() * 1400);
        }
      }, 2500 + Math.random() * 3000);
    }, startDelay);
    return () => { clearTimeout(startTimer); clearInterval(interval); };
  }, [participant.muted]);

  const gradient = getTileGradient(participant.name);
  const avatarBg  = getAvatarColor(participant.name);
  const initials  = getInitials(participant.name);

  // Avatar size: fluid based on tile size prop
  const avatarDim = {
    large:  { w: 88, h: 88, font: 32 },
    normal: { w: 72, h: 72, font: 26 },
    small:  { w: 56, h: 56, font: 20 },
    tiny:   { w: 44, h: 44, font: 16 },
    micro:  { w: 34, h: 34, font: 12 },
  }[size] || { w: 64, h: 64, font: 22 };

  return (
    <div
      className="tile-enter"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        overflow: 'hidden',
        background: gradient,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: speaking
          ? '2px solid #34a853'
          : animateIn
          ? '2px solid #1a73e8'
          : '2px solid transparent',
        transition: 'border-color 0.25s ease',
        boxShadow: speaking
          ? '0 0 0 3px rgba(52,168,83,0.35)'
          : animateIn
          ? '0 0 0 3px rgba(26,115,232,0.45)'
          : 'none',
      }}
    >
      {/* Gradient avatar circle */}
      <div
        style={{
          width: avatarDim.w,
          height: avatarDim.h,
          borderRadius: '50%',
          backgroundColor: avatarBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: avatarDim.font,
          fontWeight: 600,
          color: '#fff',
          userSelect: 'none',
          letterSpacing: '0.5px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          flexShrink: 0,
        }}
      >
        {initials}
      </div>

      {/* Bottom name bar — gradient scrim */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '20px 10px 7px',
          background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 6,
        }}
      >
        {/* Speaking bars OR mic icon on left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
          {speaking ? (
            <SpeakingBars />
          ) : (
            <span style={{ color: participant.muted ? '#f28b82' : 'rgba(255,255,255,0.7)' }}>
              {participant.muted ? <MicMutedIcon /> : <MicOnIcon />}
            </span>
          )}
        </div>

        {/* Name */}
        <span
          style={{
            flex: 1,
            color: '#fff',
            fontWeight: 500,
            fontSize: size === 'micro' ? 10 : size === 'tiny' ? 11 : size === 'small' ? 12 : 13,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            textShadow: '0 1px 3px rgba(0,0,0,0.8)',
          }}
        >
          {participant.isYou ? `${participant.name} (You)` : participant.name}
        </span>
      </div>

      {/* "NEW" badge briefly on join */}
      {animateIn && (
        <div
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            background: '#1a73e8',
            color: '#fff',
            fontSize: 10,
            fontWeight: 600,
            borderRadius: 4,
            padding: '2px 6px',
            letterSpacing: '0.5px',
          }}
        >
          JOINED
        </div>
      )}
    </div>
  );
}
