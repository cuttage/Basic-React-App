import MySnackbar from '../components/MySnackbar'
import './index.scss'

const Layout = (props) => {
  return (
    <div className={props.class}>
      <MySnackbar></MySnackbar>
      {props.children}
      <MySnackbar footer={true}></MySnackbar>
    </div>
  )
}

export default Layout
