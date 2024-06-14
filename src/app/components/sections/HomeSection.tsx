export default function HomeSection() {
  return (
    <div>
      <div className="flex justify-center py-[200px] w-full z-10">
        <div className="flex w-[90%] flex-col md:flex-row md:max-w-[800px] md:justify-center gap-[50px]">
          <h1 className="font-montserrat text-[50px] font-black leading-[70px]">
            PRIVACY.
            <br />
            FREEDOM.
            <br />
            ANONYMITY.
          </h1>
          <div className="flex flex-col gap-[15px] mt-[50px] text-[16px]">
            <p className="font-semibold">I believe privacy is a human right.</p>
            <div className="flex flex-col gap-[15px] opacity-80">
              <p>
                Without the freedom to use technology that empowers anonymity,
                we don’t have any privacy.
              </p>
              <p>
                We see laws being proposed and passed that are in direct
                conflict with the right to privacy.
              </p>
              <p>
                For example, the British government has proposed a bill that
                would make end-to-end encrypted messaging illegal.
              </p>
              <p>
                Governments around the world are at war with our rights to
                privacy. We must not let them win! Otherwise, we risk being on a
                path towards a tyrannical state, from which reversing course
                will not be easy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
