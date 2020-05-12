import classNames from 'classnames';

const wrapperInfoDefault = async () => '';
const optionParameterDefault = {
  className: '',
  imageUrl: '',
  imageClassName: '',
};

export const MainBanner = async (
  {className, imageUrl, imageClassName} = optionParameterDefault,
  wrapperInfo = wrapperInfoDefault
) => {
  let wrapperInfoContent = await wrapperInfo();

  return `
    <div class="wrapper__main ${classNames(className)}">
      <div class="wrapper__main-img ${classNames(
        imageClassName
      )}" style="background-image: url('${imageUrl}');"></div>

      ${
        wrapperInfoContent
          ? `
          <div class="wrapper__main-content">
            ${wrapperInfoContent}
          </div>
        `
          : ''
      }
    </div>
  `;
};
