import styled from "styled-components";
import mobile from "../responsive";

const Container = styled.div`
flex:1;
margin: 3px;
height: 70vh;
position:relative;
`;
const Image = styled.img`
width:100%;
height: 100%;
object-fit:cover;
${mobile({
height:"50vh"
  })}
`;
const Info = styled.div`
position:absolute;
top: 0;
left:0;
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;
const Title = styled.h1`
color: white;
margin-bottom:20px;
`;
const Button = styled.button`
border: none;
background-color: white;
padding: 10px;
color: gray;
font-weight:600;
cursor: pointer;
`;

const CategoryItem = ({item}) => {
  console.log(item)
  return( 
  <Container>
    <Image src={item.img}></Image>
    <Info>
    <Title>{item.title}</Title>
    <Button>SHOP NOW</Button>
    </Info>
  </Container>
  )
};

export default CategoryItem;
