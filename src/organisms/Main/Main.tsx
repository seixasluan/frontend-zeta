import Contato from "../Contato";

const Main = () => {
    return(

        // SECTION DO MEU BANNER 
        <section>
            <div className="container" id="main-image-container">
                <div className="main-image center-image">
                    <div className="main-image-info">
                        <h3>Zeta Tecnologia <br/> e Inovação</h3>
                        <p className="secondary-color">Startup do Parque Tecnológico</p>
                        <a href=""className="btn">Saiba Mais</a>
                    </div>
                </div>
            <hr />

            <hr />
            <Contato/>
            </div>          
        </section>
        
)}

export default Main;
