import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";
import insure from "assets/images/projects/Insure.png";
import myteam from "assets/images/projects/MyTeam.png";
import stories from "assets/images/projects/Stories.png";
import shortly from "assets/images/projects/Shortly.png";

const transition = {
  bounce: 0,
  ease: "linear",
};

const variants = {
  in: { opacity: 0 },
  animate: { opacity: 1 },
  out: { opacity: 0 },
};

export default function Projects() {
  return (
    <Section exit="out" initial="in" animate="animate" variants={variants} transition={transition}>
      <Container>
        <Cards>
          <Card>
            <Image src={stories} className="image" />
            <Overlay className="overlay">
              <Name>Stories</Name>
              <Description>
                A social media network project created with MERN Stack and Socket.io for real time chat.
              </Description>
              <Link href="http://stories-codex.herokuapp.com">
                <FaLink />
                <span>Visit</span>
              </Link>
            </Overlay>
          </Card>
          <Card>
            <Image src={myteam} className="image" />
            <Overlay className="overlay">
              <Name>MyTeam Landing Page</Name>
              <Description>A landing page designed from frontendmentors.io web design challenge.</Description>
              <Link href="https://myteam.now.sh/">
                <FaLink />
                <span>Visit</span>
              </Link>
            </Overlay>
          </Card>
          <Card>
            <Image src={insure} className="image" />
            <Overlay className="overlay">
              <Name>Insurance Landing Page</Name>
              <Description>A landing page designed from frontendmentors.io web design challenge.</Description>
              <Link href="https://insure-virid.now.sh/">
                <FaLink />
                <span>Visit</span>
              </Link>
            </Overlay>
          </Card>
          <Card>
            <Image src={shortly} className="image" />
            <Overlay className="overlay">
              <Name>Shortly Landing Page</Name>
              <Description>
                A URL Shortner landing page designed from frontendmentors.io web design challenge.
              </Description>
              <Link href="https://shortly-beige.now.sh/">
                <FaLink />
                <span>Visit</span>
              </Link>
            </Overlay>
          </Card>
        </Cards>
      </Container>
    </Section>
  );
}

const Section = styled(motion.div)`
  flex: 1;
  padding-top: 100px;
  padding-bottom: 100px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding-top: 50px;
    padding-bottom: 80px;
  }
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0 10px;
  max-width: ${(props) => props.theme.devices.lg}px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 90%;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-gap: 100px;
  grid-template-columns: repeat(2, 1fr);

  @media ${(props) => props.theme.breakpoints.md} {
    grid-gap: 80px;
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  overflow: hidden;
  min-height: 200px;
  position: relative;

  &:hover {
    .image {
      transform: scale(1.1);
    }
    .overlay {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease-out;
`;

const Overlay = styled.div`
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  padding: 20px 60px;
  place-items: center;
  place-content: center;
  flex-direction: column;
  transition: opacity 0.2s ease-out;
  background-color: rgba(0, 0, 0, 0.9);

  @media ${(props) => props.theme.breakpoints.xs} {
    padding: 20px;
  }
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.xs} {
    font-size: 18px;
  }
`;

const Description = styled.p`
  font-size: 15px;
  margin-top: 12px;
  line-height: 25px;
  text-align: center;
  margin-bottom: 20px;

  @media ${(props) => props.theme.breakpoints.xs} {
    font-size: 12px;
    line-height: 18px;
  }
`;

const Link = styled.a`
  display: flex;
  text-align: center;
  align-items: center;
  text-decoration: none;

  svg {
    font-size: 20px;
    transition: fill 0.2s ease;

    @media ${(props) => props.theme.breakpoints.xs} {
      font-size: 18px;
    }
  }

  span {
    font-size: 18px;
    margin-top: 2px;
    font-weight: 500;
    margin-left: 5px;
    transition: color 0.2s ease;

    @media ${(props) => props.theme.breakpoints.xs} {
      font-size: 16px;
    }
  }

  &:hover {
    svg {
      fill: ${(props) => props.theme.colors.primary};
    }
    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
