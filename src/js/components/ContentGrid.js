export const ContentGrid = async (titleContent = '', gridContent = '') => {
  return `
    <div class="content-grid">
      <div class="content-grid__title">
        ${titleContent}
      </div>
      <div class="content-grid__body">
        ${gridContent}
      </div>
    </div>
  `;
}
