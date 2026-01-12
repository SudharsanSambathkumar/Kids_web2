import grandpa from "./assets/characters/grandpa.png";
import grandma from "./assets/characters/grandpa.png";
import uncle from "./assets/characters/grandpa.png";
import child from "./assets/characters/grandpa.png";
import aunty from "./assets/characters/grandpa.png";

import walkingStick from "./assets/characters/grandpa.png";
import slippers from "./assets/characters/grandpa.png";
import spoon from "./assets/characters/grandpa.png";
import walkingFrame from "./assets/characters/grandpa.png";
import pillow from "./assets/characters/grandpa.png";
import bottle from "./assets/characters/grandpa.png";
import bigSpoon from "./assets/characters/grandpa.png";
import cupLid from "./assets/characters/grandpa.png";
import napkin from "./assets/characters/grandpa.png";
import velcroShirt from "./assets/characters/grandpa.png";
import nonSlipMat from "./assets/characters/grandpa.png";
import reacher from "./assets/characters/grandpa.png";
import voiceLight from "./assets/characters/grandpa.png";

/* ===== CATEGORIES ===== */
export const categories = [
  { key: "mobility", label: "Mobility" },
  { key: "feeding", label: "Feeding" },
  { key: "grooming", label: "Grooming" },
  { key: "smarthome", label: "Smart Home" },
];

/* ===== SCENARIOS ===== */
export const scenarios = {
  mobility: [
    {
      scenario: "Grandpa wants to walk to the toilet. He almost falls.",
      character: grandpa,
      question: "What should Grandpa use?",
      options: [
        { img: slippers, correct: false },
                { img: walkingStick, correct: true },

        { img: spoon, correct: false },
      ],
    },
    {
      scenario: "Grandma walks to the park. Her legs get tired.",
      character: grandma,
      question: "What helps Grandma walk safely?",
      options: [
        { img: pillow, correct: false },
        { img: bottle, correct: false },    
            { img: walkingFrame, correct: true },

      ],
    },
  ],

  feeding: [
    {
      scenario: "Uncle’s hands shake while eating.",
      character: uncle,
      question: "What helps Uncle eat easily?",
      options: [
        { img: bigSpoon, correct: true },
        { img: napkin, correct: false },
        { img: spoon, correct: false },
      ],
    },
    {
      scenario: "A child spills water while drinking.",
      character: child,
      question: "What helps the child drink safely?",
      options: [
        { img: spoon, correct: false },

                { img: cupLid, correct: true },

        { img: napkin, correct: false },
      ],
    },
  ],

  grooming: [
    {
      scenario: "Girl finds it hard to button her shirt.",
      character: child,
      question: "What shirt can she wear?",
      options: [
     
        { img: spoon, correct: false },
         { img: velcroShirt, correct: true },
        { img: napkin, correct: false },
      ],
    },
    {
      scenario: "Grandpa is scared of slipping in the shower.",
      character: grandpa,
      question: "What should Grandpa use?",
      options: [
        { img: nonSlipMat, correct: true },
        { img: pillow, correct: false },
        { img: napkin, correct: false },
      ],
    },
    {
      scenario: "Aunty drops towel and cannot bend.",
      character: aunty,
      question: "What should Aunty use?",
      options: [ { img: spoon, correct: false },
        { img: reacher, correct: true },
       
        { img: napkin, correct: false },
      ],
    },
  ],

  smarthome: [
    {
      scenario: "Uncle is in bed and the room is dark.",
      character: uncle,
      question: "What can Uncle use?",
      options: [
       
        { img: spoon, correct: false },
        { img: pillow, correct: false }, { img: voiceLight, correct: true },
      ],
    },
  ],
};
