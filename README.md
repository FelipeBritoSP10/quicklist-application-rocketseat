# 🛒 Quicklist

> Aplicação web leve e responsiva para gerenciar a lista de compras da semana, desenvolvida como desafio prático da [Rocketseat](https://www.rocketseat.com.br/).

[![Status](https://img.shields.io/badge/status-concluído-brightgreen.svg)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ✨ Funcionalidades

- ➕ **Adicionar novos itens:** Inserção rápida por clique no botão ou pressionando a tecla `Enter`.
- ✅ **Marcar como concluídos:** Alternância visual imediata do status dos produtos.
- 🗑️ **Remoção segura:** Exclusão de itens acompanhada de feedback visual (*toast* de confirmação).
- 💾 **Persistência local:** Seus dados salvos automaticamente no `localStorage` do navegador.
- 📱 **Design responsivo:** Interface adaptada perfeitamente para dispositivos móveis e desktops.
- 🔍 **Estado vazio inteligente:** Orientação visual guiando o próximo passo do usuário quando a lista estiver vazia.

---

## 🛠️ Tecnologias

 ![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
 ![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black) 
 ![Bootstrap](https://img.shields.io/badge/Bootstrap-%237952B3.svg?style=for-the-badge&logo=bootstrap&logoColor=white) 
---

## 🚀 Como Executar o Projeto

Como o projeto utiliza **ES Modules**, é necessário servir os arquivos por um servidor HTTP (abrir o `index.html` diretamente no navegador bloqueia o carregamento dos módulos devido às políticas de segurança de CORS). 

Você pode executá-lo de duas maneiras simples:

### 📌 Opção 1: Usando o Live Server (VS Code) — *Mais prático*
1. Abra a pasta do projeto no **Visual Studio Code**.

2. Certifique-se de ter a extensão **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)** instalada.

3. Abra o arquivo `index.html`.

4. Clique no botão **"Go Live"** localizado no canto inferior direito da barra de status do VS Code (ou clique com o botão direito sobre o arquivo e escolha **"Open with Live Server"**). O projeto abrirá automaticamente no seu navegador.

### 📌 Opção 2: Usando o Terminal (Node.js)
Se preferir rodar direto pelo terminal, certifique-se de ter o Node.js instalado e execute:

```bash
# Clone o repositório
git clone https://github.com/FelipeBritoSP10/quicklist-application-rocketseat

# Acesse a pasta do projeto
cd quicklist

# Suba um servidor local (necessário para ES Modules)
npx serve .

```markdown
## 🏗️ Arquitetura, Separação de Responsabilidades e Padrões

A aplicação foi estruturada seguindo uma **arquitetura em camadas com Vanilla JavaScript moderno**, buscando uma clara **separação de responsabilidades (Separation of Concerns)**, alta coesão e baixo acoplamento entre os módulos.

A organização permite que cada camada possua uma responsabilidade bem definida, facilitando a manutenção, evolução e compreensão do código.

---

## 📁 Estrutura de Diretórios

```text
src/
├── main.js             # Ponto de entrada, composição e orquestração
├── styles/
│   └── theme.css       # Camada visual e customizações sobre o Bootstrap
├── state/
│   └── store.js        # Gerenciamento centralizado do estado e actions
├── services/
│   └── storage.js      # Camada de persistência utilizando LocalStorage API
├── utils/
│   └── dom.js          # Funções auxiliares para manipulação segura do DOM
└── components/         # Componentes isolados e reutilizáveis da interface
    ├── Logo.js
    ├── BackButton.js
    ├── ItemForm.js
    ├── ItemList.js
    ├── ListItem.js
    └── Toast.js
```

### Responsabilidade de cada camada

| Camada      | Responsabilidade                                      |
| ----------- | ----------------------------------------------------- |
| main.js     | Inicialização, composição e orquestração da aplicação |
| state/      | Gerenciamento do estado e ações da aplicação          |
| services/   | Comunicação com mecanismos externos de persistência   |
| components/ | Construção e comportamento dos elementos da interface |
| utils/      | Funções auxiliares e reutilizáveis                    |
| styles/     | Estilos, temas e customizações visuais                |

---

## 🔄 Fluxo de Dados Unidirecional

Para manter o comportamento da aplicação previsível e rastreável, o Quicklist utiliza um fluxo de dados unidirecional:

```text
┌─────────────────────┐
│   Ação do Usuário   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│     Componente      │
│   Evento / Callback │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│        Store        │
│    Estado + Actions │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│      Subscribe      │
│ Notificação de      │
│ mudança de estado   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│     Re-render UI    │
│    ItemList.update  │
└─────────────────────┘
```

### 🔎 Funcionamento

1. **Ação**  
   O usuário interage com um componente da interface, como adicionar, concluir ou remover um item.

2. **Disparo**  
   O componente captura o evento e executa uma função de callback responsável por comunicar a intenção da ação.

3. **Store**  
   A Store centraliza o estado da aplicação e processa as actions responsáveis por alterá-lo.

4. **Notificação**  
   Após uma alteração no estado, os componentes inscritos são notificados por meio do mecanismo de `subscribe`.

5. **Renderização**  
   A interface é atualizada com base no estado atual da aplicação, mantendo a UI sincronizada com os dados.

---

## 🧩 Separação de Responsabilidades

Cada parte da aplicação possui uma responsabilidade específica.

### `store.js`

Responsável pelo estado central da aplicação e pelas actions que modificam esse estado.

```text
Estado
  │
  ├── adicionar item
  ├── concluir item
  ├── remover item
  └── notificar subscribers
```

Isso evita que diferentes componentes mantenham estados independentes e potencialmente inconsistentes.

### `storage.js`

Responsável exclusivamente pela persistência dos dados utilizando a API `localStorage`.

A Store não precisa conhecer os detalhes de implementação do armazenamento.

```text
Store
  │
  ▼
Storage Service
  │
  ▼
localStorage
```

Essa separação reduz o acoplamento e permite substituir posteriormente a estratégia de persistência sem alterar os componentes da interface.

### `components/`

Cada componente possui uma responsabilidade específica dentro da interface:

- `ItemForm.js` → entrada e criação de itens
- `ItemList.js` → gerenciamento da lista
- `ListItem.js` → representação individual de um item
- `Toast.js` → feedback visual
- `Logo.js` → identidade visual
- `BackButton.js` → ação de retorno

### `utils/dom.js`

Centraliza operações auxiliares relacionadas ao DOM, evitando repetição de código e mantendo determinadas operações de manipulação da interface encapsuladas.

### `main.js`

Funciona como *composition root* da aplicação, realizando a composição dos módulos e conectando os diferentes elementos do sistema.

Sua responsabilidade principal é orquestrar como os módulos trabalham juntos, evitando concentrar regras de negócio e manipulação da interface em um único arquivo.

---

## 🧱 Aplicação dos Princípios SOLID

Mesmo sendo uma aplicação desenvolvida em Vanilla JavaScript, o projeto **aplica conceitos e princípios do SOLID** para melhorar organização, manutenção e extensibilidade.

### 🎯 S — Single Responsibility Principle

**Princípio da Responsabilidade Única**

Cada módulo possui uma responsabilidade bem definida e uma razão principal para sofrer alterações.

Exemplos:

```text
storage.js  → persistência
store.js    → estado e actions
dom.js      → operações auxiliares do DOM
components/ → interface
```

Essa divisão evita que um único arquivo concentre responsabilidades diferentes.

### 🔓 O — Open/Closed Principle

**Princípio Aberto/Fechado**

Os módulos são estruturados de forma que novas funcionalidades possam ser adicionadas com o mínimo possível de alterações nas responsabilidades existentes.

Por exemplo, novos componentes podem ser adicionados sem modificar a implementação dos componentes já existentes.

```text
components/
├── ItemForm.js
├── ItemList.js
├── ListItem.js
├── Toast.js
└── NewComponent.js
```

### 🔄 L — Liskov Substitution Principle

**Princípio da Substituição de Liskov**

Os módulos seguem contratos de utilização consistentes, permitindo que componentes e funções com responsabilidades equivalentes sejam utilizados de maneira previsível dentro das composições da aplicação.

No contexto do projeto, isso é refletido principalmente pela padronização das funções responsáveis pela criação e atualização dos elementos da interface.

### ✂️ I — Interface Segregation Principle

**Princípio da Segregação de Interfaces**

Os componentes recebem apenas os dados e callbacks necessários para executar suas responsabilidades.

Em vez de fornecer um objeto com todas as funcionalidades da aplicação, cada componente trabalha somente com aquilo que realmente precisa.

```text
ItemForm
 ├── onSubmit
 └── dados necessários

ListItem
 ├── item
 ├── onToggle
 └── onRemove
```

Isso reduz dependências desnecessárias e mantém os componentes mais independentes.

### 🔃 D — Dependency Inversion Principle

**Princípio da Inversão de Dependência**

Os componentes não possuem dependências rígidas diretamente com mecanismos externos, como o `localStorage`.

A comunicação acontece por meio de funções, callbacks e camadas intermediárias.

```text
Component
    │
    ▼
Callback / Action
    │
    ▼
Store
    │
    ▼
Storage Service
    │
    ▼
localStorage
```

Dessa forma, a interface permanece desacoplada da implementação específica de persistência.

---

## 🎯 Benefícios da Arquitetura

A organização adotada proporciona:

- Baixo acoplamento entre os módulos
- Alta coesão dentro de cada camada
- Maior facilidade de manutenção
- Reutilização de componentes e funções
- Separação clara entre UI, estado e persistência
- Facilidade para adicionar novas funcionalidades
- Maior previsibilidade no fluxo de dados
- Código mais fácil de testar e compreender

A proposta é demonstrar que uma aplicação desenvolvida com Vanilla JavaScript também pode utilizar princípios de arquitetura e engenharia de software, sem depender de um framework para organizar suas responsabilidades.

---

## 🧠 Decisões Arquiteturais

A escolha por uma arquitetura modular foi feita para evitar o crescimento de um único arquivo responsável por toda a aplicação.

Em vez de concentrar:

```text
DOM + Estado + Eventos + Persistência + UI
```

em um único módulo, as responsabilidades foram distribuídas:

```text
              ┌──────────────┐
              │    main.js   │
              │ Orquestração │
              └──────┬───────┘
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
   Components      Store        Services
       │             │             │
       ▼             ▼             ▼
      DOM          State       Persistence
                     │
                     ▼
                localStorage
```

Essa abordagem torna o projeto mais preparado para evolução e reduz o impacto de mudanças isoladas.


---