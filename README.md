# Desafio mobile da GETMORE

### Descrição
Aplicativo que busca lojas de uma API e mostra as suas informações na tela, desenvolvido com Vue.js, Ionic e Cordova e utilizando Webpack.

### Considerações
Me incomodei bastante utilizando o Vue.js para construir o aplicativo, tive vários problemas para fazer o framework se comportar corretamente e tarefas que deveriam ser simples (como tratar os erros de rede) acabaram ficando com uma lógica um pouco confusa no código. Numa próxima vez tentarei utilizar React Native.

### Problemas conhecidos
- Algumas vezes a tela de "verifique sua conexão" não mostra a sua mensagem mas mostra o botão de "recarregar", mesmo a condição dos dois eventos sendo a mesma;
- No Android, a tela treme algumas vezes ao carregar a tela principal.

### Screenshots

<img src="https://raw.githubusercontent.com/telmotrooper/mobile-challenge/master/screenshots/1.jpg" height="384"> <img src="https://raw.githubusercontent.com/telmotrooper/mobile-challenge/master/screenshots/2.jpg" height="384"> <img src="https://raw.githubusercontent.com/telmotrooper/mobile-challenge/master/screenshots/3.jpg" height="384"> <img src="https://raw.githubusercontent.com/telmotrooper/mobile-challenge/master/screenshots/4.jpg" height="384"> <img src="https://raw.githubusercontent.com/telmotrooper/mobile-challenge/master/screenshots/5.jpg" height="384">

### Instruções de uso

#### Etapas iniciais
* Instale o npm na máquina (caso ainda não tenha feito);
* Instale o Cordova através do npm com `npm i -g cordova` (Windows) ou `sudo npm i -g cordova` (Linux);
* Clone esse repositório;
* Rode o comando `cordova platform add android` no diretório raíz para habilitar a exportação da aplicação para Android;
* Instale as dependências do Cordova rodando `npm i` no diretório raiz;
* Entre na pasta "app" e instale também as suas dependências rodando `npm i`.

#### Rodando no computador

* Basta rodar o comando `npm run dev` na pasta "app" e acessar o endereço [http://localhost:8080/](http://localhost:8080/) (é recomendado alterar a perspectiva do seu navegador para mobile no menu de desenvolvedor).

#### Rodando no Android
* Entre na pasta "app" e rode o comando `npm run build` para gerar os arquivos da aplicação;
* Presumindo que você já tenha realizado as configurações da Android SDK e do seu smartphone no computador, basta abrir o diretório raíz (acima do "app") e rodar o comando `cordova run android --device`, a aplicação será então executada no dispositivo.

### Requisitos

- [x] Dispor todos os dados (exceto o id) servidos pelo servidor;
- [x] Tratar erros de rede;
- [x] Criar um Readme com uma breve descrição do projeto e de como rodar;
- [ ] (Adicional) Permitir ao usuário a ordenar as lojas com qualquer um de seus atributos;
- [ ] (Adicional) Filtragem de atributos de loja;
- [ ] (Adicional) Responsivo para celulares e tablets;
- [ ] (Adicional) Caching de dados.