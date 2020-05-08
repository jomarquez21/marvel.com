export const CardVertical = async (
  className,
  {
    img = './assets/two.jpg',
    title = 'Absolute Carnage (2019) #2',
    subTitleLink = '',
    subtitle = '',
    description = '',
    addOverlay,
  } = {}
) => {
  return `
    <div class="card-info card-info--vertical">
      <a href="#" class="card-info__link">
        <div class="card-info__media">
          <img src="${img}" class="card-info__img">

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
          ${
            description
              ? `<p class="card-info__seconday-description">${description}</p>`
              : ''
          }
        </div>
      </a>
    </div>
  `;
};
