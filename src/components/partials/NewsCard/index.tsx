import NotFoundImage from 'assets/image-not-found.jpeg'
import { Clock5 } from 'lucide-react';
import cls from './card.module.scss';
import FixedNews from '../FixedNews';
import { INew } from 'types/news';
import { FC } from 'react';

const NewsCard: FC<{ data: INew }> = ({ data }) => {
  const { 
    image_url,
    title,
    content,
    pubDate,
    source_id,
    creator
  } = data

  return (
    <div className={cls['card']}>
      <div className={cls['card-info']}>
        <img src={image_url ? image_url : NotFoundImage} alt="news-image" />
        <h1>{title}</h1>

        <div className={cls['card-info-title']}>
          <span>
            <Clock5/> {pubDate && pubDate}
          </span>
          {source_id && (
            <>
              |
              <p><b>Source</b> - {source_id}</p>
            </>
          )}
          {creator && (
            <>
              |
              <p><b>Author</b> - {creator}</p>
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