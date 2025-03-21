import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-5 bg-[#DFEBF6] px-5">
      <Image
        className="grayscale"
        src="/images/localoka-logo.png"
        alt="Localoka"
        width={100}
        height={100}
      />
      <section className="w-full text-center bg-gray-200/90 p-2.5 rounded border border-gray-500 text-gray-700">
        <h1 className="text-5xl font-semibold">404</h1>
        <p>Halaman yang anda cari tidak dapat ditemukan.</p>
      </section>
      <Link href={'/'} className="font-semibold text-white flex justify-center items-center rounded bg-primary w-full h-11">Kembali ke Beranda</Link>
    </div>
  );
}
