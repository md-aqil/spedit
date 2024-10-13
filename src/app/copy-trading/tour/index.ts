import { useRouter } from "next/navigation";
import { sleep } from "./util";
import type { TourGuideClient } from "@sjmc11/tourguidejs";

export const stepsPages = ["/copy-trading/leader-board/", "/copy-trading/strategy-description/", "copy-trading/strategy-description/?name=copyStepOpen", "copy-trading/dashboard/"];

export function useNavigate() {
  const router = useRouter();
  return async function navigate(path: number) {
    router.push(stepsPages[path]);
    await sleep(1000);
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
  return client.start();
}
