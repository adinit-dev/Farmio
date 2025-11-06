const postBtn = document.getElementById("postBtn");
const postInput = document.getElementById("postInput");
const postsDiv = document.getElementById("posts");
const imgInput = document.getElementById("imageInput");


postBtn.addEventListener("click", () => {
    const text = postInput.value.trim();
    const file = imgInput.files[0];
    if(text === "" && !file ) 
        return;

    let imageHTML = "";

    if(file) {
        const imgURL = URL.createObjectURL(file);
        imageHTML = `<img src="${imgURL}" class="post-img">`;
    }

    const post = document.createElement("div");
    post.classList.add("post");

   

    post.innerHTML = `
        <p><b>Aditya</b> (Assam Farmer):</p>
        <p>${text}</p> 
        ${imageHTML}
        <hr>
    `;

    postsDiv.prepend(post); // add newest on top
    postInput.value = "";
    imgInput.value = "";
});
