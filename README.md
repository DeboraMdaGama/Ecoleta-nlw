# Ecoleta-nlw
Código do software Ecoleta desenvolvido durante a Next Level Week da Rocketseat.

### Backend
A primeira parte que deve ser executada no ambiente de desenvolvimento é o servidor `node.js`.
(Tem que ter o node instalado). Comando para instalar o node: 

Comanndos para o backend ser executado

```bash
npm run dev
```

### Frontend
Este é o site `ReactJS` onde os pontos de coleta são cadastrados. É necessário que o backend já esteja operacional. 


```bash
npm start
```
### Mobile
Nesta parte você irá inicializar a aplicação mobile, escrita com `React Native` onde os pontos de coleta podem ser consultados por cidade. Esta parte funciona independente do Frontend, porém é necessário que o backend já esteja operacional. 

```bash
expo start
```
Após o projeto mobile inicializar, será exibido um `QRCode` no terminal e uma aba dos eu navegador irá carregar o `Metro Bundler`. Neste momento você precisará instalar em seu dispositivo móvel, um aplicativoo chamado `Expo`.
Ele está disponível nas APP Stores:

- [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent) na Google Play
- [Expo Client](https://apps.apple.com/br/app/expo-client/id982107779) na Apple Store

Abra em seu smartphone o aplicativo Expo e escaneie o código de barras exibido na inicialização do projeto.


## Tecnologias

* [Node.js](https://nodejs.org/) - Usado para construir o backend (webservice REST) do projeto
* [express](https://expressjs.com/) - Framework Web utilizado no backend
* [knex.js](http://knexjs.org/) - ORM usado no backend para auxiliar no versionamento do banco de dados
* [sqlite3](https://www.sqlite.org/) - Banco de dados utilisado no backend para peristência dos dados
* [React](https://reactjs.org/) - Usado para construir o frontend (website)
* [React Native](https://reactnative.dev/) - Usado para construir a aplicação Mobile multiplataforma
* [expo](https://expo.io/) - Usado para facilitar o desenvolvimento com `React Native`
* [typescript](https://www.typescriptlang.org/) - Usado para melhorar a integridade do código final e auxiliar o desenvolvimento em equipe

Confira a lista completa de tecnologias utilizadas no arquivo `package.json`, presente na pasta raiz de cada parte do projeto.

## Preview
Olha só como ficou:



A API implementada no backend não possui interface gráfica própria. Para ver como ficou, confira o código aqui no repositório.

## Licença

Este projeto foi desenvovido sob a licença MIT. Veja o [LICENSE](./LICENSE) para detalhes.

## Autor

Esse projeto foi desenvolvido por Débora Gama.
* [Linkedin](https://www.linkedin.com/in/debora-gama/)
