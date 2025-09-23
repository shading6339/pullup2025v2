import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Calendar,
  MapPin,
  Clock,
  Instagram,
  Twitter,
  Github,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { label: "総部員数", value: "27名", icon: Users },
    { label: "設立年", value: "2023年", icon: Calendar },
    { label: "活動拠点", value: "梅田", icon: MapPin },
    { label: "活動頻度", value: "週2回", icon: Clock },
  ];

  const demographics = [
    {
      category: "学年別",
      data: [
        { label: "1年生", value: 15, percentage: 56 },
        { label: "2年生", value: 0, percentage: 0 },
        { label: "3年生", value: 0, percentage: 0 },
        { label: "4年生", value: 5, percentage: 19 },
        { label: "院1年生", value: 1, percentage: 4 },
        { label: "院2年生", value: 6, percentage: 22 },
      ],
    },
    {
      category: "男女比",
      data: [
        { label: "男性", value: 24, percentage: 89 },
        { label: "女性", value: 3, percentage: 11 },
      ],
    },
  ];

  const activities = [
    {
      day: "月曜日",
      time: "18:00-20:00",
      activity: "プロダクト開発ミーティング",
      location: "オンライン",
    },
    {
      day: "水曜日",
      time: "19:00-21:00",
      activity: "技術勉強会・ワークショップ",
      location: "大学内会議室",
    },
  ];

  const yearlyPlan = [
    {
      period: "4-6月",
      activities: ["新入生歓迎会", "基礎技術研修"],
    },
    {
      period: "7-9月",
      activities: ["基礎技術研修", "サマーハッカソン", "インターンシップ支援"],
    },
    {
      period: "10-12月",
      activities: [
        "チーム編成",
        "学園祭出展",
        "プロダクト発表会",
        "年末交流会",
      ],
    },
    {
      period: "1-3月",
      activities: ["基礎技術研修", "新年度準備"],
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/oit_pullup",
      handle: "@oit_pullup",
    },
    // { name: "Twitter", icon: Twitter, url: "#", handle: "@pullup_tech" },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/PulluP-Team",
      handle: "PulluP Team",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:contact@pullup.run",
      handle: "contact@pullup.run",
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
              サークル紹介
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty">
              PulluPの詳細情報、メンバー構成、活動計画をご紹介します
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <IconComponent className="h-8 w-8 mx-auto mb-3 text-accent" />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demographics Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance">
            メンバー構成
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {demographics.map((demo, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{demo.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {demo.data.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center justify-between gap-3"
                      >
                        {/* ラベル（最小限の固定幅・省略可） */}
                        <span className="text-sm font-medium basis-20 shrink-0 truncate">
                          {item.label}
                        </span>

                        {/* バー（中央カラムを可変にして全行同じ開始位置・同じ全長） */}
                        <div className="flex-1">
                          <div className="h-2 w-full rounded-full bg-muted-foreground/20">
                            <div
                              className="h-2 rounded-full bg-accent transition-all duration-500"
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                        </div>

                        {/* 数値（右寄せ・等幅数字・固定幅） */}
                        <span className="text-sm text-muted-foreground text-right tabular-nums w-20">
                          {item.value}名 ({item.percentage}%)
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Schedule */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance">
            活動スケジュール
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {activities.map((activity, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="min-w-[4rem]">
                          {activity.day}
                        </Badge>
                        <div className="text-sm text-muted-foreground">
                          {activity.time}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{activity.activity}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          {activity.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Yearly Plan */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance">
            年間活動計画
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {yearlyPlan.map((period, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-center">{period.period}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {period.activities.map((activity, activityIndex) => (
                      <li
                        key={activityIndex}
                        className="text-sm flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance">
            SNS・連絡先
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Link
                  href={social.url}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <IconComponent className="h-8 w-8 mx-auto mb-3 text-accent" />
                      <div className="font-semibold mb-1">{social.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {social.handle}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#4d4d4d] to-[#212744] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">
            PulluPに参加しませんか？
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
            技術を学び、仲間と共に成長し、実際のプロダクト開発に携わることができます。
          </p>
          <Button size="lg" variant="secondary">
            入会について詳しく見る
          </Button>
        </div>
      </section>
    </main>
  );
}
