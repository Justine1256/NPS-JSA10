const rf = [
    {
        name: "Khắc bí ngô nhện đen",
        desc: "Một quả bí ngô nhện đen ma quái như thế này sẽ trông rất tuyệt khi đặt trên thềm hoặc bất cứ đâu trong nhà bạn đấy!",
        time: "15 PHÚT",
        level: "ĐƠN GIẢN",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pumpkin-carving-ideas-spider-pumpkin-1631739671.jpg?crop=0.815xw:0.815xh;0.0612xw,0.158xh&resize=980:*",
    },
    {
        name: "Tạo những lỗ tròn trên quả bí ngô",
        desc: "Bí ngô Halloween với những khoảng hở giống như đèn lồng không chỉ hấp dẫn mà còn hoàn hảo để thắp sáng lối vào trong nhà hoặc ngoài trời.",
        time: "30 PHÚT",
        level: "TƯƠNG ĐỐI",
        image: "http://songmoi.vn/sites/default/files/images2015/vanhoa/t10/bi_ngo_halloween_9.jpg",
    },
    {
        name: "Bí ngô mèo đen vui nhộn, dễ thương",
        desc: "Đây là một ý tưởng khá dễ dàng đòi hỏi chỉ cần vẽ hai quả bí ngô bằng sơn đen phẳng, tạo ra các hình ảnh hình con dơi và mèo của riêng bạn.",
        time: "30 PHÚT",
        level: "ĐƠN GIẢN",
        image: "https://www3.pictures.livingly.com/mp/K_Ddgcj0Ijxl.jpg",
    },
    {
        name: "Súp bí đỏ sữa tươi thơm ngon, béo ngậy cho bé",
        desc: "Để trẻ em có thể phát triển tốt thì chế độ dinh dưỡng đóng vai trò rất quan trọng. Hãy cùng vào bếp học ngay cách nấu súp bí đỏ sữa tươi thơm ngon và hấp dẫn cho bé nhé!",
        time: "35 PHÚT",
        level: "ĐƠN GIẢN",
        image: "https://cdn.tgdd.vn/2021/10/CookRecipe/CookTipsNote/cach-nau-sup-bi-do-pho-mai-thom-beo-mem-min-cuc-ngon-de-lam-tipsnote-800x500.jpg",
    },
    {
        name: "Súp bí đỏ thịt bò băm đơn giản, giàu đạm",
        desc: 'Lẫn trong súp là thịt bò băm nhuyễn được xào chín tới mềm ngọt, thơm ngon. Tiếp thêm năng lượng "quẩy Halloween" cùng nồi súp bí đỏ hấp dẫn, bổ dưỡng này nào!',
        time: "30 PHÚT",
        level: "ĐƠN GIẢN",
        image: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Comforting-Barley---Pumpkin-Beef-Stew_EXPS_PCBBZ20_235847_B03_10_7b.jpg",
    },
    {
        name: "Bánh cuộn bí đỏ bột nếp cực ngon không cần lò nướng",
        desc: "Bánh bí đỏ với lớp dừa vụn rang vàng bên ngoài thơm béo, bên trong bánh là lớp bí đỏ bùi dẻo như khoai, lớp đậu đỏ ngọt dịu và không thể không nói đến độ dẻo của bánh.",
        time: "30 PHÚT",
        level: "ĐƠN GIẢN",
        image: "https://toinayangi.vn/wp-content/uploads/2015/07/khong-can-lo-nuong-lam-banh-cuon-ngon-la-8.jpg",
    },
    {
        name: "Công thức bánh bí ngô cổ điển của Mỹ",
        desc: "Bánh bí ngô Mỹ ra lò ngon, mềm và tốt cho sức khỏe, nếu bạn biết cách nấu nó. Một miếng bánh bí ngô ngọt ngào bên tách trà sẽ làm bạn ấm áp vào một buổi tối mùa thu.",
        time: "30 PHÚT",
        level: "ĐƠN GIẢN",
        image: "https://images.aws.nestle.recipes/original/b829edd68c818352a26f754a8184e636_bak---02---libby_s-famous-pumpkin-pie-617_edit.jpg",
    },
];

