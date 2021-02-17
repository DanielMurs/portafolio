
export interface Proyecto {
    name: string;
    img: string;
    description: string;
    url: string;
}

export const proyectos: Proyecto[] = [
    {
        name: 'Chat-web',
        img: 'assets/chat.jpg',
        description: 'una aplicación web para enviar mensajes instantaneos, inspirada en Telegram',
        url: 'https://chat-app-cyan.vercel.app/'
    },
    {
        name: 'Fotogram',
        img: 'assets/fotogram.jpg',
        description: 'en este sitio podrás compartir, ver y reaccionar a imagenes y fotos tuyas y de los demas usuario',
        url: 'https://fotogram.vercel.app'
    },
    {
        name: 'Mi clima',
        img: 'assets/clima.jpg',
        description: '¿quieres conocer el clima actual y de los siguientes dias en tu zona?, desde este sitio podrás hacerlo facilmente',
        url: 'https://mi-clima.vercel.app/'
    },
    {
        name: 'Yo me enseño (en desarrollo)',
        img: 'assets/cursos.jpg',
        description: 'Crece como desarrollador con los mejores cursos de Youtube',
        url: 'https://yo-me-enseno.herokuapp.com/'
    }
]
