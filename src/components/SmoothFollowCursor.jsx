import { useState, useEffect, useRef } from "react";

const lerp = (start, end, factor) => start + (end - start) * factor;

export default function SmoothFollowCursor({
  dotColor = "#fabd2f",
  borderColor = "#fabd2f",
  dotSize = 8,
  borderSize = 28,
  hoverBorderSize = 44,
  dotSpeed = 0.3,
  borderSpeed = 0.1,
  borderOpacity = 0.7,
  dotOpacity = 1,
  borderWidth = 1,
}) {
  const [isTouch, setIsTouch] = useState(
    () => window.matchMedia("(pointer: coarse)").matches,
  );
  useEffect(() => {
    console.log(
      "pointer:coarse matches:",
      window.matchMedia("(pointer: coarse)").matches,
    );
    console.log(
      "pointer:fine matches:",
      window.matchMedia("(pointer: fine)").matches,
    );
  }, []);
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });
  const rafActive = useRef(false);
  const animationFrameId = useRef(null);
  const interactiveElements = useRef([]);

  const [renderPos, setRenderPos] = useState({
    dot: { x: 0, y: 0 },
    border: { x: 0, y: 0 },
  });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mousePosition.current = { x: centerX, y: centerY };
    dotPosition.current = { x: centerX, y: centerY };
    borderDotPosition.current = { x: centerX, y: centerY };

    function animate() {
      if (!rafActive.current) return;

      dotPosition.current.x = lerp(
        dotPosition.current.x,
        mousePosition.current.x,
        dotSpeed,
      );
      dotPosition.current.y = lerp(
        dotPosition.current.y,
        mousePosition.current.y,
        dotSpeed,
      );

      borderDotPosition.current.x = lerp(
        borderDotPosition.current.x,
        dotPosition.current.x,
        borderSpeed,
      );
      borderDotPosition.current.y = lerp(
        borderDotPosition.current.y,
        dotPosition.current.y,
        borderSpeed,
      );

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: {
          x: borderDotPosition.current.x,
          y: borderDotPosition.current.y,
        },
      });

      animationFrameId.current = requestAnimationFrame(animate);
    }

    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      if (!rafActive.current) {
        rafActive.current = true;
        animate();
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const selector =
      "a, button, img, input, textarea, select, [data-cursor-hover]";

    const attachListeners = () => {
      interactiveElements.current.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      interactiveElements.current = document.querySelectorAll(selector);
      interactiveElements.current.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    attachListeners();

    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", handleMouseMove);
    rafActive.current = true;
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.current.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      observer.disconnect();
      rafActive.current = false;
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [dotSpeed, borderSpeed]);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const handler = (e) => setIsTouch(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (isTouch) return null;

  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        inset: 0,
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          backgroundColor: dotColor,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`,
          willChange: "left, top",
          opacity: dotOpacity,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: isHovering ? `${hoverBorderSize}px` : `${borderSize}px`,
          height: isHovering ? `${hoverBorderSize}px` : `${borderSize}px`,
          border: `${borderWidth}px solid ${borderColor}`,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          left: `${renderPos.border.x}px`,
          top: `${renderPos.border.y}px`,
          willChange: "left, top, width, height",
          transition: "width 0.3s ease, height 0.3s ease",
          opacity: borderOpacity,
        }}
      />
    </div>
  );
}
