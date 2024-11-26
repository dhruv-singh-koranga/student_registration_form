// script.js

let students = [];

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const tableBody = document.getElementById("student-data-body");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const rollno = document.getElementById("rollno").value;
        const contactno = document.getElementById("contactno").value;

        const student = {
            name,
            email,
            rollno,
            contactno
        };

        students.push(student);
        displayStudentData();
        form.reset();
    });

    displayStudentData();
});
// to display the information of students in table format
function displayStudentData() {
    const tableBody = document.getElementById("student-data-body");
    tableBody.innerHTML = "";

    students.forEach(function(student, index) {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.rollno}</td>
            <td>${student.contactno}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
    });
}
// to use local storagrlocalStorage.setItem('userData', JSON.stringify(userData));

localStorage.setItem('students', JSON.stringify(students));

const storedUserData = localStorage.getItem('students');
const userDataObject = JSON.parse(storedUserData);
// to edit the student information
function editStudent(index) {
    const student = students[index];
    document.getElementById("name").value = student.name;
    document.getElementById("email").value = student.email;
    document.getElementById("rollno").value = student.rollno;
    document.getElementById("contactno").value = student.contactno;
}
// to delete the student information
function deleteStudent(index) {
    students.splice(index, 1);
    displayStudentData();
}