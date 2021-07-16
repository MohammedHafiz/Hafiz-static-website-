function validateName1()
{
    var name=document.getElementById("firstname").value
    var display
    var letters = /^[A-Za-z\s]+$/
    if(name=="")
    {
        display="Please enter a valid name"
    }
    else if(name.match(letters))
    {
        display=""
    }
    else
    {
        display="Please use characters only"
    }
    document.getElementById("checkname1").innerHTML=display

}
function validateName2()
{
    var name=document.getElementById("lastname").value
    var display
    var letters = /^[A-Za-z]+$/
    if(name=="")
    {
        display="Please enter a valid name"
    }
    else if(name.match(letters))
    {
        display=""
    }
    else
    {
        display="Please use characters only"
    }
    document.getElementById("checkname2").innerHTML=display

}
function validatEmail()
{
    var email=document.getElementById("email").value
    var display
    const letters = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if(email=="")
    {
        display="Please enter your email id"
    }
    else if(email.match(letters))
    {
        display=""
    }
    else
    {
        display="Please enter a valid email id"
    }
    document.getElementById("checkemail").innerHTML=display
}
function validateNumber()
{
    var num=document.getElementById("mobileno").value
    var display
    var numbers = /^[789]\d{9}$/
    var letters = /^[A-Za-z]+$/
    if(num=="")
    {
        display="Please enter your number in the field"
    }
    else if(num.match(numbers))
    {
        display=""
    }
    // else if((num.length<10  || num.length>10 )&& num!==letters)
    // {
    //     display="maximum number should be 10"
    // }
   
    else{
        display="please enter valid number"
    }
    document.getElementById("mobile").innerHTML=display
}

function validatetextArea()
{
    var char=document.getElementById("textarea").value
    var display
    if(char=="")
    {
        display="Please enter details in this field"
    }
    else if(char.length<30)
    {
        display="Please enter minimum 30 characters"
    }
    else{
        display=""
    }
    document.getElementById("text").innerHTML=display
}