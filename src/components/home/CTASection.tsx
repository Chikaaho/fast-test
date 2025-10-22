import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function CTASection() {
  const navigate = useNavigate()

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            准备好体验未来的清凉了吗？
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            立即订购AeroBreeze系列风扇，享受科技带来的极致舒适。全国包邮，7天无理由退换。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-white text-black hover:bg-gray-100"
              onClick={() => navigate('/products')}
            >
              立即选购
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white/10"
              onClick={() => navigate('/contact')}
            >
              了解更多
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div>
            <div className="text-4xl font-bold mb-2">10万+</div>
            <div className="text-gray-400">满意用户</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">99.5%</div>
            <div className="text-gray-400">好评率</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-gray-400">在线客服</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}