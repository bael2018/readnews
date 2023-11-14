import { FC } from "react"
import { Helmet } from "react-helmet"

interface ISeoHelmetProps {
  config: {
    title: string,
    keywords?: string,
    description?: string
  }
}

const SeoHelmet: FC<ISeoHelmetProps> = ({ config }) => {
  return (
    <Helmet>
      <title>{config. title}</title>
      <meta name="description" content={config.description} />
      <meta name="keywords" content={config.keywords} />
    </Helmet>
  )
}

export default SeoHelmet