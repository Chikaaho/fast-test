import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
  onViewDetails: (product: Product) => void
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden group cursor-pointer border-2 hover:border-blue-500 transition-all duration-300">
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <CardContent className="p-6">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
              {product.category === 'tower' && '塔式'}
              {product.category === 'desk' && '台式'}
              {product.category === 'stand' && '落地式'}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-3">{product.model}</p>
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {product.description}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-blue-600">¥{product.price}</span>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex gap-2">
          <Button
            className="flex-1"
            onClick={() => onViewDetails(product)}
          >
            查看详情
          </Button>
          <Button variant="outline" className="flex-1">
            立即购买
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}