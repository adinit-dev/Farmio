const loginBtn = document.getElementById("loginBtn");
const loginPopup = document.getElementById("loginPopup");
const saveProfile = document.getElementById("saveProfile");
const usernameDisplay = document.getElementById("usernameDisplay");
const storedName = localStorage.getItem("userName");



loginBtn.addEventListener("click", () => {
  loginPopup.style.display = "flex";
});

if(storedName) {
  usernameDisplay.textContent = storedName;
}

saveProfile.addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  const district = document.getElementById("districtInput").value;
  const crop = document.getElementById("cropInput").value;

  localStorage.setItem("userName", name);
  localStorage.setItem("userDistrict", district);
  localStorage.setItem("userCrop", crop);

  loginPopup.style.display = "none";
  loginBtn.innerHTML = `<i class="fa-solid fa-user"></i> ${name}`;
});
