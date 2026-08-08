import React, { useState, useEffect } from 'react';
import { getInitials, getAvatarColor } from '../data/participants';

/* Zoom tile background colours — dark, muted, professional */
const ZOOM_BG = [
  '#1a1a2e', '#16213e', '#0f3460', '#1b1b2f',
  '#2d132c', '#1a1a1a', '#12232e', '#203a43',
  '#0d0d0d', '#1e272e', '#2c3e50', '#1c2833',
  '#17202a', '#1b2631', '#212f3d', '#2e4057',
];

function getTileBg(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  return ZOOM_BG[Math.abs(h) % ZOOM_BG.length];
}

/* Mic-muted red slash icon */
const MutedIcon = () => (
  <svg viewBox="0 0 24 24" fill="#F93939" width="12" height="12">
    <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"/>
  </svg>
);

/* Animated audio bars (green) shown when speaking */
const AudioBars = () => (
  <div style={{ display:'flex', alignItems:'flex-end', gap:2, height:14 }}>
    {[0,1,2,3].map(i => (
      <div key={i} style={{
        width: 3, borderRadius: 2,
        background: '#23D96C',
        animation: `speakBar 0.45s ease-in-out ${i*0.1}s infinite alternate`,
      }} />
    ))}
  </div>
);

const avatarDims = {
  large:  { wh: 80, font: 30 },
  normal: { wh: 64, font: 24 },
  small:  { wh: 50, font: 19 },
  tiny:   { wh: 38, font: 14 },
  micro:  { wh: 30, font: 11 },
};

export default function ParticipantTile({ participant, size = 'normal', isNew = false }) {
  const [speaking, setSpeaking] = useState(false);
  const [newBadge, setNewBadge] = useState(isNew);

  /* Clear "joined" badge after 1.2s */
  useEffect(() => {
    if (!isNew) return;
    const t = setTimeout(() => setNewBadge(false), 1200);
    return () => clearTimeout(t);
  }, [isNew]);

  /* Random speaking sim */
  useEffect(() => {
    if (participant.muted) return;
    const delay = Math.random() * 5000;
    let iv;
    const st = setTimeout(() => {
      iv = setInterval(() => {
        if (Math.random() < 0.11) {
          setSpeaking(true);
          setTimeout(() => setSpeaking(false), 800 + Math.random() * 1500);
        }
      }, 2800 + Math.random() * 2500);
    }, delay);
    return () => { clearTimeout(st); clearInterval(iv); };
  }, [participant.muted]);

  const bg      = getTileBg(participant.name);
  const avatarC = getAvatarColor(participant.name);
  const initials = getInitials(participant.name);
  const dim     = avatarDims[size] || avatarDims.normal;

  const nameSize = size === 'micro' ? 9 : size === 'tiny' ? 10 : size === 'small' ? 11 : 12;

  return (
    <div
      className={`tile-enter ${newBadge ? 'join-ring' : ''}`}
      style={{
        position: 'relative',
        width: '100%', height: '100%',
        background: bg,
        borderRadius: 8,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        /* Zoom speaking = thick green border */
        border: speaking
          ? '2px solid #23D96C'
          : newBadge
          ? '2px solid #2D8CFF'
          : '2px solid transparent',
        transition: 'border-color 0.2s ease',
      }}
    >
      {/* Avatar circle */}
      <div style={{
        width: dim.wh, height: dim.wh, borderRadius: '50%',
        background: avatarC,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: dim.font, fontWeight: 700, color: '#fff',
        userSelect: 'none', letterSpacing: '0.5px',
        flexShrink: 0,
      }}>
        {initials}
      </div>

      {/* Bottom name bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '18px 8px 6px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
        display: 'flex', alignItems: 'center', gap: 5,
      }}>
        {/* Mic status / audio bars */}
        <div style={{ flexShrink: 0, display:'flex', alignItems:'center' }}>
          {participant.muted
            ? <MutedIcon />
            : speaking
            ? <AudioBars />
            : <svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)" width="12" height="12">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
              </svg>
          }
        </div>

        {/* Name */}
        <span style={{
          flex: 1, color: '#fff', fontWeight: 500,
          fontSize: nameSize, whiteSpace: 'nowrap',
          overflow: 'hidden', textOverflow: 'ellipsis',
          textShadow: '0 1px 4px rgba(0,0,0,0.9)',
        }}>
          {participant.isYou ? `${participant.name} (You)` : participant.name}
        </span>
      </div>

      {/* "Joined" flash badge */}
      {newBadge && (
        <div style={{
          position:'absolute', top:7, right:7,
          background:'#2D8CFF', color:'#fff',
          fontSize: 9, fontWeight: 700,
          borderRadius: 4, padding:'2px 6px',
          letterSpacing:'0.4px',
        }}>
          JOINED
        </div>
      )}

      {/* Top-right video-off indicator */}
      {participant.videoOff && (
        <div style={{
          position:'absolute', top:7, left:7,
          background:'rgba(0,0,0,0.55)', borderRadius:4,
          padding:'2px 5px', display:'flex', alignItems:'center',
        }}>
          <svg viewBox="0 0 24 24" fill="#aaa" width="11" height="11">
            <path d="M21 6.5l-4-4-1.45 1.45L17 5.41V9l4 4V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2zM15 17H5V7.27l10 10V17z"/>
          </svg>
        </div>
      )}
    </div>
  );
}
