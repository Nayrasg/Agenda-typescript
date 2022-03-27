import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Persona } from "./persona";
import { Telefono } from "./telefono";

let per: Persona[] = []

//creamos las personas
per.push(
    new Persona(
      "Violeta",
      "Ruiz",
      27,
      "54081234F",
      "03/12/99",
      "rojo",
      "M",
      new Direccion("Aloha", 3, 4, "b", 12345, "Dierhagen", "Ribnitz"),
      new Mail("Trabajo", "violetaruiz@hotmail.com"),
      new Telefono("Movil", 680569834),
      "Se encuentra en el extranjero"
    )
  );
  
  per.push(
    new Persona(
      "Pedro",
      "Lopez",
      50,
      "12345678H",
      "13/02/1971",
      "rosado",
      "H",
      new Direccion("Miraflores", 1, 1, "a", 54321, "La Laguna", "Tenerife"),
      new Mail("Personal", "pedrolopez@hotmail.es"),
      new Telefono("Fijo", 922312356),
      "Empresa de colchones"
    )
  );
  
  per.push(
    new Persona(
      "Sonia",
      "Gomez",
      19,
      "123456797P",
      "11/05/2009",
      "azul",
      "M",
      new Direccion("Chumberas", 9, 6, "c", 38107, "Las Palmas", "Gran Canaria"),
      new Mail("Personal", "soniagomez@gmail.com"),
      new Telefono("Movil", 612345678),
      "Hermana Violeta"
    )
  );

  //mostramos las personas.
for (let i = 0; i < per.length; i++) {
    console.log(per[i]);
  }

  //buscamo la persona mediante el dni
let buscarDni: Persona = per.filter(
    (pe) => pe.dni == "123456797P"
  )[0];
  //editamos la direccion
  let nuevaDireccion: Direccion = new Direccion(
    "Camoti",
    7,
    1,
    "a",
    30109,
    "Morro Jable",
    "Fuerteventura"
  );
  //guardamos la direccion
  buscarDni.direcciones.pop();
  buscarDni.direcciones.push(nuevaDireccion);
 
  let nuevoMail: Mail = new Mail("Trabajo", "gomezsonia@gmail.es");
  buscarDni.mails.pop();
  buscarDni.mails.push(nuevoMail);
  
  let nuevoTelefono: Telefono = new Telefono("Fijo", 928674532);
  buscarDni.telefonos.pop();
  buscarDni.telefonos.push(nuevoTelefono);

  //mostramosde de nuevo las personas personas.
  for (let i = 0; i < per.length; i++) {
    console.log(per[i]);
  }