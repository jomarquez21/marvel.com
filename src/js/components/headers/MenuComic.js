export const MenuComic = async () => {
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
