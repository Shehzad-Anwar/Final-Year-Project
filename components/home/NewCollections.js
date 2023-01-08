export default function Example() {
  // Products Object
  const products = [
    {
      id: 1,
      name: "Women Cape Coat",
      price: "$32",
      href: "#",
      imageSrc: "Mens_Shawl_1800x1800.jpg",
      imageAlt: "Model wearing women's black cotton crewneck tee.",
    },
    {
      id: 1,
      name: "Women Cape Coat",
      price: "$32",
      href: "#",
      imageSrc: "/pexels-madison-inouye-1937336.jpg",
      imageAlt: "Model wearing women's black cotton crewneck tee.",
    },
    {
      id: 1,
      name: "Women Cape Coat",
      price: "$32",
      href: "#",
      imageSrc: "scarves-g50690e937_1920.jpg",
      imageAlt: "Model wearing women's black cotton crewneck tee.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            New Collection
          </h2>
          <a
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse New Collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="h-96 w-full overflow-hidden rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-3 sm:h-auto">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all collections
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
