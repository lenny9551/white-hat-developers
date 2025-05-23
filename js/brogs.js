// // // // const showCommentBtn = document.getElementById('showCommentBtn');
// // //     // const textareaContainer = document.getElementById('textareaContainer');
// // //     // const deleteBtn = document.getElementById('deleteBtn');

// // //     // // showCommentBtn.addEventListener('click', () => {
// // //     // //   textareaContainer.style.display = 'block';
// // //     // //   showCommentBtn.style.display = 'none';
// // //     // // });

// // //     // deleteBtn.addEventListener('click', () => {
// // //     //   textareaContainer.style.display = 'none';
// // //     //   showCommentBtn.style.display = 'inline-block';
// // //     // });
// // //     // document.getElementById('postForm').addEventListener('submit', function(e) {
// // //     //   e.preventDefault(); // Prevent actual form submission

// // //     //   const message = document.getElementById('message').value;
      
// // //     //   // Simulated POST action (e.g., send to server or log to console)
// // //     //   console.log('Message posted:', message);

// // //     //   // Optional: Reset form
// // //     //   this.reset();
      
// // //     //   // Optional: Display confirmation
// // //     //   alert('Message posted successfully!');
// // //     // });
// // //     const user = localStorage.getItem("loggedUser");

// // //     // 🚫 Redirect to login if not logged in
// // //     if (!user) {
// // //       // window.location.href = "login.html";
// // //     } else {
// // //       document.getElementById("username").textContent = user;
// // //     }

// // //     // ✅ Load posts from localStorage
// // //     function loadBlogs() {
    
// // //       if(!user){
// // //         window.alert("Please login to view blogs.");
// // //         window.location.href = "login.html";
// // //       }
// // //       else{

// // //     const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
// // //       const list = document.getElementById("blogList");
// // //       list.innerHTML = "";

// // //       blogs.forEach((blog, index) => {
// // //         const li = document.createElement("li");
// // //         li.innerHTML = `<span>#${index + 1} by ${blog.user}: ${blog.text} </span><div><button onclick=" deleteAllBlogs(${index})">Delete</button></div>`;
// // //         list.appendChild(li);
// // //       });
// // //       }
    
// // //   postBlog();
// // //     }
    
// // //     // Delete all blogs
// // //     function deleteAllBlogs(index) {
// // //       // localStorage.removeItem("blogs");
// // //       blogs.splice(index, 1);
      
// // //       loadBlogs();
// // //     }

// // //     // Attach delete button event
// // //     // document.getElementById("deleteBtn").addEventListener("click", deleteAllBlogs);
// // //     // Post a new blog
// // //     function postBlog() {
// // //       const blogText = document.getElementById("textarea").value.trim();
// // //       if (blogText === "") return;

// // //       const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

// // //       blogs.push({ user: user, text: blogText });

// // //       localStorage.setItem("blogs", JSON.stringify(blogs));

// // //       document.getElementById("blogInput").value = "";
// // //       loadBlogs();
// // //     }
// // //     //  function saveData() {
// // //     //         const data = document
// // //     //             .getElementById('textarea')
// // //     //             .value;
// // //     //         localStorage
// // //     //             .setItem('userData', data);
// // //     //         displayData();
// // //     //     }
// // //     //     function displayData() {
// // //     //         const savedData = localStorage
// // //     //             .getItem('userData');
// // //     //         document
// // //     //             .getElementById('savedData')
// // //     //             .innerText = savedData;
// // //     //     }           n n nn fgvgyvygvgyvgygvhh
// // //     //     displayData();

// // //     // ✅ Logout
// // //     // function logout() {
// // //     //   localStorage.removeItem("loggedUser");
// // //     //   // window.location.href = "login.html";
// // //     // }

// // //     // // 🔁 Load posts on page load
// // //     // logout();
// // //     function logout() {
// // //       localStorage.removeItem("loggedUser");
// // //       window.location.href = "blog.html";
// // //     }

// // //     document.getElementById("logoutBtn").addEventListener("click", logout);
// // //      loadBlogs();

// // const user = localStorage.getItem("loggedUser");

