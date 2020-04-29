import classNames from 'classnames';

export const Card = async (className, img = './assets/one.jpg') => {
  return `
    <div class="card-info ${classNames(className)}">
      <a href="#" class="card-info__link">
        <div class="card-info__media">
          <div class="card-overlay">
            <div class="card-overlay__play-box">
              <i class="card-overlay__play-icon"></i>
            </div>
          </div>
          <img src="${img}" class="card-info__img">
        </div>

        <div class="card-info__description">
          <p class="card-info__subtitle">TV Shows</p>
          <p class="card-info__headline">'Marvel's Future Avengers' on Disney+ | Meet Our Heroes</p>
        </div>
      </a>
    </div>
  `;
};
