const form = document.getElementById("form");
const result = document.getElementById("result");
const modal = document.getElementById("popup-submit");
const span = document.getElementsByClassName("close")[0];
const submitResult = document.getElementById("submit-result");
const submitResultInner1 = document.getElementById("submit-result-inner1");
const submitResultInner2 = document.getElementById("submit-result-inner2");

span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  modal.style.display = "block";
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        submitResult.classList.add("active");
        submitResultInner1.classList.remove("hidden");
        submitResultInner1.classList.add("block");
        result.innerHTML = json.message;
      } else {
        console.log(response);
        submitResultInner2.classList.remove("hidden");
        submitResultInner2.classList.add("block");
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      result.style.display = "none";
    });
});
