// Thêm chức năng cho form ở footer
document.querySelector("#send").addEventListener("click", function () {
    var name = document.querySelector("#name-input").value;
    var email = document.querySelector("#email-input").value;
    var comment = document.querySelector("#comment-input").value;

    alert(
        "Cảm ơn bạn " +
            name +
            " đã gửi phản hồi cho chúng tôi. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất."
    );
});

// Cập nhật nội dung trên trang bằng JS
document.querySelector("#first-item").innerHTML = `
    <img height="1000" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pumpkin-carving-ideas-spider-pumpkin-1631739671.jpg?crop=0.815xw:0.815xh;0.0612xw,0.158xh&resize=980:*" class="card-img-top" alt="..." style="object-fit: cover;">
    <div class="card-body">
        <div class="time-and-rate">
            <img class="icon" src="https://cdn-icons-png.flaticon.com/512/3106/3106767.png" alt="">
            <p>${recipeFood[0].time}</p>
            <img class="icon" style="margin-left: 20px" src="https://cdn-icons-png.flaticon.com/512/3405/3405355.png" alt="">
            <p>${recipeFood[0].level}</p>
        </div>
        <a class="card-title" href="detail.html?id=0&type=food">${recipeFood[0].name}</a>
        <p class="card-text">${recipeFood[0].desc}</p>
    </div>
`;

for (let index = 1; index < recipeFood.length; index++) {
    const element = recipeFood[index];
    document.querySelector("#list-food").insertAdjacentHTML(
        "beforeend",
        `
            <div class="card-inner" style="width: 50%;">
                <img src="${element.image}"
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="time-and-rate">
                        <img class="icon" src="https://cdn-icons-png.flaticon.com/512/3106/3106767.png" alt="">
                        <p>${element.time}</p>
                        <img class="icon" style="margin-left: 20px"
                            src="https://cdn-icons-png.flaticon.com/512/3405/3405355.png" alt="">
                        <p>${element.level}</p>
                    </div>
                    <a class="card-title" href="detail.html?id=${index}&type=food">${element.name}</a>
                    <p style="text-align: justify" class="card-text">${element.desc}</p>
                </div>
            </div>
        `
    );
}

for (let index = 0; index < recipePum.length; index++) {
    const element = recipePum[index];
    document.querySelector("#list-pum").insertAdjacentHTML(
        "beforeend",
        `
            <div class="card-inner" style="width: 100%;">
                <img src="${element.image}" class="card-img-top"
                    alt="...">
                <div class="card-body">
                    <div class="time-and-rate">
                        <img class="icon" src="https://cdn-icons-png.flaticon.com/512/3106/3106767.png" alt="">
                        <p>${element.time}</p>
                        <img class="icon" style="margin-left: 20px"
                            src="https://cdn-icons-png.flaticon.com/512/3405/3405355.png" alt="">
                        <p>${element.level}</p>
                    </div>
                    <a class="card-title" href="detail.html?id=${index}&type=pum">${element.name}</a>
                    <p class="card-text">${element.desc}</p>
                    <div class="share-love-icon">
                        <img class="share-icon" src="https://cdn-icons-png.flaticon.com/512/929/929610.png" alt="">
                        <img class="love-icon" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="">
                    </div>
                </div>
            </div>
        `
    );
}

for (let index = 0; index < 4; index++) {
    const element = recipePum[index];
    document.querySelector("#latest").insertAdjacentHTML(
        "beforeend",
        `
            <div class="latest-recipes">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body" style="overflow: hidden; text-overflow: ellipsis;">
                    <a href="detail.html?id=${index}&type=pum" style="color: #5c5c5c; font-weight: 600">${element.name}</a>
                    <p class="card-text" style="white-space: nowrap">${element.desc}</p>
                </div>
            </div>
        `
    );
}
