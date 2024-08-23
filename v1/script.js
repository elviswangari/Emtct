// Define the scores for each risk factor
const late_anc = 0.2;
const high_vl = 0.5;
const defaulted = 0.2;
const ois = 0.03;
const under_25 = 0.02;
const not_disclosed = 0.05;


// Define a function to calculate the total score for a mother
function calculateScore(late, vl, deft, oi, age, disc) {
  let score = 0;
  if (late) {
    score += late_anc;
  }
  if (vl > 200) {
    score += high_vl;
  }
  if (deft) {
    score += defaulted;
  }
  if (oi) {
    score += ois;
  }
  if (age < 25) {
    score += under_25;
  }
  if (!disc) {
    score += not_disclosed;
  }
  return score * 100;
}

// Define a function to categorize the mother based on the score
function categorize(score) {
  if (score >= 0.5) {
    return "High risk";
  } else {
    return "Mid risk";
  }
}

// Function to be called on form submission
function evaluateMother() {
  let late = document.getElementById("lateANC").value === "Y";
  let vl = parseInt(document.getElementById("viralLoad").value);
  let deft = document.getElementById("defaulted").value === "Y";
  let oi = document.getElementById("oi").value === "Y";
  let age = parseInt(document.getElementById("age").value);
  let disc = document.getElementById("disclosed").value === "Y";

  let score = calculateScore(late, vl, deft, oi, age, disc);
  let category = categorize(score);

  document.getElementById(
    "result"
  ).innerText = `The mother's score is ${score} % and she is ${category}.`;
}