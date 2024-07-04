  // current time
  const time = new Date();
  const currentTime = time.toLocaleTimeString();
  document.getElementById("my-time").textContent = currentTime;

  // current date
  const date = new Date();
  const currentDate = date.toDateString();
  document.getElementById("my-date").textContent = currentDate;






  // // click the goal one on the left div to highlight the text on the right div

  let goalOne = document.getElementById("js-goal1");
  let yearOne = document.getElementById("year1-js");
  goalOne.addEventListener("click", (e) =>{
    yearOne.classList.toggle("remove");
    
  });


  // click the goal two on the left div to highlight the text on the right div

  let goalTwo = document.getElementById("js-goal2");
  let yearTwo = document.getElementById("year2-js");
  goalTwo.addEventListener("click", (e) =>{
    yearTwo.classList.toggle("remove");
    
  });

