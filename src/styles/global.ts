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
      padding-top: 10px;
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
      border-radius: 5px;
      background-image: url('./src/assets/banner.jpg');
      margin-bottom: 30px;
      position: relative;
 }
 .about-image{
      height: 300px;
      border-radius: 5px;
      background-image: url('./src/assets/compressor.jfif');
      margin-bottom: 30px;
      position: relative;
 }

 .mesage-image {
   margin-top: 3rem;
   height: 690px;
   border-radius: 5px;
   background-image: url('./src/assets/mesage.svg');
   margin-bottom: 7rem;
   position: relative;
 }

 .main-image-info{
      background-color: #fff;
      border-radius: 5px;
      font-weight: 500;
      padding: 25px;
      position: absolute;
      left: 25px;
      bottom: 25px;
 }

 .mesage-image-info {
   background-color: #fff;
   border-radius: 5px;
   font-weight: 500;
   padding: 15px;
   position: absolute;
   margin-bottom: 3rem;
   left: 50%;
   top: 10px;   
 }


 .about-image-info{
   background-color: #fff;
   border-radius: 5px;
   font-weight: 500;
   padding: 25px;
   position: absolute;
   left: 7px;
   top: 7px;
   margin-bottom: 3rem
}

.sobrenos {
   padding-bottom: 30px;
   padding-left: 20px;
}

.fixFooter {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: #222;
   color: #FFF;
   text-align: center;
}

.btnContato {
   margin-bottom: 7rem;
}

`

export default globalStyle;