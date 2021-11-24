export default async function UserActions(method, login, senha, nome = null){
  function requestOptions (login, senha, nome = null) {
    return {method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: login, password: senha, nome: nome })}
  }
  switch (method){
  case ('REGISTER'): {
    try {
      const response = await fetch('http://192.168.0.165:3300/registrar', requestOptions(login, senha, nome));
      response.json();
      return navigation.navigate('Login');
    } catch (error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      throw error;
    }
  }
  case ('LOGIN'): {
    const resp = await fetch('http://192.168.0.165:3300/login', requestOptions(login, senha));
    if (resp.ok) {
      return resp.json()
        .then((responseData) => {
          return responseData;
        });
    }
    const error_1 = await resp.json();
    return await Promise.reject(error_1);
  }}}