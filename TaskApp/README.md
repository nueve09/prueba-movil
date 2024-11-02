# Gestion de Tareas

## Descripción

Esta es una aplicación de gestión de tareas desarrollada en React Native con Expo. Permite a los usuarios agregar, editar, eliminar y filtrar tareas. Los usuarios pueden filtrar las tareas por números pares, impares o ver todas las tareas a la vez.

## Funcionalidades

- **Agregar Tareas**: Los usuarios pueden añadir nuevas tareas a la lista.
- **Editar Tareas**: Se puede modificar la información de tareas existentes.
- **Eliminar Tareas**: Los usuarios pueden eliminar tareas de la lista.
- **Filtrar Tareas**: Hay tres opciones de filtrado:
  - Mostrar tareas con ID par.
  - Mostrar tareas con ID impar.
  - Mostrar todas las tareas.
- **Búsqueda de Tareas**: Los usuarios pueden buscar tareas por su título.

## Estructura del Proyecto

#### Screens

- **Login**: Pantalla para el inicio de sesión.
- **TaskList**: Pantalla para mostrar las tareas.
- **EditTask**: Pantalla para editar tareas.
- **AddTask**: Pantalla para agregar nuevas tareas.

#### Componentes

- **Header**: Componente para la lista de tareas que contiene un texto e imagen.
- **TaskItem**: Componente que representa cada tarea individual.
- **Filter**: Componente que permite filtrar las tareas.
- **Paginator**: Componente que maneja la paginación de tareas.
- **Gradient**: Componente que proporciona un fondo degradado y maneja el inicio de sesión.

## Cambios realizados o características

1. **Autentición de usuarios**:

   - Se agregó una pantalla la cual gestiona el inicio de sesión de los user que se encuentran en `/data/user.json`
   - Al hacer clic en el botón `Entrar` se realiza la validacion de que sean las credenciales correctas, asi mismo que no esten vacios los campos de lo contrario manda el mensaje solicitado sino se inicia sesion y se guarda el dato en `AsyncStorage` para mantener la sesion y no volver a iniciar sesion.

2. **Implementación del Buscador**:

   - Se agregó un buscador para realizar la busqueda de tareas especificas.

3. **Implementación del Filtro**:

   - Se agregó un componente de filtro con tres botones: "Par", "Impar" y "Todas".
   - Al hacer clic en cada botón, se filtran las tareas según el criterio seleccionado.

4. **Mejoras en el Estilo de Botones**:

   - Se mejoró el estilo de los botones de filtro utilizando `TouchableOpacity` para un mejor diseño visual.
   - Se aplicaron colores, padding, bordes redondeados y un estilo de texto adecuado.

5. **Manejo de Estado**:
   - Se ajustó el manejo del estado para filtrar tareas, asegurando que el estado se actualice correctamente al cambiar el filtro.

## Instalación y Ejecución

Para ejecutar esta aplicación, asegúrate de tener instalados los siguientes programas en tu sistema:

- [Node.js](https://nodejs.org/) (incluye npm)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

Luego, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone <url_del_repositorio>
   cd <nombre_del_repositorio>

   ```

2. Navega al folder `TaskApp` que esta dentro de `prueba-movil`:
   ```bash
   cd TaskApp
   ```
3. Instala las dependencias dentro del folder previamente mencionado:
   ```bash
    yarn install
   ```
4. Corre el comando:
   ```bash
    yarn android
   ```

## Uso de la app

Una vez que la aplicación se esté ejecutando, sigue estos pasos:

1. Inicio de Sesión: Ingresa tus credenciales en la pantalla de inicio de sesión.

2. Agregar Tareas: Utiliza la pantalla de agregar tareas para añadir nuevas tareas.

3. Editar Tareas: Haz clic en una tarea para editar su título.

4. Eliminar Tareas: Desliza hacia la izquierda en una tarea para eliminarla.

5. Filtrar Tareas: Utiliza los botones de filtro para mostrar tareas pares, impares o todas las tareas.

## Capturas de pantalla

![Pantalla de Inicio de Sesión](/TaskApp/src/assets/images/screenshot1.png)

![Lista de Tareas](/TaskApp/src/assets/images/screenshot2.png)

![Pantalla de Agregar Tareas](/TaskApp/src/assets/images/screenshot3.png)

![Pantalla de Edición de Tareas](/TaskApp/src/assets/images/screenshot4.png)

## Contribuciones

Si deseas contribuir a este proyecto, por favor abre un "issue" o envía una "pull request". Agradecemos cualquier mejora o corrección que puedas aportar.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más información.

## Recursos y referencias

- [Documentación de React Native](https://reactnative.dev/docs/getting-started)

- [Documentación de Expo](https://docs.expo.dev/)
