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
import light from "./assets/characters/light.png";
import shirtman from "./assets/characters/shirtm.png";
import signal from "./assets/characters/signal.png";
import spoonChild from "./assets/characters/spoonchild.png";
import uncle from "./assets/characters/uncle.png";
import bowlChild from "./assets/characters/bowlchild.png";
import child from "./assets/characters/child.png";
import childWh from "./assets/characters/childwh.png";
import combGirl from "./assets/characters/combgirl.png";
import cupboard from "./assets/characters/cupboard.png";
import door from "./assets/characters/door.png";
import cq from "./assets/characters/cq.png";
import h1 from "./assets/characters/h1.png";
import wq from "./assets/characters/wq.png";

import walkingStick from "./assets/options/walkingstick2.png";
import slippers from "./assets/options/slippers2.png";
import spoon from "./assets/options/spoon2.png";
import walkingFrame from "./assets/options/walkingFrame2.png";
import pillow from "./assets/options/pillow2.png";
import bottle from "./assets/options/bottle2.png";
import bigSpoon from "./assets/options/spoon2.png";
import cupLid from "./assets/options/cupLid2.png";
import napkin from "./assets/options/napkin2.png";
import velcroShirt from "./assets/options/velcroShirt.png";
import nonSlipMat from "./assets/options/nonSlipMat2.png";
import reacher from "./assets/options/reacher2.png";
import t1 from "./assets/options/t1.png";
import t2 from "./assets/options/t2.png";
import t3 from "./assets/options/t3.png";
import c1 from "./assets/options/c1.png";
import w1 from "./assets/options/w1.png";

import voiceLight from "./assets/options/remote1.png";
import bigButtons from "./assets/options/bigbuttons.png";
import bowl from "./assets/options/bowl.png";
import comb from "./assets/options/comb.png";
import curveSpoon from "./assets/options/curvespoon.png";
import remote1 from "./assets/options/remote1.png";
import remote2 from "./assets/options/remote2.png";
import remote3 from "./assets/options/remote3.png";
import shirtVelcro from "./assets/options/shirtvel.png";
import sign from "./assets/options/sign.png";
import wheelchair from "./assets/options/wheelchair.png";
import holdwalk from "./assets/options/holdandwalk.png";
import holdthem from "./assets/options/holdthemselves.png";
import closeeyes from "./assets/options/closeeyes.jpeg";
import crossquick from "./assets/options/crossquick.png";
import bigspoon from "./assets/options/bigspoon.png";
import bigplate from "./assets/options/bigplate.png";
import foodwaste from "./assets/options/foodwaste.png";
import zip from "./assets/options/zip.png";
import shirt from "./assets/options/shirt.png";
import simplecomb from "./assets/options/simplecomb.png";
import autodoor from "./assets/options/autodoor.png";

import icon1 from "./assets/characters/icon1.png"
import icon2 from "./assets/characters/icon2.png"
import icon3 from "./assets/characters/icon3.png"
import icon4 from "./assets/characters/icon4.png"
/* ===== CATEGORIES ===== */
export const categories = [
  { key: "mobility", label: "Mobility",img:icon1},
  { key: "feeding", label: "Feeding",img:icon2 },
  { key: "grooming", label: "Grooming",img:icon3 },
  { key: "smarthome", label: "Smart Home",img:icon4 },
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
    {
      scenario: "A child cannot walk because of a fracture or cerebral palsy (CP)",
      character: childWh,
      question: "Which option helps them move safely?",
      options: [
        { img: wheelchair,label: "Wheelchair", correct: true },
        { img: holdwalk, label: "Hold and walk",correct: false },    
        { img: holdthem, label: "Carry themselves", correct: false },

      ],
    },
    {
      scenario: "When crossing the road",
      character: signal,
      question: "what should we do?",
      options: [
        { img: crossquick,label: "Cross anywhere quickly", correct: false },
        { img: sign, label: "Look both ways and cross safely ",correct: true },    
        { img: closeeyes, label: "cross in red signal", correct: false },

      ],
    },
  ],

  feeding: [
    {
      scenario: "Uncle’s hands shake while eating.",
      character: unclesp,
      question: "What helps Uncle eat easily?",
      options: [
        { img: bigspoon,label: "bigSpoon", correct: true },
        { img: shirt,label: "shirt", correct: false },
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
    {
      scenario: "A child cannot scoop food because the bowl moves.",
      character: bowlChild,
      question: "What can help?",
      options: [
        { img: bowl,label: "Suction-based bowl ", correct: true },

        { img: foodwaste,label: "Throw food on the floor",  correct: false },

        { img: bigplate,label: "Use a big plate", correct: false },
      ],
    },
    {
      scenario: "A child has trouble scooping or eating food because their hand movements are limited. ",
      character: spoonChild,
      question: "What can help?",
      options: [
        

        { img: spoon,label: "Regular spoon",  correct: false },
        { img: curveSpoon,label: "Curved/angled spoon", correct: true },

        { img: cupLid,label: "cup", correct: false },
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
         { img: bigButtons,label: "bigbuttons",correct: true },
        { img: zip,label: "zipper", correct: false },
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
      options: [ { img: t1,label: "spoon", correct: false },
        { img: t2, label: "reacher",correct: true },
       
        { img: t3,label: "napkin", correct: false },
      ],
    },
    {
      scenario: "A man cannot button his shirt because his hands don’t move well.",
      character: shirtman,
      question: "What can help him?",
      options: [ { img: shirtVelcro,label: "Adaptive clothing with Velcro ", correct: true },
        { img: shirt, label: "Regular buttons",correct: false },
       
        { img: zip,label: "Zipper pull", correct: false },
      ],
    },
    {
      scenario: "A child cannot comb their hair because their hands don’t move well. ",
      character: cq,
      question: "What can help?",
      options: [ { img: c1,label: "Hairbrush with an long handle ", correct: true },
        { img: simplecomb, label: "Regular hairbrush",correct: false },
       
        { img: spoon,label: "Spoon", correct: false },
      ],
    },
  ],

  smarthome: [
    {
      scenario: "Uncle is in bed and the room is dark.",
      character: unclebe,
      question: "What can Uncle use?",
      options: [
       
        
        { img: pillow,label: "pillow", correct: false }, { img: remote2,label: "remote", correct: true },{ img: spoon,label: "spoon", correct: false }
      ],
    },
    
    {
      scenario: "A man cannot reach the light switch to turn off the light. ",
      character: light,
      question: "What can help?",
      options: [
       
        { img: remote2,label: "Smart home system with voice/ remote control ", correct: true },
         { img: bowl, label: "bowl",correct: false },
        { img: pillow,label: "Throw a ball at the switch", correct: false }
      ],
    },
    {
      scenario: "A man cannot reach the top or bottom of a cupboard.",
      character: h1,
      question: "What can help him access it?",
      options: [
       
        { img: remote3,label: "Press the lower/up-down switch to move the cupboard", correct: true },
         { img: reacher, label: "reacher",correct: false },
        { img: napkin,label: "napkin", correct: false }
      ],
    },
    {
      scenario: "A man cannot reach the door handle",
      character: wq,
      question: "What can help him open the door easily?",
      options: [
       
        
         { img: comb, label: "comb",correct: false },
         { img: w1,label: "Automatic door with remote or sensor ", correct: true },
        { img: reacher,label: "reacher", correct: false }
      ],
    },
  ],
};
