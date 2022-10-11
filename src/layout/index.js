import MySnackbar from '../components/MySnackbar'
import './index.scss'
import { Suspense, lazy } from 'react'
const LazyLayout = lazy(() => import('./LazyLayout'))

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Suspense
        fallback={<div style={{ minHeight: '100vh', width: '100vw' }}></div>}
      >
        <LazyLayout child={children}></LazyLayout>
      </Suspense>
      <MySnackbar></MySnackbar>
    </div>
  )
}

export default Layout
