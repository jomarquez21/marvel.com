import {CardVertical} from './../cards/CardVertical';

export const MenuComic = async () => {
  const contentcarouselContainer4 = [
    {
      img: './assets/excalibur.jpg',
      title: 'Excalibu (2019) #1',
      description: '2019',
    },
    {
      img: './assets/strange.jpg',
      title: 'Doctor Strange Annual (2019) #1',
      description: '2019',
    },
    {
      img: './assets/red_goblin.jpg',
      title: 'Red Goblin: Red Death (2019) #1',
      description: '2019',
    },
    {
      img: './assets/fantastic_four.jpg',
      title: 'Fantastic Four: Grand Design (2019) #1',
      description: '2019',
    },
    {
      img: './assets/silver_surfer.jpg',
      title: 'silver Surfer: Black (2019) #1',
      description: '2019',
    },
    {
      img: './assets/dr_aphra.jpg',
      title: 'Star wars: Doctor Aphra Annual (2019) #1',
      description: '2019',
    },
  ];

  const carouselTemp4 = `
    <div style="display: flex; justify-content: space-evenly; overflow: hidden; padding: 20px;">
      <div style="width: 270px; margin-right: 10px">
        ${await CardVertical('', contentcarouselContainer4[0])}
      </div>
      <div style="width: 270px; margin-right: 10px">
        ${await CardVertical('', contentcarouselContainer4[1])}
      </div>
      <div style="width: 270px; margin-right: 10px">
        ${await CardVertical('', contentcarouselContainer4[2])}
      </div>
      <div style="width: 270px; margin-right: 10px">
        ${await CardVertical('', contentcarouselContainer4[3])}
      </div>
      <div style="width: 270px; margin-right: 10px">
        ${await CardVertical('', contentcarouselContainer4[4])}
      </div>
      <div style="width: 270px; margin-right: 10px">
        ${await CardVertical('', contentcarouselContainer4[5])}
      </div>
    </div>
  `;

  return `
    <div class="header__submenu">
      <div class="header__submenu-links">
        <ul class="header__menu menu__container">
          <li class="menu__item">
            <a href="#" class="menu__link">Release calendar</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Marvel Unlimited</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Shop digital comics</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Reading lists</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Print subscriptions</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">All comics</a>
          </li>
        </ul>
      </div>
      <div class="header__submenu-content">
        <h2 class="header__submenu-title">Latest comics</h2>

        ${carouselTemp4}
      </div>
      <div class="header__submenu-footer">
        <h4 class="header__submenu-footer-title">Browse by</h4>
        <ul class="header__menu menu__container">
          <li class="menu__item">
            <a href="#" class="menu__link">Series</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Character</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Creator</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Event</a>
          </li>
        </ul>
      </div>
    </div>
  `;
};
