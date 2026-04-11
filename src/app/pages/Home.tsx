import { Link } from "react-router";
import { motion } from "motion/react";
import { GraduationCap, Users, Award, BookOpen, Calendar, Trophy, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1774386897531-1f5d7741409c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="School Building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-900/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl font-bold text-white mb-6">
              Green Valley Public School
            </h1>
            <p className="text-2xl text-emerald-100 mb-8">
              Nurturing Minds, Building Futures
            </p>
            <p className="text-lg text-white/90 mb-8 max-w-xl">
              Where education meets excellence. We empower students to become responsible global citizens through quality education, moral values, and skill development.
            </p>
            <div className="flex gap-4">
              <Link
                to="/admissions"
                className="bg-white text-emerald-900 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors inline-flex items-center gap-2"
              >
                Apply Now
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: GraduationCap, label: "CBSE Affiliated", value: "K-12 Education" },
              { icon: Users, label: "Students", value: "2,500+" },
              { icon: Award, label: "Board Result", value: "98%" },
              { icon: BookOpen, label: "Subjects", value: "25+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to Green Valley Public School
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Since 1995, we have been committed to providing exceptional education that shapes character and nurtures creativity. Our holistic approach prepares students for success in a rapidly changing world.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Quality Education</div>
                    <div className="text-gray-600">CBSE curriculum with modern teaching methods</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Character Building</div>
                    <div className="text-gray-600">Focus on moral values and ethics</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Skill Development</div>
                    <div className="text-gray-600">Comprehensive programs for holistic growth</div>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className="text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-2"
              >
                Read More About Us
                <ArrowRight size={18} />
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Students in Classroom"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="text-emerald-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Latest Announcements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                date: "May 25, 2026",
                title: "Summer Vacation",
                description: "Summer vacation starts from 25th May. School reopens on 15th June 2026.",
              },
              {
                date: "April 15, 2026",
                title: "Annual Exam Results Declared",
                description: "Board examination results for Class X and XII are now available.",
              },
              {
                date: "April 10, 2026",
                title: "Admissions Open",
                description: "Admissions open for academic year 2026-27. Limited seats available.",
              },
            ].map((notice, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-sm text-emerald-600 mb-2">{notice.date}</div>
                <h3 className="font-bold text-gray-900 mb-3">{notice.title}</h3>
                <p className="text-gray-600 text-sm">{notice.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/notices"
              className="text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-2"
            >
              View All Notices
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="text-emerald-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Recent Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "98% Board Result",
                description: "Outstanding performance in CBSE Class XII examinations 2025-26",
                icon: Award,
              },
              {
                title: "State Sports Champions",
                description: "Winner of State Level Inter-School Athletics Championship",
                icon: Trophy,
              },
              {
                title: "Science Exhibition",
                description: "First Prize in National Level Science Exhibition",
                icon: GraduationCap,
              },
            ].map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 text-center"
              >
                <achievement.icon className="w-16 h-16 mx-auto mb-4 text-emerald-600" />
                <h3 className="font-bold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/achievements"
              className="text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-2"
            >
              View All Achievements
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Give your child the gift of quality education at Green Valley Public School
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-white text-emerald-900 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors inline-flex items-center gap-2"
            >
              Start Application
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
