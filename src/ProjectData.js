export const projectData = [

  {
    name: "Static Blog",
    description: "Markdown static Next blog hosted on Vercel. Can be filtered by subject topic and has dark mode. This is where I mainly write in Japanese or keep some notes in English.",
    techUsed: "ReactJS, Next, Styled Components, Markdown, Typescript",
    image: "/images/blog.png",
    github: "https://github.com/jcc98/nextblog",
    website: "https://jcc98.vercel.app/" 
  },
  {
    name: "Yoji App",
    description: "Quiz-like app made for studying for the Kanji Kentei using scraped yojijukugo (Four-character idiom) info from a dictionary-like website. One randomly chosen idiom is selected and displayed on the screen, and one randomly chosen kanji letter is taken away. You must get the kanji letter taken away correct. You get a definition of the randomly chosen idiom and its hiragana reading for context. You can choose it to be displayed by level (5-1) or choose all (no particular level chosen)",
    techUsed: "ReactJS (Local JSON Fetch), vanilla CSS, data scraped with Javascript",
    image: "/images/yoji.png",
    github: "https://github.com/jcc98/yoji-app",
    website: "https://yoji-app.vercel.app/"
  },
  {
    name: "RGB Game",
    description: "A random RGB value is chosen and displayed on the screen (red, green, blue values. they range from 0 to 255). You must choose the correct color among four different choices. Three choices are randomly generated and are unrelated to the designated RGB value. It also has a time limit and a simple score system.",
    techUsed: "Vanilla Javascript, Materialize CSS + SCSS",
    image: "/images/rgb.png",
    github: "https://github.com/jcc98/RGB-Game",
    website: "https://rgb-game-quiz.netlify.app"
  },
  {
    name: "Kanji Quiz Game",
    description: "Fetches Japanese words from an API. A randomly chosen kanji is displayed and you must write a word that contains it. It has a time and score system.",
    techUsed: "Vanilla Javascript (API Fetch), Skeleton CSS",
    image: "/images/apikanjiquiz.png",
    github: "https://github.com/jcc98/Kanji-Quiz-Game",
    website: "https://kanji-quiz-game.netlify.app/"
  },
]

export const extraProjects = [
  {
    name: "Number format calculator",
    description: "Converts traditional number format to the Japanese style",
    techUsed: "HTML, Vanilla CSS, Vanilla Javascript",
    github: "https://github.com/jcc98/JpCalcApp",
    website: "https://jp-calculator-app.netlify.app/",
    image: "/images/jpcalc.png"
  },
  {
    name: "Pomodoro App",
    description: "Pomodoro app with barebone features. One of my first projects.",
    techUsed: "HTML, Vanilla CSS, Vanilla Javascript",
    github: "https://github.com/jcc98/Pomodoro",
    website: "https://simple-pomodoro-app.netlify.app/",
    image: "/images/pomodoro.png"
  },
  {
    name: "Tic Tac Toe Game",
    description: "Simple tic tac toe app with barebone features. Was planning on adding a vs CPU feature... My second project. ",
    techUsed: "HTML, Vanilla CSS, Vanilla Javascript",
    github: "https://github.com/jcc98/Tictactoe",
    website: "https://tictactoegame-app.netlify.app/",
    image: "/images/tictactoe.png"
  }

]