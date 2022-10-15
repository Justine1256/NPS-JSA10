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
