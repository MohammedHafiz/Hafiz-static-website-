function validateName1()
{
    var name=document.getElementById("firstname").value
    var display
    var letters =/^[-a-zA-Z-()]*$/
    if(name=="")
    {
        document.getElementById("checkname1").innerHTML="Required field"
        return false
    }
    else if(name==" ")
    {
        document.getElementById("checkname1").innerHTML="Do not enter space as first character"
        return false
    }
    else if(name.match(letters))
    {
        document.getElementById("checkname1").innerHTML=""
        return true
    }
   
    else
    {
        document.getElementById("checkname1").innerHTML="Please use characters only"
        return false
    }
    

}
function validateName2()
{
    var name=document.getElementById("lastname").value
    var display
    var letters = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/
    if(name=="")
    {
        document.getElementById("checkname2").innerHTML="Required field"
        return false
    }
    else if(name.match(letters))
    {
        document.getElementById("checkname2").innerHTML=""
        return true
    }
    else
    {
        document.getElementById("checkname2").innerHTML="Please use characters only"
        return false
    }

}
function validatEmail()
{
    var email=document.getElementById("email").value
    var display
    const letters = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if(email=="")
    {
        document.getElementById("checkemail").innerHTML="Required field"
        return false
    }
    else if(email.match(letters))
    {
        document.getElementById("checkemail").innerHTML=""
        return true
    }
    else
    {
        document.getElementById("checkemail").innerHTML="Please enter a valid email id"
        return false
    }
}
function validateNumber()
{
    var num=document.getElementById("mobileno").value
    
    var numbers = /^[0-9]*$/
    var letters = /^[A-Za-z]+$/
    if(num=="")
    {
        document.getElementById("mobile").innerHTML="Required field"
        return false
    }
    else if(num.match(numbers) && num.length<10)
    {
        document.getElementById("mobile").innerHTML="Please enter 10 digit number"
        return false
    }
    else if(num.match(numbers) && num.length==10 )
    {
        document.getElementById("mobile").innerHTML=""
        return true
    }
    else{
        document.getElementById("mobile").innerHTML="Please enter valid number"
        return false
    }

}

function validatetextArea()
{
    var char=document.getElementById("textarea").value
    var display
    if(char=="")
    {
        document.getElementById("text").innerHTML="Required field"
        return false
    }
    else if(char.length<30)
    {
        document.getElementById("text").innerHTML="Please enter minimum 30 characters"
        return false
    }
    else{
        document.getElementById("text").innerHTML=""
        return true
    }

}