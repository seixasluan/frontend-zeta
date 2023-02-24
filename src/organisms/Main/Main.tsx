

const Main = () => {
    function teste() {
        var nome = document.getElementById('nome')
        var text = document.createTextNode('');
       



        alert('Seu nome: '+nome)
    }

    return(

        // SECTION DO MEU BANNER 
        <section>
            <div className="container" id="main-image-container">
                <div className="main-image center-image">
                    <div className="main-image-info">
                        <h3>Zeta Tecnologia <br/> e Inovação</h3>
                        <p className="secondary-color">Startup do Parque Tecnológico.</p>
                        <a href=""className="btn">Teste</a>
                    </div>
                </div>
            <hr />
            </div>
            <input type="text" name="nome" id="nome" placeholder="nome" />
            <button onClick={teste} className="btn">Teste</button>
            
        </section>
        
)}

export default Main;
