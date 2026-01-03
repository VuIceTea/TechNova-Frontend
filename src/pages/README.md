# Pages

Thư mục này chứa các page components (màn hình chính của ứng dụng).

## Quy tắc:
- Mỗi page đại diện cho một route
- Đặt tên theo PascalCase
- Page components tổ chức và sử dụng components từ thư mục components/

## Product Detail Page

### Overview
The ProductDetail page displays comprehensive information about a single product, including images, specifications, reviews, and related products.

### Features
- **Product Gallery**: Main image with thumbnails, zoom effect, discount badge
- **Product Info**: Name, brand, rating, price, variants, quantity selector
- **Detailed Sections**: Full description, technical specs table, reviews sidebar
- **Related Products**: Similar products from the same category

### Route
- Path: `/product/:slug`
- Example: `/product/iphone-15-pro-max-titan-tu-nhien`

### Extended Product Data Fields
Products now support: `gallery`, `description`, `fullDescription`, `shortSpecs`, `fullSpecs`, `variants`, `ratingDistribution`, `reviews`

Products without extended data automatically receive default values.
