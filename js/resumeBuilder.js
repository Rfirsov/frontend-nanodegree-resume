var bio = {
	"name": "Roman Firsov",
	"role": "Front-end developer",
	"contacts": {
		"mobile": "555-555-555",
		"email": "froma2015@gmail.com",
		"github": "rfirsov",
		"linkedin": "roman-firsov",
		"location": "Kryvyi Rih"
	},
	"welcomeMessage": "Hello, I want to be a programmer",
	"skills": ["HTML", "CSS", "Javascript", "jQuery"],
	"biopic": "../images/bio.jpg"
}

var education = {
	"schools": [
	{
		"name": "Kryvyi Rih National University",
		"city": "Kryvyi Rih",
		"degree": "BA",
		"majors": ["Comp sciense"],
		"dates": 2014,
		"url": "http://google.com"
	},
	{
		"name": "Kryvyi Rih National University",
		"city": "Kryvyi Rih",
		"degree": "Masters",
		"majors": ["Comp sciense"],
		"dates": 2015,
		"url": "http://google.com"
	}
	],

	"onlineCourses": [
	{
		"title": "Javascript",
		"school": "Udacity",
		"dates": "2016",
		"url": "http://udacity.com"
		}
	]
}

var work = {
	"jobs": [
	{
		"employer": "hospital",
		"title": "system administrator",
		"dates": "feb 20-16 - oct 2016",
		"description": "I am  install and upgrade computer components and software."
	}]
}

var projects = {
	"projects": [
	{
		"title": "Sample project 1",
		"dates": "2016",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit distinctio deleniti consequatur saepe illum doloremque ex harum repellat voluptate aut unde maxime labore tempore, similique, iusto voluptatem ipsam, quidem eaque.",
		"images": "../images/197x148.gif"

	}]
}

bio.display = function () {

var formattedName = HTMLheaderName.replace("%data%", bio.name),
	formattedRole = HTMLheaderRole.replace("%data%", bio.role),
	formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage),
	formattedPhoto = HTMLbioPic.replace("%data%", bio.biopic);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
	formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
	formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github),
	formattedLinkedin = HTMLLinkedin.replace("%data%", bio.contacts.linkedin)
	formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").prepend(formattedRole);		
$("#header").prepend(formattedName);
//contacts
$("#header").append(formattedPhoto);
$("#header").append(formattedWelcomeMsg);

$("#header").append(HTMLContacts);
$("#topContacts").append(formattedMobile);	
$("#topContacts").append(formattedEmail);	
$("#topContacts").append(formattedGithub);	
$("#topContacts").append(formattedLinkedin);	
$("#topContacts").append(formattedLocation);



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

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
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