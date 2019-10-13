function solve() {
  let countAll = 0;
  let countTrue = 0;
  let trueAnsw = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"]
  let count = Array.from(document.querySelectorAll(".answer-text")).map(x => x.addEventListener("click", display))
  function display(e) {
    if (trueAnsw.includes(e.target.innerHTML)) {
      countTrue++;
    }
    document.getElementsByTagName("section")[countAll].style.display = `none`;
    if (document.getElementsByTagName("section")[countAll + 1] != undefined) {
      document.getElementsByTagName("section")[countAll + 1].style.display = `block`;
      document.getElementsByTagName("section")[countAll + 1].classList.remove(`hidden`);
    }
    if (countAll === 2 && countTrue === 3) {
      document.getElementById("results").style.display = `block`;
      document.querySelector("#results > li > h1").innerHTML = "You are recognized as top JavaScript fan!";
    } else if (countAll === 2) {
      document.getElementById("results").style.display = `block`;
      document.querySelector("#results > li > h1").innerHTML = `You have ${countTrue} right answers`;
    }
    countAll++;
  }
}