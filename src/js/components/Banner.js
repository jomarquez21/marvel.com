import classNames from 'classnames';
import {LinkMarvel} from './LinkMarvel';

const optionParameterDefault = {className: '', imageUrl: '', imageClassName: ''};
const wrapperInfoDefault = async () => '';

export const Banner = async ({className, imageUrl, imageClassName} = optionParameterDefault, wrapperInfo = wrapperInfoDefault) => {
  const link = await LinkMarvel('LEARN MORE', 'btn-marvel--fill');

  return `
    <div class="banner">
      <div class="banner__container">
        <div class="banner__main ${classNames(className)}">
          <img src="${imageUrl}" class="banner__img" />
        </div>

        <div class="banner__content">
          <div class="banner__promo">
            <div class="banner__subtitle">
              Marvel Mastercard®
            </div>
            <div class="banner__title">
              Earn a $25 Statement Credit
            </div>

            ${link}

            <div class="banner__legal">
              Terms and Conditions Apply.  Ⓒ 2020 MARVEL
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
