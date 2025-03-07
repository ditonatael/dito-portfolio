export default function Navbar() {
  const menus = [
    {
      section: "About",
      id: "#about",
    },
    {
      section: "Project",
      id: "#project",
    },
    {
      section: "Experience",
      id: "#experience",
    },
  ];
  return (
    <div className="h-16 rounded-b-3xl bg-base-light-gray sticky top-0 z-20 shadow-2xl px-7">
      <div className="h-full container mx-auto flex items-center justify-center md:justify-between">
        <div className="hidden md:block font-semibold text-[#FAF3E0] text-lg">
          Handito Natael - Portfolio
        </div>
        <div className="flex items-center gap-4 text-white font-medium">
          {menus.map((menu, index) => {
            return (
              <span key={index}>
                <a href={menu.id}>{menu.section}</a>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
