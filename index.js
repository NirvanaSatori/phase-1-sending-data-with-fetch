// Add your code here

function submitData(name, email){
    //Obj to hold new user
    const userInfo = {
        name:name,
        email:email
     }
        //create a POST request
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(userInfo),
        })
    .then(res => res.json())
    .then((data) =>  {
        //display new ID
        const newId = document.querySelector("#new-id")
        const p = document.createElement("p")
        p.innerHTML = data.id 
        newId.appendChild(p)
    } )
    .catch((object) => {
         //handles a failed POST request using catch
        const errorMessage = document.createElement('p')
        errorMessage.innerHTML = object.message
        const newId = document.querySelector("#new-id")
        newId.appendChild(errorMessage) // appends the error message to the DOM
})
}
submitData()
