# Luna & Granos Café

![Logo Luna & Granos Café](./public/mainBg.png)

## Descripción

Luna & Granos Café es una aplicación web desarrollada como trabajo práctico para la materia "Construcción de Interfaces de Usuario" en la Universidad Nacional de Hurlingham. El proyecto simula una cafetería online donde los usuarios pueden explorar el menú, realizar y gestionar un pedido. El objetivo principal es aplicar buenas prácticas de diseño de interfaces y desarrollo web, brindando una experiencia intuitiva y atractiva para el usuario.

## Estructura del proyecto

La estructura principal del proyecto es la siguiente:

```
tpCafeteriaOnline/
│
├── public/               # Archivos estáticos (imágenes, favicon, etc.)
│   └── Imagenes...
│
├── src/                  # Código fuente de la aplicación
│   ├── assets/           # Recursos como imágenes y estilos globales
│   ├── components/       # Componentes reutilizables de React
│   ├── data/             # Archivos de datos (ej: menú, productos)
│   ├── pages/            # Vistas principales de la aplicación
│   ├── App.css           # Estilos globales de la app
│   ├── App.jsx           # Componente principal de la app
│   ├── index.css         # Estilos base
│   ├── main.jsx          # Punto de entrada de React
│
├── .gitignore            # Archivos y carpetas ignorados por git
├── eslint.config.js      # Configuración de ESLint
├── index.html            # HTML principal
├── package.json          # Configuración y dependencias del proyecto
├── package-lock.json     # Control de versiones de dependencias
├── vite.config.js        # Configuración de Vite
└── README.md             # Documentación del proyecto
```

## Requisitos

- ![Node.js](./src/assets/node_icon.png) Node.js (versión recomendada: 18.x o superior)
- ![npm](src/assets/npm_icon.png) npm (gestor de paquetes de Node.js)
- ![Git](./src/assets/git_icon.png) Git (solo necesario si se clona el repositorio)

## Instrucciones para correr el proyecto localmente

1. **Obtener el código fuente**

   - Opción 1: Clonar el repositorio (requiere Git)
     ```bash
     git clone https://github.com/matutrz/tpCafeteriaOnline.git
     cd tpCafeteriaOnline
     ```
   - Opción 2: Descargar como ZIP
     - Haz clic en el botón "Code" en la página del repositorio y selecciona "Download ZIP".
     - Extrae el archivo ZIP y accede a la carpeta `tpCafeteriaOnline`.

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Iniciar la aplicación**

   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - Accede a `http://localhost:5173/` para ver la aplicación en funcionamiento.
