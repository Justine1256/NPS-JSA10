/**
 * API trả về 1 mảng dữ liệu 100 bài posts
 * https://jsonplaceholder.typicode.com/posts
 * 
 * API trả về dữ liệu của pokemon Ditto
 * https://pokeapi.co/api/v2/pokemon/ditto
 */

// Làm thế nào để lấy được dữ liệu từ API về
// cần sử dụng Javascript: XMLHttpRequest (XHR)
// Khi É6 ra đời: hàm fetch()

// syntax
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then((response) => response.json())  
.then((data) => {
    // Rất nhiều các logic khác với  biến data, nhưng phải viết ở trong hàm then thứ 2, nếu viết ra ngoài sẽ không còn truy cập được đến biến data nữa
    console.log(data);

    // Tạo ra một element mới <div></div>
    const div = document.createElement("div");
    // Thêm class cho div vừa tạo
    div.classList.add("card");
    // Thêm div vào làm element con của body
    document.body.appendChild(div);

    const h1 = document.createElement("h1");
    h1.textContent = data.name;
    div.appendChild(h1);

    const img = document.createElement("img");
    img.src = data.sprites.front_default;
    div.appendChild(img);

    // Cách để chèn HTML vào element
    let html = `
    <span>Height: ${data.height}</span>
    <span>Weight: ${data.weight}</span>
    `;
    // Chèn HTML vào trnog element
    div.insertAdjacentHTML("beforeend", html);
})



