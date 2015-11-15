var elem = document.getElementById('picture')

function move(elem) {

	var left = 0
	function frame() {
		left++
		elem.style.left = left + 'px'

		if (left == 100)
			clearInterval(id)
	}
	var id = setInterval(frame,10)
}

/*
TEST
*/
function getAsHTML(element, pageURL) {
	console.log("Ajax call");
	$.ajax({
		url: pageURL,
		dataType: "text",
		success: function(response) {
			$(element).html(response);
		}, 

		error: function(a, b, c) {
			console.log(c);
		}
	});
}

function openPage() {
	$("#page").show();
}

function closePage() {
	$("#page").hide();
}

function setPage(pageURL) {
	var element = $("#page");
	getAsHTML(element, pageURL);
	openPage();
}

// Start function
$(document).ready(function() {
	closePage();
});