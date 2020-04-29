import {LinkMarvel} from './LinkMarvel';

export const Promo = async () => {
  const link = await LinkMarvel('LEARN MORE', 'btn-marvel--fill');

  return `
    <div class="promo">
      <div class="promo__wrapper">
        <div class="promo__media">
          <img src="./assets/spider_small.jpg" class="promo__img promo__img--small" />
          <img src="./assets/spider.jpg" class="promo__img" />
        </div>
        <div class="promo__content">
          <div class="promo__content-main">
            <div class="promo__content-sub-title">Marvel Mastercard®</div>
            <div class="promo__content-title">Earn a $25 Statement Credit</div>
            ${link}

            <div class="promo__content-main-legal">Terms and Conditions Apply.  Ⓒ 2020 MARVEL</div>
          </div>
        </div>
      </div>
      <a href="https://www.marvel.com/creditcard?siteCode=MCMOHC5&amp;Dcom=MCMOHC5&amp;cid=MMCMDC" class="promo__legal">&nbsp;</a>
    </div>
  `;
};
