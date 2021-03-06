var bio = {
	"name": "Frank Schröter",
	"role": "Developer Wizard",
	"contacts": {
		"mobile": "408-796-9446",
		"email": "frankschroeter2002@yahoo.com",
		"github": "www.github.com/Fschroeter",
		"location": "Mountain View, CA"
	},
	"welcomeMessage": "The plaque for 2nd place is down in the ladies' room",
    "skills": ["Developer Ninja", "Saving the world through honesty", "JS", "BI", "Java"],
    "biopic": "images/fs4.jpg",

    //Dispay bio json object in resume page
    display: function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        var formattedContactInfo = [];
        formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
        formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
        formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
        formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

        $("#title").prepend(formattedName);
        $("#header").prepend(formattedRole,formattedName);
        // $("#header").prepend(formattedName);
        $("#header").append(formattedBioPic,formattedWelcomeMsg);
        // $("#header").append(formattedWelcomeMsg);

        //formattedContactInfo.forEach( function (contacts) { just repeats 4 times
		//for(i in formattedContactInfo) { - no need for any loop - just top and footer
           $("#topContacts").append(formattedContactInfo);
           $("#footerContacts").append(formattedContactInfo);
                
            $("#header").append(HTMLskillsStart);
		
            bio.skills.forEach( function(skills) {
				skill = HTMLskills.replace("%data%", skills);
                $("#skills").append(skill);
            });
        
    }
};

var education = {
	"schools": [
        {
		"name": "NYIT",
		"location": "Worcester, MA",
		"degree": "MBA",
		"majors": ["Business Management"],
		"dates": "August 2006 - May 2008",
		"url": "http://www.nyit.edu"	
	    },
        {
		"name": "TH Cologne",
		"location": "Worcester, MA",
		"degree": "Ms. Sc.",
		"majors": ["Computer Science"],
		"dates": "October 2001 - May 2006"
	    }           
    ],
	"onlineCourses": [
        {
		"title": "Robotics - Nanodegree course",
		"school": "Udacity",
		"dates": "May 2017 - November 2017",
		"url": "https://www.udacity.com"
	     },
         {
		"title": "Front End Web Development  - Nanodegree course",
		"school": "Udacity",
		"dates": "May 2017 - December 2017",
		"url": "https://www.udacity.com"
	     }
    ],
    
    //Display JSON education objects in resume page
	display: function() {
       if(education.schools.length > 0) {
                $("#education").append(HTMLschoolStart);
                education.schools.forEach(function(schools) {
                     var formattedName = HTMLschoolName.replace("%data%", schools.name);
                     var formattedDegree = HTMLschoolDegree.replace("%data%", schools.degree);
                     var formattedNameAndDegree = formattedName + formattedDegree;
                     var formattedDate = HTMLschoolDates.replace("%data%", schools.dates);
                     var formattedLocation = HTMLschoolLocation.replace("%data%", schools.location);
                     var formattedMajor = HTMLschoolMajor.replace("%data%", schools.majors);
                     $(".education-entry:last").append(formattedNameAndDegree);
                     $(".education-entry:last").append(formattedDate);    
                     $(".education-entry:last").append(formattedLocation);
                     $(".education-entry:last").append(formattedMajor);
                 });
       }
                 //online classes
                 $("#education").append(HTMLonlineClasses);
                   education.onlineCourses.forEach(function(onlineCourses) {
                      var formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourses.title);
                      var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourses.school);
                      var formattedTitleAndSchool = formattedTitle + formattedSchool;
                      var formattedDate = HTMLonlineDates.replace("%data%", onlineCourses.dates);
                      var formattedURL = HTMLonlineURL.replace("%data%", onlineCourses.url);
                      $('#education').append(HTMLschoolStart);
                      $(".education-entry:last").append(formattedTitleAndSchool);
                      $(".education-entry:last").append(formattedDate);
                      $(".education-entry:last").append(formattedURL);
                 });
     }  // end of function
}; // end of JSON

