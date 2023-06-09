<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
npm install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo `.env.template` y renombrar la copia a `.env`

6. llenar las variables de entorno efinidas en el `.env`

7. ejecutar la aplicacion en dev

```
npm run start:dev
```

8. Reconstruir la base de datos con la semilla

```
http://localhost:3000/api/seed
```

## Configuración de la imagen de docker

documentación detallada

- Website - [https://gist.github.com/Klerith/e7861738c93712840ab3a38674843490](https://gist.github.com/Klerith/e7861738c93712840ab3a38674843490)

# Production build

1. Crear el archivo `.env.prod`
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

## Stack usado

- MongoDB
- Nest

## License

Nest is [MIT licensed](LICENSE).
