## FEND NEIGHBORHOOD MAP PROJECT

### Getting started

####Part 1: Responsiveness

Following list shows the development steps taken for the first step

* Incorporation of media Queries to change layout based on device width and page width.
* Keeping the mobile first approach towards development
* Using the flex-box design paradigm
* Layering the boxes on top of each other for mobile experience
* Changing the text size based on media queries

####Part 2: Application functionality

Following are the steps implemented in the Application

* Search function runs error free. The implementation of the search function has been influenced by the attributed sources from Udacity forums and an online website.
* The application follows the MVVM design model based on the library Knockout-JS
* A list view of the places(Taken from the Google places API) is provided and filters upon search
* Map renders with all the locations and the markers are filtered upon the search function
* Upon click of the location marker and name, bounce animation takes place and data is provided.
* Upon clicking the location, additional data is provided through the FOURSQUARE API.
* FOURSQUARE API uses the userless server integration method to connect to the server.
* All the calls for data are done in an async method [getJSON is by default async and Google Maps renders in an async manner]
* There are more than 5 locations in the model
* Error Handling is done using the .getJSON .fail method and a function is called with an alert upon failure of Google Maps using the onerror attribute.
* InfoWindows contain unique data about the location
* Application runs without any runtime errors.
* Usability concerns have been taken into account and the application is responsive

###ALL AMENDMENTS ACCORDING TO REVIEWERS REQUIREMENTS.
* Search function has been updated to use temp variables.
* Misuse of undefined has been corrected.
* Script reordering has been done.
* All requirements met!

####Comments are used to explain the code in script.js

###Additional resources used.
* http://stackoverflow.com/questions/1544739/google-maps-api-v3-how-to-remove-all-markers
* http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html
* http://opensoul.org/2011/06/23/live-search-with-knockoutjs/
* http://stackoverflow.com/questions/13009755/getjson-synchronous
* http://blog.stephencleary.com/2012/07/dont-block-on-async-code.html
* https://developers.google.com/maps/documentation/javascript/error-messages

###Udacity Forums
* https://discussions.udacity.com/t/google-map-marker-filter-issues/15244
* https://discussions.udacity.com/t/filtering-my-list-of-locations-with-ko/38858/12

###Documentation
* http://knockoutjs.com/documentation/observableArrays.html
* https://developer.foursquare.com/overview/auth#userless
* http://api.jquery.com/jquery.getjson/
* https://developer.foursquare.com/docs/explore#req=photos/4d0fb8162d39a340637dc42b

###Run via ngrok
* Use python to create a local server via http.server 80
* Run that via ngrok public link
