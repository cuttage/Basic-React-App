import { useState } from 'react'
import './Stepper.scss'

const steps = [
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

export default function Stepper() {
  const [fade, setFade] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setFade(true)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
    setFade(true)
  }

  const handleReset = () => {
    setActiveStep(0)
    setFade(true)
  }

  return (
    <>
      {steps.map(
        (step, index) =>
          activeStep === index && (
            <div key={index + '-step'}>
              <div className="firstStepperWrapper">
                <h3>
                  {index + 1}/{steps.length}
                </h3>
                <div className="secondStepperWrapper">
                  <h3 className={fade ? 'fade' : ''}>{step.description}</h3>
                  <div className="thirdStepperThing">
                    <div className="gridParent">
                      {activeStep !== 0 && (
                        <div
                          disabled={index === 0}
                          onClick={activeStep !== 0 ? handleBack : null}
                          onAnimationEnd={() => setFade(false)}
                          className="color"
                        >
                          <div className="wrapper-card">
                            <div className="card">
                              <h5>Back</h5>
                            </div>
                          </div>
                        </div>
                      )}
                      <div
                        onClick={
                          index === steps.length - 1 ? handleReset : handleNext
                        }
                        onAnimationEnd={() => setFade(false)}
                        className="color"
                      >
                        <div className="wrapper-card">
                          <div className="card">
                            <h5>
                              {index === steps.length - 1 ? 'Reset' : 'Next'}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </>
  )
}
