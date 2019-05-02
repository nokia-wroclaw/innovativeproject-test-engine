# Cypress test development manual

## Local development

### Run the app locally
1. Clone https://github.com/alexpilk/test-engine-app-source.git
2. `cd` into `test-engine-app-source/vue/` directory
3. Run `npm install` to install dependencies
4. Run `npm run serve` to run app locally on http://localhost:8080/

### Run cypress locally
1. `cd` into `docker/cypress_docker/`
2. Run `npm install` to install dependencies
3. Run `npm test` to open cypress GUI

## Docker run
1. `cd` into `docker/app/` directory
2. Run `./prepare_script.sh`
3. `cd` into `docker/` directory
4. Run `docker-compose up`

To rebuild services run:
`docker-compose build`

Behind proxy:
`docker-compose build --build-arg proxy=$http_proxy`
