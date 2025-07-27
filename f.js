document.querySelector("#contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    const name=document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if(!name || !email || !message){
    alert("Please fill in all fields");
    return;
  }

    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailRegex)) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Form submitted successfully!!");
  document.getElementById("contactForm").reset();
})