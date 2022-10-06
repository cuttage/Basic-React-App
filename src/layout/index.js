const Layout = (props) => {
  return (
    <div className={props.class}>
      <p>Layout Header</p>
      {props.children}
      <p>Layout Footer</p>
    </div>
  )
}

export default Layout
