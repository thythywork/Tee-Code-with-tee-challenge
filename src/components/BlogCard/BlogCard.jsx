export default function BlogCard({ data }) {
  return (
    <div className="w-full h-full flex flex-col items-center">
      {data.map((card, index) => (
        <div key={index} className="md:grid md:grid-cols-8 flex flex-col items-center w-full my-4">
          <div
            className={`md:col-start-1 md:col-span-2 flex md:flex-col items-center`}
            style={{ backgroundImage: `url(${card.background})` }}
          >
            <div className="flex flex-row items-center">
              <img src={card.mainPic} alt="Main Pic" className="w-5/6" />
            </div>
          </div>
          <div className="col-end-9 col-span-6 p-4">
            <div className="category grid grid-cols-6 mb-2">
              <h3 className="col-start-1 col-span-2 text-gray-600">{card.category}</h3>
              <span className="col-end-7 col-span-2 text-right text-gray-600">{card.time}</span>
            </div>
            <h1 className="text-xl font-bold mb-2">{card.title}</h1>
            <p className="mb-4 text-gray-600">{card.desc}</p>
            <div className="author grid grid-cols-8 flex items-center">
              <div className="col-start-1 col-span-4 flex flex-row items-center">
              <img src={card.avatar} alt="Author Avatar" className="w-10 h-10 rounded-full mr-4" />
              <p className="text-blue-500 font-bold">{card.author}</p>
              </div>
              <span className="col-end-9 col-span-2 text-right text-blue-500 cursor-pointer">Read more &#8594;</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
