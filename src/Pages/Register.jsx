import styled from 'styled-components'
import mobile from '../responsive'
const Container=styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(225, 225, 225, 0.5), rgba(225, 225, 225, 0.5)), url("https://png.pngtree.com/thumb_back/fh260/background/20230713/pngtree-d-illustration-of-a-shopping-trolley-flying-over-a-pink-background-image_3870768.jpg") center ; 
background-repeat:no-repeat;
background-size:cover;
display:flex;
justify-content:center;
align-items:center;
`
const Wrapper=styled.div`
width:40%;
padding: 20px;
background-color:white;
${mobile({
width:"75%"
})}
`
const Title=styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form=styled.form`
display:flex;
flex-wrap:wrap;
`
const Input=styled.input`
flex:1;
min-width:40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`
const Agreement=styled.span`
font-size:12px;
margin: 20px 0px;
`
const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color:teal;
color:white;
cursor:pointer;
`
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name"  />
          <Input placeholder="last name"  />
          <Input placeholder="username"  />
          <Input placeholder="email"  />
          <Input placeholder="password"  />
          <Input placeholder="confirm password"  />
          <Agreement>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, ab perferendis. Magnam, suscipit! <b>PRIVACY POLICY</b></Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
