document.addEventListener("DOMContentLoaded", () => {


  const postBtn = document.getElementById("postBtn");
  const postInput = document.getElementById("postInput");
  const postsDiv = document.getElementById("posts");
  const imgInput = document.getElementById("imageInput");

  if (postBtn) {
    postBtn.addEventListener("click", () => {
      const text = postInput.value.trim();
      const file = imgInput.files[0];

      if (text === "" && !file) return;

      let imageHTML = "";
      if (file) {
        const imgURL = URL.createObjectURL(file);
        imageHTML = `<img src="${imgURL}" class="post-img">`;
      }

      const name = localStorage.getItem("userName") || "Farmer";
      const district = localStorage.getItem("userDistrict") || "";
      const crop = localStorage.getItem("userCrop") || "";

      const post = document.createElement("div");
      post.classList.add("post");
      post.innerHTML = `
        <p><b>${name}</b> (${district} - ${crop})</p>
        <p>${text}</p>
        ${imageHTML}
        <hr>
      `;

      postsDiv.prepend(post);
      postInput.value = "";
      imgInput.value = "";
    });
  }

  
  const topUsername = document.getElementById("topUsername");
  if (topUsername) {
    topUsername.textContent = localStorage.getItem("userName") || "User";
  }

  
  const loginBtn = document.getElementById("loginBtn");
  const loginPopup = document.getElementById("loginPopup");
  const saveProfile = document.getElementById("saveProfile");

  if (loginBtn && loginPopup && saveProfile) {

    loginBtn.addEventListener("click", () => {
      loginPopup.style.display = "flex";
    });

    saveProfile.addEventListener("click", () => {
      const name = document.getElementById("nameInput").value.trim();
      const district = document.getElementById("districtInput").value.trim();
      const crop = document.getElementById("cropInput").value.trim();

      if (name === "" || district === "" || crop === "") {
        alert("Fill all fields!");
        return;
      }

    
      localStorage.setItem("userName", name);
      localStorage.setItem("userDistrict", district);
      localStorage.setItem("userCrop", crop);

      
      loginPopup.style.display = "none";

      
      window.location.href = "../pages/home.html";
    });
  }

});






    

