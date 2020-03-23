export const Card = async () => {
  return `
    <div class="card-info">
      <a href="#" class="card-info__link">
        <div class="card-info__media">
          <div class="card-overlay">
            <div class="card-overlay__play-box">
              <i class="card-overlay__play-icon"></i>
            </div>
          </div>
          <img src="./assets/one.jpg" class="card-info__img">
        </div>

        <div class="card-info__description">
          <p class="card-info__subtitle">TV Shows</p>
          <p class="card-info__headline">'Marvel's Future Avengers' on Disney+ | Meet Our Heroes</p>
        </div>
      </a>
    </div>
  `;
}
