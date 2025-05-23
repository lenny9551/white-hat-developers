 let message = JSON.parse(localStorage.getItem("message")) || [];

  // Show messages on page load
  window.onload = function () {
    displayMessages();
  };

  // Add a new message
  function addMessage() {
    const input = document.getElementById("messageInput");
    const text = input.value.trim();

    if (text === "") {
      alert("Please enter a message.");
      return;
    }

    const newMessage = {
      text: text,
      date: new Date().toLocaleString()
    };

    message.push(newMessage);
    localStorage.setItem("message", JSON.stringify(message));
    input.value = ""; // Clear input
    displayMessages(); // Refresh message list
  }

  // Show messages on page
  function displayMessages() {
    const output = document.getElementById("displayMessage");
    output.innerHTML = ""; // Clear display

    message.forEach((msg, index) => {
      const messageElement = document.createElement("div");
      messageElement.innerHTML = `
        ${msg.date}: ${msg.text}
        <button onclick="deleteMessage(${index})" style="margin-left:10px;">Delete</button>
      `;
      output.appendChild(messageElement);
    });
  }

  // Delete a specific message
  function deleteMessage(index) {
    message.splice(index, 1); // Remove the specific message
    localStorage.setItem("message", JSON.stringify(message));
    displayMessages(); // Update UI
  }

  // Optional: Press Enter in the textarea to save (shift+enter for new line)
  document.getElementById("messageInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // prevent new line
      addMessage();
    }
  });