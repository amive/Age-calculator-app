document.addEventListener("DOMContentLoaded", function () {
  const date = new Date();
  const curMonth = date.getMonth() + 1;
  const curDay = date.getDate();
  const curYear = date.getFullYear();

  const dayError = document.getElementById("dayError");
  const monthError = document.getElementById("monthError");
  const yearError = document.getElementById("yearError");

  function showError(input, errorElement) {
    errorElement.style.display = "block"; // Show error message
    input.closest(".input-group").classList.add("error"); // Apply red styles
  }

  function hideError(input, errorElement) {
    errorElement.style.display = "none"; // Hide error message
    input.closest(".input-group").classList.remove("error"); // Remove red styles
  }
  
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  function validateDay() {
    const day = parseInt(document.getElementById("day").value.trim());
    const year = parseInt(document.getElementById("year").value.trim());
    const month = parseInt(document.getElementById("month").value.trim());
    const maxDays = isLeapYear(year) ? 29 : 28;
    if (month === 2) {
      //28 or 29 Days.
      const maxDays = isLeapYear(inpYear) ? 29 : 28;
      if (day > maxDays) {
        showError(document.getElementById("day"), dayError);
      }
     }
    if (isNaN(day) || day < 1 || day > 31) {
      showError(document.getElementById("day"), dayError);
    } else {
      hideError(document.getElementById("day"), dayError);
    }
  }

  function validateMonth() {
    const month = parseInt(document.getElementById("month").value.trim());
    if (isNaN(month) || month < 1 || month > 12) {
      showError(document.getElementById("month"), monthError);
    } else {
      hideError(document.getElementById("month"), monthError);
    }
  }

  function validateYear() {
    const year = parseInt(document.getElementById("year").value.trim());
    if (year >= curYear || isNaN(year)) {
      showError(document.getElementById("year"), yearError);
    } else {
      hideError(document.getElementById("year"), yearError);
    }
  }

  function calc() {
    const inpDay = parseInt(document.getElementById("day").value);
    const inpMonth = parseInt(document.getElementById("month").value);
    const inpYear = parseInt(document.getElementById("year").value);

    let Resday = curDay - inpDay;
    let Resmonth = curMonth - inpMonth;
    let Resyear = curYear - inpYear;

    if (
      //31 Days
      inpMonth === 1 ||
      inpMonth === 3 ||
      inpMonth === 5 ||
      inpMonth === 7 ||
      inpMonth === 8 ||
      inpMonth === 10 ||
      inpMonth === 12
    ) {
      if (inpDay > 31 || inpDay <= 0) {
        console.log("Month has 1-31 days");
        return;
      } else {
        console.log("31 days");
        if (Resday < 0) {
          Resmonth -= 1;
          Resday += 31;
        } 
        if (Resmonth < 0) {
          console.log("AAA1");
          Resyear -= 1;
          Resmonth += 12;
        }
      }
    } else if (inpMonth === 2) {
      //28 or 29 Days.
      const maxDays = isLeapYear(inpYear) ? 29 : 28;
      if (inpDay > maxDays) {
        console.log(`Month has 1-${maxDays} days`);
        return;
      } else {
        console.log(`${maxDays} days`);
        if (Resday < 0) {
          Resmonth -= 1;
          Resday += maxDays;
          document.getElementById("yearRes").textContent = Resyear;
          document.getElementById("monthRes").textContent = Resmonth;
          document.getElementById("dayRes").textContent = Resday;
          return;
        }
      }
    } else if (
      //30 Days.
      inpMonth === 4 ||
      inpMonth === 6 ||
      inpMonth === 9 ||
      inpMonth === 11
    ) {
      if (inpDay > 30) {
        console.log("Month has 1-30 days");
        return;
      } else {
        console.log("30 days");
        if (Resday < 0) {
          Resmonth -= 1;
          Resday += 30;
        }
      }
      if (Resmonth < 0) {
        console.log("AAA2");
        Resyear -= 1;
        Resmonth += 12;
      }

      if (Resmonth > 12) {
        console.log("AAA3");
        Resmonth -= 12;
        Resyear += 1;
      }
    }
    document.getElementById("yearRes").textContent = Resyear;
    document.getElementById("monthRes").textContent = Resmonth;
    document.getElementById("dayRes").textContent = Resday;
  }
  day.addEventListener("input", validateDay);
  month.addEventListener("input", validateMonth);
  year.addEventListener("input", validateYear);
  document.querySelector(".arrow").addEventListener("click", calc);
});
