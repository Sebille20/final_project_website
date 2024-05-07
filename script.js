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
        document.getElementById('icon-data').innerHTML = `
         <ul>
            <li><img src=${info.markerIcon} alt="" width=27px></li>
            <li><img src=${info.phoneIcon} alt="" width=27px></li>
            <li><img src=${info.phoneIcon} alt="" width=27px</li>
        </ul>
        <h3 class="grey">LANGUAGE</h3>
        <h3 class="grey">SKILLS</h3>
        `;

        // Fetch and display personal information
        document.getElementById('personal-data').innerHTML = `
        <h2>${info.firstname}<br>${info.lastname}</h2>
        <h3>PROFILE</h3>
        <p style="text-align: justify;color:#838385">${info.objective}</p>
        <h3>CONTACT</h3>
        <h4>Address</h4>
        <p>${info.address}</p>
        <h4>Phone</h4>
        <p>${info.contactNo}</p>
        <h4>Email</h4>
        <p>${info.email}</p>
       
       
        `;

        document.getElementById('picture-data').innerHTML = `
        <img src=${info.personalImg} alt="" width=345px>
        <div class="colorbox"></div>
        <div class="colorbox2"></div>
        <img class="colorbox3" src="https://i.postimg.cc/KjHJLvVw/arrow.png" alt="" width=124px>
        `;

        // Fetch and display work experience
        const languageList = data.language.map(lang => `
        <div class="language">
            <h4>${lang.languagename}</h4>
        </div>
        `).join('');
        document.getElementById('language-data').innerHTML = `
            ${languageList}
        `;

        const educationList = data.education.map(edu => `
            <div class="year">
                <h4>${edu.year}</h4>
                <div class="info grey">${edu.school}<br> ${edu.address}
                </div>
            </div>
        `).join('');
        document.getElementById('education-data').innerHTML = `
            <h3 class="center" style="padding:80px 0px 5px 65px;">EDUCATION</h3>
            ${educationList}
        `;

        // Fetch and display wskills
        const skillList = data.skills.map(skill => `
        <div class="language">
            <h4>${skill.description}</h4>
            <div class="rate">
            </div>
        </div>
        `).join('');
        document.getElementById('skills-data').innerHTML = `
            ${skillList}
        `;

        // Fetch and display personal references
        const referencesList = data.personalReferences.map(ref => `
            <div class="year">
                <h4>${ref.name}</h4>
                <div class="info grey">
                   ${ref.relationship} | ${ref.contactNumber}
                </div>
            </div>
        `).join('');
        document.getElementById('personal-ref-data').innerHTML = `
            <h3 class="center" style="padding:80px 0px 5px 65px;">PERSONAL REFERENCES</h3>
            ${referencesList}
        `;

        // Fetch and display personal references
        const achievementsList = data.achievements.map(ach => `
         <div class="year">
                <h4>${ach.year}</h4>
                <div class="info grey">${ach.name}<br>
                <div class= "info grey"> ${ach.semester}</br>
                </div>
            
                </div>
        </div>
        `).join('');
        document.getElementById('achievements-data').innerHTML = `
            <h3 class="center" style="padding:80px 0px 5px 65px;">ACHIEVEMENTS</h3>
            ${achievementsList}
        `;


    });
});
