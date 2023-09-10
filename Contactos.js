let Contactos = [
    {
        id:1,
        nombres: "Marco Antonio",
        apellidos: "Lopez Arellano",
        telefono: +50498698754,
        ubicaciones: [
            {
                ciudad: "San Pedro Sula",
                direccion: "Centro de la Ciudad"
            }
        ]
    },
    {
        id:2,
        nombres: "Francisco David",
        apellidos: "Chavarria Hernandez",
        telefono: +50498544754,
        ubicaciones: [
            {
                ciudad: "Lima",
                direccion: "Frente al Mercado"
            }
        ] 
    },
    {
         id:3,
        nombres: "Maria Luisa",
        apellidos: "Fernandez Dubon",
        telefono: +50499698564,
        ubicaciones: [
            {
                ciudad: "Progreso",
                direccion: "Enfrente de la UTH"
            }
        ]
    }
    
]
//Funcion para agregar contacto
let contacto = "";
function AddContact (contacto){
    Contactos.push (contacto);
    return Contactos
}
AddContact("Jose Lopez");
AddContact("Andrea Ruiz");
AddContact("Luisa Ochoa");
AddContact("Franklin Richard");

//Funcion para eliminar Contacto
function Delete (contacto){
    let posContacto = Contactos.indexOf(contacto);
    let ContactoEliminado = Contactos.splice(posContacto,1);
    return ContactoEliminado;
}
console.log(`El contacto eliminado fue ${Delete("Jose Lopez")}`);

//Funcion para imprimir en consola
function MostrarContactos(){
    for(i=0;i<Contactos.length;i++){
          console.log(Contactos[i]);
    }
}
MostrarContactos();