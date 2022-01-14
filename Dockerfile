FROM node:15

WORKDIR /app

COPY package.json ./

RUN npm install pm2 -g
RUN npm i

COPY . .

EXPOSE 9111

CMD [ "pm2-runtime", "start", "./pm2/ecosystem.config.cjs" ]