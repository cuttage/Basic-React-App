import { useState } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import StepperIcon from './StepperIcon.js'

const steps = [
  {
    label: '',
    description: `Healthy, confident sex is very important in dealing with everyday life.`,
  },
  {
    label: '',
    description:
      'What if people could experience the same level of intimate communion (community) of partnerships in groups, with ever-changing novelty and bliss.',
  },
  {
    label: '',
    description: `That's a family. Made easier and with less at stake.`,
  },
]

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index + '-step'}>
            <StepLabel
              StepIconComponent={StepperIcon}
              StepIconProps={{ stepidx: index }}
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <h3>{step.description}</h3>
              <Box sx={{ mb: 2 }}>
                <div>
                  <div className="gridParent">
                    {activeStep !== 0 && (
                      <div
                        disabled={index === 0}
                        onClick={activeStep !== 0 ? handleBack : null}
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
                      className="color"
                      onClick={
                        index === steps.length - 1 ? handleReset : handleNext
                      }
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
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </>
  )
}
