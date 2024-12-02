// pagina de stock



const producto = []

function agregar (codigo,nombre, precio,) {
    producto.push({
        codigo,
        nombre,
        precio } )

}

function AisladoraDeCodigo () {
    const CodigoProducto = []

    for (let i = 0; i < producto.length; i++){
        let productom = producto[i]
        CodigoProducto.push(productom.codigo)    

    }
    return CodigoProducto


}

 function AisladoraDeNombre () {
    const nombreProducto = []

    for (let i = 0; i < producto.length; i++){
        let nombrec = producto[i]
        nombreProducto.push(nombrec.nombre)    

    } 

    for (let i = 0; i < nombreProducto.length; i++){
        let nom = []

        
    }
    nom = nombreProducto.join( " ")

        if (nom.length < 1 ) {

            alert("no hay productos en stock")
        } else  alert ("los productos en stock son:" +  " " + nom)
        


    return nombreProducto
    


}


 function eliminar (codigoborrar) {
    if (producto.length < 1) {
        alert("No hay Productos en Stock")
        

    } else {
        let CodigoProducto = AisladoraDeCodigo()
        console.log(CodigoProducto)

        let borracion = CodigoProducto.indexOf(codigoborrar)
        if (borracion === -1 ){
                alert("ese producto no esta")

        } else {
            producto.splice(borracion, 1)
            
            alert ("Se borro el producto " + codigoborrar)
            console.log(CodigoProducto)
        } 
    } return 

}

function especifico(nombre) {
    
    const ProductoEncontrado = producto.find(p => p.nombre === nombre);
    
    if (ProductoEncontrado) {
        alert( " Codigo del producto: " + ProductoEncontrado.codigo + "\n " + "Nombre del producto: " + ProductoEncontrado.nombre + "\n " + "Precio del producto: " +"$ " + ProductoEncontrado.precio )     
         

    } else {
        alert("Producto no encontrado");
    }
}

 function menu () {
  
        let ingresar = Number(prompt("Bienvenidos al Centro de Stock de Productos \n Que desea realizar? \n 1) Agregar producto\n 2) Eliminar producto \n 3) Ver Stock \n 4) Buscar un producto especifico \n 5) Salir  ")) 

        let bandera = true

        while (bandera){

            switch (ingresar) {

                case 1: 
                let codigo = prompt("Ingrese el codigo del producto")
                let nombre = prompt("Ingrese el nombre del producto")
                let precio = Number(prompt("Ingrese el precio del producto"))
                agregar(codigo, nombre, precio)
                bandera = confirm("Quiere seguir operando?")
                
                break
            
                case 2: 
                let codigoborrar = prompt("Ingrese el codigo del producto a borrar")
                eliminar (codigoborrar)
                
                
                bandera = confirm("Quiere seguir operando?")
                
                break
                
                case 3: 
                AisladoraDeNombre()


                bandera = confirm("Quiere seguir operando?")
                
                break


                case 4:

                let codigos = (prompt("Ingrese el nombre del producto a buscar")) 

                especifico(codigos)

                bandera = confirm("Quiere seguir operando?")
                
                break

                case 5:
                    bandera=false
                    break
                
                default:
                    alert("esa opcion no es correcta")
                    bandera = confirm("Quiere seguir operando?")    

               } 

               
               if (bandera) {
                ingresar = Number(prompt("Bienvenidos al Centro de Stock de Productos \n Que desea realizar? \n 1) Agregar producto\n 2) Eliminar producto \n 3) Ver Stock \n 4) Buscar un producto especifico \n 5) Salir  "))    
               }
        }
}

menu()

