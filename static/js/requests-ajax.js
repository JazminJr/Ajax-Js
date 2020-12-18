    // Llamada al webservice
function callWebService()
{
    $(document).ready (function() {
        $.ajax({
            url: "https://interfaz.cenart.gob.mx/api/video/catalogo/?id_post=28958",
            type: "GET",
            async: true,
            contentType: "text/json; charset=utf-8",
            crossDomain: true,
            dataType: 'jsonp',
            success : function(data) {
                $("#tabla tbody").empty();

                // Extract Vide Clip data
                etl_data = data["0"]['video_videoclip']
                /*
                for (i in etl_data){
                    $('#tabla').append($('<tr>')
                    .append($('<td>').append(etl_data[i]['oden_video']))
                    .append($('<td>').append(etl_data[i]['titulo_video']))
                    .append($('<td>').append(etl_data[i]['imagen_video']))
                    .append($('<td>').append(etl_data[i]['liga_video']))
                    .append($('<td>').append(etl_data[i]['descripcion_video']))
                    .append($('<td>').append(etl_data[i]['capitulos_video']))
                    .append($('<td>').append(etl_data[i]['thumbnails_video']))
                    .append($('<td>').append(etl_data[i]['duration']))
                    .append($('<td>').append(etl_data[i]['keywords']))

                    )
                }*/          

                //var jsonString = JSON.stringify(etl_data) //for testing
                $('#tabla').DataTable( {
                    "data": etl_data,
                    columns: [
                        {"data" : "oden_video"},
                        {"data" : "titulo_video"},
                        {"data" : "imagen_video"},
                        {"data" : "liga_video"},
                        {"data" : "descripcion_video"},  
                        {"data" : "capitulos_video"},  
                        {"data" : "thumbnails_video"},  
                        {"data" : "duration"},  
                        {"data" : "keywords"}           
                    ],
                    "bDestroy": true
                });
            }
        });
    });
}   
