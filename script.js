document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display personal information
    fetch('https://alice-portfolio.onrender.com/personal-info')
        .then(response => response.json())
        .then(data => {
            const info = data[0];
            document.getElementById('personal-info').innerHTML = `
                <img src=${info.personalImg}>
                <div class=name>${info.name}</div>
                <div class="objective">
                    <img class="objective-img" src=${info.objectiveIcon}>
                    <div class="objective-text"> ${info.objective} </div>
                </div>
                <div class="phone">
                    <img class="objective-img"
                        src=${info.phoneIcon}>
                    <div class="phone-text"> ${info.contactNo}</div>
                </div>
                <div class="email">
                    <img class="objective-img"
                        src=${info.emailIcon}>
                    <div class="email-text">${info.email}</div>
                </div>
                <div class="email">
                    <img class="objective-img"
                        src=${info.homeIcon}>
                    <div class="email-text">${info.address}</div>
                </div>
            `;
        });

    // Fetch and display skills
    fetch('https://alice-portfolio.onrender.com/skills')
        .then(response => response.json())
        .then(data => {
            const skillsList = data.map(skill => `<li>${skill.description} - ${skill.expertiseLevel}</li>`).join('');
            document.getElementById('skills').innerHTML = `
                <h2>Skills</h2>
                <ul>${skillsList}</ul>
            `;
        });

    // Fetch and display work experience
    fetch('https://alice-portfolio.onrender.com/work-experience')
        .then(response => response.json())
        .then(data => {
            const workExpList = data.map(exp => `
                <div class="job-box">
                    <div class="job-title"> ${exp.designation} @ ${exp.companyName}</div>
                    <div class="job-date"> ${exp.year}</div>
                    <div class="job-description">${exp.details}</div>
                </div>
            `).join('');
            document.getElementById('work-experience').innerHTML = `
                <h1 class="work-title">Work Experience</h1>
                ${workExpList}
            `;
        });

    // Fetch and display education
    fetch('https://alice-portfolio.onrender.com/education')
        .then(response => response.json())
        .then(data => {
            const educationList = data.map(edu => `
                <div class="job-box">
                    <div class="job-title"> ${edu.school}</div>
                    <div class="job-date"> ${edu.year}</div>
                    <div class="job-description"> ${edu.address}</div>
                </div>
            `).join('');
            document.getElementById('education').innerHTML = `
                <h1>Education</h1>
                ${educationList}
            `;
        });

    // Fetch and display personal references
    fetch('https://alice-portfolio.onrender.com/personal-references')
        .then(response => response.json())
        .then(data => {
            const referencesList = data.map(ref => `
                <div class="job-box">
                    <div class="job-title"> ${ref.name}</div>
                    <div class="job-date"> ${ref.relationship}</div>
                    <div class="job-description">${ref.contactNumber}</div>
                </div>
            `).join('');
            document.getElementById('personal-references').innerHTML = `
                <h1>Personal References</h1>
                ${referencesList}
            `;
        });
});
