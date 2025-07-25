import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section
        className="relative bg-cover bg-center h-[700px]"
        style={{
          backgroundImage:
            "url(/main.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
          <h1
            className="text-6xl font-extrabold tracking-tight"
            style={{ fontFamily: "GT Ultra, serif" }}
          >
            The hair youve always dreamed of
          </h1>
          <a
            href="#"
            className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
          >
            Book an Appointment
          </a>
        </div>
      </section>
    </main>
  );
}
