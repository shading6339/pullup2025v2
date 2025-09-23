"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function QAPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      category: "一般的な質問",
      questions: [
        {
          question: "PulluPはどのようなサークルですか？",
          answer:
            "PulluPは学生の可能性を最大限に引き出すことを目的とした革新的なサークルです。技術開発、イベント企画、起業支援など多岐にわたる活動を通じて、メンバーの成長をサポートしています。",
        },
        {
          question: "参加するにはどうすればよいですか？",
          answer:
            "参加をご希望の方は、まずお問い合わせフォームからご連絡ください。その後、説明会への参加や面談を経て、正式にメンバーとして活動を開始していただけます。",
        },
        {
          question: "活動頻度はどの程度ですか？",
          answer:
            "基本的な定例会議は週1回、プロジェクトによっては追加の活動があります。ただし、学業との両立を重視しており、個人の都合に合わせて参加レベルを調整できます。",
        },
      ],
    },
    {
      category: "技術・スキル",
      questions: [
        {
          question: "プログラミング経験がなくても参加できますか？",
          answer:
            "はい、プログラミング経験がなくても大丈夫です。基礎から学べる研修プログラムを用意しており、経験豊富なメンバーがサポートします。技術以外の分野でも活躍の場があります。",
        },
        {
          question: "どのような技術を学べますか？",
          answer:
            "Web開発（React、Next.js、Node.js）、モバイルアプリ開発、データサイエンス、AI/ML、デザイン、プロジェクトマネジメントなど、幅広い技術分野をカバーしています。",
        },
        {
          question: "資格取得のサポートはありますか？",
          answer:
            "技術系資格の取得をサポートする勉強会や、資格取得費用の一部補助制度があります。また、実務経験を積むことで自然とスキルアップできる環境を提供しています。",
        },
      ],
    },
    {
      category: "プロジェクト・活動",
      questions: [
        {
          question: "どのようなプロジェクトに参加できますか？",
          answer:
            "Webアプリケーション開発、イベント企画・運営、ハッカソン開催、起業支援プログラム、地域連携プロジェクトなど、多様なプロジェクトがあります。興味に応じて選択できます。",
        },
        {
          question: "自分でプロジェクトを提案できますか？",
          answer:
            "もちろんです！新しいアイデアやプロジェクトの提案を積極的に歓迎しています。提案されたプロジェクトは運営チームで検討し、実現可能性が高いものは正式なプロジェクトとして採用されます。",
        },
        {
          question: "企業との連携はありますか？",
          answer:
            "多数の企業とパートナーシップを結んでおり、インターンシップの機会提供、技術指導、プロジェクトへの協賛などの形で連携しています。実際のビジネス現場を体験できる機会も豊富です。",
        },
      ],
    },
  ]

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#4d4d4d] to-[#212744] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">よくある質問</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty">
              PulluPについてよく寄せられる質問とその回答をまとめました
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-accent">{category.category}</h2>

              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const itemIndex = categoryIndex * 100 + questionIndex
                  const isOpen = openItems.includes(itemIndex)

                  return (
                    <Card key={questionIndex}>
                      <Collapsible>
                        <CollapsibleTrigger className="w-full" onClick={() => toggleItem(itemIndex)}>
                          <CardHeader className="hover:bg-muted/50 transition-colors">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-left text-lg text-balance">{faq.question}</CardTitle>
                              {isOpen ? (
                                <ChevronUp className="h-5 w-5 text-muted-foreground" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground text-pretty">{faq.answer}</p>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">他にご質問がありますか？</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            こちらに掲載されていない質問がございましたら、お気軽にお問い合わせください。
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            お問い合わせする
          </a>
        </div>
      </section>
    </main>
  )
}
