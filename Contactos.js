let Contactos = ["Mario Rivas", "Josue Amador", "Maria Ochoa"];
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