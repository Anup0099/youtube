import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'
const Container = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
  height: calc(100vh - 56px);
  flex-direction: column;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`
const Title = styled.h1`
  font-size: 24px;
`
const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
`
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  background-color: transparent;
  width: 100%;
  padding: 10px;
`
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.textSoft};
`
const More = styled.div`
  display: flex;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 10px;
`
const Links = styled.div`
  margin-left: 50px;
`
const SignIn = styled.div``

const Signin = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatchEvent = useDispatch()
  const handleLogin = async (e) => {

    e.preventDefault()
    dispatchEvent(loginStart())
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signin', {
        name,
        password,
      })
      dispatchEvent(loginSuccess(res.data))
      
    } catch (err) {
      dispatchEvent(loginFailure())
    }
  }
  return (
    <Container>
      <Wrapper>
        <Title>SignIn</Title>
        <SubTitle>SignIn to your account</SubTitle>
        <Input
          placeholder="UserName"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>SignIn</Button>
        <Title>or</Title>
        <Input
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Sign Up</Button>
      </Wrapper>
      <More>
        <Links>English (USA)</Links>
        <Links>English (USA)</Links>
        <Links>English (USA)</Links>
        <Links>English (USA)</Links>
      </More>
    </Container>
  )
}

export default Signin
