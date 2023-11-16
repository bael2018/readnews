import CategoryNews from "components/partials/CategoryNews";
import { useParams } from "react-router-dom"
import SeoHelmet from "components/Helmet";

const CategoryPage = () => {
  const { title } = useParams()

  if(title){
    return (
      <>
        <SeoHelmet config={{ title: `${title.charAt(0).toUpperCase() + title.slice(1)} | readnews`}}/>
        <CategoryNews category={title} />
      </>
    )
  }
}

export default CategoryPage