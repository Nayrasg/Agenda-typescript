"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    get calle() {
        return this._calle;
    }
    set calle(calle) {
        this._calle = calle;
    }
    get numero() {
        return this._numero;
    }
    set numero(num) {
        this._numero = num;
    }
    get letra() {
        return this._letra;
    }
    set letra(letra) {
        this._letra = letra;
    }
    get codigoPostal() {
        return this._codigoPostal;
    }
    set codigoPostal(codPos) {
        this._codigoPostal = codPos;
    }
    get poblacion() {
        return this._poblacion;
    }
    set poblacion(poblacion) {
        this._poblacion = poblacion;
    }
    get provincia() {
        return this._provincia;
    }
    set provincia(provincia) {
        this._provincia = provincia;
    }
}
exports.Direccion = Direccion;
