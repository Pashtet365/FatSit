window.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nameInput = document.querySelector('input[name="name"]');
  const phoneInput = document.querySelector('input[name="phone"]');
  const contentTextarea = document.querySelector('textarea[name="content"]');

  form.addEventListener("submit", function (event) {
    let hasError = false;

    if (nameInput.value.trim() === "") {
      nameInput.classList.add("error");
      hasError = true;
    } else {
      nameInput.classList.remove("error");
    }

    if (phoneInput.value.trim() === "") {
      phoneInput.classList.add("error");
      hasError = true;
    } else {
      phoneInput.classList.remove("error");
    }

    if (contentTextarea.value.trim() === "") {
      contentTextarea.classList.add("error");
      hasError = true;
    } else {
      contentTextarea.classList.remove("error");
    }

    if (hasError) {
      event.preventDefault();
      alert("Пожалуйста, заполните обязательные поля.");
    }
  });
});

//Скрипт для перехода на старницу с арендой по нажатию на крестик

var closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", function () {
  window.location.href = "./equipment_rental.html";
});
