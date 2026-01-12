import { useEffect, useState } from "react";
import "./App.css";
import { categories, scenarios } from "./data";

const correctSound = new Audio("/sounds/correct.mp3");
const wrongSound = new Audio("/sounds/wrong.mp3");

export default function App() {
  const [page, setPage] = useState("home");
  const [category, setCategory] = useState(null);
  const [index, setIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [feedback, setFeedback] = useState("");

  const current = category ? scenarios[category][index] : null;

  /* Show options after delay */
  useEffect(() => {
    setShowOptions(false);
    setFeedback("");

    if (current) {
      const timer = setTimeout(() => {
        setShowOptions(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [index, category]);

  /* Option click */
  const selectOption = (opt) => {
    if (opt.correct) {
      correctSound.play();
      setFeedback("correct");
    } else {
      wrongSound.play();
      setFeedback("wrong");
    }
  };

  /* ================= HOME ================= */
  if (page === "home") {
    return (
      <div className="home">
        <h1>Choose Category</h1>

        {categories.map((c) => (
          <button
            key={c.key}
            className="category-btn"
            onClick={() => {
              setCategory(c.key);
              setIndex(0);
              setPage("game");
            }}
          >
            {c.label}
          </button>
        ))}
      </div>
    );
  }

  /* ================= GAME ================= */
  return (
    <div className="game">
      <h2 className="scenario-text">{current.scenario}</h2>

      <img
        src={current.character}
        alt="character"
        className="character-img"
      />

      <h3 className="question">{current.question}</h3>

      {showOptions && (
        <div className="options">
          {current.options.map((o, i) => (
            <img
              key={i}
              src={o.img}
              alt="option"
              className="option-img"
              onClick={() => selectOption(o)}
            />
          ))}
        </div>
      )}

      {feedback === "correct" && (
        <div className="feedback-correct">😊 Very Good!</div>
      )}

      {feedback === "wrong" && (
        <div className="feedback-wrong">❌ Try Again</div>
      )}

      {/* NAV BUTTONS */}
      <div className="nav-buttons">
        {/* BACK */}
        <button
          className="back-btn"
          disabled={index === 0}
          onClick={() => setIndex((i) => i - 1)}
        >
          ⬅ Back
        </button>

        {/* NEXT */}
        <button
          className="next-btn"
          disabled={index === scenarios[category].length - 1}
          onClick={() => setIndex((i) => i + 1)}
        >
          Next ➡
        </button>

        {/* HOME */}
        <button
          className="home-btn"
          onClick={() => setPage("home")}
        >
           Home
        </button>
      </div>
    </div>
  );
}
