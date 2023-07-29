import { FC } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Item } from '@/types'

interface ProductCardProps {
  item: Item
}

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  return (
    <Card className="w-[300px] h-full">
      <CardHeader>
        <CardTitle >{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h2>{item.price}$</h2>
      </CardContent>
    </Card>
  )
}

export default ProductCard