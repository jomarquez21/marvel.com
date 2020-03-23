import classNames from 'classnames';

const optionParameterDefault = {className: '', imageUrl: '', imageClassName: ''};
const wrapperInfoDefault = async () => '';
const carouselDefault = async () => '';

export const ContentMain = async ({className, imageUrl, imageClassName} = optionParameterDefault, wrapperInfo = wrapperInfoDefault, carousel = carouselDefault) => {
  let wrapperInfoContent = await wrapperInfo();
  let carouselContent = await carousel();

  return `
    <section class="wrapper">
      <div class="wrapper__main ${classNames(className)}">
        <div class="wrapper__main-img ${classNames(imageClassName)}" style="background-image: url('${imageUrl}');"></div>

        ${
          wrapperInfoContent ? `
            <div class="wrapper__main-content">
              ${wrapperInfoContent}
            </div>
          ` : ''
        }
      </div>
      <div class="wrapper__carousel">
        <div class="wrapper__carousel-inner">
          ${carouselContent}
        </div>
      </div>
    </section>
  `;
}
