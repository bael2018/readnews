import { useGetCustomNewsQuery } from 'store/query/newsQuery';
import NotFoundImage from 'assets/image-not-found.jpeg'
import Loader from 'components/elements/Loader';
import { addNew } from 'store/slices/newsSlice';
import { useAppDispatch } from 'hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { textCutter } from 'utils/textCutter';
import Error from 'components/elements/Error';
import cls from './banner.module.scss';
import { Clock5 } from 'lucide-react';
import { fullDate } from 'utils/date';
import { INew } from 'types/news';
 
const HomeBanner = () => {
  const { data, isLoading, error } = useGetCustomNewsQuery({ size: 3, domain: 'engadget.com' })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const navigateHandler = (item: INew) => {
    dispatch(addNew(item))
    navigate(`/news/${item.title?.split(' ').join('-')}`)
  }

  if(isLoading) return <Loader/>
  if(error) return <Error/>
  if(data){
    return (
      <div className={cls['banner']}>
        <div onClick={() => navigateHandler(data[0])} className={cls['banner-init']}>
          <img src={data[0].urlToImage ? data[0].urlToImage : NotFoundImage} alt="banner-image-1" />
          <div className={cls['banner-init-content']}>
            <div>
              <span><Clock5/> {fullDate(data[0].publishedAt ? data[0].publishedAt : '').date}</span>
              {data[0].author && <p>- {data[0].author}</p>}
            </div>
            {data[0].title && <p>{textCutter(data[0].title, 350)}</p>}
          </div>
        </div>
        <div className={cls['banner-list']}>
          <div onClick={() => navigateHandler(data[1])} className={cls['banner-list__child']}>
            <img src={data[1].urlToImage ? data[1].urlToImage : NotFoundImage} alt="banner-image-2" />
            <div>
              <span><Clock5/> {fullDate(data[1].publishedAt ? data[1].publishedAt : '').date}</span>
              {data[1].title && <p>{textCutter(data[1].title, 170)}</p>}
            </div>
          </div>  
          <div onClick={() => navigateHandler(data[2])} className={cls['banner-list__child']}>
            <img src={data[2].urlToImage ? data[2].urlToImage : NotFoundImage} alt="banner-image-2" />
            <div>
              <span><Clock5/> {fullDate(data[2].publishedAt ? data[2].publishedAt : '').date}</span>
              {data[2].title && <p>{textCutter(data[2].title, 170)}</p>}
            </div>
          </div>  
        </div>
      </div>
    )
  }
}

export default HomeBanner