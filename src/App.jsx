import { useEffect, useState } from "react";
import "./App.css";
import { categories, scenarios } from "./data";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";


const correctSound = new Audio("/sounds/correct.mp3");
const wrongSound = new Audio("/sounds/wrong.mp3");

export default function App() {
  // ✅ ALL hooks MUST be inside this function

  const [page, setPage] = useState("home");
  const [category, setCategory] = useState(null);
  const [index, setIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [answered, setAnswered] = useState(false);
  const { width, height } = useWindowSize();
  const [celebrate, setCelebrate] = useState(false);
  const [showScorePopup, setShowScorePopup] = useState(false);



  const [scores, setScores] = useState({
    mobility: 0,
    feeding: 0,
    grooming: 0,
    smarthome: 0,
  });

  const current = category ? scenarios[category][index] : null;

  const totalScore = Object.values(scores).reduce(
    (sum, v) => sum + v,
    0
  );

  useEffect(() => {
    setShowOptions(false);
    setFeedback("");
    setAnswered(false);

    if (current) {
      const timer = setTimeout(() => {
        setShowOptions(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [index, category]);

  const selectOption = (opt) => {
    if (opt.correct) {
  correctSound.play();
  setFeedback("correct");

  if (!answered) {
    setScores((prev) => ({
      ...prev,
      [category]: prev[category] + 1,
    }));
    setAnswered(true);
    setCelebrate(true);

    setTimeout(() => setCelebrate(false), 1500);
  }
}
 else {
      wrongSound.play();
      setFeedback("wrong");
    }
  };

  /* HOME */
  if (page === "home") {
    return (
      <div className="home">
        <h1>Choose Category</h1>
        <h2 className="total-score">
          Total Score: {totalScore}
        </h2>
        <div className="home-grid">
          {categories.map((c) => (
            <div
              key={c.key}
              className="home-card"
              onClick={() => {
                setCategory(c.key);
                setIndex(0);
                setPage("game");
              }}
            >
              <img src={c.img} alt={c.label} />
              <h3>{c.label}</h3>
              <p className="score">Score: {scores[c.key]}</p>
            </div>
          ))}
        </div>

        
      </div>
    );
  }

  /* GAME */
  return (
    <div className="game">
      <h3>{category.toUpperCase()} Score: {scores[category]}</h3>

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
            <div key={i} onClick={() => selectOption(o)}>
              <img src={o.img} alt="option" className="option-img" />
              <p>{o.label}</p>
            </div>
          ))}
        </div>
      )}
{showScorePopup && (
  <div className="score-popup">
    <div className="score-popup-box">
      <h2>🎉 Section Completed!</h2>
      <p>
        {category.toUpperCase()} Score:{" "}
        <strong>{scores[category]}</strong>
      </p>

      <button
        onClick={() => {
          setShowScorePopup(false);
          setPage("home");
        }}
      >
        Go to Home
      </button>
    </div>
  </div>
)}

      {feedback === "correct" && (
        <div className="feedback-correct">😊 Very Good!</div>
        
      )}
      {feedback === "correct" && (
  <Confetti
    width={width}
    height={height}
    numberOfPieces={200}
    gravity={0.3}
    recycle={false}
  />
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
  onClick={() => {
    if (index === scenarios[category].length - 1) {
      setShowScorePopup(true);
    } else {
      setIndex((i) => i + 1);
    }
  }}
>
  {index === scenarios[category].length - 1
    ? "Finish ✔"
    : "Next ➡"}
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
