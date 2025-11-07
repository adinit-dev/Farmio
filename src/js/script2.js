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
          // First time → add like
          count.textContent = parseInt(count.textContent) + 1;
          this.dataset.liked = "true";
          this.style.color = "#0B3C5D"; // optional: highlight when liked
        } else {
          // Click again → remove like
          count.textContent = parseInt(count.textContent) - 1;
          this.dataset.liked = "false";
          this.style.color = "inherit"; // reset style
        }
    });


    // ✅ SHOW COMMENT BOX
    post.querySelector(".comment-btn").addEventListener("click", function() {
      const box = post.querySelector(".comment-box");
      box.style.display = (box.style.display === "none") ? "block" : "none";
    });

    // ✅ ADD COMMENT
    post.querySelector(".add-comment").addEventListener("click", function() {
      const input = post.querySelector(".comment-input");
      const text = input.value.trim();
      if(text === "") return;

      const commentList = post.querySelector(".comments-list");
      const newComment = document.createElement("p");
      newComment.textContent = text;
      commentList.appendChild(newComment);

      input.value = "";
    });

  });
});










