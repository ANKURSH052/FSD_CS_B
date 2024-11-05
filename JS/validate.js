const reg = document.getElementById("register");
reg.addEventListener("submit", (event) => {
  event.preventDefault();
  const mono = document.register.mobile.value;
  if (mono.length != 10) {
    alert("invalid mobile number");
  } else reg.submit();
});
