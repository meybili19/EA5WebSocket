# EA5WebSocket
 

## Install

    - Descarga e instala Node.js desde nodejs.org

## Install socket.io and swagger
    - npm install socket.io express swagger-jsdoc swagger-ui-express

## Docker
    - docker network create websocket-network
    - docker build -t meybili/websocket .
    - docker run -d --name websocket-container --network websocket-network -p 3000:3000 meybili/websocket


