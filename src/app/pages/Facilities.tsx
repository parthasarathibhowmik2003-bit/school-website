import { motion } from "motion/react";
import { BookOpen, Microscope, Computer, Dumbbell, Bus, Utensils } from "lucide-react";

export default function Facilities() {
  return (
    <div>
      <section className="bg-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Facilities</h1>
            <p className="text-xl text-emerald-100 max-w-3xl">
              World-class infrastructure designed to support comprehensive learning and development
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Smart Classrooms</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our classrooms are equipped with digital boards, projectors, and interactive learning tools that make education engaging and effective. Each classroom is spacious, well-ventilated, and designed for optimal learning.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Digital interactive boards in all classrooms</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Audio-visual learning aids</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Comfortable seating arrangements</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Natural lighting and ventilation</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Smart Classroom"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1632217142144-f96b15d867a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Library"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-emerald-600" size={32} />
                <h2 className="text-4xl font-bold text-gray-900">Library</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Our extensive library houses over 10,000 books covering various subjects, along with digital resources, newspapers, and magazines. It's a quiet space for reading, research, and self-study.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>10,000+ books across all subjects</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Digital library and e-resources</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Reading room and study area</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Reference section for competitive exams</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Microscope className="text-emerald-600" size={32} />
                <h2 className="text-4xl font-bold text-gray-900">Science Laboratories</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Fully equipped physics, chemistry, and biology labs enable hands-on learning and experimentation. Our labs meet all safety standards and are regularly updated with modern equipment.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Separate labs for Physics, Chemistry, and Biology</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Modern equipment and instruments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Safety equipment and protocols</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Trained lab assistants</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Science Lab"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Additional Facilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8"
            >
              <Computer className="w-16 h-16 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Computer Labs</h3>
              <p className="text-gray-700 mb-4">
                State-of-the-art computer labs with high-speed internet, latest software, and one computer per student.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>100+ computers with latest configuration</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>High-speed internet connectivity</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>Programming and coding classes</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8"
            >
              <Dumbbell className="w-16 h-16 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sports Complex</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive sports facilities for cricket, football, basketball, volleyball, and athletics.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>Outdoor playgrounds and courts</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>Indoor sports hall</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>Qualified sports coaches</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8"
            >
              <Bus className="w-16 h-16 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Transport</h3>
              <p className="text-gray-700 mb-4">
                Safe and reliable transportation covering major routes across the city with GPS-enabled buses.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>Fleet of GPS-enabled buses</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>Trained drivers and attendants</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>Extensive route coverage</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8"
            >
              <Utensils className="w-16 h-16 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Cafeteria</h3>
              <p className="text-gray-700 mb-4">
                Hygienic cafeteria serving nutritious meals and snacks prepared under strict quality standards.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>Healthy and nutritious food</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>Hygienic preparation environment</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>Spacious dining area</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8"
            >
              <BookOpen className="w-16 h-16 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Auditorium</h3>
              <p className="text-gray-700 mb-4">
                Modern auditorium with seating for 500+ people, equipped with sound and lighting systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>500+ seating capacity</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>Professional sound system</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>Stage lighting and projection</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8"
            >
              <Microscope className="w-16 h-16 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Medical Room</h3>
              <p className="text-gray-700 mb-4">
                Well-equipped medical room with a full-time nurse to handle any medical emergencies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>Qualified medical staff</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>First aid and emergency care</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>Regular health checkups</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
