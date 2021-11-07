function getBirthDate() {
    let inputDate = document.getElementById("myDate").value;
   // document.getElementById("demo").innerHTML = x;
  
   let splitDate = inputDate.split('-');
   
   let birthYear = splitDate[0];
   let birthMonth = splitDate[1];
   let birthDay = splitDate[2];
  
   calculateYears(birthYear, birthMonth, birthDay);
  }
  
   function calculateYears(birthYear, birthMonth, birthDay) {
      var d = new Date,
          currentYear = d.getFullYear(),
          currentMonth = d.getMonth() + 1,
          currentDay = d.getDate(),
  
          birthYear = +birthYear,
          birthMonth = +birthMonth,
          birthDay = +birthDay,
  
          yearOutput = currentYear - birthYear;
  
       if (currentMonth< birthMonth || currentMonth == birthMonth && currentDay < birthDay) {
          yearOutput--;
       }
  
      document.getElementById("numberYears").innerHTML = yearOutput+" anos";
   }
  
