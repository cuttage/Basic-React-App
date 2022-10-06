import { memo } from 'react'
import './StepperIcon.scss'

const StepperIcon = (props) => {
  return (
    <div className="circle-base">
      <h4>{props.stepidx + 1}</h4>
    </div>
  )
}

export default memo(StepperIcon)
