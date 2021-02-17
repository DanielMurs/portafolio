
export interface Tecnologia {
    nombre: string;
    img: string;
    description?: string;
}


export const tecnologias: Tecnologia[] = [
    {
        nombre: 'HTML',
        img: 'assets/html.svg',
        description: 'Es el lenguaje con el que se define el contenido de las páginas web.',
    },
    {
        nombre: 'CSS',
        img: 'assets/css.svg',
        description: 'Es un lenguaje de marcas enfocado a definir, crear y mejorar la presentación de un documento basado en HTML.'
    },
    {
        nombre: 'Sass',
        img: 'assets/sass.svg',
        description: 'Es una herramienta que nos permite generar, de manera automática, hojas de estilo, añadiéndoles características que no tiene CSS.'
    },
    {
        nombre: 'Bootstrap',
        img: 'assets/bootstrap.svg',
        description: 'Este framework permite ofrecerle al usuario una experiencia más agradable cuando navega en un sitio.'
    },
    {
        nombre: 'TailwindCSS',
        img: 'assets/tailwind.svg',
        description: 'Es un Framework de CSS que principalmente brinda estilos útiles para nuestros desarrollos web.'
    },
    {
        nombre: 'Javascript',
        img: 'assets/js.svg',
        description: 'Es un lenguaje de programación que permite implementar funciones complejas en páginas web.'
    },
    {
        nombre: 'Typescript',
        img: 'assets/typescript.svg',
        description: 'Es un lenguaje que extiende la sintaxis de JavaScript'
    },
    {
        nombre: 'NodeJs',
        img: 'assets/node.svg',
        description: 'Un desarrollador NodeJs puede desarrollar toda la lógica del lado del servidor.'
    },
    {
        nombre: 'Socket.io',
        img: 'assets/socket.io.svg',
        description: 'Es una librería que permite una comunicación en tiempo real entre cliente y servidor.'
    },
    {
        nombre: 'Angular',
        img: 'assets/angular.svg',
        description: 'Angular es un framework que facilita la creación y programación de aplicaciones web de una sola página'
    },
    {
        nombre: 'Python',
        img: 'assets/python.svg',
        description: 'Se trata de un lenguaje de programación presente en multitud de aplicaciones y sistemas operativos.'
    },
    {
        nombre: 'Flask',
        img: 'assets/flask.svg',
        description: 'Es un framework para Python que permite crear aplicaciones web rápidamente y con un mínimo número de líneas de código.'
    },
    {
        nombre: 'MongoDB',
        img: 'assets/mongodb.svg',
        description: 'Es una base de datos basada en documentos que ofrece una gran escalabilidad y flexibilidad'
    },
    {
        nombre: 'Redis',
        img: 'assets/redis.svg',
        description: 'Es una base de datos almacenada en memoria, lo que permite altas velocidades en el manejo de información'
    },
    {
        nombre: 'Git',
        img: 'assets/git.svg',
        description: 'Es una herramienta que realiza una función del control de versiones de un sofware',
    },
    {
        nombre: 'Github',
        img: 'assets/github.svg',
        description: 'Es un sistema de gestión de proyectos y control de versiones de código'
    }
]