// Add your code here
const usersUrl = 'http://localhost:3000/users'


const data = {
  name: 'Steve',
  email: 'steve@steve.com'
}

function submitData (name, email) {
  const reqObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({name: name, email: email})
  }

  const pTag = document.querySelector('p')

  return fetch (usersUrl, reqObj)
    .then(response => response.json())
    .then(object => {
      // const body = document.querySelector('body');
      // const script = document.querySelector('script');
      pTag.innerHTML = `${object.id}`
    })  
    .catch(function(error) {
      alert("Unauthorized Access");
      pTag.innerHTML += error.message;
    });
}



// const formContainer = document.querySelector('form')

// function formListener () {
//   formContainer.addEventListener('submit', event => {
//     console.logt(event)
//     event.preventDefault();
//     console.log('hi')

//   })
// }
// const data = {

// }

// function submitData(user_name, user_email){

// }
// formListener();