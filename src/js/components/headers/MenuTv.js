import {CardVertical} from './../cards/CardVertical';

export const MenuTv = async () => {
  const contentcarouselContainer4 = [
    {
      img: './assets/agentsofshield.jpg',
      title: "Marvel's Agents of S.H.I.E.L.D. | Season 7",
      description: 'May 27, 2020',
    },
    {
      img: './assets/runaways.jpg',
      title: "Marvel's Runaways | Season 3",
      description: '2019',
    },
    {
      img: './assets/marvelsheroproject.jpg',
      title: "Marvel's Hero Project | Season 1",
      description: '2019',
    },
    {
      img: './assets/animatedmarvelrising.jpg',
      title: 'Marvel Rising | Season 1',
      description: '2019',
    },
    {
      img: './assets/cloakanddagger.jpg',
      title: "Marvel's Cloak & Dagger | Season 2",
      description: '2019',
    },
    {
      img: './assets/legion.jpg',
      title: 'Legion | Season 3',
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
            <a href="#" class="menu__link">Marvel's Runaways | Season 3</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Marvel's Hero Project | Season 1</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Marvel Rising | Season 1</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">See All TV Shows</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Disney+</a>
          </li>
        </ul>
      </div>
      <div class="header__submenu-content">
        <h2 class="header__submenu-title">TV shows</h2>

        ${carouselTemp4}
      </div>
      <div class="header__submenu-footer">
      </div>
    </div>
  `;
};
