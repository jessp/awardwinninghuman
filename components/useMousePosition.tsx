import React from 'react';
import { MouseEvent as rMouseEvent } from 'react';


const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ x: null, y: null });
  React.useEffect(() => {
    const updateMousePosition = (ev: rMouseEvent<HTMLButtonElement, MouseEvent>) => {
      let x, y;
      [x, y] = [ev.clientX, ev.clientY];
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', updateMousePosition);
  
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  });
  return mousePosition;
};
export default useMousePosition;