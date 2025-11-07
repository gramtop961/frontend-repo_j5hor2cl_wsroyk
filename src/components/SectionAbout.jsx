import { motion } from "framer-motion";

export default function SectionAbout() {
  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl md:text-4xl text-deepBlue"
        >
          About the Organisation
        </motion.h2>

        <p className="mt-4 text-deepBlue/80 leading-relaxed">
          Sanskrutik Kaladarpan is a cultural platform dedicated to nurturing and showcasing the timeless soul of Indian art. With a traditional heart and a modern mind, we create spaces where classical forms meet contemporary expression—graceful, poetic, rooted, yet forward-moving.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl overflow-hidden ring-1 ring-gold/30 bg-ivory shadow-sm"
            >
              <img
                src={`https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop`}
                alt="Award Winner"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-deepBlue">Award Winner</h3>
                <p className="text-sm text-deepBlue/70">
                  Celebrating excellence across cinema, theatre, music and dance.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="#register"
            className="inline-flex px-5 py-3 rounded-full bg-gradient-to-r from-maroon to-deepBlue text-white font-semibold shadow hover:shadow-lg"
          >
            Join / Register
          </a>
        </div>
      </div>
    </section>
  );
}
