import { useState, useEffect, useCallback } from 'react'
import ToText from '../utils/ToText'
import './Medium.scss'
import Skeleton from '@mui/material/Skeleton'
import Tooltip from '@mui/material/Tooltip'
import GoogleForm from './GoogleForm'
import ImgWithFallback from './ImgWithFallback'
import pictureAVIF from '../images/asset-xl.avif'
import pictureWP from '../images/asset-xl.webp'
import picturePNG from '../images/asset-xl.png'

function Medium() {
  const unlistedArticleURL = 'https://medium.com/'

  const [unlistedArticle, setUnlistedArticle] = useState([])

  const getMediumFeed = useCallback(() => {
    setUnlistedArticle([
      {
        author: 'Lorem ipsum dol',
        title: 'Lorem ipsum dolor sit amet, consectetur a',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id turpis at libero accum',
        thumb: 'Lorem ipsum dolor sit amet, consecte',
      },
    ])
  }, [])

  useEffect(() => {
    getMediumFeed()
  }, [getMediumFeed])

  return (
    <>
      <h2 className="centerText">Get started in two simple steps:</h2>
      <div className="flexParent">
        <h3>One: Read Medium Article</h3>
        <div className="color">
          {unlistedArticle.map((post, index) => (
            <Tooltip title={post.thumb} key={index + '-tooltip'}>
              <a
                href={unlistedArticleURL}
                rel="noopener noreferrer"
                target="_blank"
                className="wrapper-card"
              >
                <ImgWithFallback
                  src={pictureWP}
                  avifsrc={pictureAVIF}
                  fallback={picturePNG}
                  alt={post.author}
                  className="pa"
                />
                {post ? (
                  <div className="card">
                    <h3>{post.author}</h3>
                    <h4>{post.title}</h4>
                    <h5>{`${ToText(
                      post.description.substring(0, 1000)
                    )}...`}</h5>
                  </div>
                ) : (
                  <div className="card-skeleton">
                    <Skeleton
                      variant="rectangular"
                      width={320}
                      height={20}
                      className="skeleton"
                    />
                    <Skeleton
                      variant="rectangular"
                      width={320}
                      height={20}
                      className="skeleton"
                    />
                    <Skeleton
                      variant="rectangular"
                      width={320}
                      height={20}
                      className="skeleton"
                    />
                  </div>
                )}
              </a>
            </Tooltip>
          ))}
        </div>
      </div>
      <div className="flexParent">
        <h3>Two: Submit Google Form</h3>
        <div className="color">
          <GoogleForm></GoogleForm>
        </div>
      </div>
    </>
  )
}

export default Medium
