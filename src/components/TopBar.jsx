import React from 'react';

/* Zoom logo — exact blue wordmark style */
const ZoomLogo = () => (
  <svg viewBox="0 0 90 28" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="90" height="28" rx="6" fill="#2D8CFF"/>
    <text x="10" y="20" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"
      fontWeight="700" fontSize="15" fill="white" letterSpacing="0.5">zoom</text>
    <circle cx="72" cy="14" r="7" fill="white" opacity="0.15"/>
    <path d="M68.5 11h5a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 0173.5 17h-5A1.5 1.5 0 0167 15.5v-3A1.5 1.5 0 0168.5 11z"
      fill="white"/>
    <path d="M76 12.5l3-2v7l-3-2v-3z" fill="white"/>
  </svg>
);

const RecDot = () => (
  <span style={{ display:'inline-flex', alignItems:'center', gap:5 }}>
    <span style={{
      width:8, height:8, borderRadius:'50%', background:'#F93939',
      animation:'pulse 1.4s ease-in-out infinite',
    }}/>
    <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}`}</style>
  </span>
);

export default function TopBar({ participantCount, duration }) {
  const mins = Math.floor(duration / 60).toString().padStart(2,'0');
  const secs = (duration % 60).toString().padStart(2,'0');

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });

  return (
    <div style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'0 16px', height:48, flexShrink:0,
      background:'#242424', borderBottom:'1px solid #333',
    }}>
      {/* Left — logo + meeting title */}
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <ZoomLogo />
        <span style={{ color:'#fff', fontWeight:600, fontSize:13 }}>
          All Hands Meeting
        </span>
        <span style={{
          color:'#888', fontSize:12,
          padding:'2px 8px', borderRadius:4,
          background:'rgba(255,255,255,0.06)',
        }}>
          Meeting ID: 862 4391 7520
        </span>
      </div>

      {/* Center — timer + recording */}
      <div style={{ display:'flex', alignItems:'center', gap:14 }}>
        {/* Recording badge */}
        <div style={{
          display:'flex', alignItems:'center', gap:6,
          background:'rgba(249,57,57,0.12)', border:'1px solid rgba(249,57,57,0.3)',
          borderRadius:6, padding:'3px 10px',
        }}>
          <RecDot />
          <span style={{ color:'#F93939', fontSize:11, fontWeight:600, letterSpacing:'0.5px' }}>
            REC
          </span>
          <span style={{ color:'#aaa', fontSize:11, marginLeft:2 }}>
            {mins}:{secs}
          </span>
        </div>

        {/* Live time */}
        <span style={{ color:'#ccc', fontSize:12 }}>{timeStr}</span>
      </div>

      {/* Right — participant count + security */}
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        {/* Participant count pill */}
        <div style={{
          display:'flex', alignItems:'center', gap:6,
          background:'rgba(255,255,255,0.07)', borderRadius:6,
          padding:'4px 10px',
        }}>
          <svg viewBox="0 0 24 24" fill="#9aa0a6" width="14" height="14">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          <span style={{ color:'#ddd', fontSize:12, fontWeight:500 }}>
            {participantCount}
          </span>
        </div>

        {/* Encrypted shield */}
        <div style={{
          display:'flex', alignItems:'center', gap:5,
          background:'rgba(255,255,255,0.07)', borderRadius:6,
          padding:'4px 10px',
        }}>
          <svg viewBox="0 0 24 24" fill="#23D96C" width="13" height="13">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z"/>
          </svg>
          <span style={{ color:'#23D96C', fontSize:11, fontWeight:500 }}>Encrypted</span>
        </div>
      </div>
    </div>
  );
}
