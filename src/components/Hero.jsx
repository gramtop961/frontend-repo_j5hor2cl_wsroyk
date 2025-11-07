import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-saffron/20 via-ivory to-deepBlue/10 pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-6xl text-deepBlue leading-tight"
          >
            Sanskrutik Kaladarpan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-deepBlue/80"
          >
            A Reflection of Culture, Art, and Tradition
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="px-5 py-3 rounded-full bg-gradient-to-r from-saffron to-gold text-neutral-900 font-semibold shadow hover:shadow-lg transition-shadow"
            >
              Explore Work
            </a>
            <a
              href="#register"
              className="px-5 py-3 rounded-full border border-gold/40 text-deepBlue hover:bg-gold/10"
            >
              Register Now
            </a>
          </div>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-gold/30">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="https://cdn.coverr.co/videos/coverr-indian-traditional-dance-6271/1080p.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
          <div className="absolute bottom-3 left-4 text-ivory font-medium">
            Celebrating Indian arts and heritage
          </div>
        </div>
      </div>
    </section>
  );
}
