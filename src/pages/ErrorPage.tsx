import SeoHelmet from "components/Helmet"
import ErrorNavigate from "components/partials/ErrorNavigate"

const ErrorPage = () => {
  return (
    <>
      <SeoHelmet config={{ title: 'Not Found | readnews'}}/>
      <ErrorNavigate/>  
    </>
  )
}

export default ErrorPage