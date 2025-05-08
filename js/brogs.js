const showCommentBtn = document.getElementById('showCommentBtn');
    const textareaContainer = document.getElementById('textareaContainer');
    const deleteBtn = document.getElementById('deleteBtn');

    showCommentBtn.addEventListener('click', () => {
      textareaContainer.style.display = 'block';
      showCommentBtn.style.display = 'none';
    });

    deleteBtn.addEventListener('click', () => {
      textareaContainer.style.display = 'none';
      showCommentBtn.style.display = 'inline-block';
    });
    document.getElementById('postForm').addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent actual form submission

      const message = document.getElementById('message').value;
      
      // Simulated POST action (e.g., send to server or log to console)
      console.log('Message posted:', message);

      // Optional: Reset form
      this.reset();
      
      // Optional: Display confirmation
      alert('Message posted successfully!');
    });