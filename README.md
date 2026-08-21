# CineHub

Proyecto del curso DSAW · Universidad de La Sabana.

**Equipo:** Samuel Díaz Melo, Samuel David Ortiz Pico, David Fernando Gómez y Juan Pablo Vanegas.

---

## Problema

En Colombia, los grupos de amigos suelen perder demasiado tiempo coordinando por WhatsApp qué hacer juntos y, específicamente, qué película ver, en qué cine y a qué hora.

La información sobre películas, horarios y lugares termina mezclada entre mensajes del chat. Además, no existe un espacio centralizado donde una persona pueda proponer un plan y consultar fácilmente quién confirmó su asistencia.

Como consecuencia, los planes pueden perderse entre las conversaciones o terminar cancelándose porque el grupo no logra ponerse de acuerdo.

### Usuario identificado

CineHub está dirigido principalmente a **estudiantes universitarios y grupos de amigos en Colombia** que quieren organizar una salida al cine y necesitan una forma sencilla de decidir qué película ver, seleccionar una función y confirmar quién asistirá.

---

## Justificación de la aplicación web

CineHub se plantea como una aplicación web porque permite centralizar la información y compartir los planes mediante un enlace, sin exigir la instalación de una aplicación adicional.

La solución está justificada frente a alternativas más simples por las siguientes razones:

1. **WhatsApp no estructura la información de una película.**  
   Un grupo de WhatsApp puede servir para conversar, pero la información sobre póster, calificación, género, cine y horarios queda dispersa entre los mensajes.

2. **Una hoja de cálculo no ofrece una experiencia adecuada para este problema.**  
   Puede almacenar información, pero no está diseñada para presentar una cartelera de películas y permitir una interacción sencilla para responder a un plan.

3. **Las plataformas de cine tienen un objetivo diferente.**  
   Servicios como Cine Colombia o Cinemark permiten consultar funciones y comprar boletas, pero no están enfocados en resolver el problema de coordinación de un grupo de amigos: decidir qué película ver y saber quién realmente asistirá.

4. **Una aplicación web facilita el acceso desde diferentes dispositivos.**  
   Un usuario puede abrir un enlace desde un computador, tablet o celular sin necesidad de instalar una aplicación.

Por estas razones, una aplicación web permite combinar la exploración de películas con la creación y coordinación de planes entre amigos.

---

## Usuarios objetivo

Los usuarios principales de CineHub son:

- Estudiantes universitarios.
- Grupos de amigos.
- Personas que desean organizar una salida al cine.
- Usuarios que necesitan comparar películas y horarios antes de tomar una decisión grupal.

---

## Roles de usuario

CineHub contempla dos roles principales con permisos diferentes:

### Organizador del plan

El organizador puede:

- Seleccionar una película.
- Seleccionar el cine.
- Seleccionar fecha y hora.
- Crear un plan.
- Compartir el plan con otros usuarios.
- Consultar las respuestas de los invitados.
- Editar o cancelar los planes que crea.

### Invitado

El invitado puede:

- Consultar el plan al que fue invitado.
- Ver la información de la película.
- Consultar fecha, hora y lugar.
- Responder **Sí / Tal vez / No**.
- Consultar la información necesaria para decidir su asistencia.

El invitado no puede crear, editar ni cancelar planes creados por otros usuarios.

---

## Funcionalidades principales

El prototipo contempla un flujo completo compuesto por las siguientes funcionalidades:

### 1. Buscar y explorar películas

El usuario puede consultar la cartelera disponible, visualizar información de las películas y utilizar el buscador para encontrar una película específica.

### 2. Consultar una película y sus funciones

El usuario puede seleccionar una película y acceder a información relacionada con sus funciones, incluyendo cine, fecha y hora.

### 3. Crear un plan

El organizador puede seleccionar una película, función y datos del plan para generar una propuesta de salida con sus amigos.

### 4. Consultar un plan

El usuario puede acceder a la información del plan creado y consultar los datos principales de la salida.

### 5. Responder a un plan

Los invitados pueden indicar su disponibilidad mediante las opciones:

- **Voy**
- **Tal vez**
- **No puedo**

El prototipo representa este flujo de confirmación para demostrar cómo se coordinaría la asistencia de los integrantes del grupo.

---

## Prototipo

El proyecto cuenta con un prototipo web navegable compuesto por diferentes páginas que representan el flujo principal de CineHub:

- `index.html` — página principal y exploración de películas.
- `about.html` — información del proyecto y equipo.
- `pelicula.html` — detalle de una película.
- `funciones.html` — selección de función.
- `crear-plan.html` — creación de un plan.
- `plan.html` — visualización y respuesta al plan.

Las páginas están conectadas mediante enlaces de navegación para representar el flujo de usuario de principio a fin.

### Tecnologías utilizadas

- HTML5.
- CSS3.
- JavaScript.
- Git y GitHub.
- GitHub Pages.
- Figma para el diseño de wireframes.

El HTML utiliza elementos semánticos como:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`
- `form`

El diseño utiliza CSS con Flexbox y CSS Grid, además de diseño responsive para diferentes tamaños de pantalla.

---

## GitHub Pages

El prototipo se encuentra publicado mediante GitHub Pages:

**[Ver prototipo de CineHub](https://juanpablovanegas.github.io/cinehub/)**

El objetivo del prototipo es permitir navegar entre las diferentes pantallas y demostrar el flujo principal de CineHub.

---

## Figma

Los wireframes del proyecto fueron desarrollados en Figma.

El diseño contempla las pantallas principales del proyecto:

1. Inicio.
2. Películas.
3. Mis planes.
4. Buscar.
5. Acerca de.

**[Ver wireframes de CineHub en Figma](https://www.figma.com/design/GJN2lOeZOoOmQL95y17bI5/CINEHUB--copia-?node-id=2002-2)**

Los wireframes mantienen una estructura visual consistente y sirven como base para el desarrollo del prototipo web.

---

## Estructura del proyecto

```text
cinehub/
│
├── index.html
├── about.html
├── pelicula.html
├── funciones.html
├── crear-plan.html
├── plan.html
│
├── js/
│   ├── main.js
│   └── validation.js
│
├── styles/
│   ├── main.css
│   └── responsive.css
│
├── images/
│
├── README.md
└── rubric.json

- [x] Resuelve un problema real e identificable para un usuario específico
- [x] Justificado como app web (no hoja de cálculo, no herramienta existente, no solo-móvil)
- [x] Soporta 2 roles de usuario con permisos distintos (Organizador / Invitado)
- [x] Al menos 3 funcionalidades demostrables de principio a fin
- [x] No es clon de una app importante (no es Netflix, Twitter, Instagram)
