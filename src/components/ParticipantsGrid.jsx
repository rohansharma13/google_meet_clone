import React, { useMemo } from 'react';
import ParticipantTile from './ParticipantTile';

/**
 * Real Google Meet shows max ~49 tiles but at large counts pins the
 * "active speaker" and pages the rest. We show up to 16 at a time
 * (the default Google Meet page size) and show a "+N more" overlay.
 * The grid adapts cols/rows so tiles are always large and fill the screen.
 */
function getGridLayout(count) {
  // We display at most 16 tiles at once — just like real Meet
  const visible = Math.min(count, 16);

  if (visible === 1)  return { cols: 1, rows: 1 };
  if (visible === 2)  return { cols: 2, rows: 1 };
  if (visible === 3)  return { cols: 3, rows: 1 };
  if (visible === 4)  return { cols: 2, rows: 2 };
  if (visible === 5)  return { cols: 3, rows: 2 };
  if (visible === 6)  return { cols: 3, rows: 2 };
  if (visible <= 9)   return { cols: 3, rows: 3 };
  if (visible <= 12)  return { cols: 4, rows: 3 };
  return               { cols: 4, rows: 4 };   // 13–16
}

function getTileSize(cols) {
  // Avatar circle size based on how many columns we have
  if (cols === 1) return 'large';
  if (cols === 2) return 'large';
  if (cols === 3) return 'normal';
  if (cols === 4) return 'normal';
  return 'small';
}

export default function ParticipantsGrid({ participants, newJoinId }) {
  const { cols, rows } = useMemo(() => getGridLayout(participants.length), [participants.length]);
  const size = getTileSize(cols);

  // Always show the most recent joiners (latest slice)
  const visible = participants.slice(-Math.min(participants.length, 16));
  const overflow = participants.length - visible.length;

  return (
    <div className="w-full h-full p-2 flex flex-col gap-1.5">
      <div
        className="flex-1 min-h-0"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: '6px',
        }}
      >
        {visible.map((p) => (
          <ParticipantTile
            key={p.id}
            participant={p}
            size={size}
            isNew={p.id === newJoinId}
          />
        ))}
      </div>
    </div>
  );
}
