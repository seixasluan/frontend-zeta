import { useState } from 'react';
import { Col, Button, Modal, ModalBody, ModalFooter, ModalHeader,  Form, FormGroup, Input, Label } from 'reactstrap';

const Contato = () => {

    function sendMesage() {
        const [modal, setModal] = useState(false);
        const toggle = () => setModal(!modal);
        return (
            <div className="container contato">
                <Form>
                    <h3>Fale conosco:</h3>
                    <FormGroup>
                        <Label for="Name">
                            Nome:
                        </Label>
                        <Input
                            id='Name'
                            name='Name'
                            placeholder='Ex: Jõao da Silva'
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Email">
                            Email:
                        </Label>
                        <Input
                            id="Email"
                            name="Email"
                            placeholder="exemplo@exemplo.com"
                            type="email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Telephone">
                            Telefone: 
                        </Label>
                        <Input
                            id="Telephone"
                            name="Telephone"
                            placeholder="Ex: +55 (12) 99999-9999"
                            type="tel"
                        />
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Message">
                            Área de texto: 
                        </Label>
                        <Col sm={12}>  
                            <Input
                                id="TextArea"
                                name="TextArea"
                                placeholder="Menssagem que deseja enviar."
                                type="textarea"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col xs={3}>
                            <Button color="" onClick={toggle}>
                                Enviar
                            </Button>
                            <Modal isOpen={modal} toggle={toggle}>
                                <ModalHeader toggle={toggle}>Menssagem Enviada!</ModalHeader>
                                    <ModalBody>
                                        Sua mensagem foi enviada com sucesso!
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={toggle}>
                                            Ok
                                        </Button>
                                    </ModalFooter>
                            </Modal>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
    )};
    //@ts-ignore
    return sendMesage();
}

export default Contato;
