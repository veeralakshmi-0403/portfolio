import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  return null;
}
