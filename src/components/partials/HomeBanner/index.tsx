import { useGetCustomNewsQuery } from 'store/query/newsQuery';
import NotFoundImage from 'assets/image-not-found.jpeg'
import Loader from 'components/elements/Loader';
import { useNavigate } from 'react-router-dom';
import { textCutter } from 'utils/textCutter';
import Error from 'components/elements/Error';
import cls from './banner.module.scss';
import { Clock5 } from 'lucide-react';
import { INew } from 'types/news';
 
const HomeBanner = () => {
  const { data, isLoading, error } = useGetCustomNewsQuery({ category: 'top' })
  const navigate = useNavigate()

  const navigateHandler = (item: INew) => {
    navigate(`/news/${item.title}`)
  }

  if(isLoading) return <Loader/>
  if(error) return <Error/>
  if(data){
    return (
      <div className={cls['banner']}>
        <div onClick={() => navigateHandler(data[0])} className={cls['banner-init']}>
          <img src={data[0].image_url ? data[0].image_url : NotFoundImage} alt="banner-image-1" />
          <div className={cls['banner-init-content']}>
            <div>
              <span><Clock5/> {data[0].pubDate && data[0].pubDate}</span>
              {data[0].creator && <p>- {data[0].creator}</p>}
            </div>
            {data[0].title && <p>{textCutter(data[0].title, 350)}</p>}
          </div>
        </div>
        <div className={cls['banner-list']}>
          <div onClick={() => navigateHandler(data[1])} className={cls['banner-list__child']}>
            <img src={data[1].image_url ? data[1].image_url : NotFoundImage} alt="banner-image-2" />
            <div>
              <span><Clock5/> {data[0].pubDate && data[0].pubDate}</span>
              {data[1].title && <p>{textCutter(data[1].title, 170)}</p>}
            </div>
          </div>  
          <div onClick={() => navigateHandler(data[2])} className={cls['banner-list__child']}>
            <img src={data[2].image_url ? data[2].image_url : NotFoundImage} alt="banner-image-2" />
            <div>
              <span><Clock5/> {data[0].pubDate && data[0].pubDate}</span>
              {data[2].title && <p>{textCutter(data[2].title, 170)}</p>}
            </div>
          </div>  
        </div>
      </div>
    )
  }
}

export default HomeBanner