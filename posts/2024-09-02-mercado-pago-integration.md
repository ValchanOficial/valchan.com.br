---
date: 2024-09-02
title: "Integração com a API do Mercado Pago"
description: "Integração com a SDK do Mercado Pago utilizando Node.js e Express.JS"
category: "Mercado Pago"
image: "/assets/img/cover/cover2.png"
---

Se você está procurando uma maneira de integrar o Mercado Pago em seu projeto, este tutorial vai te guiar pelos passos básicos, utilizando Node.js e Express.JS. Vamos passar pelas operações essenciais como a geração de tokens de cartão, gerenciamento de pagamentos e preferências.

## Antes de começar

É necessário possuir uma conta no Mercado Pago para obter o seu token de acesso.  
Tendo sua conta criada, você pode copiar o `access_token` na parte de <a href="https://www.mercadopago.com/developers/en/docs/your-integrations/credentials" target="_blank" rel="nofollow, noreferrer,noopener,external">Credentials</a> do Mercado Pago.

## Dependências do projeto

- "dotenv": "^16.4.5"
- "express": "^4.19.2"
- "mercadopago": "^2.0.9"
- "nodemon": "^3.1.1"
- "devDependencies" -> "@types/express": "^4.17.21"

## Variáveis de ambiente

Crie um arquivo `.env` no diretório raiz do projeto e adicione o seu token de acesso do Mercado Pago:

```plaintext
ML_ACCESS_TOKEN=access_token
```

## Código: `index.js`

Primeiro, vamos importar as dependências necessárias e configurar o express

```javascript
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { 
    CardToken, 
    MercadoPagoConfig, 
    Payment, 
    PaymentMethod, 
    Preference
} from "mercadopago";

const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Agora vamos configurar o cliente do Mercado Pago

```javascript
const client = new MercadoPagoConfig({
  accessToken: process.env.ML_ACCESS_TOKEN,
  options: {
    timeout: 5000,
    // idempotencyKey: 'abc' //  Idempotency Is for retrying requests without accidentally performing the same operation twice
  },
});
```

Para este exemplo eu estou utilizando o cartão de crédito fictício fornecido pelo Mercado Pago

```javascript
// Test cards
// https://www.mercadopago.com.br/developers/en/docs/your-integrations/test/cards
const mockCreditCard = {
  site_id: 'MLB',
  card_number: '5031433215406351',
  expiration_year: '2025',
  expiration_month: '11',
  security_code: '123',
  cardholder: {
    identification: { type: 'CPF', number: '01234567890' },
    name: 'APRO'
  }
}

```

Aqui eu disponibilizo alguns endpoints, as documentações das funções estão junto de cada endpoint

```javascript
// Initializing the API objects
const payment = new Payment(client);
const paymentMethod = new PaymentMethod(client);
const cardToken = new CardToken(client);
const preference = new Preference(client);

