# TaskManager

**TaskOrganizerApp** es una aplicación móvil multiplataforma (iOS/Android) desarrollada con **React Native CLI** y **TypeScript**, diseñada para profesionales y usuarios que necesiten gestionar tareas de forma sencilla, segura y escalable.

---

## 📋 Tabla de Contenidos

1. [Características](#-características)
2. [Arquitectura](#-arquitectura)
3. [Tecnologías](#-tecnologías)
4. [Instalación](#-instalación)
5. [Uso](#-uso)
6. [Gestión de Estado](#-gestión-de-estado)
7. [Persistencia de Sesión](#-persistencia-de-sesión)
8. [Data Fetching](#-data-fetching)
9. [Manejo de Errores](#-manejo-de-errores)
10. [Diseño Responsivo](#-diseño-responsivo)

---

## ✨ Características

- 🔐 **Autenticación** con validación de usuarios predefinidos.
- 🗒️ **Lista de Tareas**: obtención de 50 tareas desde una API externa.
- 🔍 **Búsqueda** en tiempo real por título, `userId` y estado.
- ⚙️ **Filtros**: pares, impares, tareas del usuario.
- ➕➖ **CRUD**: agregar, editar y eliminar tareas.
- 🔄 **Paginación** con navegación entre páginas.
- 🎨 **UI/UX** moderno: gradientes, botones curvados e inputs estilizados.
- 📱 **Diseño responsivo**: escalado dinámico de textos y componentes.
- 🗄️ **Persistencia de Sesión** en AsyncStorage.
- 📊 **Caching** de datos con TanStack Query.
- 🔄 **Error Boundaries** y **Suspense** para carga y errores.

---

## 🏗️ Arquitectura

Se sigue la **Screaming Architecture**, con carpetas separadas por dominios:

```
src/
├── app/                   # Entrypoint, QueryProvider
├── components/            # UI reusable (Button, Input, Dropdown, Modal)
├── config/                # tema, colores, escalas
├── features/              # pantallas (login, tasks)
│   ├── login/
│   └── tasks/
├── hooks/                 # hooks personalizados (useTasksQuery)
├── navigation/            # AppNavigator
├── services/              # Axios, QueryClient
├── state/                 # Zustand stores (Auth, Task)
├── utils/                 # helpers (responsive, storage, resetStores)
└── assets/                # imágenes, SVGs, data JSON
```

---

## 🛠️ Tecnologías

- **Lenguaje:** TypeScript
- **Framework:** React Native CLI
- **Navegación:** React Navigation (Native Stack)
- **Estado Global:** Zustand
- **Data Fetching & Cache:** @tanstack/react-query
- **HTTP Client:** Axios (con interceptors)
- **Persistencia:** @react-native-async-storage/async-storage
- **Animaciones y Gestures:** react-native-reanimated, react-native-gesture-handler
- **UI Components:** Tailwind (via config), custom components

---

## 🚀 Instalación

```bash
# Clona el repositorio
git clone https://github.com/XxJohnWickxX/prueba-movil/tree/Jonathan-Lopez-Jimenez
cd TaskManager

# Instala dependencias
npm install
# Para iOS
cd ios && pod install && cd ..

# Ejecuta en Android
npm  run android
# Ejecuta en iOS
npm run ios
```

---

## ▶️ Uso

1. Abre la app: verás la pantalla de **Login**.
2. Ingresa credenciales de `usuarios.json`.
3. Tras el login, accedes a la **Lista de Tareas**.
4. Puedes:

   - **Buscar** y **páginar**.
   - **Agregar** nueva tarea.
   - **Editar** o **Eliminar** tareas.

5. Cierra sesión con el botón de **Logout**, limpiando todo el estado.

---

## 🗄️ Gestión de Estado

- **AuthState**: persiste el objeto `user` en AsyncStorage.
- **TaskState**: maneja tareas en memoria con `setTasks`, `add`, `delete`, `toggle`.

---

## 📊 Data Fetching

- **Hooks personalizados** (`useTasksQuery`) combinan React Query (suspense + cache) con Zustand.
- **QueryClient** con `throwOnError` y `suspense` habilitados.

---

## 🚨 Manejo de Errores

- **ErrorBoundary** captura errores de render y de red.
- **ErrorModal** muestra mensajes al usuario.
- Los errores de Axios se lanzan para ser capturados.

---

## 📱 Diseño Responsivo

- Uso de funciones `scale()`, `verticalScale()`, `moderateScale()` y `fontScale()`.
- Todos los componentes adaptan tamaño según dispositivo.

---
