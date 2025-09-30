const search = document.getElementById("search");
const input = document.getElementById("search-input");
const container = document.getElementById("card-container");



const api = "https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyDEwDYXUAgGyov17yFGDsuIdKwtYh82thA";

function getBooks() {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            data.items.forEach((book, i) => {
                const div = document.createElement("div");
                div.id = "card" + (i + 1);
                div.innerHTML = `
                    <img src="${book.volumeInfo.imageLinks?.thumbnail }" alt="Book Cover" style="width:160px; height:150px;">
                    <h4>${book.volumeInfo.title}</h4>  
                `;   
                const container = document.getElementById("card-container");
                container.appendChild(div);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}


search.addEventListener("click",() =>{
    const query = input.value;
    
    const api = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;

    fetch(api)
    .then(res => res.json())
    .then(data =>{
        if (query !== "") {
            container.innerHTML = "";
        }
        data.items.forEach((book,i)=> {
            const div = document.createElement("div");
            div.id = "card" + (i + 1);
            div.innerHTML = `
                    <img src="${book.volumeInfo.imageLinks?.thumbnail}" alt="Book Cover" style="width:200px height:180px">
                    <h4>${book.volumeInfo.title}</h4>  
                `;
            const container = document.getElementById("card-container");
            container.appendChild(div);

        });
    });


});

getBooks();
