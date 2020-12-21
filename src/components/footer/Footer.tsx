import React, { ReactElement } from 'react'
import style from './footer.module.css'
interface Props {

}

export default function Footer({ }: Props): ReactElement {
  return (
    <div >
      <footer className={style.footer}>
        <div className={style.footer__addr}>
          <img src="https://food52.com/assets/logo-food52-white-4d632dab9627ec41ef324e1e0786ee7f1eff8026fef6a6640634da820043b2df.svg" className="footer__logo" />
          <img src="https://www.flaticon.com/svg/static/icons/svg/272/272155.svg" className={style.footer__logo_img} />
        </div>

        <ul className={style.footer__nav}>
          <li className={style.nav__item}>
            <h2 className={style.nav__title}>COMPANY</h2>

            <ul className="nav__ul">
              <li>
                <a>About Us</a>
              </li>

              <li>
                <a>Our Team</a>
              </li>

              <li>
                <a>Events</a>
              </li>

              <li>
                <a>Press</a>
              </li>

              <li>
                <a>Jobs</a>
              </li>
            </ul>
          </li>

          <li className={style.nav__item}>
            <h2 className={style.nav__title}>GET HELP</h2>

            <ul className={style.nav__ul}>
              <li>
                <a>FAG</a>
              </li>

              <li>
                <a>Custom Care</a>
              </li>

              <li>
                <a>Giftcards</a>
              </li>

              <li>
                <a>Registry</a>
              </li>

              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </li>

          <li className={style.nav__item}>
            <h2 className={style.nav__title}>EXPLORE</h2>

            <ul className={style.nav__ul}>
              <li>
                <a>Recipes</a>
              </li>

              <li>
                <a>Food</a>
              </li>

              <li>
                <a>Hotlie</a>
              </li>

              <li>
                <a>Home52</a>
              </li>

              <li>
                <a>Sitemap</a>
              </li>

            </ul>
          </li>
        </ul>

        <div >
          <p className={style.legal}>&copy;2020 Food52 Terms | Privacy | Code of Conduct | Accessibility Policy</p>
        </div>
      </footer>
    </div>

  )
}
