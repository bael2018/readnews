import Logo from 'components/elements/Logo'
import { Globe } from 'lucide-react'
import cls from './header.module.scss'
import { FC, useState } from 'react'

const Header: FC = () => {
  const [drop, setDrop] = useState<boolean>(false)
  const [lang, setLang] = useState<string>('English')

  const langHandler = (str: string) => {
    setLang(str)
    setDrop(false)
  }

  return (
    <header className={cls['head']}>
      <div className={cls['head-wrapper']}>
        <Logo/>
        <ul>
          <li>
            <a href="">Business</a>
          </li>
          <li>
            <a href="">Entertainment</a>
          </li>
          <li>
            <a href="">General</a>
          </li>
          <li>
            <a href="">Health</a>
          </li>
          <li>
            <a href="">Science</a>
          </li>
          <li>
            <a href="">Sports</a>
          </li>
          <li>
            <a href="">Technology</a>
          </li>
        </ul>
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
    </header>
  )
} 

export default Header