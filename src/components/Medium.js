import { useState, useEffect, useCallback } from 'react'
import ToText from '../utils/ToText'
import axios from 'axios'
import './Medium.scss'
import Skeleton from '@mui/material/Skeleton'
import Tooltip from '@mui/material/Tooltip'
import GoogleForm from './GoogleForm'
import ImgWithFallback from './ImgWithFallback'
import pictureAVIF from '../images/asset-xl.avif'
import pictureWP from '../images/asset-xl.webp'
import picturePNG from '../images/asset-xl.png'

function Medium() {
  const mediumURL =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@steelbreaker'
  const unlistedArticleURL =
    'https://medium.com/@steelbreaker/how-to-join-family-unveiling-the-details-e8ab2cbf082e?source=friends_link&sk=285238d2074b2f8505c06631e39d5253'
  const [profile, setProfile] = useState({
    name: 'Marta Fattori',
    profileImage: '',
    profileUrl: '',
    profileDescription: '',
  })
  const [unlistedArticle, setUnlistedArticle] = useState([])
  const [hiImage, setHiImage] = useState(null)

  const getMediumFeed = useCallback(() => {
    setUnlistedArticle([
      {
        author: 'Marta Fattori',
        title: 'How to join Family: Unveiling the details',
        description:
          'Congratulations! You made it to the first cut-off for my parties (I am A. Steelbreaker).',
      },
    ])
  }, [])

  useEffect(() => {
    const myHeaders2 = new Headers()
    myHeaders2.append('Content-Type', 'application/json')
    myHeaders2.append('SameSite', 'Strict')
    const requestOptions2 = {
      method: 'get',
      headers: myHeaders2,
      redirect: 'follow',
    }
    axios(
      {
        method: 'get',
        url: mediumURL,
      },
      requestOptions2
    ).then((info) => {
      const image = info.data.feed.image
      const link = info.data.feed.link
      const description = info.data.feed.description
      const splitSet = info.data.feed.image.split('/150/150')
      if (splitSet.length > 1) {
        setHiImage(splitSet[0] + '/208/208' + splitSet[1])
      }

      setProfile((p) => ({
        ...p,
        profileUrl: link,
        profileImage: image,
        profileDescription: description,
      }))
    })
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
            <Tooltip
              title={profile.profileDescription}
              key={index + '-tooltip'}
            >
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
                  alt={profile.name}
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
