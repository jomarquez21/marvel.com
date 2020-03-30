import {HeaderTop} from './components/headers/HeaderTop';
import {HeaderBottom} from './components/headers/HeaderBottom';
import {ContentMain} from './components/ContentMain';
import {Info} from './components/Info';
import {LinkMarvel} from './components/LinkMarvel';
import {Card} from './components/cards/Card';
import {CardVertical} from './components/cards/CardVertical';
import {CardCharacter} from './components/cards/CardCharacter';
import {ContentGrid} from './components/ContentGrid';
import {NewsContentContainer} from './components/newsContents/NewsContentContainer';
import {NewsContentBody} from './components/newsContents/NewsContentBody';
import {NewsContentSidebar} from './components/newsContents/NewsContentSidebar';
import './../styles/style.scss';

const init = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  const headerTop = await HeaderTop();
  const headerBottom = await HeaderBottom();
  header.innerHTML = `
    ${headerTop}
    ${headerBottom}
  `;

  const carouselTemp = `
    <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
      <div style="width: 270px;">
        ${await Card()}
      </div>

      <div style="width: 174px;">
        ${await CardVertical()}
      </div>

      <div style="width: 192px;">
        ${await CardCharacter()}
      </div>
    </div>
  `;

  const contentMain1 = await ContentMain(
    {imageUrl: './assets/avengerscampus_mas_dsk.jpg'},
    Info.bind(
      null,
      {urlImage: './assets/marvelunlimited_log.png', description: 'Read these plus 27,000+ digital comics for $9.99 a month!'},
      LinkMarvel.bind(null, 'LEARN MORE', 'btn-marvel--fill'),
    ),
    async () => carouselTemp,
  );

  const contentMain2 = await ContentMain(
    {imageUrl: './assets/sets.jpg', className: 'wrapper__main--middle', imageClassName: 'wrapper__main-img--middle-right'},
    Info.bind(
      null,
      {urlImage: './assets/marvelunlimited_log.png', newInfo: 'Available now', title: 'New in marvel unlimited', description: 'Read these plus 27,000+ digital comics for $9.99 a month!'},
      async () => `${await LinkMarvel('Get Marvel Unlimited', 'btn-marvel--light')}`,
    ),
    async () => carouselTemp,
  );

  const contentMain3 = await ContentMain(
    {imageUrl: './assets/disneyplusall.png', className: 'wrapper__main--middle', imageClassName: 'wrapper__main-img--middle-right'},
    Info.bind(
      null,
      {urlImage: './assets/disneyplus.png', description: 'Start streaming now.'},
      async () => `${await LinkMarvel('LEARN MORE', 'btn-marvel--light')} ${await LinkMarvel('SIGN UP', 'btn-marvel--light')}`,
    ),
    async () => carouselTemp,
  );

  const contentGrid = await ContentGrid(
    `<h3 class="title-marvel">Marvel PODCASTS</h3>`,
    `${await Card()} ${await Card()} ${await Card()} ${await Card()}`
  );

  const newsContentBody = await NewsContentBody(
    `<h3 class="title-marvel">The lastes</h3>`,
    [1,2,3,4,5,6,7,8]
  );

  const newsContentSideBar = await NewsContentSidebar(
    '',
    [1,2,3,4,5,6,7,8]
  );

  const newsContent = await NewsContentContainer(
    `
      ${newsContentBody}
      ${newsContentSideBar}
    `
  );

  content.innerHTML = `
    ${contentMain1}

    ${contentMain2}

    ${contentMain3}

    <section>
      ${contentGrid}
    </section>

    <section>
      ${newsContent}
    </section>
  `;
}

// #c6a972

init();
