export default function ProductCard({ imageUrl, title, description, price }) {
  return (
    <div className="max-w-sm mx-auto overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      </div>
      <div className="p-4 bg-white">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
