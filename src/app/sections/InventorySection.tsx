export default function InventorySection() {
  return (
    <div>
      <div className="flex items-center gap-[20px] relative">
        <span className="absolute z-[1] font-black text-[25px] text-black max-[924px]:bottom-[150px] min-[925px]:left-[-50px]">
          04
        </span>
        <span className="font-black text-[25px] opacity-50 text-stroke-2 text-stroke-white text-fill-black absolute max-[924px]:bottom-[150px] min-[925px]:left-[-50px]">
          04
        </span>
        <h1 className="font-bold text-[50px]">MY INVENTORY</h1>
      </div>
      <p>
        <b>I like minimalism.</b> I like to only own the things I care about and
        nothing more. Most things are just distractions and should be avoided. I
        keep the things that really brings me joy.
        <br />
        <br />
        I’ve made this catalogue that includes almost every item I own.
      </p>
      <p className="text-warning font-semibold mt-[20px]">
        🚧 THIS SECTION IS CURRENTLY UNDER CONSTRUCTION 🚧
      </p>
    </div>
  );
}
