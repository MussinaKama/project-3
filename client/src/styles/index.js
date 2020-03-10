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