export const Info = async ({urlImage, newInfo, title, description}, children) => {
  const childrenContent = await children();

  return `
    <div class="info">
      ${
        urlImage ? `
          <figure class="info__img">
            <img src="${urlImage}" alt="info_logo" />
          </figure>
        ` : ''
      }

      ${newInfo ? `<div class="info__new">${newInfo}</div>` : ''}

      ${title ? `<p class="info__title">${title}</p>` : ''}

      ${description ? `<div class="info__description">${description}</div>` : ''}

      ${childrenContent}
    </div>
  `;
}
