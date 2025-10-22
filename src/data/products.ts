import { Product } from '@/types/product'

// 使用生成的产品图片
export const products: Product[] = [
  {
    id: '1',
    name: 'AeroBreeze Pro',
    model: 'AB-Pro-2024',
    price: 1299,
    image: 'https://entrep-1300636955.cos.ap-guangzhou.myqcloud.com/ai-generated/generation/generated_ad9c9958ea164856858d4efbb6f96ded.png',
    images: [
      'https://entrep-1300636955.cos.ap-guangzhou.myqcloud.com/ai-generated/generation/generated_ad9c9958ea164856858d4efbb6f96ded.png'
    ],
    description: '旗舰塔式风扇，采用AI智能温控技术，360°立体送风，超静音运行。',
    features: [
      'AI智能温控',
      '360°立体送风',
      '超静音 < 25dB',
      '远程控制',
      '节能省电'
    ],
    specifications: {
      '功率': '50W',
      '风速档位': '12档',
      '噪音': '< 25dB',
      '控制方式': 'APP + 遥控',
      '重量': '5.2kg',
      '高度': '110cm'
    },
    category: 'tower',
    featured: true
  },
  {
    id: '2',
    name: 'SmartFlow Desk',
    model: 'SF-Desk-2024',
    price: 599,
    image: 'https://entrep-1300636955.cos.ap-guangzhou.myqcloud.com/ai-generated/generation/generated_b01ac3db3c9049268d93a7f432d58930.png',
    images: [
      'https://entrep-1300636955.cos.ap-guangzhou.myqcloud.com/ai-generated/generation/generated_b01ac3db3c9049268d93a7f432d58930.png'
    ],
    description: '专为办公设计的智能台扇，小巧精致，强劲风力，USB供电，随处可用。',
    features: [
      '小巧便携',
      'USB供电',
      '无线续航8小时',
      '三档风速',
      '静音设计'
    ],
    specifications: {
      '功率': '10W',
      '风速档位': '3档',
      '噪音': '< 30dB',
      '电池容量': '5000mAh',
      '重量': '0.8kg',
      '尺寸': '18cm'
    },
    category: 'desk',
    featured: false
  },
  {
    id: '3',
    name: 'UltraQuiet Stand',
    model: 'UQ-Stand-2024',
    price: 899,
    image: 'https://entrep-1300636955.cos.ap-guangzhou.myqcloud.com/ai-generated/generation/generated_b5c78532040443728d1be9c6b64f5b08.png',
    images: [
      'https://entrep-1300636955.cos.ap-guangzhou.myqcloud.com/ai-generated/generation/generated_b5c78532040443728d1be9c6b64f5b08.png'
    ],
    description: '经典落地式风扇升级版，超静音马达，高度可调，广角摇头，适合客厅卧室。',
    features: [
      '超静音马达',
      '高度可调',
      '90°广角摇头',
      '定时功能',
      '节能认证'
    ],
    specifications: {
      '功率': '40W',
      '风速档位': '8档',
      '噪音': '< 28dB',
      '控制方式': '遥控',
      '重量': '4.5kg',
      '高度': '90-130cm可调'
    },
    category: 'stand',
    featured: false
  },
  {
    id: '4',
    name: 'AeroBreeze Mini',
    model: 'AB-Mini-2024',
    price: 399,
    image: 'https://entrep-1300636955.cos.ap-guangzhou.myqcloud.com/ai-generated/generation/generated_b01ac3db3c9049268d93a7f432d58930.png',
    images: [
      'https://entrep-1300636955.cos.ap-guangzhou.myqcloud.com/ai-generated/generation/generated_b01ac3db3c9049268d93a7f432d58930.png'
    ],
    description: '迷你便携风扇，旅行办公必备，磁吸底座，可充电设计。',
    features: [
      '迷你便携',
      '磁吸底座',
      '可充电',
      '4000mAh大电池',
      '多色可选'
    ],
    specifications: {
      '功率': '5W',
      '风速档位': '3档',
      '噪音': '< 35dB',
      '电池容量': '4000mAh',
      '重量': '0.3kg',
      '尺寸': '12cm'
    },
    category: 'desk',
    featured: false
  },
  {
    id: '5',
    name: 'SmartFlow Tower Pro',
    model: 'SF-Tower-Pro-2024',
    price: 1599,
    image: 'https://entrep-1300636955.cos.ap-guangzhou.myqcloud.com/ai-generated/generation/generated_ad9c9958ea164856858d4efbb6f96ded.png',
    images: [
      'https://entrep-1300636955.cos.ap-guangzhou.myqcloud.com/ai-generated/generation/generated_ad9c9958ea164856858d4efbb6f96ded.png'
    ],
    description: '顶级智能塔扇，集成空气净化功能，实时监测空气质量，智能调节风速。',
    features: [
      '空气净化',
      '空气质量监测',
      'AI自动调节',
      '语音控制',
      'HEPA滤网'
    ],
    specifications: {
      '功率': '60W',
      '风速档位': '16档',
      '噪音': '< 23dB',
      '控制方式': 'APP + 语音 + 遥控',
      '重量': '6.5kg',
      '高度': '120cm'
    },
    category: 'tower',
    featured: true
  },
  {
    id: '6',
    name: 'UltraQuiet Desk Pro',
    model: 'UQ-Desk-Pro-2024',
    price: 799,
    image: 'https://entrep-1300636955.cos.ap-guangzhou.myqcloud.com/ai-generated/generation/generated_b01ac3db3c9049268d93a7f432d58930.png',
    images: [
      'https://entrep-1300636955.cos.ap-guangzhou.myqcloud.com/ai-generated/generation/generated_b01ac3db3c9049268d93a7f432d58930.png'
    ],
    description: '高端台式风扇，无线充电手机座，氛围灯设计，工作娱乐两不误。',
    features: [
      '无线充电',
      'RGB氛围灯',
      '超强续航',
      '触控操作',
      '风速记忆'
    ],
    specifications: {
      '功率': '15W',
      '风速档位': '6档',
      '噪音': '< 28dB',
      '电池容量': '8000mAh',
      '重量': '1.2kg',
      '尺寸': '22cm'
    },
    category: 'desk',
    featured: false
  }
]