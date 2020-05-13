function submitData(name, email) {
    
    const formData = {
        "name": name,
        "email": email
    }

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(data => document.body.append(data.id))
    .catch(message => document.body.append(message))
}

window.addEventListener('DOMContentLoaded',
    function(name, email) {
        console.log("Welcome aboard...?")
        submitData(name, email)
    }
)
