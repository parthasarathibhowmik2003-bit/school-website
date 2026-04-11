import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

export default function Faculty() {
  const facultyMembers = [
    {
      name: "Dr. Anjali Sharma",
      subject: "Physics",
      qualification: "PhD (Physics)",
      experience: "12 years",
    },
    {
      name: "Mr. Ravi Kumar",
      subject: "Mathematics",
      qualification: "MSc, B.Ed",
      experience: "10 years",
    },
    {
      name: "Mrs. Priya Singh",
      subject: "Chemistry",
      qualification: "MSc, B.Ed",
      experience: "8 years",
    },
    {
      name: "Dr. Suresh Patel",
      subject: "Biology",
      qualification: "PhD (Botany)",
      experience: "15 years",
    },
    {
      name: "Ms. Kavita Reddy",
      subject: "English",
      qualification: "MA, B.Ed",
      experience: "9 years",
    },
    {
      name: "Mr. Amit Verma",
      subject: "Computer Science",
      qualification: "MCA, B.Ed",
      experience: "7 years",
    },
    {
      name: "Mrs. Deepa Nair",
      subject: "History",
      qualification: "MA, B.Ed",
      experience: "11 years",
    },
    {
      name: "Mr. Rajesh Gupta",
      subject: "Commerce",
      qualification: "MCom, B.Ed",
      experience: "13 years",
    },
    {
      name: "Ms. Sunita Joshi",
      subject: "Geography",
      qualification: "MA, B.Ed",
      experience: "6 years",
    },
  ];

  return (
    <div>
      <section className="bg-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Our Faculty</h1>
            <p className="text-xl text-emerald-100 max-w-3xl">
              Dedicated educators committed to nurturing excellence and inspiring young minds
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Excellence in Teaching</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our faculty comprises highly qualified and experienced educators who are passionate about teaching and student development. Each teacher brings unique expertise and dedication to creating an engaging learning environment.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <GraduationCap className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">Highly Qualified</div>
                    <div className="text-gray-600">Advanced degrees and professional certifications</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Award className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">Experienced Educators</div>
                    <div className="text-gray-600">Years of teaching excellence and mentorship</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1758270704787-615782711641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Teaching"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Meet Our Teachers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-emerald-600" size={32} />
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-2">{member.name}</h3>
                <div className="text-emerald-600 text-center mb-4">{member.subject}</div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Qualification:</span>
                    <span className="font-semibold text-gray-900">{member.qualification}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Experience:</span>
                    <span className="font-semibold text-gray-900">{member.experience}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Team</h2>
          <p className="text-lg text-gray-700 mb-8">
            We are always looking for passionate educators to join the Green Valley family. If you are committed to excellence in education, we would love to hear from you.
          </p>
          <a
            href="mailto:careers@gvpschool.edu.in"
            className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            careers@gvpschool.edu.in
          </a>
        </div>
      </section>
    </div>
  );
}
