import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState, type PropsWithChildren } from "react";
import { sleep } from "./util";
import type { TourGuideClient } from "@sjmc11/tourguidejs";

export const stepsPages = [
  "/copy-trading/leader-board/",
  "/copy-trading/strategy-description/",
  "/copy-trading/strategy-description/?name=copyStepOpen",
  "/copy-trading/strategy-description/?name=copyStepOpen",
  "/copy-trading/strategy-description/?name=copyStepOpen&confirmation=true",
  "/copy-trading/dashboard/",
];

export function useNavigate() {
  const router = useRouter();
  return async function navigate(path: number) {
    const lnk = stepsPages[path];
    if (!lnk) return;
    router.push(lnk);
    await sleep(300);
  };
}

let isStarted = false;
let client: TourGuideClient | null = null;

export async function startTour() {
  if (typeof document === "undefined") {
    return;
  }
  if (isStarted) return;
  isStarted = true;
  const { initializeTourGuide } = await import("./lib");
  client = initializeTourGuide();
  await client.start();
  return client;
}

interface TourContextProps {
  start(): void;
}

const TourContext = createContext<TourContextProps>({ start() {} });
export function TourProvider({ children }: PropsWithChildren) {
  const [tg, setTG] = useState<TourGuideClient>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!tg) return;
    tg.onBeforeStepChange(() => {
      return navigate(client.activeStep + 1);
    });
  }, [tg]);

  async function start() {
    setTG(await startTour());
  }
  return <TourContext.Provider value={{ start }}>{children}</TourContext.Provider>;
}

export function useTour() {
  return useContext(TourContext);
}
