document.addEventListener("DOMContentLoaded", () => {

  // Post system elements
  const postBtn = document.getElementById("postBtn");
  const postInput = document.getElementById("postInput");
  const postsDiv = document.getElementById("posts");
  const imgInput = document.getElementById("imageInput");

  // Login popup elements (only exist on first page)
  const loginBtn = document.getElementById("loginBtn"); 
  const loginPopup = document.getElementById("loginPopup"); 
  const saveProfile = document.getElementById("saveProfile"); 

  // ✅ Post Button Functionality (Your Farm Chat Feed)
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

      const post = document.createElement("div");
      post.classList.add("post");

      const name = localStorage.getItem("userName") || "Farmer";
      const district = localStorage.getItem("userDistrict") || "";
      const crop = localStorage.getItem("userCrop") || "";

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

  // ✅ Login Popup Functionality (only on landing)
  if (loginBtn && saveProfile) {
    loginBtn.addEventListener("click", () => {
      loginPopup.style.display = "flex";
    });

    saveProfile.addEventListener("click", () => {
      const name = document.getElementById("nameInput").value;
      const district = document.getElementById("districtInput").value;
      const crop = document.getElementById("cropInput").value;

      localStorage.setItem("userName", name);
      localStorage.setItem("userDistrict", district);
      localStorage.setItem("userCrop", crop);

      loginPopup.style.display = "none";
      loginBtn.innerHTML = name;
    });
  }

});






    

