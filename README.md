# WebSocket Chat Application with React, Node.js Server and Socket.io
## Description

This is a chat application using React on the client side, and Node.js on the server side. The web app and the server communicate with WebSocket API using Socket.io library.

The web application has the following features:

1. Displays a list of all available channels
2. User can click on a channel to join and view the chat history
3. User can send messages to the channel
4. User can edit their previous messages
5. User can delete their previous messages
6. User can search in the chat history

Although the focus of this project has been on developing the front-end, the server has the capability of acting as a WebSocket powered API with an in-memory persistence, which is reset after a server restart. The server comes with a prepopulated chat data. In this context, the server is able to:

1. Persist messages to a channel
2. Return a list of all channels
3. Return chat history for any specific channel

## How to run the project

The project is divided into two components:

- `client`
- `server` 

In order to use the application you need to get both components running.

After cloning the application you need to install the npm dependencies for both components by executing `yarn` inside the root of `client` and `server` folders.

Then you can run the client using `yarn start` and then accessing it at `localhost:3000`. You can run the server using `yarn dev` at the root of their folders, which is exposed on port 4000 as default.

## How to test the application

You can start the chat by providing a user name. On the left there is a list of all available channels. By clicking on a channel you can see the chat history of that channel. You can send messages to the channel, and later edit or delete your messages.

The user is persisted in the browser session storage, so if you open two different tabs you can use the app as two separate users.

When two users are present in the same channel, they should be able to see the activities of the other immediately.

On the top of the channel history, there is a search field that filters the channel messages based on the search term.

## How to build the project

The client was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can generate a static build by executing `yarn build`.

You can build the server similarly by running `yarn build` at the root of the `server` folder.

## Future developments

The following features could be added to the project in the future:

1. Adding authentication/authorization to the app
2. Ability to create new rooms
3. Adding a persistence layer (SQL or NoSQL)
4. Ability to reply to a message