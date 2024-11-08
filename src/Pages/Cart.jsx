import Announcement from "../Components/Announcement";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import Footer from "../Components/Footer";
import { Add, Remove } from "@mui/icons-material";
import mobile from "../responsive";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({
padding:"10px"
})}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
 ${mobile({
display:"none"
})}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
flexDirection:"column"
})}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
display: flex;
justify-content:space-between;
${mobile({
flexDirection:"column"
})}
`;
const ProductDetail = styled.div`
 flex:2;
 display: flex;
`;  

const Image = styled.img`
width: 150px;
margin: 30px 0px;
${mobile({
width:"170px",margin: "10px 0px"
})}
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction:column;
justify-content:space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
width: 12px;
padding: 12px;
border-radius:50%;
background-color:${props=>props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
 flex:1;
 display:flex;
 align-items:center;
 flex-direction:column;
 justify-content:center;

`;
const ProductAmountContainer=styled.div`
  display:flex;
  align-items:center;
  margin-bottom: 20px;
`
const ProductAmount=styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({
margin:"5px 15px"
})}
`
const ProductPrice=styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({
marginBottom:"20px"
})}
`
const Hr=styled.hr`
background-color:#eee;
border:none;
height: 1px;
`
const Summary = styled.div`
  flex: 1;
  border:0.5px solid lightgray;
  border-radius:10px;
  padding: 20px;
  height: 60vh;
`;
const SummaryTitle=styled.h1`
font-weight: 200;

`
const SummaryItem=styled.div`
margin: 30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type === "total" && "500"};
font-size:${props=>props.type === "total" && "24px"};
`
const SummaryItemText=styled.span`

`
const SummaryItemPrice=styled.span`

`
const SummaryButton=styled.button`
width: 100%;
padding: 10px;
background-color:black;
color: white;
font-weight: 600;
`

const Cart = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Announcement></Announcement>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://www.transparentpng.com/thumb/adidas/CgpvvT-adidas-shoe.png"></Image>
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 9247578382
                  </ProductId>
                  <ProductColor color="blue"></ProductColor>
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add></Add>
                  <ProductAmount>2</ProductAmount>
                  <Remove></Remove>
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr></Hr>
            <Product>
              <ProductDetail>
                <Image src="https://www.transparentpng.com/thumb/shirt/0j4f0f-shirt-clipart-png-photos.png"></Image>
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 9247578382
                  </ProductId>
                  <ProductColor color="gray"></ProductColor>
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add></Add>
                  <ProductAmount>1</ProductAmount>
                  <Remove></Remove>
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CKECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer></Footer>
    </Container>
  );
};

export default Cart;
