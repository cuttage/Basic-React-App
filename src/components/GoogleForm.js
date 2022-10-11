import Tooltip from '@mui/material/Tooltip'

const GoogleForm = () => {
  const formUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSf4CELDYZ0QVGZjmwCKWgxdo97oi4tmSkyclxPrenXPHjTMxw/viewform'
  return (
    <Tooltip title="Google Form - Sign in required">
      <a
        href={formUrl}
        rel="noopener noreferrer"
        target="_blank"
        className="wrapper-card"
      >
        <h3>Get our Google Form No. 2</h3>
      </a>
    </Tooltip>
  )
}

export default GoogleForm
