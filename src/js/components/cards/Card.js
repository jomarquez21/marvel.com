import classNames from 'classnames';

export const Card = async (
  className,
  {
    img = './assets/one.jpg',
    title = "Marvel's Future Avengers' on Disney+ | Meet Our Heroes",
    subTitleLink = '',
    subtitle = '',
    addOverlay = false,
  } = {}
) => {
  return `
    <div class="card-info ${classNames(className)}">
      <a href="#" class="card-info__link">
        <div class="card-info__media">
          ${
            addOverlay
              ? `
              <div class="card-overlay">
                <div class="card-overlay__play-box">
                  <i class="card-overlay__play-icon"></i>
                </div>
              </div>
            `
              : ''
          }
          
          <img src="${img}" class="card-info__img">
        </div>

        <div class="card-info__description">
          ${
            subTitleLink
              ? `<p class="card-info__subtitle">${subTitleLink}</p>`
              : ''
          }
          ${
            subtitle
              ? `<p class="card-info__subtitle card-info__subtitle--normal">${subtitle}</p>`
              : ''
          }
          ${title ? `<p class="card-info__headline">${title}</p>` : ''}
        </div>
      </a>
    </div>
  `;
};
