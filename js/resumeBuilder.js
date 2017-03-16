var bio = {
	"name": "Roman Firsov",
	"role": "Front-end developer",
	"contacts": {
		"skype": "Roman Firsov",
		"email": "froma2015@gmail.com",
		"github": "https://github.com/Rfirsov",
		"linkedin": "https://www.linkedin.com/in/roman-firsov",
		"location": "Kryvyi Rih, Ukraine"
	},
	"welcomeMessage": "Hello, I want to be a programmer",
	"skills": ["HTML", "CSS", "Javascript", "jQuery", "Git", "npm", "ReactJS"],
	"biopic": "images/bio.jpg"
}

var education = {
	"schools": [
	{
		"name": "Kryvyi Rih National University",
		"city": "Kryvyi Rih",
		"degree": "Bachelor of Science in Computer Science",
		"majors": ["Informatics"],
		"dates": 2014,
		"url": "http://kdpu.edu.ua"
	},
	{
		"name": "Kryvyi Rih National University",
		"city": "Kryvyi Rih",
		"degree": "Master of Science in Computer Science",
		"majors": ["Informatics"],
		"dates": 2015,
		"url": "http://kdpu.edu.ua"
	}
	],

	"onlineCourses": [
		{
		"title": "jQuery",
		"school": "Udacity",
		"dates": "2016",
		"url": "http://udacity.com"
		},
		{
		"title": "Object-Oriented JavaScript",
		"school": "Udacity",
		"dates": "2016",
		"url": "http://udacity.com"
		},
		{
		"title": "Javascript",
		"school": "Codecademy",
		"dates": "2016",
		"url": "https://www.codecademy.com/Painkiller00"
		},
		{
		"title": "HTML & CSS",
		"school": "Codecademy",
		"dates": "2016",
		"url": "https://www.codecademy.com/Painkiller00"
		},
		{
		"title": "jQuery",
		"school": "Codecademy",
		"dates": "2016",
		"url": "https://www.codecademy.com/Painkiller00"
		},
		{
		"title": "Sass",
		"school": "Codecademy",
		"dates": "2016",
		"url": "https://www.codecademy.com/Painkiller00"
		},
		{
		"title": "PHP",
		"school": "Codecademy",
		"dates": "2016",
		"url": "https://www.codecademy.com/Painkiller00"
		},
		{
		"title": "ReactJS",
		"school": "Codecademy",
		"dates": "2016",
		"url": "https://www.codecademy.com/Painkiller00"
		},
		{
		"title": "Git",
		"school": "Codecademy",
		"dates": "2016",
		"url": "https://www.codecademy.com/Painkiller00"
		}
	]
}

var work = {
	"jobs": [
	{
		"employer": "COMMUNAL INSTITUTION «Center of Primary Medical Care»",
		"title": "system administrator",
		"dates": "feb 2016 - oct 2016",
		"location": "Apostolove, Ukraine",
		"description": "I install and upgrade computer components and software."
	},
	{
		"employer": "ELECTION COMMISSION",
		"title": "system administrator",
		"dates": "sept – nov 2015",
		"location": "Apostolove, Ukraine",
		"description": "I install and upgrade computer components and software."
	}
	]
}

var projects = {
	"projects": [
	{
		"title": "Acnostria site",
		"dates": "2016",
		"description": "HTML, CSS, jQuery, Google Maps API",
		"images": "images/acnostria-site.jpg",
		"link": "http://e-buy.16mb.com/projects"
	},
	{
		"title": "Minima site",
		"dates": "2017",
		"description": "HTML, CSS",
		"images": "images/minima-site.jpg",
		"link": "http://e-buy.16mb.com/projects"
	}
	]
}

bio.display = function () {

var formattedName = HTMLheaderName.replace("%data%", bio.name),
	formattedRole = HTMLheaderRole.replace("%data%", bio.role),
	formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage),
	formattedPhoto = HTMLbioPic.replace("%data%", bio.biopic);

var formattedSkype = HTMLskype.replace("%data%", bio.contacts.skype),
	formattedEmail = HTMLemail.replace("%data%", "<a href=\"mailto:" + bio.contacts.email + "\">" + bio.contacts.email + "</a>"),
	formattedGithub = HTMLgithub.replace("%data%", "<a href=\"" + bio.contacts.github + "\" target=\"_blank\">" + "Rfirsov" + "</a>"),
	formattedLinkedin = HTMLLinkedin.replace("%data%", "<a href=\"" + bio.contacts.linkedin + "\" target=\"_blank\">" + "roman-firsov" + "</a>"),
	formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").prepend(formattedRole);		
$("#header").prepend(formattedName);
//contacts
$("#header").append(formattedPhoto);

$("#topContacts").append(formattedSkype);	
$("#topContacts").append(formattedEmail);	
$("#topContacts").append(formattedGithub);	
$("#topContacts").append(formattedLinkedin);	
$("#topContacts").append(formattedLocation);

$("#footerContacts").append(formattedSkype);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLinkedin);
$("#footerContacts").append(formattedLocation);


if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		if(bio.skills.hasOwnProperty(skill)) {
			formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}	
};

work.display = function() {
for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedWorkLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedWorkLoc);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
}
// function inName(name) {
	// name = name.trim().split(" ");
	// name[1] = name[1].toUpperCase();
	// name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	// return name[0] + " " + name[1]; 
// }

// $("#main").append(internationalizeButton);

education.display = function () {
   var edu;
   if(education.schools.length > 0 || education.onlineCourses.length > 0) {

   		$("#education").append(HTMLschoolStart);
   	for(edu in education.schools) {
   		if(education.schools.hasOwnProperty(edu)) {
   		
   		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
   		$(".education-entry:last").append(formattedSchoolName);
   		
   		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
   		$(".education-entry:last").append(formattedSchoolDegree);
   		
   		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
   		$(".education-entry:last").append(formattedSchoolDates);
   		
   		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
   		$(".education-entry:last").append(formattedSchoolMajor); 
   		}
   	}

   	$(".education-entry:last").append(HTMLonlineClasses);
        for (edu in education.onlineCourses) {
            if (education.onlineCourses.hasOwnProperty(edu)) {
            
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title);
            $(".education-entry:last").append(formattedOnlineTitle);

            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[edu].school);
            $(".education-entry:last").append(formattedOnlineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[edu].dates);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[edu].url);
            $(".education-entry:last").append(formattedOnlineURL); 
     }
   }
}
};

projects.display = function() {
	var proj;
		$("#projects").append(HTMLprojectStart);
	for(proj in projects.projects) {

		var formattedTitle = HTMLprojectTitle.replace("%data%", "<a href=\""+ projects.projects[proj].link + "\" target=\"_bkank\">" + projects.projects[proj].title + "</a>");
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
		$(".project-entry:last").append(formattedDescription);

//		if(projects.projects[proj].images.length > 0) {
//			for(image in projects.projects[proj].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images);
				$(".project-entry:last").append(formattedImage);
//			}
//		}
	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);