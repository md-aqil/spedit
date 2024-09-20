import * as React from "react";

// Navigator Item Component
const NavigatorItem = ({ title, iconSrc, children, editedTime, isOpen, onClick }) => {
  return (
    <div className={`w-full transition-colors duration-300`}>
      <div
        className={`flex justify-between items-center cursor-pointer px-4 py-3 ${
          isOpen ? "bg-[#D9F89E] rounded-lg" : ""
        }`}
        onClick={onClick} // Handle item click
      >
        <div className="flex items-center gap-2">
          <span className={`navigator-icon ${iconSrc}`}></span>
          <div className="text-base font-bold text-neutral-800">{title}</div>
        </div>

        <div className="flex items-center gap-2 text-stone-400 text-xs">
          <div>{editedTime}</div>
          <span
            className={`icon-arrow-square-down text-lg transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`} // Made the icon bigger using 'text-lg'
          />
        </div>
      </div>
      {isOpen && (
        <div className="transition-all duration-300 ease-in-out navigator-item">
          {children}
        </div>
      )}
    </div>
  );
};

// Sub-item component (for items like Leader Board)
const SubItem = ({ title, isSelected }) => {
  return (
    <div
      className={`pl-4 py-2 text-sm cursor-pointer ${
        isSelected ? "border-l-2 border-[#9BEC00]" : ""
      }`}
    >
      {title}
    </div>
  );
};

// Navigator Component
function Navigator() {
  const [openTab, setOpenTab] = React.useState("Copy"); // Set "Copy" as default open tab
  const [selectedSubItem, setSelectedSubItem] = React.useState("Leader Board"); // Handle selected sub-item

  // Handle tab click
  const handleTabClick = (tabName) => {
    setOpenTab(openTab === tabName ? "" : tabName); // Toggle the clicked tab
  };

  return (
    <div className="flex flex-col  items-center px-5 pt-9 pb-16 mx-auto w-full bg-white rounded-xl max-w-[480px] navigator">

      <div className="flex gap-10 justify-between items-center w-full px-5 pb-5 mb-5 border-b ">
        <div className="self-stretch my-auto text-xl font-bold text-stone-950">
          Pages
        </div>
        <div className="flex gap-2 justify-center items-center text-xs text-stone-400">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search Pages"
            className="w-[200px] py-1 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#9BEC00]"
          />
          <span className="icon-search-normal-1 text-2xl"></span>
        </div>
      </div>

      {/* Navigator Items */}
      <NavigatorItem
        title="Onboarding"
        iconSrc="icon-note"
        editedTime="edited 18min ago"
        isOpen={openTab === "Onboarding"} // Open this tab if it's selected
        onClick={() => handleTabClick("Onboarding")}
      >
        <SubItem title="Dash" isSelected={selectedSubItem === "Dash"} />
        <SubItem
          title="Leader Board"
          isSelected={selectedSubItem === "Leader Board"} // This one is selected
        />
        <SubItem
          title="Live Positions"
          isSelected={selectedSubItem === "Live Positions"}
        />
        <SubItem title="History" isSelected={selectedSubItem === "History"} />
      </NavigatorItem>

      <NavigatorItem
        title="Profile"
        iconSrc="icon-profile-2user"
        editedTime="edited 15min ago"
        isOpen={openTab === "Profile"}
        onClick={() => handleTabClick("Profile")}
      >
        <SubItem title="Settings" isSelected={selectedSubItem === "Settings"} />
        <SubItem
          title="Preferences"
          isSelected={selectedSubItem === "Preferences"}
        />
      </NavigatorItem>

      <NavigatorItem
        title="Portfolio"
        iconSrc="icon-document-1"
        editedTime="edited 10min ago"
        isOpen={openTab === "Portfolio"}
        onClick={() => handleTabClick("Portfolio")}
      >
        <SubItem
          title="Investments"
          isSelected={selectedSubItem === "Investments"}
        />
        <SubItem
          title="Performance"
          isSelected={selectedSubItem === "Performance"}
        />
      </NavigatorItem>

      <NavigatorItem
        title="Build"
        iconSrc="icon-document-code-2"
        editedTime="edited 8min ago"
        isOpen={openTab === "Build"}
        onClick={() => handleTabClick("Build")}
      >
        <SubItem title="Modules" isSelected={selectedSubItem === "Modules"} />
        <SubItem
          title="Integrations"
          isSelected={selectedSubItem === "Integrations"}
        />
      </NavigatorItem>

      <NavigatorItem
        title="Code"
        iconSrc="icon-code"
        editedTime="edited 4min ago"
        isOpen={openTab === "Code"}
        onClick={() => handleTabClick("Code")}
      >
        <SubItem title="Scripts" isSelected={selectedSubItem === "Scripts"} />
        <SubItem
          title="Snippets"
          isSelected={selectedSubItem === "Snippets"}
        />
      </NavigatorItem>

      {/* Default open "Copy" tab */}
      <NavigatorItem
        title="Copy"
        iconSrc="icon-copy"
        editedTime="edited 3min ago"
        isOpen={openTab === "Copy"} // "Copy" tab is open by default
        onClick={() => handleTabClick("Copy")}
      >
        <SubItem title="Dash" isSelected={selectedSubItem === "Dash"} />
        <SubItem
          title="Leader Board"
          isSelected={selectedSubItem === "Leader Board"} // This one is selected with the green border
        />
        <SubItem
          title="Live Positions"
          isSelected={selectedSubItem === "Live Positions"}
        />
        <SubItem title="History" isSelected={selectedSubItem === "History"} />
        <SubItem title="Mock Positions" />
        <SubItem title="Mock History" />
        <SubItem title="Lead Trader login" />
      </NavigatorItem>

      <NavigatorItem
        title="Live Tool"
        iconSrc="icon-setting-3"
        editedTime="edited 4 days ago"
        isOpen={openTab === "Live Tool"}
        onClick={() => handleTabClick("Live Tool")}
      >
        <SubItem title="Support" isSelected={selectedSubItem === "Support"} />
        <SubItem
          title="Documentation"
          isSelected={selectedSubItem === "Documentation"}
        />
      </NavigatorItem>

      <NavigatorItem
        title="Help & FAQS"
        iconSrc="icon-message-question"
        editedTime="edited 4 days ago"
        isOpen={openTab === "Help & FAQS"}
        onClick={() => handleTabClick("Help & FAQS")}
      >
        <SubItem title="Support" isSelected={selectedSubItem === "Support"} />
        <SubItem
          title="Documentation"
          isSelected={selectedSubItem === "Documentation"}
        />
      </NavigatorItem>
    </div>
  );
}

export default Navigator;
