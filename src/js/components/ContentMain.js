import {MainBanner} from './MainBanner';

const optionParameterDefault = {
  className: '',
  imageUrl: '',
  imageClassName: '',
};
const wrapperInfoDefault = async () => '';
const carouselDefault = async () => '';

export const ContentMain = async (
  params = optionParameterDefault,
  wrapperInfo = wrapperInfoDefault,
  carousel = carouselDefault
) => {
  let wrapperInfoContent = await MainBanner(params, wrapperInfo);
  let carouselContent = await carousel();

  const carouselHtml = `
    <div class="wrapper__carousel">
      <div class="wrapper__carousel-inner"> ${carouselContent}</div>
    </div>          
    `;

  return `
    <section class="wrapper">
      ${wrapperInfoContent}
      ${carouselContent ? carouselHtml : ''}
    </section>
  `;
};
