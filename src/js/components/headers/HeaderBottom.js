import {MenuVideo} from './MenuVideo';
import {MenuCharacter} from './MenuCharacter';
import {MenuComic} from './MenuComic';
import {MenuMovie} from './MenuMovie';
import {MenuTv} from './MenuTv';
import {MenuGame} from './MenuGame';
import {MenuNews} from './MenuNews';

export const HeaderBottom = async () => {
  const video = await MenuVideo();
  const character = await MenuCharacter();
  const menuComic = await MenuComic();
  const menuMovie = await MenuMovie();
  const menuTv = await MenuTv();
  const menuGame = await MenuGame();
  const menuNews = await MenuNews();

  return `
    <div class="header__bottom">
      <div class="header__container">
      <ul class="header__menu menu__container">
        <li class="menu__item header__menu-item">
          <a href="#" class="header__menu-link">Videos</a>
          ${video}
        </li>
        <li class="menu__item header__menu-item">
          <a href="#" class="header__menu-link">Characters</a>
          ${character}
        </li>
        <li class="menu__item header__menu-item">
          <a href="#" class="header__menu-link">Comics</a>
          ${menuComic}
        </li>
        <li class="menu__item header__menu-item">
          <a href="#" class="header__menu-link">Movies</a>
          ${menuMovie}
        </li>
        <li class="menu__item header__menu-item">
          <a href="#" class="header__menu-link">Tv Shows</a>
          ${menuTv}
        </li>
        <li class="menu__item header__menu-item">
          <a href="#" class="header__menu-link">Games</a>
          ${menuGame}
        </li>
        <li class="menu__item header__menu-item">
          <a href="#" class="header__menu-link">News</a>
          ${menuNews}
        </li>
        <li class="menu__item header__menu-item">
          <a href="#" class="header__menu-link">More</a>
        </li>
      </ul>
      </div>
    </div>
  `;
};
