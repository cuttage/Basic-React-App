import './App.scss'
import Medium from './components/Medium'
import Subscribe from './components/Subscribe'
import Layout from './layout'
import LayoutUtil from './layout/LayoutUtil'

function App() {
  return (
    <Layout>
      <div className="App font-face-gm">
        <LayoutUtil class="App-header one">
          <h1>Family</h1>
          <h2>People don't need relationships when they have Family</h2>
          <h3>
            Healthy, confident sex is very important in dealing with everyday
            life. What if people could experience the same level of intimate
            communion (community) of partnerships in groups, with ever-changing
            novelty and bliss. That's a family. Made easier and with less at
            stake.
          </h3>
        </LayoutUtil>
        <LayoutUtil class="App-header two">
          <Subscribe></Subscribe>
          <Medium></Medium>
        </LayoutUtil>
      </div>
    </Layout>
  )
}

export default App
