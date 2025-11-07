import { motion } from "framer-motion";

const items = [
  {
    title: "Awards",
    img: "https://images.unsplash.com/photo-1513351105276-0a5f2a5439c7?q=80&w=1200&auto=format&fit=crop",
    desc: "Honouring luminaries who elevate the arts.",
  },
  {
    title: "School Competitions",
    img: "https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?q=80&w=1200&auto=format&fit=crop",
    desc: "Igniting young minds with creative contests.",
  },
  {
    title: "Short Film Submissions",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    desc: "A platform for emerging storytellers.",
  },
  {
    title: "Academy Activities",
    img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1200&auto=format&fit=crop",
    desc: "Workshops, masterclasses, and cultural outreach.",
  },
  {
    title: "Natya (Drama) Festival",
    img: "https://images.unsplash.com/photo-1559806794-27b609f88b09?q=80&w=1200&auto=format&fit=crop",
    desc: "Stages that glow with classic and contemporary theatre.",
  },
  {
    title: "Movie Festival",
    img: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=1200&auto=format&fit=crop",
    desc: "A curated celebration of cinema.",
  },
  {
    title: "E-Paper",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",
    desc: "Highlights and stories (via Facebook).",
  },
];

export default function SectionWork() {
  return (
    <section id="work" className="relative py-20 bg-gradient-to-br from-ivory to-gold/10">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-deepBlue">Our Work</h2>
        <p className="mt-2 text-deepBlue/80">A tapestry of initiatives weaving community, craft and culture.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-2xl overflow-hidden bg-white ring-1 ring-gold/40 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
                <div className="absolute bottom-2 left-3 text-ivory font-semibold drop-shadow">
                  {it.title}
                </div>
              </div>
              <div className="p-4">
                <p className="text-deepBlue/80 text-sm">{it.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
