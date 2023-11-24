// https://www.googleapis.com/books/v1/volumes?q=quilting

// Step1 -Read User Input


let searchButton=document.getElementById("searchButton");
searchButton.addEventListener('click',fetchBook);

let allBooks=document.getElementById("allBooks");

let content=' ';

async function fetchBook(){
    let bookTitle=document.getElementById("bookTitle").value;




// Step-2 Create the request
// let myRequest=new XMLHttpRequest()  //readyState=0;
// myRequest.open("GET",`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`)  // readyState=1



// Step-3 Send the request and receive response

// myRequest.send();   //readyState =2

//server Processing ,readyState=3
// after Response ,readyState=4

// myRequest.onreadystatechange=()=>{
//     if(myRequest.readyState===4 && myRequest.status===200){
    let response=await fetch(` https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`)
        let convertedBooks=await response.json();
        let newBook=convertedBooks.items.map((book)=>`
        <div class='book'>
        <img src=${book.volumeInfo.imageLinks.thumbnail}/>
        <h1>${book.volumeInfo.title}</h1>
        <p>${book.volumeInfo.description}</p>
        </div>
        `).join("");
        content+=newBook;
        
    // }
    allBooks.innerHTML=content
// }


// Convert response to js object


// Desiplay on the front end
}