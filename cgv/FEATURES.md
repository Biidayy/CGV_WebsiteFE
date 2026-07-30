# Ghi chú tính năng — CGV FE (Huy)

Phân biệt phần bám UI CGV/Figma và phần tự thêm cho đồ án môn Front-End.

## A. Trang theo UI CGV / Figma (6 trang chính)

| Trang | File | Mô tả |
|---|---|---|
| Trang chủ | `index.html` | Banner slider, movie rail, event rail |
| Tin mới & ưu đãi | `tin-moi-uu-dai.html`, `chi-tiet-uu-dai.html` | Danh sách + chi tiết khuyến mãi |
| Phim đang chiếu | `phim-dang-chieu.html` | Danh sách phim + bộ lọc |
| Phim sắp chiếu | `phim-sap-chieu.html` | Danh sách phim sắp khởi chiếu |
| Tất cả các rạp | `tat-ca-cac-rap.html` | Chọn tỉnh/thành, xem rạp |
| Rạp đặc biệt | `rap-dac-biet.html` | IMAX, 4DX, Gold Class... |
| Rạp 3D | `rap-3d.html` | Giới thiệu rạp 3D |

**Layout dùng chung:** header/footer render bằng `main.js`, style `css/style.css`, data `js/data.js`.

## B. Trang mở rộng (flow người dùng)

| Trang | File |
|---|---|
| Chi tiết phim + trailer YouTube | `chi-tiet-phim.html` |
| Đặt vé / chọn ghế (mock) | `dat-ve.html` |
| Vé của tôi | `ve-cua-toi.html` |
| Chi tiết rạp | `chi-tiet-rap.html` |
| Lịch chiếu | `lich-chieu.html` |
| Chọn ghế | `chon-ghe.html` |
| Thanh toán | `thanh-toan.html` |

## C. Tính năng người dùng (tự thêm — báo cáo đồ án)

| # | Tính năng | Cách hoạt động | File / công nghệ |
|---|---|---|---|
| 1 | **Tìm kiếm & lọc phim** | Tìm theo tên/thể loại, lọc định dạng (IMAX, 4DX...), độ tuổi | `phim-dang-chieu.html`, `main.js` |
| 2 | **Sắp xếp phim** | A→Z, Z→A, khởi chiếu mới/cũ | `filter-sort`, `main.js` |
| 3 | **Đếm kết quả lọc** | Hiển thị "Hiển thị X phim" sau khi lọc | `#filter-meta`, `main.js` |
| 4 | **Tìm kiếm toàn site** | Ô tìm ở header → chuyển sang trang phim với `?q=` | `renderHeader()`, `main.js` |
| 5 | **Yêu thích phim** | Nút ♥ trên poster, lưu `localStorage` | `storage.js`, `main.js` |
| 6 | **Phim vừa xem** | Tự lưu khi mở chi tiết phim, hiện ở trang chủ & Vé của tôi | `trackRecentMovie()`, `storage.js` |
| 7 | **Đặt vé mock** | Chọn rạp, suất, ghế; tính tiền; lưu vé | `dat-ve.html`, `main.js` |
| 8 | **Vé của tôi** | Xem vé đã đặt, xóa vé, in vé (mock) | `ve-cua-toi.html`, `printTicket()` |
| 9 | **Tìm rạp theo tên** | Lọc rạp trong tỉnh đang chọn | `tat-ca-cac-rap.html`, `initCities()` |
| 10 | **Chia sẻ phim** | Copy link hoặc Web Share API | `chi-tiet-phim.html`, `main.js` |
| 11 | **Toast thông báo** | Phản hồi khi yêu thích, đặt vé, copy link... | `showToast()`, `storage.js` |
| 12 | **Nút cuộn lên đầu** | Hiện khi scroll > 320px | `initBackToTop()`, `style.css` |
| 13 | **Menu mobile** | Hamburger mở/đóng nav trên màn nhỏ | `main.js`, `style.css` |
| 14 | **Banner carousel** | Tự chuyển slide 4.5s, nút prev/next | `initHero()`, `index.html` |
| 15 | **Carousel phim/event** | Cuộn ngang bằng nút ‹ › | `initRails()`, `index.html` |
| 16 | **Badge số lượng header** | Hiện số vé / yêu thích trên utility bar | `renderHeader()`, `storage.js` |
| 17 | **Responsive** | Layout co giãn tablet/mobile | `style.css` `@media` |
| 18 | **Tin mới & ưu đãi** | Trang listing giống cgv.vn/newsoffer | `tin-moi-uu-dai.html` |
| 19 | **Lọc/sắp xếp ưu đãi** | Tìm, lọc danh mục, sắp xếp ngày | `main.js` |
| 20 | **Chi tiết ưu đãi** | Trang nội dung chương trình KM | `chi-tiet-uu-dai.html` |

## D. Lưu trữ phía client

| Key localStorage | Dữ liệu |
|---|---|
| `cgv_fe_favorites` | Danh sách ID phim yêu thích |
| `cgv_fe_tickets` | Vé đã đặt (mock) |
| `cgv_fe_recent` | Tối đa 6 phim vừa xem |

## E. Giới hạn (mock FE — phù hợp môn FE)

- Không đăng nhập / đăng ký thật
- Không gọi API backend
- Không thanh toán thật
- Ghế đã bán là dữ liệu giả cố định
