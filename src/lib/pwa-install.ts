import { useSyncExternalStore } from "react";

let storedEvent: any = null;
let initialized = false;
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((fn) => fn());
}

export function setInstallEvent(evt: any) {
  storedEvent = evt;
  notify();
}

export function getInstallEvent() {
  return storedEvent;
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot() {
  return storedEvent;
}

function getServerSnapshot() {
  return null;
}

export function initPwaInstall() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  window.addEventListener("beforeinstallprompt", (e: Event) => {
    e.preventDefault();
    setInstallEvent(e);
  });
  window.addEventListener("appinstalled", () => {
    setInstallEvent(null);
  });
}

export function useInstallEvent() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function canPromptInstall() {
  return !!storedEvent;
}

export function isIOSDevice() {
  if (typeof navigator === "undefined") return false;
  return /iphone|ipad|ipod/i.test(navigator.userAgent) && !(window as any).MSStream;
}

export function isStandalonePWA() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone === true;
}

export async function triggerInstall(): Promise<"accepted" | "dismissed" | "ios" | "unavailable"> {
  if (isStandalonePWA()) return "unavailable";
  if (!storedEvent) {
    if (isIOSDevice()) {
      window.dispatchEvent(new CustomEvent("pwa-show-ios-hint"));
      return "ios";
    }
    window.dispatchEvent(new CustomEvent("pwa-show-ios-hint"));
    return "unavailable";
  }
  try {
    storedEvent.prompt();
    const choice = await storedEvent.userChoice;
    const outcome = choice?.outcome === "accepted" ? "accepted" : "dismissed";
    if (outcome === "accepted") setInstallEvent(null);
    return outcome;
  } catch {
    return "dismissed";
  }
}
