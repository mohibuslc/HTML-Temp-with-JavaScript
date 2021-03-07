


fetch("https://jsonplaceholder.typicode.com/users")

.then(res =>res.json())
.then(data => ShowUser(data));


function ShowUser(data){

let userhtml = '';

data.forEach(user => {

    userhtml = userhtml +
    
`<div>


<h3>${user.name}</h3>

<P> Email: ${user.email}</p>
<p>company Name : ${user.company.name}</p>
<p> Zip : ${user.address.zipcode}</p>




         
</div>
` 




 
});

const container = document.getElementById('user-container');

container.innerHTML = userhtml;


}
