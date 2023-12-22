// array that store gender options
const eachGender = ["Male", "Female", "Prefer not to say"];

// populate gender options from array to select drop down list 
function selectGender() {
  const genderSelect = document.getElementById("gender");
  genderSelect.innerHTML = "<option value=0 selected> Select gender</option>";
  for (let gender of eachGender) {
    genderSelect.innerHTML += `<option>${gender}</option>`;
  }
}
