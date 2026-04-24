export default function Visual() {
  return (
    <>
      {" "}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F178B6A3]/64 p-6 rounded-lg">

  {/* Visual */}
  <div>
    <h2 className="text-[#5B65E9] text-[40px] font-black mb-8">
      Visual
    </h2>

    <div className="w-full h-60 rounded-lg overflow-hidden border-2 border-transparent cursor-pointer">
      <img
        src="/images/entertainment/entertainment9.png"
        alt="Cover placeholder"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Screenshots */}
  <div>
    <p className="mb-10 text-[32px]">Screenshots</p>

    <div className="w-full h-60 rounded-lg bg-[#b68ed5] hover:bg-[#c298e3] transition cursor-pointer flex items-center justify-center">
      {/* Empty block */}
    </div>
  </div>

</div>
    </>
  );
}
