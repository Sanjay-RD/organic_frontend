import React from "react";
import {
  ConcernSection,
  Container,
  Header,
  Title,
  Text,
  ConcernBox,
  SpecificConcern,
  ConcernInner,
  Link,
  ConcernImg,
  ConcernContent,
  ConcernText,
  Span,
  Route,
  StLine,
} from "./ConcernElement.js";
import Cook from "../images/cook.jpg";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";

const Concern = () => {
  return (
    <ConcernSection id="concern">
      <Container>
        <Header>
          <Title>Shop By Concern</Title>
          <Text>We care about your health, Eat Bright Be Bright!</Text>
        </Header>
        <ConcernBox>
          <SpecificConcern>
            <ConcernInner>
              <Link to="/product/Digestion">
                <ConcernImg src={Cook} alt="imgone" />
              </Link>
              <ConcernContent>
                <ConcernText>
                  <Span>Digestion</Span>
                  <Route to="/product/Digestion">
                    Explore Product <ChevronRightSharpIcon fontSize="small" />{" "}
                  </Route>
                </ConcernText>
              </ConcernContent>
            </ConcernInner>
            <ConcernInner>
              <Link to="/product/Gluten_free">
                <ConcernImg src={Cook} alt="imgone" />
              </Link>
              <ConcernContent>
                <ConcernText>
                  <Span>Gluten free</Span>
                  <Route to="/product/Gluten_free">
                    Explore Product <ChevronRightSharpIcon fontSize="small" />{" "}
                  </Route>
                </ConcernText>
              </ConcernContent>
            </ConcernInner>
            <ConcernInner>
              <Link to="/product/Diabetes">
                <ConcernImg src={Cook} alt="imgone" />
              </Link>
              <ConcernContent>
                <ConcernText>
                  <Span>Diabetes</Span>
                  <Route to="/product/Diabetes">
                    Explore Product <ChevronRightSharpIcon fontSize="small" />{" "}
                  </Route>
                </ConcernText>
              </ConcernContent>
            </ConcernInner>
            <ConcernInner>
              <Link to="/product/Child_Care">
                <ConcernImg src={Cook} alt="imgone" />
              </Link>
              <ConcernContent>
                <ConcernText>
                  <Span>Child Care</Span>
                  <Route to="/product/Child_Care">
                    Explore Product <ChevronRightSharpIcon fontSize="small" />{" "}
                  </Route>
                </ConcernText>
              </ConcernContent>
            </ConcernInner>
            <ConcernInner>
              <Link to="/product/Vegan">
                <ConcernImg src={Cook} alt="imgone" />
              </Link>
              <ConcernContent>
                <ConcernText>
                  <Span>Vegan</Span>
                  <Route to="/product/Vegan">
                    Explore Product <ChevronRightSharpIcon fontSize="small" />{" "}
                  </Route>
                </ConcernText>
              </ConcernContent>
            </ConcernInner>
            <ConcernInner>
              <Link to="/product/Pregnancy">
                <ConcernImg src={Cook} alt="imgone" />
              </Link>
              <ConcernContent>
                <ConcernText>
                  <Span>Pregnancy</Span>
                  <Route to="/product/Pregnancy">
                    Explore Product <ChevronRightSharpIcon fontSize="small" />{" "}
                  </Route>
                </ConcernText>
              </ConcernContent>
            </ConcernInner>
          </SpecificConcern>
        </ConcernBox>
      </Container>
      <StLine />
    </ConcernSection>
  );
};
export default Concern;
