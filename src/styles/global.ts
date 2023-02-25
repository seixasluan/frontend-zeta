import {createGlobalStyle} from 'styled-components';

const globalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body {
      background-color: #F8FDFF;
      font-family: 'Poppins', sans-serif;
    }

   /////// ESTILOS GERAIS 

   .secondary-color{
      color: #555;
   }

   .center-image{
      background-size: cover;
      background-position: center;
   }

   .contato {
      padding-top: 40px;
   }

   .contato h3 {
      font-size: 35px;
   }

   .btn{
      text-decoration: none;
      background-color: #25282E;
      color: #FFF;
      padding: 7px 18px;
   }

   .btn:hover{
      background-color: #333;
      color: #fff;
   }

   .b1 {
      text-decoration: none;
      background-color: #25282E;
      color: #FFF;
      padding: 7px 18px;
   }

   .b1:hover{
      background-color: #333;
      color: #fff;
     }

   .footer-block {
      color: #FFF;
      text-align:center;
      height: 4.6vh;
   }

   
//    IMAGES

 .main-image{
      height: 300px;
      background-image: url('./src/assets/banner.jpg');
      margin-bottom: 30px;
      position: relative;
 }
 .main-image2{
      height: 300px;
      background-image: url('./src/assets/form.svg');
      margin-bottom: 30px;
      position: relative;
 }

 .main-image-info{
      background-color: #fff;
      font-weight: 500;
      padding: 25px;
      position: absolute;
      left: 25px;
      bottom: 25px;
 }

`

export default globalStyle;