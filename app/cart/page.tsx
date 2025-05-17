import Link from "next/link"
import { Trash2, ChevronRight, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { featuredProducts } from "@/lib/data"

export default function CartPage() {
  // Giả lập giỏ hàng với 2 sản phẩm
  const cartItems = [
    { ...featuredProducts[0], quantity: 1 },
    { ...featuredProducts[2], quantity: 2 },
  ]

  // Tính tổng tiền
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 30000 // Phí vận chuyển
  const total = subtotal + shipping

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Giỏ hàng</h1>
        <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Trang chủ
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Giỏ hàng</span>
        </div>
      </div>

      {cartItems.length > 0 ? (
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border">
              <div className="p-6">
                <h2 className="text-lg font-medium">Sản phẩm trong giỏ hàng ({cartItems.length})</h2>
              </div>
              <Separator />
              <div className="p-6">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col gap-4 sm:flex-row">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium">
                              <Link href={`/products/${item.id}`} className="hover:underline">
                                {item.name}
                              </Link>
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">Màu: Đen</p>
                            <p className="mt-1 text-sm text-muted-foreground">Kích cỡ: L</p>
                          </div>
                          <p className="font-medium">{item.price.toLocaleString("vi-VN")}₫</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border rounded-md">
                            <button className="px-3 py-1 text-sm">-</button>
                            <span className="px-3 py-1 text-sm">{item.quantity}</span>
                            <button className="px-3 py-1 text-sm">+</button>
                          </div>
                          <button className="flex items-center text-sm text-muted-foreground hover:text-destructive">
                            <Trash2 className="mr-1 h-4 w-4" />
                            Xóa
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between p-6">
                <Link href="/products">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    Tiếp tục mua sắm
                  </Button>
                </Link>
                <Button variant="outline">Cập nhật giỏ hàng</Button>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-lg border">
              <div className="p-6">
                <h2 className="text-lg font-medium">Tóm tắt đơn hàng</h2>
              </div>
              <Separator />
              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tạm tính</span>
                  <span>{subtotal.toLocaleString("vi-VN")}₫</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phí vận chuyển</span>
                  <span>{shipping.toLocaleString("vi-VN")}₫</span>
                </div>
                <div className="flex items-center gap-2">
                  <Input placeholder="Mã giảm giá" className="flex-1" />
                  <Button variant="outline">Áp dụng</Button>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Tổng cộng</span>
                  <span>{total.toLocaleString("vi-VN")}₫</span>
                </div>
                <Button className="w-full">Thanh toán</Button>
                <div className="text-center text-xs text-muted-foreground">
                  <p>Chúng tôi chấp nhận các phương thức thanh toán sau</p>
                  <div className="mt-2 flex justify-center gap-2">
                    <div className="h-6 w-10 rounded bg-muted"></div>
                    <div className="h-6 w-10 rounded bg-muted"></div>
                    <div className="h-6 w-10 rounded bg-muted"></div>
                    <div className="h-6 w-10 rounded bg-muted"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="rounded-full bg-muted p-6">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="mt-4 text-lg font-medium">Giỏ hàng của bạn đang trống</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Có vẻ như bạn chưa thêm bất kỳ sản phẩm nào vào giỏ hàng.
          </p>
          <Link href="/products" className="mt-6">
            <Button>Tiếp tục mua sắm</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
