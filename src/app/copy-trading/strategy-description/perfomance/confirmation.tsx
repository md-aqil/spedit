import Link from "next/link";

const tabItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b83a9e4cf7316342329cfdb588dbfda22a7e446a6751a6cc4179a566848c61f1?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "User Login",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/eef803a2cd17abf01f2bc1f8dc51e65a4a1ce4f7dc434125b4258e9f3c175ee5?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Broker Connect",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/eef803a2cd17abf01f2bc1f8dc51e65a4a1ce4f7dc434125b4258e9f3c175ee5?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Available Credits",
  },
];

const InfoItem = ({ label, value, className = "" }) => (
  <div className={`flex flex-col leading-none ${className}`}>
    <div className="text-xs text-neutral-500">{label}</div>
    <div className="mt-1 text-base  text-white">{value}</div>
  </div>
);

const TabItem = ({ icon, text }) => (
  <div className="flex gap-2 justify-center items-center">
    <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
    <div className="self-stretch my-auto  whitespace-nowrap">{text}</div>
  </div>
);
export function StrategyCopyConfirmation({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <main id="showConfirmTourModal" className="flex overflow-hidden flex-col px-9 py-9 rounded-xl shadow-md bg-neutral-900  max-md:px-5">
        <nav className="flex flex-wrap gap-6 items-start pb-5 text-base font-bold leading-none text-white border-b border-solid border-b-neutral-800 max-md:max-w-full">
          {tabItems.map((item, index) => (
            <TabItem key={index} icon={item.icon} text={item.text} />
          ))}
        </nav>
        <section className="mt-7 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start w-full max-md:mt-3.5">
                <InfoItem label="Strategy Amount" value="50000 INR" />
                <InfoItem label="Strategy" value="Karishma657" className="mt-7" />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col leading-none text-right max-md:mt-4">
                <InfoItem label="Stop Loss %" value="20" className=" ml-3 self-end" />
                <InfoItem label="Credits Charge" value="10" className="mt-8 self-end" />
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center mt-11 whitespace-nowrap max-md:mt-10">
            <Link
              href="/copy-trading/dashboard/"
              className="gap-1 self-stretch py-3.5 my-auto text-sm font-bold leading-none text-center rounded min-h-[42px] px-7 w-36 bg-lime-500 text-stone-950 max-md:px-5"
            >
              Confirm
            </Link>
            <button
              onClick={onClose}
              className="gap-1 self-stretch py-3.5 my-auto text-sm font-bold leading-none text-center rounded min-h-[42px] px-3.5 w-[87px] border border-solid border-neutral-500 text-stone-300"
            >
              Cancel
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
