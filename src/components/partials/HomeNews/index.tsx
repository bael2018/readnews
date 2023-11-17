import HomeCategoryNews from '../HomeCategoryNews';
import cls from './news.module.scss';
import FixedNews from '../FixedNews';

const HomeNews = () => {
  return (
    <div className={cls['news']}>
      <div className={cls['news-wrapper']}>
        <div className={cls['news-list']}>
          <h1 className={cls['news-list-title']}>Read worldwide news</h1>
          <HomeCategoryNews category='Business'/>
          <HomeCategoryNews category='Entertainment'/>
          <HomeCategoryNews category='General'/>
          <HomeCategoryNews category='Health'/>
          <HomeCategoryNews category='Science'/>
          <HomeCategoryNews category='Sports'/>
          <HomeCategoryNews category='Technology'/>
        </div>
        <FixedNews/>
      </div>
    </div>
  )
}

export default HomeNews