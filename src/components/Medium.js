import { useState, useEffect, useCallback } from 'react'
import ToText from '../utils/ToText'
import axios from 'axios'
import './Medium.scss'
import Skeleton from '@mui/material/Skeleton'

function Medium() {
  const mediumURL =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@steelbreaker'
  const mediumArticleURL =
    'https://v1.nocodeapi.com/steelbreaker/medium/phmszrcQMonkWKyE'
  const unlistedArticleURL =
    'https://medium.com/@steelbreaker/how-to-join-family-unveiling-the-details-e8ab2cbf082e'
  const [profile, setProfile] = useState({
    name: 'Marta Fattori',
    profileImage: '',
    profileUrl: '',
  })
  const [article, setArticle] = useState([])

  const getMediumFeed = useCallback(() => {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const requestOptions = {
      method: 'get',
      headers: myHeaders,
      redirect: 'follow',
    }
    axios(
      {
        method: 'get',
        url: mediumArticleURL,
      },
      requestOptions
    ).then(({ data }) => {
      console.log(data)
      setArticle(data)
    })
  }, [])

  useEffect(() => {
    axios.get(mediumURL).then((info) => {
      const image = info.data.feed.image
      const link = info.data.feed.link

      setProfile((p) => ({ ...p, profileUrl: link, profileImage: image }))
      console.log(profile, info.data, 'infos')
    })
  }, [profile])

  useEffect(() => {
    getMediumFeed()
  }, [getMediumFeed])

  return (
    <div className="flexParent">
      <h2>Blog Posts</h2>
      <div className="color">
        {article.map((post, index) => (
          <a
            key={index}
            href={unlistedArticleURL}
            rel="noopener noreferrer"
            target="_blank"
            className="wrapper-card"
          >
            {profile?.profileImage?.length > 0 ? (
              <img
                alt={profile.name}
                src={profile.profileImage}
                className="pa"
              />
            ) : (
              <Skeleton
                variant="circular"
                width={52}
                height={52}
                className="pa"
              />
            )}
            {post ? (
              <div className="card">
                <h3>{post.author}</h3>
                <h4>{post.title}</h4>
                <h5>{`${ToText(post.content.substring(0, 1000))}...`}</h5>
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
        ))}
      </div>
    </div>
  )
}

export default Medium
