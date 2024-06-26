import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col text-[#101318] bg-no-repeat bg-cover bg-center bg-fixed items-center justify-between bg-gradient-to-tr from-[#D4DD46] to-[#7FB246]"
    >
      <div className="w-full">
        <div className="h-screen w-full">
          <div className="absolute p-10">
            <img src="/logo_dark.svg" alt="" className="w-8" />

            {/* <div className="">
              PIXELIX
            </div> */}
          </div>

          <div className="h-full w-full  flex items-center justify-center">
            <div className="container flex flex-col items-center">
              <h1 className="text-3xl font-bold text-center md:text-6xl">
                Where every pixel
              </h1>

              <h1 className="text-3xl font-bold text-center md:text-6xl pb-12">
                tells a story
              </h1>

              <Link href="https://play.google.com/store/apps/details?id=com.daniebeler.pfpixelix">
                <Image
                  src="/google-play-badge.png"
                  alt=""
                  width="250"
                  height="250"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-28 pb-96">
          <div className="h-full w-full  flex items-center justify-center">
            <div className="container flex flex-col items-center">
              <h1 className="text-3xl font-bold text-center md:text-6xl">
                Create your personal treasure
              </h1>

              <h1 className="text-3xl font-bold text-center md:text-6xl pb-12">
                chest with Collections
              </h1>

              <Image
                src="/collections.png"
                alt=""
                width="750"
                height="250"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-96 pt-48">
          <div className="h-full w-full  flex items-center justify-center">
            <div className="container flex flex-col items-center">
              <h1 className="text-3xl font-bold text-center md:text-6xl">
                Get inspired by the pulse
              </h1>

              <h1 className="text-3xl font-bold text-center md:text-6xl pb-12">
                of the moment
              </h1>

              <Image
                src="/trending.png"
                alt=""
                width="750"
                height="250"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>

        <section>
          <div className="p-3 text-center">
            Developed with ❤️ by{" "}
            <a href="https://daniebeler.com">
              <strong>Daniel</strong>
            </a>{" "}
            and{" "}
            <a href="https://emanuelhiebeler.me">
              <strong>Emanuel</strong>
            </a>{" "}
          </div>
        </section>
      </div>
    </main>
  );
}
