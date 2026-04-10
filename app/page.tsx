'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sectionFade = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

const storytellingSections = [
  { id: 'beginning', label: 'Beginning' },
  { id: 'investment', label: 'Attachment' },
  { id: 'cracks', label: 'First Cracks' },
  { id: 'abuse', label: 'Abuse' },
  { id: 'boundary', label: 'Boundary Violation' },
  { id: 'manipulation', label: 'Manipulation' },
  { id: 'betrayal', label: 'Betrayal' },
  { id: 'rebirth', label: 'Rebirth' },
];

const manipulationCards = [
  {
    label: 'Gaslighting',
    quote: 'maine kuch nahi kiya',
    reality: 'He erased her reality and made her doubt her own heart.',
  },
  {
    label: 'Blame Shifting',
    quote: 'tumhari wajah se hua',
    reality: 'He pushed the hurt back onto her, refusing to own what he did.',
  },
  {
    label: 'Emotional Manipulation',
    quote: 'I love you... but you make me angry',
    reality: 'Love was twisted into a tool for control instead of comfort.',
  },
  {
    label: 'Control',
    quote: 'You owe me your support',
    reality: 'Guilt became the quiet chain that bound her choices.',
  },
];

const truthPairs = [
  { lie: 'It was your fault', truth: 'No — the pain was created by his refusal to respect her.', },
  { lie: 'Cheating is a choice', truth: 'Yes, he chose betrayal over loyalty.', },
  { lie: 'You are not enough', truth: 'She was enough. Her love was real, and she deserved honor.', },
  { lie: 'You caused this', truth: 'This was a pattern of control, not a reflection of her worth.', },
];

