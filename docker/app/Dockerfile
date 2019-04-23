#https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html
FROM node:lts-alpine
RUN npm install -g http-server
RUN apk update && apk add git 
WORKDIR /app
COPY test-engine-app-source/vue/package*.json ./
RUN npm install
COPY test-engine-app-source/vue .
RUN npm run build_prod
#RUN npm run build
EXPOSE 8080 
CMD ["http-server","dist"]
#CMD ["npm","run","build_prod"]
