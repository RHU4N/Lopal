# Lopal — Estudos de Lógica e JavaScript

Repositório de exercícios de lógica de programação e JavaScript organizados por aulas. Inclui scripts executados no navegador, exemplos para Node.js, revisões de conceitos e um simulador de caixa eletrônico em terminal.

## Conteúdo

| Pasta/arquivo | Conteúdo principal |
| --- | --- |
| `Aula01` | Primeiros scripts JavaScript e uso de `readline-sync` no Node.js. |
| `Aula02` | Exercícios iniciais de variáveis e lógica. |
| `Aula03` | Calculadoras de soma, subtração, multiplicação, divisão e porcentagem em HTML/JavaScript. |
| `Aula04` | Interação com HTML e listas. |
| `Aula05` | Estruturas condicionais e `switch`. |
| `Aula06` | Laços `while`, `do...while` e `for`. |
| `Aula07` | Funções JavaScript em uma página HTML. |
| `Aula08` | Listas e arrays. |
| `Aula09` | Funções tradicionais, anônimas e arrow functions. |
| `Aula10` e `Aula11` | Exercícios adicionais de JavaScript. |
| `code-dojo-js` | Desafios para analisar pelo console do navegador. |
| `revisao` e `tryCatch.js` | Revisão de sintaxe e tratamento de erros. |
| `atm` | Simulador de caixa eletrônico no terminal. |

## Tecnologias

- JavaScript;
- HTML5 e CSS;
- Node.js;
- Pacote `readline-sync`.

## Executar os exemplos de navegador

Os exercícios que contêm `index.html` podem ser abertos diretamente em um navegador moderno. Exemplos:

- `Aula03/index.html`;
- `Aula04/index.html`;
- `Aula07/index.html`;
- `Aula09/index.html`;
- `code-dojo-js/index.html`.

Para acompanhar saídas dos scripts, abra o console do navegador com `F12`.

## Executar scripts Node.js

Com o Node.js instalado, execute um arquivo JavaScript pelo terminal. Por exemplo:

```powershell
node tryCatch.js
```

Alguns exemplos podem possuir chamadas de demonstração comentadas. Descomente a função desejada para ver sua saída no console.

## Simulador de caixa eletrônico

O diretório [`atm`](atm) contém o exercício mais completo, com login, limite de tentativas, consulta de saldo e opções de operações bancárias simuladas.

### Instalação e execução

```powershell
cd atm
npm install
node caixaEletronico.js
```

Credenciais de demonstração:

```text
CPF:   123.456.789-00
Senha: senha123
```

Depois do login, o menu oferece consulta de saldo, saque e mensagens simuladas para depósito, transferência, extrato e pagamento de conta.

> O caixa eletrônico é apenas um exercício: os dados não são persistidos e somente a operação de saque altera o saldo em memória.

## Estrutura resumida

```text
.
├── Aula01/ … Aula11/   # Exercícios organizados por aula
├── atm/                 # Simulador Node.js com readline-sync
├── code-dojo-js/        # Desafios executados no console do navegador
├── revisao/             # Revisão de fundamentos
├── tryCatch.js          # Exemplos de throw, try, catch e finally
└── README.md
```

## Conceitos praticados

- Variáveis, tipos e conversão de valores;
- Operadores aritméticos e lógicos;
- Condicionais e `switch`;
- Laços de repetição;
- Arrays e listas;
- Funções tradicionais, anônimas e arrow functions;
- DOM, `prompt` e `console`;
- Tratamento de exceções com `try`, `catch`, `finally` e `throw`;
- Entrada de dados no terminal com `readline-sync`.
