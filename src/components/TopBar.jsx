import React from 'react';

const GoogleMeetLogo = () => (
  <svg viewBox="0 0 75 75" className="w-8 h-8">
    <path fill="#00832d" d="M43.01 37.5l8.49 9.75V28.5z"/>
    <path fill="#0066da" d="M7.5 48.03v8.72c0 2.07 1.68 3.75 3.75 3.75h8.72L22 52.5l-2.03-4.47L15.5 46.5z"/>
    <path fill="#e94235" d="M19.97 15l-2.04 8.03 2.04 8.47h28.58c0 0 0-16.5 0-16.5z"/>
    <path fill="#2684fc" d="M19.97 47.5H7.5v-23h12.47z"/>
    <path fill="#00ac47" d="M51.5 28.5H48v19h3.5l11-9.5z"/>
    <path fill="#ffba00" d="M48 47.5l3.5.75L62.5 38l-11-9.5z"/>
    <path fill="#00ac47" d="M62.5 38v-10.75c0-2.07-1.68-3.75-3.75-3.75H48v16z"/>
    <path fill="#00832d" d="M48 47.5H19.97l-2.03 8.5 2.03 4.5H48z"/>
  </svg>
);

const RecordingIcon = () => (
  <svg viewBox="0 0 24 24" fill="#ea4335" className="w-3 h-3">
    <circle cx="12" cy="12" r="8"/>
  </svg>
);

export default function TopBar({ participantCount, duration }) {
  const mins = Math.floor(duration / 60).toString().padStart(2, '0');
  const secs = (duration % 60).toString().padStart(2, '0');

  return (
    <div
      className="flex items-center justify-between px-4 py-2 shrink-0"
      style={{ background: '#202124', height: '56px' }}
    >
      {/* Left: Logo + meeting code */}
      <div className="flex items-center gap-3">
        <GoogleMeetLogo />
        <div>
          <div className="text-white text-sm font-medium">All Hands Meeting</div>
          <div className="text-gray-400 text-xs">abc-defg-hij</div>
        </div>
      </div>

      {/* Center: Duration + Recording */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <RecordingIcon />
          <span className="text-red-400 text-xs font-medium">REC</span>
          <span className="text-gray-400 text-xs ml-1">{mins}:{secs}</span>
        </div>
        <div
          className="flex items-center gap-1.5 px-3 py-1 rounded-full"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          <svg viewBox="0 0 24 24" fill="#9aa0a6" className="w-3.5 h-3.5">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          <span className="text-gray-300 text-xs font-medium">{participantCount}</span>
        </div>
      </div>

      {/* Right: info icon + security */}
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-gray-300 transition-all"
          style={{ background: 'rgba(255,255,255,0.08)' }}>
          <svg viewBox="0 0 24 24" fill="#9aa0a6" className="w-3.5 h-3.5">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
          </svg>
          <span>Secure</span>
        </button>
        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 text-gray-400">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
