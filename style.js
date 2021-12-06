const excuseStart = [
  'Sorry, I cant, because',
  'I wish I could, but',
  'Something came up, namely',
  'I double-booked myself and',
  'I am so sorry, but',
  'Hi, yeah, so the thing is',
  'Oh no, was that today? I am so sorry but',
];

const prepositions = [
  'I did not forsee that',
  'I forgot that',
  'I just remembered that',
  'I overslept and discovered that',
  'I just found out that',
  'I recently made the discovery that',
];

const subjects = [
  'my',
  'my sisters',
  'my brothers',
  'my cousins',
  'my mothers',
  'my fathers',
  'my landlords',
  'my neighbours',
  'my aunts',
  'my uncles',
];

const objects = [
  'cat',
  'dog',
  'goldfish',
  'parrot',
  'house',
  'bed',
  'sofa',
  'bathroom',
  'bedroom',
  'car',
  'motorcycle',
  'office',
  'school',
  'rug',
  'door',
  'bicycle',
  'TV',
  'computer',
  'phone',
  'imaginary friend',
];

const events = [
  'drowned.',
  'died.',
  'broke a leg.',
  'got lost.',
  'disappeared.',
  'imploded.',
  'needed a glowup.',
  'asked me for a haircut.',
  'caught on fire.',
  'got launched into space.',
  'got their Hogwarts acceptance letter',
];

const excuseEnd = [
  'Maybe some other time?',
  'I will have to get back to you later.',
  'But lets catch up soon?',
  'I will let you know once the situation has changed.',
  'Thank you so much for your understanding.',
  'I will have to do a raincheck this one time.',
  'Maybe next week instead?',
];

const theExcuse = document.querySelector('.the-excuse');
const generateButton = document.querySelector('.generate');
const excuseConfirm = document.querySelector('.excuse-confirm');

generateButton.addEventListener('click', () => {
  const randomExcuseStart = excuseStart.sort((a, b) => 0.5 - Math.random());
  const randomPreposition = prepositions.sort((a, b) => 0.5 - Math.random());
  const randomSubject = subjects.sort((a, b) => 0.5 - Math.random());
  const randomObject = objects.sort((a, b) => 0.5 - Math.random());
  const randomEvent = events.sort((a, b) => 0.5 - Math.random());
  const randomExcuseEnd = excuseEnd.sort((a, b) => 0.5 - Math.random());

  const finishedExcuse = `${randomExcuseStart[0]} ${randomPreposition[0]} ${randomSubject[0]} ${randomObject[0]} ${randomEvent[0]} ${randomExcuseEnd[0]}`;
  theExcuse.innerHTML = finishedExcuse;

  excuseConfirm.style.opacity = '1';

  const myFont = new FontFace('myFont', 'url(font/SpecialElite-Regular.woff)');

  myFont.load().then(function (font) {
    document.fonts.add(font);
    const canvas = document.getElementById('card');
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const images = document.querySelectorAll('#gallery-img');
    images.forEach((image) => {
      image.addEventListener('click', () => {
        ctx.fillStyle = 'black';
        ctx.drawImage(image, 0, 0);
        ctx.globalAlpha = 0.5;
        ctx.fillRect(0, 0, 300, 80);
        ctx.fillRect(0, 250, 300, 50);
        ctx.font = '18px myFont';
        ctx.fillStyle = 'white';
        ctx.globalAlpha = 1.0;
        ctx.fillText(`${randomExcuseStart[0]}`, 5, 25, 295);
        ctx.fillText(`${randomPreposition[0]}`, 5, 47, 295);
        ctx.fillText(
          `${randomSubject[0]} ${randomObject[0]} ${randomEvent[0]}`,
          5,
          69,
          295
        );
        ctx.fillText(`${randomExcuseEnd[0]}`, 5, 280, 295);
        /*
        ctx.fillRect(5, 5, 590, 50);
        ctx.fillRect(5, 62, 590, 50);
        ctx.fillRect(5, 515, 590, 50);
        ctx.font = '34px myFont';
        ctx.fillStyle = 'white';
        ctx.globalAlpha = 1.0;
        ctx.fillText(
          `${randomExcuseStart[0]} ${randomPreposition[0]}`,
          5,
          40,
          580
        );
        ctx.fillText(
          `${randomSubject[0]} ${randomObject[0]} ${randomEvent[0]}`,
          5,
          95,
          580
        );
        ctx.fillText(`${randomExcuseEnd[0]}`, 5, 550, 580);*/
      });
    });
  });
});

const galleryButton = document.querySelector('.gallery-button');
const showGallery = document.querySelector('.gallery-container');
const cardContainer = document.querySelector('.card-container');

galleryButton.addEventListener('click', () => {
  showGallery.style.opacity = '1';
  cardContainer.style.opacity = '1';
});
