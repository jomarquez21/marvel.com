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
import {Promo} from './components/Promo';

const init = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  const headerTop = await HeaderTop();
  const headerBottom = await HeaderBottom();
  header.innerHTML = `
    ${headerTop}
    ${headerBottom}
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
    )
  );

  const contentCarouselTemp1 = [
    {
      img: './assets/carousel_1_1.jpg',
      title: 'Avengers: Kree/Skrull War | Event',
    },
    {
      img: './assets/carousel_1_2.jpg',
      title: 'Meet the Avengers of "Final Host"',
      subTitleLink: 'Comics',
    },
    {
      img: './assets/carousel_1_3.jpg',
      title: 'Read These Free Comics | Marvel Universe',
    },
    {
      img: './assets/carousel_1_4.jpg',
      title: "5 Best 'Avengers vs. X-Men' Battles and the 5 We Want to See",
      subTitleLink: 'Comics',
    },
    {
      img: './assets/carousel_1_5.jpg',
      title: 'The Story that Turned Bucky Barnes Into the Winter Soldier',
      subTitleLink: 'Comics',
    },
    {
      img: './assets/carousel_1_6.jpg',
      title: "FREE COMICS on Marvel Unlimited | Marvel's Pull List",
      subTitleLink: "Marvel's The Pull List",
      addOverlay: true,
    },
  ];
  const carouselTemp1 = `
    <div style="display: flex; justify-content: space-between; overflow: hidden;">
      <div style="width: 270px; margin-right: 10px">
        ${await CardVertical('', contentCarouselTemp1[0])}
      </div>
      <div style="width: 270px; margin-right: 10px">
        ${await CardVertical('', contentCarouselTemp1[1])}
      </div>
      <div style="width: 270px; margin-right: 10px">
        ${await CardVertical('', contentCarouselTemp1[2])}
      </div>
      <div style="width: 270px; margin-right: 10px">
        ${await CardVertical('', contentCarouselTemp1[3])}
      </div>
      <div style="width: 270px; margin-right: 10px">
        ${await CardVertical('', contentCarouselTemp1[4])}
      </div>
      <div style="width: 270px; margin-right: 10px">
        ${await CardVertical('', contentCarouselTemp1[5])}
      </div>
    </div>
  `;

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
        // newInfo: 'Available now',
        title: 'FREE DIGITAL Comics',
        description:
          'Marvel Unlimited is now offering free access to some of the most iconic Marvel comics stories.',
      },
      async () => `${await LinkMarvel('Learn more', 'btn-marvel--light')}`
    ),
    async () => carouselTemp1
  );

  const contentcarouselContainer3 = [
    {
      img: './assets/carousel_3_1.jpg',
      title:
        "From Marvel Comics to Disney+, See This Week in Marvel's Radical Recommendations",
      subTitleLink: 'Culture & lifestyle',
    },
    {
      img: './assets/carousel_3_2.jpg',
      title:
        "Release Dates Confirmed for 'The Falcon and The Winter Soldier' and 'WandaVision' on Disney+",
      subTitleLink: 'TV SHOWS',
    },
    {
      img: './assets/carousel_3_3.jpg',
      title:
        "Read All 20 Free 'Marvel's Hero Project' Comics on Marvel Unlimited",
      subTitleLink: 'TV SHOWS',
    },
    {
      img: './assets/carousel_3_4.jpg',
      title: "Our Comics Guide to 'X-Men: The Animated Series’ S4 on Disney+",
      subTitleLink: 'Comics',
    },
  ];
  const carouselContainer3 = `
    <div style="display: flex; justify-content: space-between; overflow: hidden;">
      <div style="width: 270px; margin-right: 10px">
        ${await Card('', contentcarouselContainer3[0])}
      </div>
      <div style="width: 270px; margin-right: 10px">
        ${await Card('', contentcarouselContainer3[1])}
      </div>
      <div style="width: 270px; margin-right: 10px">
        ${await Card('', contentcarouselContainer3[2])}
      </div>
      <div style="width: 270px; margin-right: 10px">
        ${await Card('', contentcarouselContainer3[3])}
      </div>
    </div>
  `;
  const contentMain3 = await ContentMain(
    {
      imageUrl: './assets/disneyplusall.jpg',
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
    async () => carouselContainer3
  );

  const contentcarouselContainer4 = [
    {
      img: './assets/excalibur.jpg',
      title: 'Excalibu (2019) #1',
      description: '2019',
    },
    {
      img: './assets/strange.jpg',
      title: 'Doctor Strange Annual (2019) #1',
      description: '2019',
    },
    {
      img: './assets/red_goblin.jpg',
      title: 'Red Goblin: Red Death (2019) #1',
      description: '2019',
    },
    {
      img: './assets/fantastic_four.jpg',
      title: 'Fantastic Four: Grand Design (2019) #1',
      description: '2019',
    },
    {
      img: './assets/silver_surfer.jpg',
      title: 'silver Surfer: Black (2019) #1',
      description: '2019',
    },
    {
      img: './assets/dr_aphra.jpg',
      title: 'Star wars: Doctor Aphra Annual (2019) #1',
      description: '2019',
    },
  ];

  const carouselTemp4 = `
    <div style="display: flex; justify-content: space-between; overflow: hidden;">
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
    async () => carouselTemp4
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

  const dataContentGridTop = [
    {
      img: './assets/content-top_1.jpg',
      title:
        "Kevin Smith Is Joe Quesada's Guest on Joe Q's Mornin' Warm-Up LIVE",
      subtitle: 'Culture & lifestyle',
    },
    {
      img: './assets/content-top_2.jpg',
      title: 'Livestream: Join Josh Saleh as He Assembles Avengers Legos ',
      subtitle: 'Culture & lifestyle',
    },
    {
      img: './assets/content-top_3.jpg',
      title: 'Livestream: Learn to Draw Cyclops with Artist Marcus To',
      subtitle: 'Culture & lifestyle',
    },
    {
      img: './assets/content-top_4.jpg',
      title: 'Even More Backgrounds For Your Worthy Video Chats',
      subtitle: 'Culture & lifestyle',
    },
  ];
  const contentGridTop = await ContentGrid(
    `<h3 class="title-marvel">Marvel at home</h3>`,
    `
      ${await Card('', dataContentGridTop[0])}
      ${await Card('', dataContentGridTop[1])}
      ${await Card('', dataContentGridTop[2])}
      ${await Card('', dataContentGridTop[3])}
    `
  );

  const contentGridData = [
    {
      img: './assets/capvsiron.jpg',
      title: "Go Behind the Scenes of 'Civil War'",
      subtitle: 'Podcasts',
    },
    {
      img: './assets/week-marvel.jpg',
      title: 'This Week in Marvel Spins a Yarn with Author Preeti Chhibber',
      subtitle: 'Podcasts',
    },
    {
      img: './assets/women-marvel.jpg',
      title:
        'Women of Marvel On Creating An Inclusive Space With Black Girl Gamers ',
      subtitle: 'Digital Series',
    },
    {
      img: './assets/dr-doom.jpg',
      title: "DOOM Arrives to MARVEL UNLIMITED | Marvel's Pull List",
      subTitleLink: "Marvel's the pull list",
      addOverlay: true,
    },
  ];

  const contentGrid = await ContentGrid(
    `<h3 class="title-marvel">Marvel PODCASTS</h3>`,
    `
    ${await Card('', contentGridData[0])}
    ${await Card('', contentGridData[1])}
    ${await Card('', contentGridData[2])}
    ${await Card('', contentGridData[3])}
    `
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

  const newcontent = await NewsContentContainer(
    `
      ${newsContentBody}
      ${newsContentSideBar}
    `
  );

  const footer = await Footer();

  const promo = await Promo();

  content.innerHTML = `
    ${contentMain1}

    <section>
      ${contentGridTop}
    </section>

    ${contentMain2}

    ${contentMain3}

    ${contentMain4}

    <section>
      ${contentGrid}
    </section>
    
    <section>
      ${newcontent}
    </section>
    
    <section>
      ${promo}
    </section>
    
    ${footer}
  `;
};

init();
