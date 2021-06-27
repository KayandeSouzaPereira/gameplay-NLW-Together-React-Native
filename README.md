# GamePlay (NLW-Together) React-Native

## Descrição

Um aplicativo para organizar suas partidas em jogos online utilizando seus servidores no Discord.

Escolha entre as quatro categorias (Ranqueada, Duelo, Diversão e Treino).

Veja e entre em seu servidor do Discord no momento de suas Partidas.

## Instalação 

Instale o [Expo](https://docs.expo.io/) em sua maquina e rode o comando:

```Bash
expo start
```
Lembre-se de adicionar as varíaveis de ambiente ".env" utilizando o modelo ".env.example" com as credencias de [acesso](https://discord.com/developers/applications)

## Features 

- [X] Autenticação Social OAuth2 com servidor do Discord.
- [X] Obtém perfil do usuário cadastro no Discord (username e avatar);
- [X] Lista os servidores do Discord que o usuário faz parte;
- [X] Permite realizar o agendamento de partidas;
- [X] Permite filtrar as partidas por categoria;
- [X] Exibe se a partida foi agendada em um servidor próprio (anfitrião) ou em servidores de outros (convidado);
- [X] Compartilha o convite para ingressar no servidor do usuário;
- [X] Permite redirecionar o usuário para o seu próprio servidor;
- [X] Disponibiliza a função de Logout.

## Tecnologias Empregadas
- React Native
- Typescript
- Expo
- Context API
- Async Storage
- Vector Icons
- React Native Svg e Svg Transform
- Axios
- Gradient colors
- OAuth2 Discord
- Expo Google Fonts
- React Navigation Stack
- React Native Gesture Handler
- Expo Authentication
- React Native Share
- Deep Link
