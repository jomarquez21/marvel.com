import classNames from 'classnames';

export const CardNews = async (
  className,
  {img = './assets/one.jpg', title, time = '', unLinked = ''}
) => {
  return `
    <div class="card-news ${classNames(className)}">
      <a class="card-news__link">

        <div class="card-news__media">
          <div class="img__wrapper">
            <img src="${img}" class="img__src img__absolute" />
          </div>
        </div>

        <div class="card-news__content">
          <p class="card-news__unlinked">${unLinked}</p>
          <p class="card-news__title" >${title}</p>
          <div class="card-news__footer">
            <span class="card-news__footer-time">${time}</span>
          </div>
        </div>
      </a>
    </div>
  `;
};
