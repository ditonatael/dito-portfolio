import Stack from "~/blocks/Components/Stack/Stack";

export default function Hero() {
  const stackImages = [
    {
      id: 1,
      img: "/assets/project/depop-mockup.webp",
    },
    {
      id: 2,
      img: "/assets/project/roomer-mockup.webp",
    },
    {
      id: 3,
      img: "/ditonatael.webp",
    },
  ];
  return (
    <div className="gap-2 flex justify-between items-center space-y-8">
      <div className="flex flex-col flex-1 space-y-5">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
          Hi, I&apos;m Dito 👋
        </h1>
        <span className="max-w-[600px] text-base md:text-xl md:text-justify">
          Proven Full Stack Web Developer with a track record of developing
          efficient and scalable applications.
        </span>
      </div>
      <Stack
        randomRotation={true}
        sensitivity={180}
        sendToBackOnClick={false}
        cardDimensions={{ width: 200, height: 200 }}
        cardsData={stackImages}
      />
    </div>
  );
}
