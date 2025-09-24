// import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb, Award } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "コミュニティ",
      description:
        "多様なバックグラウンドを持つメンバーが集まり、互いに学び合う環境を提供します。",
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "目標達成",
      description:
        "個人の目標から団体の目標まで、確実に達成できるサポート体制を整えています。",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-accent" />,
      title: "イノベーション",
      description:
        "新しいアイデアを歓迎し、創造的な解決策を見つけることを重視しています。",
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "実績",
      description:
        "数多くのプロジェクトを成功に導き、メンバーの成長を支援してきました。",
    },
  ];

  return (
    <main>
      {/* <Navigation /> */}
      <HeroSection />
      <p className="bg-white/20 px-2 py-0.5 text-xs text-center text-gray-150">
        このHPは大阪工業大学の公式HPではありません。
        <span className="">PulluP</span>
        サークルが責任を持って管理しています
      </p>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              <span className="font-cherry">PulluP</span>について
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              私たちは学生の潜在能力を最大限に引き出し、社会で活躍できる人材を育成することを目指しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pretty">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white rounded-b-2xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            一緒に成長しませんか？
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto text-pretty">
            PulluPで新しい挑戦を始めて、あなたの可能性を広げましょう。
          </p>
          <Link
            href="/join"
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-2 rounded-lg transition-all duration-300 hover:scale-105"
          >
            参加する
          </Link>
        </div>
      </section>
    </main>
  );
}
