const morseCodeChart = {
    "A":".-",
    "B":"-...",
    "C":"-.-.",
    "D":"-..",
    "E":".",
    "F":"..-.",
    "G":"--.",
    "H":"....",
    "I":"..",
    "J":".---",
    "K":"-.-",
    "L":".-..",
    "M":"--",
    "N":"-.",
    "O":"---",
    "P":".--.",
    "Q":"--.-",
    "R":".-.",
    "S":"...",
    "T":"-",
    "U":"..-",
    "V":"...-",
    "W":".--",
    "X":"-..-",
    "Y":"-.--",
    "Z":"--..",
    " ":"/",
    "1":".----",
    "2":"..---",
    "3":"...--",
    "4":"....-",
    "5":".....",
    "6":"-....",
    "7":"--...",
    "8":"---..",
    "9":"----.",
    "0":"-----",
    ".":".-.-.-",
    ",":"--..--",
    ":":"---...",
    "?":"..--..",
    '\'':".----.",
    "-":"-....-",
    "/":"-..-.",
    "(":"#",
    ")":"#",
    '"':"#",
    "@":"#",
    "!":"#",
    "=":"-...-",
};

// let codeText = "";

export const textToCode = (inText) => {
  console.log ("Translating...")
  // splitting my input inText
  // .split splits and inserts a comma between chars incl spaces
  // use delimiter <space> to replace space with comma
  // my array (inText.toUpperCase().split("")) before .map
  return inText.toUpperCase().split("").map(code => {
    return morseCodeChart[code] ? morseCodeChart[code] : code;
  }).join("");
}
