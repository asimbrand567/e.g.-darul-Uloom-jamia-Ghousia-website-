// Handle Feedback Form Submission
document.getElementById('feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
        alert(`Thank you, ${name}! Your feedback has been submitted.`);
    } else {
        alert('Please fill out all fields.');
    }
});

// Handle Admission Form Submission
document.getElementById('admission-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const fullName = document.getElementById('full-name').value;
    const className = document.getElementById('class').value;

    if (fullName && className) {
        alert(`Thank you, ${fullName}! Your admission request for Class ${className} has been submitted.`);
    } else {
        alert('Please fill out all fields.');
    }
});

// Handle Attendance Form Submission
document.getElementById('attendance-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const attendanceName = document.getElementById('attendance-name').value;
    const attendanceStatus = document.getElementById('attendance-status').value;

    if (attendanceName && attendanceStatus) {
        alert(`Attendance for ${attendanceName} has been marked as ${attendanceStatus}.`);
    } else {
        alert('Please fill out all fields.');
    }
});
// Dynamic news items array
const newsItems = [
    { title: 'Annual Sports Day', date: '2024-12-15', content: 'Join us for the Annual Sports Day on December 15th. Get ready for fun activities and competitive games.' },
    { title: 'Mid-Term Exam Schedule', date: '2025-01-10', content: 'The Mid-Term exams will start from January 10th. Please prepare accordingly.' },
];

// Add news dynamically
window.onload = function() {
    const newsList = document.getElementById('news-list');
    newsItems.forEach(news => {
        const li = document.createElement('li');
        li.innerHTML = `<h3>${news.title}</h3><p><strong>Date:</strong> ${news.date}</p><p>${news.content}</p>`;
        newsList.appendChild(li);
    });
};
document.getElementById('grades-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const studentName = document.getElementById('student-name').value;
    const mathGrade = parseInt(document.getElementById('math-grade').value);
    const scienceGrade = parseInt(document.getElementById('science-grade').value);
    const englishGrade = parseInt(document.getElementById('english-grade').value);

    if (studentName && mathGrade && scienceGrade && englishGrade) {
        const averageGrade = (mathGrade + scienceGrade + englishGrade) / 3;

        let resultMessage = `Student: ${studentName}<br>Average Grade: ${averageGrade.toFixed(2)}<br>`;
        if (averageGrade >= 90) {
            resultMessage += 'Performance: Excellent';
        } else if (averageGrade >= 75) {
            resultMessage += 'Performance: Good';
        } else if (averageGrade >= 50) {
            resultMessage += 'Performance: Average';
        } else {
            resultMessage += 'Performance: Needs Improvement';
        }

        document.getElementById('performance-result').innerHTML = resultMessage;
    } else {
        alert('Please fill out all fields.');
    }
});
const events = [
    { title: 'Annual Sports Day', date: '2024-12-15' },
    { title: 'Mid-Term Exams', date: '2025-01-10' },
];

const generateCalendar = () => {
    const calendarView = document.getElementById('calendar-view');
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let calendarHTML = `<table><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>`;

    // Create the calendar days for the current month
    for (let i = 1; i <= daysInMonth; i++) {
        const event = events.find(event => new Date(event.date).getDate() === i);
        calendarHTML += `<td class="${event ? 'event-day' : ''}">${i} ${event ? `<br><small>${event.title}</small>` : ''}</td>`;

        if (new Date(year, month, i).getDay() === 6) {
            calendarHTML += '</tr><tr>';
        }
    }
    calendarHTML += '</tr></table>';

    calendarView.innerHTML = calendarHTML;
};

// Generate the calendar on page load
window.onload = generateCalendar;
document.getElementById('homework-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const homeworkTitle = document.getElementById('homework-title').value;
    const homeworkFile = document.getElementById('homework-file').files[0];

    if (homeworkTitle && homeworkFile) {
        const homeworkDetails = `
            <h3>Homework Title: ${homeworkTitle}</h3>
            <p>File: ${homeworkFile.name}</p>
        `;
        document.getElementById('uploaded-homework').innerHTML = homeworkDetails;
    } else {
        alert('Please fill out all fields.');
    }
});
document.getElementById('resource-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const resourceTitle = document.getElementById('resource-title').value;
    const resourceFile = document.getElementById('resource-file').files[0];

    if (resourceTitle && resourceFile) {
        const resourceDetails = `
            <h3>Resource Title: ${resourceTitle}</h3>
            <p>File: ${resourceFile.name}</p>
        `;
        document.getElementById('uploaded-resources').innerHTML = resourceDetails;
    } else {
        alert('Please fill out all fields.');
    }
});
const duas = [
    'اللهم اجعلنا من أهل القرآن',
    'ربنا آتنا من لدنك رحمة وهيئ لنا من أمرنا رشدا'
];

document.getElementById('dua-text').innerText = duas[Math.floor(Math.random() * duas.length)];
