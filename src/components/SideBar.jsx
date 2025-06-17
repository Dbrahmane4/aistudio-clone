// Sidebar.jsx
import { FiMessageSquare, FiImage, FiActivity, FiClock, FiSave } from 'react-icons/fi';

const menu = [
  { icon: <FiMessageSquare />, label: 'Chat' },
  { icon: <FiActivity />, label: 'Stream' },
  { icon: <FiImage />, label: 'Generate Media' },
  { icon: <FiClock />, label: 'History' },
  { icon: <FiSave />, label: 'Enable saving' },
];

export default function Sidebar() {
  return (
    <aside className="w-56 bg-[#f8faff] p-4 hidden md:flex flex-col gap-4 border-gray-200 text-sm text-gray-800">
      {menu.map((item, idx) => (
        <div
          key={idx}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#e8edf9] cursor-pointer ${
            idx === 0 ? 'bg-white font-semibold' : ''
          }`}
        >
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
      <p className="text-xs text-gray-500 mt-auto">
        This model is not stable and may not be suitable for production use.{' '}
        <a href="#" className="text-blue-600 underline">Learn more.</a>
      </p>
    </aside>
  );
}
