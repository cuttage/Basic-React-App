import MySnackbar from '../components/MySnackbar'
import './index.scss'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {children}
      <MySnackbar></MySnackbar>
    </div>
  )
}

export default Layout
