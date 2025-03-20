"use client";
import TopicCard from "../(pages)/index/components/topicCard";
import categories from "@/lib/categories";
import { useEffect, useState } from "react";

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [catTypes, setCatTypes] = useState<{ type: string; typeCats: string[]; }[]>([]);
  const [typeCats, setTypeCats] = useState<string[]>([]);

  // Update catTypes when category changes
  useEffect(() => {
    const category = categories.find(cat => cat.category === selectedCategory);
    if (category && Array.isArray(category.types)) {
      setCatTypes(category.types);
      setSelectedType(""); // Reset selected type when category changes
    } else {
      setCatTypes([]);
      setTypeCats([]);
    }
  }, [selectedCategory]);

  // Update typeCats when type changes
  useEffect(() => {
    const currentType = catTypes.find(ct => ct.type === selectedType);
    if (currentType) {
      setTypeCats(currentType.typeCats);
    } else {
      setTypeCats([]);
    }
  }, [selectedType, catTypes]);

  return (
    <>
      <section className="w-full min-h-[100dvh] bg-[#F9F7EB]">
        <div className="max-cont flex flex-col gap-5 p-3">
          {/* Header */}
          <div className="pt-4 flex flex-col gap-3">
            <h2 className="uppercase text-[#647403] font-semibold text-3xl md:text-5xl">Categories</h2>
            <div className="w-full h-[2px] bg-[#647403]" />
          </div>

          {/* Categories */}
          <div className="flex items-center flex-wrap justify-center gap-4 lg:gap-8">
            {categories.map((cat) => (
              <TopicCard key={cat.id} Icon={cat.icon} topic={cat.category} animationType="fade-right"/>
            ))}
          </div>

          {/* Filter */}
          <div className="flex items-center justify-between flex-wrap gap-3 lg:gap-0 lg:flex-nowrap">
            <div className="flex flex-col">
              <span className="text-[#647403] font-semibold text-lg uppercase">Filter articles</span>
              <div className="flex items-center gap-4 py-3 flex-wrap lg:flex-nowrap">
                {/* Trend */}
                <select className="bg-white text-[#647403] border border-gray-400 px-4 py-2 focus:outline-none cursor-pointer rounded-lg" 
                name="trend" id="trend">
                  <option value="popular">Popular</option>
                  <option value="latest">Latest</option>
                  <option value="oldest">Oldest</option>
                </select>

                {/* Category */}
                <select className="bg-white text-[#647403] border border-gray-400 px-4 py-2 focus:outline-none cursor-pointer rounded-lg" 
                name="category" id="category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.category}>{cat.category}</option>
                  ))}
                </select>

                {/* Type */}
                <select className="bg-white text-[#647403] border border-gray-400 px-4 py-2 focus:outline-none cursor-pointer rounded-lg" 
                name="type" id="type" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                  <option value="">Select Type</option>
                  {catTypes.map((type, index) => (
                    <option key={index} value={type.type}>{type.type}</option>
                  ))}
                </select>

                {/* Type Categories */}
                <select className="bg-white text-[#647403] border border-gray-400 px-4 py-2 focus:outline-none cursor-pointer rounded-lg" 
                name="typeCats" id="typeCats">
                  <option value="">Select Type Category</option>
                  {typeCats.map((tc, index) => (
                    <option key={index} value={tc}>{tc}</option>
                  ))}
                </select>
              </div>
            </div>
            <span className="text-[#647403] text-xl font-semibold">8 items</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Categories;