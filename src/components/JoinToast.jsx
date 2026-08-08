import React, { useState, useEffect } from 'react';
import { getInitials, getAvatarColor } from '../data/participants';

export default function JoinToast({ notifications }) {
  return (
    <div style={{
      position: 'fixed',
      bottom: 80,
      left: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      zIndex: 999,
      pointerEvents: 'none',
    }}>
      {notifications.map(n => <ToastItem key={n.id} notification={n} />)}
    </div>
  );
}

function ToastItem({ notification }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 3500);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  const initials = getInitials(notification.name);
  const color    = getAvatarColor(notification.name);

  return (
    <div
      className="toast-enter"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 14px',
        borderRadius: 8,
        background: 'rgba(30,30,30,0.96)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
        maxWidth: 280,
      }}
    >
      {/* Avatar */}
      <div style={{
        width: 30, height: 30, borderRadius: '50%',
        background: color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 11, fontWeight: 700, color: '#fff', flexShrink: 0,
      }}>
        {initials}
      </div>

      {/* Text */}
      <div style={{ minWidth: 0 }}>
        <span style={{ color:'#fff', fontWeight:600, fontSize:12 }}>
          {notification.name}
        </span>
        <span style={{ color:'#aaa', fontSize:12 }}> joined the meeting</span>
      </div>

      {/* Zoom blue dot */}
      <div style={{
        width: 7, height: 7, borderRadius: '50%',
        background: '#2D8CFF', flexShrink: 0,
      }}/>
    </div>
  );
}
