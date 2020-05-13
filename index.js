// Add your code here
function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    }

    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch('http://localhost:3000/users', configObject)
        .then(function(response) {
            return response.json()
        })
        .then(function(object) {
            // let userList = document.getElementById('users')
            // let userItem = document.createElement('li')
            // userItem.innerHTML = `Name: ${object["name"]} | Email: ${object["email"]}`
            // userList.appendChild(userItem)
            document.body.append(object["id"])
        })
        .catch(function(error) {
            // let errorMsg = document.getElementById('error')
            // errorMsg.innerHTML = error.message
            document.body.append(error.message)
        })
}