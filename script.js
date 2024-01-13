// Tab script

const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Menu script

const sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}


// Forms script

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwVdh_BPE2RYMU3WtynKrOHTgzsL2gpbeTjPDFuFMeWESFN2eLDu6z9koBo3S5Wu3Il/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
const sub = document.querySelector("button, .btn .bt2");

form.addEventListener("submit", (e) => {
  sub.innerHTML = "Submitting";
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      sub.innerHTML = "Submit";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
