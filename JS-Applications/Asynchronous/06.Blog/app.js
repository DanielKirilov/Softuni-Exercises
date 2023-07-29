function attachEvents() {
  let loadPostsBtn = document.getElementById("btnLoadPosts");
  let viewPostBtn = document.getElementById("btnViewPost");
  let postsOptions = document.getElementById("posts");

  let postTitle = document.getElementById("post-title");
  let postBody = document.getElementById("post-body");
  let postComments = document.getElementById("post-comments");

  loadPostsBtn.addEventListener("click", loadPostsHandler);
  viewPostBtn.addEventListener("click", viewPostHandler);

  async function loadPostsHandler(e) {
    let responsePosts = await fetch(
      `http://localhost:3030/jsonstore/blog/posts`
    );
    let data = await responsePosts.json();

    for (let post in data) {
      let option = document.createElement("option");
      option.value = post;
      option.textContent = data[post].title;

      postsOptions.appendChild(option);
    }
  }
  async function viewPostHandler(e) {
    postComments.textContent = "";
    postTitle.textContent = "";
    postBody.textContent = "";
    let chosenPostId = postsOptions.value;

    let chosenTitle = document.querySelectorAll(
      `option[value="${chosenPostId}"]`
    )[0].textContent;

    let responsePosts = await fetch(
      `http://localhost:3030/jsonstore/blog/posts`
    );
    let data = await responsePosts.json();
    let postBodyContent = data[chosenPostId].body;

    postTitle.setAttribute("id", "post-title");
    postTitle.textContent = chosenTitle;

    postBody.setAttribute("id", "post-body");
    postBody.textContent = postBodyContent;

    let responseComments = await fetch(
      `http://localhost:3030/jsonstore/blog/comments`
    );
    let dataComments = await responseComments.json();

    for (let comment in dataComments) {
      if (dataComments[comment].postId == chosenPostId) {
        let postId = dataComments[comment].postId;
        let textComment = dataComments[comment].text;

        let liComment = document.createElement("li");
        liComment.setAttribute("id", postId);
        liComment.textContent = textComment;
        postComments.appendChild(liComment);
      }
    }
  }
}

attachEvents();
