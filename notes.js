/*CONSTRUCTING A POST REQUEST USING fetch()*/


fetch(destinationURL, configuationObject);

//^example of adding a second argument to fetch request, which is an object.


configurationObject = {
  method: "POST"
  // ^method key add to configuration object, telling it it's a POST request
  headers: {
    "Content-Type": "application/json"
    //headers send metadata about the actual data we want to send.
    //Content-Type is a very common header, tells us what type of data to expect (json being the most common)
    //headers are stored as key-value pairs
    "Accept": "application/json"
    //this header tells you what kind of data to accept.
    //these are the two headers we'll see most commonly. 
  },
  body: /* data goes here */ //needs to be written as a string
};

{
  dogName: "Byron",
  dogBreed: "Poodle"  
}

//the above, converted to JSON would look something like below

"{"dogName":"Byron","dogBreed":"Poodle"}"


configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle"
  })
};

//since whatever is in the body needs to be written as a string, we need to use JSON.stringify to convert


/* Send the POST Request */

let formData = {
  dogName: "Byron",
  dogBreed: "Poodle"
};
 
let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
 
fetch("http://localhost:3000/dogs", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  });