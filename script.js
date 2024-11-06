// script.js
document.getElementById('generateSubjects').addEventListener('click', function() {
    const subjectCount = parseInt(document.getElementById('subjectCount').value);

    if (isNaN(subjectCount) || subjectCount <= 0) {
        alert("Please enter a valid number of subjects.");
        return;
    }

    const subjectsContainer = document.getElementById('subjectsContainer');
    subjectsContainer.innerHTML = ''; // Clear any previous input fields

    // Dynamically create input fields for each subject
    for (let i = 1; i <= subjectCount; i++) {
        const subjectRow = document.createElement('div');
        subjectRow.classList.add('subject-row');

        const label = document.createElement('label');
        label.textContent = `Subject ${i}:`;
        subjectRow.appendChild(label);

        const inputField = document.createElement('input');
        inputField.type = 'number';
        inputField.classList.add('subject-input');
        inputField.setAttribute('placeholder', `Enter marks for Subject ${i}`);
        subjectRow.appendChild(inputField);

        subjectsContainer.appendChild(subjectRow);
    }

    // Hide subject count section and show the grade input form
    document.getElementById('subjectCountSection').style.display = 'none';
    document.getElementById('gradeForm').style.display = 'block';
});

document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const subjectInputs = document.querySelectorAll('.subject-input');
    let grades = [];
    let total = 0;

    // Gather grades from inputs
    subjectInputs.forEach(input => {
        const grade = parseFloat(input.value);
        if (!isNaN(grade)) {
            grades.push(grade);
            total += grade;
        }
    });

    // Calculate average and grade
    const average = total / grades.length;
    let grade = '';

    if (average >= 90) {
        grade = 'A';
    } else if (average >= 80) {
        grade = 'B';
    } else if (average >= 70) {
        grade = 'C';
    } else if (average >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Display results
    document.getElementById('average').textContent = average.toFixed(2);
    document.getElementById('grade').textContent = grade;

    // Show result and hide the form
    document.getElementById('gradeForm').style.display = 'none';
    document.getElementById('result').style.display = 'block';
});

// Reset the calculator to start over
document.getElementById('resetBtn').addEventListener('click', function() {
    window.location.reload();
});
