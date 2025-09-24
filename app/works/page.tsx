"use client";

import { useState } from "react";
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
import Image from "next/image";
import Link from "next/link";

export default function ProductsProjectsPage() {
  const [activeTab, setActiveTab] = useState<"products" | "projects">(
    "products"
  );

  const products = [
    {
      title: "RunTicket",
      description:
        "大阪工業大学梅田キャンパスの学食モバイルオーダーアプリ。スマートフォンで注文・決済を行い、キオスク端末で食券を発行するPWA対応のWebアプリケーション。混雑緩和と利便性向上を実現。",
      tags: ["React", "TypeScript", "Firebase", "PWA", "MUI"],
      status: "リリース済み",
      image: "/images/runticketMobile.png",
      demoUrl: "https://product.run-ticket.com",
      githubUrl: "",
    },
    {
      title: "Figare",
      description:
        "落とし物や探し物全般を掲示板形式で登録し、協力して探せるプラットフォーム。位置情報と画像を活用して、コミュニティ全体で失くしものの発見をサポートします。",
      tags: ["Next.js", "TypeScript", "Firebase", "TailwindCSS"],
      status: "リリース済み",
      image: "/images/figare.PNG",
      demoUrl: "https://figare.web.app",
      githubUrl: "#",
    },
    {
      title: "Roomie",
      description:
        "学内の空き教室予約システム。従来の書類提出方式から脱却し、リアルタイムで教室の空き状況を確認・予約できるデジタルプラットフォーム。教務課との連携により、既存の管理システムと併用しながら段階的なDX化を推進します。",
      tags: [
        "Next.js",
        "TypeScript",
        "Firebase",
        "TailwindCSS",
        "Google Aplications Script",
      ],
      status: "開発中",
      image: "",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "HydroLink",
      description:
        "水耕栽培システムの遠隔監視・制御プラットフォーム。センサーからのデータをリアルタイムで可視化し、スマートフォンやPCから環境設定を調整可能。効率的な栽培管理と収穫量の最適化を実現します。",
      tags: ["Flutter", "Dart", "Supabase", "IoT", "Swift"],
      status: "開発中",
    },
  ];

  const projects = [
    {
      title: "",
      description: "",
      category: "",
      status: "",
      date: "",
      participants: 0,
      location: "",
      highlights: [""],
      image: "",
    },
  ];

  return (
    <main>
      {/* <Navigation /> */}

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
                  <div className="aspect-video bg-muted p-2">
                    <Image
                      width={400}
                      height={300}
                      src={product.image || "/images/placeholder.svg"}
                      alt={product.title}
                      className="w-auto h-full object-cover mx-auto"
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
                      <Image
                        width={400}
                        height={300}
                        src={project.image || "/images/placeholder.svg"}
                        alt={project.title}
                        className="w-auto h-full object-cover mx-auto p-2"
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
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto text-pretty">
            {activeTab === "products"
              ? "技術スキルを活かして、実際のプロダクト開発に携わることができます。"
              : "革新的なプロジェクトに参加して、実践的な経験を積むことができます。"}
          </p>
          <Link
            href="/join"
            className="px-8 py-4 rounded-lg hover:bg-gray-800/90 bg-gray-800 hover:scale-105 transition-transform"
          >
            {activeTab === "products"
              ? "開発チームに参加する"
              : "プロジェクトに参加する"}
          </Link>
        </div>
      </section>
    </main>
  );
}
