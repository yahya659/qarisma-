export default function Hero_Welcome() {
  const stats = [
    { label: "Total Games", value: "15" },
    { label: "Downloads", value: "5" },
    { label: "Total Revenue", value: "15" },
    { label: "followers", value: "15" },
  ];

  return (
    <>
      <div className="text-center mb-12 text-white">
        <p className="text-[40px] font-bold">welcome to your</p>
        <h1 className="text-[#f472b6] text-[64px] font-black mb-4">
          world of Gaming
        </h1>
        <p className="text-[40px] font-bold opacity-90">
          Create & share your games with us
        </p>
      </div>
    </>
  );
}
