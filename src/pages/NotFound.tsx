import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-gray-900 mb-4">404</h1>
          <div className="w-32 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          页面未找到
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          抱歉，您访问的页面不存在或已被移除。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => navigate('/')}
            className="min-w-[160px]"
          >
            <Home className="w-5 h-5 mr-2" />
            返回首页
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate(-1)}
            className="min-w-[160px]"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回上一页
          </Button>
        </div>
      </motion.div>
    </div>
  )
}