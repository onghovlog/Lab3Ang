
import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  imports: [RouterLink],
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  // 1. MẢNG DỮ LIỆU CHUNG
  initialProducts: Product[] = [
    {
      id: 1,
      name: 'Bó hoa hồng Pastel 1 cành',
      price: '380.000đ',
      oldPrice: '-',
      image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=500&auto=format&fit=crop',
      discount: 0,
      sold: 120,
      createdAt: '2026-11-01',
    },
    {
      id: 2,
      name: 'Bó hoa Đồng Nội',
      price: '290.000đ',
      oldPrice: '-',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&auto=format&fit=crop',
      discount: 0,
      sold: 85,
      createdAt: '2026-11-02',
    },
    {
      id: 3,
      name: 'Hoa Tình Yêu Ngọt Ngào',
      price: '420.000đ',
      oldPrice: '-',
      image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=500&auto=format&fit=crop',
      discount: 0,
      sold: 310,
      createdAt: '2026-11-03',
    },
    {
      id: 4,
      name: 'Giỏ Hoa Thanh Xuân',
      price: '390.000đ',
      oldPrice: '-',
      image: 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=500&auto=format&fit=crop',
      discount: 0,
      sold: 45,
      createdAt: '2026-11-04',
    },
    {
      id: 5,
      name: 'Bó Hồng Đỏ Nồng Nàn',
      price: '320.000đ',
      oldPrice: '400.000đ',
      image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=500&auto=format&fit=crop',
      discount: 20,
      sold: 520,
      createdAt: '2026-11-05',
    },
    {
      id: 6,
      name: 'Hoa Sắc Màu Rực Rỡ',
      price: '300.000đ',
      oldPrice: '400.000đ',
      image: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=500&auto=format&fit=crop',
      discount: 25,
      sold: 260,
      createdAt: '2026-11-06',
    },
    {
      id: 7,
      name: 'Bó Hoa Dịu Dàng',
      price: '255.000đ',
      oldPrice: '300.000đ',
      image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=500&auto=format&fit=crop',
      discount: 15,
      sold: 180,
      createdAt: '2026-11-07',
    },
    {
      id: 8,
      name: 'Giỏ Hoa Ngọt Ngào 2',
      price: '350.000đ',
      oldPrice: '500.000đ',
      image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500&auto=format&fit=crop',
      discount: 30,
      sold: 410,
      createdAt: '2026-11-08',
    }
  ];



  // Signal chứa toàn bộ sản phẩm
  products = signal<Product[]>(this.initialProducts);

  newProducts = computed(() =>
    [...this.products()]
      .sort((a, b) => b.id - a.id)
      .slice(0, 4)
  );

  saleProducts = computed(() =>
    [...this.products()]
      .filter(p => p.discount > 0)
      .sort((a, b) => b.discount - a.discount)
      .slice(0, 4)
  );

  bestSellingProducts = computed(() =>
    [...this.products()]
      .sort((a, b) => b.sold - a.sold)
      .slice(0, 4)
  );

}
