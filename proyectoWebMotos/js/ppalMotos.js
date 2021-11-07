//*********************************** MODULO MOTOS ********************************//
/**
    Function:       traerInformacionMotos()
    Description:    Permite traer información de las motos almacenadas en la BdD
 */
    function traerInformacionMotos() {
        $.ajax({
            url: "http://152.70.212.97:8080/api/Motorbike/all",
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                pintarRespuestaMotos(respuesta);
            }
        });
    }
    
    /**
        Function:       pintarRespuestaMotos()
        Description:    Permite mostrar información de las motos almacenadas en la BdD
     */
    function pintarRespuestaMotos(respuesta) {
        let myTable = "<table class='default' border='1'>";
        myTable += "<col span='2' background-color: lightblue><col> "
        myTable += "<tr>";
        myTable += "<th scope='row'>ID</th>";
        myTable += "<th>NOMBRE</th>";
        myTable += "<th>MARCA</th>";
        myTable += "<th>MODELO</th>";
        myTable += "<th>ID_CATEGORÍA</th>";
        myTable += "<th>DESCRIPCIÓN</th>";
        myTable += "</tr>";
        for (i = 0; i < respuesta.length; i++) {
            myTable += "<tr>";
            myTable += "<td>" + respuesta[i].id + "</td>";
            myTable += "<td>" + respuesta[i].name + "</td>";
            myTable += "<td>" + respuesta[i].brand + "</td>";
            myTable += "<td>" + respuesta[i].year + "</td>";
            myTable += "<td>" + respuesta[i].categoryId + "</td>";
            myTable += "<td>" + respuesta[i].description + "</td>";
            myTable += "<td> <button onclick='borrarMoto(" + respuesta[i].id + ")'><img class='button-img' src='./ico/btnEliminar.png'></button>";
            myTable += "</tr>";
        }
        myTable += "</table>";
        $("#resultadoMotos").html(myTable);
    }
    
    /**
        Function:       guardarInformacionMotos()
        Description:    Permite guardar información de las motos en la BdD
     */
    function guardarInformacionMotos() {
        let var3 = {
            name: $("#Mname").val(),
            brand: $("#Mbrand").val(),
            year: $("#Myear").val(),
            categoryId: $("#McategoryId").val(),
            description: $("#Mdescription").val(),
        };
        //console.log("(api/Moto/save) -> "+$("#Mname").val()+" - "+$("#Mbrand").val()+" - "+$("#Myear").val()+" - "+$("#McategoryId").val()+" - "+" - "+$("#Mdescription").val());
        console.log("(api/Moto/save) -> "+$("#McategoryId").val())
        $.ajax({
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            dataType: 'JSON',
            data: JSON.stringify(var3),
            url: "http://152.70.212.97:8080/api/Motorbike/save",
            success: function (response) {
                console.log(response);
                console.log("(api/Moto/save) -> Registro almacenado correctamente");
                alert("Registro almacenado correctamente");
                window.location.reload()
            },
            error: function (jqXHR, textStatus, errorThrown) {
                window.location.reload()
                alert("El registro NO fué almacenado correctamente");
            }
        });
    }

    /**
        Function:       borrarMoto()
        Description:    Permite eliminar información de una moto en la BdD
     */
    function borrarMoto(idElemento) {
        let myData = {
            id: idElemento
        };
        let dataToSend = JSON.stringify(myData);
        $.ajax({
            url: "http://152.70.212.97:8080/Motorbike/Moto/"+idElemento,
            type: "DELETE",
            data: dataToSend,
            contentType: "application/JSON",
            datatype: "JSON",
            success: function (respuestaMotos) {
                $("#resultadoMotos").empty();
                traerInformacionMotos();
                alert("Se ha Eliminado la moto correctamente.")
            }
        });
    }

//*********************************** MODULO CLIENTES ********************************//
/**
    Function:       traerInformacionClientes()
    Description:    Permite traer información de los clientes almacenadas en la BdD
 */
