import "./App.css";
import { memo, useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

const ASCII = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "{",
  "|",
  "}",
  "~",
];

const COLORS = ["255,255,0", "0,255,255", "255,0,255"];

const AsciiChar = memo(({ isActive }: { isActive: boolean }) => {
  const [char, setChar] = useState(" ");
  const [color, setColor] = useState(COLORS[0]);

  useEffect(() => {
    if (!isActive) {
      setChar(" ");
      return;
    }

    const interval = setInterval(() => {
      setChar(ASCII[~~(Math.random() * ASCII.length)]);
      setColor(COLORS[~~(Math.random() * COLORS.length)]);
    }, 75);

    return () => clearInterval(interval);
  }, [isActive]);

  return <span style={{ color: `rgb(${color})` }}>{char}</span>;
});

function App() {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (!hasHover) {
      setIsHovering(true);
    }
  }, []);

  return (
    <div className="app">
      <div className="grid-container">
        <div className="div1">[ KLET DEVELOPMENT ]</div>
        <div className="div2">Building meaningful products since 2016</div>
        <div className="div3">by Kameron Argis</div>
        <div className="div4">Paris</div>
        <div className="div5">Toulouse</div>
        <div className="div6">
          <a href="https://www.linkedin.com/in/kameronargis/" target="_blank">
            Linkedin
          </a>
        </div>
        <div
          className="div7"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="ascii-grid">
            {Array.from({ length: 144 }).map((_, i) => (
              <AsciiChar key={i} isActive={isHovering} />
            ))}
          </div>
        </div>
      </div>
      <Analytics />
    </div>
  );
}

export default App;
