import { motion } from 'framer-motion'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import SocialLinks from '@/components/contact/SocialLinks'

export default function Contact() {
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
              联系我们
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              有任何问题或建议？我们随时为您服务
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <ContactInfo />
              <SocialLinks />
            </div>

            {/* Right Column */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="aspect-[21/9] bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <p className="text-lg font-semibold mb-2">地图位置</p>
                <p className="text-sm">上海市浦东新区世纪大道1000号</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}