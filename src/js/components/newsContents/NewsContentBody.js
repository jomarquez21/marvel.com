import {CardNews} from './../cards/CardNews';
import {LinkMarvel} from './../LinkMarvel';

export const NewsContentBody = async (title, news = []) => {
  const getItems = async (news) => {
    const viewPromises = news.map((data) => CardNews('', data));
    const data = await Promise.all(viewPromises);

    return data
      .map((view) => {
        return `
        <li class="news-content__list-item">
          ${view}
        </li>
      `;
      })
      .join('');
  };

  const items = await getItems(news);

  const link = await LinkMarvel('Load more', 'btn-marvel--dark');

  return `
    <div class="news-content__body">
      ${title}

      ${
        items
          ? `
          <ul class="news-content__list">
            ${items}
          </ul>
        `
          : ''
      }

      <div class="text-center">
        ${link}
      </div>
    </div>
  `;
};
