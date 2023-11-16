import NewsCard from "components/partials/NewsCard"
import { useParams } from "react-router-dom"
import SeoHelmet from "components/Helmet"

const NewsPage = () => {
  const { id } = useParams()

  return (
    <>
    <SeoHelmet config={{ title: `${id} | readnews`}}/>
    <NewsCard/>
  </>
  )
}

export default NewsPage