import { createFileRoute } from "@tanstack/react-router";
import { SpaceLanding } from "@/components/SpaceLanding";

export const Route = createFileRoute("/")({
  component: SpaceLanding,
  head: () => ({
    meta: [
      { title: "Aeon — Venture Past Our Sky" },
      { name: "description", content: "Cinematic deep-space voyages. Pioneering vessels and breakthrough engineering bringing the universe within reach." },
      { property: "og:title", content: "Aeon — Venture Past Our Sky" },
      { property: "og:description", content: "Cinematic deep-space voyages and breakthrough engineering." },
    ],
  }),
});
