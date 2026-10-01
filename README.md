# Project 1 Copy to change  Vite + React

## Objetivo

Este proyecto es una copia de **Project 1**. Se conservará como punto de partida, pero se transformará de un sitio estático HTML/CSS/JavaScript a una aplicación creada con **Vite + React** para cumplir los siguientes requisitos:

1. **Vite + React:** usar un proyecto scaffolded con Vite. El servidor de desarrollo y el build de producción deben funcionar correctamente.
2. **Componentes:** crear al menos cinco componentes en archivos separados y organizarlos en un árbol de componentes coherente. Como mínimo, dos componentes deben recibir y utilizar `props`.
3. **Estado:** implementar al menos tres piezas independientes de `useState` que produzcan cambios visibles en pantalla.
4. **Listas y keys:** renderizar al menos una colección con `map` y utilizar una `key` estable y apropiada, no el índice del array cuando los elementos puedan reordenarse.
5. **Renderizado condicional:** mostrar, ocultar o cambiar una parte de la interfaz según el estado de la aplicación.
6. **Input controlado:** incluir al menos un campo de formulario cuyo valor viva en el estado de React y se actualice mediante `onChange`.
7. **Estado elevado:** compartir al menos un estado entre dos componentes mediante un componente padre común.
8. **Netlify:** desplegar la aplicación en Netlify con la siguiente configuración:
	- **Build command:** `npm run build`
	- **Publish directory:** `dist`

## Cambios previstos respecto a Project 2

- Migrar la entrada HTML y la lógica existente a una estructura de aplicación React.
- Configurar `package.json` y Vite para disponer de los scripts `dev`, `build` y `preview`.
- Separar la interfaz en cinco o más componentes reutilizables dentro de archivos propios.
- Convertir las interacciones actuales en estado React con `useState`, incluyendo un input controlado y una vista condicional.
- Mantener el contenido y el diseño responsive de Project 2, adaptando los estilos para que funcionen con los componentes React.
- Verificar el build de producción y preparar el despliegue en Netlify usando `dist` como carpeta publicada.

## Desarrollo local

Instalar las dependencias y arrancar el servidor de Vite:

```bash
npm install
npm run dev
```

Para comprobar el build de producción:

```bash
npm run build
npm run preview
```

La aplicación estará disponible en la URL local que indique Vite, normalmente `http://localhost:5173/`.

## Despliegue

El proyecto se desplegará en Netlify con:

```text
Build command: npm run build
Publish directory: dist
```

**URL pública:** se añadirá aquí después de completar el despliegue en Netlify.
