import {HeaderTop} from './components/headers/HeaderTop';
import {HeaderBottom} from './components/headers/HeaderBottom';
import {ContentMain} from './components/ContentMain';
import {Info} from './components/Info';
import {LinkMarvel} from './components/LinkMarvel';
import {Card} from './components/cards/Card';
import {CardVertical} from './components/cards/CardVertical';
import {CardCharacter} from './components/cards/CardCharacter';
import {ContentGrid} from './components/ContentGrid';
import {Banner} from './components/Banner';
import {NewsContentContainer} from './components/newsContents/NewsContentContainer';
import {NewsContentBody} from './components/newsContents/NewsContentBody';
import {NewsContentSidebar} from './components/newsContents/NewsContentSidebar';
import {Footer} from './components/Footer';
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

  const carouselTemp1 = `
    <div style="display: flex; justify-content: space-between; overflow: hidden;">
      <div style="width: 270px; margin-right: 10px">
        ${await Card()}
      </div>
      <div style="width: 270px; margin-right: 10px">
        ${await Card()}
      </div>
      <div style="width: 270px; margin-right: 10px">
        ${await Card()}
      </div>
      <div style="width: 270px; margin-right: 10px">
        ${await Card()}
      </div>
      <div style="width: 270px; margin-right: 10px">
        ${await Card()}
      </div>
      <div style="width: 270px; margin-right: 10px">
        ${await Card()}
      </div>
    </div>
  `;

  const carouselTemp2 = `
    <div style="display: flex; justify-content: space-between; overflow: hidden;">
      <div style="width: 174px; margin-right: 10px">
        ${await CardVertical()}
      </div>
      <div style="width: 174px; margin-right: 10px">
        ${await CardVertical()}
      </div>
      <div style="width: 174px; margin-right: 10px">
        ${await CardVertical()}
      </div>
      <div style="width: 174px; margin-right: 10px">
        ${await CardVertical()}
      </div>
      <div style="width: 174px; margin-right: 10px">
        ${await CardVertical()}
      </div>
      <div style="width: 174px; margin-right: 10px">
        ${await CardVertical()}
      </div>
    </div>
  `;

  const carouselTemp3 = `
    <div style="display: flex; justify-content: space-between; overflow: hidden;">
      <div style="width: 192px; margin-right: 10px">
        ${await CardCharacter()}
      </div>
      <div style="width: 192px; margin-right: 10px">
        ${await CardCharacter()}
      </div>
      <div style="width: 192px; margin-right: 10px">
        ${await CardCharacter()}
      </div>
      <div style="width: 192px; margin-right: 10px">
        ${await CardCharacter()}
      </div>
      <div style="width: 192px; margin-right: 10px">
        ${await CardCharacter()}
      </div>
      <div style="width: 192px; margin-right: 10px">
        ${await CardCharacter()}
      </div>
    </div>
  `;

  const contentMain1 = await ContentMain(
    {imageUrl: './assets/avengerscampus_mas_dsk.jpg'},
    Info.bind(
      null,
      {
        urlImage: './assets/marvelunlimited_log.png',
        description:
          'Read these plus 27,000+ digital comics for $9.99 a month!',
      },
      LinkMarvel.bind(null, 'LEARN MORE', 'btn-marvel--fill')
    ),
    async () => carouselTemp1
  );

  const contentMain2 = await ContentMain(
    {
      imageUrl: './assets/sets.jpg',
      className: 'wrapper__main--middle',
      imageClassName: 'wrapper__main-img--middle-right',
    },
    Info.bind(
      null,
      {
        urlImage: './assets/marvelunlimited_log.png',
        newInfo: 'Available now',
        title: 'New in marvel unlimited',
        description:
          'Read these plus 27,000+ digital comics for $9.99 a month!',
      },
      async () =>
        `${await LinkMarvel('Get Marvel Unlimited', 'btn-marvel--light')}`
    ),
    async () => carouselTemp2
  );

  const contentMain3 = await ContentMain(
    {
      imageUrl: './assets/disneyplusall.png',
      className: 'wrapper__main--middle',
      imageClassName: 'wrapper__main-img--middle-right',
    },
    Info.bind(
      null,
      {
        urlImage: './assets/disneyplus.png',
        description: 'Start streaming now.',
      },
      async () =>
        `${await LinkMarvel(
          'LEARN MORE',
          'btn-marvel--light'
        )} ${await LinkMarvel('SIGN UP', 'btn-marvel--light')}`
    ),
    async () => carouselTemp3
  );

  const contentMain4 = await ContentMain(
    {
      imageUrl: './assets/new_com.jpg',
      className: 'wrapper__main--middle',
      imageClassName: 'wrapper__main-img--middle-right',
    },
    Info.bind(
      null,
      {
        newInfo: 'ON SALE 3/25',
        title: 'NEW COMICS THIS WEEK',
        description: 'Check out the newest Marvel comics coming out this week!',
      },
      async () =>
        `${await LinkMarvel(
          'SHOP DIGITAL COMICS',
          'btn-marvel--light'
        )} ${await LinkMarvel('PRINT SUBSCRIPTIONS', 'btn-marvel--light')}`
    ),
    async () => carouselTemp1
  );

  const contentMain5 = await Banner(
    {
      imageUrl: './assets/spider.jpg',
      className: '',
      imageClassName: 'wrapper__main-img--middle-left',
    },
    Info.bind(
      null,
      {
        newInfo: 'ON SALE 3/25',
        title: 'NEW COMICS THIS WEEK',
        description: 'Check out the newest Marvel comics coming out this week!',
      },
      async () =>
        `${await LinkMarvel(
          'SHOP DIGITAL COMICS',
          'btn-marvel--light'
        )} ${await LinkMarvel('PRINT SUBSCRIPTIONS', 'btn-marvel--light')}`
    )
  );

  const contentGrid = await ContentGrid(
    `<h3 class="title-marvel">Marvel PODCASTS</h3>`,
    `${await Card()} ${await Card()} ${await Card()} ${await Card()}`
  );

  const newsContentBody = await NewsContentBody(
    `<h3 class="title-marvel">The lastes</h3>`,
    [
      {
        img: './assets/content_1.png',
        unLinked: 'Podcats',
        title: "7 Things That Really Happened in 'The Dark Phoenix Saga'",
        time: '5 Hours ago',
      },
      {
        img: './assets/content_2.jpg',
        unLinked: 'Podcats',
        title: "How Do Spider-Man's Webs Work?",
        time: '6 Hours ago',
      },
      {
        img: './assets/content_3.jpg',
        unLinked: 'Podcats',
        title: 'Support Your Local Independent Bookstores',
        time: '6 Hours ago',
      },
      {
        img: './assets/content_4.jpg',
        unLinked: 'Podcats',
        title: 'Kitty Pryde Is on a Boat',
        time: '9 Hours ago',
      },
      {
        img: './assets/content_5.jpg',
        unLinked: 'Podcats',
        title:
          "Marvel Studios' Black Widow Coming to Marvel Games! | Marvel Minute",
        time: '10 Hours ago',
      },
      {
        img: './assets/content_6.jpg',
        unLinked: 'Podcats',
        title:
          "Joe Quesada Live in Conversation with 'Venom' Artist Ryan Stegman",
        time: '12 Hours ago',
      },
      {
        img: './assets/content_7.jpg',
        unLinked: 'Podcats',
        title: 'When Green Goblin Met Carnage',
      },
    ]
  );

  const newsContentSideBar = await NewsContentSidebar('', [
    {
      img: './assets/sidebar_1.jpg',
      unLinked: 'Podcats',
      title: 'Saluting the Real Life Heroes',
    },
    {
      img: './assets/sidebar_2.jpg',
      unLinked: 'CULTURE & LIFESTYLE',
      title: "How Do Spider-Man's Webs Work?",
    },
    {
      img: './assets/sidebar_3.png',
      unLinked: 'CULTURE & LIFESTYLE',
      title:
        "Add 'Guardians of the Galaxy' Director James Gunn’s New Awesome Mix to Your Zune",
    },
    {
      img: './assets/sidebar_4.jpg',
      unLinked: 'Podcats',
      title:
        "Joe Quesada Live in Conversation with 'Venom' Artist Ryan Stegman",
    },
    {
      img: './assets/sidebar_5.jpg',
      unLinked: 'CULTURE & LIFESTYLE',
      title: 'Support Your Local Independent Bookstores',
    },
  ]);

  const daaaa = await NewsContentContainer(
    `
      ${newsContentBody}
      ${newsContentSideBar}
    `
  );

  const footer = await Footer();

  content.innerHTML = `
    ${contentMain1}

    ${contentMain2}

    ${contentMain3}
    
    <section>
      ${contentGrid}
    </section>
    
    <section>
      ${daaaa}
    </section>

    ${contentMain4}

    ${footer}
  `;
};

// #c6a972

init();
