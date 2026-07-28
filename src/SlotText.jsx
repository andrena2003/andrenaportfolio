import { useEffect, useState } from "react";

export default function SlotText({
  words = ["UI/UX", "Marketing", "Brand ambassador, Graphic designer"],
  interval = 2000,
  height,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, words.length]);

  const slotHeight =
    typeof height === "number" ? `${height}px` : height || "0.95em";

  const slotStyle = {
    "--slot-height": slotHeight,
  };

  const wordStyle = {
    color: "var(--color-text)",
    background: "none",
    WebkitTextFillColor: "currentColor",
    backgroundClip: "border-box",
  };

  const transformStep =
    typeof height === "number" ? `${index * height}px` : `${index * 0.95}em`;

  return (
    <div className="slot-wrap" style={slotStyle}>
      <div
        className="slot-track"
        style={{ transform: `translateY(-${transformStep})` }}
      >
        {words.map((word, i) => (
          <div className="slot-word" style={wordStyle} key={i}>
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}
