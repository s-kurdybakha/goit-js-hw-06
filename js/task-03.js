const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

const markup = images
	.map(image => `<li><img class="picture" src=${image.url} width = '500' alt='${image.alt}'></img></li>`)
  .join('')

  galleryEl.insertAdjacentHTML('beforeend', markup)

// for (let i = 0; i < images.length; i += 1) {
//   galleryEl.insertAdjacentHTML("afterbegin", `<li class="galleryList"><img class="galleryImg" src= "${images[i].url}" alt="${images[i]}"></img></li>`)
// };





