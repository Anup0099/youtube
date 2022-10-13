import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ThumbDownOffAltOutlined from "@mui/icons-material/ThumbDownOffAltOutlined";
import Comment from "../Comment";
import Comments from "../Comments";
import Card from "../Card";
const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const Videos = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;
const Recommendation = styled.div`
  flex: 2;
`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ChnnelDatail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChnnelName = styled.span`
  font-weight: 500;
`;
const ChnnelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const Desciption = styled.p`
  font-size: 14px;
`;
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  cursor: pointer;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
`;
const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer:autoplay;clipboard:copy;encrypted-media:copy;gyroscope:autoplay;picture-in-picture:copy;"
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>660,998 views 1 day ago</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon />
              123
            </Button>
            <Button>
              <ThumbDownOffAltOutlined />
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon />
              Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
       
        <Channel>
          <ChannelInfo>
            <Image src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
            <ChnnelDatail>
              <ChnnelName>Lama dev</ChnnelName>
              <ChnnelCounter>200k subscribers</ChnnelCounter>
              <Desciption>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                eius ex ipsa labore corrupti consequatur deleniti, ut eaque
                distinctio error odio iusto deserunt cupiditate aspernatur, quam
                dignissimos numquam quidem. Tempora?
              </Desciption>
            </ChnnelDatail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      </Recommendation>
     
    </Container>
  );
};

export default Video;
