//name validation
function validateName1(){
	var namevalue=$('#firstname').val()
	var letters = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/

	
	if(namevalue==""){
		$("#checkname1").html("Required field")
		return false
	}
	// else if(namevalue==" "){
	// 	$('#username').html("Do not enter space as first character")
	// 	return false
	// }
	else{
		$('#checkname1').html("")
		return true
	}

	// if(namevalue==""){
	// 	$("#checkname1").html("**Please fill out this field")
	// 	return false
	// }
	// else if(namevalue==" "){
	// 	$('#checkname1').html("**Do not enter space as first character")
	// 	return false
	// }
	// else if((namevalue.length < 3)|| (namevalue.length > 10))
	// {
	//      $('#checkname1').html("**length of username must be between 3 and 10");
	//      return false;
	
	// }
	// else if(namevalue.match(letters)){
	// 	$('#checkname1').html("")
	// 	return true
	// }
	// else{
	// 	$('#checkname1').html("**Please enter a valid name")
	// 	return false
	// }
	}
    function validateName2(){
        var namevalue=$('#lastname').val()
        var letters = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/
		if(namevalue==""){
			$("#checkname2").html("Required field")
			return false
		}
		// else if(namevalue==" "){
		// 	$('#username').html("Do not enter space as first character")
		// 	return false
		// }
		else{
			$('#checkname2').html("")
			return true
		}
       
        }
    

//emailvalidation
function validatEmail(){
	var emailvalue=$('#email').val()
	var mail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
	
	if(emailvalue==""){
		$('#checkemail').html("Required field")
		return false
	} 
	// else if(emailvalue==" "){
	// 	$('#useremail').html("Donot enter space in this field")
	// 	return false
	// }
	else if(emailvalue.match(mail)){
		$('#checkemail').html("")
		return true
	}else{
		$('#checkemail').html("Please enter a valid email id")
		return false
	}
	
}

//mobileNumber validation 
function validateNumber(){
	var numvalue=$('#mobileno').val()
	var numbers=/^[0-9]*$/
	if(numvalue==""){
		$('#mobile').html("Required field")
		return false
	}
	else if(numvalue==" "){
		$('#mobile').html("**Please donot enter space in this field")
		return false
	}
	else if(numvalue.match(numbers) && numvalue.length<10)
    {
		$('#mobile').html("**Please enter 10 digit number")
        return false
    }
	else if(numvalue.match(numbers) && numvalue.length==10 )
    {
        $('#mobile').html("")
        return true
    }
	else{
		$('#mobile').html("**Please enter a valid number")
		return false
	}
	
}

//messagevalidation

function validateMessage(){
	var char=$("#textarea").val()
    if(char=="")
    {
        $('#text').html("Required field")
        return false
    }
    else if(char.length<10)
    {
        $('#text').html("**Please enter minimum 10 characters")
        return false
    }
    else{
        $('#text').html("")
        return true
    }
}

//form validation
$(document).ready(function () {
$('#firstname').keyup(function(){
	validateName1();
});
$('#lastname').keyup(function(){
	validateName2();
});

$('#email').keyup(function(){
	validatEmail();
});
$('#mobileno').keyup(function(){
	validateNumber();
});
$('#textarea').keyup(function(){
	validateMessage();
});



});

$('.navbar-collapse').click(function(){
    $(".navbar-collapse").hide('hide');
});
$('.navbar-toggler').click(function(){
    $(".navbar-collapse").show('hide');
});