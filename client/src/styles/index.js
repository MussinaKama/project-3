import styled from "styled-components";
import {Container} from "reactstrap";

export const AboutWrapper = styled.div`
 
 margin-top: 50px;
 h1 {
     text-align: center;
 }
 img {
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
   }

   h5{
      text-align: justify;
      
      padding-left: 120px;
      padding-right: 120px;
     }
     h6 {
     text-align: center;
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

export const DivWrapper = styled.div`
  img {
   margin-bottom: 0;
}
`
export const LoginWrapper = styled.article`
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
   font-family: Poppins-Bold;
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
   font-family: Poppins-Regular;
   font-size: 14px;
   color: #333333;
   line-height: 1.5;
   padding-left: 7px;
 }

 .input {
   font-family: Poppins-Medium;
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
  box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
  -moz-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
  -webkit-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
  -o-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
  -ms-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
}
 .login-form-bgbtn {
   position: absolute;
   z-index: -1;
   width: 300%;
   height: 100%;
   background: #a64bf4;
   background: -webkit-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
   background: -o-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
   background: -moz-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
   background: linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
   top: 0;
   left: -100%;
   -webkit-transition: all 0.4s;
   -o-transition: all 0.4s;
   -moz-transition: all 0.4s;
   transition: all 0.4s;
 }
 


 .login-form-btn {
   font-family: Poppins-Medium;
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
  font-family: Poppins-Medium;
  margin-top: 10px;
  text-align: center;
 }


`