import cls from './footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={cls['footer-wrapper']}>
        <div className={cls['footer-wrapper-head']}>
          <h2>readnews</h2> 
        </div>
        <div className={cls['footer-wrapper-body']}>
          <div className={cls['footer-wrapper-body__category']}>
            <span>Category</span>
          </div>  
        </div>
      </div>
    </footer>
  )
}

export default Footer