import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/design-services")({
  staticData: { sitemap: false },
  beforeLoad: () => {
    throw redirect({ to: "/home-inspection" });
  },
  component: () => null,
});
