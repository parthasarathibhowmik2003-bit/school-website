import { motion } from "motion/react";
import { Target, Eye, Building2, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <div>
      <section className="bg-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-emerald-100 max-w-3xl">
              Green Valley Public School has been a beacon of quality education since 1995, committed to shaping young minds and building future leaders.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1758270704021-361c165d68fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Principal"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Principal's Message</h2>
              <div className="text-lg text-gray-700 space-y-4">
                <p>
                  "At Green Valley Public School, we believe education is not just about marks but about shaping character and creativity. Our goal is to empower every student to succeed in a rapidly changing world."
                </p>
                <p>
                  We are committed to providing a nurturing environment where students can explore their potential, develop critical thinking skills, and become responsible global citizens. Our dedicated faculty, modern infrastructure, and comprehensive curriculum ensure that each student receives the best possible education.
                </p>
                <p>
                  I invite you to join our community and experience the Green Valley difference.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="font-semibold text-gray-900">Dr. Rajesh Kumar</div>
                  <div className="text-gray-600">Principal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Eye className="text-emerald-600" size={32} />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700">
                To create responsible global citizens equipped with knowledge, values, and skills to contribute positively to society and excel in an ever-evolving world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-emerald-600" size={32} />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Deliver quality education through innovative teaching methods</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Instill strong moral values and ethical principles</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Foster comprehensive skill development</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">•</span>
                  <span>Nurture creativity and critical thinking</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our History</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Three decades of educational excellence and continuous growth
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "1995",
                  title: "Foundation",
                  description: "Green Valley Public School was established with a vision to provide quality education to the community.",
                },
                {
                  year: "2005",
                  title: "CBSE Affiliation",
                  description: "Achieved CBSE affiliation, expanding our reach and academic standards.",
                },
                {
                  year: "2015",
                  title: "Modern Campus",
                  description: "Inaugurated our state-of-the-art campus with advanced facilities and technology.",
                },
                {
                  year: "2026",
                  title: "Continued Excellence",
                  description: "Today, we serve over 2,500 students with a 98% board result success rate.",
                },
              ].map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {milestone.year}
                    </div>
                    {i !== 3 && <div className="w-0.5 bg-emerald-200 flex-1 my-2" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <Building2 className="text-emerald-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Infrastructure</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Smart Classrooms",
                description: "Modern classrooms equipped with digital boards and interactive learning tools",
              },
              {
                icon: Building2,
                title: "Spacious Campus",
                description: "10-acre campus with well-maintained buildings and green spaces",
              },
              {
                icon: Target,
                title: "Science Labs",
                description: "Fully equipped physics, chemistry, and biology laboratories",
              },
              {
                icon: Eye,
                title: "Computer Labs",
                description: "State-of-the-art computer labs with latest technology",
              },
              {
                icon: Lightbulb,
                title: "Library",
                description: "Extensive library with 10,000+ books and digital resources",
              },
              {
                icon: Building2,
                title: "Sports Complex",
                description: "Indoor and outdoor sports facilities for various activities",
              },
            ].map((facility, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6"
              >
                <facility.icon className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
