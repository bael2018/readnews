import cls from './error.module.scss';

const Error = () => {
  return (
    <div className={cls['error']}>
      <h1>Failed to fetch data !</h1>
    </div>
  )
}

export default Error