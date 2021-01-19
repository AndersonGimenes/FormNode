
import { Component } from 'react';
import { Container, Typography } from '@material-ui/core';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import './assets/App.css';
import 'fontsource-roboto';


class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário Cadastro
      </Typography>
        <FormularioCadastro enviar={enviar} validarCpf={validarCpf}/>
      </Container>
    );
  }
}

function enviar(dados) {
  console.log(dados);
}

function validarCpf(cpf){
  if(cpf.length !== 11){
    return {valido: false, texto: 'O CPF deve ter 11 digitos'}
  }

  return {valido: true, texto: ''}
}

export default App;
