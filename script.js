document.addEventListener("DOMContentLoaded", function () {
  const date = new Date("2025-06-18");
  const curMonth = date.getMonth() + 1;
  const curDay = date.getDate();
  const curYear = date.getFullYear();
  function calc() {
    const inpDay = parseInt(document.getElementById("day").value);
    const inpMonth = parseInt(document.getElementById("month").value);
    const inpYear = parseInt(document.getElementById("year").value);

    let Resday = curDay - inpDay;
    let Resmonth = curMonth - inpMonth;
    let Resyear = curYear - inpYear;

    if (isNaN(inpDay) || isNaN(inpMonth) || isNaN(inpYear)) {
      alert("Please, Enter a number.");
      console.log("NaN error");
      return;
    }
    if (inpYear > curYear) {
      alert("Must be in the past.");
      return;
    }

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
        alert("ERROR: Month has 1-31 days.");
        return;
      } else {
        console.log("31 days");
        if (Resday < 0) {
          Resmonth -= 1;
          Resday += 31;
          document.getElementById("yearRes").textContent = Math.floor(Resyear);
          document.getElementById("monthRes").textContent =
            Math.floor(Resmonth);
          document.getElementById("dayRes").textContent = Math.floor(Resday);
          return;
        } else if (Resmonth < curMonth) {
          console.log("AAA1");
          Resmonth += 1;
          document.getElementById("yearRes").textContent = Math.floor(Resyear);
          document.getElementById("monthRes").textContent =
            Math.floor(Resmonth);
          document.getElementById("dayRes").textContent = Math.floor(Resday);
          return;
        }
      }
    } else if (inpMonth === 2) {
      //28 Days.
      if (inpDay > 28) {
        console.log("Month has 1-28 days");
        alert("ERROR: Month has 1-28 days.");
        return;
      } else {
        console.log("28 days");
        if (Resday < 0) {
          Resmonth -= 1;
          Resday += 28;
          document.getElementById("yearRes").textContent = Resyear;
          document.getElementById("monthRes").textContent = Resmonth;
          document.getElementById("dayRes").textContent = Resday;
          return;
        } else if (Resmonth < curMonth) {
          console.log("AAA2");
          Resmonth += 1;
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
        alert("ERROR: Month has 1-30 days.");
        return;
      } else {
        console.log("30 days");
        if (Resday < 0) {
          Resmonth += 1;
          Resday -= 30;
          document.getElementById("yearRes").textContent = Resyear;
          document.getElementById("monthRes").textContent = Resmonth;
          document.getElementById("dayRes").textContent = Resday;
        } else if (Resmonth < curMonth) {
          console.log("AAA3");
          Resmonth += 1;
          if (Resmonth > 12) {
            Resmonth -= 12;
            Resyear += 1;
            document.getElementById("yearRes").textContent = Resyear;
            document.getElementById("monthRes").textContent = Resmonth;
            document.getElementById("dayRes").textContent = Resday;
            return;
          }
          document.getElementById("yearRes").textContent = Resyear;
          document.getElementById("monthRes").textContent = Resmonth;
          document.getElementById("dayRes").textContent = Resday;
        }
      }
    }

    if (inpMonth <= 0 || inpMonth > 13 || inpDay <= 0 || inpDay > 31) {
      alert("Please, Enter a valid (Day/Month).");
      console.log("Not 1-12 error");
      return;
    } else {
      if (Resmonth < 0 || Resmonth >= -12) {
        Resyear -= 1;
        Resmonth += 12;
        document.getElementById("yearRes").textContent = Math.floor(Resyear);
        document.getElementById("monthRes").textContent = Math.floor(Resmonth);
        document.getElementById("dayRes").textContent = Math.floor(Resday);
        return;
      }
    }
  }

  document.querySelector(".arrow").addEventListener("click", calc);
});
