import { mount } from "@vue/test-utils";
import Footer from "@/components/Footer/Footer";

describe("Spec Footer", function () {
  it("mounts", () => {
    const wrapper = mount(Footer);
    expect(wrapper).toBeTruthy();
  });
});
