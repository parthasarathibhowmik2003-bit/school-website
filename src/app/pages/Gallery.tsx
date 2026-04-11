import { motion } from "motion/react";
import { useState } from "react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "events", name: "Events" },
    { id: "sports", name: "Sports" },
    { id: "cultural", name: "Cultural" },
    { id: "academics", name: "Academics" },
  ];

  const photos = [
    {
      url: "https://images.unsplash.com/photo-1774386897531-1f5d7741409c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      title: "School Building",
      category: "academics",
    },
    {
      url: "https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      title: "Students in Class",
      category: "academics",
    },
    {
      url: "https://images.unsplash.com/photo-1758270704787-615782711641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      title: "Classroom Learning",
      category: "academics",
    },
    {
      url: "https://images.unsplash.com/photo-1632217142144-f96b15d867a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      title: "School Library",
      category: "academics",
    },
    {
      url: "https://images.unsplash.com/photo-1663563624389-95349417e247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      title: "Football Team",
      category: "sports",
    },
    {
      url: "https://images.unsplash.com/photo-1696319179104-d85903b82048?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      title: "Sports Field",
      category: "sports",
    },
    {
      url: "https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      title: "Science Lab",
      category: "academics",
    },
    {
      url: "https://images.unsplash.com/photo-1758270704021-361c165d68fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      title: "Annual Day Celebration",
      category: "cultural",
    },
    {
      url: "https://images.unsplash.com/photo-1758270704384-9df36d94a29d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      title: "Student Presentation",
      category: "events",
    },
  ];

  const filteredPhotos =
    activeCategory === "all"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  return (
    <div>
      <section className="bg-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-emerald-100 max-w-3xl">
              Capturing moments of learning, growth, and celebration at Green Valley Public School
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg transition-colors ${
                  activeCategory === category.id
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold">{photo.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Video Gallery</h2>
          <p className="text-lg text-gray-700 mb-8">
            Watch highlights from our school events, performances, and activities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Annual Day 2026", thumbnail: photos[0].url },
              { title: "Sports Day Highlights", thumbnail: photos[4].url },
              { title: "Science Exhibition", thumbnail: photos[6].url },
              { title: "Cultural Fest", thumbnail: photos[7].url },
            ].map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[20px] border-l-emerald-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                  </div>
                </div>
                <div className="mt-3 font-semibold text-gray-900">{video.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
