import Link from "next/link"
import { ChevronRight, Minus, Plus, Heart, Share2, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { featuredProducts } from "@/lib/data"
import ProductCard from "@/components/product-card"

export default function ProductPage({ params }: { params: { id: string } }) {
  // Trong thực tế, bạn sẽ lấy sản phẩm từ API dựa trên ID
  const product = featuredProducts.find((p) => p.id === params.id) || featuredProducts[0]

  // Sản phẩm liên quan (trong thực tế sẽ lấy từ API)
  const relatedProducts = featuredProducts.filter((p) => p.id !== params.id).slice(0, 4)

  return (
    <div className="container px-4 py-8 md:py-12">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Trang chủ
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/products" className="hover:text-foreground">
          Sản phẩm
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/categories/${product.category.toLowerCase()}`} className="hover:text-foreground">
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-lg border">
              <img
                src={product.image || "/placeholder.svg"}
                alt={`${product.name} thumbnail 1`}
                className="h-24 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg border">
              <img
                src="/placeholder.svg?height=96&width=96"
                alt={`${product.name} thumbnail 2`}
                className="h-24 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg border">
              <img
                src="/placeholder.svg?height=96&width=96"
                alt={`${product.name} thumbnail 3`}
                className="h-24 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg border">
              <img
                src="/placeholder.svg?height=96&width=96"
                alt={`${product.name} thumbnail 4`}
                className="h-24 w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center gap-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= 4 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.0 (24 đánh giá)</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold">{product.price.toLocaleString("vi-VN")}₫</div>
            {product.originalPrice && (
              <div className="text-lg text-muted-foreground line-through">
                {product.originalPrice.toLocaleString("vi-VN")}₫
              </div>
            )}
            {product.isSale && (
              <div className="rounded-md bg-red-100 px-2 py-0.5 text-sm font-medium text-red-600">
                Giảm {Math.round((((product.originalPrice || 0) - product.price) / (product.originalPrice || 1)) * 100)}
                %
              </div>
            )}
          </div>

          <div className="space-y-2">
            <div className="font-medium">Màu sắc</div>
            <div className="flex gap-2">
              <div className="h-8 w-8 rounded-full bg-black ring-2 ring-primary ring-offset-2"></div>
              <div className="h-8 w-8 rounded-full bg-blue-500"></div>
              <div className="h-8 w-8 rounded-full bg-red-500"></div>
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-medium">Kích cỡ</div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="min-w-[3rem]">
                S
              </Button>
              <Button variant="outline" size="sm" className="min-w-[3rem]">
                M
              </Button>
              <Button variant="outline" size="sm" className="min-w-[3rem] bg-primary text-primary-foreground">
                L
              </Button>
              <Button variant="outline" size="sm" className="min-w-[3rem]">
                XL
              </Button>
              <Button variant="outline" size="sm" className="min-w-[3rem]">
                XXL
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-medium">Số lượng</div>
            <div className="flex items-center">
              <Button variant="outline" size="icon" className="rounded-r-none">
                <Minus className="h-4 w-4" />
                <span className="sr-only">Giảm</span>
              </Button>
              <div className="flex h-10 w-14 items-center justify-center border-y">1</div>
              <Button variant="outline" size="icon" className="rounded-l-none">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Tăng</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button className="flex-1" size="lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Thêm vào giỏ hàng
            </Button>
            <Button variant="outline" size="lg">
              Mua ngay
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Yêu thích</span>
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Chia sẻ</span>
            </Button>
          </div>

          <div className="space-y-2 rounded-lg border p-4">
            <div className="font-medium">Thông tin vận chuyển</div>
            <div className="text-sm text-muted-foreground">
              <p>✓ Miễn phí vận chuyển cho đơn hàng trên 500.000₫</p>
              <p>✓ Giao hàng nhanh trong 24h</p>
              <p>✓ Đổi trả miễn phí trong 30 ngày</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="description">Mô tả sản phẩm</TabsTrigger>
            <TabsTrigger value="specifications">Thông số kỹ thuật</TabsTrigger>
            <TabsTrigger value="reviews">Đánh giá (24)</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6">
            <div className="space-y-4">
              <p>
                {product.name} được thiết kế với công nghệ tiên tiến, mang lại sự thoải mái và hiệu suất cao cho người
                sử dụng. Sản phẩm được làm từ chất liệu cao cấp, bền bỉ và thân thiện với môi trường.
              </p>
              <p>
                Với thiết kế hiện đại và công nghệ tiên tiến, sản phẩm này sẽ giúp bạn nâng cao hiệu suất tập luyện và
                trải nghiệm thể thao tốt nhất.
              </p>
              <p>Đặc điểm nổi bật:</p>
              <ul className="list-inside list-disc space-y-2">
                <li>Chất liệu cao cấp, bền bỉ</li>
                <li>Thiết kế hiện đại, thời trang</li>
                <li>Công nghệ tiên tiến giúp nâng cao hiệu suất</li>
                <li>Thoải mái khi sử dụng trong thời gian dài</li>
                <li>Phù hợp cho cả người mới bắt đầu và người chuyên nghiệp</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="mt-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2 rounded-lg border p-4">
                  <div className="font-medium">Thông tin chung</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Thương hiệu</div>
                    <div>Nike</div>
                    <div className="text-muted-foreground">Xuất xứ</div>
                    <div>Việt Nam</div>
                    <div className="text-muted-foreground">Bảo hành</div>
                    <div>12 tháng</div>
                  </div>
                </div>
                <div className="space-y-2 rounded-lg border p-4">
                  <div className="font-medium">Chất liệu</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Chất liệu chính</div>
                    <div>Polyester, Spandex</div>
                    <div className="text-muted-foreground">Đế</div>
                    <div>Cao su tổng hợp</div>
                    <div className="text-muted-foreground">Lớp lót</div>
                    <div>Vải mesh thoáng khí</div>
                  </div>
                </div>
                <div className="space-y-2 rounded-lg border p-4">
                  <div className="font-medium">Kích thước & Trọng lượng</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Kích thước</div>
                    <div>Theo bảng size chuẩn</div>
                    <div className="text-muted-foreground">Trọng lượng</div>
                    <div>300g</div>
                  </div>
                </div>
                <div className="space-y-2 rounded-lg border p-4">
                  <div className="font-medium">Tính năng</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Chống nước</div>
                    <div>Có</div>
                    <div className="text-muted-foreground">Thoáng khí</div>
                    <div>Có</div>
                    <div className="text-muted-foreground">Chống trượt</div>
                    <div>Có</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Đánh giá từ khách hàng</h3>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${
                            star <= 4 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">4.0</span>
                    <span className="text-sm text-muted-foreground">dựa trên 24 đánh giá</span>
                  </div>
                </div>
                <Button>Viết đánh giá</Button>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="font-medium">Nguyễn Văn A</div>
                    <div className="text-sm text-muted-foreground">12/04/2023</div>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= 5 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm">
                    Sản phẩm rất tốt, chất lượng cao và đúng như mô tả. Tôi rất hài lòng với trải nghiệm mua sắm tại
                    đây.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="font-medium">Trần Thị B</div>
                    <div className="text-sm text-muted-foreground">05/04/2023</div>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= 4 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm">
                    Giao hàng nhanh, đóng gói cẩn thận. Sản phẩm đúng như mô tả nhưng chất lượng chỉ ở mức khá. Tôi kỳ
                    vọng cao hơn một chút.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="font-medium">Lê Văn C</div>
                    <div className="text-sm text-muted-foreground">28/03/2023</div>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= 3 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm">
                    Sản phẩm tạm ổn nhưng không đáng giá với mức giá này. Tôi nghĩ có thể tìm được sản phẩm tốt hơn với
                    giá tương tự.
                  </p>
                </div>

                <Button variant="outline" className="w-full">
                  Xem thêm đánh giá
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Sản phẩm liên quan</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
