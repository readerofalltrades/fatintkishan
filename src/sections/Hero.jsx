import { useState, useEffect, useRef } from "react";
import "./Hero.css";

const ENGLISH_NAME = "Fatin Tazwar Kishan";
const BANGLA_NAME = "ফাতিন তাজওয়ার কিষাণ";

const TYPE_SPEED = 60; // ms per character when typing
const DELETE_SPEED = 30; // ms per character when deleting

function Hero() {
  const [displayName, setDisplayName] = useState("");
  const [isBangla, setIsBangla] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);

  function typeOut(text, onDone) {
    let i = 0;
    function step() {
      i++;
      setDisplayName(text.slice(0, i));
      if (i < text.length) {
        timeoutRef.current = setTimeout(step, TYPE_SPEED);
      } else {
        if (onDone) onDone();
      }
    }
    timeoutRef.current = setTimeout(step, TYPE_SPEED);
  }

  function deleteOut(text, onDone) {
    let i = text.length;
    function step() {
      i--;
      setDisplayName(text.slice(0, i));
      if (i > 0) {
        timeoutRef.current = setTimeout(step, DELETE_SPEED);
      } else {
        if (onDone) onDone();
      }
    }
    timeoutRef.current = setTimeout(step, DELETE_SPEED);
  }

  // Initial typeout on mount
  useEffect(() => {
    typeOut(ENGLISH_NAME, () => setIsAnimating(false));
    return () => clearTimeout(timeoutRef.current);
  }, []);

  function handleMouseEnter() {
    if (isAnimating || isBangla) return;
    setIsAnimating(true);
    clearTimeout(timeoutRef.current);
    deleteOut(ENGLISH_NAME, () => {
      setIsBangla(true);
      typeOut(BANGLA_NAME, () => setIsAnimating(false));
    });
  }

  function handleMouseLeave() {
    if (isAnimating || !isBangla) return;
    setIsAnimating(true);
    clearTimeout(timeoutRef.current);
    deleteOut(BANGLA_NAME, () => {
      setIsBangla(false);
      typeOut(ENGLISH_NAME, () => setIsAnimating(false));
    });
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1
            className={`hero-name ${isBangla ? "hero-name--bangla" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              fontFamily: isBangla
                ? "var(--font-bangla)"
                : "var(--font-display)",
            }}
          >
            <span className="hero-name-text">{displayName}</span>
            {/* <span className="hero-name-cursor">_</span>*/}
          </h1>
          <p className="hero-tagline">
            A Reader of All Trades. Curious by default. Known to segfault
            occasionally.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              See my work
            </a>
            <a href="#blog" className="btn btn-secondary">
              Read my blog
            </a>
          </div>
        </div>
        <picture className="hero-image-wrapper stamp-frame">
          <source
            media="(max-width: 768px)"
            srcSet="/hero-image_straight-forward.webp"
          />
          <img
            src="/hero-image_candid.webp"
            alt="Fatin Tazwar Kishan"
            className="hero-image"
          />
        </picture>
      </div>
    </section>
  );
}

export default Hero;
