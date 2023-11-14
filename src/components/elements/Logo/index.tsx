import { useNavigate } from 'react-router-dom'
import { urlRoutes } from 'constants/alias'
import cls from './logo.module.scss'
import img from 'assets/logo.png'

const Logo = () => {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate(urlRoutes.HOME)} className={cls['logo']}>
      <img className={cls['logo-img']} src={img}/>
    </button>
  ) 
}

export default Logo