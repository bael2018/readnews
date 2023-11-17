import { useGetCustomNewsQuery } from 'store/query/newsQuery';
import { useNavigate } from 'react-router-dom';
import { textCutter } from 'utils/textCutter';
import { Clock5 } from 'lucide-react';
import cls from './fixed.module.scss';
import { fullDate } from 'utils/date';

const FixedNews = () => {
  const { data, isSuccess } = useGetCustomNewsQuery({ size: 10, domain: 'cnn.com' })
  const navigate = useNavigate()

  if(isSuccess){
    return (
      <div className={cls['news-fixed']}>
        {data?.map(item => (
          <div key={item.title} onClick={() => navigate(`/news/${item.title?.split(' ').join('-')}`)} className={cls['news-fixed__child']}>
            <span><Clock5/> {item.publishedAt && fullDate(item.publishedAt).time}</span>
            <p>{item.content && textCutter(item.content, 85)}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default FixedNews