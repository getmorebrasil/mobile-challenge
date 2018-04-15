# Desafio mobile    

Você foi contratado para desenvolver um aplicativo mobile. O aplicativo terá duas telas:  

- Mostrar lojas;
- Detalhes de uma loja;

## Tela de mostrar uma lista de lojas  
Para essa tela será fornecido uma que retorna uma lista de lojas, segue exemplo de um retorno: 
```json  
[
  {
    "id":1,
    "name":"Ri Happy",
    "takeback":4.335500000000001,
    "image_blob":"data:image/png;base64,...",
  },
  {
    "id":2,
    "name":"Havan",
    "takeback":3.575,
    "image_blob":"data:image/png;base64,...",
  },
  {
    "id":3,
    "name":"Netshoes",
    "takeback":6.003,
    "image_blob":"data:image/png;base64,...",
  }
]
```
Disponível em http://challenge.getmore.com.br/stores

## Tela de mostrar detalhes de uma loja 
Para essa tela será fornecido uma rota para detalhes de uma rede específica
```json
{
  "id":1,
  "name": "Ri Happy",
  "takeback": 4.335500000000001,
  "rating": 4.9,
  "url": "https://www.rihappy.com.br/",
  "image_blob": "data:image/png;base64,...",
  "category": [
    "Moda e Acessórios",
    "Brinquedos e Jogos"
  ]
}
```
Disponível em http://challenge.getmore.com.br/stores/:id substitua `:id` pelo valor do atributo `id` da loja desejada. Por exemplo, para o json disponível acima a rota seria http://challenge.getmore.com.br/stores/1 

## Requisitos
Os requisitos para essas telas são:
- Dispor todos os dados (exceto o id) servidos pelo servidor (como os dados serão dispostos fica à seu critério, faz parte da avaliação);
- Tratar erros de rede;
- Criar um Readme com uma breve descrição do projeto e de como rodar;

## Requisitos adicionais
Esses requisitos não são obrigatórios:
- Permitir ao usuário a ordenar as lojas com qualquer um de seus atributos;
- Filtragem de atributos de loja;
- Responsivo para celulares e tablets;
- Caching de dados;

## Como começo?
Aqui vão as etapas:
- Faça um fork desse repositório;
- Crie uma Pull Request com seu código pronto;

## Tecnologias
Você poderá utilizar quaisquer tecnologias mobile para desenvolver, aqui vão algumas sugestões:

### Multiplataforma
- React Native;
- Flutter;
- Ionic;
- Phonegap;
- Cordova;

### Específico de plataforma
- Kotlin;
- Java;
- Swift;
- Objective-C;

## Requisitos para avaliação
- Uso do git (commits concisos, títulos auto-explicativos, etc);
- Boas práticas de programação (uso de padrões, nomes de identificadores, tamanho de funções, perfomance);
- Escolha de arquitetura (MVC, MVP, MVI, MVVC, VIPER, etc);
- Uso de bibliotecas para auxiliar o desenvolvimento;
- Uso de scripts (para execução do programa, otimização de imagens, etc);
