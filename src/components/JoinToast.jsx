import React, { useEffect, useState } from 'react';
import { getInitials, getAvatarColor } from '../data/participants';

export default function JoinToast({ notifications }) {
  return (
    <div className="fixed bottom-20 left-4 flex flex-col gap-2 z-50 pointer-events-none">
      {notifications.map((n) => (
        <ToastItem key={n.id} notification={n} />
      ))}
    </div>
  );
}

function ToastItem({ notification }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  const initials = getInitials(notification.name);
  const color = getAvatarColor(notification.name);

  return (
    <div
      className="toast-enter flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white"
      style={{ background: 'rgba(32,33,36,0.92)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}
    >
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
        style={{ backgroundColor: color }}
      >
        {initials}
      </div>
      <span className="text-gray-200">
        <span className="font-medium text-white">{notification.name}</span> joined the meeting
      </span>
    </div>
  );
}
