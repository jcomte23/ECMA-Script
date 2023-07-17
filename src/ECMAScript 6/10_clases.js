/*
|--------------------------------------------------------------------------
| JS CLASICO
|--------------------------------------------------------------------------
*/
function User(_name, _age) {
    this.name = _name || "usuario";
    this.age = _age || 0;
    this.saludar();
}

User.prototype.saludar = function () {
    console.log("hola " + this.name + " es un placer saludarte");
};

Object.defineProperty(User.prototype, "Age", {
    get: function () {
        return this.age;
    },
    set: function (value) {
        this.age = value;
    },
});

var usuario = new User("javier", 50);
console.log(usuario.Age);
usuario.Age = 25;
console.log(usuario.Age);

/*
|--------------------------------------------------------------------------
| ECMAScript 
|--------------------------------------------------------------------------
*/

class user {

    constructor(_name = "usuario", _age = 0) {
        console.log("bienvenido")
        this.name = _name
        this.age = _age
        this.saludar()
    }

    saludar() {
        console.log(`hola ${this.name} es un placer saludarte`)
    }

    // Getter de la edad
    get Age() {
        return this.age;
    }

    // Setter de la edad
    set Age(value) {
        this.age = value;
    }
}

const usuario = new user("javier", 50)
console.log(usuario.Age)
usuario.Age = 25
console.log(usuario.Age)
