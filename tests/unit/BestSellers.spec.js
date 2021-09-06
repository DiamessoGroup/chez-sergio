import { mount } from "@vue/test-utils";
import Bestsellers from "@/components/BestSellers/BestSellers";

describe("Spec Bestsellers", function () {
  it("mounts", () => {
    const wrapper = mount(Bestsellers);
    expect(wrapper).toBeTruthy();
  });

  test('should have subtitle "Our Best Sellers"', function () {
    const wrapper = mount(Bestsellers);
    expect(wrapper.find("h2").text()).toMatch(/Our Best Sellers/);
  });

  test("products should have Parmesana Pizza info", function () {
    const expected = {
      id: 1,
      name: "La Parmesana",
      price: 35,
      description: "Our classic pizza with secret recipe tomato sauce, hand sliced parmesan and garnish of basil.",
      image: "/pizzas/parmesana-pizza.jpg",
    };
    const wrapper = mount(Bestsellers);
    //expect(wrapper.vm.products).toEqual(expect.arrayContaining(expected));
    expect(wrapper.vm.products).toContainEqual(expected);
  });

  test("Pizza item in products should have the right properties", function () {
    const wrapper = mount(Bestsellers);
    expect(wrapper.vm.products[0]).toHaveProperty("id");
    expect(wrapper.vm.products[0]).toHaveProperty("name");
    expect(wrapper.vm.products[0]).toHaveProperty("price");
    expect(wrapper.vm.products[0]).toHaveProperty("description");
    expect(wrapper.vm.products[0]).toHaveProperty("image");
  });

  test("First Pizza item is displayed on page", function () {
    const wrapper = mount(Bestsellers);
    const product_list = wrapper.findAll("div.products");
    const first_product = product_list.at(0);
    expect(first_product.find("p.name").text()).toMatch("La Parmesana");
    expect(first_product.find("p.price").text()).toMatch(/35/);
    expect(first_product.find("p.description").text()).toMatch(/hand sliced parmesan/);
  });
});
