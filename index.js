// Add your code here
function submitData(name, email){
  let formData = {
    name: name,
    email: email
  };
   
  // method: "POST" is missing from the object below
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
   
   return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      let p1 = document.createElement('p');
      p1.innerHTML = object.id; 
      document.body.appendChild(p1);
      console.log(object);
    })
    .catch(function(error) {
      let p2 = document.createElement('p');
      p2.innerHTML = error.message;
      document.body.appendChild(p2)
      console.log(error.message);
    });
}