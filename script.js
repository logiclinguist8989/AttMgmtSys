// JavaScript: Adding Student Records
function addStudent() {
    const studentTable = document.querySelector("#student table");
    const studentId = document.getElementById("student-id").value.trim();
    const studentName = document.getElementById("student-name").value.trim();
    const studentDOB = document.getElementById("student-dob").value;
    const studentGender = document.getElementById("student-gender").value;
    const studentClass = document.getElementById("student-class").value.trim();

    if (studentId && studentName && studentDOB && studentGender && studentClass) {
        const newRow = studentTable.insertRow();
        newRow.innerHTML = `
            <td>${studentId}</td>
            <td>${studentName}</td>
            <td>${studentDOB}</td>
            <td>${studentGender}</td>
            <td>${studentClass}</td>
        `;
        alert("Student record added successfully!");
        // Clear input fields
        document.getElementById("student-id").value = '';
        document.getElementById("student-name").value = '';
        document.getElementById("student-dob").value = '';
        document.getElementById("student-gender").value = '';
        document.getElementById("student-class").value = '';
    } else {
        alert("Please fill in all the fields.");
    }
}

// JavaScript: Adding Attendance Records
function addAttendance() {
    const attendanceTable = document.querySelector("#attendance table");
    const attendanceId = document.getElementById("attendance-id").value.trim();
    const attendanceDate = document.getElementById("attendance-date").value;
    const attendanceStatus = document.getElementById("attendance-status").value;
    const attendanceStudent = document.getElementById("attendance-student").value.trim();
    const attendanceSubject = document.getElementById("attendance-subject").value.trim();
    const attendanceTeacher = document.getElementById("attendance-teacher").value.trim();

    if (attendanceId && attendanceDate && attendanceStatus && attendanceStudent && attendanceSubject && attendanceTeacher) {
        const newRow = attendanceTable.insertRow();
        newRow.innerHTML = `
            <td>${attendanceId}</td>
            <td>${attendanceDate}</td>
            <td>${attendanceStatus}</td>
            <td>${attendanceStudent}</td>
            <td>${attendanceSubject}</td>
            <td>${attendanceTeacher}</td>
        `;
        alert("Attendance record added successfully!");
        // Clear input fields
        document.getElementById("attendance-id").value = '';
        document.getElementById("attendance-date").value = '';
        document.getElementById("attendance-status").value = '';
        document.getElementById("attendance-student").value = '';
        document.getElementById("attendance-subject").value = '';
        document.getElementById("attendance-teacher").value = '';
    } else {
        alert("Please fill in all the fields.");
    }
}
// Add Student Functionality
function addStudent() {
    const tableBody = document.querySelector("#student table tbody");
    const id = document.getElementById("student-id").value.trim();
    const name = document.getElementById("student-name").value.trim();
    const dob = document.getElementById("student-dob").value;
    const gender = document.getElementById("student-gender").value;
    const studentClass = document.getElementById("student-class").value.trim();

    if (id && name && dob && gender && studentClass) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${id}</td><td>${name}</td><td>${dob}</td><td>${gender}</td><td>${studentClass}</td>`;
        tableBody.appendChild(row);

        // Clear inputs
        document.getElementById("student-id").value = "";
        document.getElementById("student-name").value = "";
        document.getElementById("student-dob").value = "";
        document.getElementById("student-gender").value = "";
        document.getElementById("student-class").value = "";

        alert("Student added successfully!");
    } else {
        alert("Please fill in all fields.");
    }
}

// Add Attendance Functionality
function addAttendance() {
    const tableBody = document.querySelector("#attendance table tbody");
    const id = document.getElementById("attendance-id").value.trim();
    const date = document.getElementById("attendance-date").value;
    const status = document.getElementById("attendance-status").value;
    const student = document.getElementById("attendance-student").value.trim();
    const subject = document.getElementById("attendance-subject").value.trim();
    const teacher = document.getElementById("attendance-teacher").value.trim();

    if (id && date && status && student && subject && teacher) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${id}</td><td>${date}</td><td>${status}</td><td>${student}</td><td>${subject}</td><td>${teacher}</td>`;
        tableBody.appendChild(row);

        alert("Attendance added successfully!");
    } else {
        alert("Please fill in all fields.");
    }
}

// Search Functionality
function searchTable(sectionId, inputId) {
    const input = document.getElementById(inputId).value.toLowerCase();
    const rows = document.querySelectorAll(`#${sectionId} table tbody tr`);

    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        const match = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(input));
        row.style.display = match ? "" : "none";
    });
}

// JavaScript: Search Functionality
function searchTable(sectionId, inputId) {
    const input = document.getElementById(inputId).value.toLowerCase();
    const table = document.querySelector(`#${sectionId} table`);
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        let match = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent.toLowerCase().includes(input)) {
                match = true;
                break;
            }
        }
        rows[i].style.display = match ? "" : "none";
    }
}
