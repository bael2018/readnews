import { useGetCustomCategoryNewsQuery } from 'store/query/newsQuery';
import Pagination from 'components/elements/Pagination';
import ImageNotFound from 'assets/image-not-found.jpeg'
import Loader from 'components/elements/Loader';
import { useNavigate } from 'react-router-dom';
import { textCutter } from 'utils/textCutter';
import Error from 'components/elements/Error';
import cls from './category.module.scss';
import { Clock5 } from 'lucide-react'
import { FC, useState } from "react"
import { fullDate } from 'utils/date';

const CategoryNews: FC<{ category: string | undefined }> = ({ category }) => {
  const [country, setCountry] = useState<string>('Russia')
  const [drop, setDrop] = useState<boolean>(false)

  const { data, isLoading, error } = useGetCustomCategoryNewsQuery({
    category: category ? category.charAt(0).toUpperCase() + category.slice(1) : '',
    page: 1,
    pageSize: 10
  })
  
  const navigate = useNavigate()

  const dropHandler = (str: string) => {
    setCountry(str)
    setDrop(false)
  }

  if(isLoading) return <Loader/>
  if(error) return <Error/>
  return (
    <div className={cls['category']}>
      <div className={cls['category-head']}>
        <h2>{category}</h2>

        <div className={cls['category-head-custom']}>
          <p>Read news from your country</p>
          <div>
            <span className={cls[drop ? 'active_country' : '']} onClick={() => setDrop(prev => !prev)}>{country}</span>
            <ul className={cls[drop ? 'active_drop' : '']}>
              <li 
                className={cls[country === 'Russia' ? 'active_item' : '']}
                onClick={() => dropHandler('Russia')}>Russian</li>
              <li 
                className={cls[country === 'USA' ? 'active_item' : '']}
                onClick={() => dropHandler('USA')}>USA</li>
              <li 
                className={cls[country === 'China' ? 'active_item' : '']} 
                onClick={() => dropHandler('China')}>China</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={cls['category-body']}>
        {data?.map(item => (
          <div key={item.title} onClick={() => navigate(`/news/${item.title?.split(' ').join('-')}`)} className={cls['category-body__child']}>
            <div className={cls['category-body__child__image']}>
              <img src={item.urlToImage ? item.urlToImage : ImageNotFound} alt="new-image" />
            </div>

            <div className={cls['category-body__child__content']}>
              <h2>{item.title && textCutter(item.title, 65)}</h2>
              <span><Clock5/> {item.publishedAt && `${fullDate('07.05.2023').date} ${fullDate('07.05.2023').time}}`}</span>
              <p>{item.content && textCutter(item.content, 600)}</p>
            </div>
          </div>
        ))}
      </div>

      <Pagination/>
    </div>
  )
}

export default CategoryNews