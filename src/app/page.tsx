import { AllProducts } from "@/components/all-products";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Home() {

  return (

    <div
      className="min-h-screen bg-zinc-100 dark:bg-zinc-900"
    >
      <div
        className="pt-24 drop-shadow-2xl flex flex-col items-center"
      >
        <div className="w-1/2 p-2 relative">
          <Input
            className="p-1 bg-transparent border-2 border-indigo-400 focus:border-none focus:bg-zinc-50"
            placeholder="o que está procurando?"
          />
          <Search
            className="absolute top-4 right-4 text-zinc-400"
            size={24}
          />
        </div>

        <AllProducts />
      </div>
    </div>
  );
}
