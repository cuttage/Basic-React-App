import Tooltip from '@mui/material/Tooltip'

const GoogleForm = () => {
  const formUrl = 'https://www.google.com/forms/about/'
  return (
    <Tooltip title="Google Form - Sign in required">
      <a
        href={formUrl}
        rel="noopener noreferrer"
        target="_blank"
        className="wrapper-card"
      >
        <h3>Lorem ipsum dolor sit ame</h3>
      </a>
    </Tooltip>
  )
}

export default GoogleForm
