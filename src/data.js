import grandpasl from "./assets/characters/grandpasl.jpg";
import grandpabt from "./assets/characters/grandpabt.jpg";
import grandmapark from "./assets/characters/grandmapark.png";
import unclesp from "./assets/characters/unclesp.jpg";
import unclebe from "./assets/characters/unclebe.jpg";
import girlbu from "./assets/characters/girlbu.jpg";
import childsp from "./assets/characters/childsp.jpg";
import auntyto from "./assets/characters/auntyto.jpg";
import auntyfan from "./assets/characters/auntyfan.jpg";
import auntycup from "./assets/characters/auntycup.jpg";


import walkingStick from "./assets/options/walkingstick.jpg";
import slippers from "./assets/options/slippers.png";
import spoon from "./assets/options/spoon.png";
import walkingFrame from "./assets/options/walkingFrame.png";
import pillow from "./assets/options/pillow.png";
import bottle from "./assets/options/bottle.png";
import bigSpoon from "./assets/options/spoon.png";
import cupLid from "./assets/options/cupLid.png";
import napkin from "./assets/options/napkin.png";
import velcroShirt from "./assets/options/velcroShirt.png";
import nonSlipMat from "./assets/options/nonSlipMat.png";
import reacher from "./assets/options/reacher.png";
import voiceLight from "./assets/options/voiceLight.png";

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
      character: grandpasl,
      question: "What should Grandpa use?",
      options: [
        { img: slippers,label: "Slippers", correct: false },
                { img: walkingStick,label: "Walking Stick", correct: true },

        { img: spoon,label: "Spoon", correct: false },
      ],
    },
    {
      scenario: "Grandma walks to the park. Her legs get tired.",
      character: grandmapark,
      question: "What helps Grandma walk safely?",
      options: [
        { img: pillow,label: "pillow", correct: false },
        { img: bottle, label: "bottle",correct: false },    
            { img: walkingFrame, label: "walking Frame", correct: true },

      ],
    },
  ],

  feeding: [
    {
      scenario: "Uncle’s hands shake while eating.",
      character: unclesp,
      question: "What helps Uncle eat easily?",
      options: [
        { img: bigSpoon,label: "bigSpoon", correct: true },
        { img: napkin,label: "napkin", correct: false },
        { img: pillow,label: "pillow", correct: false },
      ],
    },
    {
      scenario: "A child spills water while drinking.",
      character: childsp,
      question: "What helps the child drink safely?",
      options: [
        { img: spoon,label: "spoon", correct: false },

        { img: cupLid,label: "cupLid",  correct: true },

        { img: napkin,label: "napkin", correct: false },
      ],
    },
    
  ],

  grooming: [
    {
      scenario: "Girl finds it hard to button her shirt.",
      character: girlbu,
      question: "What shirt can she wear?",
      options: [
     
        { img: spoon,label: "spoon", correct: false },
         { img: velcroShirt,label: "velcroShirt",correct: true },
        { img: napkin,label: "napkin", correct: false },
      ],
    },
    {
      scenario: "Grandpa is scared of slipping in the shower.",
      character: grandpabt,
      question: "What should Grandpa use?",
      options: [
        { img: nonSlipMat,label: "non Slip Mat", correct: true },
        { img: pillow,label: "pillow", correct: false },
        { img: napkin,label: "napkin", correct: false },
      ],
    },
    {
      scenario: "Aunty drops towel and cannot bend.",
      character: auntyto,
      question: "What should Aunty use?",
      options: [ { img: spoon,label: "spoon", correct: false },
        { img: reacher, label: "reacher",correct: true },
       
        { img: napkin,label: "napkin", correct: false },
      ],
    },
  ],

  smarthome: [
    {
      scenario: "Uncle is in bed and the room is dark.",
      character: unclebe,
      question: "What can Uncle use?",
      options: [
       
        
        { img: pillow,label: "pillow", correct: false }, { img: voiceLight,label: "remote", correct: true },{ img: spoon,label: "spoon", correct: false }
      ],
    },
    {
      scenario: "It is very hot,Aunty cannot reach the fan switch",
      character: auntyfan,
      question: "What can Aunty use?",
      options: [
       
        { img: spoon,label: "spoon", correct: false },
        { img: pillow,label: "pillow", correct: false }, { img: voiceLight, label: "remote",correct: true },
      ],
    },
    {
      scenario: "Aunty wants to take a cup from cabinet,Her hands are week and she cannot open the cabinet door",
      character: auntycup,
      question: "What can help Aunty?",
      options: [
       
        { img: spoon,label: spoon, correct: false },
         { img: voiceLight, label: "remote",correct: true },
        { img: pillow,label: "pillow", correct: false }
      ],
    },
  ],
};
