import React from "react";
import {
  CategorySection,
  Container,
  Header,
  Title,
  Text,
  CategoriesBox,
  SpecificCategory,
  CategoryInner,
  Link,
  CategoryImg,
  CategoryContent,
  CategoryText,
  Span,
  Route,
} from "./CategoryElement.js";
import Cook from "../images/cook.jpg";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";

const Category = () => {
  return (
    <CategorySection id="category">
      <Container>
        <Header>
          <Title>Shop By Category</Title>
          <Text>Tastes Great and Travels well!</Text>
        </Header>
        <CategoriesBox>
          <SpecificCategory>
            <CategoryInner>
              <Link to="/product/Cooking_Essentials">
                <CategoryImg src={Cook} alt="imgone" />
              </Link>
              <CategoryContent>
                <CategoryText>
                  <Span>Cooking Essentials-</Span>
                  <Route to="/product/Cooking_Essentials">
                    Explore Product <ChevronRightSharpIcon fontSize="small" />{" "}
                  </Route>
                </CategoryText>
              </CategoryContent>
            </CategoryInner>
            <CategoryInner>
              <Link to="/product/Dry_fruits_and_Superfoods">
                <CategoryImg src={Cook} alt="imgone" />
              </Link>
              <CategoryContent>
                <CategoryText>
                  <Span>Dry fruits and Superfoods-</Span>
                  <Route to="//product/Dry_fruits_and_Superfoods">
                    Explore Product <ChevronRightSharpIcon fontSize="small" />{" "}
                  </Route>
                </CategoryText>
              </CategoryContent>
            </CategoryInner>
            <CategoryInner>
              <Link to="/product/Honey_and_Spreads">
                <CategoryImg src={Cook} alt="imgone" />
              </Link>
              <CategoryContent>
                <CategoryText>
                  <Span>Honey and Spreads-</Span>
                  <Route to="/product/Honey_and_Spreads">
                    Explore Product <ChevronRightSharpIcon fontSize="small" />{" "}
                  </Route>
                </CategoryText>
              </CategoryContent>
            </CategoryInner>
            <CategoryInner>
              <Link to="/product/Dairy_and_Cheese">
                <CategoryImg src={Cook} alt="imgone" />
              </Link>
              <CategoryContent>
                <CategoryText>
                  <Span>Dairy and Cheese-</Span>
                  <Route to="/product/Dairy_and_Cheese">
                    Explore Product <ChevronRightSharpIcon fontSize="small" />{" "}
                  </Route>
                </CategoryText>
              </CategoryContent>
            </CategoryInner>
            <CategoryInner>
              <Link to="/product/Breakfast_and_Snacks">
                <CategoryImg src={Cook} alt="imgone" />
              </Link>
              <CategoryContent>
                <CategoryText>
                  <Span>Breakfast and Snacks-</Span>
                  <Route to="/product/Breakfast_and_Snacks">
                    Explore Product <ChevronRightSharpIcon fontSize="small" />{" "}
                  </Route>
                </CategoryText>
              </CategoryContent>
            </CategoryInner>
            <CategoryInner>
              <Link to="/product/Tea_Coffee_and_Beverages">
                <CategoryImg src={Cook} alt="imgone" />
              </Link>
              <CategoryContent>
                <CategoryText>
                  <Span>Tea Coffee and Beverages-</Span>
                  <Route to="/product/Tea_Coffee_and_Beverages">
                    Explore Product <ChevronRightSharpIcon fontSize="small" />{" "}
                  </Route>
                </CategoryText>
              </CategoryContent>
            </CategoryInner>
          </SpecificCategory>
        </CategoriesBox>
      </Container>
    </CategorySection>
  );
};
export default Category;
