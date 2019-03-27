#https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html
FROM node:lts-alpine
#RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
#RUN npm run build
#RUN npm run build
EXPOSE 3335 
#CMD ["http-server","dist"
CMD ["npm","run","dev"]
