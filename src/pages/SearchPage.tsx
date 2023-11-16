import SearchNews from "components/partials/SearchNews"
import SeoHelmet from "components/Helmet"

const SearchPage = () => {
  return (
    <>
      <SeoHelmet config={{ title: 'Search | readnews'}}/>
      <SearchNews/>
    </>
  )
}

export default SearchPage