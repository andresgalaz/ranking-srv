## Descripción

Este es un desafío técnico acerca de un juego hipotético.

Esta pieza de software es el BACKEND que consulta los datos de los jugadores del juego utilizando paginación y filtros.

Los atributos de los usuarios (jugadores) son:

```bash
{
  id, // número que funciona como identificador único del jugador
  nickname, // string que contiene el alias del jugador
  status, // string que contiene el estado del jugador
  balance, // número de créditos disponibles en la cuenta del jugador
  avatar // url a la imagen del avatar del jugador
}
```

Se utiliza [Nest](https://github.com/nestjs/nest) <img src="https://nestjs.com/img/logo_text.svg" width="48" alt="Nest Logo" /> como framework TypeScript del lado del servidor y se conecta a una base de datos [MongoDB](https://www.mongodb.com/) <img src="https://www.mongodb.com/assets/images/global/favicon.ico" width="24" alt="MongoDB Logo" />

## Instalación

```bash
$ npm install
```

## Configuración

El strinc conexión a la base de datos MongoDB se encuentra directamente en src/app.modules.ts, no se creo un environment
para contener las variables de configuración porque esta sola, no se consideró necesario, en caso de requerir una conexión
diferente para ambiente de desarrollo, test y producion

## Testing

```bash
# Desarrollo
$ npm run test
```

## Correr el servicio

```bash
# Desarrollo
$ npm run start

# Modo watch
$ npm run start:dev

# Modo producción
$ npm run start:prod
```
