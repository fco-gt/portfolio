export type Projects = typeof projects;

const projects = [
  {
    name: "Mankekito",
    description: "Bot de Discord multifuncional",
    image: "/images/projects/mankekito.png",
    isPrivate: true,
    invite:
      "https://discord.com/oauth2/authorize?client_id=758059320238931978&scope=bot&permissions=27652058174",
    topgg: "https://top.gg/bot/758059320238931978",
    badges: ["javascriptTT", "nodejsTT", "mongodbTT"],
  },
  {
    name: "GT-Links",
    description: "Acortador de enlaces",
    image: "/images/projects/gt-links.png",
    isPrivate: false,
    github: "https://github.com/fco-gt/gt-links",
    url: "https://gt-links.vercel.app",
    badges: [
      "javascriptTT",
      "mongodbTT",
      "nextjsTT",
      "typescriptTT",
      "tailwindcssTT",
    ],
  },
  {
    name: "Master Bikes",
    description: "E-Commerce de una tienda de bicicletas (ficticio)",
    image: "/images/projects/gt-bikes.png",
    isPrivate: false,
    github: "https://github.com/fco-gt/master-bikes.png",
    url: "https://master-bikes.vercel.app",
    badges: [
      "nextjsTT",
      "typescriptTT",
      "javascriptTT",
      "tailwindcssTT",
      "reactTT"
    ]
  },
  {
    name: "GT-Bikes",
    description: "APIREST Para un catalogo de bicicletas",
    image: "/images/projects/gt-bikes.png",
    isPrivate: false,
    github: "https://github.com/fco-gt/bikes-api",
    url: "https://bikes-api.onrender.com",
    badges: ["javascriptTT", "nodejsTT"],
  },
  {
    name: "Spotify Playlist",
    description: "Web que muestra tus playlists de Spotify",
    image: "/images/projects/spotify-playlists.png",
    isPrivate: false,
    github: "https://github.com/fco-gt/playlist",
    url: "https://fco-gt.github.io/playlist/",
    badges: ["html5TT", "css3TT", "javascriptTT"],
  },
  {
    name: "Animated Login/Register",
    description: "Formulario de login y registro animado",
    image: "/images/projects/login-register.png",
    isPrivate: false,
    github: "https://github.com/fco-gt/LogIn-Register",
    url: "https://fco-gt.github.io/LogIn-Register/",
    badges: ["html5TT", "css3TT", "javascriptTT"],
  },
  {
    name: "Mankekito GIF's",
    description: "Libreria NPM para obtener GIF's",
    image: "/images/projects/mankekito-gifs.png",
    isPrivate: false,
    github: "https://github.com/fco-gt/mankekito-gifs",
    url: "https://www.npmjs.com/package/mankekito-gifs",
    badges: ["javascriptTT", "nodejsTT"],
  },
];

export default projects;
