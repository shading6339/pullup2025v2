import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4d4d4d] to-[#212744] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="font-cherry text-5xl md:text-7xl lg:text-8xl mb-6 text-balance">
          PulluP
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto text-pretty">
          学生の可能性を引き上げる、革新的なサークル活動を展開しています
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/about"
            className="bg-white text-primary hover:bg-white/90 font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition text-sm leading-none"
          >
            活動を見る
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/contact"
            className="border-2 border-white text-white hover:bg-white/10 hover:text-white bg-transparent rounded-md px-6 py-3 font-semibold flex items-center gap-2 transition text-sm leading-none"
          >
            お問い合わせ
            {/* アイコンを付けて完全に揃えたいなら ↓ を有効化 */}
            {/* <ArrowRight className="h-4 w-4" /> */}
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
    </section>
  );
}
