import { motion } from "motion/react";
import { Trophy, Award, Medal, Star } from "lucide-react";

export default function Achievements() {
  return (
    <div>
      <section className="bg-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Achievements</h1>
            <p className="text-xl text-emerald-100 max-w-3xl">
              Celebrating excellence in academics, sports, and co-curricular activities
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Trophy,
                value: "98%",
                label: "Board Result 2025-26",
                description: "Outstanding performance in CBSE examinations",
              },
              {
                icon: Award,
                value: "50+",
                label: "Awards Won",
                description: "In academics, sports, and cultural events",
              },
              {
                icon: Medal,
                value: "15+",
                label: "State Champions",
                description: "Inter-school sports competitions",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-emerald-50 rounded-lg p-8"
              >
                <stat.icon className="w-16 h-16 mx-auto mb-4 text-emerald-600" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="font-semibold text-gray-900 mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Academic Excellence</h2>

          <div className="space-y-6">
            {[
              {
                year: "2025-26",
                title: "98% Board Result in Class XII",
                description:
                  "Our students achieved an outstanding 98% pass rate in CBSE Class XII examinations with 25 students scoring above 95%.",
              },
              {
                year: "2025-26",
                title: "100% Board Result in Class X",
                description:
                  "Perfect 100% pass rate in Class X board examinations with school topper scoring 498/500 marks.",
              },
              {
                year: "2025",
                title: "National Science Olympiad Winners",
                description:
                  "5 students qualified for the national level science olympiad, with 2 students winning gold medals.",
              },
              {
                year: "2025",
                title: "Mathematics Excellence Award",
                description:
                  "School recognized by CBSE for excellence in mathematics education and outstanding student performance.",
              },
            ].map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-6 flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Star className="text-emerald-600" size={28} />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-emerald-600 font-semibold mb-2">{achievement.year}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-700">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Sports Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Trophy,
                title: "State Athletics Championship",
                description: "Winners of State Level Inter-School Athletics Championship 2025",
                position: "1st Position",
              },
              {
                icon: Medal,
                title: "Football Tournament",
                description: "Regional Football Tournament champions for third consecutive year",
                position: "Champions",
              },
              {
                icon: Award,
                title: "Basketball Championship",
                description: "State-level basketball tournament runners-up",
                position: "2nd Position",
              },
              {
                icon: Trophy,
                title: "Cricket Trophy",
                description: "Winners of District Cricket Championship under-17 category",
                position: "Winners",
              },
              {
                icon: Medal,
                title: "Badminton Excellence",
                description: "Multiple individual medals in state badminton championship",
                position: "5 Medals",
              },
              {
                icon: Award,
                title: "Swimming Competition",
                description: "Outstanding performance in inter-school swimming meet",
                position: "3rd Position",
              },
            ].map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="text-emerald-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{achievement.title}</h3>
                      <span className="text-emerald-600 font-semibold text-sm px-3 py-1 bg-emerald-50 rounded-full">
                        {achievement.position}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Cultural & Co-curricular</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Science Exhibition",
                description: "First Prize in National Level Science Exhibition",
                year: "2025",
              },
              {
                title: "Debate Competition",
                description: "State winners in inter-school debate championship",
                year: "2025",
              },
              {
                title: "Art Competition",
                description: "Multiple awards in state-level art and painting contest",
                year: "2025",
              },
              {
                title: "Music Festival",
                description: "Best performance award at regional music festival",
                year: "2025",
              },
              {
                title: "Drama Competition",
                description: "Outstanding performance in inter-school drama fest",
                year: "2026",
              },
              {
                title: "Quiz Championship",
                description: "Winners of district-level general knowledge quiz",
                year: "2026",
              },
            ].map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-50 to-white rounded-lg p-6 border border-emerald-100"
              >
                <div className="text-sm text-emerald-600 font-semibold mb-2">{achievement.year}</div>
                <h3 className="font-bold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
