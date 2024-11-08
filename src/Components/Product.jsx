import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
const Info = styled.div`
width: 100%;
height: 100%;
background-color:rgba(0,0,0,0.2);
position: absolute;
top: 0;
left: 0;
display:flex ;
justify-content:center;
align-items:center;
z-index:3;
opacity: 0;
transition: all 0.5s ease;
`;
const Container = styled.div`

flex: 1;
margin: 5px;
min-width:280px;
height: 350px;
display: flex;
justify-content:center;
align-items:center;
position: relative;
background-color:#f5fafd;
&:hover ${Info}{
  opacity:1;
}
`;
const Circle = styled.div`
width: 250px;
height: 250px;
background-color:white;
border-radius:50%;
position:absolute;
`;
const Image = styled.img`
height: 50%;
z-index:2;
object-fit:contain;
`;

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius:50%;
background-color:white;
display: flex;
justify-content:center;
align-items:center;
margin: 10px;
transition:all 0.3s ease;
cursor: pointer;
&:hover{
  background-color:#e9f5f5;
  transform: scale(1.1);
}
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Circle></Circle>
      <Image src={item.img}></Image>
      <Info>
        <Icon>
          <ShoppingCartOutlined></ShoppingCartOutlined>
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
