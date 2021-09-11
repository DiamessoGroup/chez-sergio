import { mount } from "@vue/test-utils";
import Cart from "@/components/Cart/Cart";

describe("Spec Cart", function () {
  it("mounts", () => {
    const wrapper = mount(Cart);
    expect(wrapper).toBeTruthy();
  });
});
