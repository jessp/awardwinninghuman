import { useState, useEffect } from 'react';

const useMousePosition = (): [{ x: number, y: number },
React.Dispatch<React.SetStateAction<{ x: number, y: number }>>] => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return [position, setPosition];
};

export default useMousePosition;