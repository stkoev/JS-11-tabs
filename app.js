const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (!id) return;
  //   remove active class from all buttons
  btns.forEach((btn) => {
    btn.classList.remove("active");
    e.target.classList.add("active");
  });
  //   remove active class from articles
  articles.forEach((article) => {
    article.classList.remove("active");
  });

  const element = document.getElementById(id);
  element.classList.add("active");
});
