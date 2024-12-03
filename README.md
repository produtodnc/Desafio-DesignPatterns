# **Calcular Preço Final com Impostos e Descontos**

---

## **Visão Geral**

Este projeto é uma API bem estruturada que calcula o preço final de um produto com base em:

- País e estado do cliente.
- Categoria do produto.
- Código de desconto opcional.

A API utiliza boas práticas de desenvolvimento, aplicando os princípios do **SOLID**, o padrão de projeto **Factory**, e encapsulando validações específicas em classes dedicadas. A arquitetura modular facilita a manutenção e a extensibilidade do sistema.

---

## **Funcionalidades**

1. ✅ Recebe requisições do tipo **GET** na rota **/calculate**.
2. ✅ Valida os parâmetros obrigatórios e opcionais.
3. ✅ Calcula impostos com base em regras específicas para países, estados e categorias.
4. ✅ Aplica descontos válidos de acordo com códigos específicos.
5. ✅ Encapsula validações em classes dedicadas, como `Tax` e `Discount`.
6. ✅ Retorna o resultado como um JSON detalhado.

---

## **Parâmetros da Rota /calculate**

| **Parâmetro**    | **Tipo** | **Obrigatório** | **Descrição**                                 |
|------------------|----------|-----------------|-----------------------------------------------|
| **country**      | String   | ✅               | País do cliente (ex.: USA, Canada).           |
| **state**        | String   | ✅               | Estado do cliente (ex.: CA, TX).              |
| **category**     | String   | ✅               | Categoria do produto (ex.: electronics).      |
| **price**        | Number   | ✅               | Preço do produto em formato numérico.         |
| **discountCode** | String   | ❌               | Código de desconto aplicável (ex.: SUMMER10). |

---

## **Exemplo de Requisição**

### URL

```plaintext
GET http://localhost:3000/calculate?country=USA&state=CA&category=electronics&price=100&discountCode=SUMMER10
```

### Resposta

```json
{
   "country": "USA",
   "state": "CA",
   "category": "electronics",
   "price": 100,
   "discountCode": "SUMMER10",
   "tax": 8.25,
   "discount": 10.00,
   "finalPrice": 98.25
}
```
---
# Códigos de Desconto Válidos
- SUMMER10: Aplica 10% de desconto.
- WINTER15: Aplica 15% de desconto.
---
# Validação
As validações são centralizadas em classes específicas para garantir organização e reutilização:

Tax:

- Valida o país informado.
- Verifica se o estado é válido para o país.
- Confirma se a categoria é suportada no estado.

Discount:

- Valida se o código de desconto informado é válido.
---
# Tratamento de Erros

Retornado quando qualquer parâmetro obrigatório está ausente ou inválido, ou se um código de desconto inválido for informado.

```json
{
    "error": "The discount code 'INVALIDCODE' is not valid."
}
```
Erro 500

Retornado em casos de erros inesperados no servidor, como falhas de lógica ou exceções não tratadas.

```json
{
   "error": "An unexpected error occurred on the server."
}
```
---
# Melhorias no Código

A refatoração do projeto resultou em melhorias significativas:

## Estrutura Modular
Cada responsabilidade foi encapsulada em classes e funções específicas, promovendo organização e reutilização.

## Princípios do SOLID
- SRP: Cada classe ou função tem uma única responsabilidade.
- OCP: O sistema é extensível, permitindo adicionar novos países, estados ou descontos sem modificar o código existente.
- DIP: O serviço de cálculo (CalculateService) utiliza injeção de dependência para receber estratégias.

### Padrão de Projeto: Factory
- Fábricas foram utilizadas para criar instâncias das regras de impostos (Tax) e descontos (Discount), eliminando switch e if redundantes.

### Validações Encapsuladas
- As validações foram movidas para as classes Tax e Discount, garantindo que estejam centralizadas e reutilizáveis.

---

# Como Executar o Projeto

1. Instale as dependências:
```bash
npm install
```
2.Inicie o servidor:
```bash 
npm run dev
```
3. Acesse a API em:
```plaintext
GET http://localhost:3000/calculate
```
Exemplo de requisição:

```plaintext
GET http://localhost:3000/calculate?country=USA&state=CA&category=electronics&price=100&discountCode=SUMMER10
```


