const CGV_ASSETS = {
  logo: "https://iguov8nhvyobj.vcdn.cloud/skin/frontend/cgv/default/images/cgvlogo.png",
  buyTicket: "https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/news-offers/mua-ve_ngay.png",
  topAd: "https://advserver.cgv.vn/www/images/ff463e9094cbe8ff68898ea90bd14757.png",
};

const HERO_SLIDES = [
  "https://iguov8nhvyobj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/f/a/fanc.jpg",
  "https://iguov8nhvyobj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/m/e/member79.jpg",
  "https://iguov8nhvyobj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/o/d/ody_rollingbanner_980x448.jpg",
  "https://iguov8nhvyobj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_54_.jpg",
  "https://iguov8nhvyobj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_69__2.jpg",
];

const TICKET_PRICE = 70000;

const MOVIES_NOW = [
  { id: "running-man", title: "RUNNING MAN VIỆT NAM 2026 - CHÚA TỂ THỜI GIAN", rating: "P", genre: "Truyền hình thực tế", duration: "125 phút", release: "10-07-2026", formats: ["4DX"], rank: 1, poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/r/m/rm26_mainposter_470x700.jpg", trailer: "rsMNGyuz9ZQ", synopsis: "Các thành viên Running Man Việt Nam đối đầu thử thách mới trong mùa giải Chúa tể thời gian." },
  { id: "minions", title: "MINIONS & QUÁI VẬT", rating: "P", genre: "Hoạt Hình", duration: "90 phút", release: "01-07-2026", formats: [], rank: 2, poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/m/n/mn3_henryposter_470x700.jpg", trailer: "SehblW_EnNQ", synopsis: "Biệt đội Minions tiếp tục chuỗi rắc rối vui nhộn với những quái vật bất ngờ." },
  { id: "moana", title: "HÀNH TRÌNH CỦA MOANA", rating: "K", genre: "Gia đình, Hài, Hành Động, Phiêu Lưu", duration: "116 phút", release: "10-07-2026", formats: ["4DX", "IMAX", "ScreenX", "ULTRA 4DX"], rank: 3, poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/p/o/poster_hanh_trinh_cua_moana_.jpg", trailer: "hDZ7y8RP5HE", synopsis: "Moana lên đường vượt đại dương để cứu lấy hòn đảo và định mệnh của mình." },
  { id: "quy-bat-hon", title: "QUỶ BẮT HỒN", rating: "T16", genre: "Hành Động, Kinh Dị", duration: "103 phút", release: "10-07-2026", formats: [], poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/3/5/350x495_px-qbh.jpg", trailer: "dQw4w9WgXcQ", synopsis: "Một thế lực siêu nhiên săn đuổi linh hồn người sống, buộc nhóm nhân vật phải tìm cách sống sót." },
  { id: "am-anh", title: "ÁM ẢNH", rating: "T18", genre: "Hồi hộp, Kinh Dị", duration: "108 phút", release: "19-06-2026", formats: [], poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/o/b/obs_payoff_470x700.jpg", trailer: "dQw4w9WgXcQ", synopsis: "Nỗi ám ảnh từ quá khứ trở lại và kéo nhân vật chính vào vòng xoáy kinh hoàng." },
  { id: "me-oi", title: "MẸ ƠI, VỀ NHÀ", rating: "T16", genre: "Tâm Lý, Tình cảm", duration: "98 phút", release: "10-07-2026", formats: [], poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/3/5/350x495-meoi.jpg", trailer: "dQw4w9WgXcQ", synopsis: "Câu chuyện cảm động về tình mẫu tử và hành trình tìm về mái ấm gia đình." },
  { id: "ma-nu", title: "MA NỮ OÁN TÌNH", rating: "T18", genre: "Hài, Kinh Dị, Tâm Lý", duration: "96 phút", release: "10-07-2026", formats: ["Starium"], poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/1/_/1.2._ts-main_poster_web_app.jpg", trailer: "dQw4w9WgXcQ", synopsis: "Oán niệm của một bóng ma nữ khiến mối quan hệ tình cảm trở nên rối loạn và đầy bất ngờ." },
  { id: "toy-story-5", title: "CÂU CHUYỆN ĐỒ CHƠI 5", rating: "P", genre: "Hoạt Hình, Phiêu Lưu", duration: "102 phút", release: "19-06-2026", formats: ["4DX", "IMAX", "ScreenX", "ULTRA 4DX"], poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/p/o/poster_cau_chuyen_do_choi_5_.jpg", trailer: "wmiIUN-7qhE", synopsis: "Những món đồ chơi thân quen quay lại với cuộc phiêu lưu mới đầy cảm xúc." },
  { id: "backrooms", title: "BACKROOMS: THỰC THỂ QUỶ QUYỆT", rating: "T16", genre: "Hồi hộp, Khoa Học Viễn Tưởng, Kinh Dị", duration: "110 phút", release: "26-06-2026", formats: [], poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/3/5/350x495-backroom.jpg", trailer: "dQw4w9WgXcQ", synopsis: "Lạc vào thế giới Backrooms, nhân vật phải đối mặt với thực thể kỳ dị để tìm lối thoát." },
  { id: "colony", title: "COLONY: BẦY XÁC SỐNG", rating: "T16", genre: "Hành Động, Hồi hộp, Khoa Học Viễn Tưởng", duration: "122 phút", release: "12-06-2026", formats: ["4DX", "ScreenX", "Starium", "ULTRA 4DX"], poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/3/5/350x495-colony.jpg", trailer: "dQw4w9WgXcQ", synopsis: "Một thuộc địa tương lai sụp đổ khi bầy xác sống trỗi dậy và đe dọa sinh tồn." },
  { id: "supergirl", title: "SUPERGIRL", rating: "T13", genre: "Hành Động, Phiêu Lưu", duration: "108 phút", release: "26-06-2026", formats: ["4DX", "IMAX", "ScreenX", "ULTRA 4DX"], poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/m/a/main_poster_supergirl_t13_5.jpg", trailer: "dQw4w9WgXcQ", synopsis: "Supergirl bắt đầu hành trình anh hùng để bảo vệ Trái Đất khỏi mối đe dọa mới." },
  { id: "leviticus", title: "LEVITICUS: BÓNG QUỶ", rating: "T18", genre: "Kinh Dị", duration: "85 phút", release: "03-07-2026", formats: [], poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/3/5/350x495-colony.jpg", trailer: "dQw4w9WgXcQ", synopsis: "Nghi thức cổ xưa đánh thức bóng quỷ, đẩy mọi người vào đêm dài kinh dị." },
];

const MOVIES_COMING = [
  { id: "dong-dao", title: "ĐỒNG DAO MA QUÁI", rating: "T18", genre: "Hồi hộp, Kinh Dị, Thần thoại", duration: "123 phút", release: "03-07-2026", formats: [], poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/3/5/350x495_px-qbh.jpg", trailer: "dQw4w9WgXcQ", synopsis: "Bài đồng dao quen thuộc mang lời nguyền cũ quay lại ám ảnh thế hệ mới." },
  { id: "ngay-con", title: "NGÀY CON SỐNG LẠI", rating: "T13", genre: "Khoa Học Viễn Tưởng, Tâm Lý", duration: "126 phút", release: "03-07-2026", formats: [], poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/3/5/350x495-meoi.jpg", trailer: "dQw4w9WgXcQ", synopsis: "Một trải nghiệm khoa học mang theo hệ quả tâm lý không ai ngờ tới." },
  { id: "cam-on", title: "CẢM ƠN NGƯỜI ĐÃ THỨC CÙNG TÔI", rating: "K", genre: "Gia đình, Tình cảm", duration: "137 phút", release: "27-02-2026", formats: [], poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/o/b/obs_payoff_470x700.jpg", trailer: "dQw4w9WgXcQ", synopsis: "Câu chuyện ấm áp về những người thức cùng nhau vượt qua khó khăn." },
  { id: "lau-chu-hoa", title: "LẦU CHÚ HỎA", rating: "T18", genre: "Bí ẩn, Kinh Dị", duration: "94 phút", release: "12-06-2026", formats: ["4DX"], poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/1/_/1.2._ts-main_poster_web_app.jpg", trailer: "dQw4w9WgXcQ", synopsis: "Ngôi nhà bỏ hoang che giấu bí ẩn liên quan đến một vụ việc đốt cháy." },
  { id: "mesdames", title: "MESDAMES THANH SẮC", rating: "T18", genre: "Tâm Lý, Tình cảm, Tội phạm", duration: "125 phút", release: "19-06-2026", formats: [], poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/p/o/poster_cau_chuyen_do_choi_5_.jpg", trailer: "dQw4w9WgXcQ", synopsis: "Thế giới thượng lưu che đậy tội lỗi dưới lớp hào nhoáng thanh sắc." },
  { id: "doraemon", title: "Phim Điện Ảnh Doraemon: Nobita và Lâu Đài Dưới Đáy Biển", rating: "P", genre: "Hoạt Hình, Phiêu Lưu", duration: "101 phút", release: "22-05-2026", formats: [], poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/p/o/poster_hanh_trinh_cua_moana_.jpg", trailer: "dQw4w9WgXcQ", synopsis: "Nobita và Doraemon khám phá lâu đài dưới đáy biển trong cuộc phiêu lưu kỳ thú." },
  { id: "ten-cau", title: "TÊN CẬU LÀ GÌ.", rating: "T13", genre: "Hoạt Hình", duration: "107 phút", release: "05-06-2026", formats: ["IMAX"], poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/m/n/mn3_henryposter_470x700.jpg", trailer: "dQw4w9WgXcQ", synopsis: "Câu chuyện tuổi trẻ về ký ức, định mệnh và một cái tên chưa từng quên." },
  { id: "lop-hoc-am-sat", title: "Phim Điện Ảnh - Lớp Học Ám Sát: Giờ Của Chúng Ta", rating: "T16", genre: "Hoạt Hình", duration: "86 phút", release: "05-06-2026", formats: [], poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/m/a/main_poster_supergirl_t13_5.jpg", trailer: "dQw4w9WgXcQ", synopsis: "Lớp học ám sát bước vào giờ quyết định để thay đổi tương lai." },
];

const ALL_MOVIES = [...MOVIES_NOW, ...MOVIES_COMING];

const SHOWTIMES = ["09:30", "11:45", "14:00", "16:15", "18:30", "20:45", "22:40"];

const EVENTS = [
  { image: "https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/2026/New_Offers_496x247.png", title: "Tin mới & Ưu đãi" },
  { image: "https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/2023/214x245.jpg", title: "Thành viên CGV" },
  { image: "https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/2023/thue-rap.png", title: "Thuê rạp" },
  { image: "https://iguov8nhvyobj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/m/e/member79.jpg", title: "Member 79K" },
];

const CITIES = [
  "Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Cần Thơ", "Đồng Nai", "Hải Phòng",
  "Quảng Ninh", "Bà Rịa-Vũng Tàu", "Bình Định", "Bình Dương", "Đắk Lắk", "Trà Vinh",
  "Yên Bái", "Vĩnh Long", "Kiên Giang", "Hậu Giang", "Hà Tĩnh", "Phú Yên",
  "Đồng Tháp", "Bạc Liêu", "Hưng Yên", "Khánh Hòa", "Kon Tum", "Lạng Sơn",
  "Nghệ An", "Phú Thọ", "Quảng Ngãi", "Sóc Trăng", "Sơn La", "Tây Ninh",
  "Thái Nguyên", "Tiền Giang",
];

const THEATERS = {
  "Hồ Chí Minh": [
    "CGV Aeon Tân Phú", "CGV Crescent Mall", "CGV Giga Mall Thủ Đức",
    "CGV Vincom Center Đồng Khởi", "CGV Vincom Landmark 81", "CGV Pandora City",
    "CGV Liberty Citypoint", "CGV Parc Mall", "CGV Saigonres Plaza", "CGV Pearl Plaza",
  ],
  "Hà Nội": [
    "CGV Vincom Bà Triệu", "CGV Aeon Mall Long Biên", "CGV Royal City",
    "CGV Times City", "CGV Vincom Nguyễn Chí Thanh", "CGV Tràng Tiền Plaza",
    "CGV Vincom Metropolis", "CGV Hà Đông",
  ],
  "Đà Nẵng": ["CGV Vincom Đà Nẵng", "CGV Lotte Mart Đà Nẵng"],
  "Cần Thơ": ["CGV Sense City Cần Thơ", "CGV Vincom Xuân Khánh"],
  "Đồng Nai": ["CGV Big C Đồng Nai", "CGV Vincom Biên Hòa"],
  "Hải Phòng": ["CGV Vincom Hải Phòng", "CGV Aeon Mall Hải Phòng LETra"],
};

const SPECIAL_TECH = [
  { tag: "IMAX", desc: "Công nghệ điện ảnh tân tiến nhất", image: "https://iguov8nhvyobj.vcdn.cloud/media/theaters/special/main-page/imax_cgv.jpg" },
  { tag: "4DX", desc: "Đánh thức mọi giác quan", image: "https://iguov8nhvyobj.vcdn.cloud/media/theaters/special/main-page/17066596473020.jpg" },
  { tag: "ULTRA 4DX", desc: "Trải nghiệm điện ảnh tột đỉnh", image: "https://iguov8nhvyobj.vcdn.cloud/media/theaters/special/main-page/17079535042120.jpg" },
  { tag: "SCREENX", desc: "Mở rộng thị giác vượt trội", image: "https://iguov8nhvyobj.vcdn.cloud/media/theaters/special/main-page/16844566032440.png" },
  { tag: "STARIUM", desc: 'Trải nghiệm điện ảnh "vượt xa thực tế"', image: "https://iguov8nhvyobj.vcdn.cloud/media/theaters/special/main-page/Starium-new.jpg" },
];

const SPECIAL_STYLE = [
  { tag: "GOLD CLASS", desc: "Ghế ngồi hạng thương gia cao cấp", image: "https://iguov8nhvyobj.vcdn.cloud/media/theaters/special/main-page/gold-class.jpg" },
  { tag: "L'amour", desc: "Giường nằm thoải mái & tiện nghi bậc nhất", image: "https://iguov8nhvyobj.vcdn.cloud/media/theaters/special/main-page/lamour.jpg" },
  { tag: "SWEETBOX", desc: "Không gian riêng tư & ngọt ngào cho các cặp đôi", image: "https://iguov8nhvyobj.vcdn.cloud/media/theaters/special/main-page/sweetbox.png" },
  { tag: "Cine & Suite", desc: "Không gian điện ảnh ấm cúng, thoải mái", image: "https://iguov8nhvyobj.vcdn.cloud/media/theaters/special/main-page/cine-suite.png" },
  { tag: "PREMIUM", desc: "Ghế ngồi êm ái & thoải mái ngả lưng", image: "https://iguov8nhvyobj.vcdn.cloud/media/theaters/special/main-page/premium-1.png" },
  { tag: "Cine & Living", desc: "Thưởng thức phim trong phòng khách sang trọng, đẳng cấp", image: "https://iguov8nhvyobj.vcdn.cloud/media/theaters/special/main-page/livingroom2.jpg" },
  { tag: "Cine & Forêt", desc: "Không gian xanh mát, thoải mái", image: "https://iguov8nhvyobj.vcdn.cloud/media/theaters/special/main-page/cineforet.jpg" },
];

const QUICK_ICONS = [
  { href: "tat-ca-cac-rap.html", emoji: "🏛️", en: "CGV CINEMAS", vi: "Rạp CGV" },
  { href: "phim-dang-chieu.html", emoji: "🎬", en: "NOW SHOWING", vi: "Phim đang chiếu" },
  { href: "rap-dac-biet.html", emoji: "⭐", en: "CGV SPECIAL", vi: "Rạp đặc biệt" },
  { href: "ve-cua-toi.html", emoji: "🎟️", en: "MY TICKETS", vi: "Vé của tôi" },
  { href: "#", emoji: "☎️", en: "CONTACT", vi: "Liên hệ CGV" },
  { href: "#", emoji: "📰", en: "NEWS & OFFERS", vi: "Tin mới & Ưu đãi" },
  { href: "ve-cua-toi.html#favorites", emoji: "❤️", en: "FAVORITES", vi: "Yêu thích" },
];

function findMovieById(id) {
  return ALL_MOVIES.find((m) => m.id === id) || null;
}

function formatVnd(n) {
  return n.toLocaleString("vi-VN") + "đ";
}
