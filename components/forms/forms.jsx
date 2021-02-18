import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Grid from '@material-ui/core/Grid';

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: ""
        };
      };

    render() {
        const { status } = this.state;
        return (
            <form
            onSubmit={this.submitForm}
            action="https://formspree.io/f/xoqpzdwv"
            method="POST"
            >
            <Form.Group controlId="formBasicEmail" role="form">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" name="nome" placeholder="Digite seu nome" />

                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Digite seu email" />
                <Form.Text className="text-muted">
                Escolha um email válido
                </Form.Text>
            </Form.Group>

            <Form.Label>Selecione seu perfil</Form.Label>
            <Form.Control
              as="select"
              name="user_type"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              custom
            >
              <option value="investidor">Investidor</option>
              <option value="atleta">Atleta</option>
            </Form.Control>
            <Grid container justify = "center">
            {status === "SUCCESS" ? <p>Muito obrigado!</p> : <Button variant="primary" type="submit">Enviar</Button>}
            {status === "ERROR" && <p>Houve um erro. Tente novamente</p>}
            </Grid>
            </form>
        )
    };

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }
};