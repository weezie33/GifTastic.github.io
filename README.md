# GifTastic.github.io
# GIFtastic

GIFtastic is a cartoon-themed GIF generator. 

## How to Use

Click <a href = "https://youtu.be/BpsMz6LxC6k">here</a> to watch a video demo of GIFtastic.

To run the program, click <a href = "https://lkanand.github.io/GIFtastic">here</a>.

Users may click on one of the buttons labeled with the title of a cartoon show to view ten relevant GIFs from <a href = "https://giphy.com">GIPHY</a>. If a user would like to see GIFs from a cartoon show that does not already have a button, he / she can create a new button by filling out and submitting the form on the right portion of the screen. After doing so, the user can click on the newly created button to generate GIFs from that cartoon show.

The program initially displays the GIFs as still images. To toggle an image between its still and animated states, click it.

## Development 

GIFtastic was created using a combination of HTML, CSS, JavaScript, jQuery and Ajax. It uses jQuery event handlers to detect when a user clicks a button and extract the name of the cartoon show attached to it. The program then encodes the cartoon show title and a ratings limit (I set this to "PG" to only receive family-friendly content) in an Ajax request to the GIPHY API. Upon receiving this request, the GIPHY API sends back a JSON object with data for ten GIFs that meet the query's parameters. The program then extracts the ratings and still-image URLs for each GIF and uses jQuery to display the images and associated ratings to the user. Within each HTML image tag created by jQuery, the program encodes URLs for the animated and still versions of the GIF as well as the image's current state ("still" or "animated"). Additionally, the program attaches a jQuery click handler that switches the image's state and updates the `src` attribute with either the still or animated URL. This gives users the ability to toggle between the two versions of each GIF by clicking on it.