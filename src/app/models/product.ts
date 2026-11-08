export interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice: string;
  image: string;

  discount: number; // Phần trăm giảm giá
  sold: number;     // Số lượt bán
  createdAt: string; // Ngày nhập sản phẩm

  badge?: string;
  badgeClass?: string;
}