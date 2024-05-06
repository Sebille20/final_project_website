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
            <img class="personal-img" src=${info.personalImg} alt="Personal Image">
            <div class="name">${info.name}</div>
            <div class="objective">
                <img class="objective-img" src=${info.objectiveIcon} alt="Objective Icon">
                <div class="objective-text">${info.objective}</div>
            </div>
            <div class="phone">
                <img class="phone-img" src=${info.phoneIcon} alt="Phone Icon">
                <div class="phone-text">${info.contactNo}</div>
            </div>
            <div class="email">
                <img class="email-img" src=${info.emailIcon} alt="Email Icon">
                <div class="email-text">${info.email}</div>
            </div>
            <div class="address">
                <img class="address-img" src=${info.homeIcon} alt="Home Icon">
                <div class="address-text">${info.address}</div>
            </div>
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

        const educationList = data.education.map(edu => `
            <div class="job-box">
                <div class="job-title">${edu.school}</div>
                <div class="job-date">${edu.year}</div>
                <div class="job-description">${edu.address}</div>
            </div>
        `).join('');
        document.getElementById('education').innerHTML = `
            <h1>Education</h1>
            ${educationList}
        `;

        // Fetch and display personal references
        const referencesList = data.personalReferences.map(ref => `
            <div class="job-box">
                <div class="job-title">${ref.name}</div>
                <div class="job-date">${ref.relationship}</div>
                <div class="job-contact">${ref.contactNumber}</div>
            </div>
        `).join('');
        document.getElementById('personal-references').innerHTML = `
            <h1>Personal References</h1>
            ${referencesList}
        `;

        //Fetch Skills
        const skillsList = data.skills.map(skill => `<li>${skill.description} - ${skill.expertiseLevel}</li>`).join('');
        document.getElementById('skills').innerHTML = `
            <h2>Skills</h2>
            <ul>${skillsList}</ul>
        `;
    });
});
