import Header from "components/general/Header/Header"
import Footer from "components/general/Footer"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div className="layout">
      <div>
        <Header/>
        <div className="container-width">
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AppLayout