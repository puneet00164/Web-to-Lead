let captchaflag = false; 
function UpdateLeadDate(event)
{
  if(captchaflag)
  {   
   let inputdate1 = document.querySelector(".inputdate");
   let outputdate1 = document.querySelector(".outputdate");

   let formatteddate = new Date(inputdate1.value).toLocaleDateString("en-US"); 
   outputdate1.value = formatteddate; 

   console.log('output date is ' + outputdate1.value);
   console.log('input date is '+ inputdate1.value); 
}
else{
    alert('Please select captcha');
    event.preventDefault(); 
}
}

function timestamp() { 
var response = document.getElementById("g-recaptcha-response"); 
if (response == null || response.value.trim() == "") 
{
    var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
    
    elems["ts"] = JSON.stringify(new Date().getTime());
    
    document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 

} 

} setInterval(timestamp, 500); 

function captchacheck()
{
    captchaflag = true; 
}