fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));


/**
 * fetch("URL")
  .then(response => response.json())   // ডাটাকে JSON এ রূপান্তর করা
  .then(data => console.log(data))     // ডাটা দেখা
  .catch(error => console.log("Error:", error)); // ভুল হলে ধরবে
 *
    fetch() - একটি ওয়েব সার্ভিস থেকে ডাটা আনার জন্য ব্যবহৃত হয়
 */