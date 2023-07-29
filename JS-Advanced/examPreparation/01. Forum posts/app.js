window.addEventListener("load", solve);

function solve() {
  let postTitleInput = document.getElementById("post-title");
  let postCategoryInput = document.getElementById("post-category");
  let postContentInput = document.getElementById("post-content");
  let publishBtn = document.getElementById("publish-btn");
  let postsForReview = document.getElementById("relatedPosts");
  let uploadedPosts = document.getElementById("published-list");
  let clearBtn = document.getElementById("clear-btn");

  publishBtn.addEventListener("click", publishForReview);
  clearBtn.addEventListener("click", clearPosts);

  function publishForReview(e) {
    e.preventDefault();
    if (
      postTitleInput.value == "" ||
      postCategoryInput.value == "" ||
      postContentInput.value == ""
    ) {
      return;
    }
    let list = document.createElement("li");
    list.classList.add("rpost");

    let article = document.createElement("article");

    let heading = document.createElement("h4");
    heading.textContent = postTitleInput.value;

    let paragraphOne = document.createElement("p");
    paragraphOne.textContent = "Category: " + postCategoryInput.value;
    let paragraphTwo = document.createElement("p");
    paragraphTwo.textContent = "Content: " + postContentInput.value;

    let buttonEdit = document.createElement("button");
    buttonEdit.classList.add("action-btn", "edit");
    buttonEdit.textContent = "Edit";

    let buttonApprove = document.createElement("button");
    buttonApprove.classList.add("action-btn", "approve");
    buttonApprove.textContent = "Approve";

    article.appendChild(heading);
    article.appendChild(paragraphOne);
    article.appendChild(paragraphTwo);
    list.appendChild(article);
    list.appendChild(buttonEdit);
    list.appendChild(buttonApprove);
    postsForReview.appendChild(list);

    postTitleInput.value = "";
    postCategoryInput.value = "";
    postContentInput.value = "";

    buttonApprove.addEventListener("click", approvePost);
    buttonEdit.addEventListener("click", editPost);
  }
  function approvePost(e) {
    e.preventDefault();
    let btnEdit = e.target;
    let btnApprove = e.target.previousSibling;
    let post = e.target.parentElement;
    postsForReview.removeChild(post);
    post.removeChild(btnEdit);
    post.removeChild(btnApprove);
    uploadedPosts.appendChild(post);
  }
  function editPost(e) {
    e.preventDefault();
    let post = e.target.parentElement;
    let articleChildren = post.children[0].children;
    postTitleInput.value = articleChildren[0].textContent;
    postCategoryInput.value = articleChildren[1].textContent.slice(10);
    postContentInput.value = articleChildren[2].textContent.slice(9);
    postsForReview.removeChild(post);
  }
  function clearPosts(e) {
    e.preventDefault();
    let uploadList = e.target.previousElementSibling;
    while (uploadList.firstChild) {
      uploadList.removeChild(uploadList.firstChild);
    }
  }
}
