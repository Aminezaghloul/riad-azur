import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/data/site";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-sand-100 flex items-center justify-center px-6 py-24 text-center">
      <div className="max-w-md space-y-6">
        <Badge variant="terracotta">404 — Page Not Found</Badge>
        <h1 className="font-serif text-4xl sm:text-5xl text-obsidian-900 font-normal">
          Page Not Found
        </h1>
        <p className="text-taupe-600 text-xs sm:text-sm font-sans font-light leading-relaxed">
          The page or room you are searching for does not exist or has moved. Return to {siteConfig.name} home to explore accommodations.
        </p>
        <div className="pt-4">
          <Link href="/">
            <Button variant="primary">Return to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
