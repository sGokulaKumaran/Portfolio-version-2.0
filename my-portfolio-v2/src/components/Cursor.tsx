
import { useEffect, useState } from "react";

export default function Cursor() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: x - 10,
        top: y - 10,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "2px solid cyan",
        boxShadow: "0 0 10px cyan",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}


;
