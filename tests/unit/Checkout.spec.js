import { mount } from "@vue/test-utils";
import Checkout from "@/components/Checkout/Checkout";

describe("Spec Checkout", function () {
  it("mounts", () => {
    const wrapper = mount(Checkout);
    expect(wrapper).toBeTruthy();
  });
});
