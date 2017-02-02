'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("#project1").click(projectClick);

}


function projectClick(e) { 
	// prevent page from reloading
	e.preventDefault();

	var containingProject = $(this).closet(".project");
	containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");





}