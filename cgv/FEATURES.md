# Ghi chú tính năng — CGV FE (tuần 4)

Phân biệt phần **bám UI/nội dung CGV/Figma** và phần **tự thêm** cho đồ án Frontend.

---

## A. Theo trang chính CGV / Figma (không tự bịa layout)

| Trang / khối | File | Ghi chú |
|---|---|---|
| Trang chủ | `index.html` | Banner, film đang chiếu, tin/ưu đãi, quick icons, header/footer kiểu CGV |
| Phim đang chiếu | `phim-dang-chieu.html` | Breadcrumb, tab, lưới poster, badge độ tuổi, nút Mua vé |
| Phim sắp chiếu | `phim-sap-chieu.html` | Giống layout listing CGV |
| Tất cả các rạp | `tat-ca-cac-rap.html` | Chọn tỉnh/thành + danh sách rạp |
| Rạp đặc biệt | `rap-dac-biet.html` | IMAX, 4DX, Gold Class… |
| Rạp 3D | `rap-3d.html` | Nội dung giới thiệu 3D |
| Shell chung | `css/style.css`, `js/main.js` (phần shell) | Logo, nav, footer brands, nền gạch kem `#fdfcf0` |
| Dữ liệu poster / banner CDN | `js/data.js` | Ảnh từ CDN CGV (vcdn) |

---

## B. [TỰ THÊM] — không có trên trang chính / tự implement

Các mục dưới đây **không clone** từ flow thật của cgv.vn; làm để demo UX + kỹ năng FE (DOM, localStorage, URL params).

Ghi chú chỉ trong file này (không ghi trên UI hay trong source code).

| # | Tính năng | File chính | Mô tả ngắn |
|---|---|---|---|
| 1 | **Tìm kiếm & lọc phim** | `phim-dang-chieu.html`, `phim-sap-chieu.html`, `main.js` | Ô search + lọc thể loại / định dạng / độ tuổi |
| 2 | **Chi tiết phim + trailer** | `chi-tiet-phim.html` | `?id=...`, synopsis, embed YouTube |
| 3 | **Đặt vé chọn ghế (mock)** | `dat-ve.html` | Chọn rạp, ngày, suất, sơ đồ ghế; **không** thanh toán thật |
| 4 | **Yêu thích (♥)** | `storage.js`, nút trên card / chi tiết | Lưu `localStorage` (`cgv_fe_favorites`) |
| 5 | **Vé của tôi** | `ve-cua-toi.html` | Danh sách vé + phim yêu thích sau khi “đặt” |
| 6 | **localStorage helpers** | `js/storage.js` | Favorites, tickets, toast thông báo |
| 7 | **Link UX mới trên header / quick icons** | `main.js` | “VÉ CỦA TÔI”, “YÊU THÍCH”, icon MY TICKETS / FAVORITES |
| 8 | **Dữ liệu phụ trợ FE** | `js/data.js` | `id`, `synopsis`, `trailer`, `SHOWTIMES`, `TICKET_PRICE`, `ALL_MOVIES` |
| 9 | **Nút cuộn lên đầu trang** | `main.js`, `style.css` | Nút `↑` góc dưới phải, hiện khi scroll xuống |

### Cách demo nhanh

1. Mở `phim-dang-chieu.html` → thử search/lọc.
2. Bấm ♥ hoặc “Xem chi tiết” → trailer.
3. “Mua vé” → chọn ghế → Xác nhận → sang `ve-cua-toi.html`.
4. Refresh trình duyệt: vé & yêu thích vẫn còn (localStorage).

### Lưu ý nộp bài

- Khi trình bày: nói rõ **UI listing/rạp = tham chiếu CGV**; **search / detail / seat map / favorites / tickets = tự implement**.
- Đây là mock FE: không đăng nhập, không API, không thanh toán.
