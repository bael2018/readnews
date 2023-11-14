import { useNavigate } from "react-router-dom"
import { urlRoutes } from 'constants/alias';
import cls from './error.module.scss';
import { ShieldAlert } from 'lucide-react'

const ErrorNavigate = () => {
  const navigate = useNavigate()

  return (
    <div className={cls['error']}>
      <ShieldAlert/>
      <div>
        <h3>404</h3>
        <p>Sorry - we could not find your page !</p>
        <button onClick={() => navigate(urlRoutes.HOME)}>Go back Home</button>
      </div>
    </div>
  )
}

export default ErrorNavigate