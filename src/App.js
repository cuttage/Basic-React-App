import './App.scss'
import Layout from './layout'
import LayoutUtil from './layout/LayoutUtil'
import Stepper from './components/Stepper'
import Medium from './components/Medium'

const stepsA = [
  {
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id turpi`,
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id turpis at libero accumsan luctus. Maecenas a ultricies libero. Donec mattis con',
  },
  {
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing e`,
  },
]
const stepsB = [
  {
    description: `Lor`,
  },
]

function App() {
  return (
    <Layout>
      <div className="App font-face-gm">
        <LayoutUtil class="App-header one">
          <h1>Lorem.</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing el</h2>
          <Stepper steps={stepsA}></Stepper>
        </LayoutUtil>
        <LayoutUtil class="App-header two">
          <Medium></Medium>
        </LayoutUtil>
        <LayoutUtil class="App-header one font-face-ga">
          <h2>Lorem ipsum d</h2>
          <Stepper steps={stepsB} size={true}></Stepper>
        </LayoutUtil>
      </div>
    </Layout>
  )
}

export default App
