import { Navigation } from "@/components/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Award, TrendingUp } from "lucide-react";

export default function ActivitiesPage() {
  const activities = [
    {
      date: "2024年3月",
      title: "Tech Conference 2024 開催",
      description:
        "最新技術トレンドを学ぶ学生向けカンファレンスを成功裏に開催。150名の参加者を集め、5つの技術セッションと20社の企業ブースを展開。",
      type: "イベント",
      participants: 1,
      achievement: "参加者満足度95%",
      image: "/tech-conference-stage.png",
    },
    {
      date: "2023年10月",
      title: "PulluP設立",
      description:
        "学生の可能性を最大限に引き出すことを目的として、PulluPサークルを正式に設立。初期メンバー20名でスタート。",
      type: "設立",
      participants: 20,
      achievement: "サークル設立",
      image: "/team-founding-celebration.jpg",
    },
  ];

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      value: "50+",
      label: "総参加者数",
      description: "これまでの活動に参加した延べ人数",
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      value: "15",
      label: "完了プロジェクト",
      description: "成功裏に完了したプロジェクト数",
    },
    {
      icon: <Calendar className="h-8 w-8 text-accent" />,
      value: (() => {
        const startDate = new Date("2021-04-01");
        const currentDate = new Date();
        const years = currentDate.getFullYear() - startDate.getFullYear();
        const months =
          currentDate.getMonth() - startDate.getMonth() + years * 12;
        const displayYears = Math.floor(months / 12);
        const displayMonths = months % 12;
        return displayYears > 0
          ? `${displayYears}年${displayMonths}ヶ月`
          : `${displayMonths}ヶ月`;
      })(),
      label: "活動期間",
      description: "設立からの活動期間",
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
              活動報告
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty">
              PulluPのこれまでの活動実績と成果をご紹介します
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <CardTitle className="text-3xl font-bold text-accent">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="font-semibold">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
                {stat.description && (
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Timeline */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">
              活動タイムライン
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              設立から現在までの主要な活動と成果を時系列でご紹介します
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {activities.map((activity, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="lg:col-span-1 aspect-video lg:aspect-auto bg-muted">
                      <img
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="lg:col-span-2 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{activity.date}</Badge>
                        <Badge variant="secondary">{activity.type}</Badge>
                      </div>

                      <CardTitle className="text-xl mb-3 text-balance">
                        {activity.title}
                      </CardTitle>

                      <CardDescription className="mb-4 text-pretty">
                        {activity.description}
                      </CardDescription>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {activity.participants}名参加
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="h-4 w-4" />
                          {activity.achievement}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">今後の展望</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            PulluPは今後も革新的な活動を通じて、より多くの学生の可能性を引き出していきます。
            新しいプロジェクトや取り組みにご期待ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/project"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              進行中のプロジェクト
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              参加について相談
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
