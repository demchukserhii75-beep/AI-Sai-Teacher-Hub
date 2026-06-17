import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import TiltCard from '../visual/TiltCard';

const testimonials = [
  {
    photo: '/people/t1.jpg',
    name: 'Mariana Lopes',
    role: 'Professora de Biologia · Ensino Médio',
    quote:
      'Reduzi pela metade o tempo que gastava planejando. A IA faz as perguntas certas e eu mantenho o controle de cada decisão pedagógica.',
  },
  {
    photo: '/people/t2.jpg',
    name: 'Carlos Mendes',
    role: 'Coordenador Pedagógico',
    quote:
      'Meus alunos chegam preparados para a aula presencial. Os materiais que gero aqui mudaram o engajamento da turma por completo.',
  },
  {
    photo: '/people/t3.jpg',
    name: 'Juliana Ferreira',
    role: 'Professora de História',
    quote:
      'Finalmente consigo refletir sobre cada aula com clareza. As sugestões são práticas, específicas e fáceis de aplicar no dia seguinte.',
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.div
          variants={reveal}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-brand-600">
            Quem usa, recomenda
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Professores que já inverteram a sala
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={reveal}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="h-full" max={8}>
                <div className="glass flex h-full flex-col rounded-3xl p-7 shadow-glass">
                  <Quote className="mb-4 h-8 w-8 text-brand-400" style={{ transform: 'translateZ(30px)' }} />
                  <p className="flex-1 text-[15px] leading-relaxed text-ink/75">"{t.quote}"</p>

                  <div className="mt-5 flex gap-0.5" style={{ transform: 'translateZ(20px)' }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="rounded-full bg-brand-gradient p-[2px]" style={{ transform: 'translateZ(40px)' }}>
                      <img
                        src={t.photo}
                        alt={t.name}
                        loading="lazy"
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-white"
                      />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{t.name}</p>
                      <p className="text-xs text-ink/55">{t.role}</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