app.get("/", (req, res) => {
  res.send({ message: "Mercado Pago Integration" });
});
```

```javascript
// Generete Card Token
// https://www.mercadopago.com.br/developers/en/docs/checkout-api/integration-test/test-cards
app.get("/card_token", async (req, res) => {
  try {
    const token = await cardToken.create({ body: mockCreditCard });
    res.send(token);
  } catch (error) {
    res.send({ error });
  }
});
```

```javascript
// Get payment methods
// https://www.mercadopago.com.br/developers/en/reference/payment_methods/_payment_methods/get
app.get("/payment_methods", async (req, res) => {
  try {
    const response = await paymentMethod.get();
    res.send(response);
  } catch (error) {
    res.send({ error });
  }
});
```

```javascript
// Checkout preference
// https://www.mercadopago.com.br/developers/en/reference/preferences/_checkout_preferences/post
app.get("/preference", async (req, res) => {
  const preferenceBody = {
    external_reference: crypto.randomUUID(),
    payer: { email: "test_user_123@testuser.com" },
    notification_url: "https://webhook.site/123-abc", // https://webhook.site/ can be used to get IPN notification locally 
    items: [
      {
        id: crypto.randomUUID(),
        currency_id: "BRL",
        title: "Product description",
        unit_price: Number(58.8),
        quantity: 1,
      },
    ],
  };
  try {
    const response = await preference.create({ body: preferenceBody });
    res.send({
      id: response.id,
      external_reference: response.external_reference,
      link: response.init_point,
    });
  } catch (error) {
    res.send({ error });    
  }
});
```

```javascript
// Get preference by ID
// https://www.mercadopago.com.br/developers/en/reference/preferences/_checkout_preferences_id/get
app.get("/preference/:preferenceId", async (req, res) => {
  const { preferenceId } = req.params;
  try {
    const response = await preference.get({ preferenceId });
    res.send({
      id: response.id,
      external_reference: response.external_reference,
      link: response.init_point,
    });
  } catch
  (error) {
    res.send({ error });
  }
});
```

```javascript
// Payment
// https://www.mercadopago.com.br/developers/en/reference/payments/_payments/post
app.get("/payment", async (req, res) => {
  const token = await cardToken.create({ body: mockCreditCard });

  const paymentBody = {
    description: "Cart description",
    external_reference: crypto.randomUUID(),
    installments: 1,
    notification_url: "https://webhook.site/123-abc", // https://webhook.site/ can be used to get IPN notification locally 
    payer: { email: "test_user_123@testuser.com" },
    // payment_method_id: "pix",
    payment_method_id: "master",
    token: token.id, // Token card identifier (mandatory for credit card). Example: payment_method_id = visa, master, etc.
    transaction_amount: Number(58.8),
  };

  try {
    const response = await payment.create({ body: paymentBody });
    res.send({
      id: response.id,
      external_reference: response.external_reference,
      status: response.status,
      pix: response.point_of_interaction?.transaction_data?.ticket_url || 'N/A',
    });
  } catch (error) {
    res.send({ error });
  }
});
```

```javascript
// Get payment by ID
// https://www.mercadopago.com.br/developers/en/reference/payments/_payments_id/get
app.get("/payment/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await payment.get({ id });
    res.send({
      id: response.id,
      external_reference: response.external_reference,
      status: response.status,
      pix: response.point_of_interaction?.transaction_data?.ticket_url || 'N/A',
    });
  } catch (error) {
    res.send({ error });
  }
});
```

```javascript
// Cancel payment by ID
// https://www.mercadopago.com/developers/en/reference/payments/_payments_id/put
// status = cancelled
app.post("/cancel_payment/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await payment.cancel({ id });
    res.send(response);
  } catch (error) {
    res.send({ error });
  }
});
```

```javascript
// Notification - IPN
// https://www.mercadopago.com.br/developers/en/docs/checkout-api/additional-content/your-integrations/notifications/ipn
app.post("/notification", async (req, res) => {
  console.log({ message: "Notification received", body: req.body })
  // Info from req.body
  // {
  //   "action": "payment.created",
  //   "api_version": "v1",
  //   "data": {
  //     "id": "1323479563"
  //   },
  //   "date_created": "2024-05-28T20:42:45Z",
  //   "id": 113614395815,
  //   "live_mode": false,
  //   "type": "payment",
  //   "user_id": "234420836"
  // }
  res.send("OK");
});
```

## Executando o Servidor

Para iniciar o servidor, use o comando:

```bash
npm start
# O servidor estará rodando em http://localhost:3000
```

## Endpoints da API

Aqui estão alguns dos endpoints disponíveis:

- **GET /** - Retorna uma mensagem simples indicando que a API está funcionando.
- **GET /card_token** - Gera um token de cartão utilizando os dados fictícios de cartão de crédito.
- **GET /payment_methods** - Consulta todos os métodos de pagamento disponíveis e obtém uma lista com os detalhes de cada um e suas propriedades.
- **GET /preference** - Gera uma preferência com as informações de um produto ou serviço e obtém a URL necessária para iniciar o fluxo de pagamento.
- **GET /preference/:id** - Recupera os detalhes de uma preferência pelo seu ID.
- **GET /payment** - Cria um pagamento utilizando o cartão fictício e o token de cartão.
- **GET /payment/:id** - Recupera os detalhes de um pagamento pelo seu ID.
- **POST /cancel_payment/:id** - Cancela um pagamento pelo seu ID.
- **POST /notification** - Lida com as notificações recebidas do Mercado Pago.

## Testando os Endpoints

Para testar os endpoints, você pode utilizar ferramentas como Postman ou cURL.  
Por exemplo, para obter um token de cartão:

```bash

curl http://localhost:3000/card_token

```

Espero que tenha gostado! 😊

Repositório no Github: <a href="https://github.com/ValchanOficial/MercadoPagoIntegration" target="_blank" rel="nofollow, noreferrer,noopener,external">ValchanOficial/MercadoPagoIntegration</a>

***Fontes:***

- <a href="https://github.com/mercadopago/sdk-nodejs" target="_blank" rel="nofollow, noreferrer,noopener,external">SDK do Mercado Pago para Node.js</a>

- <a href="https://www.mercadopago.com.br/developers/en/reference" target="_blank" rel="nofollow, noreferrer,noopener,external">Mercado Pago Docs</a>
