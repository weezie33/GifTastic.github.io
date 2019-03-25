// Initial array of gif
var topics = ["psychoactive", "colorful", "eye-opening", "astonishing", "unforeseen", "beautiful", "drug", "painkiller", "amazing", "wonderful", "exceptional", "superb", "diverting", "alluring", "attractive", "stirred", "gorgeous", "cat's-whiskers", "punk", "steampunk", "expressionist", "medieval", "minimalism"];
var maxGifs = 10;
var maxRating = "";

function renderButtons(){
	for(var i = 0; i < topics.length; i++) {
		var newButton = $("<button>");
		newButton.addClass("btn");
		newButton.addClass("art-button");
		newButton.text(topics[i]);
		$("#button-container").append(newButton);
	}
  $("#add-art").on("click", function(event) {
        // Preventing the buttons default behavior when clicked (which is submitting a form)
    event.preventDefault();$("#add-art").on("click", function(event) {
        // Preventing the buttons default behavior when clicked (which is submitting a form)
    event.preventDefault();		
		
		var newTopic = $("#add-art").val().trim();

        // Adding the movie from the textbox to our array
      topics.push(newTopic);showshowshow

        // Calling renderButtons which handles the processing of our movie array
      renderButtons();
				});
			});

	$(".art-button").unbind("click");
	$(".art-button").on("click", function(){
		$(".gif-image").unbind("click");
		$("#gif-container").empty();
		$("#gif-container").removeClass("");
		popGifContainer($(this).text());
      console.log($(this).text());
	});
}

function addButton(show){
	if(topics.indexOf(show) === -1) {
		topics.push(show);
		$("#button-container").empty();
		renderButtons();
	}
} 

function popGifContainer(show){
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    show + "&api_key=6Hyn2IyY3yxPwqJSOKRk63cbZ4DXvcS6&limit=10";
	$.ajax({
    url: queryURL,
		method: "GET"

	}).then(function(response){
		response.data.forEach(function(element){
			newDiv = $("<div>");
			newDiv.addClass("individual-gif-container");
			newDiv.append("<p>Rating:" + element.rating.toUpperCase() + "</p>");
			var newImage = $("<img src = '" + element.images.fixed_height_still.url + "'>");
			newImage.addClass("gif-image");
			newImage.attr("state", "still");
			newImage.attr("still-data", element.images.fixed_height_still.url);
			newImage.attr("animated-data", element.images.fixed_height.url);
			newDiv.append(newImage);
			$("#gif-container").append(newDiv);
		});
		
		$("#gif-container").addClass("");
		$(".gif-image").unbind("click");
		$(".gif-image").on("click", function(){
			if($(this).attr("state") === "still") {
				$(this).attr("state", "animated");
				$(this).attr("src", $(this).attr("animated-data"));
			}
			else {
				$(this).attr("state", "still");
				$(this).attr("src", $(this).attr("still-data"));
			}
		});
	});
}

$(document).ready(function(){
	renderButtons();
	$("#add-art").on("click", function(){
		event.preventDefault();
		addButton($("#art-show").val().trim());
		$("#art-show").val("");

	});
});

