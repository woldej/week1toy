function calculateGrade() {
    // Get the marks from the input field.
    const marks = Number(document.getElementById("marks").value);

    // Validate the input.
    if (marks < 0 || marks > 100) {
      alert("Marks must be between 0 and 100.");
      return;
    }

    // Calculate the grade.
    let grade = "";
    if (marks >= 80) {
      grade = "A";
    } else if (marks >= 60) {
      grade = "B";
    } else if (marks >= 50) {
      grade = "C";
    } else if (marks >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }

    // Display the grade.
    document.getElementById("grade").innerHTML = `Your grade is: ${grade}`;
  }
