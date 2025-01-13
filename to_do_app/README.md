


# Prueba Tecnica React Native
El proyecto fue realizado en [**React Native**](https://reactnative.dev)  utilizando React Native Cli, este proyecto tiene como objetivo la creación, consulta , edicion y eliminacion de tareas obtenidas de este [**origen**](https://jsonplaceholder.typicode.com/todos).

# Acerca del proyecto


## Gestion de estado global

El proyecto utiliza React-Redux y Redux Toolkit para gestionar el estado global de la aplicación y hace uso de RTK Query para realizar peticiones HTTP.Tambien se hace uso de react-navigation para el manejo de la navegación entre pantallas.

## Arquitectura 

Se opta por la arquitectura MVVM para la separación de responsabilidades, de forma que los componentes visuales solo se encargan de mostrar los datos, haciendo uso de ViewModels para la gestión de la lógica de negocio.

De igual forma, se usan algunos conceptos de Clean Architecture, como las entidades, las cuales nos sirven para tener un tipado de objetos utilizando interfaces de TypeScript (TS), lo que nos ayuda a mantener la consistencia en los datos obtenidos de las peticiones. También se utilizan las fuentes de datos, con las que podemos separar la lógica de obtención de los datos, y los repositorios, que nos ayudan a exponer nuestras fuentes de datos a la capa de presentación (o en este caso, la capa de Vista), donde también podemos hacer uso de los mappers para convertir los datos obtenidos y hacerlos utilizables.

## Descripción de las carpetas
## App.tsx
Es el punto de entrada de la aplicación en el cual integramos las configuraciones para Redux.

### Main.tsx
 Es nuestro contenedor principal, donde se gestiona si hay una sesión iniciada o no.

## Api 
Carpeta donde están los archivos dedicados a la obtención de datos.

## Assets 
Carpeta donde están los archivos, como imágenes, que sirven para el diseño de la app.

## Entities 
Carpeta donde están las interfaces de las entidades con las que trabaja la aplicación.

## Helpers 
Carpeta donde están las funciones que nos ayudan a modificar los datos obtenidos de los orígenes de datos.

## Hooks 
Carpeta donde se encuentran los hooks personalizados, separando la lógica del manejo del estado del componente.

## models 
Carpeta donde se encuentran las interfaces de los modelos que obtenemos de los orígenes de datos.

## Store 
Carpeta donde se encuentran las configuraciones del estado global de la aplicación usando Redux Toolkit y React Redux.

## View 
Carpeta donde se encuentran las pantallas, componentes, configuración de la navegación, configuración del tema y funciones útiles.

## ViewModels 
Carpeta que almacena los ViewModels que se encargan de gestionar la lógica de negocio de la aplicación.

## Explicacion de pantallas
La vista está dividida en 3 pantallas principales, las cuales son: Login, Home y Task.

Dentro de la app se usa un Modal que nos permite mostrar advertencias al usuario sobre las acciones a realizar, como cerrar sesión o borrar una tarea.

   ### Login
   En esta pantalla nos encontramos con la pantalla inicial de la aplicación, la cual nos permite ingresar nuestras credenciales para poder iniciar sesión.

   Está separada en 2 componentes: el componente LoginForm, que se encarga de mostrar el formulario para ingresar las credenciales, y un contenedor con el ícono principal.

   ### Home
   Esta pantalla se divide en 2 componentes: el componente AnimatedHeader, que tiene una barra de título y un ícono para salir de la sesión, y también muestra un formulario para hacer búsquedas de las tareas. Luego está el componente TaskList, que nos muestra la lista de nuestras tareas, las cuales se visualizan en forma de tarjetas.

   ### Task
   En esta pantalla se nos muestra un header con una imagen y una barra de título que cambia en función de la acción que deseemos realizar, ya sea editar o agregar una tarea. Abajo de este header vemos un formulario que nos permite introducir los datos de nuestra tarea.

   ### Modal
   Este componente se muestra en los casos en los que queramos borrar una tarea o cerrar sesión. Está compuesto por un título, un mensaje de advertencia y 2 botones de acción: uno que oculta el modal sin realizar la operación, y el otro para aceptar y realizar la operación.