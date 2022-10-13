import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${function de(props) {
    if (props.type === "sm") {
      return "10px";
    } else {
      return "45px";
    }
  }};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "200px")};
  background-color: #999;
  flex:1;
`;
const ChannelImage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => (props.type === "sm" && "none" )};
`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex:1;
`;
const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        />
        <Details type={type}>
          <ChannelImage type={type} />
          <Texts>
            <Title>test video</Title>
            <ChannelName>Ayan</ChannelName>
            <Info>660,998 views 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
