import { motion } from "motion/react";
import { ClipboardCheck, FileText, Users, CheckCircle, IndianRupee } from "lucide-react";
import { useState } from "react";

export default function Admissions() {
  const [formData, setFormData] = useState({
    studentName: "",
    grade: "",
    parentName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted successfully! We will contact you soon.");
  };

  return (
    <div>
      <section className="bg-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Admissions</h1>
            <p className="text-xl text-emerald-100 max-w-3xl">
              Join the Green Valley family and give your child the gift of quality education
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Admission Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: FileText,
                step: "Step 1",
                title: "Fill Application",
                description: "Submit the online or offline application form with required documents",
              },
              {
                icon: ClipboardCheck,
                step: "Step 2",
                title: "Entrance Test",
                description: "Appear for age-appropriate entrance assessment",
              },
              {
                icon: Users,
                step: "Step 3",
                title: "Interview",
                description: "Personal interaction with student and parents",
              },
              {
                icon: CheckCircle,
                step: "Step 4",
                title: "Confirmation",
                description: "Receive admission confirmation and complete enrollment",
              },
            ].map((process, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <process.icon className="text-emerald-600" size={32} />
                </div>
                <div className="text-sm text-emerald-600 font-semibold mb-2">{process.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-emerald-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Age Requirements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>Nursery: 3+ years as of March 31</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>Class I: 6+ years as of March 31</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>Other classes: Age-appropriate eligibility</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Required Documents</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>Birth certificate</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>Previous school transfer certificate</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>Passport size photographs</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>Address proof</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <IndianRupee className="text-emerald-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Fee Structure</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Pre-Primary & Primary",
                classes: "Nursery to Class V",
                admission: "₹15,000",
                monthly: "₹3,500",
                annual: "₹5,000",
              },
              {
                category: "Middle & Secondary",
                classes: "Class VI to X",
                admission: "₹18,000",
                monthly: "₹4,000",
                annual: "₹6,000",
              },
              {
                category: "Senior Secondary",
                classes: "Class XI to XII",
                admission: "₹20,000",
                monthly: "₹4,500",
                annual: "₹7,000",
              },
            ].map((fee, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 border-2 border-gray-200 hover:border-emerald-500 transition-colors"
              >
                <div className="text-emerald-600 font-semibold mb-2">{fee.category}</div>
                <div className="text-xl font-bold text-gray-900 mb-6">{fee.classes}</div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Admission Fee</span>
                    <span className="font-bold text-gray-900">{fee.admission}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Monthly Fee</span>
                    <span className="font-bold text-gray-900">{fee.monthly}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Annual Charges</span>
                    <span className="font-bold text-gray-900">{fee.annual}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-emerald-100 border border-emerald-300 rounded-lg p-6">
            <p className="text-gray-700">
              <span className="font-semibold">Note:</span> Fee structure is subject to revision. Additional charges may apply for transport, books, and uniforms. Sibling discounts and scholarship programs are available for eligible students.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Online Application Form</h2>
          <p className="text-center text-gray-600 mb-12">
            Fill out the form below to start your admission process
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Student Name *</label>
              <input
                type="text"
                required
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter student's full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Grade Applying For *</label>
              <select
                required
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select Grade</option>
                <option value="nursery">Nursery</option>
                <option value="lkg">LKG</option>
                <option value="ukg">UKG</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={`class-${i + 1}`}>
                    Class {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Parent/Guardian Name *</label>
              <input
                type="text"
                required
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter parent/guardian name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Address *</label>
              <textarea
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter full address"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-4 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <section className="py-16 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-emerald-100 mb-6">
            Our admissions team is here to assist you with any questions
          </p>
          <div className="flex gap-4 justify-center text-sm">
            <a href="tel:+919876543210" className="hover:text-emerald-200">
              Call: +91 98765 43210
            </a>
            <span>|</span>
            <a href="mailto:admissions@gvpschool.edu.in" className="hover:text-emerald-200">
              Email: admissions@gvpschool.edu.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
