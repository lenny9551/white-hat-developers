const cards = [
    {
      title: "PROGRAMING LANGUAGE (JavaScript)",
      desc: "is a formal language used to write instructions that a computer can understand and execute.",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },
    {
      title: "STYLING LANGUAGE (CSS)",
      desc: "is used to style and layout web pages including colors, fonts, and spacing.",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
    },
    {
      title: "STRUCTURE LANGUAGE (HTML)",
      desc: "provides the structure of web pages using elements like headings, paragraphs, and links.",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
    }
  ];

  let current = 0;

  function updateCard() {
    document.getElementById('logo').src = cards[current].img;
    document.getElementById('title').innerText = cards[current].title;
    document.getElementById('desc').innerText = cards[current].desc;
  }

  function prevCard() {
    current = (current - 1 + cards.length) % cards.length;
    updateCard();
  }

  function nextCard() {
    current = (current + 1) % cards.length;
    updateCard();
  }

  // Initial load
  updateCard();
  document.getElementById('desc').style.color = 'black';