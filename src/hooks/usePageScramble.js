import { useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function scrambleText(el, duration = 350) {
  const original = el.innerText;
  let frame = 0;
  const length = original.length;
  const speed = Math.max(1, Math.floor(duration / length));

  const interval = setInterval(() => {
    frame++;

    el.innerText = original
      .split("")
      .map((char, i) => {
        if (char === " ") return " ";
        return i < frame
          ? original[i]
          : CHARS[Math.floor(Math.random() * CHARS.length)];
      })
      .join("");

    if (frame >= length) {
      clearInterval(interval);
      el.innerText = original;
    }
  }, speed);
}

export default function usePageScramble(trigger) {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-scramble]");

    elements.forEach((el, i) => {
      setTimeout(() => {
        scrambleText(el);
      }, i * 50); // slight stagger
    });
  }, [trigger]);
}
