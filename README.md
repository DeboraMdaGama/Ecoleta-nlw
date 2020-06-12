![next level week](https://github.com/DeboraMdaGama/Ecoleta-nlw/blob/master/tmp/image1.jpg)
<p align="center">
  <img alt="Ecoleta" src="https://github.com/DeboraMdaGama/Ecoleta-nlw/blob/master/tmp/logo.svg" height="60px" /><br/>
  <p align="center">----------------------------------------------------------------------------------------------------------------------------</p>
  <h3 align="center">Código do software Ecoleta desenvolvido durante a Next Level Week da Rocketseat.<h3>
  <p align="center">---------------------------------------------------------------------------------------------------</p>
</p>


<p align="center">
  <a href="License" style="text-decoration: none">
    <img alt="GitHub" src="https://img.shields.io/github/license/DeboraMdaGama/ecoleta-nlw?color=34CB79">
  </a>
  <a href="https://github.com/DeboraMdaGama/ecoleta-nlw/issues" style="text-decoration: none">
   <img alt="GitHub issues" src="https://img.shields.io/github/issues/DeboraMdaGama/ecoleta-nlw?color=34CB79">
  </a>
  <a href="https://github.com/DeboraMdaGama/Ecoleta-nlw" style="text-decoration: none">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/DeboraMdaGama/ecoleta-nlw?color=34CB79" />
  </a>
</p>

<p align="center">
<a href="#">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/DeboraMdaGama/ecoleta-nlw?color=34CB79">
  </a>
  <a href="https://github.com/DeboraMdaGama" style="text-decoration: none">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Débora%20Gama-34CB79">
  </a>
  <a href="https://github.com/DeboraMdaGama/ecoleta-nlw/stargazers" style="text-decoration: none" >
    <img alt="Stars" src="https://img.shields.io/github/stars/DeboraMdaGama/ecoleta-nlw?style=social" />
  </a>
  <a  href="https://github.com/DeboraMdaGama/ecoleta-nlw/network/members"> 
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/DeboraMdaGama/ecoleta-nlw?label=forks&style=social">
  </a>
</p>

<p align="center">
 <a href="clone-or-download"><br>Clone or download</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#prototype">Prototype</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="README.md#Preview">Preview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="info">+ Info</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="how-to-contribuite">How to contribute<br></a>
</p>

## :cloud: External API
O projeto web e mobile utiliza uma API externa para carregar as UFs e as cidades do Brasil.
* [IBGE](https://servicodados.ibge.gov.br/api/docs/localidades)

## :file_folder: Clone or download

Para utilizar essa aplicação você vai precisar do [Node.js v12.18.0][nodejs] e do [npm v6.14.5](https://www.npmjs.com/).
<br>Comando para instalar o node usando o Chocolatey no Windows (use o comando de acordo com o seu OS): 
```bash
cinst nodejs-lts
```
Se você utiliza o [Git](https://git-scm.com)a apenas clone esse repositório na sua máquina. Se não quiser utilizar o git apenas faça o donwload desse repositório
```bash
# Comando para clonar o repositório
$ git clone https://github.com/DeboraMdaGama/Ecoleta-nlw.git
```

## Backend
A primeira parte que deve ser executada no ambiente de desenvolvimento é o servidor `node.js`.
<br>Comanndos para o backend ser executado:
```bash
# abra a pasta server
cd server
# inicie o backend
npm run dev
# inicie o arquivo de banco de dados
npm run knex:migrate
npm run knex:seed
```

### :computer:Frontend
Este é o site `ReactJS` onde os pontos de coleta são cadastrados. É necessário que o backend já esteja operacional. 

```bash
# abra a pasta server e inicie o backend
cd server
npm run dev
# Em um outro terminal entre na pasta web e execute
npm start
```
### :iphone:Mobile
Nesta parte você irá inicializar a aplicação mobile, escrita com `React Native` onde os pontos de coleta podem ser consultados por cidade. Esta parte funciona independente do Frontend, porém é necessário que o backend já esteja operacional. 

```bash
# abra a pasta server e inicie o backend
cd server
npm run dev
# Em um outro terminal entre na pasta mobile e execute o expo
cd mobile
expo start
```
Após o projeto mobile inicializar, será exibido um `QRCode` no terminal e uma aba dos eu navegador irá carregar o `Metro Bundler`. Neste momento você precisará instalar em seu dispositivo móvel, um aplicativoo chamado `Expo`.
Ele está disponível nas APP Stores:

- [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent) na Google Play
- [Expo Client](https://apps.apple.com/br/app/expo-client/id982107779) na Apple Store

Abra em seu smartphone o aplicativo Expo e escaneie o código de barras exibido na inicialização do projeto.


## :rocket: Technologies

* [Node.js](https://nodejs.org/) - Usado para construir o backend (webservice REST) do projeto
* [express](https://expressjs.com/) - Framework Web utilizado no backend
* [knex.js](http://knexjs.org/) - ORM usado no backend para auxiliar no versionamento do banco de dados
* [sqlite3](https://www.sqlite.org/) - Banco de dados utilisado no backend para peristência dos dados
* [React](https://reactjs.org/) - Usado para construir o frontend (website)
* [React Native](https://reactnative.dev/) - Usado para construir a aplicação Mobile multiplataforma
* [expo](https://expo.io/) - Usado para facilitar o desenvolvimento com `React Native`
* [typescript](https://www.typescriptlang.org/) - Usado para melhorar a integridade do código final e auxiliar o desenvolvimento em equipe

Confira a lista completa de tecnologias utilizadas no arquivo `package.json`, presente na pasta raiz de cada parte do projeto.

## :trident: Prototype
`Link do protótipo`
* [Protótipo do Ecoleta](https://www.figma.com/file/9TlOcj6l7D05fZhU12xWT3/Ecoleta-(Booster)?node-id=0%3A1) - Protótipo do sistema Ecoleta desenvolvido pela [Rocketseat](https://rocketseat.com.br).

## Preview
Olha só como ficou:<br><br>

<p align="center">
<img alt="preview" src="https://github.com/DeboraMdaGama/Ecoleta-nlw/blob/master/tmp/Capa.png"/>
</p>

A API implementada no backend não possui interface gráfica própria. Para ver como ficou, confira o código aqui no repositório.

## :information_source: + Info
Para mais informações acesse o [Notion](https://www.notion.so/Next-level-Week-007a0d107de84f72903526ba306a59b9)

## :information_source: How to contribute

```bash
Usando os comandos git
```
- Fork o projeto;
- Crie a sua branch: `git checkout -b my-feature`;
- Envie as mudanças que você fez: `git commit -m 'feat: My new feature'`;
- Push a branch que você criou: `git push origin my-feature`.

## :bookmark_tabs:                                   Dependencies
Todas, ou pelo menos a maioria, das dependências usadas no projeto. (server, web and mobile).

**Server (Node.js):**
 <a href="#" style="text-decoration: none"><br><br>
<img alt="express" src="https://img.shields.io/badge/express-^4.17.1-brightgreen" /> <img alt="celebrate" src="https://img.shields.io/badge/celebrate-^12.1.1-brightgreen" /> <img alt="cors" src="https://img.shields.io/badge/cors-^2.8.5-brightgreen" /> <img alt="knex" src="https://img.shields.io/badge/knex-^0.21.1-brightgreen" /> <img alt="multer" src="https://img.shields.io/badge/multer-^1.4.2-brightgreen" /> <img alt="sqlite3" src="https://img.shields.io/badge/sqlite3-^4.2.0-brightgreen" /></a>

<br/>

**Web (ReactJS):**
 <a href="#" style="text-decoration: none"><br><br>
<img alt="axios" src="https://img.shields.io/badge/axios-^0.19.2-blue" /> <img alt="axios" src="https://img.shields.io/badge/leaflet-^1.6.0-blue" /> <img alt="axios" src="https://img.shields.io/badge/react-^16.13.1-blue" /> <img alt="axios" src="https://img.shields.io/badge/react--dom-^16.13.1-blue" /> <img alt="axios" src="https://img.shields.io/badge/react--dropzone-^11.0.1-blue" /> <img alt="axios" src="https://img.shields.io/badge/react--icons-^3.10.0-blue" /> <img alt="axios" src="https://img.shields.io/badge/react--leaflet-^2.7.0-blue" /> <img alt="axios" src="https://img.shields.io/badge/react--router--dom-^5.2.0-blue" /> <img alt="axios" src="https://img.shields.io/badge/react--scripts-3.4.1-blue" /> <img alt="axios" src="https://img.shields.io/badge/typescript-^3.7.5-blue" /></a>

<br/>

**Mobile (React Native):**
<a href="#" style="text-decoration: none"><br><br>
<img alt="axios" src="https://img.shields.io/badge/@expo--google--fonts/roboto-^0.1.0-cyan" /> <img alt="axios" src="https://img.shields.io/badge/@expo--google--fonts/ubuntu-^0.1.0-cyan" /> <img alt="axios" src="https://img.shields.io/badge/@react--native--community/masked--view-0.1.6-cyan" /> <img alt="axios" src="https://img.shields.io/badge/@react--navigation/native-^5.5.0-cyan" /> <img alt="axios" src="https://img.shields.io/badge/@react--navigation/stack-^5.4.1-cyan" /> <img alt="axios" src="https://img.shields.io/badge/axios-^0.19.2-cyan" /> <img alt="axios" src="https://img.shields.io/badge/expo-~37.0.3-cyan" /> <img alt="axios" src="https://img.shields.io/badge/expo--constants-~9.0.0-cyan" /> <img alt="axios" src="https://img.shields.io/badge/expo--font-~8.1.0-cyan" /> <img alt="axios" src="https://img.shields.io/badge/expo--location-~8.1.0-cyan" /> <img alt="axios" src="https://img.shields.io/badge/expo--mail--composer-~8.1.0-cyan" /> <img alt="axios" src="https://img.shields.io/badge/react-~16.9.0-cyan" /> <img alt="axios" src="https://img.shields.io/badge/react--dom-~16.9.0-cyan" /> <img alt="axios" src="https://img.shields.io/badge/react--native--gesture--handler-~1.6.0-cyan" /> <img alt="axios" src="https://img.shields.io/badge/react--native--maps-0.26.1-cyan" /> <img alt="axios" src="https://img.shields.io/badge/react--native--picker--select-^7.0.0-cyan" /> <img alt="axios" src="https://img.shields.io/badge/react--native--reanimated-~1.7.0-cyan" /> <img alt="axios" src="https://img.shields.io/badge/react--native--safe--area--context-0.7.3-cyan" /> <img alt="axios" src="https://img.shields.io/badge/react--native--screens-~2.2.0-cyan" /> <img alt="axios" src="https://img.shields.io/badge/react--native--svg-11.0.1-cyan" /> <img alt="axios" src="https://img.shields.io/badge/react--native--web-~0.11.-cyan" /></a>

## :memo: License

Este projeto foi desenvovido sob a licença MIT. Veja o [LICENSE](./LICENSE) para detalhes.

## :information_source: Author

Esse projeto foi desenvolvido por Débora Gama.
* [Linkedin](https://www.linkedin.com/in/debora-gama/)
