import React from "react";
import BrokerList from "./BrokerList";
import ConnectionForm from "./ConnectionForm";

function BrokerConnection() {
  return (
    <main
   
      className="flex gap-5 px-16"
    >
      <section className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
        <div className="flex overflow-hidden flex-col px-10 pt-7 pb-14 mx-auto w-full bg-white rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <header className="flex justify-between items-center text-xl font-bold leading-none text-black whitespace-nowrap max-md:max-w-full">
            <h1 className="flex gap-2 items-center">
              <span className="gap-2 self-stretch">Broker</span>
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
