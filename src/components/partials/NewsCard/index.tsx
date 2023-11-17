import NotFoundImage from 'assets/image-not-found.jpeg'
import { Clock5 } from 'lucide-react';
import { fullDate } from 'utils/date';
import cls from './card.module.scss';
import FixedNews from '../FixedNews';
import { INew } from 'types/news';
import { FC } from 'react';

const NewsCard: FC<{ data: INew }> = ({ data }) => {
  const { 
    urlToImage,
    author,
    source,
    title,
    content,
    publishedAt
  } = data

  return (
    <div className={cls['card']}>
      <div className={cls['card-info']}>
        <img src={urlToImage ? urlToImage : NotFoundImage} alt="news-image" />
        <h1>{title}</h1>

        <div className={cls['card-info-title']}>
          <span>
            <Clock5/> {publishedAt && fullDate(publishedAt).date + ' - ' + fullDate(publishedAt).time}
          </span>
          {source.name && (
            <>
              |
              <p><b>Source</b> - {source.name}</p>
            </>
          )}
          {author && (
            <>
              |
              <p><b>Author</b> - {author}</p>
            </>
          )}
        </div>
        <p>
          {content}
        </p>
      </div>
      <FixedNews/>
    </div>
  )
}

export default NewsCard