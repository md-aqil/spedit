import * as React from "react";

function TransactionMonitoring() {
    const files = [
        { name: "Copy Order", fileName: "tanya345CopyOrder.pdf" },
        { name: "Credits", fileName: "tanya345Credits.pdf" },
        { name: "Mock Order", fileName: "tanya345MockOrder.pdf" },
        { name: "Referrals", fileName: "tanya345Referral.pdf" },
        { name: "Trade History", fileName: "tanya345TradeHistory.pdf" },
        { name: "Tickets", fileName: "tanya345Referral.pdf" },
        { name: "Mock History", fileName: "tanya345MockHistory.pdf" },
        { name: "Broker Connect History", fileName: "tanya345BrokerHistory.pdf" },
    ];

    return (
        <div className="flex overflow-hidden flex-col shadow-sm rounded-lg mt-10">

            <header className="self-start text-xl font-bold leading-none text-stone-950">Transaction Monitoring</header>
            <section className="flex overflow-hidden flex-col justify-center px-16 py-9 mt-6 w-full bg-white rounded-xl shadow-sm max-md:max-w-full">
                <form className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
                    <div className="flex gap-10 items-center leading-none min-w-[240px]">
                        <div className="flex flex-col self-stretch my-auto min-w-[240px]">
                            <label htmlFor="usernameEmail" className="text-xl font-bold opacity-80 text-stone-950">Enter username or Email{" "}</label>
                            <div className="mt-2 text-xs text-neutral-500">Enter username or email to find transaction details of user{" "}</div>
                        </div>
                    </div>
                    <input type="text" id="usernameEmail" className="px-6 py-2.5 text-base text-black whitespace-nowrap rounded-lg bg-stone-50 min-w-[240px] w-[393px] max-md:px-5" placeholder="Username/Email" aria-label="Username/Email" />
                    <button className="gap-2 self-stretch px-3 py-4 text-sm font-bold leading-none text-center whitespace-nowrap bg-lime-500 rounded min-h-[44px] text-stone-950 w-[110px]">Find</button>
                </form>
            </section>
            <section className="flex overflow-hidden flex-col px-14 py-10 mt-3 w-full leading-none bg-white rounded-xl shadow-sm  max-md:max-w-full">
                <div className="flex flex-wrap gap-10 justify-between items-center w-full min-h-[93px] max-md:max-w-full">
                    <div className="flex gap-4 self-stretch my-auto">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/46926cbfb58324d1c32e80697f71366f86cce0d9bfeb755f7c976d28ba1b3a0d?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="User profile" className="object-contain shrink-0 my-auto rounded aspect-[0.93] w-[86px]" />
                        <div className="flex flex-col justify-between w-[134px]">
                            <div className="flex flex-col w-full whitespace-nowrap">
                                <div className="text-xs text-blue-500">123456i</div>
                                <div className="flex flex-col mt-2 w-full text-black">
                                    <div className="text-base font-bold">Tanya</div>
                                    <div className="mt-1 text-xs">@tanya345</div>
                                </div>
                            </div>
                            <div className="mt-8 text-xs text-stone-500">DOJ: <span className="font-semibold">01-01-1994</span></div>
                        </div>
                    </div>
                    <button className="flex gap-1 justify-center items-center self-stretch px-2 py-2.5 my-auto text-sm font-bold text-center rounded border border-solid border-neutral-800 min-h-[36px] text-neutral-800">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffcf651eb37c1f5941d2b4c9fce7eb31fc562a03323d465f6a796444aa421c56?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="Download icon" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
                        <span className="self-stretch my-auto">Download All</span>
                    </button>
                </div>


                <div className="grid grid-cols-4 gap-16 mt-10">
                    {files.map((file, index) => (
                        <div key={index} className="flex flex-col justify-between monitor-card">
                            <div className="flex flex-col w-full">
                                <div className="flex gap-10 justify-between items-start w-full text-xs text-neutral-800">
                                    <div className="opacity-80">{file.name}</div>
                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c211248c9807fb90a25c59a33480772e05112c3fc11b3503a339a66d37279ed0?apiKey=b4d1b9e87b084579b1e2475047caf617&" alt="" className="object-contain shrink-0 w-3.5 aspect-square" />
                                </div>
                                <div className="mt-3 text-sm font-semibold text-blue-500">{file.fileName}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default TransactionMonitoring;