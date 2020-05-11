import {CardVertical} from './../cards/CardVertical';

export const MenuGame = async () => {
  const contentcarouselContainer4 = [
    {
      img: './assets/marvelultimatealliance3.jpg',
      title: 'Marvel Ultimate Alliance 3: The Black Order',
      description: '2019',
    },
    {
      img: './assets/marvelsironmanvr.jpg',
      title: "Marvel's Iron Man VR",
    },
    {
      img: './assets/marvelcontestofchapions.jpg',
      title: 'Marvel Contest of Champions',
    },
    {
      img: './assets/marvelsspider-man.jpg',
      title: "Marvel's Spider-Man",
      description: '2018',
    },
    {
      img: './assets/marvelstrikeforce.jpg',
      title: 'Marvel Strike Force',
    },
    {
      img: './assets/marvelfuturefight.jpg',
      title: 'Marvel Future Fight',
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
            <a href="#" class="menu__link">Marvel Ultimate Alliance 3</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Marvel's Iron Man VR</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Marvel Contest of Champions</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">See All games</a>
          </li>
        </ul>
      </div>
      <div class="header__submenu-content">
        <h2 class="header__submenu-title">Games</h2>

        ${carouselTemp4}
      </div>
      <div class="header__submenu-footer">
      </div>
    </div>
  `;
};
