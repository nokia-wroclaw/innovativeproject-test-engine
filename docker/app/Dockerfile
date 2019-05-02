#https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html
FROM node:lts-alpine

ARG proxy

ENV http_proxy ${proxy}
ENV https_proxy ${proxy}
ENV NODE_TLS_REJECT_UNAUTHORIZED 0

RUN npm config set strict-ssl false && \
    npm config set registry "https://registry.npmjs.org/"
RUN npm install -g http-server

RUN apk update && apk add git 
WORKDIR /app
COPY test-engine-app-source/vue/package*.json ./
RUN npm install
COPY test-engine-app-source/vue .
RUN npm run build_prod
EXPOSE 8080
CMD ["http-server","dist"]
