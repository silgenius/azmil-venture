import Link from "next/link";

function ProductsCTA() {
  return (
    <div
      className="text-white py-16 px-4 md:px-16 text-center"
      style={{
        backgroundImage: "url('/hrlpimg-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Need Help Choosing?
      </h2>

      <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
        Meet our experts for free advice & custom quotes
      </p>

      <Link
        href="https://wa.me/2348134936101"
        className="bg-white text-green-600 px-10 py-5 rounded-3xl text-2xl font-bold hover:bg-gray-100 transition shadow-2xl"
      >
        GET HELP HERE
      </Link>
    </div>
  );
}

export default ProductsCTA;
