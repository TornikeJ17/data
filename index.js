var object = {
    name: '',
    lastname: '',
    date: '',
    street: '',
    city: ''
}

var count = 0 
$(document).ready(function(){
    //ენთერით დაჭერა
    $('input').keydown(function(e){
        if(e.keyCode == 13){
            $('#button').click()
        }
    })

    $('#button').click(function(){
        if($('#name').val() || $('#lastname').val() || $('#date').val() || $('#street').val() || $('#city').val() ){
            object.name = $('#name').val()
            object.lastname = $('#lastname').val()
            object.date = $('#date').val()
            object.street = $('#street').val()
            object.city = $('#city').val()
            newData = $('<tr id="dada"><th>'+ ++count +'.' +'</th><td scope="row">' + object.name + '</td><td>' + object.lastname + '</td><td>' + object.date + '</td><td>' + object.street + '</td><td>' + object.city + '</td><td><input type="checkbox" name="record"></td></tr>')
            
        }
        // Checkbox მონიშვნა და წაშლა
        $('#remove').click(function(){
            $('#show').find('input[name="record"]').each(function(){
                if($(this).is(':checked')){
                    $(this).parents("tr").remove();
                }
            })
        })
        // ძებნა
       $('#search').on('keyup',function(){
            var value = $(this).val()
            $('#show tr').filter(function(){
                $(this).toggle($(this).text().indexOf(value) > -1)
            })
       })
        $('#show').append(newData)
        $('#name').val('')
        $('#lastname').val('')
        $('#date').val('')
        $('#street').val('')
        $('#city').val('')
        // console.log(object)      
    })
})


