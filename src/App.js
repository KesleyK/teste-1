import React, { useState } from "react";
import { AppDiv, AppHeader, AppLogo } from './styled-components/App-style';
import { Form, FormHeading, FormInput, FormBtn } from './styled-components/Form-style';
import logo from './logo.svg';

const App = function () {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    isLoggedIn: false
  });

  const Login = e => {
    e.preventDefault();
    const { isLoggedIn } = loginState;

    setLoginState({
      ...loginState,
      isLoggedIn: !isLoggedIn
    });
  };

  const onChangeInputHandler = e => {
    const eventName = e.target.name;
    const eventValue = e.target.value;

    setLoginState({
      ...loginState,
      [eventName]: eventValue
    });
  };

  const { email, isLoggedIn } = loginState;
  const nome = email.split("@")[0];
  
  let contentToRender = (
    <Form onSubmit={Login}>
      <FormHeading>Login</FormHeading>
      <FormInput
        placeholder="E-mail"
        name="email"
        onChange={e => onChangeInputHandler(e)}
      />
      <FormInput
        placeholder="Password"
        name="password"
        type="password"
        onChange={e => onChangeInputHandler(e)}
      />
      <FormBtn type="submit">
        Logar
      </FormBtn>
    </Form>
  );

  if (isLoggedIn) {
    contentToRender = (
      <h1>Bem vindo {nome}</h1>
    );
  }

  return (
    <AppDiv>
      <AppHeader>
        <AppLogo src={logo} alt="logo"/>
        {contentToRender}
      </AppHeader>
    </AppDiv>
  );
}

export default App;