export default function Page() {
  const [revealed, setRevealed] = useState<boolean[]>(Array(truthPairs.length).fill(false));
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(storytellingSections[0].id);

  useEffect(() => {
    const updateScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const maxScroll = doc.scrollHeight - doc.clientHeight;
      setScrollProgress(maxScroll > 0 ? Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100)) : 0);

      const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
      let current = storytellingSections[0].id;
      for (const section of sections) {
        if (section.offsetTop - window.innerHeight * 0.3 <= scrollTop) {
          current = section.dataset.section || current;
        }
      }
      setActiveSection(current);
    };

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <main className="min-h-screen pt-6 bg-dusk text-sand selection:bg-goldsoft selection:text-midnight">
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-white/10 backdrop-blur-sm">
        <motion.div
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-goldsoft to-[#f3c987]/90"
        />
      </div>
      <div className="fixed left-6 top-1/3 hidden w-48 space-y-3 lg:block">
        <div className="rounded-3xl border border-white/10 bg-[#0f0815]/95 p-4 text-sm text-sand/70 shadow-glow">
          <p className="text-[11px] uppercase tracking-[0.38em] text-goldsoft/70">Story progress</p>
          <p className="mt-2 text-base font-medium text-white">{storytellingSections.find((section) => section.id === activeSection)?.label}</p>
        </div>
        <div className="space-y-2">
          {storytellingSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block rounded-full px-3 py-2 text-xs transition duration-200 ${
                activeSection === section.id ? 'bg-goldsoft/20 text-goldsoft' : 'text-sand/60 hover:text-sand/90 hover:bg-white/5'
              }`}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
        <motion.section
          id="beginning"
          data-section="beginning"
          initial={false}
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(243,199,135,0.18),_transparent_40%),linear-gradient(180deg,_#07070d_0%,_#190817_40%,_#2b1a37_100%)] p-10 shadow-glow"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(243,201,135,0.15),_transparent_25%),radial-gradient(circle_at_80%_10%,_rgba(255,115,115,0.12),_transparent_20%)]" />
          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.36em] text-goldsoft/80">The Beginning of Belief</p>
              <h1
                className="text-4xl font-semibold leading-tight text-white sm:text-5xl"
              >
                “I believed he was my forever… I gave him my trust, my love, my future.”
              </h1>
              <p
                className="max-w-xl text-base text-sand/90 sm:text-lg"
              >
                Her heart shone bright at the beginning. Over time that glow softened, revealing hidden cracks, sharp silence, and the courage to choose herself again.
              </p>
            </div>

            <div className="relative mx-auto flex h-96 w-full items-end justify-center overflow-hidden rounded-[32px] bg-gradient-to-br from-[#140711] via-[#2f112f] to-[#3a142e] p-6 shadow-xl shadow-black/40 sm:h-[24rem]">
              <div className="absolute inset-x-0 top-12 h-36 bg-[radial-gradient(circle,_rgba(243,199,135,0.18),_transparent_45%)] blur-3xl" />
              <div className="relative flex h-full w-full flex-col items-center justify-end gap-6">
                <motion.div
                  animate={{ scale: [1, 1.03, 1], opacity: [1, 0.8, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
                  className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-[#f3c987] via-[#f6e1b3] to-[#c7914d] shadow-[0_0_80px_rgba(243,199,135,0.25)]"
                >
                  <span className="text-7xl">💖</span>
                </motion.div>
                <div className="space-y-4 text-center text-sand/90">
                  <p className="text-sm uppercase tracking-[0.28em] text-goldsoft/80">Glow of trust</p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
                    className="text-base leading-7"
                  >
                    She stands with a glowing heart. The shadow beside her looks harmless, but it carries the hidden pain she learns to see.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="mt-16 space-y-14">
          <motion.article
            id="investment"
            data-section="investment"
            className="grid gap-8 rounded-[32px] border border-white/10 bg-[#0f0915]/90 p-10 shadow-glow"
          >
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-[0.4em] text-goldsoft/80">Attachment & Investment</span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">8 Years of Belief, Support, and Hope</h2>
              <p className="max-w-3xl text-sand/80 leading-8">
                Eight years of her heart, time, and resources poured into him. Every small kindness became a promise she hoped would hold, even as his problems came back again.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                'Financial support when he had nothing',
                'Staying even through repeated cycles',
                'Holding faith in one life partner',
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-sand/90 shadow-sm">
                  <p className="text-base leading-7">{item}</p>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            id="cracks"
            data-section="cracks"
            className="grid gap-8 rounded-[32px] border border-white/10 bg-[#120b17]/90 p-10 shadow-glow"
          >
            <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <span className="text-xs uppercase tracking-[0.4em] text-goldsoft/80">First Cracks</span>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Mixed Signals, Growing Confusion</h2>
              </div>
              <p className="text-sand/80 leading-8">
                Kabhi care, kabhi disrespect. gentle promises were followed by sharp silence, and the steady faith she had in him began to shatter into a thousand uncertain pieces.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#1b1424]/80 p-8 shadow-inner shadow-black/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent_35%)]" />
              <div className="relative grid gap-4">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-goldsoft/80">
                  <span className="inline-flex h-3 w-3 rounded-full bg-goldsoft/80" />
                  Face splitting into two sides
                </div>
                <p className="text-sand/85 leading-7">
                  A single person wearing two expressions: a gentle promise and a sharp withdrawal. Her sense of safety began to crack in the deepest way.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            id="abuse"
            data-section="abuse"
            className="grid gap-8 rounded-[32px] border border-white/10 bg-[#160c18]/90 p-10 shadow-glow"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-goldsoft/80">Abuse & Disrespect</span>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Words as Floating Knives</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                'Verbal abuse and character shaming that pierced her confidence',
                'Body shaming and degrading language that made her shrink inside',
                'Public humiliation that left her feeling exposed and unseen',
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-[#251a2a]/90 p-6 text-sand/90 shadow-sm">
                  <p className="text-base leading-7">{item}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[28px] border border-white/10 bg-[#1f1520]/80 p-6 text-sand/85">
              <p className="text-lg font-medium text-goldsoft">He called her pain “natak.”</p>
              <p className="mt-3 leading-7">
                The insult was not only in the words, but also in the way it erased her reality and made her doubt the voice inside herself.
              </p>
            </div>
          </motion.article>

          <motion.article
            id="boundary"
            data-section="boundary"
            className="grid gap-8 rounded-[32px] border border-white/10 bg-[#190c1a]/90 p-10 shadow-glow"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-goldsoft/80">Boundary Violation</span>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Physical Harm and Broken Trust</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-[30px] bg-[#2a1726]/90 p-8 text-sand/85 shadow-sm">
                <p className="text-base leading-7">
                  The first physical blow, the burn that left a faint symbolic scar. It shows how safety and trust were broken, even when the wound is only seen through memory.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-[#341a30]/90 shadow-[0_0_80px_rgba(211,147,109,0.12)]">
                  <div className="absolute inset-x-10 top-12 h-24 rounded-full bg-gradient-to-b from-[#f3c987]/30 to-transparent blur-2xl" />
                  <span className="text-[4rem]">✨</span>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article
            id="manipulation"
            data-section="manipulation"
            className="grid gap-10 rounded-[32px] border border-white/10 bg-[#1f0e1e]/90 p-10 shadow-glow"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-goldsoft/80">Manipulation & Control</span>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Interactive Reality Check</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {manipulationCards.map((card) => (
                <motion.div
                  key={card.label}
                  whileHover={{ y: -6 }}
                  className="group rounded-[28px] border border-white/10 bg-[#24132a]/90 p-6 transition shadow-sm shadow-black/20"
                >
                  <div className="text-xs uppercase tracking-[0.3em] text-goldsoft/80">{card.label}</div>
                  <p className="mt-5 text-lg font-semibold text-white">“{card.quote}”</p>
                  <div className="mt-6 rounded-3xl bg-[#150912]/90 p-5 text-sand/80 transition duration-300 group-hover:bg-[#271829]/95">
                    <p>{card.reality}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.article>

          <motion.article
            className="grid gap-8 rounded-[32px] border border-white/10 bg-[#1b0c17]/90 p-10 shadow-glow"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-goldsoft/80">Sexual & Emotional Exploitation</span>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Broken Promises Dissolving</h2>
            </div>
            <p className="max-w-3xl text-sand/80 leading-8">
              He spoke of marriage before he spoke with respect. Intimacy became a demand, and the promise she believed in crumbled into dust when her dignity was ignored.
            </p>
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#231426]/80 p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent_35%)]" />
              <p className="relative text-sand/85 leading-8">
                Promise rings split apart. A heart that once trusted discovered the pain of broken vows and the strength of reclaiming her own boundaries.
              </p>
            </div>
          </motion.article>

          <motion.article
            id="betrayal"
            data-section="betrayal"
            className="grid gap-8 rounded-[32px] border border-white/10 bg-[#180912]/90 p-10 shadow-glow"
          >
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.4em] text-goldsoft/80">Betrayal & Disloyalty</span>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">When the Shadow Splits</h2>
              </div>
              <p className="text-sand/80 leading-8">
                The shadow figure fractured into multiple silhouettes. His denials hid the truth: interest in others, secret threats, and the quiet collapse of loyalty.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {['Stalking other girls', 'Denial after being caught', 'Threats of going elsewhere'].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-[#291927]/95 p-5 text-sand/85">
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            className="grid gap-8 rounded-[32px] border border-white/10 bg-[#140813]/90 p-10 shadow-glow"
          >
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.4em] text-goldsoft/80">Financial & Family Disrespect</span>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Coins into Dust, Family into Shadow</h2>
              </div>
              <p className="text-sand/80 leading-8">
                Her money was taken, her help was used, and her family was treated like a burden. Love became an excuse for disrespect, not a reason to protect her world.
              </p>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-[#241026]/95 p-8 text-sand/85">
              <p className="font-medium text-goldsoft">Scooty, savings, family trust — all treated like expendable dust.</p>
            </div>
          </motion.article>

          <motion.article
            className="grid gap-8 rounded-[32px] border border-white/10 bg-[#170b14]/90 p-10 shadow-glow"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-goldsoft/80">Public Humiliation</span>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Alone in a Crowd</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] items-center">
              <div className="rounded-[32px] border border-white/10 bg-[#291426]/95 p-8 text-sand/85">
                <p className="leading-8">
                  Waiting in a busy mall while he turned away. She felt erased in a crowd, every silence and every look becoming another public wound.
                </p>
              </div>
              <div className="grid gap-3">
                <div className="h-28 rounded-3xl bg-[#2f162a]/95 p-5 text-sand/80">Waiting alone</div>
                <div className="h-28 rounded-3xl bg-[#2b1524]/95 p-5 text-sand/80">Verbal dismissal in public</div>
              </div>
            </div>
          </motion.article>

          <motion.article
            className="grid gap-8 rounded-[32px] border border-white/10 bg-[#140713]/90 p-10 shadow-glow"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-goldsoft/80">Panic & Trauma</span>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Heartbeat in a Blurry World</h2>
            </div>
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#261426]/95 p-8 shadow-inner shadow-black/40">
              <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.05),_transparent_30%)] blur-0" />
              <div className="relative grid gap-6 sm:grid-cols-[0.9fr_1.1fr]">
                <p className="text-sand/85 leading-8">
                  Her world blurred and tightened. Panic took her breath, tears flowed, and no one stepped forward with the calm she needed.
                </p>
                <div className="flex items-center justify-center rounded-3xl bg-[#321732]/90 p-6 text-center text-goldsoft">
                  <span className="text-3xl">💓</span>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article
            className="grid gap-8 rounded-[32px] border border-white/10 bg-[#1d0b16]/90 p-10 shadow-glow"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-goldsoft/80">Manipulation Loop</span>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Love → Abuse → Denial → Repeat</h2>
            </div>
            <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full bg-[#291626]/95 p-6 text-center shadow-xl shadow-black/40">
              <div className="grid gap-3 text-sand/85">
                {['Love', 'Abuse', 'Denial', 'Blame', 'False care'].map((step) => (
                  <motion.div
                    key={step}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="rounded-2xl border border-white/10 bg-[#190a14]/90 px-4 py-3 text-sm uppercase tracking-[0.18em] text-goldsoft/80"
                  >
                    {step}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            className="grid gap-10 rounded-[32px] border border-white/10 bg-[#200a19]/90 p-10 shadow-glow"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-goldsoft/80">Truth vs Lies</span>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Click to Reveal the Real Story</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {truthPairs.map((pair, index) => (
                <button
                  key={pair.lie}
                  type="button"
                  onClick={() => {
                    setRevealed((current) => current.map((value, i) => (i === index ? !value : value)));
                  }}
                  className="group rounded-[30px] border border-white/10 bg-[#281528]/95 p-6 text-left transition hover:border-goldsoft/40 hover:bg-[#321a2f]/95"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-goldsoft/80">Lie</p>
                    <span className="text-xs text-sand/70">Tap to reveal</span>
                  </div>
                  <p className="mt-4 text-lg font-semibold text-white">“{pair.lie}”</p>
                  {revealed[index] && (
                    <p className="mt-4 rounded-3xl bg-[#150c14]/95 px-4 py-3 text-sand/85">
                      {pair.truth}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </motion.article>

          <motion.article
            className="grid gap-8 rounded-[32px] border border-white/10 bg-[#1a0813]/90 p-10 shadow-glow"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-goldsoft/80">Self-Worth Realization</span>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">The Mirror That Finally Broke</h2>
            </div>
            <p className="max-w-3xl text-sand/80 leading-8">
              The broken mirror slowly reassembled, returning a truth she had forgotten: she was never the problem, and the blame she carried was not hers to keep.
            </p>
          </motion.article>

          <motion.article
            className="grid gap-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#120611] via-[#2a1128] to-[#3b162a]/90 p-10 shadow-glow"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-goldsoft/80">Final Break</span>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Walking Away, Choosing Peace</h2>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-[#1b0913]/95 p-8 text-sand/85 shadow-inner shadow-black/30">
              <p className="leading-8">
                She turned away from the shadow that bound her. The figure dissolved, and the space she found became the first calm breath of true peace.
              </p>
            </div>
          </motion.article>

          <motion.article
            id="rebirth"
            data-section="rebirth"
            className="grid gap-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1a0c13] via-[#31203f] to-[#4b3225]/90 p-10 shadow-glow"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-goldsoft/80">Strength & Rebirth</span>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Light That Arrived After Dark</h2>
            </div>
            <div className="grid gap-6 rounded-[32px] border border-white/10 bg-[#2c162c]/95 p-8 sm:grid-cols-[0.9fr_1.1fr]">
              <p className="text-sand/85 leading-8">
                Warm light rose around her quiet strength. The same journey that broke her also revealed the power she had been carrying all along.
              </p>
              <div className="rounded-[28px] bg-[#382232]/95 p-6 text-center text-goldsoft">
                <p className="text-lg font-semibold">“What broke me… also revealed my strength.”</p>
              </div>
            </div>
          </motion.article>
        </section>

        <footer className="mt-24 rounded-[32px] border border-white/10 bg-[#0e0810]/95 p-8 text-center text-sand/70 shadow-glow">
          <p className="text-sm">A symbolic journey from pain toward clarity, created with care and respect.</p>
        </footer>
      </div>
    </main>
  );
}
