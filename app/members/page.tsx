import { Navigation } from "@/components/navigation";
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

export default function MembersPage() {
  const leadership = [
    {
      name: "坂上 智朗",
      role: "代表",
      year: "院1年生",
      major: "ロボティクス＆デザイン工学研究科",
      skills: ["Next.js", "Flutter", "AWS"],
      bio: "デザインとフロントエンド開発が専門。ユーザー体験の向上に注力。",
      image: "https://avatars.githubusercontent.com/u/55614086?v=4",
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
      skills: ["Python", "Machine Learning", "Docker"],
      bio: "PulluPの創設メンバー。フルスタック開発とチームマネジメントが得意。",
      image: "https://avatars.githubusercontent.com/u/35647163?v=4",
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
      image: "https://avatars.githubusercontent.com/u/105847293?v=4",
      social: {
        // github: "#",
        // twitter: "#",
        // mail: "",
      },
    },
  ];

  const teams = [
    {
      name: "フロントエンド開発チーム",
      description: "ユーザーインターフェースとユーザー体験の設計・開発を担当",
      members: [
        {
          name: "鈴木 美咲",
          year: "2年",
          skills: ["React", "TypeScript", "Tailwind CSS"],
        },
        {
          name: "高橋 健太",
          year: "1年",
          skills: ["Vue.js", "JavaScript", "CSS"],
        },
        {
          name: "伊藤 あかり",
          year: "2年",
          skills: ["Next.js", "React", "Figma"],
        },
        {
          name: "渡辺 大輔",
          year: "1年",
          skills: ["HTML", "CSS", "JavaScript"],
        },
      ],
    },
    {
      name: "バックエンド開発チーム",
      description: "サーバーサイド開発、データベース設計、API開発を担当",
      members: [
        {
          name: "中村 雄一",
          year: "3年",
          skills: ["Node.js", "PostgreSQL", "AWS"],
        },
        {
          name: "小林 さくら",
          year: "2年",
          skills: ["Python", "Django", "MongoDB"],
        },
        {
          name: "加藤 翔太",
          year: "2年",
          skills: ["Java", "Spring Boot", "MySQL"],
        },
        {
          name: "吉田 麻衣",
          year: "1年",
          skills: ["PHP", "Laravel", "SQLite"],
        },
      ],
    },
    {
      name: "データサイエンス・AI チーム",
      description: "機械学習、データ分析、AI アプリケーションの開発を担当",
      members: [
        {
          name: "松本 智也",
          year: "3年",
          skills: ["Python", "TensorFlow", "Pandas"],
        },
        {
          name: "井上 結衣",
          year: "2年",
          skills: ["R", "Machine Learning", "Statistics"],
        },
        {
          name: "森田 拓海",
          year: "2年",
          skills: ["Python", "PyTorch", "OpenCV"],
        },
        {
          name: "清水 愛美",
          year: "1年",
          skills: ["Python", "NumPy", "Matplotlib"],
        },
      ],
    },
    {
      name: "インフラ・DevOps チーム",
      description: "クラウドインフラ、CI/CD、セキュリティの管理・運用を担当",
      members: [
        {
          name: "橋本 慎一",
          year: "3年",
          skills: ["AWS", "Docker", "Kubernetes"],
        },
        {
          name: "木村 理沙",
          year: "2年",
          skills: ["GCP", "Terraform", "Jenkins"],
        },
        { name: "斎藤 和也", year: "2年", skills: ["Linux", "Docker", "Git"] },
      ],
    },
    {
      name: "企画・マーケティングチーム",
      description: "イベント企画、広報活動、パートナーシップの構築を担当",
      members: [
        {
          name: "藤田 優子",
          year: "2年",
          skills: ["企画立案", "SNS運用", "デザイン"],
        },
        {
          name: "岡田 直樹",
          year: "1年",
          skills: ["コンテンツ制作", "動画編集", "写真撮影"],
        },
        {
          name: "村上 千尋",
          year: "1年",
          skills: ["ライティング", "イベント運営", "PR"],
        },
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
      <Navigation />

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
            開発チーム
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
                        className="p-4 bg-background rounded-lg"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold">{member.name}</div>
                          <Badge variant="outline" className="text-xs">
                            {member.year}
                          </Badge>
                        </div>
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
              <div className="text-3xl font-bold text-accent mb-2">45</div>
              <div className="text-sm text-muted-foreground">総メンバー数</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">5</div>
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
            <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              入会について
            </button>
            <button className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              見学申し込み
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
