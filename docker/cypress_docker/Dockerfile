FROM cypress/base:10
WORKDIR /app
COPY package*.json ./

#logging verbosity
# ENV CI=1
#RUN npm install --prefix /app --save-dev mocha mochawesome
RUN npm ci
RUN npx cypress verify

COPY cypress.json .