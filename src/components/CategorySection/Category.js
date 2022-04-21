import React from 'react'
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
    Route
} from './CategoryElement.js';
import Cook from '../images/cook.jpg';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';

const Category = () => {
    return  (
       <CategorySection id='category'>
           <Container>
               <Header>
                   <Title>
                      Shop By Category
                   </Title>
                   <Text>
                       Tastes Great and Travels well!
                   </Text>
                </Header> 
                <CategoriesBox>
                    <SpecificCategory>
                        <CategoryInner> 
                            <Link to='/cookingessentials'>
                              <CategoryImg src={Cook} alt='imgone' />
                            </Link> 
                            <CategoryContent>
                                <CategoryText>
                                  <Span>Cooking Essentials-</Span>
                                  <Route to= '/cookingessentials'>Explore Product <ChevronRightSharpIcon fontSize = "small" /> </Route> 
                                </CategoryText>      
                           </CategoryContent>
                        </CategoryInner> 
                        <CategoryInner> 
                            <Link to='/dryfruitsandsuperfoods'>
                              <CategoryImg src={Cook} alt='imgone' />
                            </Link> 
                            <CategoryContent>
                                <CategoryText>
                                  <Span>Dry fruits and Superfoods-</Span>
                                  <Route to= '//dryfruitsandsuperfoods'>Explore Product <ChevronRightSharpIcon fontSize = "small" /> </Route> 
                                </CategoryText>      
                            </CategoryContent>
                        </CategoryInner> 
                        <CategoryInner> 
                            <Link to='/'>
                              <CategoryImg src={Cook} alt='imgone' />
                            </Link> 
                            <CategoryContent>
                                <CategoryText>
                                  <Span>Honey and Spreads-</Span>
                                  <Route to= '/'>Explore Product <ChevronRightSharpIcon fontSize = "small" /> </Route> 
                                </CategoryText>      
                            </CategoryContent>
                        </CategoryInner> 
                        <CategoryInner> 
                            <Link to='/'>
                              <CategoryImg src={Cook} alt='imgone' />
                            </Link>  
                            <CategoryContent>
                                <CategoryText>
                                  <Span>Dairy and Cheese-</Span>
                                  <Route to= '/'>Explore Product <ChevronRightSharpIcon fontSize = "small" /> </Route> 
                                </CategoryText>      
                            </CategoryContent>
                        </CategoryInner> 
                        <CategoryInner> 
                            <Link to='/'>
                              <CategoryImg src={Cook} alt='imgone' />
                            </Link> 
                            <CategoryContent>
                                <CategoryText>
                                  <Span>Breakfast and Snacks-</Span>
                                  <Route to= '/'>Explore Product <ChevronRightSharpIcon fontSize = "small" /> </Route> 
                                </CategoryText>      
                            </CategoryContent>
                        </CategoryInner> 
                        <CategoryInner> 
                            <Link to='/'>
                              <CategoryImg src={Cook} alt='imgone' />
                            </Link> 
                            <CategoryContent>
                                <CategoryText>
                                  <Span>Tea Coffee and Beverages-</Span>
                                  <Route to= '/'>Explore Product <ChevronRightSharpIcon fontSize = "small" /> </Route> 
                                </CategoryText>      
                            </CategoryContent>
                        </CategoryInner> 
                    </SpecificCategory> 
                </CategoriesBox> 
            </Container>
        </CategorySection>
    );
  }
export default Category;