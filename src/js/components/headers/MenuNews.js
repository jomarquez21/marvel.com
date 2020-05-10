export const MenuNews = async () => {
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
