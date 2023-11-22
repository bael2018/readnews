import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import Loader from "components/elements/Loader";
import { useNavigate } from "react-router-dom";
import Error from "components/elements/Error";
import { textCutter } from "utils/textCutter"
import cls from './search.module.scss';
import { Clock5 } from "lucide-react"
import { INew } from "types/news"
import { FC } from "react"

interface INewsProps { 
  isLoading: boolean, 
  data: INew[], 
  error: FetchBaseQueryError | SerializedError | undefined
}

const SearchListNews: FC<INewsProps> = ({ isLoading, data, error }) => {
  const navigate = useNavigate()

  if(isLoading) return <Loader/>
  if(error) return <Error/>
  return (
      <div className={cls['search-list']}>
        { 
          data?.length ? (
            data?.map(item => (
              item.image_url ? (
                <div 
                  onClick={() => navigate(`/news/${item.title}`)} 
                  key={item.article_id} 
                  className={cls['search-list__child']}
                >
                  <div className={cls['search-list__child__image']}>
                    <img src={item.image_url} alt="image_url" />
                  </div>
                  <div className={cls['search-list__child__content']}>
                    <div className={cls['content-date']}>
                      <Clock5/> {item.pubDate}
                    </div>
                    <p>{item.content && textCutter(item.content, 300)}</p>
                  </div>
                </div>
              ) : (
              <div 
                onClick={() => navigate(`/news/${item.title}`)} 
                key={item.article_id} 
                className={cls['search-list__child_alt']}
              >
                <div className={cls['search-list__child__content']}>
                  <div className={cls['content-date']}>
                    <Clock5/> {item.pubDate}
                  </div>
                  <p>{item.content && textCutter(item.content, 300)}</p>
                </div>
              </div>
              )
            ))
          ) : (
            <h1>No news found !</h1>
          )
        }
    </div>
  )
}

export default SearchListNews