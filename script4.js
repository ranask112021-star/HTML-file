let students = JSON.parse(localStorage.getItem("students")) || [];

function saveData() {
  localStorage.setItem("students", JSON.stringify(students));
}

function getGrade(marks) {
  if (marks >= 80) return "A";
  if (marks >= 60) return "B";
  if (marks >= 50) return "C";
  return "Fail";
}

function renderTable(data = students) {
  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  data.forEach((student, index) => {
    let grade = getGrade(student.marks);

    tableBody.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.marks}</td>
        <td class="grade-${grade}">${grade}</td>
        <td>
          <button class="btn btn-danger btn-sm"
                  onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
  });

  calculateStats();
}

function addStudent() {
  let name = document.getElementById("name").value.trim();
  let marks = Number(document.getElementById("marks").value);

  if (name === "" || marks < 0 || marks > 100) {
    alert("Please enter valid name and marks");
    return;
  }

  students.push({ name, marks });
  saveData();
  renderTable();

  document.getElementById("name").value = "";
  document.getElementById("marks").value = "";
}

function deleteStudent(index) {
  students.splice(index, 1);
  saveData();
  renderTable();
}

function showPassed() {
  let passed = students.filter(s => s.marks >= 50);
  renderTable(passed);
}

function sortStudents() {
  students.sort((a, b) => b.marks - a.marks);
  saveData();
  renderTable();
}

function searchStudent() {
  let text = document.getElementById("search").value.toLowerCase();
  let filtered = students.filter(s =>
    s.name.toLowerCase().includes(text)
  );
  renderTable(filtered);
}

function resetTable() {
  renderTable();
}

function calculateStats() {
  if (students.length === 0) {
    document.getElementById("stats").innerText = "";
    return;
  }

  let marks = students.map(s => s.marks);
  let avg = (marks.reduce((a, b) => a + b, 0) / marks.length).toFixed(2);

  document.getElementById("stats").innerText =
    `📊 Average: ${avg} | 🔝 Highest: ${Math.max(...marks)} | 🔻 Lowest: ${Math.min(...marks)}`;
}

renderTable();
