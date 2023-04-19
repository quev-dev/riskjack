import { useState, useEffect } from "react";

export default function Dialogue({ text = "" }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, i++));
      if (i > text.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <section
      id="dialogue-box"
      className="p-4 flex flex-col justify-center items-center text-center"
    >
      <p>{displayText}</p>
    </section>
  );
}
