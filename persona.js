"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    //metodo constructor. Se llama a este metodo cada vez que se crea una instancia. Quitamos guin bajo para que no coolisione con las propiedades de arriba
    constructor(nombre, apellidos, edad, dni, cumpleanos, colorFavortito, sexo, direcciones, mails, telefonos, notas) {
        this._direcciones = [];
        this._mails = [];
        this._telefonos = [];
        //this hace referencia a persona
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = colorFavortito;
        this._sexo = sexo;
        this._direcciones.push(direcciones);
        this._mails.push(mails);
        this._telefonos.push(telefonos);
        this._notas = notas;
    }
    //establcemos set y get
    set nombre(nom) {
        this._nombre = nom;
    }
    get nombre() {
        return this._nombre;
    }
    set apellidos(ape) {
        this._apellidos = ape;
    }
    get apellidos() {
        return this._apellidos;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get edad() {
        return this._edad;
    }
    set dni(dni) {
        this._dni = dni;
    }
    get dni() {
        return this._dni;
    }
    set cumple(cumple) {
        this._cumpleanos = cumple;
    }
    get cumple() {
        return this._cumpleanos;
    }
    set colorFav(colorFav) {
        this._colorFavorito = colorFav;
    }
    get colorFav() {
        return this._colorFavorito;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(sex) {
        this._sexo = sex;
    }
    get direcciones() {
        return this._direcciones;
    }
    set direcciones(dir) {
        this._direcciones = dir;
    }
    get mails() {
        return this._mails;
    }
    set mails(mail) {
        this._mails = mail;
    }
    get telefonos() {
        return this._telefonos;
    }
    set telefonos(tel) {
        this._telefonos = tel;
    }
    get notas() {
        return this._notas;
    }
    set notas(nota) {
        this._notas = nota;
    }
}
exports.Persona = Persona;
