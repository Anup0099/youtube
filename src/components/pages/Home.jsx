import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../Card'
import axios from 'axios'
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Home = ({ type }) => {
  const [Videos, setVideos] = useState([])
  const [error, setError] = useState(false)
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`http://localhost:5000/api/videos/${type}`)
      setVideos(res.data)
      console.log(res.data)
    }
    fetchVideos()
  }, [type])

  return (
    <Container>
      {Videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  )
}

export default Home
