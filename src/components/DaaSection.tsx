import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const DAA_TOPICS = [
  { icon: '⬡', label: 'Sorting & Searching' },
  { icon: '↗', label: 'Graph Algorithms' },
  { icon: '◈', label: 'Dynamic Programming' },
  { icon: '⊕', label: 'Tree Structures' },
  { icon: '∑', label: 'Complexity Analysis' },
  { icon: '⌬', label: 'Greedy Algorithms' },
];

const DaaSection = () => {
  return (
    <section
      id="daa"
      className="relative w-full bg-[#0C0C0C] px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-6 sm:mb-8"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Daa
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="text-center font-light uppercase tracking-widest text-[#D7E2EA]/50 mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1rem)' }}
        >
          Design &amp; Analysis of Algorithms · Projects coming soon
        </p>
      </FadeIn>

      {/* Coming soon card */}
      <div className="mx-auto max-w-5xl">
        <FadeIn delay={0.2} y={40}>
          <div className="relative rounded-[40px] sm:rounded-[50px] border-2 border-dashed border-[#D7E2EA]/20 bg-[#0F1114] p-8 sm:p-12 md:p-16 flex flex-col items-center gap-10 overflow-hidden">

            {/* Subtle animated background pulse */}
            <motion.div
              className="absolute inset-0 rounded-[38px] sm:rounded-[48px]"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, rgba(215,226,234,0.03) 0%, transparent 70%)',
              }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Topic pills */}
            <div className="relative z-10 flex flex-wrap justify-center gap-3 sm:gap-4">
              {DAA_TOPICS.map((topic, i) => (
                <motion.div
                  key={topic.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="flex items-center gap-2 rounded-full border border-[#D7E2EA]/15 bg-[#141418] px-4 py-2"
                >
                  <span className="text-[#D7E2EA]/60 text-sm">{topic.icon}</span>
                  <span
                    className="font-light uppercase tracking-widest text-[#D7E2EA]/50"
                    style={{ fontSize: 'clamp(0.65rem, 1vw, 0.85rem)' }}
                  >
                    {topic.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Main message */}
            <div className="relative z-10 flex flex-col items-center gap-4 text-center">
              <div
                className="font-black uppercase text-[#D7E2EA] leading-tight"
                style={{ fontSize: 'clamp(1.6rem, 5vw, 4rem)' }}
              >
                Projects Loading
              </div>
              <p
                className="font-light text-[#D7E2EA]/40 max-w-lg leading-relaxed"
                style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)' }}
              >
                Algorithm visualisations, complexity breakdowns, and data-structure
                deep-dives are on their way. Check back soon.
              </p>
            </div>

            {/* Animated dots */}
            <div className="relative z-10 flex items-center gap-2">
              {[0, 0.3, 0.6].map((delay, i) => (
                <motion.span
                  key={i}
                  className="block h-2 w-2 rounded-full bg-[#D7E2EA]/30"
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay, ease: 'easeInOut' }}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default DaaSection;
