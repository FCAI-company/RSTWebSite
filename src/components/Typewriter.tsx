import { useEffect, useState } from "react";
import { getDirection } from "./getDir";

interface TypewriterProps {
  text: string;
  speed?: number; // milliseconds per character
}

export default function Typewriter({ text, speed = 50 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
 
  useEffect(() => {
    let i = 0;
    let newText = displayedText;
    const interval = setInterval(() => {
     newText  += text.charAt(i);
      setDisplayedText((prev) => newText);
      i++;
      
      if (i >= text.length) clearInterval(interval);
    }, speed);


    
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div
      style={{ fontFamily: "var(--font-arabic)" }}
      className={`   rounded-xl max-w-xl leading-relaxed text-base whitespace-pre-wrap direction-${getDirection(
        text,
      )}`}
    >
     
      {displayedText}
    </div>
  );
}
