import { Download } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute z-50 top-0 left-0 right-0 w-full container mx-auto py-6 px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/logo_dark.svg" height={30} width={30} />
        <h1 className="text-2xl font-bold">Pixelix</h1>
      </div>
      <nav className="hidden md:flex gap-6">
        <Link
          href="#features"
          className="font-medium hover:text-lime-900 transition-colors"
        >
          Features
        </Link>
        <Link
          href="#download"
          className="font-medium hover:text-lime-900 transition-colors"
        >
          Download
        </Link>
      </nav>
      <div>
        <Link href="https://play.google.com/store/apps/details?id=com.daniebeler.pfpixelix" className="bg-black text-white hover:bg-lime-900 border-none rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex items-center px-4 py-2">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Link>
      </div>
    </header>
  );
}
