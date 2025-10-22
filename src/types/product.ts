export interface Product {
  id: string
  name: string
  model: string
  price: number
  image: string
  images?: string[]
  description: string
  features: string[]
  specifications?: Record<string, string>
  category: 'desk' | 'stand' | 'tower'
  featured?: boolean
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}