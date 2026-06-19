"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { variants as motionVariants, staggerContainer } from "@/lib/motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MemberCard } from "@/components/member-card";
import { CyberParticles } from "@/components/cyber-particles";
import { BackToTop } from "@/components/back-to-top";

type Member = {
  id: string;
  name: string;
  avatar: string;
  intro: string;
  blog: string;
  tags: string[];
};

// Sample member data - organized from newest to oldest
const membersByYear: Record<"2024" | "2023" | "2022" | "2021", Member[]> = {
  "2024": [
    {
      id: "",
      name: "chrizsty",
      avatar:
        "https://blog.chrizsty.cn/wp-content/uploads/2025/06/b_7d13bfcfe9ef52a8c15380752054edf5.jpg",
      intro: "Hello",
      blog: "https://blog.chrizsty.cn/",
      tags: ["Web"],
    },
    {
      id: "",
      name: "Q1uJu",
      avatar: "https://www.q1uju.cc/assets/fac4.jpg",
      intro: "原穹舟鸣",
      blog: "https://q1uju.cc/",
      tags: ["Cry"],
    },
    {
      id: "",
      name: "cinco",
      avatar:
        "https://q.qlogo.cn/headimg_dl?dst_uin=1440226962&spec=640&img_type=jpg",
      intro: "心境高雅韵如风",
      blog: "https://hnusec.com/",
      tags: ["Pwn"],
    },
    {
      id: "",
      name: "Jatopos",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=3636469976&s=640",
      intro: "一往无前虎山行，拨开云雾见光明",
      blog: "https://jatopos.github.io/",
      tags: ["Web"],
    },
    {
      id: "",
      name: "FloatingRaft",
      avatar:
        "https://q.qlogo.cn/headimg_dl?dst_uin=2184582457&spec=640&img_type=jpg",
      intro: "似舟漂不定，如梗泛何从",
      blog: "https://floatingraft.github.io/",
      tags: ["Misc"],
    },
    {
      id: "",
      name: "lseaotter",
      avatar:
        "https://q.qlogo.cn/headimg_dl?dst_uin=1344759760&spec=640&img_type=jpg",
      intro: "日暮时不惧怕黑夜",
      blog: "https://hnusec.com/",
      tags: ["Re"],
    },
    {
      id: "",
      name: "yh3",
      avatar:
        "https://q.qlogo.cn/headimg_dl?dst_uin=2940582316&spec=640&img_type=jpg",
      intro: "i can't",
      blog: "https://hnusec.com/",
      tags: ["Pwn"],
    },
    {
      id: "",
      name: "Younbrian",
      avatar:
        "https://q.qlogo.cn/headimg_dl?dst_uin=1590768202&spec=640&img_type=jpg",
      intro: "none",
      blog: "https://hnusec.com/",
      tags: ["Web"],
    },
    {
      id: "",
      name: "......",
      avatar:
        "https://q.qlogo.cn/headimg_dl?dst_uin=2382679661&spec=640&img_type=jpg",
      intro: "听听时间怎么说",
      blog: "https://hnusec.com/",
      tags: ["Pwn"],
    },
    {
      id: "",
      name: "Lu0m0",
      avatar:
        "https://q.qlogo.cn/headimg_dl?dst_uin=2388685141&spec=640&img_type=jpg",
      intro: "绝不仰人鼻息",
      blog: "http://yebanluomo.fun",
      tags: ["Misc"],
    },
    {
      id: "",
      name: "cwn",
      avatar:
        "https://q.qlogo.cn/headimg_dl?dst_uin=1273238837&spec=640&img_type=jpg",
      intro: "fine",
      blog: "None",
      tags: ["Pwn"],
    },
  ],
  "2023": [
    {
      id: "",
      name: "Ewoji",
      avatar:
        "https://q.qlogo.cn/headimg_dl?dst_uin=1060089371&spec=640&img_type=jpg",
      intro: "下雨天留客天留我不留",
      blog: "https://ewoji.cn/",
      tags: ["Web", "Hacker", "Cloud"],
    },
    {
      id: "Rxiain",
      name: "orxiain.",
      avatar:
        "https://q.qlogo.cn/headimg_dl?dst_uin=1193087005&spec=640&img_type=jpg",
      intro: "There are two i's in orxiain.",
      blog: "https://orxiain.life",
      tags: ["Web", "Red Team"],
    },
    {
      id: "🍊🍊🍊🍊",
      name: "iam0range",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=3081999683&s=640",
      intro: "Stay confident",
      blog: "https://iam0range.github.io/",
      tags: ["Pwn", "Kernel", "Geek"],
    },
    {
      id: "Bx",
      name: "bx",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=1811753380&s=640",
      intro: "见证星辰大海",
      blog: "http://www.bx33661.com",
      tags: ["Web"],
    },
    {
      id: "Joker",
      name: "Unjoke",
      avatar:
        "https://q.qlogo.cn/headimg_dl?dst_uin=2801238549&spec=640&img_type=jpg",
      intro: "等雨也等你",
      blog: "https://unjoke.cn/",
      tags: ["Web"],
    },
    {
      id: "",
      name: "m1n9",
      avatar:
        "https://q.qlogo.cn/headimg_dl?dst_uin=2605742754&spec=640&img_type=jpg",
      intro: "苍山负雪，明烛天南",
      blog: "https://mi1n9.github.io/",
      tags: ["Crypto", "Blockchain"],
    },
    {
      id: "",
      name: "CrazyCat",
      avatar:
        "https://github.com/LH864042219/PWN-Obsidian/blob/main/picture/QQ.jpg?raw=true",
      intro: "原批",
      blog: "https://lh864042219.github.io/",
      tags: ["Pwn"],
    },
    {
      id: "",
      name: "Monday",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=2792663789&s=640",
      intro: "周1不放假~",
      blog: "https://www.mondaying.cn/",
      tags: ["Crypto"],
    },
    {
      id: "",
      name: "AndreiLavig",
      avatar: "https://i.loli.net/2021/02/24/5O1day2nriDzjSu.png",
      intro: "A blog about programming, technology, and life.",
      blog: "https://andreilavig.github.io/",
      tags: ["Pwn"],
    },
    {
      id: "",
      name: "CFIT",
      avatar:
        "https://cfit.oss-cn-beijing.aliyuncs.com/uploads/2024/09/02/X1w92Vrz_cfitpinkicon.png",
      intro: "Vivala CFIT!",
      blog: "https://cfitsec.cn",
      tags: ["Crypto", "Dev"],
    },
    {
      id: "",
      name: "weixiao",
      avatar:
        "https://q.qlogo.cn/headimg_dl?dst_uin=3515902077&spec=640&img_type=jpg",
      intro: "云玩家",
      blog: "None",
      tags: ["Re"],
    },
  ],
  "2022": [
    {
      id: "",
      name: "Natro92",
      avatar:
        "https://berial123.oss-cn-beijing.aliyuncs.com/img/860dd94f08a30cf4a8b7fd9685aed42.webp",
      intro: "Carpe diem.",
      blog: "https://natro92.fun",
      tags: ["Web", "Red Team"],
    },
    {
      id: "",
      name: "Tree",
      avatar: "https://s2.loli.net/2024/05/19/KLAiaqNCOJSZBRc.jpg",
      intro: "满船清梦压星河",
      blog: "https://treesec.cn/",
      tags: ["Reverse"],
    },
    {
      id: "",
      name: "Berial",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=1409080135&s=640",
      intro: "Stay hungry and cross classes",
      blog: "https://berial.cn",
      tags: ["Pwn", "IOT"],
    },
    {
      id: "",
      name: "walt",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=1420970368&s=640",
      intro: "粥p",
      blog: "https://blog.waltchans.com/",
      tags: ["Pwn"],
    },
    {
      id: "",
      name: "sdegree",
      avatar: "https://berial123.oss-cn-beijing.aliyuncs.com/Sdegree.jpg",
      intro: "前进、不择手段的前进！",
      blog: "https://github.com/superdegree",
      tags: ["Web", "Misc"],
    },
    {
      id: "",
      name: "water",
      avatar: "https://likwater.github.io/img/butterfly-icon.png",
      intro: "上善若水，水善利万物而不争",
      blog: "https://likwater.github.io/",
      tags: ["Crypto"],
    },
  ],
  "2021": [
    {
      id: "Java之父",
      name: "Boogipop",
      avatar:
        "https://q.qlogo.cn/headimg_dl?dst_uin=3576846231&spec=640&img_type=jpg",
      intro: "Are you still in pain?",
      blog: "https://boogipop.com/",
      tags: ["Web"],
    },
    {
      id: "",
      name: "Shin",
      avatar: "https://shinichicun.top/avatar.png",
      intro: "Never foget, there will be echoes",
      blog: "https://shinichicun.top/",
      tags: ["Crypto"],
    },
    {
      id: "",
      name: "Z1d10t",
      avatar: "https://z1d10t-blog.oss-cn-shenzhen.aliyuncs.com/img/avatar.png",
      intro: "直行或是转弯",
      blog: "https://z1d10t.fun/",
      tags: ["Web"],
    },
  ],
} as const;

