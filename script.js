function formValidation(event) {
  let daylabel = document.getElementById("dayLabel");
  let monthlabel = document.getElementById("monthLabel");
  let yearlabel = document.getElementById("yearLabel");
  let day = document.getElementById("day");
  let month = document.getElementById("month");
  let year = document.getElementById("year");
  let firstError = document.getElementById("first_error");
  let secondError = document.getElementById("second_error");
  let thirdError = document.getElementById("third_error");
  let x = document.forms["dateInput"]["day"].value;
  let y = document.forms["dateInput"]["month"].value;
  let z = document.forms["dateInput"]["year"].value;

  if(x=="" || y=="" || z=="") {
    if(x=="") {
      dayLabel.style.color = "hsl(0, 100%, 67%)";
      firstError.style.visibility = "visible";
      day.style.borderColor = "hsl(0, 100%, 67%)";
    } else {
      dayLabel.style.color = "";
      firstError.style.visibility = "";
      day.style.borderColor = "";
    }
    if(y=="") {
      monthLabel.style.color = "hsl(0, 100%, 67%)";
      secondError.style.visibility = "visible";
      month.style.borderColor = "hsl(0, 100%, 67%)";
    } else {
      monthLabel.style.color = "";
      secondError.style.visibility = "";
      month.style.borderColor = "";
    }
    if(z=="") {
      yearLabel.style.color = "hsl(0, 100%, 67%)";
      thirdError.style.visibility = "visible";
      year.style.borderColor = "hsl(0, 100%, 67%)";
    } else {
      yearLabel.style.color = "";
      thirdError.style.visibility = "";
      year.style.borderColor = "";
    }
    return false;
  }
}

document.getElementById("submitButton").addEventListener("click", formValidation);
