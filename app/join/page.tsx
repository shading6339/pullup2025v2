// import { Navigation } from "@/components/navigation";

export default function JoinPage() {
  return (
    <main>
      {/* <Navigation /> */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#4d4d4d] to-[#212744] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              入会について
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty">
              PulluPへの入会方法や条件についてご紹介します
            </p>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-muted-foreground">準備中</h1>
          <p className="text-lg text-muted-foreground">
            このページは現在準備中です
          </p>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
        </div>
      </div>
    </main>
  );
}
