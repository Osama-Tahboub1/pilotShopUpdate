$.get('../JSTemplating/demo.hbs', function (data) {
    //gets template fom handlebars file.
    var source = data
    var template = Handlebars.compile(source)

    $.get('../JSTemplating/products.json', function (data) {
        //gets fata from Json file.
        var html = template(data)
        $('.blocksContainer h2').append(html)
    })


})

//each in hbs file allows for a for each loop over an array from a json file.