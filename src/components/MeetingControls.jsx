import React, { useState } from 'react';

/* ── SVG icons ───────────────────────────────────────────────── */
const MicOnSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
  </svg>
);
const MicOffSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"/>
  </svg>
);
const CamOnSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
  </svg>
);
const CamOffSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M21 6.5l-4-4-1.45 1.45L17 5.41V9l4 4V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2zM15 17H5V7.27l10 10V17z"/>
  </svg>
);
const ShareSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
  </svg>
);
const ReactionsSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
  </svg>
);
const ParticipantsSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);
const ChatSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
  </svg>
);
const MoreSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
);

/* ── Single control button (icon + label stacked) ─────────────── */
function CtrlBtn({ icon, label, onClick, active = false, danger = false, badge }) {
  return (
    <button
      onClick={onClick}
      title={label}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        padding: '6px 10px',
        borderRadius: 8,
        border: 'none',
        background: danger
          ? '#F93939'
          : active
          ? 'rgba(45,140,255,0.18)'
          : 'transparent',
        color: danger ? '#fff' : active ? '#2D8CFF' : '#d0d0d0',
        cursor: 'pointer',
        minWidth: 60,
        position: 'relative',
        transition: 'background 0.15s, color 0.15s',
      }}
      onMouseEnter={e => { if (!danger) e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
      onMouseLeave={e => {
        if (danger) e.currentTarget.style.background = '#F93939';
        else if (active) e.currentTarget.style.background = 'rgba(45,140,255,0.18)';
        else e.currentTarget.style.background = 'transparent';
      }}
    >
      {icon}
      <span style={{ fontSize: 10, fontWeight: 500, whiteSpace: 'nowrap' }}>{label}</span>
      {badge != null && (
        <span style={{
          position: 'absolute', top: 4, right: 8,
          background: '#2D8CFF', color: '#fff',
          fontSize: 9, fontWeight: 700,
          borderRadius: 8, padding: '1px 4px',
          minWidth: 14, textAlign: 'center',
        }}>
          {badge > 999 ? '999+' : badge}
        </span>
      )}
    </button>
  );
}

/* ── Toolbar ──────────────────────────────────────────────────── */
export default function MeetingControls({ participantCount }) {
  const [micOn,   setMicOn]   = useState(true);
  const [camOn,   setCamOn]   = useState(true);
  const [sharing, setSharing] = useState(false);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      height: 68,
      flexShrink: 0,
      background: '#242424',
      borderTop: '1px solid #333',
    }}>
      {/* Left — meeting ID */}
      <div style={{ display:'flex', alignItems:'center', gap:8, minWidth:160 }}>
        <svg viewBox="0 0 24 24" fill="#23D96C" width="14" height="14">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z"/>
        </svg>
        <div>
          <div style={{ color:'#fff', fontSize:12, fontWeight:600 }}>All Hands Meeting</div>
          <div style={{ color:'#888', fontSize:10 }}>862 4391 7520</div>
        </div>
      </div>

      {/* Center — main controls */}
      <div style={{ display:'flex', alignItems:'center', gap:2 }}>
        <CtrlBtn
          icon={micOn ? <MicOnSvg /> : <MicOffSvg />}
          label={micOn ? 'Mute' : 'Unmute'}
          active={!micOn}
          onClick={() => setMicOn(v => !v)}
        />
        <CtrlBtn
          icon={camOn ? <CamOnSvg /> : <CamOffSvg />}
          label={camOn ? 'Stop Video' : 'Start Video'}
          active={!camOn}
          onClick={() => setCamOn(v => !v)}
        />

        {/* Thin divider */}
        <div style={{ width:1, height:32, background:'#3a3a3a', margin:'0 6px' }} />

        <CtrlBtn
          icon={<ShareSvg />}
          label="Share Screen"
          active={sharing}
          onClick={() => setSharing(v => !v)}
        />
        <CtrlBtn icon={<ReactionsSvg />} label="Reactions" />
        <CtrlBtn
          icon={<ParticipantsSvg />}
          label="Participants"
          badge={participantCount}
        />
        <CtrlBtn icon={<ChatSvg />} label="Chat" />
        <CtrlBtn icon={<MoreSvg />} label="More" />

        {/* Divider */}
        <div style={{ width:1, height:32, background:'#3a3a3a', margin:'0 6px' }} />

        {/* End button — Zoom style: red pill */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 7,
            padding: '9px 20px',
            borderRadius: 8,
            border: 'none',
            background: '#F93939',
            color: '#fff',
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
            letterSpacing: '0.2px',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#d42e2e'}
          onMouseLeave={e => e.currentTarget.style.background = '#F93939'}
          title="End meeting"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          End
        </button>
      </div>

      {/* Right — view options */}
      <div style={{ display:'flex', alignItems:'center', gap:8, minWidth:160, justifyContent:'flex-end' }}>
        <div style={{
          display:'flex', alignItems:'center', gap:6,
          background:'rgba(255,255,255,0.06)', borderRadius:6,
          padding:'4px 10px', cursor:'pointer',
        }}>
          <svg viewBox="0 0 24 24" fill="#9aa0a6" width="14" height="14">
            <path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z"/>
          </svg>
          <span style={{ color:'#ccc', fontSize:11, fontWeight:500 }}>Gallery View</span>
        </div>
      </div>
    </div>
  );
}
