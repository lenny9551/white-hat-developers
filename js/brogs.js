// const showCommentBtn = document.getElementById('showCommentBtn');
    // const textareaContainer = document.getElementById('textareaContainer');
    // const deleteBtn = document.getElementById('deleteBtn');

    // // showCommentBtn.addEventListener('click', () => {
    // //   textareaContainer.style.display = 'block';
    // //   showCommentBtn.style.display = 'none';
    // // });

    // deleteBtn.addEventListener('click', () => {
    //   textareaContainer.style.display = 'none';
    //   showCommentBtn.style.display = 'inline-block';
    // });
    // document.getElementById('postForm').addEventListener('submit', function(e) {
    //   e.preventDefault(); // Prevent actual form submission

    //   const message = document.getElementById('message').value;
      
    //   // Simulated POST action (e.g., send to server or log to console)
    //   console.log('Message posted:', message);

    //   // Optional: Reset form
    //   this.reset();
      
    //   // Optional: Display confirmation
    //   alert('Message posted successfully!');
    // });
    const user = localStorage.getItem("loggedUser");

    // 🚫 Redirect to login if not logged in
    if (!user) {
      // window.location.href = "login.html";
    } else {
      document.getElementById("username").textContent = user;
    }

    // ✅ Load posts from localStorage
    function loadBlogs() {
    
      if(!user){
        window.location.href = "login.html";
      }
      else{

    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
      const list = document.getElementById("blogList");
      list.innerHTML = "";

      blogs.forEach((blog, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>#${index + 1} by ${blog.user}: ${blog.text} </span><div><button onclick=" deleteAllBlogs()">Delete</button></div>`;
        list.appendChild(li);
      });
      }
    
  postBlog();
    }
    
    // Delete all blogs
    function deleteAllBlogs() {
      localStorage.removeItem("blogs");
      loadBlogs();
    }

    // Attach delete button event
    document.getElementById("deleteBtn").addEventListener("click", deleteAllBlogs);
    // Post a new blog
    function postBlog() {
      const blogText = document.getElementById("textarea").value.trim();
      if (blogText === "") return;

      const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

      blogs.push({ user: user, text: blogText });

      localStorage.setItem("blogs", JSON.stringify(blogs));

      document.getElementById("blogInput").value = "";
      loadBlogs();
    }
    //  function saveData() {
    //         const data = document
    //             .getElementById('textarea')
    //             .value;
    //         localStorage
    //             .setItem('userData', data);
    //         displayData();
    //     }
    //     function displayData() {
    //         const savedData = localStorage
    //             .getItem('userData');
    //         document
    //             .getElementById('savedData')
    //             .innerText = savedData;
    //     }
    //     displayData();

    // ✅ Logout
    // function logout() {
    //   localStorage.removeItem("loggedUser");
    //   // window.location.href = "login.html";
    // }

    // // 🔁 Load posts on page load
    // logout();
    function logout() {
      localStorage.removeItem("loggedUser");
      window.location.href = "blog.html";
    }

    document.getElementById("logoutBtn").addEventListener("click", logout);