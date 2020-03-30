import {Card} from './../cards/Card';

export const NewsContentSidebar = async (title, news = []) => {
  const getItems = async (news) => {
    const viewPromises = news.map((data) => Card());
    const data = await Promise.all(viewPromises);

    return data.map((view) => {
      return `
        <li class="news-content__list-item">
          ${view}
        </li>
      `
    }).join('');
  }

  const items = await getItems(news);

  return `
    <div class="news-content__sidebar">
      ${
        items ? `
          <ul class="news-content__list">
            ${items}
          </ul>
        `
        :
          ''
      }
    </div>
  `;
}
