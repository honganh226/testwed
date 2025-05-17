import { Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductCard from "@/components/product-card"
import { featuredProducts } from "@/lib/data"

export default function ProductsPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sản phẩm</h1>
          <p className="text-muted-foreground">Khám phá bộ sưu tập đồ thể thao đa dạng của chúng tôi</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter className="h-4 w-4" />
            Lọc
          </Button>
          <Select defaultValue="featured">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sắp xếp" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Nổi bật</SelectItem>
              <SelectItem value="newest">Mới nhất</SelectItem>
              <SelectItem value="price-asc">Giá: Thấp đến cao</SelectItem>
              <SelectItem value="price-desc">Giá: Cao đến thấp</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="hidden md:block">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Danh mục</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-all" />
                      <label
                        htmlFor="category-all"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Tất cả
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-shoes" />
                      <label
                        htmlFor="category-shoes"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Giày thể thao
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-clothes" />
                      <label
                        htmlFor="category-clothes"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Quần áo
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-equipment" />
                      <label
                        htmlFor="category-equipment"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Dụng cụ thể thao
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-accessories" />
                      <label
                        htmlFor="category-accessories"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Phụ kiện
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">Giá</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-all" />
                      <label
                        htmlFor="price-all"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Tất cả
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-1" />
                      <label
                        htmlFor="price-1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Dưới 500.000₫
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-2" />
                      <label
                        htmlFor="price-2"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        500.000₫ - 1.000.000₫
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-3" />
                      <label
                        htmlFor="price-3"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        1.000.000₫ - 2.000.000₫
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-4" />
                      <label
                        htmlFor="price-4"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Trên 2.000.000₫
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">Thương hiệu</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="brand-all" />
                      <label
                        htmlFor="brand-all"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Tất cả
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="brand-nike" />
                      <label
                        htmlFor="brand-nike"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nike
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="brand-adidas" />
                      <label
                        htmlFor="brand-adidas"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Adidas
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="brand-puma" />
                      <label
                        htmlFor="brand-puma"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Puma
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="brand-under-armour" />
                      <label
                        htmlFor="brand-under-armour"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Under Armour
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                <ChevronDown className="h-4 w-4 rotate-90" />
                <span className="sr-only">Trang trước</span>
              </Button>
              <Button variant="outline" size="sm" className="min-w-9">
                1
              </Button>
              <Button variant="outline" size="sm" className="min-w-9">
                2
              </Button>
              <Button variant="outline" size="sm" className="min-w-9">
                3
              </Button>
              <Button variant="outline" size="sm" className="min-w-9">
                4
              </Button>
              <Button variant="outline" size="sm" className="min-w-9">
                5
              </Button>
              <Button variant="outline" size="icon">
                <ChevronDown className="h-4 w-4 -rotate-90" />
                <span className="sr-only">Trang sau</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
