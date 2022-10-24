# Desafio de programação: aplicativo de tempo
Desafio de programação para criar um app de consulta a condição climática de qualquer cidade do mundo usando MUI React, Typescript e Vitest com RTL.

## Requisitos funcionais
- [ ] Deve ser possível colocar o nome de uma cidade dentro de um input de texto
- [ ] Deve ser possível clicar em um botão de submeter que, no caso de sucesso, exibe os dados em tela tais como: temperatura, condição climática (ex nublado, chuva, etc.) e um ícone associado à condição climática (ex nuvens de chuva para clima de chuva, ou sol para clima ensolarado, etc.)

## Cenários de erro
- [ ] Em caso de cidade inválida, exibir uma mensagem abaixo do input orientando o usuário a tentar novamente com uma cidade válida
- [ ] Em caso de API fora do ar, exibir uma mensagem para o usuário tentar novamente em outro momento

## Requisitos técnicos
- [ ] Deve-se usar apenas bibliotecas que já estão instaladas na aplicação, especificadas no `package.json`
- [ ] Deve-se escrever ao menos um caso de teste para cada requisito funcional e cenário de erro
- [ ] Deve-se escrever código apenas com a linguagem Typescript e utilizando tipagens adequadas, isto é não se deve usar `any`
- [ ] Deve-se utilizar a biblioteca de componentes Material UI (MUI) para qualquer parte visual da aplicação (botões, inputs, boxes, etc.), o que inclui não apenas componentes (html), mas também toda parte de estilização (css)
- [ ] Deve-se utilizar a [API da AccuWeather](https://developer.accuweather.com/) para obter dados climáticos de qualquer cidade no mundo

## Instruções para rodar o projeto
Este desafio vem com uma aplicação já pré-configurada para evitar ter que montar todo o setup de uma aplicação react com typescript, MUI e vitest.

Para instalar a aplicação:
```
yarn
```

Para rodar a aplicação de desenvolvimento:
```
yarn dev
```

Para rodar os testes:
```
yarn test
```

## Submissão
Submeta todas as suas alterações em formas de um pull request com um ou mais commits. Na descrição do PR, inclua o seu racional resumido para cumprir o desafio e qualquer limitação que você encontrou durante o desenvolvimento.

Lembre-se que a interpretação do desafio faz parte do processo de avaliação.
