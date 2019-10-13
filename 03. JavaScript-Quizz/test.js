let questionOne=questions[1]
let questionTwo = questions[2]
let questionThree = questions[3]

if (countAll == 1) {
  questionOne.classList.add(`hidden`);
  questionTwo.classList.remove(`hidden`);
  questionOne.style.display = `none`;
  questionTwo.style.display = `block`;
  }
else if (countAll == 2) {
  questionTwo.classList.add(`hidden`);
  questionThree.classList.remove(`hidden`);
  questionTwo.style.display = `none`;
  questionThree.style.display = `block`;
}
else if (countAll === 3 && countTrue === 3) {
  questionThree.classList.add(`hidden`);
  questionThree.style.display = `none`;
  document.querySelector("#results").style.display = `block`;
  result.innerText = "You are recognized as top JavaScript fan!"
  
} else {
  questionThree.classList.add(`hidden`);
  questionThree.style.display = `none`;
  document.querySelector("#results").style.display = `block`;
  result.innerText = `You have ${countTrue} right answers`