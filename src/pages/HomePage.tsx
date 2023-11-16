import HomeBanner from "components/partials/HomeBanner"
import HomeNews from "components/partials/HomeNews"
import SeoHelmet from "components/Helmet"

const HomePage = () => {
  return (
    <>
      <SeoHelmet config={{ title: 'Home | readnews'}}/>
      <HomeBanner/>
      <HomeNews/>
    </>
  )
}

export default HomePage