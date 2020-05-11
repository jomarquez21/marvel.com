import {Card} from './../cards/Card';

export const MenuNews = async () => {
  const contentCarouselTemp1 = [
    {
      img: './assets/mvl_heroes.jpg',
      title: 'Saluting the Real Life Heroes',
      subtitle: 'Culture & Lifestyle',
    },
    {
      img: './assets/lcs_card.jpg',
      title: 'How We Can Support Our Comic Book Shops',
      subtitle: 'Comics',
    },
    {
      img: './assets/marauders.jpg',
      title: 'Kitty Pryde Is on a Boat',
      subtitle: 'Comics',
    },
    {
      img: './assets/free_content_card_image.jpg',
      title:
        'Marvel Unlimited Now Offering Free Access to Iconic Comic Book Stories',
      subtitle: 'Comics',
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
            <a href="#" class="menu__link">Latest news</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">All news</a>
          </li>
        </ul>
      </div>
      <div class="header__submenu-content">
        <h2 class="header__submenu-title">Trending news</h2>

        ${carouselTemp1}
      </div>
      <div class="header__submenu-footer">
        <h4 class="header__submenu-footer-title">Search by</h4>
        <ul class="header__menu menu__container">
          <li class="menu__item"><a href="#" class="menu__link">Movies</a></li>
          <li class="menu__item"><a href="#" class="menu__link">Comics</a></li>
          <li class="menu__item"><a href="#" class="menu__link">Tv shows</a></li>
          <li class="menu__item"><a href="#" class="menu__link">Games</a></li>
          <li class="menu__item"><a href="#" class="menu__link">Digital series</a></li>
          <li class="menu__item"><a href="#" class="menu__link">Culture & lifestyle</a></li>
          <li class="menu__item"><a href="#" class="menu__link">podcasts</a></li>
        </ul>
      </div>
    </div>
  `;
};