type Year = keyof typeof membersByYear;
const years = Object.keys(membersByYear).sort().reverse() as Year[];

export default function MembersPage() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [activeYear, setActiveYear] = useState<
    "2024" | "2023" | "2022" | "2021"
  >("2023");

  // Create refs for each year section
  const yearRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Helper function to get a valid ID from a year
  const getYearId = (year: string) => `year-${year}`;

  useEffect(() => {
    setLoaded(true);

    // Initialize refs for each year
    years.forEach((year) => {
      yearRefs.current[year] = null;
    });

    // Check if there's a hash in the URL and scroll to that section
    if (window.location.hash) {
      const hashId = window.location.hash.substring(1);
      const year = years.find((y) => getYearId(y) === hashId);

      if (year) {
        setActiveYear(year);
        setTimeout(() => {
          yearRefs.current[year]?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    }
  }, []);

  const handleBackClick = () => {
    if (isNavigating) return;
    setIsNavigating(true);
    setTimeout(() => {
      router.push("/");
    }, 100);
  };

  const scrollToYear = (year: "2024" | "2023" | "2022" | "2021") => {
    setActiveYear(year);
    yearRefs.current[year]?.scrollIntoView({ behavior: "smooth" });

    // Update URL hash without full page reload
    window.history.pushState(null, "", `#${getYearId(year)}`);
  };

  // Animation variants
  const containerVariants = staggerContainer(0.05, 0.1);
  const itemVariants = motionVariants.fadeInUp;

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background to-muted text-foreground select-none">
      {/* Full-page background animation with reduced opacity for better contrast */}
      <div className="fixed inset-0 z-0 opacity-70">
        <CyberParticles />
      </div>

      {/* Back to top button */}
      <BackToTop />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-4 top-4 z-50"
      >
        <Button
          variant="outline"
          size="sm"
          onClick={handleBackClick}
          className="border-var-color-5/30 bg-var-color-3/70 text-foreground backdrop-blur-sm hover:bg-var-color-4/50 shadow-sm"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 py-16 max-w-7xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -20 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-var-color-5 to-blue-600">
            团队成员
          </h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            HNUSEC网络安全团队的优秀成员，共同致力于网络安全研究与实践
          </p>
        </motion.div>

        {/* Year navigation buttons */}
        <div className="sticky top-4 z-30 mx-auto mb-10 flex justify-center">
          <div className="flex rounded-xl border border-var-color-5/30 bg-var-color-3/70 backdrop-blur-sm overflow-hidden shadow-md">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => scrollToYear(year)}
                className={`px-4 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-mono transition-all ${activeYear === year
                    ? "bg-var-color-5/20 font-medium text-var-color-5 shadow-inner"
                    : "text-foreground hover:bg-var-color-5/10"
                  }`}
              >
                {year}级
              </button>
            ))}
          </div>
        </div>

        {/* Member sections by year */}
        {years.map((year) => (
          <div
            key={year}
            id={getYearId(year)}
            ref={(el) => {
              yearRefs.current[year] = el;
            }}
            className="mb-20 scroll-mt-24"
          >
            <motion.div
              className="mb-8 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold font-mono bg-var-color-5/10 text-var-color-5 px-4 py-2 rounded-lg border border-var-color-5/30 shadow-sm">
                {year}级
              </h2>
              <div className="ml-4 h-[2px] flex-1 bg-var-color-5/30 shadow-sm"></div>
            </motion.div>

            <motion.div
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              {membersByYear[year].map((member) => (
                <motion.div
                  key={`${year}-${member.name}`}
                  variants={itemVariants}
                  transition={{
                    duration: 0.4,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                >
                  <MemberCard member={member} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

        {/* Add link to Feishu document */}
        <motion.div
          className="mt-4 ml-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a
            href="https://hnusec-team.feishu.cn/wiki/J0aawflsTibdnPkd4YjcgYlGnEg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-var-color-5/10 hover:bg-var-color-5/20 text-var-color-5 transition-all shadow-sm hover:shadow-md"
          >
            <span className="text-sm font-medium">
              没有你的链接？在这里添加
            </span>
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </main>
  );
}
