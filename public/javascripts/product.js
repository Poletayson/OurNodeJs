
// $( document ).ready(function() {
//    console.log( "ready!" );
//    alert("ready!");
// });

function changeAmountMaterial ( index ) {
    let dataString = "id=" + index +"&amount=" + document.getElementById(index).value ;

    $.ajax({
        type: "POST",
        url: "/product/" + "1" + "/editPosition",
        data: dataString,
        cache: false,
        success: function(html)
        {
            alert(html);
            let result = html.toString();
            if( result.localeCompare("Element deleted!") == 0) {

                let el = document.getElementById('position' + index);
                el.parentNode.removeChild(el);

            }
        }
    });

}


function addInMap( idMaterial, idMap ){
    let dataString = "idMaterial=" + idMaterial +"&idMap=" + idMap ;

    $.ajax({
        type: "POST",
        url: "/product/" + "materials" + "/addMaterialInTechnologyMap",

        url: "/product/" + "1" + "/addMaterial",

        data: dataString,
        cache: false,
        success: function(html)
        {
            document.getElementById("map").innerHTML += html;
        }
    });
}


function saveInfo( id ) {

    console.log("Зашли сюда");

    var exp = require("../../app.js");
    var img = document.getElementById("img").value;
    var title = document.getElementById("title").value;
    var code = document.getElementById("code").value;
    var balance = document.getElementById("balance").value;
    var description = document.getElementById("description").value;


    // router.get('/', function(req, res, next) {

        Product.findOne({ _id: req.params.idd }, function(err, prod) {
            //console.log(req.query);
            console.log("Функция сохранения для ",prod);
            prod.img = img;

            prod.save(function(err){
                //mongoose.disconnect();  // отключение от базы данных

                if(err) return console.log(err);
                console.log("Сохранен объект", prod);
            });

        });


    // product.save(function(err){
//     mongoose.disconnect();  // отключение от базы данных
//
//     if(err) return console.log(err);
//     console.log("Сохранен объект", product);
// });




    // });



    // let dataString = "title=" + title + "&code=" + code +
    //     "&balance=" + balance + "&description=" + description;
    //
    // $.ajax({
    //     type: "POST",
    //
    //     url: "/product/" + id + "/editajax",
    //     data: dataString,
    //     cache: false,
    //     success: function(html)
    //     {
    //         alert(html);
    //     }
    // });
}


function search ( ) {

    // alert(id);

    var str = document.getElementById("Search").value;

    let dataString = "Search=" + str;

    $.ajax({
        type: "POST",

        url: "/product/place_search",
        data: dataString,
        cache: false,
        success: function(html)
        {
             alert(html);
            //$('#Prods').html(data);
        }
    });
}


function addPositionMap( id ) {

    // alert(id);

    var title = document.getElementById("title").value;
    var code = document.getElementById("code").value;
    var balance = document.getElementById("balance").value;
    var description = document.getElementById("description").value;

    let dataString = "title=" + title + "&code=" + code +
        "&balance=" + balance + "&description=" + description;

    $.ajax({
        type: "POST",
        url: "/product/" + id + "/edit",
        data: dataString,
        cache: false,
        success: function(html)
        {
            alert(html);

        }
    });
}

window.onload = function () {
    console.log("22");
};



