import { useGetCategoryNewsQuery } from 'store/query/newsQuery';
import Pagination from 'components/elements/Pagination';
import ImageNotFound from 'assets/image-not-found.jpeg'
import Loader from 'components/elements/Loader';
import { useNavigate } from 'react-router-dom';
import { textCutter } from 'utils/textCutter';
import Error from 'components/elements/Error';
import cls from './category.module.scss';
import { Clock5 } from 'lucide-react'
import { FC, useState } from "react"

const CategoryNews: FC<{ category: string | undefined }> = ({ category }) => {
  const [country, setCountry] = useState<string>('Russia')
  const [drop, setDrop] = useState<boolean>(false)
  const [page, setPage] = useState<string>('')

  const { data, isLoading, error } = useGetCategoryNewsQuery({ category: category || '', page })
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
        {data?.results?.map(item => (
          <div key={item.title} onClick={() => navigate(`/news/${item.title}`)} className={cls['category-body__child']}>
            <div className={cls['category-body__child__image']}>
              <img src={item.image_url ? item.image_url : ImageNotFound} alt="new-image" />
            </div>

            <div className={cls['category-body__child__content']}>
              <h2>{item.title && textCutter(item.title, 65)}</h2>
              <span><Clock5/> {item.pubDate && item.pubDate}</span>
              <p>{item.content && textCutter(item.content, 600)}</p>
            </div>
          </div>
        ))}
      </div>

      {data?.nextPage && <Pagination handler={setPage} page={data?.nextPage} />}
    </div>
  )
}

export default CategoryNews