import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">AeroBreeze</h3>
            <p className="text-sm">
              致力于为您打造极致舒适的清凉体验，用科技改变生活。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  产品中心
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  联系我们
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  售后服务
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">产品系列</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  塔式风扇
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  台式风扇
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  落地风扇
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  便携风扇
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">联系方式</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-sm">400-888-8888</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">info@aerobreeze.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <span className="text-sm">
                  中国上海市浦东新区<br />世纪大道1000号
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; 2024 AeroBreeze. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}