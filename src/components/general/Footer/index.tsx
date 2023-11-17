import { Facebook, Github, Instagram, Mail, Youtube } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import cls from './footer.module.scss';
import logo from 'assets/icon.png'

const Footer = () => {
  const { pathname } = useLocation()

  return (
    <footer>
      <div className={cls['footer-wrapper']}>
        <div className={cls['footer-wrapper-head']}>
          <img src={logo} alt="footer-logo" />
          <h2>readnews</h2> 
        </div>
        <div className={cls['footer-wrapper-body']}>
          <div className={cls['footer-wrapper-body__category']}>
            <span>Category</span>
            <ul>
              <li>
                <Link 
                  to={`/category/business`}
                  className={cls[pathname.includes('business') ? 'active_link' : '']} 
                >Business</Link>
              </li>
              <li>
                <Link 
                  to={`/category/entertainment`}
                  className={cls[pathname.includes('entertainment') ? 'active_link' : '']} 
                >Entertainment</Link>
              </li>
              <li>
                <Link 
                  to={`/category/general`}
                  className={cls[pathname.includes('general') ? 'active_link' : '']} 
                >General</Link>
              </li>
              <li>
                <Link 
                  to={`/category/health`}
                  className={cls[pathname.includes('health') ? 'active_link' : '']} 
                >Health</Link>
              </li>
              <li>
                <Link 
                  to={`/category/science`}
                  className={cls[pathname.includes('science') ? 'active_link' : '']} 
                >Science</Link>
              </li>
              <li>
                <Link 
                  to={`/category/sports`}
                  className={cls[pathname.includes('sports') ? 'active_link' : '']} 
                >Sports</Link>
              </li>
              <li>
                <Link 
                  to={`/category/technology`}
                  className={cls[pathname.includes('technology') ? 'active_link' : '']} 
                >Technology</Link>
              </li>
            </ul>
          </div>  
          <div className={cls['footer-wrapper-body__contacts']}>
            <span>Contacts</span>

            <ul>
              <li>
                <a target='_blank' href="mailTo:bayel.dev2023@gmail.com">
                  <Mail/>
                </a>
              </li>
              <li>
                <a target='_blank' href="https://www.facebook.com/">
                  <Facebook/>
                </a>
              </li>
              <li>
                <a target='_blank' href="https://www.instagram.com/">
                  <Instagram/>
                </a>
              </li>
              <li>
                <a target='_blank' href="https://github.com/bael2018">
                  <Github/>
                </a>
              </li>
              <li>
                <a target='_blank' href="https://www.youtube.com/">
                  <Youtube/>
                </a>
              </li>
            </ul>
          </div>  
        </div>
      </div>
    </footer>
  )
}

export default Footer