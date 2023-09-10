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
    
];
//Funcion para agregar contacto
function AddContact(id, nombres, apellidos, telefono, ciudad, direccion) {
    for (let i = 0; i < Contactos.length; i++) {
        let contactosId = Contactos[i].id;

        if (contactosId === id) {
            console.log("Este id ya existe en la lista de contactos");
            return null;
        }
    }

    const nuevoContacto = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        ubicaciones: [
            {
                ciudad: ciudad,
                direccion: direccion,
            },
        ],
    };

    Contactos.push(nuevoContacto);
    return nuevoContacto;
}


AddContact(4, "Harry Antonio", "Maguire Tercero", "+50497498464","Choloma","Centro");
// console.log(JSON.stringify(Contactos));

function deleteContacto(id){
    const encontrar = Contactos.find(i=>i.id===id);
    let indice = Contactos.indexOf(encontrar);
    if(indice!=-1){
        let contactoElim = Contactos.splice(indice,1);
    }else{
     console.log("El contacto ya fue eliminado");
    }
    
}
deleteContacto(1)
// console.log(JSON.stringify(Contactos));

function MostrarContactos(){
    for(i=0;i<Contactos.length;i++){
          console.log(Contactos[i]);
    }
}
MostrarContactos();

