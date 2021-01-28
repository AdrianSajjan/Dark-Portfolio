import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import waves from "assets/vectors/Waves.svg";
import lines from "assets/vectors/Pattern-Lines.svg";
import programmer from "assets/vectors/Programmer.svg";
import squares from "assets/vectors/Pattern-Square.svg";
import { ImFacebook, ImLinkedin2, ImTwitter, ImGithub } from "react-icons/im";

const transition = {
  bounce: 0,
  ease: "linear",
};

const variants = {
  in: { opacity: 0 },
  animate: { opacity: 1 },
  out: { opacity: 0 },
};

export default function Home() {
  return (
    <Section exit="out" initial="in" animate="animate" variants={variants} transition={transition}>
      <Container>
        <SquareLines src={lines} />
        <SocialLinks>
          <SocialLink href="https://www.twitter.com/AdrianSajjan">
            <ImTwitter size={16} />
          </SocialLink>
          <SocialLink href="https://www.facebook.com/AdrianSajjan">
            <ImFacebook size={16} />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/AdrianSajjan">
            <ImLinkedin2 size={16} />
          </SocialLink>
          <SocialLink href="https://www.github.com/AdrianSajjan">
            <ImGithub size={16} />
          </SocialLink>
        </SocialLinks>
        <Wrapper>
          <Inner>
            <Title>I'm Adrian Sajjan</Title>
            <Description>I am a full stack developer and I love building web apps.</Description>
            <Description>I also love to play football.</Description>
          </Inner>
        </Wrapper>
        <Programmer src={programmer} />
        <SquarePattern src={squares} />
        <WavePattern src={waves} />
      </Container>
    </Section>
  );
}

const Section = styled(motion.div)`
  flex: 1;
  overflow-x: hidden;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  padding: 0 10px;
  overflow-x: hidden;
  max-width: ${(props) => props.theme.devices.lg}px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 90%;
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  z-index: 5;
  display: flex;
  margin-top: 60px;
  margin-left: 40px;
  overflow-x: hidden;
  position: relative;
  flex-direction: column;
  align-items: flex-start;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 0;
    margin-top: 50px;
  }
`;

const Inner = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme.colors.background}B3;
`;

const Title = styled.h1`
  color: white;
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 20px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 36px;
  }
`;

const Description = styled.p`
  margin-top: 10px;
  color: ${(props) => props.theme.colors.accent};
`;

const SocialLinks = styled.div`
  z-index: 5;
  display: flex;
  margin-top: 150px;
  position: relative;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 50px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  color: white;
  margin-top: 20px;
  border-radius: 50px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  background-color: ${(props) => props.theme.colors.primary};

  &:first-child {
    margin-top: 20px;
  }

  &:last-child {
    margin-bottom: 20px;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 20px;
    margin-right: 20px;

    &:first-child {
      margin-top: 0;
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
  }
`;

const SquarePattern = styled.img`
  z-index: 0;
  left: -10px;
  width: 60px;
  bottom: 80px;
  height: 80px;
  opacity: 0.5;
  position: absolute;

  @media ${(props) => props.theme.breakpoints.md} {
    left: unset;
    bottom: 35%;
    right: -20px;
  }
`;

const SquareLines = styled.img`
  top: 200px;
  z-index: 0;
  right: 200px;
  opacity: 0.1;
  width: 150px;
  height: 150px;
  position: absolute;

  @media ${(props) => props.theme.breakpoints.md} {
    top: unset;
    bottom: 35%;
  }
`;

const Programmer = styled.img`
  bottom: 0;
  left: 35%;
  z-index: 2;
  width: 50%;
  max-width: 500px;
  position: absolute;

  @media ${(props) => props.theme.breakpoints.md} {
    left: 20%;
    width: 60%;
    max-width: unset;
  }
`;

const WavePattern = styled.img`
  bottom: 0;
  left: 20%;
  width: 80%;
  z-index: 1;
  opacity: 0.5;
  max-width: 1000px;
  position: absolute;

  @media ${(props) => props.theme.breakpoints.md} {
    left: 0;
    width: 100%;
    max-width: unset;
  }
`;
