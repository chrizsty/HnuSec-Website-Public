"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Search,
  Calendar,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Sample article data - you can replace this with your actual data
const articles = [
  {
    id: 1,
    title: "2025 TGCTF WriteUp By HnuSec",
    url: "https://mp.weixin.qq.com/s/_q82hc11MbEp4zUbrSgjrw",
    date: "2025-04-18",
    tags: ["Writeup"],
  },
  {
    id: 2,
    title: "XYCTF 2025 Writeup",
    url: "https://mp.weixin.qq.com/s/bScfQUo9asSlFdY5En3bRg",
    date: "2025-04-18",
    tags: ["Writeup"],
  },
  {
    id: 3,
    title: "HnuSec团队介绍&招新简章",
    url: "https://mp.weixin.qq.com/s/xN0CJxEXESC8LuScbHYbFw",
    date: "2025-04-19",
    tags: ["公告"],
  },
  {
    id: 4,
    title: "CTF如何选择一个适合自己的方向",
    url: "https://mp.weixin.qq.com/s/3tgLqrG9gywcCgM8FXOwxg",
    date: "2025-04-28",
    tags: ["公告"],
  },
  {
    id: 5,
    title: "ISCC区域赛 2025 Writeup",
    url: "https://mp.weixin.qq.com/s/4VQPxCPh8sE1QxPcLbai1A",
    date: "2025-05-16",
    tags: ["Writeup"],
  },
  {
    id: 6,
    title: "轩辕杯 2025 Writeup",
    url: "https://mp.weixin.qq.com/s/uo7iSRBNaojS73qc4p-vqQ",
    date: "2025-05-17",
    tags: ["Writeup"],
  },
  {
    id: 7,
    title: "LitCTF 2025 Writeup",
    url: "https://mp.weixin.qq.com/s/RvqsXKKGVE1XJyoy3CWaeQ",
    date: "2025-05-18",
    tags: ["Writeup"],
  },
  {
    id: 8,
    title: "ISCC决赛 2025 Writeup",
    url: "https://mp.weixin.qq.com/s/wITi95l_kqEtJQ_PPqf1iw",
    date: "2025-05-19",
    tags: ["Writeup"],
  },
  {
    id: 9,
    title: "蓝桥杯网安赛道 2025 Writeup",
    url: "https://mp.weixin.qq.com/s/rHKXHXv0dMfNOtQJQKwgVQ",
    date: "2025-05-19",
    tags: ["Writeup"],
  },
  {
    id: 10,
    title: "ACTFeznote非预期一血 & arandom 2025 Writeup",
    url: "https://mp.weixin.qq.com/s/SQiTiHXE1fwStk4UYQf7Eg",
    date: "2025-05-25",
    tags: ["Writeup"],
  },
  {
    id: 11,
    title: "2025 miniLCTF-pwn WriteUp By HnuSec",
    url: "https://mp.weixin.qq.com/s/wfguBOgZZnBtZhZ3d6XuXg",
    date: "2025-05-28",
    tags: ["Writeup"],
  },
  {
    id: 12,
    title: "HnuSec邀请同样热爱CTF的你加入！！！",
    url: "https://mp.weixin.qq.com/s/6rfPQUzxHta45KiEMBxo6w",
    date: "2025-07-08",
    tags: ["公告"],
  },
  {
    id: 13,
    title: "HnuSec荣获CISCN全国总决赛一等奖！！！",
    url: "https://mp.weixin.qq.com/s/Odb9ak-7HDe8gwydKQREUA",
    date: "2025-07-25",
    tags: ["公告"],
  },
  {
    id: 14,
    title:
      "第一名🥇第五届“长城杯”网络安全大赛暨京津冀蒙网络安全技能竞赛（初赛）题解",
    url: "https://mp.weixin.qq.com/s/ou_p2k_uS2QPXGYK4koCzg",
    date: "2025-07-24",
    tags: ["Writeup"],
  },
  {
    id: 15,
    title: "Jenkins凭证破解问题",
    url: "https://mp.weixin.qq.com/s/rAE0wRSkFPUVEduUfUe2Pw",
    date: "2025-07-26",
    tags: ["技术分享"],
  },
  {
    id: 16,
    title: "Windows和Linux在CVE-2024-38816下的路径解析差异分析",
    url: "https://mp.weixin.qq.com/s?__biz=Mzk4ODEwMzE3NA==&mid=2247485596&idx=1&sn=9c462ab7c43f2545092094aa283bb186&chksm=c46b68f4d5210d4ab0d81e6d33af98228daafa7af2872bc2d91150d034045bd4792c857e7997&scene=126&sessionid=1767016654&poc_token=HPWIUmmj2QvwALnQ5xKBp_4fuk2HF0Apbep2PbUb",
    date: "2025-09-27",
    tags: ["技术分享"],
  },
  {
    id: 17,
    title: "Fastjson 低版本(<=1.2.47)原生反序列化利用",
    url: "https://mp.weixin.qq.com/s/W_xBNKrFD_CvKYJCmngU5w",
    date: "2025-09-28",
    tags: ["技术分享"],
  },
  {
    id: 18,
    title: "从入门到入侵：PHP 反序列化漏洞详解",
    url: "https://mp.weixin.qq.com/s/EQgUP12gJn-02kPyp-rmjw",
    date: "2025-09-29",
    tags: ["技术分享"],
  },
  {
    id: 19,
    title: "诸葛连弩——非栈上格式化字符串漏洞",
    url: "https://mp.weixin.qq.com/s/Fw6Kudlawx1t2LNgJm39nA",
    date: "2025-09-30",
    tags: ["技术分享"],
  },
  {
    id: 20,
    title: "CE教程的教程",
    url: "https://mp.weixin.qq.com/s/BXP1TxVrX7Jps9Ljp5c57A",
    date: "2025-10-01",
    tags: ["技术分享"],
  },
  {
    id: 21,
    title: "伪随机数预测-MT19937",
    url: "https://mp.weixin.qq.com/s/asoAKvoR0EzxHliHQ7gUeA",
    date: "2025-10-02",
    tags: ["技术分享"],
  },
  {
    id: 22,
    title: "Misc隐写术：成为赛博侦探的第一步",
    url: "https://mp.weixin.qq.com/s/o591YVBjyN-OO76fWrfNRQ",
    date: "2025-10-03",
    tags: ["技术分享"],
  },
  {
    id: 23,
    title: "栈迁移学习与分析",
    url: "https://mp.weixin.qq.com/s/f21pItJzl_5wKqHmM0-DFA",
    date: "2025-10-09",
    tags: ["技术分享"],
  },
  {
    id: 24,
    title: "文件上传漏洞全攻略：攻防与绕过实战",
    url: "https://mp.weixin.qq.com/s/FW2lNunuT0brq903-1diew",
    date: "2025-10-10",
    tags: ["技术分享"],
  },
  {
    id: 25,
    title: "SQL注入基础知识整理",
    url: "https://mp.weixin.qq.com/s/ZDCk8FDVGwnqcyqcVR5f9w",
    date: "2025-10-13",
    tags: ["技术分享"],
  },
  {
    id: 26,
    title: "update_it&金Java详解",
    url: "https://mp.weixin.qq.com/s/YDluAV0hz5Q9ZAvH9neQAg",
    date: "2025-10-15",
    tags: ["技术分享"],
  },
  {
    id: 27,
    title: "二进制Pwn&Re题解",
    url: "https://mp.weixin.qq.com/s/PhtF3jaGj3rrAm0xh_Cjnw",
    date: "2025-10-15",
    tags: ["Writeup"],
  },
  {
    id: 28,
    title: "2025年羊城杯题解 By HnuSec",
    url: "https://mp.weixin.qq.com/s/1xoqRajWDxLhDptevynymA",
    date: "2025-10-15",
    tags: ["Writeup"],
  },
  {
    id: 29,
    title: "专题讲座：局内旁观——信安专业的现状与未来",
    url: "https://mp.weixin.qq.com/s/VmZ71Ljz4LFacosqVEDwng",
    date: "2025-11-21",
    tags: ["公告"],
  },
].sort((a, b) => b.id - a.id);

