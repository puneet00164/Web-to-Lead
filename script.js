function UpdateLeadDate()
{
   let inputdate1 = document.querySelector(".inputdate");
   let outputdate1 = document.querySelector(".outputdate");

   let formatteddate = new Date(inputdate1.value).toLocaleDateString("en-US"); 
   outputdate1.value = formatteddate; 

   console.log('output date is ' + outputdate1.value);
   console.log('input date is '+ inputdate1.value); 
}