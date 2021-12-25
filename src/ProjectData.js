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
    description: "Quiz-like app made for studying for the Kanji Kentei using scraped yojijukugo (Four-character idiom) info from a dictionary-like website. One randomly chosen idiom is selected and displayed on the screen, and one randomly chosen kanji letter is taken away. You must get the correct kanji letter. You can choose it to be displayed by level (5-1) or choose all (no particular level chosen)",
    techUsed: "ReactJS (Local JSON Fetch), vanilla CSS",
    image: "/images/blog.png",
    github: "https://github.com/jcc98/yoji-app",
    website: "https://yoji-app.vercel.app/"
  },
  {
    name: "RGB Game",
    description: "A random RGB value is chosen and displayed on the screen (red, green, blue values. they range from 0 to 255). You must choose the correct color among four different choices. Three choices are randomly generated and are unrelated to the designated RGB value. It also has a time limit and a simple score system.",
    techUsed: "VanillaJS, Materialize CSS + SCSS",
    image: "/images/rgb.png",
    github: "https://github.com/jcc98/RGB-Game",
    website: "https://rgb-game-quiz.netlify.app"
  },
  {
    name: "Kanji Quiz Game",
    description: "Fetches Japanese words from an API. A randomly chosen kanji is displayed and you must write a word that contains it. It has a time and score system.",
    techUsed: "Vanilla JS (API Fetch), Skeleton CSS",
    image: "/images/apikanjiquiz.png",
    github: "https://github.com/jcc98/Kanji-Quiz-Game",
    website: "https://kanji-quiz-game.netlify.app/"
  }
]