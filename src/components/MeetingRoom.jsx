import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ALL_NAMES } from '../data/participants';
import ParticipantsGrid from './ParticipantsGrid';
import MeetingControls from './MeetingControls';
import TopBar from './TopBar';
import JoinToast from './JoinToast';

const TARGET_COUNT = 500;
const YOU_NAME = 'You';

function buildInitialParticipant(name, id, isYou = false) {
  return {
    id,
    name,
    isYou,
    muted: Math.random() < 0.45,
    videoOff: Math.random() < 0.35,
    joinedAt: Date.now(),
  };
}

// Shuffle array
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Build a pool of 500 names (repeat with variations if needed)
function buildNamePool() {
  const pool = [];
  let id = 1;
  const shuffled = shuffleArray(ALL_NAMES);
  while (pool.length < TARGET_COUNT) {
    for (const name of shuffled) {
      if (pool.length >= TARGET_COUNT) break;
      pool.push({ name, id: id++ });
    }
  }
  return pool;
}

export default function MeetingRoom() {
  const namePoolRef = useRef(buildNamePool());
  const joinIndexRef = useRef(0);
  const nextIdRef = useRef(10000);

  const [participants, setParticipants] = useState([]);
  const [newJoinId, setNewJoinId] = useState(null);
  const [toastQueue, setToastQueue] = useState([]);
  const [duration, setDuration] = useState(0);
  const [joinPhase, setJoinPhase] = useState('burst'); // burst | steady | done

  // Duration timer
  useEffect(() => {
    const t = setInterval(() => setDuration(d => d + 1), 1000);
    return () => clearInterval(t);
  }, []);

  // Start with just YOU — count = 1, everyone else joins in real time
  useEffect(() => {
    setParticipants([
      buildInitialParticipant('Rahul Sharma', nextIdRef.current++, true),
    ]);
  }, []);

  const addParticipant = useCallback(() => {
    if (joinIndexRef.current >= namePoolRef.current.length) {
      // Loop back
      joinIndexRef.current = 0;
    }
    const entry = namePoolRef.current[joinIndexRef.current++];
    const newP = buildInitialParticipant(entry.name, nextIdRef.current++);

    setParticipants(prev => {
      if (prev.length >= TARGET_COUNT) return prev;
      return [...prev, newP];
    });
    setNewJoinId(newP.id);
    setToastQueue(q => [...q.slice(-3), { id: newP.id, name: newP.name }]);
  }, []);

  // Join scheduling — human-paced, feels like a real large meeting
  useEffect(() => {
    let timer;

    const schedule = (currentCount) => {
      if (currentCount >= TARGET_COUNT) {
        setJoinPhase('done');
        return;
      }

      let delay;

      if (currentCount < 5) {
        // First people join quickly — 1.5s to 3s apart
        setJoinPhase('burst');
        delay = 1500 + Math.random() * 1500;
      } else if (currentCount < 15) {
        // Early wave — someone every 2–5s
        delay = 2000 + Math.random() * 3000;
      } else if (currentCount < 30) {
        // Meeting warming up — 4–8s between joins
        setJoinPhase('steady');
        delay = 4000 + Math.random() * 4000;
      } else if (currentCount < 60) {
        // Steady stream — every 5–10s
        delay = 5000 + Math.random() * 5000;
      } else if (currentCount < 120) {
        // Slowing down — every 7–13s
        delay = 7000 + Math.random() * 6000;
      } else if (currentCount < 250) {
        // Occasional join — every 10–18s
        delay = 10000 + Math.random() * 8000;
      } else if (currentCount < 400) {
        // Late joiners — every 12–22s
        delay = 12000 + Math.random() * 10000;
      } else {
        // Final stragglers — every 15–30s
        delay = 15000 + Math.random() * 15000;
      }

      timer = setTimeout(() => {
        addParticipant();
        setParticipants(prev => {
          schedule(prev.length);
          return prev;
        });
      }, delay);
    };

    // First person joins after 2s
    timer = setTimeout(() => {
      addParticipant();
      setParticipants(prev => {
        schedule(prev.length);
        return prev;
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [addParticipant]);

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden" style={{ background: '#202124' }}>
      {/* Top Bar */}
      <TopBar participantCount={participants.length} duration={duration} />

      {/* Main grid area */}
      <div className="flex-1 overflow-hidden relative">
        <ParticipantsGrid participants={participants} newJoinId={newJoinId} />

        {/* Overflow badge — shown when more than 16 are in the call */}
        {participants.length > 16 && (
          <div
            className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-medium text-white"
            style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            +{participants.length - 16} more in this call
          </div>
        )}

        {/* Status pill */}
        <div
          className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-white"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
        >
          {joinPhase !== 'done' ? (
            <>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>{participants.length} participants • People joining...</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>{participants.length} participants</span>
            </>
          )}
        </div>
      </div>

      {/* Controls */}
      <MeetingControls participantCount={participants.length} />

      {/* Join toasts */}
      <JoinToast notifications={toastQueue} />
    </div>
  );
}
