import { useGetCustomNewsQuery } from 'store/query/newsQuery';
import { useNavigate, useParams } from 'react-router-dom';
import { textCutter } from 'utils/textCutter';
import { Clock5 } from 'lucide-react';
import cls from './fixed.module.scss';

const FixedNews = () => {
  const { data, isSuccess } = useGetCustomNewsQuery({ category: 'science' })
  const navigate = useNavigate()

  const { id } = useParams()

  if(isSuccess){
    return (
      <div className={cls['news-fixed']}>
        {data?.map((item, index) => (
          <div 
            key={index} 
            onClick={() => navigate(`/news/${item.title?.split(' ').join('-')}`)} 
            className={cls['news-fixed__child']}
            id={cls[id?.split('-').join(' ') === item.title ? 'active_line' : '']}
          >
            <span><Clock5/> {item.pubDate && item.pubDate}</span>
            <p>{item.title && textCutter(item.title, 85)}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default FixedNews