function traerInformacionClientes() {
    $.ajax({
        url: "http://152.70.212.97:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

/**
    Function:       pintarRespuestaClientes()
    Description:    Permite mostrar información de los clientes almacenadas en la BdD
 */
function pintarRespuestaClientes(respuesta) {
    let myTable = "<table class='default' border='1'>";
    myTable += "<col span='2' background-color: lightblue><col> "
    myTable += "<tr>";
    myTable += "<th scope='row'>ID</th>";
    myTable += "<th>CORREO</th>";
    myTable += "<th>PASSWORD</th>";
    myTable += "<th>NAME</th>";
    myTable += "<th>AGE</th>";
    myTable += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].id + "</td>";
        myTable += "<td>" + respuesta[i].email + "</td>";
        myTable += "<td>" + respuesta[i].password + "</td>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].age + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoClientes").html(myTable);
}

/**
    Function:       guardarInformacionClientes()
    Description:    Permite almacenar información de los clientes en la BdD
 */
function guardarInformacionClientes() {
    let var4 = {
        email: $("#CLemail").val(),
        password: $("#CLpassword").val(),
        name: $("#CLname").val(),
        age: $("#CLage").val(),
    };
    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        url: "http://152.70.212.97:8080/api/Client/save",
        success: function (response) {
            console.log(response);
            console.log("Registro almacenado correctamente");
            alert("Registro almacenado correctamente");
            window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("El registro NO fué almacenado correctamente");
        }
    });
}

