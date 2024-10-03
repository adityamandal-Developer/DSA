const products1 = [
    { id: 1, name: "Laptop", price: 1000, category: "Electronics", discount: 10 },
    { id: 2, name: "Shoes", price: 200, category: "Fashion", discount: 0 },
    { id: 1, name: "Laptop", price: 2000, category: "Electronics", discount: 10 },
    {
        id: 3,
        name: "Smartphone",
        price: 800,
        category: "Electronics",
        discount: 5,
    },
    { id: 4, name: "T-shirt", price: 50, category: "Fashion" },
    { id: 5, name: "Fridge", price: 1200, category: "Appliances", discount: 20 },
];

function getFilteredProducts(
    products,
    minPrice,
    maxPrice,
    categoryFilter = null,
    sortBy = "price"
) {
    return products
        .map((product) => {
            // Apply the discount to the price (if any)
            const discountedPrice = product.discount
                ? product.price - (product.price * product.discount) / 100
                : product.price;

            return {
                id: product.id,
                name: product.name,
                price: discountedPrice,
                category: product.category,
            };
        })
        .filter((product) => {
            // Filter by price range
            const withinPriceRange =
                product.price >= minPrice && product.price <= maxPrice;

            // Filter by category if a categoryFilter is provided
            const matchesCategory = categoryFilter
                ? product.category === categoryFilter
                : true;
            if (minPrice && maxPrice) {
                return withinPriceRange && matchesCategory;
            } else return matchesCategory;
        })
        .sort((a, b) => {
            // Sort by the given sortBy criteria (price or name)
            if (sortBy === "price") {
                return a.price - b.price;
            } else if (sortBy === "name") {
                return a.name.localeCompare(b.name);
            }
        });
}
console.log(getFilteredProducts(products1, 100, 500, null, "price"))



function runTest(testName, actualOutput, expectedOutput) {
    const passed =
        JSON.stringify(actualOutput) === JSON.stringify(expectedOutput);

    console.log(`${testName}: ${passed ? "PASSED" : "FAILED"}`);
}

const products = [
    { id: 1, name: "Laptop", price: 900, category: "Electronics", discount: 10 },
    { id: 2, name: "Shoes", price: 200, category: "Fashion" },
    {
        id: 3,
        name: "Smartphone",
        price: 760,
        category: "Electronics",
        discount: 5,
    },
    { id: 4, name: "T-shirt", price: 50, category: "Fashion" },
    { id: 5, name: "Fridge", price: 960, category: "Appliances" },
];


runTest("Test Case 1", getFilteredProducts(products, 100, 500, null, "price"), [
    { id: 2, name: "Shoes", price: 200, category: "Fashion" },
]);


// Additional test products
const testProducts1 = [
    { id: 6, name: "Table", price: 100, category: "Furniture", discount: 100 },
];
const testProducts2 = [
    { id: 7, name: "Chair", price: 150, category: "Furniture" },
];

// Test cases
runTest("Test Case 1", getFilteredProducts(products, 100, 500, null, "price"), [
    { id: 2, name: "Shoes", price: 200, category: "Fashion" },
]);

runTest(
    "Test Case 2",
    getFilteredProducts(products, 100, 1000, "Electronics", "price"),
    [
        { id: 3, name: "Smartphone", price: 722, category: "Electronics" },
        { id: 1, name: "Laptop", price: 810, category: "Electronics" },
    ]
);

runTest(
    "Test Case 3",
    getFilteredProducts(products, 100, 1000, "Fashion", "name"),
    [{ id: 2, name: "Shoes", price: 200, category: "Fashion" }]
);

runTest(
    "Test Case 4",
    getFilteredProducts(products, 100, 500, "Fashion", "price"),
    [{ id: 2, name: "Shoes", price: 200, category: "Fashion" }]
);

runTest(
    "Test Case 5",
    getFilteredProducts(products, 500, 2000, null, "price"),
    [
        { id: 3, name: "Smartphone", price: 722, category: "Electronics" },
        { id: 1, name: "Laptop", price: 810, category: "Electronics" },
        { id: 5, name: "Fridge", price: 960, category: "Appliances" },
    ]
);

runTest(
    "Test Case 6",
    getFilteredProducts(products, 2000, 5000, null, "price"),
    []
);

runTest(
    "Test Case 7",
    getFilteredProducts(products, 100, 1000, "Books", "price"),
    []
);

runTest("Test Case 8", getFilteredProducts(products, 0, 2000, null, "price"), [
    { id: 4, name: "T-shirt", price: 50, category: "Fashion" },
    { id: 2, name: "Shoes", price: 200, category: "Fashion" },
    { id: 3, name: "Smartphone", price: 722, category: "Electronics" },
    { id: 1, name: "Laptop", price: 810, category: "Electronics" },
    { id: 5, name: "Fridge", price: 960, category: "Appliances" },
]);

runTest(
    "Test Case 9",
    getFilteredProducts(testProducts1, 50, 200, "Furniture", "price"),
    []
);

runTest(
    "Test Case 10",
    getFilteredProducts(testProducts2, 50, 200, "Furniture", "price"),
    [{ id: 7, name: "Chair", price: 150, category: "Furniture" }]
);
