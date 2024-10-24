document.querySelectorAll(".project").forEach((project) => {
  project.addEventListener("mouseover", () => {
    project.style.backgroundColor = "#666";
  });

  project.addEventListener("mouseout", () => {
    project.style.backgroundColor = "#555";
  });

  project.addEventListener("click", () => {
    const projectDetails = document.getElementById("project-details");
    projectDetails.innerHTML = `<h3>Chi Tiết Dự Án:</h3><p>${project.dataset.details}</p>`;
  });
});

// Smooth scroll
document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});
function showTasks(sessionNumber) {
  // Ẩn tất cả các danh sách bài tập
  const allTasks = document.querySelectorAll(".tasks");
  allTasks.forEach((task) => (task.style.display = "none"));

  // Xóa class "active" khỏi tất cả các buổi
  const allProjects = document.querySelectorAll(".project");
  allProjects.forEach((project) => project.classList.remove("active"));

  // Hiển thị danh sách bài tập của buổi được chọn
  const selectedTasks = document.getElementById(`tasks-${sessionNumber}`);
  selectedTasks.style.display = "block";

  // Thêm class "active" vào buổi được chọn
  allProjects[sessionNumber - 1].classList.add("active");
}
