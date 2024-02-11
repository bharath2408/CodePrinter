import Code from "@/components/Code";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen flex items-center justify-center flex-col gap-6">
      <h1 className="text-4xl text-white">Code Share</h1>
      <Code />
    </main>
  );
}
