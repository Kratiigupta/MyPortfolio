import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);
    const handleDown = () => setClicking(true);
    const handleUp = () => setClicking(false);

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('mouseup', handleUp);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mouseup', handleUp);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Main dot */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
          width: clicking ? 6 : 8,
          height: clicking ? 6 : 8,
          borderRadius: '50%',
          backgroundColor: '#8b5cf6',
          transition: 'width 0.15s, height 0.15s',
        }}
      />
      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: pos.x - 18,
          top: pos.y - 18,
          width: clicking ? 28 : 36,
          height: clicking ? 28 : 36,
          borderRadius: '50%',
          border: '1.5px solid rgba(139, 92, 246, 0.4)',
          transition: 'left 0.15s ease-out, top 0.15s ease-out, width 0.15s, height 0.15s',
        }}
      />
    </>
  );
}
