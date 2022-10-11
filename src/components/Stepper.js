import { useState } from 'react'
import './Stepper.scss'

export default function Stepper({ steps, size }) {
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
              <div
                className="firstStepperWrapper"
                style={size && { minHeight: '34.722222222222222vw' }}
              >
                <h3>
                  {index + 1}/{steps.length}
                </h3>
                <div className="secondStepperWrapper">
                  {size ? (
                    <div className={fade ? 'fade h0' : 'h0'}>
                      {step.description}
                    </div>
                  ) : (
                    <h3 className={fade ? 'fade' : ''}>{step.description}</h3>
                  )}
                  {steps.length > 1 && (
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
                            index === steps.length - 1
                              ? handleReset
                              : handleNext
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
                  )}
                </div>
              </div>
            </div>
          )
      )}
    </>
  )
}
