$(document).ready(function(){
	
})
function login(){
	var user = $("#username").val();
	var pass = $("#password").val();
	var param = {"user":user, "pass":pass};
	$.ajax({
		beforeSend: function(){
			$('#resultado').html('Esperando...!');
		},
		data: param,
		url: 'uc',
		type: 'POST',
		success: function(response){
			$('#resultado').html(response);
		},
		error: function(jqXHR, estado, error){
		console.log(estado)
		console.log(error)
		},
		complete: function (jqXHR, estado){
			console.log(estado)
		}		
	});
}