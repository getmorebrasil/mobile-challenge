# Desafio mobile da GETMORE

### Descrição

### Considerações

### Screenshots

<img src="https://raw.githubusercontent.com/telmotrooper/mobile-challenge/master/screenshots/1.jpg" height="384">
<img src="https://raw.githubusercontent.com/telmotrooper/mobile-challenge/master/screenshots/2.jpg" height="384">
<img src="https://raw.githubusercontent.com/telmotrooper/mobile-challenge/master/screenshots/3.jpg" height="384">
<img src="https://raw.githubusercontent.com/telmotrooper/mobile-challenge/master/screenshots/4.jpg" height="384">
<img src="https://raw.githubusercontent.com/telmotrooper/mobile-challenge/master/screenshots/5.jpg" height="384">

### Instruções de uso

#### Etapas iniciais
* Instale o NPM na máquina (caso ainda não tenha feito);
* Clone o repositório e instale as dependências do Cordova rodando `npm i` no diretório raiz;
* Entre na pasta "app" e instale também as suas dependências rodando `npm i`.

#### Rodando no computador

* Basta rodar o comando `npm run dev` na pasta "app" e acessar o endereço [http://localhost:8080/](http://localhost:8080/) (é recomendado alterar a perspectiva do seu navegador para mobile no menu de desenvolvedor).

#### Rodando no Android
* Entre na pasta "app" e rode o comando `npm run build` para gerar os arquivos da aplicação;
* Presumindo que você já tenha realizado as configurações da Android SDK e do seu smartphone no computador, basta rodar o comando `cordova run android --device` no diretório raiz (acima do "app") e a aplicação será executada no dispositivo.

### Requisitos

- [x] Dispor todos os dados (exceto o id) servidos pelo servidor;
- [x] Tratar erros de rede;
- [x] Criar um Readme com uma breve descrição do projeto e de como rodar;
- [ ] (Adicional) Permitir ao usuário a ordenar as lojas com qualquer um de seus atributos;
- [ ] (Adicional) Filtragem de atributos de loja;
- [ ] (Adicional) Responsivo para celulares e tablets;
- [ ] (Adicional) Caching de dados.