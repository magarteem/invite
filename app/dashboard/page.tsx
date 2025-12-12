"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 flex items-center justify-center">
        <div className="text-green-600 text-xl">Загрузка...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const cards = [
    {
      id: 1,
      title: "Японская Шаурма",
      image:
        "https://www.russianfood.com/dycontent/images_upl/622/big_621978.jpg",
      link: "https://grenada.by/product/176-shaurma-yaponskaya",
    },
    {
      id: 2,
      title: "Шаурма",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Роллы",
      image:
        "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&h=600&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl">🌿</div>
        <div className="absolute top-20 right-20 text-7xl">☀️</div>
        <div className="absolute bottom-10 left-1/4 text-6xl">🦋</div>
        <div className="absolute bottom-20 right-10 text-8xl">🌱</div>
      </div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-green-800">
            🌿 Природа
          </h1>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all shadow-lg hover:shadow-xl font-medium w-full sm:w-auto"
          >
            Выйти
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center font-bold text-green-700 text-2xl md:text-3xl shadow-lg">
                  {card.id}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-2">
                  {card.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
