document.addEventListener('DOMContentLoaded', function () {
    const fetchResumeData = async () => {
        const response = await fetch('https://alice-portfolio.onrender.com/resume-data');
        const data = await response.json();
        return data;
    };

    fetchResumeData().then((data) => {
        // Retrieve the first item in the data array for personal information
        const info = data.personalInfo;

        // Fetch and display personal information
        document.getElementById('personal-info').innerHTML = `
            <img src=${info.personalImg} alt="Personal Image">
            <div class="name">${info.name}</div>
            <div class="objective">
                <img class="icon" src=${info.objectiveIcon} alt="Objective Icon">
                <div class="objective-text">${info.objective}</div>
            </div>
            <div class="phone">
                <img class="icon" src=${info.phoneIcon} alt="Phone Icon">
                <div class="phone-text">${info.contactNo}</div>
            </div>
            <div class="email">
                <img class="icon" src=${info.emailIcon} alt="Email Icon">
                <div class="email-text">${info.email}</div>
            </div>
            <div class="address">
                <img class="icon" src=${info.homeIcon} alt="Home Icon">
                <div class="address-text">${info.address}</div>
            </div>
        `;

        // Fetch and display skills
        const skillsList = data.skills.map(skill => `<li>${skill.description} - ${skill.expertiseLevel}</li>`).join('');
        document.getElementById('skills').innerHTML = `
            <h2>Skills</h2>
            <ul>${skillsList}</ul>
        `;

        // Fetch and display work experience
        const workExpList = data.workExperience.map(exp => `
            <div class="job-box">
                <div class="job-title">${exp.designation} @ ${exp.companyName}</div>
                <div class="job-date">${exp.year}</div>
                <div class="job-description">${exp.details}</div>
            </div>
        `).join('');
        document.getElementById('work-experience').innerHTML = `
            <h1 class="work-title">Work Experience</h1>
            ${workExpList}
        `;

        // Fetch and display education
        const educationList = data.education.map(edu => `
            <div class="edu-box">
                <div class="edu-title">${edu.school}</div>
                <div class="edu-date">${edu.year}</div>
                <div class="edu-address">${edu.address}</div>
            </div>
        `).join('');
        document.getElementById('education').innerHTML = `
            <h1>Education</h1>
            ${educationList}
        `;

        // Fetch and display personal references
        const referencesList = data.personalReferences.map(ref => `
            <div class="ref-box">
                <div class="ref-title">${ref.name}</div>
                <div class="ref-date">${ref.relationship}</div>
                <div class="ref-contact">${ref.contactNumber}</div>
            </div>
        `).join('');
        document.getElementById('personal-references').innerHTML = `
            <h1>Personal References</h1>
            ${referencesList}
        `;
    });
});
