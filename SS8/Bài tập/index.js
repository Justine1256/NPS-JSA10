// API
const api_url1 =
    "https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST"
// API
const api_url2 =
    "https://api.apify.com/v2/key-value-stores/p3nS2Q9TUn6kUOriJ/records/LATEST"
// Đã sử dụng Thunder Client để đọc dữ liệu

function Click1() {
    fetch("https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            const div = document.createElement("div");
            div.classList.add("card");
            document.body.appendChild(div);

            let html = `
            <h2>Thành phố Hồ Chí Minh:</h1>
            <h3>- Số ca khỏi: ${data.detail[1].recovered}</h3>
            <h3>- Số ca đang điều trị: ${data.detail[1].treating}</h3>
            <h3>- Số ca tử vong: ${data.detail[1].death}</h3>

            <h2>Hà Nội:</h1>
            <h3>- Số ca khỏi: ${data.detail[0].recovered}</h3>
            <h3>- Số ca đang điều trị: ${data.detail[0].treating}</h3>
            <h3>- Số ca tử vong: ${data.detail[0].death}</h3>

            <h2>Bến Tre:</h1>
            <h3>- Số ca khỏi: ${data.detail[35].recovered}</h3>
            <h3>- Số ca đang điều trị: ${data.detail[35].treating}</h3>
            <h3>- Số ca tử vong: ${data.detail[35].death}</h3>
            `;
            div.insertAdjacentHTML("beforeend", html);

        })
}
Click1()