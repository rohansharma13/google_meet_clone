import React, { useState } from 'react';

const MicOnIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
  </svg>
);

const MicOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"/>
  </svg>
);

const VideoOnIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
  </svg>
);

const VideoOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M21 6.5l-4-4-1.45 1.45L17 5.41 17 9l4 4V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2zM15 17H5V7.27l10 10V17z"/>
  </svg>
);

const ScreenShareIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
  </svg>
);

const MoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
);

const HandIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M21 7c0-1.38-1.12-2.5-2.5-2.5-.17 0-.34.02-.5.05V4c0-1.38-1.12-2.5-2.5-2.5-1.23 0-2.26.9-2.46 2.08C12.76 3.22 12.39 3 11.97 3 10.74 3 9.67 3.87 9.52 5H9.5C8.12 5 7 6.12 7 7.5v7.79c-.44-.58-1.05-1.03-1.78-1.25-1.31-.39-2.7.11-3.45 1.24-.06.09-.08.2-.04.3L4 21h10c0 0 7-3 7-9V7z"/>
  </svg>
);

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
  </svg>
);

const PeopleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);

const EndCallIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
  </svg>
);

export default function MeetingControls({ participantCount }) {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [handRaised, setHandRaised] = useState(false);

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div
      className="flex items-center justify-between px-4 py-2 shrink-0"
      style={{ background: '#202124', borderTop: '1px solid rgba(255,255,255,0.08)', height: '72px' }}
    >
      {/* Left: time + meeting info */}
      <div className="flex items-center gap-3 w-48">
        <span className="text-white text-sm font-medium">{timeStr}</span>
        <span className="text-gray-400 text-sm hidden md:block">|</span>
        <span className="text-gray-400 text-sm hidden md:block truncate">abc-defg-hij</span>
      </div>

      {/* Center: controls */}
      <div className="flex items-center gap-2">
        {/* Mic */}
        <button
          onClick={() => setMicOn(v => !v)}
          className={`flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-200 ${
            micOn ? 'bg-[#3c4043] hover:bg-[#4a4d51] text-white' : 'bg-red-600 hover:bg-red-700 text-white'
          }`}
          title={micOn ? 'Mute microphone' : 'Unmute microphone'}
        >
          {micOn ? <MicOnIcon /> : <MicOffIcon />}
        </button>

        {/* Camera */}
        <button
          onClick={() => setVideoOn(v => !v)}
          className={`flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-200 ${
            videoOn ? 'bg-[#3c4043] hover:bg-[#4a4d51] text-white' : 'bg-red-600 hover:bg-red-700 text-white'
          }`}
          title={videoOn ? 'Turn off camera' : 'Turn on camera'}
        >
          {videoOn ? <VideoOnIcon /> : <VideoOffIcon />}
        </button>

        {/* Share screen */}
        <button
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3c4043] hover:bg-[#4a4d51] text-white transition-all duration-200"
          title="Present now"
        >
          <ScreenShareIcon />
        </button>

        {/* Raise hand */}
        <button
          onClick={() => setHandRaised(v => !v)}
          className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 ${
            handRaised ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'bg-[#3c4043] hover:bg-[#4a4d51] text-white'
          }`}
          title="Raise hand"
        >
          <HandIcon />
        </button>

        {/* More options */}
        <button
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3c4043] hover:bg-[#4a4d51] text-white transition-all duration-200"
          title="More options"
        >
          <MoreIcon />
        </button>

        {/* End call — always shows icon + "Leave" text */}
        <button
          className="flex items-center justify-center gap-2 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white transition-all duration-200 ml-2"
          style={{ padding: '0 20px', minWidth: 0 }}
          title="Leave call"
        >
          <EndCallIcon />
          <span className="text-sm font-medium whitespace-nowrap">Leave</span>
        </button>
      </div>

      {/* Right: chat + people */}
      <div className="flex items-center gap-2 w-48 justify-end">
        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3c4043] hover:bg-[#4a4d51] text-white transition-all duration-200">
          <ChatIcon />
        </button>
        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3c4043] hover:bg-[#4a4d51] text-white transition-all duration-200 relative">
          <PeopleIcon />
          <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[9px] font-bold rounded-full px-1 min-w-[18px] h-4 flex items-center justify-center">
            {participantCount}
          </span>
        </button>
      </div>
    </div>
  );
}
