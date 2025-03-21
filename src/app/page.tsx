import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-screen bg-red-500">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </main>
  );
}