var work = {
	"jobs": [
        {
		"employer": "Leapforce at Google",
		"title": "Search Language Specialist, Data Analyst",
		"location": "Mountain View, CA",
		"dates": "September 2015 - January 2017",
		"description": "SLS for Google's Knowledge Engine  -- Social impact: hotlines for Knowledge Engine"
	    },
        {
		"employer": "Business & Decision",
		"title": "VP Reporting & Analytics",
		"location": "Hamburg, Germany",
		"dates": "February 2012 - Juli 2014", // applied CR for better code visibility
		"description": "• Hired and managed the consulting team for the German " +
			"office.• Created the sales and SI manager role, providing leadership " +
			"to guide the team through operational initiatives. • Project-managed " +
			"the R&A sales and project, OKR setting process each quarter for 12+FTE " +
			"and 3 TVCs. • Developed and introduced five vertical solutions and R&A " +
			"products utilizing BusinessObjects 4.0 and QlikView. • Created and " +
			"executed a multi-channel distribution strategy for B&D content marketing.",
     	},
        {
		"employer": "Fidus",
		"title": "Software Engineer",
		"location": "Zurich, Switzerland",
		"dates": "June 2011 - January 2012",
		"description": "• BusinessObjects internal roll out project for Kuehne & " +
			"Nagel, Schindellegi, CH"
     	},
        {
		"employer": "Kuehne & Nagel",
		"title": "BI Rollout Consultant",
		"location": "New York,NY",
		"dates": "April 2010 - Mai 2011", // applied CR for better code visibility
		"description": "• Business Intelligence strategic consultant: strategic BI projects manager " +
			"• Business Objects Manager: internal roll-out, training, content management, " +
			"established BOCE and support intranet • Conducted enterprise-wide audits to accomplish " + "optimization and implementation • Pre-sales meetings, user trainings, solution design"
      	},
        {
		"employer": "Actuate Corporation",
		"title": "Sr. Market Dev Manager",
		"location": "San Mateo, CA",
		"dates": "January 2008 - January 2009",
			// applied CR for better code visibility
		"description": "• Created competitive intelligence repository and executed CI campaigns. " +
			"• Oversaw programs, sales tools, contracts and agreements for lead generation " +
			"process. • $750k budget contributed to $4.5m revenue in first 2 quarters. • " +
			"Customer engagement, marketing collateral, user groups and call center management."
     	},
        {
		"employer": "SAP",
		"title": "Sr. Market Dev Manager",
		"location": "Palo Alto, CA",
		"dates": "September 2001 - Februar 2006",
		"description": "• Product Definition and Product Manager for BI Portal Integration • Product Manager and Product Marketing Manager - Visual Composer • Customer Success Manager"
        }
    ],
    //Display work json object in resume object
	display: function() {
        $("#workExperience").append(HTMLworkStart);
        if(work.jobs.length > 0) {
		  //for(job in work.jobs) {
		  work.jobs.forEach(function(jobs) {	
			var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs.employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", jobs.title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", jobs.location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", jobs.dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", jobs.description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedDatesWorked);
            //$(".work-entry:last").append(formattedWorkTitle) -- I combined employer // and title in var formattedEmployerWorkTitle ;
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedWorkDescription);
		  });
    	}
    }
};

var projects = {
	"projects": [
		{
			"title": "Mars robot",
			"dates": "June 2017 - July 2017",
			"description": "Programmed a RC rover for the Mars mission as part of Udacity's robotics nanadegree program",
			"images": ["images/rover.jpg"],
		},
        {
			"title": "Serial Manipulator - Pick and Place",
			"dates": "October 2017 - November 2017",
			"description": "Programmed a RC rover for the Mars mission as part of Udacity's robotics nanadegree program",
			"images": ["images/manipulator.jpg"],
		},
        {
			"title": "Online Portfolio", 
			"dates": "July 2017",
			"description": "One of the 9 projects at the nanodegree course 'Front End Web Develoment' is the creation of an online portfolio showcasing our project in Github and in an UI",
			"images": ["images/portfolio.jpg"],
		}
	],
    //Display projects json object in resume object
    display: function() {
	$("#projects").append(HTMLprojectStart);
        if(projects.projects.length > 0) {
		  //for(i in projects.projects) {
		  projects.projects.forEach(function(project) {	
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			project.images.forEach(function(image) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
				$(".project-entry:last").append(formattedProjectImage);
			});
		});
	}
}
};
//Displaying the objects
bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);





	
