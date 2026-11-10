class Libro {
    constructor(titulo, autor, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this._prestado = "Disponible";
    }

    prestar() {
        this._prestado = "Prestado";
    }

    devolver() {
        this._prestado = "Disponible";
    }

    getEstado() {
        return this._prestado;
    }
};

class Biblioteca {
    constructor(nombre) {
        this.nombre = nombre;
        this.libros = [];
    }

    agregarLibro(libro) {
        if (!this.libros.includes(libro)) this.libros.push(libro);
    }

    buscarPorISBN(isbn) {
        return this.libros.find(book=>book.isbn === isbn);
    }

    prestarLibro(isbn) {
        let book = this.buscarPorISBN(isbn);
        if (book) {
            book.prestar();
        }
    }

    devolverLibro() {
        let book = this.buscarPorISBN(isbn);
        if (book) {
            book.devolver();
        }
    }

    mostrarLibros() {
        this.libros.forEach(book=>console.log(`titulo: ${book.titulo}, autor: ${book.autor}, isbn: ${book.isbn}, estado: ${book.getEstado()}`));
    }
};

/*
const libro = new Libro("Cien años de soledad", "Gabriel García Márquez", "11111");
console.log(libro.getEstado()); // "Disponible"
libro.prestar();
console.log(libro.getEstado()); // "Prestado"
*/

/*const biblio = new Biblioteca("Biblioteca Central");
const libro1 = new Libro("1984", "George Orwell", "12345");

biblio.agregarLibro(libro1);
biblio.prestarLibro("12345");
biblio.mostrarLibros();*/