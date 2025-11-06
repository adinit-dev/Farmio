document.addEventListener("DOMContentLoaded", () => {

  const postBtn = document.getElementById("postBtn");
  const postInput = document.getElementById("postInput");
  const postsDiv = document.getElementById("posts");
  const imgInput = document.getElementById("imageInput");

  const loginBtn = document.getElementById("loginBtn"); 
  const loginPopup = document.getElementById("loginPopup"); 
  const saveProfile = document.getElementById("saveProfile"); 

  if (loginBtn) {
    loginBtn.addEventListener("click", () => { 
      loginPopup.style.display = "flex"; 
    });
  }

  if (saveProfile) {
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
  }

});






    

