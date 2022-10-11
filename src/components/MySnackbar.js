import './MySnackbar.scss'
import Tooltip from '@mui/material/Tooltip'

const MySnackbar = () => {
  const noticeUrl =
    'https://medium.com/@steelbreaker/family-legal-notice-570b93c98d86?source=friends_link&sk=a99b8ff35097389c457254748101119e'

  return (
    <div className="snack-bar">
      <div className="footer">
        <div className="snack-bar snack-bar-foot">
          <div className="h4-text">
            <h4>2022 Family — All rights reserved</h4>
          </div>
          <Tooltip title="Join and save 150 USD over three months">
            <div className="h4-text">
              <h4>We are in Alpha! — Get us now until we are a Baby</h4>
            </div>
          </Tooltip>
          <Tooltip title="Legal Notice">
            <a
              href={noticeUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="wrapper-card"
            >
              <h4>Legal Notice</h4>
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default MySnackbar
