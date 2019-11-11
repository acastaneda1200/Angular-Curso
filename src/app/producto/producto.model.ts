export class Producto{
    public nombre: string;
    public descripcion: string;
    public imagenRuta: string

    constructor(name: string, desc:string, imagen: string){
        this.nombre = name;
        this.descripcion = desc;
        this.imagenRuta = imagen;
    }

}