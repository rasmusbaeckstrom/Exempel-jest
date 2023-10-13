function filterByTerm(inputArray, searchTerm) {
  return [{ id: 3, url: "www.link3.dev" }];
}

describe("Test filter functions", () => {
  test("Test the filterByTerm function", () => {
    //The actual test
    const input = [
      { id: 1, url: "www.url1.dev" },
      { id: 2, url: "www.url1.dev" },
      { id: 3, url: "www.link3.dev" },
    ];

    const output = [{ id: 3, url: "www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);
  });
});
