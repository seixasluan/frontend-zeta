import React from 'react'
import Footer from '../organisms/Footer/Footer';
import Header from '../organisms/Header/Header'

const SobreNos = () => {
  return (
    <>
        <Header />
        <section className='container'>
          <h2 className='primary-color'>Quem Somos</h2>
          <p className='secondary-color sobrenos'>
            A Zeta é uma empresa de Tecnologia e Inovação 
            que desenvolve um sistema embarcado inteligente e inovador, 
            para gestão de operação e manutenção preventiva e preditiva 
            de compressores de ar que funcionará com integração e 
            serviços em nuvem e inteligência artificial.
          </p>
          <hr />
          <h2 className="primary-color">Missão e Valores</h2>
          <p className="secondary-color sobrenos">
            Oferecer serviços e soluções inovadores com utilização 
            de tecnologia de alta qualidade e excelência, 
            concretizando o retorno do investimento de nossos clientes.
            Nossos valores são os princípios de relacionamentos 
            transparentes e respeito a todos clientes e colaboradores.
          </p>
          <hr />
          <h2>Alguma dúvida?</h2>
          <p>Clique no botão e entre em contato conosco!</p>
          <a href="contato" className='btn'>Clique aqui</a>
        </section>
        <Footer />
    </>
  );
}

export default SobreNos