// import { Navigation } from "@/components/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MembersPage() {
  const leadership = [
    {
      name: "坂上 智朗",
      role: "代表",
      year: "院1年生",
      major: "ロボティクス＆デザイン工学研究科",
      skills: ["Next.js", "Flutter", "AWS"],
      bio: "デザインとフロントエンド開発が専門。ユーザー体験の向上に注力。",
      // image: "https://avatars.githubusercontent.com/u/55614086?v=4",
      image: "/images/55614086.png",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "斎藤 陽太",
      role: "副代表",
      year: "院2年生",
      major: "ロボティクス＆デザイン工学研究科",
      skills: [
        "NestJS",
        "React",
        "Prisma",
        "Haptic Device",
        "Google Cloud",
        "Docker",
      ],
      bio: "PulluPの創設メンバー。フルスタック開発とチームマネジメントが得意。",
      // image: "https://avatars.githubusercontent.com/u/35647163?v=4",
      image: "/images/35647163.jpeg",
      social: {
        github: "#",
        linkedin: "#",
        mail: "#",
      },
    },
    {
      name: "松本 隼典",
      role: "会計",
      year: "院2年生",
      major: "ロボティクス＆デザイン工学研究科",
      skills: ["Python", "C++", "Hardware"],
      bio: "ハードウェアと組み込みシステムのエキスパート。技術的な問題解決に強み。",
      // image: "https://avatars.githubusercontent.com/u/105847293?v=4",
      image: "/images/105847293.jpeg",
      social: {
        // github: "#",
        // twitter: "#",
        // mail: "",
      },
    },
  ];

  const teams = [
    {
      name: "教育・オンボーディングチーム",
      description:
        "サークルの技術スタックを体系的に教える講座を企画・運営する。カリキュラム設計、教材整備、ハンズオン実施、メンター制度の運用を担当する。",
      members: [
        {
          name: "工藤 滉青",
          year: "3年",
          skills: ["講義運営", "TypeScript", "React"],
        },
        {
          name: "髙橋 清彌",
          year: "4年",
          skills: ["講義運営", "TypeScript", "React"],
        },
        {
          name: "中井 裕麻",
          year: "3年",
          skills: ["講義運営", "TypeScript", "React"],
        },
      ],
    },
    {
      name: "フロントエンド開発チーム",
      description: "ユーザーインターフェースとユーザー体験の設計・開発を担当",
      members: [
        {
          name: "坂上 智朗",
          year: "",
          skills: "",
        },
        {
          name: "斎藤 陽太",
          year: "",
          skills: "",
        },
        { name: "工藤 滉青", year: "", skills: [] },
        { name: "髙橋 清彌", year: "", skills: [] },
        { name: "中井 裕麻", year: "", skills: [] },
      ],
    },
    {
      name: "バックエンド開発チーム",
      description: "サーバーサイド開発、データベース設計、API開発を担当",
      members: [
        { name: "斎藤 陽太", year: "", skills: [] },
        { name: "坂上 智朗", year: "", skills: [] },
        { name: "中井 裕麻", year: "", skills: [] },
        { name: "髙橋 清彌", year: "", skills: [] },
        { name: "工藤 滉青", year: "", skills: [] },
      ],
    },
    {
      name: "インフラ・DevOps チーム",
      description: "クラウドインフラ、CI/CD、セキュリティの管理・運用を担当",
      members: [
        { name: "斎藤 陽太", year: "", skills: [] },
        { name: "坂上 智朗", year: "", skills: [] },
      ],
    },
    {
      name: "ハードウェア開発チーム",
      description: "ハードウェアの設計、製造、テストを担当",
      members: [
        {
          name: "松本 隼典",
          year: "",
          skills: [],
        },
        { name: "斎藤 陽太", year: "", skills: [] },
        { name: "坂上 智朗", year: "", skills: [] },
      ],
    },
    {
      name: "デザイン・UX チーム",
      description:
        "ビジュアルデザイン、ユーザーリサーチ、プロトタイピングを担当",
      members: [{ name: "斎藤 陽太", year: "", skills: [] }],
    },
    {
      name: "広報・コミュニティマネジメントチーム",
      description: "サークルの広報活動、SNS運用、イベント企画・運営を担当",
      members: [
        { name: "坂上 智朗", year: "", skills: [] },
        { name: "髙橋 清彌", year: "", skills: [] },
      ],
    },
  ];

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return Github;
      case "linkedin":
        return Linkedin;
      case "twitter":
        return Twitter;
      case "mail":
        return Mail;
      default:
        return Mail;
    }
  };

  return (
    <main>
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#4d4d4d] to-[#212744] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              メンバー紹介
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty">
              PulluPを支える多様な才能を持つメンバーたちをご紹介します
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance">
            役員
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-muted">
                  <Image
                    width={512}
                    height={512}
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{leader.name}</CardTitle>
                    <Badge variant="secondary">{leader.year}</Badge>
                  </div>
                  <CardDescription>
                    <div className="font-semibold text-accent">
                      {leader.role}
                    </div>
                    <div className="text-sm">{leader.major}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 text-pretty">
                    {leader.bio}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {leader.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {Object.entries(leader.social).map(([platform, url]) => {
                      const IconComponent = getSocialIcon(platform);
                      return (
                        <a
                          key={platform}
                          href={url}
                          className="p-2 rounded-md bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          <IconComponent className="h-4 w-4" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance">
            チーム紹介
          </h2>
          <div className="space-y-8">
            {teams.map((team, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-2xl">{team.name}</CardTitle>
                  <CardDescription className="text-base text-pretty">
                    {team.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {team.members.map((member, memberIndex) => (
                      <div
                        key={memberIndex}
                        className={`p-4 bg-background rounded-lg`}
                      >
                        <div className={`flex items-center justify-between`}>
                          <div className="font-semibold">{member.name}</div>
                          {member.year && (
                            <Badge variant="outline" className="text-xs">
                              {member.year}
                            </Badge>
                          )}
                        </div>
                        {member.skills &&
                          Array.isArray(member.skills) &&
                          member.skills.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {member.skills.map((skill, skillIndex) => (
                                <Badge
                                  key={skillIndex}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">27</div>
              <div className="text-sm text-muted-foreground">総メンバー数</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">7</div>
              <div className="text-sm text-muted-foreground">専門チーム</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground">技術スタック</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">3</div>
              <div className="text-sm text-muted-foreground">
                リーダーシップ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#4d4d4d] to-[#212744] text-white rounded-b-2xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">
            チームに参加しませんか？
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
            多様なバックグラウンドを持つメンバーと一緒に、技術を学び、成長しましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              入会について
            </Link>
            <Link
              href="#"
              className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              見学申し込み
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
