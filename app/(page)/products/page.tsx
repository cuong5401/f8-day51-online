"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" },
];

export default function Products() {
  const router = useRouter();
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link href={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => router.back()}>← Quay lại</button>
    </div>
  );
}
