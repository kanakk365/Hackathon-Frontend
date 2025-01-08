
import { BookOpenCheck, File, Layers, MessageCircle, Pen, Search, } from "lucide-react";

export const cards = [
  {
    title: "Effortless File Upload",
    description: "Upload files in seconds with our intuitive drag-and-drop interface.",
    icon: <File/>
  },
  {
    title: "Real-Time Data Processing",
    description: "Our system processes data in real time, providing instant insights and analytics.",
    icon: <Search />
  },
  {
    title: "Smart Analytics & Insights",
    description: "Leverage powerful data analysis tools to gain actionable insights .",
    icon: <MessageCircle />
  },
  {
    title: "Collaborative Tools",
    description: "Empower your team with seamless collaboration. Share files, track progress, and work together in real time.",
    icon: <Layers />
  },
  {
    title: "Comprehensive Data Storage",
    description: "Store your important data securely with our reliable and scalable storage solution.",
    icon: <BookOpenCheck />
  },
  {
    title: "Customizable Features",
    description: "Tailor the platform to fit your unique needs.",
    icon: <Pen />
  }
];

export function LandingPage() {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-full sm:w-[250px] md:w-[300px] p-6 bg-white dark:bg-black dark:opacity-80 shadow-lg rounded-lg text-center flex flex-col items-center gap-4"
        >
          <div className="text-3xl text-purple-500">{card.icon}</div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{card.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
