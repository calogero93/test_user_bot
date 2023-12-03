FROM node:16

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

RUN npm install -g typescript
RUN tsc

ENTRYPOINT node /app/src/index.js $@
