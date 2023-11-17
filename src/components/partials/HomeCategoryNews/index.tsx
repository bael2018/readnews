import { useGetCategoryNewsQuery } from 'store/query/newsQuery';
import NotFoundImage from 'assets/image-not-found.jpeg';
import Loader from 'components/elements/Loader';
import { useNavigate } from 'react-router-dom';
import { textCutter } from 'utils/textCutter';
import Error from 'components/elements/Error';
import cls from './category.module.scss';
import { fullDate } from 'utils/date';
import { Clock5 } from "lucide-react"
import { FC } from "react"

const HomeCategoryNews: FC<{ category: string }> = ({ category }) => {
  const { data, isLoading, error } = useGetCategoryNewsQuery({ size: 6, category: category.charAt(0).toLowerCase() + category.slice(1) })
  const navigate = useNavigate()

  if(isLoading) return <Loader/>
  if(error) return <Error/>
  return (
    <div className={cls['block']}>
      <div className={cls['block__title']}>
        <h4>{category}</h4>
      </div>
      <div className={cls['block__wrapper']}>
        {data?.map(item => (
          <div 
            onClick={() => navigate(`/news/${item.title?.split(' ').join('-')}`)} 
            key={item.title} 
            className={cls['block__wrapper__child']}
          >
            <img src={item.urlToImage ? item.urlToImage : NotFoundImage} alt="block-image" />
            <div>
              <h4>{item.title && textCutter(item.title, 50)}</h4>
              <p>{item.content && textCutter(item.content, 160)}</p>
              <span><Clock5/> {item.publishedAt ? fullDate(item.publishedAt).time : ''}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeCategoryNews