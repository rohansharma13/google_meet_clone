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
    <div style={{ display:'flex', flexDirection:'column', height:'100vh', width:'100vw', overflow:'hidden', background:'#1C1C1C' }}>
      {/* Top Bar */}
      <TopBar participantCount={participants.length} duration={duration} />

      {/* Main grid area */}
      <div style={{ flex:1, overflow:'hidden', position:'relative' }}>
        <ParticipantsGrid participants={participants} newJoinId={newJoinId} />

        {/* Overflow badge — people beyond the 25 shown on screen */}
        {participants.length > 25 && (
          <div style={{
            position:'absolute', top:12, right:12,
            background:'rgba(0,0,0,0.72)', backdropFilter:'blur(6px)',
            border:'1px solid rgba(255,255,255,0.1)',
            borderRadius:8, padding:'5px 12px',
            color:'#fff', fontSize:12, fontWeight:500,
            display:'flex', alignItems:'center', gap:6,
          }}>
            <svg viewBox="0 0 24 24" fill="#2D8CFF" width="13" height="13">
              <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
            +{participants.length - 25} more participants
          </div>
        )}

        {/* Status pill — bottom-left Zoom style */}
        <div style={{
          position:'absolute', bottom:12, left:12,
          background:'rgba(0,0,0,0.7)', backdropFilter:'blur(5px)',
          border:'1px solid rgba(255,255,255,0.1)',
          borderRadius:8, padding:'5px 12px',
          display:'flex', alignItems:'center', gap:7,
          fontSize:12, color:'#fff',
        }}>
          {joinPhase !== 'done' ? (
            <>
              <span style={{ width:7, height:7, borderRadius:'50%', background:'#23D96C', display:'inline-block',
                animation:'pulse 1.2s ease-in-out infinite' }} />
              <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
              <span style={{ fontWeight:500 }}>{participants.length} participants</span>
              <span style={{ color:'#888' }}>•</span>
              <span style={{ color:'#23D96C' }}>People joining...</span>
            </>
          ) : (
            <>
              <span style={{ width:7, height:7, borderRadius:'50%', background:'#2D8CFF', display:'inline-block' }} />
              <span style={{ fontWeight:500 }}>{participants.length} participants</span>
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
