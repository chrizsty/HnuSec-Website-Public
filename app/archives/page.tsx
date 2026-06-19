"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { MouseTrail } from "@/components/mouse-trail"
import { TerminalButton } from "@/components/terminal-button"
import { CyberParticles } from "@/components/cyber-particles"
import { BackgroundDecoration } from "@/components/background-decoration"
import { CoordinateAxis3D } from "@/components/coordinate-axis-3d"
import { Footer } from "@/components/footer"
import { useMediaQuery } from "@/hooks/use-media-query"
import { RandomTitle } from "@/components/random-title"
import { ArchivesThemeToggle } from "@/components/archives-theme-toggle"
import SpotlightCard from "@/components/SpotlightCard"
import { SiteBackground } from "@/components/site-background"
import Link from "next/link"
import {
    Home,
    Archive,
    ChevronRight,
    Clock,
    Snowflake,
    Sun,
    Users,
    BookOpen,
    Calendar,
    Zap,
    Monitor,
    Smartphone
} from "lucide-react"

const AnimatedBackground = memo(function AnimatedBackground() {
    return <SiteBackground />
})

export default function ArchivesPage() {
    const router = useRouter()
    const isMobile = useMediaQuery("(max-width: 768px)")

    const archives = [
        {
            year: "2025",
            season: "Winter",
            title: "2025 冬季培训",
            date: "2025.01",
            description: "涵盖WEB、PWN、REV、CRY、MISC五个方向的冬季集训。",
            icon: Snowflake,
            path: "/archives/2025-winter",
            color: "from-cyan-500 to-blue-600",
            bgColor: "bg-cyan-50",
            participants: 145,
            courses: 12
        },
        {
            year: "2025",
            season: "Summer",
            title: "2025 夏季培训",
            date: "2025.07",
            description: "2025年夏季集训归档。",
            icon: Sun,
            path: "/archives/2025-summer",
            color: "from-yellow-500 to-orange-500",
            bgColor: "bg-yellow-50",
            participants: 138,
            courses: 10
        },
        {
            year: "2024",
            season: "Summer",
            title: "2024 夏季培训",
            date: "2024.08",
            description: "面向23级新生的暑期集训，包含基础与进阶课程。",
            icon: Sun,
            path: "/archives/2024-summer",
            color: "from-orange-500 to-red-500",
            bgColor: "bg-orange-50",
            participants: 152,
            courses: 15
        },
        {
            year: "2018-2024",
            season: "Legacy",
            title: "2018-2024 旧版官网",
            date: "2018-2024",
            description: "HnuSec 历代官网内容归档。",
            icon: Archive,
            path: "/docs/archives/old-site/Intro",
            color: "from-gray-500 to-slate-600",
            bgColor: "bg-gray-50",
            participants: "N/A",
            courses: "N/A"
        }
    ]

    const stats = [
        { icon: Calendar, value: "8", label: "届培训" },
        { icon: Users, value: "1350+", label: "参与学员" },
        { icon: BookOpen, value: "137", label: "课程总数" },
        { icon: Zap, value: "6", label: "培训方向" }
    ]

    return (
        <main className="relative min-h-screen overflow-hidden bg-background text-foreground select-none">
            <MouseTrail />
            <TerminalButton />
            <CyberParticles />
            <BackgroundDecoration />
            <AnimatedBackground />

            <div
                className="relative z-10 min-h-screen"
            >
                {/* Mobile Recommendation Banner */}
                {isMobile && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-r from-var-color-5/10 to-var-color-4/10 border-b border-var-color-5/20 px-4 py-3"
                    >
                        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
                            <Monitor className="w-5 h-5 text-var-color-5 flex-shrink-0" />
                            <p className="text-sm text-muted-foreground text-center">
                                推荐使用电脑访问以获得最佳体验
                            </p>
                        </div>
                    </motion.div>
                )}

                <div className="flex flex-col lg:flex-row max-w-7xl mx-auto w-full">
                    {/* Left Sidebar */}
                    <div className="lg:w-1/3 px-4 py-8 md:px-12 lg:px-8 lg:py-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex gap-3 mb-8">
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/60 border border-var-color-5/20 text-var-color-5 hover:bg-var-color-5 hover:text-white transition-all"
                                >
                                    <Home className="w-4 h-4" />
                                    <span>返回首页</span>
                                </Link>
                                <ArchivesThemeToggle />
                            </div>

                            <div className="mb-6">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-2">
                                    历届招新<span className="text-var-color-5">归档</span>
                                </h1>
                                <p className="text-muted-foreground text-lg">Training Archives</p>
                            </div>

                            <div className="h-1 w-20 bg-gradient-to-r from-var-color-5 to-var-color-4 rounded-full mb-8"></div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {stats.map((stat, i) => (
                                    <SpotlightCard
                                        key={stat.label}
                                        className="bg-card/60 backdrop-blur-md rounded-xl border border-var-color-5/20 p-4 shadow-lg"
                                        spotlightColor="rgba(107, 107, 255, 0.15)"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                            className="text-center h-full"
                                        >
                                            <stat.icon className="w-6 h-6 text-var-color-5 mx-auto mb-2" />
                                            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                                        </motion.div>
                                    </SpotlightCard>
                                ))}
                            </div>

                        </motion.div>
                    </div>

                    {/* Right Content - Scrollable */}
                    <div className="lg:w-2/3 px-4 py-8 md:px-12 lg:px-8 lg:py-12 lg:pt-32">
                        {/* Archive Items */}
                        <div className="space-y-16">
                            {archives.map((archive, index) => (
                                <SpotlightCard
                                    key={index}
                                    className="p-6 rounded-xl border border-var-color-5/20 bg-card/40 shadow-lg cursor-pointer"
                                    spotlightColor="rgba(107, 107, 255, 0.15)"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                                        className="group h-full cursor-pointer"
                                        onClick={() => router.push(archive.path)}
                                    >
                                        {/* Main Title */}
                                        <h2 className="text-xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 group-hover:opacity-80 transition-opacity">
                                            {archive.title}
                                        </h2>

                                        {/* Tags and Meta */}
                                        <div className="flex flex-wrap items-center gap-4 mb-4">
                                            <span className={`px-4 py-2 rounded-full bg-gradient-to-r ${archive.color} text-white font-mono text-sm font-bold`}>
                                                {archive.year} {archive.season}
                                            </span>
                                            <span className="flex items-center text-muted-foreground">
                                                <Clock className="w-4 h-4 mr-2" />
                                                {archive.date}
                                            </span>
                                            <span className="flex items-center text-muted-foreground">
                                                <Users className="w-4 h-4 mr-2" />
                                                {archive.participants} 人参与
                                            </span>
                                            <span className="flex items-center text-muted-foreground">
                                                <BookOpen className="w-4 h-4 mr-2" />
                                                {archive.courses} 节课程
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                                            {archive.description}
                                        </p>
                                    </motion.div>
                                </SpotlightCard>
                            ))}
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </main>
    )
}
