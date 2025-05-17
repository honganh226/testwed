import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface Category {
  id: string
  name: string
  image: string
  productCount: number
}

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const { id, name, image, productCount } = category

  return (
    <Link href={`/categories/${id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <div className="relative h-40">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="h-full w-full object-cover transition-all hover:scale-105"
          />
        </div>
        <CardContent className="p-4 text-center">
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{productCount} sản phẩm</p>
        </CardContent>
      </Card>
    </Link>
  )
}
