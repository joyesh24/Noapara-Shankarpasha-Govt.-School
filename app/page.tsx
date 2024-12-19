'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BarChart3, BookOpen, Calendar, FileText, ImageIcon, Users2, GraduationCap } from 'lucide-react'

const dashboardItems = [
  { icon: FileText, title: "নোটিশ বোর্ড", color: "from-orange-400 to-red-500", link: "/notice" },
  { icon: BookOpen, title: "ক্লাস কার্যক্রম", color: "from-blue-400 to-indigo-500", link: "/class-activities" },
  { icon: BookOpen, title: "ক্লাস রুটিন", color: "from-green-400 to-teal-500", link: "/class-routine" },
  { icon: BarChart3, title: "পরিসংখ্যান", color: "from-purple-400 to-pink-500", link: "/statistics" },
  { icon: GraduationCap, title: "পরীক্ষার ফলাফল", color: "from-teal-400 to-green-500", link: "/exam-results" },
  { icon: Calendar, title: "একাডেমিক ক্যালেন্ডার", color: "from-yellow-400 to-orange-500", link: "/academic-calendar" },
  { icon: ImageIcon, title: "ফটো গ্যালারি", color: "from-red-400 to-yellow-500", link: "/photo-gallery" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 relative overflow-hidden">
      {/* Header and other components */}

      {/* Main Content - Dashboard Items */}
      <main className="container mx-auto px-4 py-16">
        {/* Section with Background Image */}
        <div className="relative rounded-lg overflow-hidden p-4">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://i.pinimg.com/736x/65/3d/5e/653d5e3d008b6d72325b2a23ced3985e.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-black/20 z-0"></div>

          {/* Dashboard Items */}
          <motion.div 
            className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {dashboardItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.link} passHref>
                  <motion.div
                    className={`w-full h-full bg-gradient-to-br ${item.color} text-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:shadow-2xl hover:scale-105 cursor-pointer relative group`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="p-6 flex flex-col items-center justify-center text-center space-y-4 relative z-10">
                      <motion.div 
                        className="p-3 rounded-full bg-white/90 transition-colors duration-300 group-hover:bg-white"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon className="h-10 w-10 text-gray-800" />
                      </motion.div>
                      <h2 className="text-lg font-medium group-hover:text-white/90 transition-colors duration-300">
                        {item.title}
                      </h2>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  )
}
