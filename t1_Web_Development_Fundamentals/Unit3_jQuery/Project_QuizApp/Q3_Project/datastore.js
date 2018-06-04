// array of image objects
const IMAGES = [
  {
    imgSrc: 'https://i.imgur.com/yeGtNsv.jpg',
    imgAlt: 'Starting Page image'
  },
  {
    imgSrc: 'https://i.ytimg.com/vi/me9oM1Gjiqs/maxresdefault.jpg',
    imgAlt: 'The End'
  }
];

// object for string notifications
const RESULTS_NOTIFICATION = {
  'CORRECT': {
    'message': 'You got it right with:',
    'imgSrc': 'https://i.imgur.com/t2feeOc.jpg',
    'imgAlt': 'Correct Answer!'
  },
  'INCORRECT': {
    'message': 'The right answer is:',
    'imgSrc': 'https://i.imgur.com/lZ0YY4l.jpg',
    'imgAlt': 'Wrong Answer'
  }
};

// array of question objects
const STORE = [{
    num: 1,
    question: 'What does "Atari" from Atari games mean?',
    imgSrc: 'https://fthmb.tqn.com/j26Vc4ZEkajn69qKmq56zxxh1Vo=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/vintage-atari-video-game-system-2600-162192476-5a31e03b842b170037ac1248.jpg',
    imgAlt: 'atari 2600',
    answer1: 'Freedom',
    answer2: 'Success',
    answer3: 'Justice',
    answer4: 'Power',
    solution: 'Success'
  },
  {
    num: 2,
    question: 'What video game did Mario, the Nintendo character first appear in?',
    imgSrc: 'https://www.playretrogames.com/gameimages/3172-super-mario-bros-2-n.jpg',
    imgAlt: 'mario blocky image',
    answer1: 'Donkey Kong',
    answer2: 'Mario Bros',
    answer3: 'Super Mario Bros',
    answer4: 'Mario\'s Cement Factory',
    solution: 'Donkey Kong'
  },
  {
    num: 3,
    question: 'Which of the below is the oldest game console?',
    imgSrc: 'https://sharing.turnto23.com/sharelstv/photo/2016/11/18/16x9/3_Radical_Retro_Video_Game_Consoles_Maki_0_50007012_ver1.0_640_480.jpg',
    imgAlt: 'old console of NES',
    answer1: 'NES',
    answer2: 'Magnavox Odyssey',
    answer3: 'Game Boy',
    answer4: 'Atari 2600',
    solution: 'Magnavox Odyssey'
  },
  {
    num: 4,
    question: 'Which of the below is \'not\' part of the triforce within The Legend of Zelda games?',
    imgSrc: 'https://www.thinkgeek.com/images/products/additional/large/jipm_loz_triforce_light_vendor.jpg',
    imgAlt: 'triforce nightlight image',
    answer1: 'Triforce of Power',
    answer2: 'Triforce of Courage',
    answer3: 'Triforce of Speed',
    answer4: 'Triforce of Wisdom',
    solution: 'Triforce of Speed'
  },
  {
    num: 5,
    question: 'What color is the ring of death on an Xbox 360 signifying hardware failure?',
    imgSrc: 'https://i.ytimg.com/vi/Tyxa3dsgR9o/maxresdefault.jpg',
    imgAlt: 'buried xbox 360',
    answer1: 'purple',
    answer2: 'yellow',
    answer3: 'red',
    answer4: 'blue',
    solution: 'red'
  },
  {
    num: 6,
    question: 'What character do you play as in The Legend of Zelda?',
    imgSrc: 'https://i.pinimg.com/originals/be/8a/48/be8a4834cd1a44c18f36929729b68143.png',
    imgAlt: 'The legend of zelda character silhouette',
    answer1: 'Zelda',
    answer2: 'Link',
    answer3: 'Tinkle',
    answer4: 'Mario',
    solution: 'Link'
  },
  {
    num: 7,
    question: 'How many forms does the final boss of The Legend of Dragoon have?',
    imgSrc: 'https://www.mobygames.com/images/covers/l/151002-the-legend-of-dragoon-playstation-front-cover.png',
    imgAlt: 'The Legend of Dragoon PS cover',
    answer1: '1',
    answer2: '3',
    answer3: '7',
    answer4: '10',
    solution: '7'
  },
  {
    num: 8,
    question: 'Who composed the music for Final Fantasy?',
    imgSrc: 'https://i0.wp.com/twincitiesgeek.com/wp-content/uploads/2015/01/NNxLT.jpg',
    imgAlt: 'Distant World Final Fantasy Orchestra image',
    answer1: 'Jeremy Soule',
    answer2: 'Junichi Masuda',
    answer3: 'Yoko Shimomura',
    answer4: 'Nobuo Uematsu',
    solution: 'Nobuo Uematsu'
  },
  {
    num: 9,
    question: 'What were the first two versions of Pokemon?',
    imgSrc: 'https://i.imgur.com/GNqWvEH.jpg',
    imgAlt: 'Pokemon Go image',
    answer1: 'Sun and Moon',
    answer2: 'Gold and Silver',
    answer3: 'Red and Green',
    answer4: 'Ruby and Sapphire',
    solution: 'Red and Green'
  },
  {
    num: 10,
    question: 'What was the name given to the Playstation 2\'s CPU?',
    imgSrc: 'https://www.unilad.co.uk/wp-content/uploads/2017/05/FacebookThumbnailps222.jpg',
    imgAlt: 'playstation 2 image',
    answer1: 'Emotion Engine',
    answer2: 'Broadway',
    answer3: 'Espresso',
    answer4: 'IBM PowerPC Gekko',
    solution: 'Emotion Engine'
  }
];
