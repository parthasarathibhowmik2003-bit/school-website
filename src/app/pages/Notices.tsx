import { motion } from "motion/react";
import { Calendar, Download } from "lucide-react";

export default function Notices() {
  const notices = [
    {
      date: "May 25, 2026",
      title: "Summer Vacation",
      description:
        "Summer vacation starts from 25th May 2026. School will reopen on 15th June 2026. Students are encouraged to complete their holiday homework during this period.",
      category: "Holiday",
    },
    {
      date: "April 15, 2026",
      title: "Annual Exam Results Declared",
      description:
        "Board examination results for Class X and XII are now available. Students can collect their mark sheets from the school office during working hours.",
      category: "Academics",
    },
    {
      date: "April 10, 2026",
      title: "Admissions Open for 2026-27",
      description:
        "Admissions are now open for the academic year 2026-27 for all classes from Nursery to Class XI. Limited seats available. Apply online or visit the school office.",
      category: "Admissions",
    },
    {
      date: "April 5, 2026",
      title: "Parent-Teacher Meeting",
      description:
        "Parent-Teacher meeting scheduled for Saturday, April 12, 2026, from 9:00 AM to 1:00 PM. Parents are requested to attend and discuss their child's progress.",
      category: "Events",
    },
    {
      date: "March 28, 2026",
      title: "Sports Day Celebration",
      description:
        "Annual Sports Day will be celebrated on April 2, 2026. All students must report by 8:00 AM in their sports uniform. Parents are invited to attend.",
      category: "Events",
    },
    {
      date: "March 20, 2026",
      title: "Science Exhibition",
      description:
        "Inter-school Science Exhibition scheduled for March 25-26, 2026. Students who have registered should report to the science lab for final preparations.",
      category: "Academics",
    },
    {
      date: "March 15, 2026",
      title: "Fee Payment Reminder",
      description:
        "This is a reminder for parents to clear pending fees for the fourth quarter. Last date for payment without late fee is March 31, 2026.",
      category: "Fees",
    },
    {
      date: "March 10, 2026",
      title: "School Timing Change",
      description:
        "Due to the approaching summer season, school timing will be changed from April 1, 2026. New timing: 7:30 AM to 1:30 PM.",
      category: "General",
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
            <h1 className="text-5xl font-bold mb-6">Notice Board</h1>
            <p className="text-xl text-emerald-100 max-w-3xl">
              Stay updated with the latest announcements, events, and important information
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {notices.map((notice, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-center gap-3 mb-2 md:mb-0">
                    <Calendar className="text-emerald-600 flex-shrink-0" size={20} />
                    <div className="text-sm text-emerald-600 font-semibold">{notice.date}</div>
                  </div>
                  <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                    {notice.category}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{notice.title}</h3>
                <p className="text-gray-700">{notice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Downloadable Documents</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "School Calendar 2026-27", size: "245 KB" },
              { title: "Fee Structure 2026-27", size: "180 KB" },
              { title: "Admission Form", size: "320 KB" },
              { title: "Uniform Guidelines", size: "156 KB" },
              { title: "Holiday List 2026-27", size: "98 KB" },
              { title: "Transportation Routes", size: "425 KB" },
            ].map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{doc.title}</h3>
                  <p className="text-sm text-gray-500">PDF • {doc.size}</p>
                </div>
                <button className="p-3 bg-emerald-100 text-emerald-600 rounded-lg hover:bg-emerald-200 transition-colors">
                  <Download size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
