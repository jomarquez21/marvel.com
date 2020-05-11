import {CardVertical} from './../cards/CardVertical';

export const MenuMovie = async () => {
  const contentcarouselContainer4 = [
    {
      img: './assets/eternals.jpg',
      title: 'The eternals',
      description: 'Feb 12, 2021',
    },
    {
      img: './assets/blackwidow.jpg',
      title: 'Black Widow',
      description: 'Nov 6, 2020',
    },
    {
      img: './assets/spider-movie.jpg',
      title: 'Spider-man: Far From Home',
      description: '2019',
    },
    {
      img: './assets/darkphoenix.jpg',
      title: 'X-Men: Dark Phoenix',
      description: '2019',
    },
    {
      img: './assets/endgame.jpg',
      title: 'Avengers: Endgame',
      description: '2019',
    },
    {
      img: './assets/captainmarvel.jpg',
      title: 'Captian Marvel',
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
            <a href="#" class="menu__link">Black widow</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Avengers: Endgame</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Captain marvel</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">See all movies</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Disney+</a>
          </li>
        </ul>
      </div>
      <div class="header__submenu-content">
        <h2 class="header__submenu-title">Movies</h2>

        ${carouselTemp4}
      </div>
      <div class="header__submenu-footer">
      </div>
    </div>
  `;
};