// // // Redirect if not logged in
// // if (!user) {
// //   alert("Please login to view blogs.");
// //   window.location.href = "login.html";
// // } else {
// //   document.getElementById("username").textContent = user;
// // }

// // // Load and display blogs
// // function loadBlogs() {
// //   const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
// //   const list = document.getElementById("blogList");
// //   list.innerHTML = ""; // Clear existing posts

// //   blogs.forEach((blog, index) => {
// //     const li = document.createElement("li");
// //     li.innerHTML = `
// //       <span>#${index + 1} by ${blog.user}: ${blog.text}</span>
// //       <button style="margin-left:10px;" onclick="deleteBlog(${index})">Delete</button>
// //     `;
// //     list.appendChild(li);
// //   });
// // }

// // // Delete a blog post by index
// // function deleteBlog(index) {
// //   const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
// //   blogs.splice(index, 1); // Remove the post at index
// //   localStorage.setItem("blogs", JSON.stringify(blogs));
// //   loadBlogs();
// // }

// // // Post a new blog
// // function postBlog() {
// //   const textarea = document.getElementById("textarea");
// //   const blogText = textarea.value.trim();
// //   if (blogText === "") {
// //     alert("Please write a comment before posting.");
// //     return;
// //   }

// //   const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
// //   blogs.push({ user: user, text: blogText });
// //   localStorage.setItem("blogs", JSON.stringify(blogs));

// //   textarea.value = ""; // Clear textarea
// //   loadBlogs();
// // }

// // // Logout function
// // function logout() {
// //   localStorage.removeItem("loggedUser");
// //   window.location.href = "login.html";
// // }

// // // Attach event listeners after page loads
// // window.onload = function () {
// //   loadBlogs();

// //   // Post button triggers postBlog()
// //   const postBtn = document.getElementById("logoutBtn"); // your post button has id="logoutBtn" - rename if you want clearer name
// //   postBtn.onclick = postBlog;

// //   // Logout button triggers logout()
// //   const logoutBtn = document.getElementById("delete"); // your logout button id="delete"
// //   logoutBtn.onclick = logout;
// // };
// const isLoggedIn = localStorage.getItem("isLoggedIn");
// const user = localStorage.getItem("loggedUser");

// if (isLoggedIn !== "true" || !user) {
//   alert("Please login to view blogs.");
//   window.location.href = "login.html";
// } else {
//   document.getElementById("username").textContent = `Welcome, ${user}`;
// }
// function logout() {
//   localStorage.removeItem("loggedUser");
//   localStorage.removeItem("isLoggedIn");
//   window.location.href = "login.html";
// }
// ✅ Check login state
const isLoggedIn = localStorage.getItem("isLoggedIn");
const user = localStorage.getItem("loggedUser");

if (isLoggedIn !== "true" || !user) {
  alert("Please login to view blogs.");
  window.location.href = "login.html";
} else {
  document.getElementById("username").textContent = `Welcome, ${user}`;
}

// ✅ Load all blogs from localStorage
function loadBlogs() {
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const list = document.getElementById("blogList");
  list.innerHTML = ""; // Clear old list

  blogs.forEach((blog, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>#${index + 1} by ${blog.user}: ${blog.text}</span>
      <button style="margin-left:10px;" onclick="deleteBlog(${index})">Delete</button>
    `;
    list.appendChild(li);
  });
}

// ✅ Add new blog post
function postBlog() {
  const textarea = document.getElementById("textarea");
  const blogText = textarea.value.trim();
  if (blogText === "") {
    alert("Please write something before posting.");
    return;
  }

  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  blogs.push({ user, text: blogText });
  localStorage.setItem("blogs", JSON.stringify(blogs));

  textarea.value = ""; // Clear input
  loadBlogs(); // Refresh list
}

// ✅ Delete a blog by index
function deleteBlog(index) {
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  blogs.splice(index, 1);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  loadBlogs();
}

// ✅ Logout
function logout() {
  localStorage.removeItem("loggedUser");
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}

// ✅ Run after DOM fully loads
window.onload = function () {
  loadBlogs();

  // Post button
  document.getElementById("logoutBtn").onclick = postBlog;

  // Logout button
  document.getElementById("delete").onclick = logout;
};

