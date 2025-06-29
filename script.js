let input = "";

function appendValue(val) {
  input += val;
  document.getElementById("message1").textContent = input;
  document.getElementById("message2").textContent = "";
}

function clearDisplay() {
  input = "";
  document.getElementById("message1").textContent = "0";
  document.getElementById("message2").textContent = "";
}

function deleteLast() {
  input = input.slice(0, -1);
  document.getElementById("message1").textContent = input || "0";
  document.getElementById("message2").textContent = "";
}

function calculate() {
  try {
    let result = eval(input); // calculate but not shown
    if (result !== undefined) {
      document.getElementById("message1").textContent = "I LOVE YOU BABYYY ❤️";
      document.getElementById("message2").textContent = "Jaannn maan bhi jao ab ❤️";
      input = ""; // Reset input after showing message
    }
  } catch {
    document.getElementById("message1").textContent = "Error";
    document.getElementById("message2").textContent = "";
  }
}
