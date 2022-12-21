import React from 'react'
import styled from 'styled-components'
import logos from '../components/img/logos.png'
import HomeIcon from '@mui/icons-material/Home'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined'
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined'
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined'
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined'
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined'
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  position: sticky;
  top: 0;
`
const Wrapper = styled.div`
  padding: 18px 26px;
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
`
const Img = styled.img`
  height: 25px;
`
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`
const Login = styled.div``
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  border-radius: 3px;
  color: #3ea6ff;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`
const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
`
const Menu = ({ darkMode, setDarkMode }) => {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Logo>
            <Img src={logos} />
            PalTube
          </Logo>
        </Link>
      </Wrapper>
      <Item>
        <HomeIcon />
        Home
      </Item>
      <Link to="trends" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
      </Link>
      <Link
        to="subscriptions"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
      </Link>
      <Hr />
      <Item>
        <VideoLibraryOutlinedIcon />
        Library
      </Item>
      <Item>
        <HistoryOutlinedIcon />
        History
      </Item>
      <Hr />
      {!currentUser && (
        <>
          <Login>
            Sign in to like videos,coomment, and subscribe.
            <Link to="signin" style={{ textDecoration: 'none' }}>
              <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Link>
          </Login>
          <Hr />
        </>
      )}
      <Title>Best Of Paltube</Title>
      <Item>
        <LibraryMusicOutlinedIcon />
        Music
      </Item>
      <Item>
        <SportsBasketballOutlinedIcon />
        Sports
      </Item>
      <Item>
        <SportsEsportsOutlinedIcon />
        Gaming
      </Item>
      <Item>
        <MovieOutlinedIcon />
        Movies
      </Item>
      <Item>
        <ArticleOutlinedIcon />
        News
      </Item>
      <Item>
        <LiveTvOutlinedIcon />
        Live
      </Item>
      <Hr />
      <Item>
        <SettingsOutlinedIcon />
        Settings
      </Item>
      <Item>
        <FlagOutlinedIcon />
        Report
      </Item>
      <Item>
        <HelpOutlineOutlinedIcon />
        Help
      </Item>
      <Item onClick={() => setDarkMode(!darkMode)}>
        <SettingsBrightnessOutlinedIcon />
        {darkMode ? 'Light' : 'Dark'}Mode
      </Item>
    </Container>
  )
}

export default Menu
