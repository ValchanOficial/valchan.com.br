---
date: 2022-09-18
title: "Twitch API"
description: "Integração com a Twitch API"
category: "API"
image: "/assets/img/WL.jpeg"
---

Tutorial rápido de como gerar seu OAuth Token e consumir a Twitch API.

## Criando seu App no Console da Twitch

- Abra o Console na <a href="https://dev.twitch.tv/console/apps" target="_blank" rel="noopener noreferrer">Aba Aplicativos</a>
- Clique em "+ Registre seu aplicativo";
- Preencha os campos com as informações do seu App;
- No campo URLs de redirecionamento OAuth, para testar localmente você pode colocar o http://localhost:3000, a porta não precisa ser necessariamente a 3000, use a mesma que você setou no seu projeto;
- Clique em Criar;
- Copie o Client ID;
- Copie também o Client Secret (Clicando em Novo Segredo para gerar ele).

## Gerando seu OAuth Token

- No seu código faça uma chamada **POST** para **https://id.twitch.tv/oauth2/token** passando o **client_id**, **client_secret** e **grant_type: 'client_credentials'**.
- Se tudo estiver ok você irá receber uma resposta neste formato:
```json
{
  "access_token": "jostpf5q0puzmxmkba9iyug38kjtg",
  "expires_in": 5011271,
  "token_type": "bearer"
}
```

## Consumindo a Twitch API - Chamada de exemplo para obter os top games
- Faça uma chamada **GET** para **https://api.twitch.tv/helix/games/top** passando no header da requisição:
-  **client_id** como **'Client-Id'**;
- **access_token** como **'Authorization'** tendo seu valor como **Bearer ${seu_access_token}**.
- Exemplo de resposta:
```json
{
  "data": [
    {
      "id": "493057",
      "name": "PLAYERUNKNOWN'S BATTLEGROUNDS",
      "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-{width}x{height}.jpg"
    },
    // ...
  ],
  "pagination":{
    "cursor":"eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6MjB9fQ=="
  }
}
```

- Exemplos de código:
```js
app.post('/twitch/token', async (_: Request, res: Response) => {
  try {
    const { data } = await axios.post('https://id.twitch.tv/oauth2/token', {
      client_id: process.env.TWITCH_CLIENT_ID,
      client_secret: process.env.TWITCH_CLIENT_SECRET,
      grant_type: 'client_credentials',
    });
    app.set('auth', data.access_token);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: 'Error while trying to get Twitch token',
    });
  }
});

app.get('/twitch/top-games', async (_: Request, res: Response) => {
  try {
    const { data } = await axios.get('https://api.twitch.tv/helix/games/top', {
      headers: {
        'Authorization': `Bearer ${app.get('auth')}`,
        'Client-Id': String(process.env.TWITCH_CLIENT_ID),
      },
    });
    return res.status(200).json(data?.data);
  } catch (error) {
    return res.status(500).json({
      message: 'Error while fetching top games from Twitch API',
    });
  }
});

app.get('/twitch/users/:login', async (req: Request, res: Response) => {
  try {
    const login = String(req.params.login);
    const { data } = await axios.get(`https://api.twitch.tv/helix/users?login=${login}`, {
      headers: {
        'Authorization': `Bearer ${app.get('auth')}`,
        'Client-Id': String(process.env.TWITCH_CLIENT_ID),
      },
    });
    return res.status(200).json(data?.data[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
        message: 'Error while fetching user info',
    });
  }
});

app.get('/twitch/users/follows/:userId', async (req: Request, res: Response) => {
  try {
    const userId = String(req.params.userId);
    const { data } = await axios.get(`https://api.twitch.tv/helix/users/follows?from_id=${userId}`, {
      headers: {
        'Authorization': `Bearer ${app.get('auth')}`,
        'Client-Id': String(process.env.TWITCH_CLIENT_ID),
      },
    });
    return res.status(200).json(data?.data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error while fetching followers',
    });
  }
});
```

Estas são algumas das muitas possibilidades de integração com a Twitch API, você pode encontrar mais informações na <a href="https://dev.twitch.tv/docs/api" target="_blank" rel="noopener noreferrer">documentação</a>.<br/><br/>

***Fontes:***

- <a href="https://dev.twitch.tv/docs/api/reference" target="_blank" rel="noopener noreferrer">Docs: Twitch API Reference</a>
- <a href="https://dev.twitch.tv/docs/api/get-started" target="_blank" rel="noopener noreferrer">Get Started with the Twitch API</a>
- <a href="https://dev.twitch.tv/docs/authentication/register-app" target="_blank" rel="noopener noreferrer">Registering Your App</a> 