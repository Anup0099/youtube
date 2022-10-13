import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
  height: calc(100vh - 56px);
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;
const Title = styled.h1`
  font-size: 24px;
`;
const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  background-color: transparent;
  width: 100%;
  padding: 10px;
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.textSoft};
`;
const More = styled.div`
  display: flex;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 10px;
`;
const Links = styled.div`
  margin-left: 50px;
`;
const SignIn = styled.div``;

const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SignIn</Title>
        <SubTitle>SignIn to your account</SubTitle>
        <Input placeholder="Email" />
        <Input type="password" placeholder="password" />
        <Button>SignIn</Button>
        <Title>or</Title>
        <Input placeholder="Username" />
        <Input placeholder="enter your email" />
        <Input placeholder="Password" />
        <Button>Sign Up</Button>
      </Wrapper>
      <More>
        <Links>English (USA)</Links>
        <Links>English (USA)</Links>
        <Links>English (USA)</Links>
        <Links>English (USA)</Links>
      </More>
    </Container>
  );
};

export default Signin;
