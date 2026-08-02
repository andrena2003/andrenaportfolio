import { useEffect, useState } from "react";

export default function SlotText({
  words = ["UI/UX", "Marketing", "Brand ambassador, Graphic designer"],
  interval = 2000,
}) {
  const [index, setIndex] = useState(0);
  const longestWord = words.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    "",
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, words.length]);

  const wordStyle = {
    color: "var(--color-text)",
    background: "none",
    WebkitTextFillColor: "currentColor",
    backgroundClip: "border-box",
  };

  return (
    <span className="slot-wrap" aria-label={words[index]}>
      <span className="slot-sizer" aria-hidden="true">
        {longestWord}
      </span>
      <span className="slot-window" aria-hidden="true">
        <span
          className="slot-track"
          style={{ transform: `translateY(-${index * 1.3}em)` }}
        >
          {words.map((word) => (
            <span className="slot-word" style={wordStyle} key={word}>
              {word}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}
