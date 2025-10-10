import { GraduationCap } from 'lucide-react';

export default function Footer() {
  const links = {
    University: ['About', 'Curriculum', 'Research', 'Team'],
    Resources: ['Student Portal', 'AI Teachers', 'Community', 'Blog'],
    Support: ['Help Center', 'Contact', 'Press', 'Careers'],
  };

  return (
    <footer className="relative border-t border-purple-500/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-purple-400" strokeWidth={1.5} />
              <span className="text-2xl font-light">iBrian University</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              The world's first AI-driven university. Personalized education powered by advanced artificial intelligence, available to everyone, everywhere.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-gray-300 mb-4 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-purple-400 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-purple-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 iBrian University. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-200">
              Twitter
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-200">
              LinkedIn
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-200">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
