import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import styled from "styled-components";
import { motion } from "framer-motion";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useToasts } from "react-toast-notifications";
import { useFormspark } from "@formspark/use-formspark";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const transition = {
  bounce: 0,
  ease: "linear",
};

const variants = {
  in: { opacity: 0 },
  animate: { opacity: 1 },
  out: { opacity: 0 },
};

export default function Contact() {
  const toasts = useToasts();
  const [submit, submitting] = useFormspark({ formId: "ceoz0oKs" });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required").min(5, "Please enter a valid name"),
      email: Yup.string().required("Email is required").email("Please enter a valid email"),
    }),
    onSubmit: async (values, action) => {
      try {
        await submit(values);
        toasts.addToast("Your message has been submitted", { appearance: "success", autoDismiss: true });
      } catch (error) {
        toasts.addToast("There was an error", { appearance: "error", autoDismiss: true });
      } finally {
        action.resetForm();
      }
    },
  });

  return (
    <Section exit="out" initial="in" animate="animate" variants={variants} transition={transition}>
      <Container>
        <Row>
          <Column>
            <Form onSubmit={formik.handleSubmit}>
              <Field>
                <Label htmlFor="name" required>
                  Name
                </Label>
                <Input name="name" id="name" {...formik.getFieldProps("name")} />
                <Helper>{formik.touched.name && formik.errors.name}</Helper>
              </Field>
              <Field>
                <Label htmlFor="email" required>
                  Email
                </Label>
                <Input name="email" id="email" {...formik.getFieldProps("email")} />
                <Helper>{formik.touched.email && formik.errors.email}</Helper>
              </Field>
              <Field>
                <Label htmlFor="message">Message</Label>
                <TextArea rows={10} name="message" id="message" {...formik.getFieldProps("message")}></TextArea>
              </Field>
              <Field>
                <Button disabled={submitting} type="submit">
                  {submitting ? <ScaleLoader color="white" height={12} /> : "Submit"}
                </Button>
              </Field>
            </Form>
          </Column>
          <Column>
            <Wrapper>
              <p className="title">Mail me at</p>
              <a className="target" href="mailto:adriansajjan2001@gmail.com">
                <FaEnvelope className="icon" />
                <span className="text">adriansajjan2001@gmail.com</span>
              </a>
              <p className="divider">Or</p>
              <p className="title">Call me at</p>
              <p className="target">
                <FaPhoneAlt className="icon" />
                <span className="number">+91 9733203125</span>
              </p>
            </Wrapper>
          </Column>
        </Row>
      </Container>
    </Section>
  );
}

const Section = styled(motion.div)`
  flex: 1;
  padding-top: 60px;
  padding-bottom: 60px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding-top: 40px;
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

const Row = styled.div`
  display: grid;
  grid-gap: 80px;
  grid-template-columns: repeat(2, 1fr);

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  gap: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.theme.devices.xs}px;
`;

const Field = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: white;
  margin-left: 5px;

  &::after {
    content: " *";
    color: ${(props) => props.theme.colors.primary};
    display: ${(props) => (props.required ? "inline" : "none")};
  }
`;

const Helper = styled.span`
  color: #f56969;
  font-size: 12px;
  margin-left: 5px;
`;

const Input = styled.input`
  border: none;
  color: black;
  outline: none;
  font-size: 15px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #eeeeee;
  font-family: "Montserrat", sans-serif;

  &:focus {
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  border: none;
  color: black;
  resize: none;
  outline: none;
  font-size: 15px;
  margin-top: 5px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #eeeeee;
  font-family: "Montserrat", sans-serif;

  &:focus {
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme.colors.primary};
  }
`;

const Button = styled.button`
  color: white;
  font-size: 16px;
  font-weight: 500;
  min-height: 40px;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
  font-family: "Montserrat", sans-serif;
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};

  &:hover {
    color: ${(props) => (props.disabled ? "white" : props.theme.colors.primary)};
    background-color: ${(props) => (props.disabled ? props.theme.colors.primary : "transparent")};
  }
`;

const Wrapper = styled.div`
  gap: 15px;
  display: flex;
  color: #eeeeee;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .title {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }

  .target {
    gap: 15px;
    display: flex;
    text-align: center;
    align-items: center;
    text-decoration: none;
  }

  .icon {
    fill: #eeeeee;
    margin-top: 2px;
  }

  .text {
    color: #eeeeee;
    font-size: 18px;
    text-decoration: none;
  }

  .number {
    color: #eeeeee;
    font-size: 18px;
    letter-spacing: 1px;
    text-decoration: none;
    font-family: monospace;
  }

  .divider {
    font-size: 18px;
    font-weight: 600;
    margin: 20px auto;
    text-align: center;
  }
`;
