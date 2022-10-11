import MySnackbar from '../components/MySnackbar'
import './index.scss'

const Layout = (props) => {
  return (
    <div className={props.class}>
      {props.children}
      <MySnackbar></MySnackbar>
    </div>
  )
}

export default Layout
