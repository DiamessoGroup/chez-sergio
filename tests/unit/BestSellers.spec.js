import { mount } from "@vue/test-utils";
import Bestsellers from "@/components/BestSellers/BestSellers";

describe("Spec Bestsellers", function () {
  it("mounts", () => {
    const wrapper = mount(Bestsellers);
    expect(wrapper).toBeTruthy();
  });
});
