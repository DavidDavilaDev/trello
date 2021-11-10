import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { md } from "../../BreakPoints";
import Background from "../Background";
import { register } from "../../Services/userService";
import { useDispatch, useSelector } from "react-redux";

const BgContainer = styled.div`
  display: initial;
  ${md({
    display: "none",
  })}
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  ${md({
    backgroundColor: "#F9FAFC",
  })}
`;
const TrelloIconContainer = styled.div`
  cursor: pointer;
  padding-top: 2.5rem;
  ${md({
    paddingTop: "1rem",
  })}
`;
const Icon = styled.img`
  display: block;
  height: 2.6rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2.5rem;
  ${md({
    marginBottom: "1rem",
  })}
`;
const FormSection = styled.section`
  display: block;
  word-wrap: break-word;
`;
const FormCard = styled.div`
  box-sizing: border-box;
  display: block;
  max-width: 400px;
  width: fit-content;
  margin: 0 auto;
  position: relative;
  background-color: #ffffff;
  border-radius: 3px;
  padding: 1.5rem 2.5rem;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;

  ${md({
    maxWidth: "100%",
    width: "100%",
    boxShadow: "none",
    backgroundColor: "#F9FAFC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: "0.5rem 1rem",
  })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  ${md({
    gap: "0.7rem",
  })}
`;
const Title = styled.h1`
  color: #5e6c84;
  font-size: 1rem;
  padding: 1rem;
`;
const Input = styled.input`
  width: 100%;
  outline: none;
  font-size: 0.85rem;
  border-radius: 0.2rem;
  padding: 0.6rem;
  border: 2px solid #dfe1e6;
  background-color: #fafbfc;
  &:focus {
    transition: background-color 0.2s ease-in-out 0s,
      border-color 0.2s ease-in-out 0s;
    border: 2px solid #68bcff;
  }
`;
const Button = styled.button`
  background-color: #5aac44;
  width: 100%;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: ${(props) =>
      props.disabled
        ? "lightgrey"
        : "linear-gradient(to bottom, #61bd4f 0%, #5aac44 100%)"};
  }
  &:disabled {
    background-color: lightgray;
    cursor: default;
  }
`;
const Hr = styled.hr`
  width: 100%;
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid hsl(0, 0%, 80%);
  margin: 0.5 0;
  padding: 0;
`;
const Text = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  color: #5e6c84;
`;
const Link = styled.a`
  text-decoration: none;
  color: #0052cc;
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  &:hover {
    color: #0052cc;
  }
`;

const Register = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { pending } = useSelector((state) => state.user);
  const [userInformations, setUserInformations] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(userInformations, dispatch);
  };

  return (
    <>
      <BgContainer>
        <Background />
      </BgContainer>
      <Container>
        <TrelloIconContainer onClick={() => history.push("/")}>
          <Icon src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg" />
        </TrelloIconContainer>
        <FormSection>
          <FormCard>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Title>Sign up for your account</Title>
              <Input
                type="text"
                placeholder="Enter name"
                required
                value={userInformations.name}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    name: e.target.value,
                  })
                }
              />
              <Input
                type="text"
                placeholder="Enter surname"
                required
                value={userInformations.surname}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    surname: e.target.value,
                  })
                }
              />
              <Input
                type="email"
                placeholder="Enter email"
                required
                value={userInformations.email}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    email: e.target.value,
                  })
                }
              />
              <Input
                type="password"
                placeholder="Enter password"
                required
                value={userInformations.password}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    password: e.target.value,
                  })
                }
              />
              <Input
                type="password"
                placeholder="Confirm password"
                required
                value={userInformations.repassword}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    repassword: e.target.value,
                  })
                }
              />
              <Text>
                By signing up, you confirm that you've read and accepted our{" "}
                <Link fontSize="0.75rem">Terms of Service</Link> and{" "}
                <Link fontSize="0.75rem">Privacy Policy</Link>.
              </Text>
              <Button type="submit" disabled={pending}>
                Complete
              </Button>
              <Hr />
              <Link fontSize="0.85rem" onClick={() => history.push("/login")}>
                Already have an account? Log In
              </Link>
            </Form>
          </FormCard>
        </FormSection>
      </Container>
    </>
  );
};

export default Register;
