import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import antd from "assets/vectors/Antd.svg";
import mui from "assets/images/stacks/MUI.png";
import next from "assets/images/stacks/Next.png";
import sass from "assets/images/stacks/Sass.png";
import node from "assets/images/stacks/Node.png";
import nest from "assets/images/stacks/Nest.png";
import { FaRegCheckCircle } from "react-icons/fa";
import react from "assets/images/stacks/React.png";
import redux from "assets/images/stacks/Redux.png";
import _styled from "assets/images/stacks/Styled.png";
import profile from "assets/images/profile/Profile.jpg";
import mongoDB from "assets/images/stacks/MongoDB.png";
import express from "assets/images/stacks/Express.png";
import tailwind from "assets/images/stacks/Tailwind.png";
import postgres from "assets/images/stacks/Postgres.png";
import reactNative from "assets/images/stacks/React-Native.png";

const transition = {
  bounce: 0,
  ease: "linear",
};

const variants = {
  in: { opacity: 0 },
  animate: { opacity: 1 },
  out: { opacity: 0 },
};

export default function About() {
  return (
    <Section exit="out" initial="in" animate="animate" variants={variants} transition={transition}>
      <Container>
        <Row>
          <Column>
            <Photo src={profile} />
          </Column>
          <Column>
            <Title>About Me</Title>
            <Description>
              I am a full stack developer and a 2nd year engineering student currently pursuing CSE from Haldia
              Institute of Technology. I have been working in this field for the past 2 years and my skills are based
              around creating scalable web apps and cross platform mobile apps.
            </Description>
            <Subtitle>Skills</Subtitle>
            <Skills>
              <SkillWrapper>
                <CheckIcon />
                <Skill>Responsive Web Design</Skill>
              </SkillWrapper>
              <SkillWrapper>
                <CheckIcon />
                <Skill>Version Control</Skill>
              </SkillWrapper>
              <SkillWrapper>
                <CheckIcon />
                <Skill>Javascript ES6</Skill>
              </SkillWrapper>
              <SkillWrapper>
                <CheckIcon />
                <Skill>HTTP and REST and GraphQL</Skill>
              </SkillWrapper>
              <SkillWrapper>
                <CheckIcon />
                <Skill>UI / UX</Skill>
              </SkillWrapper>
              <SkillWrapper>
                <CheckIcon />
                <Skill>Creative Vision</Skill>
              </SkillWrapper>
            </Skills>
          </Column>
        </Row>
        <Title className="stack">Tech Stack</Title>
        <TechStacks>
          <TechStack>
            <Tech src={node} />
          </TechStack>
          <TechStack>
            <Tech src={react} />
          </TechStack>
          <TechStack>
            <Tech src={reactNative} />
          </TechStack>
          <TechStack>
            <Tech src={next} />
          </TechStack>
          <TechStack>
            <Tech src={express} />
          </TechStack>
          <TechStack>
            <Tech src={nest} />
          </TechStack>
          <TechStack>
            <Tech src={mongoDB} />
          </TechStack>
          <TechStack>
            <Tech src={postgres} />
          </TechStack>
          <TechStack>
            <Tech src={mui} />
          </TechStack>
          <TechStack>
            <Tech src={sass} />
          </TechStack>
          <TechStack>
            <Tech src={_styled} />
          </TechStack>
          <TechStack>
            <Tech src={tailwind} />
          </TechStack>
          <TechStack>
            <Tech src={redux} />
          </TechStack>
          <TechStack>
            <Tech src={antd} />
          </TechStack>
        </TechStacks>
      </Container>
    </Section>
  );
}

const Section = styled(motion.div)`
  flex: 1;
  padding-top: 100px;
  overflow-x: hidden;
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
  overflow-x: hidden;
  max-width: ${(props) => props.theme.devices.lg}px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 90%;
  }
`;

const Row = styled.div`
  display: grid;
  grid-row-gap: 60px;
  grid-column-gap: 100px;
  grid-template-columns: repeat(2, 1fr);

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 20px;

  &.experience {
    margin-top: 120px;
    text-align: center;

    @media ${(props) => props.theme.breakpoints.md} {
      margin-top: 100px;
    }
  }

  &.stack {
    margin-top: 120px;
    text-align: center;

    @media ${(props) => props.theme.breakpoints.md} {
      margin-top: 100px;
    }
  }
`;

const Subtitle = styled.h1`
  color: white;
  font-size: 24px;
  margin-top: 40px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const Description = styled.p`
  margin-top: 10px;
  line-height: 25px;
  color: ${(props) => props.theme.colors.accent};
`;

const Skills = styled.div`
  display: flex;
  margin-top: 5px;
  flex-direction: column;
`;

const SkillWrapper = styled.div`
  display: flex;
  margin-top: 25px;
  align-items: center;

  &:first-child {
    margin-top: 0px;
  }
`;

const CheckIcon = styled(FaRegCheckCircle)`
  font-size: 16px;

  & > * {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Skill = styled.p`
  font-size: 18px;
  margin-left: 20px;
  color: ${(props) => props.theme.colors.accent};
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 550px;
  object-fit: cover;
`;

const TechStacks = styled.div`
  row-gap: 80px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
  column-gap: 100px;
  align-items: center;
  justify-content: center;
`;

const TechStack = styled.div``;

const Tech = styled.img`
  max-width: 120px;
  max-height: 80px;
  object-fit: contain;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100px;
  }
`;
