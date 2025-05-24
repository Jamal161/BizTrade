export async function GET(request, { params }) {
  // Mock product data
  const mockProduct = {
    id: parseInt(params.id),
    title: "Sample Product",
    description: "This is a sample product description",
    price: 99.99,
    images: [
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500"
    ],
    category: "Electronics",
    brand: "Sample Brand",
    rating: 4.5,
    stock: 100
  };

  return Response.json(mockProduct);
} 