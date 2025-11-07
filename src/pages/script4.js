
document.addEventListener("DOMContentLoaded", () => {

  const editBtn = document.querySelector(".edit-btn");
  const popup = document.getElementById("editPopup");
  const closeBtn = document.getElementById("closeBtn");
  const saveBtn = document.getElementById("saveBtn");

  const nameDisplay = document.querySelector(".profile-name");
  const bioDisplay = document.getElementById("bio");
  const profileImg = document.getElementById("profile-img");

  const editName = document.getElementById("editName");
  const editBio = document.getElementById("editBio");
  const editImage = document.getElementById("editImage");

  // Load saved profile data
  if(localStorage.name) nameDisplay.textContent = localStorage.name;
  if(localStorage.bio) bioDisplay.textContent = localStorage.bio;
  if(localStorage.img) profileImg.src = localStorage.img;

  // Open popup
  editBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    editName.value = nameDisplay.textContent;
    editBio.value = bioDisplay.textContent;
  });

  // Close popup
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Save profile updates
  saveBtn.addEventListener("click", () => {
    nameDisplay.textContent = editName.value;
    bioDisplay.textContent = editBio.value;

    localStorage.name = editName.value;
    localStorage.bio = editBio.value;

    if(editImage.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        profileImg.src = reader.result;
        localStorage.img = reader.result;
      };
      reader.readAsDataURL(editImage.files[0]);
    }

    popup.style.display = "none";
  });

});
