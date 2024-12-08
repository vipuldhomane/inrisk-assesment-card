import ProductCard from "./ProductCard";

export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
      <ProductCard
        imageUrl="https://img.freepik.com/premium-photo/eco-friendly-sustainable-water-bottle-made-from-bamboo-generative-ai_601748-47389.jpg?w=740"
        title="Eco-Friendly Water Bottle"
        description="Stay hydrated with our sleek, sustainable water bottle. Perfect for your daily adventures and environmentally conscious lifestyle."
        price="$24.99"
      />
    </div>
  );
}
