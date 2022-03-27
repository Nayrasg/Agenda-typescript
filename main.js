"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const direccion_1 = require("./direccion");
const mail_1 = require("./mail");
const persona_1 = require("./persona");
const telefono_1 = require("./telefono");
let per = [];
//creamos las personas
per.push(new persona_1.Persona("Violeta", "Ruiz", 27, "54081234F", "03/12/99", "rojo", "M", new direccion_1.Direccion("Aloha", 3, 4, "b", 12345, "Dierhagen", "Ribnitz"), new mail_1.Mail("Trabajo", "violetaruiz@hotmail.com"), new telefono_1.Telefono("Movil", 680569834), "Se encuentra en el extranjero"));
per.push(new persona_1.Persona("Pedro", "Lopez", 50, "12345678H", "13/02/1971", "rosado", "H", new direccion_1.Direccion("Miraflores", 1, 1, "a", 54321, "La Laguna", "Tenerife"), new mail_1.Mail("Personal", "pedrolopez@hotmail.es"), new telefono_1.Telefono("Fijo", 922312356), "Empresa de colchones"));
per.push(new persona_1.Persona("Sonia", "Gomez", 19, "123456797P", "11/05/2009", "azul", "M", new direccion_1.Direccion("Chumberas", 9, 6, "c", 38107, "Las Palmas", "Gran Canaria"), new mail_1.Mail("Personal", "soniagomez@gmail.com"), new telefono_1.Telefono("Movil", 612345678), "Hermana Violeta"));
//mostramos las personas.
for (let i = 0; i < per.length; i++) {
    console.log(per[i]);
}
//buscamo la persona mediante el dni
let buscarDni = per.filter((pe) => pe.dni == "123456797P")[0];
//editamos la direccion
let nuevaDireccion = new direccion_1.Direccion("Camoti", 7, 1, "a", 30109, "Morro Jable", "Fuerteventura");
//guardamos la direccion
buscarDni.direcciones.pop();
buscarDni.direcciones.push(nuevaDireccion);
let nuevoMail = new mail_1.Mail("Trabajo", "gomezsonia@gmail.es");
buscarDni.mails.pop();
buscarDni.mails.push(nuevoMail);
let nuevoTelefono = new telefono_1.Telefono("Fijo", 928674532);
buscarDni.telefonos.pop();
buscarDni.telefonos.push(nuevoTelefono);
//mostramosde de nuevo las personas personas.
for (let i = 0; i < per.length; i++) {
    console.log(per[i]);
}
