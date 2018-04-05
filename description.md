# Desafio mobile    

Você foi contratado para desenvolver um aplicativo mobile. O aplicativo terá duas telas:  

- Mostrar lojas;
- Detalhes de uma loja;

## Tela de mostrar uma lista de lojas  
Para essa tela será fornecido uma lista de lojas no seguinte formato:  
```  
[
  {
    "id": "1",
    "name": "Netshoes",
    "takeback": "6,00%"
  },
  {
    "id": "2",
    "name": "AliExpress",
    "takeback": "6,50%"
  },
  {
    "id": "3",
    "name": "Walmart",
    "takeback": "3,50%"
  },
  {
    "id": "4",
    "name": "SEPHORA",
    "takeback": "6,00%"
  },
  ...
]
```


## Tela de mostrar uma lista de lojas  
Para essa tela será fornecido uma lista de lojas no seguinte formato:  
```
{
    "id": "4",
    "name": "Americanas",
    "takeback": "2.15", //percentage
    "rating": "5.53",
    "url" : "https://www.americanas.com/",
    "category" : ["Eletrônicos e Tecnologia", "Saúde e beleza" "Alimentos e bebidas"]
}
```


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
