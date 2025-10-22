import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ContactFormData } from '@/types/contact'

const contactSchema = z.object({
  name: z.string().min(2, '姓名至少需要2个字符'),
  email: z.string().email('请输入有效的邮箱地址'),
  message: z.string().min(10, '留言至少需要10个字符')
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // 模拟提交
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', data)
    setIsSubmitting(false)
    setSubmitSuccess(true)
    reset()
    
    setTimeout(() => {
      setSubmitSuccess(false)
    }, 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <h3 className="text-2xl font-bold mb-6">发送消息</h3>
      
      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-700"
        >
          感谢您的留言！我们会尽快回复您。
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="name">姓名 *</Label>
          <Input
            id="name"
            {...register('name')}
            placeholder="请输入您的姓名"
            className="mt-2"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">邮箱 *</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="your@email.com"
            className="mt-2"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="message">留言 *</Label>
          <Textarea
            id="message"
            {...register('message')}
            placeholder="请告诉我们您的需求或问题..."
            rows={5}
            className="mt-2"
          />
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span>发送中...</span>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              发送消息
            </>
          )}
        </Button>
      </form>
    </motion.div>
  )
}