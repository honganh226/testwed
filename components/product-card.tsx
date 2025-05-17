import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isNew?: boolean
  isSale?: boolean
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, name, price, originalPrice, image, category, isNew, isSale } = product

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Link href={`/products/${id}`}>
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="h-60 w-full object-cover transition-all hover:scale-105"
          />
        </Link>
        {isNew && <Badge className="absolute left-2 top-2 bg-green-500 hover:bg-green-600">Mới</Badge>}
        {isSale && (
          <Badge variant="destructive" className="absolute right-2 top-2">
            Giảm giá
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground">{category}</div>
        <Link href={`/products/${id}`}>
          <h3 className="mt-1 font-medium leading-tight hover:underline">{name}</h3>
        </Link>
        <div className="mt-2 flex items-center gap-2">
          <div className="font-bold">{price.toLocaleString("vi-VN")}₫</div>
          {originalPrice && (
            <div className="text-sm text-muted-foreground line-through">{originalPrice.toLocaleString("vi-VN")}₫</div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" size="sm">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Thêm vào giỏ
        </Button>
      </CardFooter>
    </Card>
  )
}
