import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Globe , Search } from 'lucide-react'
import { urlRoutes } from 'constants/alias'
import Logo from 'components/elements/Logo'
import cls from './header.module.scss'
import { FC, useState } from 'react'

interface ILink {
  id: number
  title: string
}

const headerLinks: ILink[] = [
  {
    id: 1,
    title: 'Business'
  },
  {
    id: 2,
    title: 'Entertainment'
  },
  {
    id: 3,
    title: 'General'
  },
  {
    id: 4,
    title: 'Health'
  },
  {
    id: 5,
    title: 'Science'
  },
  {
    id: 6,
    title: 'Sports'
  },
  {
    id: 7,
    title: 'Technology'
  },
]

const Header: FC = () => {
  const [lang, setLang] = useState<string>('English')
  const [drop, setDrop] = useState<boolean>(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const langHandler = (str: string) => {
    setLang(str)
    setDrop(false)
  }

  return (
    <header className={cls['head']}>
      <div className={cls['head-wrapper']}>
        <Logo/>
        <ul>
          {
            headerLinks.map(item => (
              <li key={item.id}>
                <Link   
                  className={cls[pathname.includes(item.title.toLowerCase()) ? 'active_link' : '']} 
                  to={`/category/${item.title.toLowerCase()}`}>
                    {item.title}</Link>
              </li>
            ))
          }
        </ul>
        <div className={cls['head-wrapper-btns']}>
          <div className={cls['head-wrapper-search']}>
            <button onClick={() => navigate(urlRoutes.SEARCH)}><Search/> Search</button>
          </div>
          <div className={cls['head-wrapper-lang']}>
            <button onClick={() => setDrop((prev) => !prev)} className={cls[drop ? 'active_btn' : '']}>
              <Globe/>
              <span>
                {lang}
              </span>
            </button>
            <div className={cls[drop ? 'drop_list' : '']}>
              <p 
                className={cls[lang === 'English' ? 'picked_lang' : '']}
                onClick={() => langHandler('English')}>English</p>
              <p 
                className={cls[lang === 'Russian' ? 'picked_lang' : '']}
                onClick={() => langHandler('Russian')}>Russian</p>
              <p 
                className={cls[lang === 'Chinese' ? 'picked_lang' : '']}
                onClick={() => langHandler('Chinese')}>Chinese</p>
              <p 
                className={cls[lang === 'French' ? 'picked_lang' : '']}
                onClick={() => langHandler('French')}>French</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 

export default Header