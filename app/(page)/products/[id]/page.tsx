import { log } from "console";
import Link from "next/link";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1>Product ID: {id}</h1>
      <Link href="/products">← Quay lại danh sách</Link>
    </div>
  );
}
