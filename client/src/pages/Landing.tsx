import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Brain, BarChart3, ArrowRight, Wand2, CheckCircle2, Star } from 'lucide-react';
import AuroraBackground from '../components/visual/AuroraBackground';
import BrandMark from '../components/visual/BrandMark';
import Hero3D from '../components/visual/Hero3D';
import TiltCard from '../components/visual/TiltCard';
import Testimonials from '../components/landing/Testimonials';

const proofAvatars = ['/people/a1.jpg', '/people/a2.jpg', '/people/a3.jpg', '/people/a4.jpg', '/people/a5.jpg'];

const features = [
  {
    icon: Sparkles,
    title: 'Planos com IA Conversacional',
    desc: 'A IA faz perguntas, entende seu contexto e gera planos de aula estruturados para pré-aula, aula presencial e avaliação.',
    grad: 'from-brand-500 to-accent-violet',
  },
  {
    icon: Brain,
    title: 'Materiais Editáveis',
    desc: 'Quizzes, resumos, roteiros de vídeo e atividades colaborativas — todos editáveis e adaptáveis ao seu contexto.',
    grad: 'from-accent-cyan to-brand-500',
  },
  {
    icon: BarChart3,
    title: 'Reflexão e Crescimento',
    desc: 'Registre percepções, dificuldades e melhorias. A IA sugere ajustes baseados em padrões comprovados.',
    grad: 'from-accent-pink to-accent-violet',
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground />

      {/* Floating glass header */}
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 sm:px-4">
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 16, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          className="glass flex w-full max-w-5xl items-center justify-between rounded-full px-3 py-2 shadow-glass"
        >
          <button onClick={() => navigate('/')} className="px-1.5" aria-label="Início">
            <BrandMark />
          </button>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => navigate('/login')}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-white/60 hover:text-ink"
            >
              Entrar
            </button>
            <motion.button
              onClick={() => navigate('/register')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-glow-sm"
            >
              Cadastrar
            </motion.button>
          </div>
        </motion.div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-6 pb-12 pt-32 lg:grid-cols-2 lg:pt-40">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
          className="text-center lg:text-left"
        >
          <motion.span
            variants={reveal}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-brand-700 shadow-glass"
          >
            <Wand2 className="h-4 w-4" />
            Assistente pedagógico com IA
          </motion.span>

          <motion.h1
            variants={reveal}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Transforme suas aulas com a{' '}
            <span className="text-gradient">Sala de Aula Invertida</span>
          </motion.h1>

          <motion.p
            variants={reveal}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-xl text-lg text-ink/60 lg:mx-0"
          >
            Planeje, execute e avalie aulas no modelo invertido com um copiloto
            inteligente. A IA guia — você decide.
          </motion.p>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <motion.button
              onClick={() => navigate('/register')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-7 py-3.5 text-base font-semibold text-white shadow-glow"
            >
              Começar Agora
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
            <button
              onClick={() => navigate('/login')}
              className="glass inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-ink/80 shadow-glass transition-colors hover:text-ink"
            >
              Já tenho conta
            </button>
          </motion.div>

          <motion.ul
            variants={reveal}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink/55 lg:justify-start"
          >
            {['Planos em minutos', 'Materiais prontos', 'Reflexão guiada'].map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-brand-500" />
                {t}
              </li>
            ))}
          </motion.ul>

          {/* Social proof — real faces */}
          <motion.div
            variants={reveal}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
          >
            <div className="flex -space-x-3">
              {proofAvatars.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Professor ${i + 1}`}
                  loading="lazy"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 text-sm font-semibold text-ink">4,9</span>
              </div>
              <p className="text-xs text-ink/55">+2.000 professores já planejam com a AI-SAI</p>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-lg"
        >
          <div className="absolute inset-6 rounded-full bg-brand-gradient opacity-20 blur-3xl" />
          <Hero3D />
        </motion.div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={reveal}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="h-full">
                <div className="glass h-full rounded-3xl p-7 shadow-glass">
                  <div
                    className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${f.grad} shadow-glow-sm`}
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    <f.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-bold text-ink">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/60">{f.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials — real educators */}
      <Testimonials />

      {/* CTA strip */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 text-center shadow-glass-lg"
        >
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl animate-aurora" />
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-accent-violet/40 blur-3xl animate-aurora [animation-delay:-8s]" />
          <div className="relative">
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              Pronto para inverter sua sala de aula?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              Crie seu primeiro plano de aula com IA em poucos minutos. É grátis para começar.
            </p>
            <motion.button
              onClick={() => navigate('/register')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-ink shadow-glow"
            >
              Começar gratuitamente
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </section>

      <footer className="relative py-8 text-center text-sm text-ink/40">
        AI-SAI Teacher Hub · Plataforma para Sala de Aula Invertida
      </footer>
    </div>
  );
}
