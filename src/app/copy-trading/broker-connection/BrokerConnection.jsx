import React from "react";
import BrokerList from "./BrokerList";
import ConnectionForm from "./ConnectionForm";

function BrokerConnection() {
  return (
    <main
   
      className="flex gap-5 px-16 max-md:p-0 max-md:flex-col max-md:flex-col-reverse"
    >
      <section className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col px-10 pt-7 pb-14 mx-auto w-full  rounded-xl max-md:p-0 max-md:mt-10 max-md:max-w-full max-md:m-0">
          <header className="flex justify-between items-center text-xl font-bold leading-none text-black whitespace-nowrap max-md:max-w-full bg-transparent">
            <h1 className="flex gap-2 items-center mb-5">
              <span className="gap-2 self-stretch max-md:text-white">Broker</span>
            </h1>
          </header>
          <BrokerList />
        </div>
      </section>
      <aside className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
        <ConnectionForm />
      </aside>
    </main>
  );
}

export default BrokerConnection;
