import ErrorNavigate from "components/partials/ErrorNavigate"
import SeoHelmet from "components/Helmet"

const ErrorPage = () => {
  return (
    <>
      <SeoHelmet config={{ title: 'Not Found | readnews'}}/>
      <ErrorNavigate/>  
    </>
  )
}

export default ErrorPage