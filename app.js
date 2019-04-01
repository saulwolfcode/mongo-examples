

//muestas las base de datos
show dbs
//muesta la actual
db
//base
use mongoApp
//base interna

//creando usuario
db.createUser({
    name: "saul",
    pwd: "123",
    roles: ["readWrite", "dbAdmin"]
})
//crear una coleccion
db.createCollection("miApp")

show miApp

//insertar un objeto
db.miApp.insert({
    firstName: "saul",
    lasName: "garay"
})
db.miApp.find()
//insertar un arreglo de objetos
db.miApp.insert(
    [{
            firstName: "salam",
            lastName: "saladin"
        },
        {
            firstName: "hasan",
            lastName: "sharan"
        },
        {
            firstName: "hipnos",
            lastName: "thanos"
        },
        {
            firstName: "tesla",
            lastName: "nicolay"
        }
    ]
)
db.miApp.find()
//para buscar por parametros exactos
db.miApp.find({firstName:"hasan"})

//actualizar datos primero lo buscamos luego lo reemplazamos
db.miApp.update(
    {lasName:"garay"},
    {firtsName:"Paul",
    lastName:"garay",
    gender:"male"
}
)
db.miApp.find().pretty()
//es un objeto por es tien que ir com objectId
db.miApp.find({_id: ObjectId("5c9675e10bded5da8a2c145c")})
//actualizamos datos
db.miApp.update({_id: ObjectId("5c9675e10bded5da8a2c145c")},
{
    firtsName:"Paul2",
    lastName:"garay2",
    gender:"male2"
}
)
//directamente para actualizar $set
db.miApp.update({_id: ObjectId("5c9675e10bded5da8a2c145c")},
{
$set: {
    age:45,
    firtsName:"SAMA",
    lastName:"WEB",
    gender:"male"
}
}
)
//para incrementar un dato $inc
db.miApp.update({_id: ObjectId("5c9675e10bded5da8a2c145c")},
{
$inc: {age:5}
}
)
//para para eliminar datos un dato $unset
db.miApp.update({_id: ObjectId("5c9675e10bded5da8a2c145c")},
{
$unset: {age:1}
}
)
//para actualizar datos y agregar con $upsert

db.miApp.update(
    {firstName: 'SAMA'} ,
    {
      firstName: "Studio Wolf",
      lastName: "Code",
      age:3,
      type:"corporation",
      chief:"Saul Alejos"

    },
    { upsert: true}
  )
  //para renombrar propiedades $rename

  db.miApp.update(
    {firstName: "tesla"},
    {
      $rename: {"firstName": "PrimerNombre"}
    }
  )
  //para eliminar datos

  db.miApp.remove(
      {"PrimerNombre":"tesla"}
  )
  // solo uno para remover si tenemos dos datos iguales
    db.miApp.remove(
        {"firtsName": "Paul"},
        {justOne:true}
        )
//para busquedas mas complejas usamos #or


db.miApp.find({
    $or: [{
        "firtsName": "Paul"
    }, {
        "firstName": "salam"
    }]
}
)

//insrtamos datos para trabajar con numeros
db.miApp.insert(

        [
             {name:"Saul",age:34},
             {name:"Salomon",age:44},
             {
                 name: "Saladin",
                 age: 30
             },
             {
                 name: "Sajusin",
                 age: 24
             }
        ]

)
// para hacer busquedas mayor $gt  que o nemor que $lt

db.miApp.find({age:{$lt:20}})
db.miApp.find({age:{$gt:20}})
db.miApp.find({age:{$gt:30, $lt:40}})

//inserta un dato con un sub objeto

db.miApp.insert(
{firstName:"TETU",
    address:{
        city:"London"
    }
}
)
//ahora para buscar dentro de un objeto otro objeto
db.miApp.find({
"address.city":"London"
})
//para busquesdas mas complejas usamos expresiones regulares

db.miApp.find({
    name:{$regex:"Sa"}
})
