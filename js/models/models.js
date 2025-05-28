

//Primera historia de usuario, crear la clase template//

class Template {
    constructor(titulo, mensaje, hashtag){
        this.titulo = titulo;
        this.mensaje = mensaje;
        this.hashtag = hashtag;
    }
}

const store = {
  plantillas: [
    new Template("Bienvenida", "Hola {nombre}, bienvenido a {empresa}.", "#bienvenida"),
    new Template("Promoción", "¡Aprovecha nuestra oferta especial, solo por hoy!", "#promocion")
  ]
};
