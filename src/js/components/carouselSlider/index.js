import {ready} from './../../util/ready';

export const CarouselSlider = async (collection) => {
  const totalElement = collection.length - 1;
  let currentElement = 0;

  ready(function () {
    const parentList = document.getElementsByClassName(
      'carousel-slider__list-inner'
    )[0];

    const updateList = (index) => {
      parentList.style.transform = `translateX(${index}%)`;
    };

    setInterval(() => {
      const newPosition = currentElement + 1;

      if (newPosition <= totalElement) {
        currentElement = newPosition;
        updateList(`-${newPosition * 100}`);
      } else {
        currentElement = 0;
        updateList(`0`);
      }
    }, 5000);
  });

  const items = collection.map((data) => {
    return `
      <li class="carousel-slider__item">
        ${data}      
      </li>
    `;
  });

  return `
    <div class="carousel-slider__container">
      <div class="carousel-slider__list">
        <ul class="carousel-slider__list-inner">
          ${items.join('')}
        </ul>
      </div>
    </div>
  `;
};
