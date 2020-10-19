# empreendemanas :hands:
> O ponto de encontro de projetos de empreendedoras e um patrocinador que busca ajudar!

Como projeto final do bootcamp da @reprograma (turma backend 2/2019), essa API tem como proposta ser uma base de dados de projetos de mulheres que querem empreender, mas precisam de um incentivo financeiro. Através de um cadastro, a empreendedora (denominada "empreendemana") cadastra seus projetos, que ficam disponíveis para que quando, um patrocinador se cadastar, consiga visualizar os projetos e selecionar o que irá aplicar seu incentivo financeiro.

### Pré-requisitos

Para utilizar essa API, é necessário ter instalado na sua máquina as tecnologias Node.JS e MongoDB.

### Instalação :woman_technologist:

`Fork` esse repositório para seu github. `Clone` na sua máquina. Após entrar na pasta pelo **PROMPT**, digite o comando `npm install`.

### Utilização 

Para inicialiazar o server:
```
npm start
```

#### Rotas

A API está sendo escutada na `porta 3000`, dessa forma, para todas as rotas serem acessadas localmente, use `http://localhost:3000/` antes do caminho da rota

- POST `/empreendemanas/` - adicionar usuários 

- POST `/empreendemanas/login` - realizar login dos usuários

- GET `/empreendemanas` - visualizar todas as empreendemanas

- GET `/empreendemanas/projetos` - visualizar todos os projetos existentes

- PATCH `/empreendemanas/:id` - atualizar uma empreendemana através do ID

- DELETE `/empreendemanas/:id` - remover uma empreendemana e o projeto através do ID


### Contribuindo com o projeto para o Hacktoberfest 2020

1. Faça o _fork_ do projeto (<https://github.com/grayceferreira/empreendemanas/fork>)
2. Mude para a _branch_ para realizar suas modificações (`git checkout feature/hacktoberfest`)
3. Faça o _commit_ (`git commit -m 'Digite sua mensagem aqui'`)
4. _Push_ (`git push origin feature/hacktoberfest`)
5. Crie um novo _Pull Request_

OU

### Contribuindo com o projeto

1. Faça o _fork_ do projeto (<https://github.com/grayceferreira/empreendemanas/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/sua-branch`)
3. Faça o _commit_ (`git commit -m 'Digite sua mensagem aqui'`)
4. _Push_ (`git push origin feature/sua-branch`)
5. Crie um novo _Pull Request_

[![reprograma](https://reprograma.com.br/assets/img/logo-fundoclaro.png)](https://www.reprograma.com.br/)

