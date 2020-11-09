var object = [
    {name: 'თორნიკე',
    lastname: 'გრიგალაშვილი',
    date: '05/17/1990',
    street: 'ჭავჭვაძე',
    city: 'თბილისი'},
    {name: 'გიორგი',
    lastname: 'წერეთელი',
    date: '12/12/1986',
    street: 'ვაჟა-ფშაველა',
    city: 'თბილისი'},
    {name: 'სოფო',
    lastname: 'გახოკიძე',
    date: '07/24/1999',
    street: 'ფალიაშვილი',
    city: 'თბილისი'},
    {name: 'ნინი',
    lastname: 'ღლონტი',
    date: '03/29/2001',
    street: 'აბაშიძე',
    city: 'თბილისი'},
    {name: 'ლერი',
    lastname: 'სანაძე',
    date: '04/20/1079',
    street: 'ჭავჭავაძე',
    city: 'ქუთაისი'}

]
var filled = false
var count = 0 
$(document).ready(function(){
    //ენთერით დაჭერა
    $('input').keydown(function(e){
        if(e.keyCode == 13){
            $('#button').click()
        }
    })

    $('#button').click(function(){
        //დამატება მონაცემების
        if($('#name').val() || $('#lastname').val() || $('#date').val() || $('#street').val() || $('#city').val() ){
            object.name = $('#name').val()
            object.lastname = $('#lastname').val()
            object.date = $('#date').val()
            object.street = $('#street').val()
            object.city = $('#city').val()
            newData = $('<tr id="dada"><th>'+ ++count +'.' +'</th><td scope="row">' + object.name + '</td><td>' + object.lastname + '</td><td>' + object.date + '</td><td>' + object.street + '</td><td>' + object.city + '</td><td><input type="checkbox" name="record"></td></tr>')
        }
            
           if(!filled){
            for(var i = 0; i < object.length; i++){
                object.name = $('#name').val()
                object.lastname = $('#lastname').val()
                object.date = $('#date').val()
                object.street = $('#street').val()
                object.city = $('#city').val()
                newData = $('<tr id="dada"><th>'+ ++count +'.' +'</th><td scope="row">' + object[i].name + '</td><td>' + object[i].lastname + '</td><td>' + object[i].date + '</td><td>' + object[i].street + '</td><td>' + object[i].city + '</td><td><input type="checkbox" name="record"></td></tr>')
                
                filled = true
            
                    
                console.log(object[i])
                }
                $(window).load(object.length)
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


$(document).ready(function(){

})