import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { products } from '@/data/products'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function ProductPreview() {
  const navigate = useNavigate()
  const featuredProducts = products.filter((p) => p.featured)

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            明星产品
          </h2>
          <p className="text-lg text-gray-600">
            科技与设计的完美融合
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.model}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-blue-600">
                      ¥{product.price}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  onClick={() => navigate('/products')}
                >
                  查看详情
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate('/products')}
          >
            查看全部产品
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}