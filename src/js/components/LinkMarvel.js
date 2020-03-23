import classNames from 'classnames';

export const LinkMarvel = async (content, className = '') => {
  return `
    <a class="btn-marvel ${classNames(className)}" href="#">
      <div class="btn-marvel__inner">${content}</div>
    </a>
  `;
}
