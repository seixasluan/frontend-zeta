import React from 'react';
import { Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';

const Contato = () => {
    return (
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
                <Col xs={2}>
                    <Input
                        id="Button"
                        name='Button'
                        type='button'
                        value='Enviar'
                        className='b1'
                    />
                </Col>
            </FormGroup>
        </Form>
    );
}

export default Contato;