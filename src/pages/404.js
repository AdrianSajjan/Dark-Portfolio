import React from "react";
import styled from "styled-components";
import error from "assets/vectors/404.svg";
import { motion } from "framer-motion";

const transition = {
  bounce: 0,
  ease: "linear",
};

const variants = {
  in: { opacity: 0 },
  animate: { opacity: 1 },
  out: { opacity: 0 },
};

export default function Error404() {
  return (
    <Container exit="out" initial="in" animate="animate" variants={variants} transition={transition}>
      <Title>Error&nbsp;&nbsp;|&nbsp;&nbsp;404</Title>
      <Subtitle>Page does not exist</Subtitle>
      <Image src={error} />
    </Container>
  );
}

const Container = styled(motion.div)`
  width: 80%;
  display: flex;
  margin: 0 auto;
  padding: 0 10px;
  overflow-x: hidden;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 120px);
  max-width: ${(props) => props.theme.devices.lg}px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 90%;
  }
`;

const Title = styled.h2`
  font-weight: 400;
`;

const Subtitle = styled.h3`
  margin-top: 20px;
  font-weight: 400;
  margin-bottom: 30px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: contain;
`;
