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