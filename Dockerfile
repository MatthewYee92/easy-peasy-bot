FROM node:latest

WORKDIR /slackBotTest

COPY . .

RUN npm start

CMD ["npm", "start" ]

