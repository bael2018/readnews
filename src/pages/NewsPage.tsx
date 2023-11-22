import { useGetSingleNewQuery } from "store/query/newsQuery"
import NewsCard from "components/partials/NewsCard"
import Loader from "components/elements/Loader"
import Error from "components/elements/Error"
import { useParams } from "react-router-dom"
import SeoHelmet from "components/Helmet"

const NewsPage = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useGetSingleNewQuery(id?.split(' ').slice(0,3).join(' ') || '')

  return (
    <>
      <SeoHelmet config={{ title: `${id} | readnews`}}/>
      {isLoading && <Loader/>}
      {error && <Error/>}
      {data && <NewsCard data={data}/>}
    </>
  )
}

export default NewsPage