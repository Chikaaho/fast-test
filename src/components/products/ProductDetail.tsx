import { X, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Product } from '@/types/product'
import { Button } from '@/components/ui/button'

interface ProductDetailProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export default function ProductDetail({ product, isOpen, onClose }: ProductDetailProps) {
  if (!product) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Image */}
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-3">
                      {product.category === 'tower' && '塔式风扇'}
                      {product.category === 'desk' && '台式风扇'}
                      {product.category === 'stand' && '落地式风扇'}
                    </span>
                    <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                    <p className="text-gray-500">{product.model}</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-4xl font-bold text-blue-600 mb-4">
                      ¥{product.price}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">核心特性</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specifications */}
                  {product.specifications && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">技术规格</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="text-sm">
                            <span className="text-gray-500">{key}：</span>
                            <span className="font-medium ml-1">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="mt-auto flex gap-3">
                    <Button className="flex-1" size="lg">
                      立即购买
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1">
                      加入购物车
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}