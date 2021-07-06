// -------------------------------------------------------------------------
let itemText = document.getElementsByClassName("itemtext");
let item = document.getElementsByClassName("item");

let detailspic = document.getElementById("detailspic");
let detailsnotes = document.querySelector(".detailsnotes");

let notes = {
  "Week 1": "yea so i rlly didnt hv much time to make dis one?",
  "Week 2":
    "ik im submitting this 2 days aftr the deadline but i didnt want to submit some half baked project. ps. colour scheme and transitions took waaayy longer than expected, and this was supposed to b a weeknd proj but i didnt hv time then. <br> PPS click/hover on everything.",
  "Week 3": "dummy placeholder will use dis once yall giv project",
  "Week 4": "what week 3 said.",
};

// this is for the p tag inside item (itemtext), where we only add the mouseover event.
for (elem of itemText) {
  elem.addEventListener("mouseenter", colorChangeForText);
}

function colorChangeForText(Event) {
  detailspic.style.backgroundColor = window.getComputedStyle(
    Event.target.parentNode
  ).backgroundColor;
  detailspic.style.setProperty("--detailspic-bgcolor", "#d3d5fd52");
  detailspic.children[0].innerText = Event.target.innerText;
  detailsnotes.style.borderColor = window.getComputedStyle(
    Event.target.parentNode
  ).backgroundColor;

  for (week in notes) {
    switch (Event.target.innerText) {
      case week:
        detailsnotes.innerHTML = "Notes:<br>" + notes[week];
        break;
    }
  }
}

// ------------------------------------------------------
// change color for big card

for (i of item) {
  i.addEventListener("mouseenter", colorChangeForCard);
  i.addEventListener("mouseleave", colorChangeToNormal);
}

function colorChangeToNormal(Event) {
  detailspic.style.backgroundColor = "#d3d5fd";
  detailspic.style.setProperty("--detailspic-bgcolor", "#929aab52");
  detailsnotes.style.borderColor = "#b469b700";
  detailsnotes.innerHTML = "";
}

function colorChangeForCard(Event) {
  detailspic.style.backgroundColor = window.getComputedStyle(
    Event.target
  ).backgroundColor;
  detailspic.style.setProperty("--detailspic-bgcolor", "#d3d5fd52");
  detailspic.children[0].innerText = Event.target.children[0].innerText;
  detailsnotes.style.borderColor = window.getComputedStyle(
    Event.target
  ).backgroundColor;

  for (week in notes) {
    switch (Event.target.innerText) {
      case week:
        detailsnotes.innerHTML = "Notes:<br>" + notes[week];
        break;
    }
  }
}

// alerts -----------------------------------

let alertBox = document.querySelector(".alert");

function alertWeekTwo() {
  alertBox.style.transitionTimingFunction = "ease-out";
  alertBox.innerText = "This page is the project, bruh.";
  setTimeout(() => {
    alertBox.style.transitionTimingFunction = "ease-in";
    alertBox.style.bottom = "-100%";
  }, 3000);

  alertBox.style.bottom = "5vh";
}

function alertDeadLink() {
  alertBox.style.transitionTimingFunction = "ease-out";
  alertBox.innerHTML = "dead link    " + "<i class='fas fa-skull'></i>";
  setTimeout(() => {
    alertBox.style.transitionTimingFunction = "ease-in";
    alertBox.style.bottom = "-100%";
  }, 2500);

  alertBox.style.bottom = "5vh";
}
