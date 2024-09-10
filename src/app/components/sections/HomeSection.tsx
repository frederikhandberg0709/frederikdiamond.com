export default function HomeSection() {
  return (
    <div className="flex justify-center py-[200px] w-full z-10">
      <div className="flex w-[90%] flex-col md:flex-row md:max-w-[800px] md:justify-center gap-[50px]">
        <div>
          <div className="flex items-center gap-[20px] relative">
            <span className="font-black text-[25px] opacity-50 text-stroke-1 text-stroke-white text-fill-black absolute max-[924px]:bottom-[70px] min-[925px]:left-[-50px]">
              01
            </span>
            <h1 className="font-montserrat text-[50px] font-black leading-[70px]">
              PRIVACY.
            </h1>
          </div>

          <h1 className="font-montserrat text-[50px] font-black leading-[70px]">
            FREEDOM.
            <br />
            ANONYMITY.
          </h1>
        </div>
        <div className="flex flex-col gap-[15px] mt-[50px] text-[16px]">
          <p className="font-semibold">I believe privacy is a human right.</p>
          <div className="flex flex-col gap-[15px] opacity-80">
            <p>
              Without the freedom to use technology that empowers anonymity, we
              don’t have any privacy.
            </p>
            <p>
              We see laws being proposed and passed that are in direct conflict
              with the right to privacy.
            </p>
            <p>
              Law enforcement in my home country, Denmark, is looking to
              implement video surveillance with facial recognition technology.
            </p>
            <p>
              Governments around the world are at war with our rights to
              privacy. We must not let them win! Otherwise, we risk being on a
              path towards a tyrannical state, from which reversing course will
              not be easy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
