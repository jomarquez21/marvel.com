import {Card} from './../cards/Card';

export const MenuVideo = async () => {
  const contentCarouselTemp1 = [
    {
      img: './assets/thanos.jpg',
      title: 'Thanos Is Related to The Eternals?!',
      subTitleLink: "Earth's Mightiest Show",
      subtitle: 'S3 E23',
      addOverlay: true,
    },
    {
      img: './assets/score.jpg',
      addOverlay: true,
      title: "The Marvel 'Heads Up!' Challenge",
      subTitleLink: "Marvel Gaming: Let's Play",
    },
    {
      img: './assets/marvel-pull.jpg',
      addOverlay: true,
      title: "FREE COMICS on Marvel Unlimited | Marvel's Pull List",
      subTitleLink: "Marvel's The Pull List",
    },
    {
      img: './assets/wolverine-top.jpg',
      addOverlay: true,
      title: 'Top 10 Wolverine Costumes!',
      subTitleLink: 'Trailers & Extras',
    },
  ];

  const carouselTemp1 = `
    <div style="display: flex; justify-content: space-evenly; overflow: hidden; padding: 20px;">
      <div style="width: 25%; margin: 0 9px">
        ${await Card('', contentCarouselTemp1[0])}
      </div>
      <div style="width: 25%; margin: 0 9px">
        ${await Card('', contentCarouselTemp1[1])}
      </div>
      <div style="width: 25%; margin: 0 9px">
        ${await Card('', contentCarouselTemp1[2])}
      </div>
      <div style="width: 25%; margin: 0 9px">
        ${await Card('', contentCarouselTemp1[3])}
      </div>
    </div>
  `;

  return `
    <div class="header__submenu">
      <div class="header__submenu-links">
        <ul class="header__menu menu__container">
          <li class="menu__item">
            <a href="#" class="menu__link">Trailers & extras</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Digital Series</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">All video</a>
          </li>
        </ul>
      </div>
      <div class="header__submenu-content">
        <h2 class="header__submenu-title">Trending Video</h2>

        
        ${carouselTemp1}
        
      </div>
      <div class="header__submenu-footer">
        <h4 class="header__submenu-footer-title">
          our shows
        </h4>
        <ul class="header__menu menu__container">
          <li class="menu__item">
            <a href="#" class="menu__link">Earth's Mightiest Show</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">This Week in Marvel</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Women of Marvel</a>
          </li>
        </ul>
      </div>
    </div>
  `;
};
