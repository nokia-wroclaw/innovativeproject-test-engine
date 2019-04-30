FROM cypress/base:10
WORKDIR /app
COPY package*.json ./

ARG proxy

ENV http_proxy ${proxy}
ENV https_proxy ${proxy}
ENV NODE_TLS_REJECT_UNAUTHORIZED 0
ENV NO_PROXY webapp

RUN npm ci
RUN npx cypress verify

COPY cypress.json .
