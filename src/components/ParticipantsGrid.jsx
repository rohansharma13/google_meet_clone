import React, { useMemo } from 'react';
import ParticipantTile from './ParticipantTile';

/**
 * Zoom Gallery View — shows up to 25 tiles per page (5×5).
 * Adapts layout based on count so tiles always fill the viewport.
 */
function getGridLayout(count) {
  const n = Math.min(count, 25);
  if (n === 1)  return { cols: 1, rows: 1 };
  if (n === 2)  return { cols: 2, rows: 1 };
  if (n === 3)  return { cols: 3, rows: 1 };
  if (n === 4)  return { cols: 2, rows: 2 };
  if (n === 5)  return { cols: 3, rows: 2 };
  if (n === 6)  return { cols: 3, rows: 2 };
  if (n <= 9)   return { cols: 3, rows: 3 };
  if (n <= 12)  return { cols: 4, rows: 3 };
  if (n <= 16)  return { cols: 4, rows: 4 };
  if (n <= 20)  return { cols: 5, rows: 4 };
  return         { cols: 5, rows: 5 };       // 21–25
}

function tileSize(cols) {
  if (cols <= 2) return 'large';
  if (cols === 3) return 'normal';
  if (cols === 4) return 'small';
  return 'tiny';
}

export default function ParticipantsGrid({ participants, newJoinId }) {
  const { cols, rows } = useMemo(() => getGridLayout(participants.length), [participants.length]);
  const size = tileSize(cols);

  const PAGE = 25;
  const visible = participants.slice(-Math.min(participants.length, PAGE));

  return (
    <div style={{
      width: '100%', height: '100%',
      padding: '8px',
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gridTemplateRows:    `repeat(${rows}, 1fr)`,
      gap: 5,
    }}>
      {visible.map(p => (
        <ParticipantTile
          key={p.id}
          participant={p}
          size={size}
          isNew={p.id === newJoinId}
        />
      ))}
    </div>
  );
}
