import { motion } from "motion/react";
import { BookOpen, Microscope, Calculator, Globe, Palette, Music } from "lucide-react";

export default function Academics() {
  return (
    <div>
      <section className="bg-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Academics</h1>
            <p className="text-xl text-emerald-100 max-w-3xl">
              Comprehensive CBSE curriculum designed to foster academic excellence and holistic development
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">CBSE Curriculum</h2>
              <p className="text-lg text-gray-700 mb-6">
                Green Valley Public School follows the CBSE (Central Board of Secondary Education) curriculum, recognized for its balanced approach to academics, co-curricular activities, and skill development.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Nationally Recognized</div>
                    <div className="text-gray-600">CBSE affiliation ensures quality standards</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Holistic Approach</div>
                    <div className="text-gray-600">Balance between academics and activities</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Modern Pedagogy</div>
                    <div className="text-gray-600">Interactive and student-centered learning</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1758270704384-9df36d94a29d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Students Learning"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Classes Offered</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  level: "Pre-Primary",
                  classes: "Nursery to UKG",
                  description: "Play-based learning with focus on early development",
                },
                {
                  level: "Primary",
                  classes: "Class I to V",
                  description: "Foundation building with core subjects and activities",
                },
                {
                  level: "Middle School",
                  classes: "Class VI to VIII",
                  description: "Comprehensive curriculum with skill development",
                },
                {
                  level: "Secondary",
                  classes: "Class IX to X",
                  description: "Board preparation with focus on academics",
                },
                {
                  level: "Senior Secondary",
                  classes: "Class XI to XII",
                  description: "Stream-based specialization (Science, Commerce, Arts)",
                },
              ].map((level, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                >
                  <div className="font-bold text-emerald-600 mb-2">{level.level}</div>
                  <div className="text-xl font-bold text-gray-900 mb-2">{level.classes}</div>
                  <p className="text-gray-600 text-sm">{level.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Subjects Offered</h2>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Microscope className="text-emerald-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Science Stream</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "English"].map((subject, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-4 border border-gray-200"
                  >
                    <div className="font-semibold text-gray-900">{subject}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="text-emerald-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Commerce Stream</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["Accountancy", "Business Studies", "Economics", "Mathematics", "English", "Informatics Practices"].map((subject, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-4 border border-gray-200"
                  >
                    <div className="font-semibold text-gray-900">{subject}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-emerald-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Arts Stream</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["History", "Political Science", "Geography", "Economics", "English", "Psychology"].map((subject, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-4 border border-gray-200"
                  >
                    <div className="font-semibold text-gray-900">{subject}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Teaching Methodology</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Interactive Learning",
                description: "Engaging classroom sessions with digital boards and multimedia resources",
              },
              {
                icon: Microscope,
                title: "Practical Approach",
                description: "Hands-on experiments and real-world applications of concepts",
              },
              {
                icon: Globe,
                title: "Collaborative Projects",
                description: "Group activities fostering teamwork and problem-solving skills",
              },
              {
                icon: Calculator,
                title: "Regular Assessments",
                description: "Continuous evaluation to track progress and provide feedback",
              },
              {
                icon: Palette,
                title: "Creative Expression",
                description: "Encouraging creativity through art, music, and drama",
              },
              {
                icon: Music,
                title: "Extracurricular Focus",
                description: "Balanced development through sports and cultural activities",
              },
            ].map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <method.icon className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Academic Excellence</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Our commitment to quality education has resulted in consistent 98% board results and numerous academic achievements
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-emerald-100">Board Result</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-emerald-100">Subjects</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-emerald-100">Faculty Members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
