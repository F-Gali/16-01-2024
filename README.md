# 16-01-2024
## Prueba Técnica

### Dependencias Iniciales
Dado que las instrucciones de instalación pueden variar dependiendo del SO/Distro, dejó los enlaces relevantes
* PHP [Instrucciones de Instalación GNU/Linux](https://www.php.net/manual/en/install.unix.debian.php) / [Windows](https://www.php.net/manual/en/install.windows.manual.php)
    - ^Es posible que la instalación requiera activar extensiones de PHP de uso común tales como php-mbstring, php-imap, etc. Estas se activan en `php.ini` descomentando la línea correspondiente
* Composer [Guía de instalación](https://getcomposer.org/doc/00-intro.md)
* Node.js y NPM [Guía de instalación](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
    - ^No es necesario, pero se recomienda utilizar un administrador de versiones de Node tal como `nvm`.

### Preparación

* Clonar el repositorio y navegar hacia `/App/`
* Crear el archivo `.env` y poblarlo exactamente igual que `.env.example`, o en su defecto, duplicar este último y renombrarlo.
* Instalar los paquetes necesarios con Composer y NPM
    * Correr `composer install`
    * Correr `npm install`
* Correr `npm run build` para empaquetar el bundle con Vite
* Correr `php artisan migrate` y responder 'yes' para generar la base de datos, también ejecutará las migraciones
    - ^En caso de seer necesario, es posible limpiar la DB con `php artisan migrate:fresh`.
* Finalmente, ejecutar el proyecto con `composer run dev`.
    - ^Este comando es una utilidad que en el fondo ejecuta en paralelo `npm run dev` (necesario para el hot reload) y `php artisan serve` (necesario para levantar el servidor http de desarrollo).
* Ingresar a [http://localhost:8000](http://localhost:8000)
    ^En caso de que haya problemas al acceder, dentro del .env cambiar `http://localhost` a `http://127.0.0.1`, esto ocurre porque `php artisan serve` se ejecuta con --host=127.0.0.1, lo que a veces puede causar problemas, presumo que interfiere con el vhost de desarrollo.
* Listo