//*********************************** MODULO CATEGORIAS ********************************//    
/**
    Function:       traerInformacionCategorias()
    Description:    Permite traer información de las categrías almacenadas en la BdD
 */
    function traerInformacionCategorias() {
        $.ajax({
            url: "http://152.70.212.97:8080/api/Category/all",
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                pintarRespuestaCategorias(respuesta);
            }
        });
    }
    
    /**
        Function:       pintarRespuestaCategorias()
        Description:    Permite mostrar la información en una tabla
     */
        function pintarRespuestaCategorias(respuesta) {
        let myTable = "<table class='default' border='1'>";
        myTable += "<col span='2' background-color: lightblue><col> "
        myTable += "<tr>";
        myTable += "<th scope='row'>ID</th>";
        myTable += "<th>NOMBRE</th>";
        myTable += "<th>DESCRIPCIÓN</th>";
        myTable += "</tr>";
        for (i = 0; i < respuesta.length; i++) {
            myTable += "<tr>";
            myTable += "<td>" + respuesta[i].id + "</td>";
            myTable += "<td>" + respuesta[i].name + "</td>";
            myTable += "<td>" + respuesta[i].description + "</td>";
            myTable += "</tr>";
        }
        myTable += "</table>";
        $("#resultadoCategorias").html(myTable);
    }
    
    /**
        Function:       guardarInformacionCategorias()
        Description:    Permite almacenar información de categorias en la BdD
     */
    function guardarInformacionCategorias() {
        let var2 = {
            name: $("#Cname").val(),
            description: $("#Cdescription").val()
        };
        $.ajax({
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            dataType: 'JSON',
            data: JSON.stringify(var2),
            url: "http://152.70.212.97:8080/api/Category/save",
            success: function (response) {
                console.log(response);
                console.log("Registro almacenado correctamente");
                alert("Registro almacenado correctamente");
                window.location.reload()
            },
            error: function (jqXHR, textStatus, errorThrown) {
                window.location.reload()
                alert("El registro NO fué almacenado correctamente");
            }
        });
    }

    //*****************************************************************************************//
    //************************************** MODULO MENSAJES **********************************//
    //*****************************************************************************************//
    /**
        Function:       traerInformacionMensajes()
        Description:    Permite traer información de los Mensajes almacenados en la BdD
    */
    function traerInformacionMensajes() {
        $.ajax({
            url: "http://152.70.212.97:8080/api/Message/all",
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                pintarRespuestaMensajes(respuesta);
            }
        });
    }

    function autoInicioRelacionCliente(){
        $.ajax({
            url:"http://152.70.212.97:8080/api/Client/all",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                let $select = $("#select-client");
                $.each(respuesta, function (id, name) {
                    $select.append('<option value='+name.idClient+'>'+name.name+'</option>');
                }); 
            }
        })
    }

    function autoInicioMoto(){
        $.ajax({
            url:"http://152.70.212.97:8080/api/Motorbike/all",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                let $select = $("#select-moto");
                $.each(respuesta, function (id, name) {
                    $select.append('<option value='+name.id+'>'+name.name+'</option>');
                }); 
            }
        })
    }

    /**
        Function:       pintarRespuestaMensajes()
        Description:    Permite mostrar la información de Mensajes en una tabla
     */
        function pintarRespuestaMensajes(respuesta) {
        let myTable = "<table class='default' border='1'>";
        myTable += "<col span='2' background-color: lightblue><col> "
        myTable += "<tr>";
        myTable += "<th scope='row'>ID</th>";
        myTable += "<th>TEXTO DEL MENSAJE</th>";
        myTable += "<th>MOTO</th>";
        myTable += "<th>CLIENTE</th>";
        myTable += "</tr>";
        for (i = 0; i < respuesta.length; i++) {
            myTable += "<tr>";
            myTable += "<td>" + respuesta[i].idMessage + "</td>";
            myTable += "<td>" + respuesta[i].messageText + "</td>";
            myTable+="<td>"+respuesta[i].motorbike.name+"</td>";
            myTable+="<td>"+respuesta[i].client.name+"</td>";
            myTable+="<td> <button onclick=' actualizarInformacionMensaje("+respuesta[i].idMessage+")'>Actualizar</button>";
            myTable+="<td> <button onclick='borrarMensaje("+respuesta[i].idMessage+")'>Borrar</button>";
            myTable += "</tr>";
        }
        myTable += "</table>";
        $("#resultadoMensajes").html(myTable);
    }

    /**
        Function:       guardarInformacionMensajes()
        Description:    Permite almacenar información de Mensajes en la BdD
     */
    function guardarInformacionMensajes(){
        if ($("#MSmessagetext").val().length==0 ){
            alert("Todos los campos son obligatorios");
        }else{
            let var2 = {
                messageText:$("#MSmessagetext").val(),
                motorbike:{id: +$("#select-moto").val()},
                client:{idClient: +$("#select-client").val()},
                };
                console.log(var2);
                $.ajax({
                type:'POST',
                contentType: "application/json; charset=utf-8",
                dataType: 'JSON',
                data: JSON.stringify(var2),
                url:"http://152.70.212.97:8080/api/Message/save",
                success:function(response) {
                        console.log(response);
                    console.log("Se guardo correctamente");
                    alert("Se guardo correctamente");
                    window.location.reload()
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    window.location.reload()
                    alert("No se guardo correctamente");
                }
                });
        }
    }
 
    function actualizarInformacionMensaje(idElemento){
        let myData={
            idMessage:idElemento,
            messageText:$("#messagetext").val(),
            skate:{id: +$("#select-moto").val()},
            client:{idClient: +$("#select-client").val()},
        };
        console.log(myData);
        let dataToSend=JSON.stringify(myData);
        $.ajax({
            url:"http://152.70.212.97:8080/api/Message/update",
            type:"PUT",
            data:dataToSend,
            contentType:"application/JSON",
            datatype:"JSON",
            success:function(respuesta){
                $("#resultado").empty();
                $("#messagetext").val("");
                autoInicioMensajes();
                alert("se ha Actualizado correctamente el Mensaje")
            }
        });
    }

    function borrarMensaje(idElemento){
        let myData={
            idMessage:idElemento
        };
        let dataToSend=JSON.stringify(myData);
        console.log(dataToSend);
        $.ajax({
            url:"http://152.70.212.97:8080/api/Message/"+idElemento,
            type:"DELETE",
            data:dataToSend,
            contentType:"application/JSON",
            datatype:"JSON",
            success:function(respuesta){
                $("#resultado").empty();
                autoInicioMensajes();
                alert("Se ha Eliminado.")
            }
        });
    }

    //*****************************************************************************************//
    //*********************************** MODULO RESERVACIONES ********************************//
    //*****************************************************************************************//
    /**
        Function:       traerInformacionReservaciones()
        Description:    Permite traer información de las Reservaciones almacenados en la BdD
    */
        function traerInformacionReservaciones() {
            $.ajax({
                url: "http://152.70.212.97:8080/api/Reservation/all",
                type: "GET",
                datatype: "JSON",
                success: function (respuesta) {
                    console.log(respuesta);
                    pintarRespuestaReservaciones(respuesta);
                }
            });
        }
        
        /**
            Function:       pintarRespuestaReservaciones()
            Description:    Permite mostrar la información de Reservaciones en una tabla
         */
            function pintarRespuestaReservaciones(respuesta) {
            let myTable = "<table class='default' border='1'>";
            myTable += "<col span='2' background-color: lightblue><col> "
            myTable += "<tr>";
            myTable += "<th scope='row'>ID RESERVACION</th>";
            myTable += "<th>FECHA INICIO</th>";
            myTable += "<th>FECHA DEVOLUCION</th>";
            myTable += "<th>STATUS</th>";
            myTable += "<th>MOTO</th>";
            myTable += "<th>CLIENTE</th>";
            myTable += "</tr>";
            for (i = 0; i < respuesta.length; i++) {
                myTable += "<tr>";
                myTable+="<td>"+respuesta[i].startDate+"</td>";
                myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
                myTable+="<td>"+respuesta[i].status+"</td>";
                myTable+="<td>"+respuesta[i].motorbike.name+"</td>";
                myTable+="<td>"+respuesta[i].client.name+"</td>";
                myTable+='<td><button  onclick="borrarReservation(' + respuesta[i].idReservation + ')">Borrar Reserva!</button></td>';
                myTable+='<td><button  onclick="cargarDatosReservation(' + respuesta[i].idReservation + ')">Editar Reserva!</button></td>';
                myTable+='<td><button  onclick="actualizarReservation(' + respuesta[i].idReservation + ')">Actualizar Reserva!</button></td>';
                myTable += "</tr>";
            }
            myTable += "</table>";
            $("#resultadoReservaciones").html(myTable);
        }

        /**
            Function:       guardarInformacionReservaciones()
            Description:    Permite almacenar información de Reservaciones en la BdD
        */
        function guardarInformacionReservaciones() {
            if($("#RVstartDate").val().length == 0 || $("#RVdevolutionDate").val().length == 0 || $("#RVstatus").val().length == 0){
                alert("Todos los campos son Obligatorios")
            }else{  
                let elemento = {
                    startDate: $("#RVstartDate").val(),
                    devolutionDate: $("#RVdevolutionDate").val(),
                    status: $("#RVstatus").val(),
                    skate:{id: +$("#select-moto").val()},
                    client:{idClient: +$("#select-client").val()},
                }
                let dataToSend = JSON.stringify(elemento);
                $.ajax({
                    type: "POST",
                    contentType: "application/json",
                    url:"http://152.70.212.97:8080/api/Reservation/save",
                    data: dataToSend,
                    datatype: "json",
                    success: function (response) {
                        console.log(response);
                        $("#resultado5").empty();
                        $("#startDate").val("");
                        $("#devolutionDate").val("");
                        $("#status").val("");
                        alert("Se ha guardado Correctamente!")
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert("No se guardo Correctamente!")
                    }
                });
            }
        }

        /**
            Function:       eliminarInformacionReservaciones()
            Description:    Permite eliminar información de Reservaciones en la BdD
         */
        function eliminarReservacion(idElemento) {
            let elemento = {
                id: idElemento
            }
            let dataToSend = JSON.stringify(elemento);
            $.ajax(
                {
                    dataType: 'json',
                    data: dataToSend,
                    url:"http://152.70.212.97:8080/api/Reservation/"+idElemento,
                    type: 'DELETE',
                    contentType: "application/JSON",
                    success: function (response) {
                        console.log(response);
                        $("#miListaReservation").empty();
                        alert("se ha Eliminado Correctamente!")
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert("No se Elimino Correctamente!")
                    }
                });
        }

        //Capturar informacion para Actualizar
        function cargarDatosReservation(id) {
            $.ajax({
                dataType: 'json',
                url:"http://152.70.212.97:8080/api/Reservation/"+id,
                type: 'GET',
                success: function (response) {
                    console.log(response);
                    var item = response;
                    $("#RVstartDate").val(item.startDate);
                    $("#RVdevolutionDate").val(item.devolutionDate);
                    $("#RVstatus").val(item.status);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                }
            });
        }

        //Manejador PUT
        function actualizarReservation(idElemento) {
            if($("#RVstartDate").val().length == 0 || $("#RVdevolutionDate").val().length == 0 || $("#RVstatus").val().length == 0){
                alert("Todos los campos deben estar llenos")
            }else{
                let elemento = {
                    idReservation: idElemento,
                    startDate: $("#RVstartDate").val(),
                    devolutionDate: $("#RVdevolutionDate").val(),
                    status: $("#RVstatus").val(),
                    skate:{id: +$("#select-moto").val()},
                    client:{idClient: +$("#select-client").val()},
                }
                let dataToSend = JSON.stringify(elemento);
                $.ajax({
                    datatype: 'json',
                    data: dataToSend,
                    contentType: "application/JSON",
                    url:"http://152.70.212.97:8080/api/Reservation/update",
                    type: "PUT",
                    success: function (response) {
                        console.log(response);
                        $("#miListaReservation").empty();
                        alert("se ha Actualizado Correctamente!")
                        //Limpiar Campos
                        $("#RVresultado5").empty();
                        $("#RVstartDate").val("");
                        $("#RVdevolutionDate").val("");
                        $("#RVstatus").val("");
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert("No se Actualizo Correctamente!")
                    }
                });
            }
        }

    //*****************************************************************************************//
    //*********************************** MODULO REPORTES ********************************//
    //*****************************************************************************************//
    /**
        Function:       traerInformacionReservaciones()
        Description:    Permite traer información de las Reservaciones almacenados en la BdD
    */
    function traerReporteStatus(){
        console.log("test");
        $.ajax({
            url:"http://152.70.212.97:8080/api/Reservation/report-status",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuestaStatus(respuesta);
            }
        });
    }

    function pintarRespuestaStatus(respuesta){
        let myTable="<table>";
        myTable+="<tr>";
            myTable+="<th>completadas</th>";
            myTable+="<td>"+respuesta.completed+"</td>";
            myTable+="<th>canceladas</th>";
            myTable+="<td>"+respuesta.cancelled+"</td>";
            myTable+="</tr>";
        myTable+="</table>";
        $("#reporteStatus").html(myTable);
    }

    function traerReporteDate(){
        var fechaInicio = document.getElementById("RstarDate").value;
        var fechaCierre = document.getElementById("RdevolutionDate").value;
        console.log(fechaInicio);
        console.log(fechaCierre);
            $.ajax({
                url:"http://152.70.212.97:8080/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
                type:"GET",
                datatype:"JSON",
                success:function(respuesta){
                    console.log(respuesta);
                    pintarRespuestaDate(respuesta);
                }
            });
        }

        function pintarRespuestaDate(respuesta){
            let myTable="<table>";
            myTable+="<tr>";
            for(i=0;i<respuesta.length;i++){
            myTable+="<th>total</th>";
                myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
                myTable+="<td>"+respuesta[i].startDate+"</td>";
                myTable+="<td>"+respuesta[i].status+"</td>";
                myTable+="</tr>";
            }
            myTable+="</table>";
            $("#respuestaDate").html(myTable);
        }
    
        function traerReporteClientes(){
            $.ajax({
                url:"http://152.70.212.97:8080/api/Reservation/report-clients",
                type:"GET",
                datatype:"JSON",
                success:function(respuesta){
                    console.log(respuesta);
                    pintarReporteClientes(respuesta);
                }
            });
        }

        function pintarReporteClientes(respuesta){
            let myTable="<table>";
            myTable+="<tr>";
            for(i=0;i<respuesta.length;i++){
            myTable+="<th>total</th>";
                myTable+="<td>"+respuesta[i].total+"</td>";
                myTable+="<td>"+respuesta[i].client.name+"</td>";
                myTable+="<td>"+respuesta[i].client.email+"</td>";
                myTable+="<td>"+respuesta[i].client.age+"</td>";
                myTable+="</tr>";
            }
            myTable+="</table>";
            $("#reporteClientes").html(myTable);
        }
    