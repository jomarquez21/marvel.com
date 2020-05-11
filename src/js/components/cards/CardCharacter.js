export const CardCharacter = async (
  className,
  {img = './assets/scarlett.jpg', nickname = '', name = ''} = {}
) => {
  return `
    <div class="card-info card-info--character">
      <a href="#" class="card-info__link">
        <div class="card-info__media">
          <img src="${img}" class="card-info__img">
        </div>

        <div class="card-info__description">
          <p class="card-info__headline">${nickname}</p>
          <p class="card-info__seconday-description">${name}</p>
        </div>
      </a>
    </div>
  `;
};
