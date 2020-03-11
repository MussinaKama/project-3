import styled from "styled-components";
import {Container} from "reactstrap";

export const AboutWrapper = styled.div`
 
 margin-top: 40px;
 h1 {
     text-align: center;
     font-family: 'Baloo Tammudu', cursive;
     font-weight: bold;
     font-size: 60px;
     color: orange;
 }
 img {
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 35%;
   }

   p {
      text-align: justify;
      font-family: 'Mina', sans-serif;
      padding-left: 120px;
      padding-right: 120px;
     text-align: center;
     font-size: 18px;
     font-weight: bold;
     }
  p a {
    color: black;
    text-decoration: underline;
  }

`

export const NavWrapper = styled.nav`
   .flex-column {
      background: dark-blue;
      height: 100%
   }
   .links {
      color: darkblue;
      }
`

export const ContainerWrapper = styled(Container)`
   height: 100%;
`

export const LoginWrapper = styled.article`
margin-left: 300px;
margin-top: 20px;
.wrap-login {
   width: 400px;
   background: #fff;
   border-radius: 10px;
   overflow: hidden;
   padding: 65px 40px 54px 40px;
 }

 .login-form {
    width: 100%;
 }

 .login-form-title {
   display: block;
   font-family: 'Baloo Tammudu', cursive;
   font-size: 39px;
   color: #333333;
   line-height: 1.2;
   text-align: center;
 }

 .wrap-input {
   width: 100%;
   position: relative;
   border-bottom: 2px solid #d9d9d9;
 }

 .label-input {
   font-family: 'Mina', sans-serif;
   font-size: 14px;
   color: #333333;
   line-height: 1.5;
   padding-left: 7px;
 }

 .input {
   font-family: 'Mina', sans-serif;
   font-size: 16px;
   color: #333333;
   line-height: 1.2;
   display: block;
   width: 100%;
   height: 55px;
   background: transparent;
   padding: 0 7px 0 43px;
   border: none;
 }


 .container-login-form-btn {
   margin-top: 20px;
   display: -webkit-box;
   display: -webkit-flex;
   display: -moz-box;
   display: -ms-flexbox;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
 }
 .wrap-login-form-btn {
  width: 100%;
  display: block;
  position: relative;
  z-index: 1;
  border-radius: 25px;
  overflow: hidden;
  margin: 0 auto;

}
 .login-form-bgbtn {
   position: absolute;
   z-index: -1;
   width: 300%;
   height: 100%;
   background: #a64bf4;
   top: 0;
   left: -100%;
 }
 
 .login-form-btn {
   font-family: 'Mina', sans-serif;
   font-size: 16px;
   color: #fff;
   line-height: 1.2;
   text-transform: uppercase;
   display: -webkit-box;
   display: -webkit-flex;
   display: -moz-box;
   display: -ms-flexbox;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 20px;
   width: 100%;
   height: 50px;
 }

 .text {
  font-family: 'Mina', sans-serif;
  margin-top: 10px;
  text-align: center;
 }
`
export const FormWrapper = styled.article`
font-family: 'Mina', sans-serif;
.form {
  background: white; 
  border-radius: 10px; 
  padding: 20px;
`
export const ProfileWrapper = styled.article`
font-family: 'Mina', sans-serif;
.logout {
  float: right;
}
#continent {
  margin-top: 10px;
}

#continent, #country, #date {
  border-radius: 5px;
  margin-left: 7px;
}
`