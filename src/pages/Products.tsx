import { useState } from 'react'
import { motion } from 'framer-motion'
import { products } from '@/data/products'
import ProductGrid from '@/components/products/ProductGrid'
import ProductDetail from '@/components/products/ProductDetail'
import { Product } from '@/types/product'
import { Button } from '@/components/ui/button'

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [filter, setFilter] = useState<'all' | 'tower' | 'desk' | 'stand'>('all')

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product)
    setIsDetailOpen(true)
  }

  const handleCloseDetail = () => {
    setIsDetailOpen(false)
    setTimeout(() => setSelectedProduct(null), 300)
  }

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter)

  const categories = [
    { id: 'all', name: '全部产品' },
    { id: 'tower', name: '塔式风扇' },
    { id: 'desk', name: '台式风扇' },
    { id: 'stand', name: '落地风扇' }
  ]

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              探索产品
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              从台式到落地，从便携到智能，总有一款适合您
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? 'default' : 'outline'}
                onClick={() => setFilter(category.id as any)}
                className="min-w-[120px]"
              >
                {category.name}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid 
            products={filteredProducts} 
            onViewDetails={handleViewDetails}
          />
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetail
        product={selectedProduct}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
      />
    </div>
  )
}