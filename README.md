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

## Escenarios
|Funcionalidad   |Escenario   |
|---|---|
|Editar post|E1|
|Editar post|E2|
|Editar post|E3|
|Editar post|E4|
|Editar página|Editar el título de una página creada:<br>
1. Autenticación en ghost como administrador.<br>
2. Listar las páginas creadas.<br>
3. Crear una nueva página.<br>
4. Verificar la correcta creación de la página.<br>
5. Editar el título de la página creada.<br>
6. Verificar que se hayan guardado los cambios correctamente.|
|Editar página|Editar la descripción de una página creada:<br>
1. Autenticación en ghost como administrador.<br>
2. Listar las páginas creadas.<br>
3. Crear una nueva página.<br>
4. Verificar la correcta creación de la página.<br>
5. Editar la descripción de la página creada.<br>
6. Verificar que se hayan guardado los cambios correctamente.|
|Editar página|Editar la url de una página creada:<br>
1. Autenticación en ghost como administrador.<br>
2. Listar las páginas creadas.<br>
3. Crear una nueva página.<br>
4. Verificar la correcta creación de la página.<br>
5. Editar la url de la página creada.<br>
6. Verificar que se hayan guardado los cambios correctamente.|
|Editar página|Editar una página creada y configurarla como featured page:<br>
1. Autenticación en ghost como administrador.<br>
2. Listar las páginas creadas.<br>
3. Crear una nueva página.<br>
4. Verificar la correcta creación de la página.<br>
5. Editar la página y hacerla featured.<br>
6. Verificar que se hayan guardado los cambios correctamente.|
|Editar tag|Editar el nombre del tag creado:<br>
1. Autenticación en ghost.<br>
2. Entrar al módulo de tags.<br>
3. Crear nuevo tag.<br>
4. Ver el listado de los tags.<br>
5. Seleccionar el tag creado.<br>
6. Editar el nombre del tag creado.<br>
7. Cerrar sesión.|
|Editar tag|Editar el slug del tag creado:<br>
1. Autenticación en ghost.<br>
2. Entrar al módulo de tags.<br>
3. Crear nuevo tag.<br>
4. Ver el listado de los tags.<br>
5. Seleccionar el tag creado.<br>
6. Editar el slug del tag creado.<br>
7. Cerrar sesión.|
|Editar tag|Editar la descripción del tag creado:<br>
1. Autenticación en ghost.<br>
2. Entrar al módulo de tags.<br>
3. Crear nuevo tag.<br>
4. Ver el listado de los tags.<br>
5. Seleccionar el tag creado.<br>
6. Editar la descripción del tag creado.<br>
7. Cerrar sesión.|
|Editar tag|Editar el color del tag creado:<br>
1. Autenticación en ghost.<br>
2. Entrar al módulo de tags.<br>
3. Crear nuevo tag.<br>
4. Ver el listado de los tags.<br>
5. Seleccionar el tag creado.<br>
6. Editar el color del tag creado.<br>
7. Cerrar sesión.|
|Eliminar post|Eliminar un post que fue modificado|
|Eliminar post|Eliminar un post que fue creado como draft:<br>
1.	Autenticación en ghost.<br>
2.	Entrar al módulo de post.<br>
3.	Crear un nuevo post como draft.<br>
4.	Verificar que el post fue creado como draft.<br>
5.	Ingresar al post.<br>
6.	Eliminar el post.<br>
7.	Cerrar sesión.|
|Eliminar post|Eliminar el primer post de la lista de posts:<br>
1.	Autenticación en ghost.<br>
2.	Entrar al módulo de post.<br>
3.	Seleccionar el primer post de la lista.<br>
4.	Abrir las opciones del post.<br>
5.	Eliminar el post.<br>
6.	Cerrar sesión.|