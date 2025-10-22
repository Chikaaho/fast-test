import { Product } from '@/types/product'
import ProductCard from './ProductCard'

interface ProductGridProps {
  products: Product[]
  onViewDetails: (product: Product) => void
}

export default function ProductGrid({ products, onViewDetails }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  )
}