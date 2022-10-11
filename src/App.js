import './App.scss'
import Layout from './layout'
import LayoutUtil from './layout/LayoutUtil'
import Stepper from './components/Stepper'
import { Suspense, lazy } from 'react'
const LazyLayout = lazy(() => import('./layout/LazyLayout'))

const stepsA = [
  {
    description: `Healthy, confident sex is very important in dealing with everyday life.`,
  },
  {
    description:
      'What if people could experience the same level of intimate communion (community) of partnerships in groups, with ever-changing novelty and bliss.',
  },
  {
    description: `That's a family. Made easier and with less at stake.`,
  },
]

function App() {
  return (
    <Layout>
      <div className="App font-face-gm">
        <LayoutUtil class="App-header one">
          <h1>Family</h1>
          <h2>People don't need relationships when they have Family</h2>
          <Stepper steps={stepsA}></Stepper>
        </LayoutUtil>
        <Suspense fallback={<></>}>
          <LazyLayout></LazyLayout>
        </Suspense>
      </div>
    </Layout>
  )
}

export default App
