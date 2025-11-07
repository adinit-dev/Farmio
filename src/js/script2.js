document.addEventListener("DOMContentLoaded", () => {
  const postBtn = document.getElementById("postBtn");
  const postInput = document.getElementById("postInput");
  const postsDiv = document.getElementById("posts");
  const imgInput = document.getElementById("imageInput");

  if (!postBtn) return;

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
    post.innerHTML = `
    <p><b>Aditya</b> (Farmer)</p>
    <p>${text}</p>
    ${imageHTML}
    <hr>

    <div class="post-actions">
        <button class="upvote">👍 <span class="count">0</span></button>
        <button class="comment-btn">💬 Comment</button>
    </div>

    <div class="comment-box" style="display:none;">
        <input type="text" class="comment-input" placeholder="Write a comment...">
        <input type="file" class="comment-image" accept="image/*">
        <button class="add-comment">Post</button>
        <div class="comments-list"></div>
    </div>
  `;


    postsDiv.prepend(post);
    postInput.value = "";
    imgInput.value = "";

    // ✅ UPVOTE
    const upvoteBtn = post.querySelector(".upvote");
      upvoteBtn.dataset.liked = "false";

      upvoteBtn.addEventListener("click", function() {
        let count = this.querySelector(".count");

        if (this.dataset.liked === "false") {
          
          count.textContent = parseInt(count.textContent) + 1;
          this.dataset.liked = "true";
          this.style.color = "#0B3C5D"; 
        } else {
          
          count.textContent = parseInt(count.textContent) - 1;
          this.dataset.liked = "false";
          this.style.color = "inherit"; 
        }
    });


    
    post.querySelector(".comment-btn").addEventListener("click", function() {
      const box = post.querySelector(".comment-box");
      box.style.display = (box.style.display === "none") ? "block" : "none";
    });

  
     post.querySelector(".add-comment").addEventListener("click", function() {
      const input = post.querySelector(".comment-input");
      const imgFile = post.querySelector(".comment-image").files[0];
      const commentList = post.querySelector(".comments-list");

      if (input.value.trim() === "" && !imgFile) return;

      const newComment = document.createElement("div");
      newComment.style.marginTop = "8px";

      let imageHTML = "";
      if (imgFile) {
        const imgURL = URL.createObjectURL(imgFile);
        imageHTML = `<img src="${imgURL}" class="comment-img">`;
      }

      newComment.innerHTML = `
        <p>${input.value}</p>
        ${imageHTML}
      `;

      commentList.appendChild(newComment);
      input.value = "";
      post.querySelector(".comment-image").value = "";
    });


  });
});










