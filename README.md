# Pruebas-E2E-grupo-28

## Tabla de contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Distribucion](#Distribucion)

## Requisitos

Los requsitos principales del proyecto son los siguientes

1. Contar con node (v14.18.0) y npm (6.14.15) en el dispositivo
2. Descargar ghost-cli en el dispositivo de manera global

```bash
npm install ghost-cli@latest -g
```

3. Tener un explorador en nuestro caso usamos chrome
4. Contar con un IDE, en nuestro caso recomendamos visual estudio

## Instalación

Despues de la clonacion del repositorio se procede a hacer la configuracion inicial

```bash
npm install
```

Teniendo las dependencias procedemos a hacer la instalacion de ghost en nuestro dispositivo

1. Descargar y instalar ghost en la carpeta /ghost:

```bash
npm run ghost:prepare //este comando inicia la configuracion del ghost con la version en la carpeta
```

2. Configuracion inicial de ghost: Para este paso es necesario ir a la pagina de administrador de ghost: http://localhost:3001/ghost (Es importante el puerto para su correcto funcionamiento)

Ingrese al link http://localhost:3001/ghost y configure la pagina con los siguientes datos:

- Correo: c.wilchesv@uniandes.edu.co
- Pasword: 2TiSXG9VVvECnp
  (Las demas configuraciones no son de mucha importancia)

En el apartado de "Invite staff users"
Ponga una direccion de correo con formato valido (example@correo.prueba)

## Uso

Con la aplicacion de ghost funcionando y corriendo. Ahora se pueden ejecutar las pruebas E2E

1. las pruebas que usan kraken se utilizan de la siguiente forma:

```bash
npm run kraken:execution
```

2. Las pruebas que usan cypress se usan de la siguiente forma:

```bash
npm run cypress:execution
npm run cypress:runner //Esta opcion es para abrir la interfaz de cypress
```

## Notas importantes

Todos los miembros del equipo contribuyeron al código, excepto Andrés Silva.
