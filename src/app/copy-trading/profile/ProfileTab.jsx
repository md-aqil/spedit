import React from 'react';

const navItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a008cc6647e795e99b28fb590539e687ad68d44a80e91c9b10c9f0e475030b7?apiKey=b4d1b9e87b084579b1e2475047caf617&", label: "Profile" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/573087c228d50c5f4f4f57eae0a48fabfb006e279100a9817f831613f7995d71?apiKey=b4d1b9e87b084579b1e2475047caf617&", label: "Build History" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb6c9faaf5cc06c3eb2266f3969e00e325aed3a6e965aab66ed325b4ad65b97e?apiKey=b4d1b9e87b084579b1e2475047caf617&", label: "Code History" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5db82854b358ce9c3acfb37abf2a611702cb4e1a1379ea4cae8eda87886743f9?apiKey=b4d1b9e87b084579b1e2475047caf617&", label: "Copy History" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c55c9a5766b0bcfa67f5e86dd439ca56eff76cddd364a3a2df98d99871a6111?apiKey=b4d1b9e87b084579b1e2475047caf617&", label: "Live Tools History" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2b13b2a70f41780b5a67e1edf6964fd52fba139b4f29e67443e14ac469715f8?apiKey=b4d1b9e87b084579b1e2475047caf617&", label: "Quest History" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4da947b3e88f1404153bb03ad360bcd1cff826c18e6709cb89d3c519b97a5904?apiKey=b4d1b9e87b084579b1e2475047caf617&", label: "Tickets" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9619db4857b8c8428dcdc1666ff05103bb7b1bb71135284eb7eb650d65dee7ae?apiKey=b4d1b9e87b084579b1e2475047caf617&", label: "Credits History" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b480ff1c46265ee288f6557841d989a1835e0d620927fed3c971f01d4bbf3be?apiKey=b4d1b9e87b084579b1e2475047caf617&", label: "Referral" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9fce3d0e3d49f37e3e62267a6147e2fea44bad857dbaada4787d74ce029e54ad?apiKey=b4d1b9e87b084579b1e2475047caf617&", label: "Broker Connect History" }
];

function NavItem({ icon, label, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center text-sm font-medium ${isActive ? 'text-lime-500' : 'text-neutral-700'} transition duration-200 ease-in-out transform ${isActive ? 'scale-105' : ''}`}
    >
      <div className={`flex flex-col justify-center items-center p-3 rounded-lg ${isActive ? 'shadow-md bg-stone-900 text-lime-500' : 'text-neutral-800'} hover:bg-stone-100 hover:shadow-lg cursor-pointer`}>
        <img loading="lazy" src={icon} alt={`${label} icon`} className="w-6 h-6 object-contain mb-1" />
        <div className="text-xs">{label}</div>
      </div>
    </div>
  );
}

function ProfileTab({ activeTab, onTabChange }) {
  return (
    <nav className="flex flex-col items-center pt-8 bg-stone-50 border-b border-neutral-200 pb-5">
      <div className="flex flex-wrap justify-center gap-4 max-w-full">
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
