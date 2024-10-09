import React from 'react';

const navItems = [
  { icon: "icon-user", label: "Profile" },

  { icon: "icon-code", label: "Build History" },

  { icon: "icon-code-1", label: "Code History" },

  { icon: "icon-copy", label: "Copy History" },

  { icon: "icon-setting-3 ", label: "Live Tools History" },

  { icon: "icon-game", label: "Quest History" },
  { icon: "icon-ticket", label: "Tickets" },

  { icon: "icon-money-recive", label: "Credit History" },

  { icon: "icon-gift", label: "Referral" },

  { icon: "icon-percentage-circle", label: "Broker Connect History" }
];

function NavItem({ icon, label, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center text-sm font-medium ${isActive ? 'text-lime-500' : 'text-neutral-700'} transition duration-200 ease-in-out transform ${isActive ? 'scale-105' : ''}`}
    >
      <div className={`flex flex-col justify-center items-center p-3 rounded-lg ${isActive ? 'shadow-md bg-stone-900 text-lime-500' : 'text-neutral-800'}  hover:shadow-lg cursor-pointer`}>
        <span className={`text-2xl mb-2 ${icon}`}></span>
        <div className="text-xs">{label}</div>
      </div>
    </div>
  );
}

function ProfileTab({ activeTab, onTabChange }) {
  return (
    <nav className="flex flex-col items-center pt-8 bg-stone-50 border-b border-neutral-200 pb-5 profile-tab">
      <div className="flex flex-wrap justify-center gap-4 max-w-full p-tab-list">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            {...item}
            isActive={activeTab === item.label}
            onClick={() => onTabChange(item.label)}
          />
        ))}
      </div>
    </nav>
  );
}

export default ProfileTab;
