import {CardCharacter} from './../cards/CardCharacter';

export const MenuCharacter = async () => {
  const contentCarouselTemp1 = [
    {
      img: './assets/barnes.jpg',
      nickname: 'Winter soldier',
      name: 'Bucky barnes',
    },
    {
      img: './assets/yelena.jpg',
      nickname: 'Black widow',
      name: 'Yelena belova',
    },
    {
      img: './assets/vision.jpg',
      nickname: 'Vision',
    },
    {
      img: './assets/ikaris.jpg',
      nickname: 'Ikaris',
    },
    {
      img: './assets/loki.jpg',
      nickname: 'Loki',
    },
    {
      img: './assets/magik.jpg',
      nickname: 'Magik',
      name: 'Illyana Rasputin(a)',
    },
  ];
  const carouselTemp1 = `
    <div style="display: flex; justify-content: space-evenly; overflow: hidden; padding: 20px;">
      <div style="width: 25%; margin: 0 9px">
        ${await CardCharacter('', contentCarouselTemp1[0])}
      </div>
      <div style="width: 25%; margin: 0 9px">
        ${await CardCharacter('', contentCarouselTemp1[1])}
      </div>
      <div style="width: 25%; margin: 0 9px">
        ${await CardCharacter('', contentCarouselTemp1[2])}
      </div>
      <div style="width: 25%; margin: 0 9px">
        ${await CardCharacter('', contentCarouselTemp1[3])}
      </div>
      <div style="width: 25%; margin: 0 9px">
        ${await CardCharacter('', contentCarouselTemp1[4])}
      </div>
      <div style="width: 25%; margin: 0 9px">
        ${await CardCharacter('', contentCarouselTemp1[5])}
      </div>
    </div>
  `;

  return `
    <div class="header__submenu">
      <div class="header__submenu-links">
        <ul class="header__menu menu__container">
          <li class="menu__item">
            <a href="#" class="menu__link">All characters</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Team & groups</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Explore all</a>
          </li>
        </ul>
      </div>
      <div class="header__submenu-content">
        <h2 class="header__submenu-title">Trending in the universe</h2>
        ${carouselTemp1}
      </div>
      <div class="header__submenu-footer">
      </div>
    </div>
  `;
};
