//Definició de la variable dades
const dades = [
    {
        nick:"Joel",
        password:"joel",
        avatar:"avatar1.png",
        points:8,
        date:" ",
        nacimiento:" "
    },
    {
        nick:"Ruben",
        password:"ruben",
        avatar:"avatar2.png",
        points:9,
        date:" ",
        nacimiento:" "
    },
    {
        nick:"Sergio",
        password:"sergio",
        avatar:"avatar3.png",
        points:4,
        date:" ",
        nacimiento:" "
    },
    {
        nick:"Carlos",
        password:"carlos",
        avatar:"avatar3.png",
        points:7,
        date:" ",
        nacimiento:" "
    },
    {
        nick:"Alex",
        password:"alex",
        avatar:"avatar2.png",
        points:8,
        date:" ",
        nacimiento:" "
    },
]
console.log(dades)

//Exercici 2 - mostraTaula

    //Definició de la funció mostraUsuari


    function mostraTaula(dades){ //creamos  funcion 
        console.log("Exercici 2 mostraTaula")

        //definimos la variable en la cual queremos ingresar los datos
        var text = `  
        <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nick</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Puntos</th>
                    </tr>
                </thead>
                <tbody>`
                for(let index=0;index<dades.length;index++){ //creamos un bucle para que recorra todo los objetos del array dades
                    text+=` 
                        <tr>
                            <th scope="row">${index}</th>  
                            <td>${dades[index].nick}</td>
                            <td><img class="avatar" src="images/avatares/${dades[index].avatar}" alt="${dades[index].avatar}"></td>
                            <td>${dades[index].points}</td>
                            <td>${dades[index].date}</td>
                            <td>Tienes ${dades[index].nacimiento} anyos</td>
                        </tr>`
                    } //lo que hemos hecho dentro de los tr ha sido llamar al array, a través de un puntero (index) que recorría la misma y la cual entraba en los objetos para escoger la información seleccionada. 
                text+=`       
                </tbody>
        </table>  
        `
        return text //que la función mostrarTaula me devuelva la variable text
    }
    //Exercici 3, 4 i 5 - mostraUsuari
    function mostraUsuari(){ //creamos la funcion mostraUsuari
        event.preventDefault() //esto sirve para cancelar eventos (en este caso la actualización de la página)
        var dadesUsuari = { //creamos una variable con la que llamaremos a objetos 
            nick: document.querySelector("#nick").value, //cogemos el valor de la propiedad nick de los objetos del array dades
            password: document.querySelector("#pass").value, //cogemos el valor de la propiedad password de los objetos del array dades
            avatar: document.querySelector("#avatar").value, //cogemos el valor de la propiedad avatar de los objetos del array dades
            points:0 //le ponemos un valor a points
        }
        dades.push(dadesUsuari) //actualizar y añadir en la array datos
        console.log(dadesUsuari)  //sacar por consola
        document.querySelector("#ranking").innerHTML = mostraTaula(dades) //escoge el ID Ranking, y el inner lo que hace es meter información dentro del id seleccionado, lo que hará aquí es que al meter nuevos usuarios, estos serán guardados y se verán en la tabla
    }
    function validaNouUsuari(usuari){ //creamos la funcion de validaNouUsuari
        var nickLength = usuari.nick.length // creamos una varaiable que nos mida la longitud del nick del usuario puesto en el registro
        var passLength = usuari.password.length // creamos una varaiable que nos mida la longitud de la contraseña del usuario puesto en el registro

            if(nickLength<3 || nickLength>10){ //condicion de si la longitud del nick es más pequeña de 3 o más grande de 10 nos entre en el if 
                return {
                    error: true, //esto nos servirá como boolean
                    missatge: "El nick no es correcte" //añadimos el mensaje 
                }
            }
            if(passLength<3 || passLength>10){ //condicion de si la longitud de la password es más pequeña de 3 o más grande de 10 nos entre en el if 
                    return {
                        error: true, //esto nos servirá como boolean
                        missatge: ("La contrasenya no és correcte") //añadimos el mensaje 
                    }
            }
            for(let index=0;index<dades.length;index++){ //creamos un bucle que recorra todo el array
                    if(usuari.nick==dades[index].nick){ //con esta condición veremos si el nombre de la base de datos al nuevo introducido son iguales
                        return  {
                            error: true, //esto nos servirá como boolean
                            missatge: "Aquest usuari ja existeix" //añadimos el mensaje 
                        }
            }else{
                return  { //es la parte del else del if de los nicks iguales
                    error: false, //esto nos servirá como boolean
                    missatge: "El usuari amb nick:" + usuari.nick + "sha creat correctament" //añadimos el mensaje 
                }
                
            }
                
                    }
    }         
    function creaUsuariValid(){ //creamos la funcion de creaUsuariValid
        event.preventDefault()//esto sirve para cancelar eventos (en este caso la actualización de la página)
        dadesUsuari = { //creamos una variable con la que llamaremos a objetos 
            nick:modificaNick(document.querySelector("#nick").value), //cogemos el valor de la propiedad nick del objetos dadesUsuari, además lo metemos todo dentro de la funcion de modifcaNick para de esta forna transformar todo los espacios por barras bajas
            password: document.querySelector("#pass").value, //cogemos el valor de la propiedad password del objetos dadesUsuari
            avatar: document.querySelector("#avatar").value, //cogemos el valor de la propiedad avatar del objetos dadesUsuari
            points:0,//le ponemos un valor a points
            date: modificaData2(document.querySelector("#date").value), //llamamos a la funcion de modificaData    
            nacimiento: edat() //pasamos la funcion edat
       }
       
      console.log(dadesUsuari.date);
       
       validar=validaNouUsuari(dadesUsuari) //lo igualamos en una valirable para tema de organización
       alert(validar.missatge) //sacamos los mensajes de los returns
       if(validar.error==false){ //si el boolean es false hará lo que esté dentro de la condición
        dades.push(dadesUsuari) //añadirá los datos a la "base de datos"
        console.log(mostraTaula(dades)); //sacar por consola mostrarTaula(dades), basicamente que nos saqué la tabla con los nuevos datos actualizados y añadidos
       } 
    }

    function validaLogin(usuari) { //creamos la funcion validaLogin
        for(let index=0;index<dades.length;index++){ //creamos un bucle que recorra toda la longitud del array
            if(usuari.nick!=dades[index].nick && usuari.pass==dades[index].password){ //esta condicion nos dice que si el nick del usuario recién añadido es diferente a cualquier usuario de la bd entra
                return  {
                    error: true, //esto nos sirve de boolean
                    missatge: "Aquest usuari no existeix" //mensaje que luego sacaremos
                }
            }
            if(usuari.nick==dades[index].nick && usuari.pass!=dades[index].password){ //esta condicion nos dice que si el nick del usuario recién añadido es igual a cualquier usuario de la bd, pero la password no,entra
                return  {
                    error: true, //esto nos sirve de boolean
                    missatge: "Contrasenya incorrecte" //mensaje que luego sacaremos
                }
            }if(usuari.nick==dades[index].nick && usuari.pass==dades[index].password){ //esta condicion nos dice que si el nick y la password del usuario recién añadido es igual a cualquier de la bd,entra
                return  {
                    error: false, //esto nos sirve de boolean
                    missatge: "Hola "  + usuari.nick  //mensaje que luego sacaremos
                }
                
            }
        }

}
    function login(event){ //creamos la funcion login
        event.preventDefault()//esto sirve para cancelar eventos (en este caso la actualización de la página
        var dadesUsuari=new Object() //creamos una variable y la usamos como nuevo objeto
        dadesUsuari.nick = document.querySelector('#nickLogin').value //igualamos en una variable los valores del nicklogin
        dadesUsuari.pass = document.querySelector('#passLogin').value //igualamos en una variable los valores de passlogin
        var rf = validaLogin(dadesUsuari) //igualamos el validaLogin con los parametros pasados a una variable 
        alert(rf.missatge) //saca en un alert los mensajes que hemos puesto
    }


    function modificaNick (text) { //creamos la funcion de modificar los nicks
        textomodificado=text.replace(/ /g,"_") // de esta manera guardamos en una variable  el texto con los espacios reemplazados por las barras bakas
        textomodificado2=textomodificado.toUpperCase()
        return(textomodificado2) //necesitamos retornar la variable, ya que la funcion esta recibiendo, debe devolver
    }

    function  modificaData(date){ //creamos la funcion modifica data
        const miFecha = new Date(date) //cremaos un date
        const miFecha4 = new Date() //creamos un date
        date=document.querySelector("#date").value; //cogemos el valor del input con id date
        anyo= miFecha.getFullYear(document.querySelector("#date").value) //cogemos el anyo del valor del input
        mes= miFecha.getMonth(document.querySelector("#date").value)+1 //cogemos el mes del valor del input
        dia=miFecha.getDate(document.querySelector("#date").value) //cogemos el dia del valor del input
        horas = dia + "-" + mes + "-" + anyo + " " + miFecha4.getHours() + ":" + miFecha4.getMinutes() + ":" + miFecha4.getSeconds()  //concatenamos todo con las horas minutos y segundos
        fechaActual= horas //lo metemos todo concatenado en la variable de fechaActual
        return(fechaActual) //retornamos la fechaActual
    }

    function modificaData2(date){
        const miFecha2 = new Date(date)  //creamos un date
        const miFecha3 = new Date
        date=document.querySelector("#date").value; //cogemos el valor del input con id date
        anyo= miFecha2.getFullYear(document.querySelector("#date").value) //cogemos el anyo del valor del input
        mes= miFecha2.getMonth(document.querySelector("#date").value)+1 //cogemos el mes del valor del input
        dia=miFecha2.getDate(document.querySelector("#date").value) //cogemos el dia del valor del input
        horas =  miFecha3.getHours() + ":" + miFecha3.getMinutes() + ":" + miFecha3.getSeconds() + " " + anyo + "/" + mes + "/" + dia  //concatenamos todo con las horas minutos y segundos
        fechaActual= horas //lo metemos todo concatenado en la variable de fechaActual
        return(fechaActual) //retornamos la fechaActual
    }
    
    function edat(){
        calendario = document.querySelector('#date').value//recogemos el valor del input
        anyo = new Date(calendario)//creamos un objeto date y lo metemos en una variable, le pasamos parametro de fecha actual
        fechaActual = new Date() //creamos un objeto date y lo metemos en una variable
        let op = fechaActual.getTime() - anyo.getTime(calendario)//restamos en milisegundos
        op= op / (1000*60*60*24)//hacemos los calculos utilizando la resta y reutilizamos la variable op
        op=Math.trunc(op/365)//dividimos entr 365 para obtener los años
        return(op)//devolvemos la variable con los calculos ya realizados
    }