import { mount } from "@vue/test-utils";
import ProductItem from "@/components/ProductItem/ProductItem";

describe("Spec Productitem", function () {
  it("mounts", () => {
    const wrapper = mount(ProductItem);
    expect(wrapper).toBeTruthy();
  });
});
