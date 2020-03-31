export const Footer = async () => {
  return `
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__links">
          <a href="#" class="footer__logo">
            <div class="footer__marvel">
              <svg viewBox="0 0 36 52" xmlns="http://www.w3.org/2000/svg"><rect fill="#EC1D24" width="100%" height="100%"></rect><path fill="#FEFEFE" d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"></path></svg>
            </div>
          </a>
          <ul class="footer__list">
            <li class="footer__list-item"><a href="#">ABOUT MARVEL</a></li>
            <li class="footer__list-item"><a href="#">HELP/FAQS</a></li>
            <li class="footer__list-item"><a href="#">CAREERS</a></li>
            <li class="footer__list-item"><a href="#">INTERNSHIPS</a></li>
          </ul>
          <ul class="footer__list">
            <li class="footer__list-item"><a href="#">ADVERTISING</a></li>
            <li class="footer__list-item"><a href="#">MARVELHQ.COM</a></li>
            <li class="footer__list-item"><a href="#">REDEEM DIGITAL COMICS</a></li>
          </ul>
        </div>
      </div>
    </footer>
  `;
}
