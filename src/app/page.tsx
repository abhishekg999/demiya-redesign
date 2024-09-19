import Image from "next/image";
import Link from "next/link";
import { InstagramViewer } from "./_components/InstagramViewer";

export default function Home() {
  return (
    <main className="flex flex-col justify-center align-middle text-center">

      <section className="pt-8 m-auto">
        <Image src="/hamburgCurry.jpg" alt="Hamburg Curry" width={800} height={450} className="m-auto" />
      </section>

      {/* Announcements */}
      <section className="m-4 flex align-middle justify-center">
        <div className="p-6 border-2 rounded-lg w-fit">
          <h2 className="text-3xl p-6 font-bold text-red-700">Announcements</h2>
          <ul className="text-lg lg:text-xl">
            <li className="p-1">Our Fremont location is now open! Online orders are available under {" "}
              <Link href="/order" className="text-blue-600 hover:underline" >Orders/Locations</Link>.
            </li>
            <li>All locations are now open on Wednesdays!</li>
          </ul>
        </div>
      </section>

      <section className="p-4">
        <h2>The most up-to-date information is available on Instagram {" "}
          <a className="text-blue-600 hover:underline" href="https://www.instagram.com/demiya_inc/">@demiya_inc</a>
        </h2>

        <h1 className="text-2xl pt-6 font-bold text-red-700">Latest Post</h1>
        <InstagramViewer id="C_S_DgRvLth" />
      </section>
    </main>
  );
}
