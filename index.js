var object = {
    id: '',
    name: '',
    lastname: '',
    date: '',
    street: '',
    city: ''
}
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
            newData = $('<tr><td scope="row">' + object.name + '</td><td>' + object.lastname + '</td><td>' + object.date + '</td><td>' + object.street + '</td><td>' + object.city + '</td><td><input type="checkbox" id="check">'+`${object.id}`+'</td></tr>')
        }
        $('#remove').click(function(){
            
                $('#check').each(function(){
                    $('this:checked').remove()
                })
            
            
        })
       
        $('#show').append(newData)
        $('#name').val('')
        $('#lastname').val('')
        $('#date').val('')
        $('#street').val('')
        $('#city').val('')
        console.log(object)      
    })
   
})


// $(document).ready(function(){
// 	$("#remove").click(function(){

// 	if(confirm("are you sure you want to delete"))
// 	{
		
		
// 		$("#check:checked").each(function(i){
// 			object[i] = $(this).val();
// 		})
// 		if(object.length == 0){
// 			alert("atleast check one");
// 		}else{
// 			for(var i = 0;i<object.length;i++){
				
// 				$(object[i]).css({"background":"red"});
// 								$(object[i]).fadeOut("slow");

				
// 			}
// 		}
// 		console.log(object)
// 	}
// else{
// 	return false;
// }
// 	})
	
// })