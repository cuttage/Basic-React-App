import Medium from '../components/Medium'
import Stepper from '../components/Stepper'
import LayoutUtil from './LayoutUtil'

const stepsB = [
  {
    description: `NYC`,
  },
]

const LazyLayout = () => {
  return (
    <>
      <LayoutUtil class="App-header two">
        <Medium></Medium>
      </LayoutUtil>
      <LayoutUtil class="App-header one font-face-ga">
        <h2>Where we are:</h2>
        <Stepper steps={stepsB} size={true}></Stepper>
      </LayoutUtil>
    </>
  )
}

export default LazyLayout
