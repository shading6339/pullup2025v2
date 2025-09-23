"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users, MapPin } from "lucide-react";

export default function ProductsProjectsPage() {
  const [activeTab, setActiveTab] = useState<"products" | "projects">(
    "products"
  );

  const products = [
    {
      title: "StudySync",
      description: "学習管理とグループスタディを効率化するWebアプリケーション",
      tags: ["React", "Node.js", "MongoDB"],
      status: "リリース済み",
      image: "/study-app-interface.jpg",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "EventHub",
      description:
        "サークル内イベントの企画・管理・参加を一元化するプラットフォーム",
      tags: ["Next.js", "TypeScript", "Supabase"],
      status: "開発中",
      image: "/event-management-dashboard.png",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "SkillShare",
      description:
        "メンバー間でスキルを共有し、相互学習を促進するマッチングシステム",
      tags: ["Vue.js", "Python", "PostgreSQL"],
      status: "企画中",
      image: "/skill-sharing-platform.png",
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  const projects = [
    {
      title: "Tech Conference 2024",
      description: "最新技術トレンドを学ぶ学生向けカンファレンスの企画・運営",
      category: "イベント企画",
      date: "2024年3月15日",
      participants: 150,
      location: "東京国際フォーラム",
      status: "完了",
      image: "/tech-conference-presentation.png",
      highlights: [
        "5つの技術セッション",
        "20社の企業ブース",
        "ネットワーキングイベント",
      ],
    },
    {
      title: "Community Hackathon",
      description: "地域課題解決をテーマとした48時間ハッカソンの開催",
      category: "ハッカソン",
      date: "2024年5月20-22日",
      participants: 80,
      location: "オンライン + 現地",
      status: "進行中",
      image: "/hackathon-coding-event.jpg",
      highlights: ["地域自治体との連携", "賞金総額50万円", "メンター制度"],
    },
    {
      title: "Startup Incubation Program",
      description: "学生起業家を支援するインキュベーションプログラム",
      category: "起業支援",
      date: "2024年7月1日開始",
      participants: 25,
      location: "PulluP Innovation Lab",
      status: "募集中",
      image: "/startup-incubator-workspace.jpg",
      highlights: [
        "3ヶ月集中プログラム",
        "投資家とのマッチング",
        "ビジネスメンター",
      ],
    },
  ];

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#4d4d4d] to-[#212744] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              プロダクト & プロジェクト
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty">
              PulluPが開発・運営している革新的なプロダクトと取り組みをご紹介します
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex bg-muted rounded-lg p-1">
              <Button
                variant={activeTab === "products" ? "default" : "ghost"}
                onClick={() => setActiveTab("products")}
                className="px-8"
              >
                プロダクト
              </Button>
              <Button
                variant={activeTab === "projects" ? "default" : "ghost"}
                onClick={() => setActiveTab("projects")}
                className="px-8"
              >
                プロジェクト
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Tab */}
      {activeTab === "products" && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-muted">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{product.title}</CardTitle>
                      <Badge
                        variant={
                          product.status === "リリース済み"
                            ? "default"
                            : product.status === "開発中"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {product.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-pretty">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        デモ
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Tab */}
      {activeTab === "projects" && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="aspect-video lg:aspect-auto bg-muted">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 lg:p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary">{project.category}</Badge>
                        <Badge
                          variant={
                            project.status === "完了"
                              ? "default"
                              : project.status === "進行中"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>

                      <CardTitle className="text-2xl mb-3 text-balance">
                        {project.title}
                      </CardTitle>

                      <CardDescription className="text-base mb-6 text-pretty">
                        {project.description}
                      </CardDescription>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {project.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {project.participants}名参加
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {project.location}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">ハイライト</h4>
                        <ul className="space-y-1">
                          {project.highlights.map(
                            (highlight, highlightIndex) => (
                              <li
                                key={highlightIndex}
                                className="text-sm text-muted-foreground flex items-center gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                {highlight}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-muted rounded-b-2xl bg-gradient-to-br from-[#4d4d4d] to-[#212744] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">
            {activeTab === "products"
              ? "プロダクト開発に参加しませんか？"
              : "プロジェクトに参加しませんか？"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            {activeTab === "products"
              ? "技術スキルを活かして、実際のプロダクト開発に携わることができます。"
              : "革新的なプロジェクトに参加して、実践的な経験を積むことができます。"}
          </p>
          <Button size="lg">
            {activeTab === "products"
              ? "開発チームに参加する"
              : "プロジェクトに参加する"}
          </Button>
        </div>
      </section>
    </main>
  );
}
