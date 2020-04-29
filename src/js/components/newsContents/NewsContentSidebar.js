import {CardNews} from './../cards/CardNews';

export const NewsContentSidebar = async (title, news = []) => {
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

  return `
    <div class="news-content__sidebar">
      <div class="news-content__border-top-title">
        <div class="inner"></div>
      </div>
      <h3 class="news-content__title">THE HYPE BOX</h3>
      <p class="news-content__description">Can't-miss news and updates from across the Marvel Universe!</p>

      ${
        items
          ? `
          <ul class="news-content__list">
            ${items}
          </ul>
        `
          : ''
      }

      <div class="news-content__border-bottom-title">
        <div class="inner"></div>
      </div>
    </div>
  `;
};
