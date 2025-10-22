import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

const socialLinks = [
  { icon: Facebook, name: 'Facebook', url: '#' },
  { icon: Twitter, name: 'Twitter', url: '#' },
  { icon: Instagram, name: 'Instagram', url: '#' },
  { icon: Linkedin, name: 'LinkedIn', url: '#' },
  { icon: Youtube, name: 'YouTube', url: '#' }
]

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white"
    >
      <h3 className="text-2xl font-bold mb-4">关注我们</h3>
      <p className="text-blue-100 mb-6">
        关注我们的社交媒体，获取最新产品资讯和优惠活动
      </p>
      
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon
          return (
            <motion.a
              key={social.name}
              href={social.url}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
              aria-label={social.name}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          )
        })}
      </div>
    </motion.div>
  )
}