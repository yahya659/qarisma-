export default function Food_trends(){
    return(
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-[560.7840576171875] h-[544.0995483398438]">
              <div className="bg-white p-4 shadow-2xl hover:rotate-0  ">
                <img 
                  src="/images/entertainment/enterainment7.png" 
                  alt="Nutritional Plate" 
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
            <div className="w-full md:w-7/12 text-left">
              <h2 className="text-[48px]  font-black text-black mb-6 leading-tight drop-shadow-sm">
                Food trends & <br /> nutritional pyramids
              </h2>
              <p className="text-white font-bold leading-relaxed mb-8 text-[20px] drop-shadow-sm">
                Understanding major global cuisines allows chefs to stay relevant in today's dynamic culinary scene. With the world becoming increasingly interconnected, diners are more adventurous and interested in trying new and niche flavors. Chefs well-versed in global cuisines can tap into this growing foodservice trend and attract a wider customer base by offering authentic and fusion dishes that showcase a blend of different culinary traditions.
              </p>
              <button className="px-10 py-3 bg-[#F178B6A3] text-[#5D5FEF] text-[36px] font-bold rounded-xl transition-colors shadow-lg shadow-pink-500/30 tracking-wide">
                Read More
              </button>
            </div>
          </div>
        </div>
    );
}