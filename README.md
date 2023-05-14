# Pruebas-E2E-grupo-28

## Tabla de contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Distribucion](#Distribucion)
- [Escenarios](#Escenarios)

## Requisitos

Los requsitos principales del proyecto son los siguientes

1. Contar con node (v14.18.0) y npm (6.14.15) en el dispositivo
2. Descargar ghost-cli en el dispositivo de manera global
3. Tener un explorador en nuestro caso usamos chrome
4. Contar con un IDE, en nuestro caso recomendamos visual estudio
5. Contar con docker

## Instalación

Despues de la clonacion del repositorio se procede a hacer la configuracion inicial de cada herramienta

### Ghost

En la terminal utilizar esto:

```bash
docker-compose up
```

Este comando incia las 2 versiones del ghost

1. ghost_3.41.1 -> Version 1
2. ghost_4.44.0 -> Version 2

Las versiones hacen referencia al manejo de las carpetas de los screenshots (Version 1 y 2)

#### Ghost 3.41.1

Ingrese al link http://localhost:3001/ghost y configure la pagina con los siguientes datos:

- Correo: c.wilchesv@uniandes.edu.co
- Pasword: 2TiSXG9VVvECnp
  (Las demas configuraciones no son de mucha importancia)

En el apartado de "Invite staff users"
Ponga una direccion de correo con formato valido (example@correo.prueba)

#### Ghost 4.44.0

Ingrese al link http://localhost:3002/ghost y configure la pagina con los siguientes datos:

- Correo: c.wilchesv@uniandes.edu.co
- Pasword: 2TiSXG9VVvECnp
  (Las demas configuraciones no son de mucha importancia)

## Uso

Con la aplicacion de ghost funcionando y corriendo. Ahora se pueden ejecutar las pruebas E2E

1. las pruebas que usan kraken se utilizan de la siguiente forma:

```bash
cd E2E-Kraken
npm install
npm run kraken:execution
```

2. Las pruebas que usan cypress se usan de la siguiente forma:

```bash
cd E2E-Cypress
npm install
npm run cypress:execution
npm run cypress:runner //Esta opcion es para abrir la interfaz de cypress
```

## Notas importantes

Todos los miembros del equipo contribuyeron al código, excepto Andrés Silva.

## [Escenarios de pruebas](https://github.com/sebaschb/Pruebas-E2E-grupo-28/wiki/Escenarios-de-pruebas)