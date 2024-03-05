# **RICK AND MORTY** | Proyecto individual

Desarrollar una aplicacion web FullStack (PERN Stack) que aprovecha los personajes de una API: https://rickandmortyapi.com/

Deploy: https://rickandmortyapp-gastonsolz.vercel.app/

## Tabla de Contenidos

- [Objetivos](#Objetivos)
- [Uso de pagina](#Uso-de-pagina)
- [Instrucciones](#Instrucciones)

## **Objetivos**

- Construir una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** y **Sequelize**.
- Afirmar los conocimientos sobre las tecnologias mencionadas.
- Poner en práctica recursos básicos de estilos y diseño (UX/UI).
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.

### **Backend (Node.js)**

- Registro de un nuevo usuario (nombre de usuario y contraseña)
- Almanenar estos usuarios en la base de datos y los personajes favoritos
- Rutas para separadas por peticiones, handlers, y controllers
- Implementacion de un CRUD.
- Creacion de modelos para base de datos mediante Sequelize.
- Configuracion y relacion entre tablas de la base de datos.

### **Frontend (React.js)**

- Permite a los usuarios a registrarse
- Permite a los usuarios a iniciar sesion con su usuario y contraseña
- Usar React Router para navegar entre la pagina de iniciar sesion, inicio y favoritos
- Muestra una barra de navegacion para ir a inicio, seccion de favoritos e iniciar sesion/registrar
- Carrousel de ciertos personajes con sus nombres
- Mostrar personajes por su id o aleatoriamente.
- Conectar el Frontend React con Backend Node.js mediante Redux.

### **Criterio de evaluacion**

- Organizacion y estructura de codigo.
- Uso adecuado de Nodejs para el desarrollo backend
- Uso efectivo de Reactjs para el desarrollo frontend
- Carrousel de personajes
- Manejo de errores y validacion.
- Diseño UX/UI

## **Uso de pagina**

### **Login**

Lo primero que se vera al entrar a la pagina seran formularios tanto para registrarse como iniciar sesion, y a la vez de ingresar a la pagina como invitado con ciertas limitaciones

### **Home**

Una vez pasado la pagina de Login, se mostrara la pagina inicial donde se veran:

- Los datos que provienen de la api
- Un carrousel que, aleatoriamente cada vez que se cargue esa pagina, mostrara 5 personajes automaticamente, de los cuales se podran añadir a la vista inferior de los personajes o conocer mas informacion, cada uno con su respectivo boton.
- Agregar personajes manualmente ingresando un numero del 1 al 826 y luego presionar el boton "Agregar" o automaticamente clickear el boton "Agregar aleatorio".
  - Estas cartas mismas pueden cerrarse y a la vez, si iniciaste sesion se te permitira seleccionar favoritos apretando el corazon, en caso de no iniciar sesion se te avisara que debes hacerlo.
    (Para deshacer esta marca, simplemente debes clickear de vuelta sobre el corazon).
  - Tambien, estas cartas contienen un ultimo boton "Mas info" que los enviara a conocer mas datos de ese personaje.

### **Detail**

Al presionar sobre "Mas info" se te redirigira a una pagina para ver los datos completos que provienen de la API Rick and Morty de manera mas individual.

### **Favorites**

Una vez que iniciaste sesion y marcaste cartas como favoritas, se te mostraran en la pagina de Favoritos. Aqui pueden ser sometidos a ciertos filtros:

- 1er Filtro: Se ordenaran las cartas ascendente o descendentemente segun el numero de id
- 2do Filtro: Se mostraran las cartas que cumplan con tal genero.
- 1er Boton "RESET": Eliminaran todos los filtros.

## **Instrucciones**

Para clonar el repositorio localmente, sigue estos pasos:

1. Abrir la terminal o simbolo de sistema.
2. Navegar al directorio donde queres clonar el repositorio
3. Seguir los siguientes comandos:

```bash
git clone https://github.com/GastonSoliz/RyM-App-WithServer.git
```

4. Una vez que el proceso esta completado, navegar al directiorio clonado:

```bash
cd RyM-App-WithServer
```

5. Seguir las instrucciones de configuracion de backend o frontend.

### **Backend Setup**

Para configurar el entorno de desarrollo Backend, seguir los siguientes pasos:

1. Navegar al directorio Backend:

```bash
cd Server
```

2. Configurar el archivo .env:

```
DB_USER= <NOMBRE DE BASE DE DATOS POSTGRESQL O 'postgres'>
DB_PASSWORD= <CONTRASEÑA DE BASE DE DATOS POSTGRESQL>
DB_HOST= <HOST DE PRODUCCION O 'localhost:5432'>
SERVER_PORT= <TU PUERTO DE BACKEND>
```

3. Cambiar la configuracion de base de datos en el archivo DB_connection.js de:

```
const sequelize = new Sequelize(DB_POSTGRE_URL, {
  logging: false,
  native: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
```

corrigiendola para produccion a:

```
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
  { logging: false, native: false }
);
```

4. Instalar las dependencias necesarias y ejecutar el servidor:

```bash
npm run start
```

El servidor se va a iniciar en el puerto que denomines en el archivo .env, podes seguir con la configuracion del Frontend

### **Frontend Setup**

Para configurar el entorno de desarrollo Frontend, seguir los siguientes pasos:

1. Navegar al directorio Frontend:

```bash
cd Client
```

2. Cambiar el endpoint, es decir la url para realizar las peticiones en el entorno de produccion, en los archivos:

   - characterActions.js
   - userActions.js
   - Detail.jsx

   Pasar de verse asi:

```
//const endpoint = "http://localhost:3001/rickandmorty";
const endpoint = "https://rickandmortyserver-gastonsoliz.onrender.com/rickandmorty";
```

A tener que verse asi, usando el localhost:

```
const endpoint = "http://localhost:3001/rickandmorty";
//const endpoint = "https://rickandmortyserver-gastonsoliz.onrender.com/rickandmorty";

```

3. Instalar las dependencias necesarias, y ejecutar la aplicacion:

```bash
npm run start
```

La aplicacion se va a iniciar en el puerto 3000, a partir de aca podes usarlo como quieras!

**NOTA** Tener en cuenta que para el funcionamiento correcto de la aplicacion se deben ejercutar ambos al mismo tiempo y con diferentes puertos!
