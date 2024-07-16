# Desafio Ténico

## API de Tickets

Uma banda está se preparando para realizar um show em um grande estádio de futebol, antes será necessário a venda dos ingressos, você foi contratado para desenvolver
um API de Vendas de Tickets para um esse Show.

### Especificações da API

Considerações gerais:

* Tipos de Ticket (Área Geral, Arquibancada, VIP, Golden Circle)

| Ticket                | *R$* |
| ----------------------| ---- |
| Área Geral            | 95   |
| Arquibancada          | 175  |
| VIP                   | 750  |
| Golden Circle         | 1250 |

* A compra deverá ser realizada por unidade, enviando o Ticket e Informações de Pagamento que identifique o cliente.
* Ao realizar a compra de um ticket, deve-se registrar uma venda.
* Aceitaremos apenas pagamento por cartão de crédito.

* No estoque teremos um limite de Tickets disponíveis, ao se atingir de tickets vendidos a API não deverá permitir registrar uma venda.

| Ticket                | *QTD* |
| ----------------------| ----- |
| Área Geral            | 10    |
| Arquibancada          | 5     |
| VIP                   | 2     |
| Golden Circle         | 1     |

* Ao realizar uma venda deverá ser publicada uma mensagem para um sistema validador através de uma fila, chamada "validate-purchase".

#### Endpoints

##### 1. Criar um endpoint para registrar a venda de um ticket

**Request:** 

```POST http://localhost:3000/api/v1/tickets/buy```

+ Body:

```json
{
    "ticketId": "<ID>",
    "payment_type": "CREDIT_CARD",
    "userId": ""
}
```

**Response:**

O response para esta função será definido por você e **faz parte da avaliação**.

##### 2. Criar um endpoint para retornar o catálogo de tickets (Com o estoque disponível)

**Request:** 

```GET http://localhost:9000/api/v1/tickets/catalog```

**Response:**

O response para esta função será definido por você e **faz parte da avaliação**.
