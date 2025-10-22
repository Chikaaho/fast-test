import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: '客服热线',
    content: '400-888-8888',
    subContent: '周一至周日 9:00-21:00'
  },
  {
    icon: Mail,
    title: '电子邮箱',
    content: 'info@aerobreeze.com',
    subContent: '我们会在24小时内回复'
  },
  {
    icon: MapPin,
    title: '公司地址',
    content: '中国上海市浦东新区',
    subContent: '世纪大道1000号企业大厦20层'
  },
  {
    icon: Clock,
    title: '营业时间',
    content: '周一至周日',
    subContent: '9:00 - 21:00'
  }
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold mb-6">联系方式</h3>
      
      {contactInfo.map((info, index) => {
        const Icon = info.icon
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">{info.title}</h4>
              <p className="text-gray-900 mb-0.5">{info.content}</p>
              <p className="text-sm text-gray-500">{info.subContent}</p>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}