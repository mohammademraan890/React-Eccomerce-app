import { Facebook, Twitter,Instagram,Pinterest, LocationOn, Phone, MailOutline } from "@mui/icons-material"
import styled from "styled-components"
import mobile from "../responsive"

const Container=styled.div`
display:flex;
${mobile({
flexDirection:"column"
  })}
`
const Left=styled.div`
flex:1;
display:flex;
flex-direction: column;
padding: 20px;
`
const Logo=styled.h1`

`
const Desc=styled.p`
margin: 20px 0px;
`
const SocialContainer=styled.div`
display:flex ;

`
const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex ;
justify-content:center;
align-items:center;
margin-right: 20px;
`
const Center=styled.div`
flex:1;
padding: 20px;
${mobile({
display:"none"
  })}
`
const Title=styled.h3`
margin-bottom: 30px;
`
const List=styled.ul`
margin: 0;
padding: 0;
list-style:none;
display: flex;
flex-wrap:wrap;
`
const ListItem=styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right=styled.div`
flex:1;
padding: 20px;
${mobile({
backgroundColor:"#eee"
  })}
`
const Contactitem=styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items:center;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit cupiditate amet ipsam doloremque commodi. Iure voluptas omnis repellendus alias facilis voluptatum natus quidem.</Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook></Facebook>
          </SocialIcon>
          <SocialIcon color="E440F5">
            <Instagram></Instagram>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter></Twitter>
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest></Pinterest>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <Contactitem style={{marginRight:"10px"}}>
          <LocationOn></LocationOn> Lorem ipsum dolor sit amet consectetur.
        </Contactitem>
        <Contactitem style={{marginRight:"10px"}}>
         <Phone></Phone> +1 234 567 890
        </Contactitem>
        <Contactitem style={{marginRight:"10px"}}>
         <MailOutline></MailOutline> contact@lamadev 
        </Contactitem>
       </Right>
    </Container>
  )
}

export default Footer