const rp = [
    {
        name: "Trick or Treat",
        desc: "Cổ điển. Tuy không phải cách khắc dễ nhất nhưng ý tưởng này vừa cổ điển vừa hay ho.",
        time: "15 PHÚT",
        level: "ĐƠN GIẢN",
        image: "https://i.pinimg.com/564x/5e/eb/71/5eeb716000772fd209f27cb98c6f1080.jpg",
    },
    {
        name: "Bí ngô ốc sên",
        desc: 'Chúng tôi phát "ghiền" với sự dễ thương của chú sên bí ngô này. Kết hợp với cả bí nghệ ư?! Người ta sẽ gọi bạn là thiên tài.',
        time: "30 PHÚT",
        level: "TƯƠNG ĐỐI",
        image: "https://i.pinimg.com/564x/05/5b/88/055b88fbeb89ea231305159616392580.jpg",
    },
    {
        name: "Stranger Things Vecna",
        desc: "Nếu bạn là fan hâm mộ Stranger Things (như chúng tôi), sao không thử tài điêu khắc của mình và tạo hình khắc Vecna cực kỳ ma quái này?",
        time: "30 PHÚT",
        level: "ĐƠN GIẢN",
        image: "https://i.pinimg.com/564x/bf/52/46/bf524638a57084da8bcc0720022c734d.jpg",
    },
    {
        name: "Bí ngô niềng răng",
        desc: "Thật đáng yêu làm sao? Nếu bạn không thích sử dụng khoen này, thay vào đó, bạn có thể sáng tạo với giấy bạc.",
        time: "35 PHÚT",
        level: "ĐƠN GIẢN",
        image: "https://i.pinimg.com/564x/dd/65/2f/dd652fc0f5ddb2eac5ea0b81727fc98f.jpg",
    },
    {
        name: "Bí ngô khắc hình lá",
        desc: "Nếu bạn cực kì thích mùa thu, những chiếc lá khô bay nhẹ, thì ý tưởng này hoàn hảo cho gu thẩm mỹ của bạn.",
        time: "30 PHÚT",
        level: "ĐƠN GIẢN",
        image: "https://i.pinimg.com/564x/a5/01/78/a50178e32d81b939087b117c90ba376f.jpg",
    },
    {
        name: "Bí ngô dấu chân",
        desc: "Làm sao không kể đến ý tưởng cực kỳ dễ thương này chứ? Nó không chỉ dễ làm mà còn khiến cho thú cưng của bạn cảm thấy được dự phần trong dịp này.",
        time: "30 PHÚT",
        level: "ĐƠN GIẢN",
        image: "https://i.pinimg.com/564x/57/2f/c0/572fc0512a19f2f6f4d1ee0fac971a31.jpg",
    },
    {
        name: "Bí ngô chiêm tinh",
        desc: "Nếu bạn yêu thích chiêm tinh học và cung hoàng đạo. Hãy kết hợp nó vào hình khắc bí ngô của bạn trong năm nay với ý tưởng (phải nói là phức tạp) này.",
        time: "30 PHÚT",
        level: "ĐƠN GIẢN",
        image: "https://i.pinimg.com/564x/d8/74/cd/d874cdc25cb728e14a2b858a17aa528b.jpg",
    },
];

localStorage.removeItem("recipeFood");
localStorage.removeItem("recipePum");
localStorage.setItem("recipeFood", JSON.stringify(rf));
localStorage.setItem("recipePum", JSON.stringify(rp));

const recipeFood = JSON.parse(localStorage.getItem("recipeFood"));
const recipePum = JSON.parse(localStorage.getItem("recipePum"));

document.querySelector
