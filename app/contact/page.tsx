"use client";

import type React from "react";
import { useState } from "react";
// import { Navigation } from "@/components/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  // --- State (legacy-spec compatible) ---
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState<string>("意見・要望");
  const [comment, setComment] = useState("");

  const [nameInvalid, setNameInvalid] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [commentInvalid, setCommentInvalid] = useState(false);
  const [commentError, setCommentError] = useState("");

  const [submitted, setSubmitted] = useState(false);

  // --- Validators ---
  const validateName = () => {
    if (name.trim().length === 0) {
      setNameInvalid(true);
      setNameError("名前を入力してください。");
    } else {
      setNameInvalid(false);
      setNameError("");
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailInvalid(true);
      setEmailError("正しいメールアドレスを入力してください。");
    } else {
      setEmailInvalid(false);
      setEmailError("");
    }
  };

  const validateComment = () => {
    if (comment.trim().length === 0 || comment.length > 500) {
      setCommentInvalid(true);
      setCommentError("コメントは500文字以内で入力してください。");
    } else {
      setCommentInvalid(false);
      setCommentError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Run validations first
    validateName();
    validateEmail();
    validateComment();

    if (
      name.trim().length === 0 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      comment.trim().length === 0 ||
      comment.length > 500
    ) {
      return;
    }

    const data = {
      name,
      mail_address: email,
      content: `${purpose}：${comment}`,
    };

    try {
      const res = await fetch("https://hub-api.pullup.run/discord/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        alert("送信しました！");
      } else {
        alert("送信に失敗しました。");
      }
    } catch (err) {
      console.error(err);
      alert("通信エラーが発生しました。");
    }
  };

  // Success view
  if (submitted) {
    return (
      <main>
        {/* <Navigation /> */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-[#4d4d4d] to-[#212744] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              お問い合わせ
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              送信が完了しました。ご連絡ありがとうございました。
            </p>
          </div>
        </section>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="text-2xl font-bold">送信が完了しました</div>
              <Button size="lg" onClick={() => (window.location.href = "/")}>
                ホームに戻る
              </Button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#4d4d4d] to-[#212744] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              お問い合わせ
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty">
              ご質問やご相談がございましたら、お気軽にお問い合わせください
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form (legacy spec) */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">メッセージを送る</CardTitle>
                <CardDescription>
                  以下のフォームからお気軽にお問い合わせください
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">お名前</Label>
                    <Input
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={validateName}
                      aria-invalid={nameInvalid}
                      required
                    />
                    {nameInvalid && (
                      <p className="text-sm text-red-600">{nameError}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={validateEmail}
                      aria-invalid={emailInvalid}
                      required
                    />
                    {emailInvalid && (
                      <p className="text-sm text-red-600">{emailError}</p>
                    )}
                  </div>

                  {/* Purpose */}
                  <div className="space-y-2">
                    <Label htmlFor="purpose">用件</Label>
                    <Select value={purpose} onValueChange={setPurpose}>
                      <SelectTrigger id="purpose">
                        <SelectValue placeholder="選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="意見・要望">意見・要望</SelectItem>
                        <SelectItem value="依頼">依頼</SelectItem>
                        <SelectItem value="その他">その他</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Comment */}
                  <div className="space-y-2">
                    <Label htmlFor="message">メッセージ</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      onBlur={validateComment}
                      aria-invalid={commentInvalid}
                      maxLength={600}
                      required
                    />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">最大500文字</span>
                      <span
                        className={
                          comment.length > 500
                            ? "text-red-600"
                            : "text-muted-foreground"
                        }
                      >
                        {comment.length}/500
                      </span>
                    </div>
                    {commentInvalid && (
                      <p className="text-sm text-red-600">{commentError}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" /> 送信する
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">連絡先情報</CardTitle>
                  <CardDescription>
                    以下の方法でもお問い合わせいただけます
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Link
                      className="bg-accent/10 p-3 rounded-lg hover:bg-accent/20 transition"
                      href="mailto:contact@pullup.run"
                    >
                      <Mail className="h-6 w-6 text-accent" />
                    </Link>
                    <div>
                      <div className="font-semibold">メール</div>
                      <Link
                        className="text-muted-foreground hover:underline"
                        href="mailto:contact@pullup.run"
                      >
                        contact@pullup.run
                      </Link>
                    </div>
                  </div>
                  {/* 
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">電話</div>
                      <div className="text-muted-foreground">03-1234-5678</div>
                    </div>
                  </div> */}

                  <div className="flex items-center gap-4">
                    <Link
                      className="bg-accent/10 p-3 rounded-lg hover:bg-accent/20 transition"
                      href="https://maps.app.goo.gl/yy9WsYXdn59H3SCU9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="h-6 w-6 text-accent" />
                    </Link>
                    <div>
                      <div className="font-semibold">住所</div>
                      <Link
                        className="text-muted-foreground hover:underline "
                        href="https://maps.app.goo.gl/yy9WsYXdn59H3SCU9"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        〒530-0013 大阪府大阪市北区茶屋町1-45 OIT梅田タワー 16階
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>オフィス時間</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>月曜日 - 金曜日</span>
                      <span className="text-muted-foreground">
                        11:00 - 17:00
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>土曜日</span>
                      <span className="text-muted-foreground">
                        12:00 - 16:00
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>日曜日・祝日</span>
                      <span className="text-muted-foreground">休業</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
