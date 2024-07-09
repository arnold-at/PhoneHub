# Phone Hub - README

## Introducción

Phone Hub es una tienda en línea dedicada a la venta de productos de telefonía en Perú. La aplicación web ofrece una experiencia de compra en línea fácil y accesible para los usuarios, permitiendo la compra de teléfonos, accesorios y otros productos tecnológicos.

## Estructura del Proyecto

El proyecto está compuesto por varios archivos y directorios, cada uno con una función específica. A continuación, se describe la estructura del proyecto y el propósito de cada archivo.

## Archivos Principales

### 1. about.html
Este archivo contiene la página "Acerca de" de la tienda en línea. Proporciona información sobre la empresa y su misión.

### 2. checkout.html
Este archivo maneja el proceso de pago de la tienda. Los usuarios pueden revisar su carrito de compras y proceder con el pago.

### 3. contact.html
Este archivo contiene el formulario de contacto para que los usuarios puedan comunicarse con el soporte o la administración de la tienda.

### 4. products.html
Este archivo muestra los productos disponibles en la tienda. Los usuarios pueden navegar y seleccionar productos para añadirlos a su carrito de compras.

### 5. services.html
Este archivo proporciona información sobre los servicios adicionales que ofrece la tienda, como soporte técnico y consultoría.

### 6. script.js
Este archivo contiene el código JavaScript que maneja la lógica de la aplicación, incluyendo la funcionalidad del carrito de compras, validaciones de formularios y otras interacciones del usuario.

## Configuración e Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio del proyecto:
    bash
    git clone <URL_DEL_REPOSITORIO>
    cd phone-hub
    

2. Configura las variables de entorno:
    bash
    cp .env.example .env.local
    
   Edita .env.local con los valores necesarios para tu entorno.

3. Instala las dependencias del proyecto:
    bash
    npm install
    

## Desarrollo

Para iniciar la aplicación en modo de desarrollo:

```bash
npm run dev