// Extract all unique tags
const allTags = Array.from(
  new Set(articles.flatMap((article) => article.tags)),
);

interface ArticlesOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ArticlesOverlay({ isOpen, onClose }: ArticlesOverlayProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const articlesPerPage = 8;

  // Filter articles based on search term and selected tag
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      searchTerm === "" ||
      article.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag =
      selectedTag === null || article.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  // Reset to first page when overlay opens or filters change
  useEffect(() => {
    if (isOpen) {
      setCurrentPage(1);
    }
  }, [isOpen, searchTerm, selectedTag]);

  // Get current articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle,
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle escape key to close overlay
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Overlay panel */}
          <motion.div
            className="fixed inset-y-0 right-0 z-50 w-full max-w-2xl bg-background/90 backdrop-blur-md shadow-lg border-l border-var-color-5/30 overflow-hidden flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-var-color-5/30 p-4">
              <h2 className="text-2xl font-bold text-var-color-5">文章列表</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="rounded-full hover:bg-var-color-5/10"
              >
                <X className="h-5 w-5 text-var-color-5" />
              </Button>
            </div>

            {/* Search and filter */}
            <div className="border-b border-var-color-5/30 p-4 space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="搜索文章..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 border-var-color-5/30 bg-white/50 focus:border-var-color-5/50"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedTag(null)}
                  className={`text-xs ${
                    selectedTag === null
                      ? "bg-var-color-5/20 border-var-color-5/50"
                      : "bg-white/50 border-var-color-5/30"
                  }`}
                >
                  全部
                </Button>
                {allTags.slice(0, 10).map((tag) => (
                  <Button
                    key={tag}
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setSelectedTag(tag === selectedTag ? null : tag)
                    }
                    className={`text-xs ${
                      tag === selectedTag
                        ? "bg-var-color-5/20 border-var-color-5/50"
                        : "bg-white/50 border-var-color-5/30"
                    }`}
                  >
                    {tag}
                  </Button>
                ))}
                {allTags.length > 10 && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs bg-white/50 border-var-color-5/30"
                  >
                    更多...
                  </Button>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 overflow-y-auto">
              {filteredArticles.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <p>没有找到匹配的文章</p>
                  <Button
                    variant="link"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedTag(null);
                    }}
                    className="mt-2"
                  >
                    清除筛选条件
                  </Button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {currentArticles.map((article) => (
                    <motion.li
                      key={article.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="group"
                    >
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 rounded-lg border border-var-color-5/20 bg-white/50 hover:bg-var-color-5/10 transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-foreground group-hover:text-var-color-5 transition-colors">
                            {article.title}
                          </h3>
                          <ExternalLink className="h-4 w-4 text-var-color-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
                        </div>

                        <div className="mt-3 flex flex-wrap items-center text-xs text-muted-foreground gap-x-4 gap-y-2">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {article.date}
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {article.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-var-color-5/10 text-var-color-5 cursor-pointer hover:bg-var-color-5/20"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setSelectedTag(tag);
                                }}
                              >
                                <Tag className="h-2.5 w-2.5 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* Pagination */}
            <div className="border-t border-var-color-5/30 p-4 bg-background/90 backdrop-blur-md flex items-center justify-between">
              <div className="text-sm text-foreground/70">
                {filteredArticles.length > 0 ? (
                  <>
                    第 {currentPage} 页，共 {totalPages} 页
                    <span className="ml-2 text-xs text-muted-foreground">
                      (共 {filteredArticles.length} 篇文章)
                    </span>
                  </>
                ) : (
                  <span>无结果</span>
                )}
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevPage}
                  disabled={currentPage === 1 || filteredArticles.length === 0}
                  className="border-var-color-5/30 bg-white/50 hover:bg-var-color-4/30 disabled:opacity-50"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" /> 上一页
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextPage}
                  disabled={
                    currentPage === totalPages || filteredArticles.length === 0
                  }
                  className="border-var-color-5/30 bg-white/50 hover:bg-var-color-4/30 disabled:opacity-50"
                >
                  下一页 <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
