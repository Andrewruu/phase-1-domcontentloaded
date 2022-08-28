// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM loaded!');
    document.getElementById('text').textContent = 'This is really cool!';
    
  });

console.log(document.getElementById('text').innerText);
console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");  