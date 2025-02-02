# Talker Manager

<a name="readme-top"></a>

## Sobre o Projeto

Talker Manager é uma aplicação na qual é possível cadastrar, pesquisar, editar e excluir palestrantes utilizando `Node`!

## Rodando com Docker
<details>
  <summary>Clique para expandir</summary>
  
  ## É necessário ter o Docker instalado em sua máquina.
  
- Clone o projeto

```bash
  git clone git@github.com:Joaogustavo789/Talker-Manager.git
```

- Entre no diretório do projeto

```bash
  cd Talker-Manager
```

- Crie os Containers

```js
  docker-compose up -d  // Ele irá rodar um serviço do node!
```

OBS: Se estiver usando `macOS` será necessário colocar manualmente uma opção `platform: linux/amd64` no serviço do banco de dados no arquivo docker-compose.yml desse projeto.

- Entre no Container

```bash
  docker exec -it talker_manager bash
```

- Instale as dependências dentro do container

```bash
  npm install
```

- Execute a aplicação dentro do container

```bash
  npm run dev
```
</details>

## Rodando localmente
<details>
  <summary>Clique para expandir</summary>
  
   ## É necessário ter o Node instalado em sua máquina.
  
- Clone o projeto

```bash
  git clone git@github.com:Joaogustavo789/Talker-Manager.git
```

- Entre no diretório do projeto

```bash
  cd Talker-Manager
```

- Instale as dependências

```bash
  npm install
```
</details>

## Tecnologias e Ferramentas

<br>
<br>
<table width="320px" align="center">
  <tbody>
    <tr valign="top">
      <td width="80px" align="center">
        <span><strong>Docker</strong></span>
        <img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" />
      </td>
      <td width="80px" align="center">
        <span><strong>Node.js</strong></span><br>
          <img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
      </td>
      <td width="80px" align="center">
        <span><strong>Express</strong></span><br>
          <img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
      </td>
    </tr>
  </tbody>
</table>


## Documentação

- [Docker](https://docs.docker.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)

