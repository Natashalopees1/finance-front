"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, BarChart3, PiggyBank, TrendingUp, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">FinanceAI</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="h-9">
            Login
          </Button>
          <Button className="h-9">Get Started</Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden container py-4 pb-6 border-b">
          <nav className="flex flex-col gap-4">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" className="w-full">
                Login
              </Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

function HeroBanner() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Organize suas finanças com IA
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Seu assistente financeiro inteligente que organiza suas finanças automaticamente, ajudando você a
                economizar tempo e dinheiro.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-1.5">
                Começar agora
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Saiba mais
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Dashboard do FinanceAI"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutUs() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre o FinanceAI</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Somos um assistente financeiro inteligente que utiliza IA para organizar suas finanças de forma automática
              e eficiente.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Análise Inteligente</h3>
              <p className="text-muted-foreground">
                Nossa IA analisa seus gastos e identifica padrões para ajudar você a economizar.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Relatórios Detalhados</h3>
              <p className="text-muted-foreground">
                Visualize suas finanças com gráficos e relatórios personalizados e fáceis de entender.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <PiggyBank className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Metas de Economia</h3>
              <p className="text-muted-foreground">
                Defina metas de economia e deixe que nossa IA o ajude a alcançá-las de forma eficiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose md:text-left">
            &copy; {new Date().getFullYear()} FinanceAI. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Termos
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Privacidade
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  )
}

