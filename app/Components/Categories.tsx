 

const categories = [
  {
    title: "Handbags",
    description: "Iconic designs that define luxury",
    link: "#",
  },
  {
    title: "Leather Goods",
    description: "Crafted with precision and care",
    link: "#",
  },
  {
    title: "Accessories",
    description: "The perfect finishing touch",
    link: "#",
  },
];

export const Categories = () => {
  return (
    <section className="py-24 px-6 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
            Explore Our World
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="text-center p-6 border border-gray-300 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="font-serif text-3xl mb-4">{category.title}</h3>
              <p className="font-sans text-muted-foreground mb-6">
                {category.description}
              </p>
              <button
                className="inline-block mt-4 px-6 py-2 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300"
              >
                Discover
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
