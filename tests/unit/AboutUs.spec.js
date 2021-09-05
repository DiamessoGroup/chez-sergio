import { mount } from "@vue/test-utils";
import AboutUs from "@/components/AboutUs/AboutUs";

describe("Spec AboutUs", function () {
  it("mounts", () => {
    const wrapper = mount(AboutUs);
    expect(wrapper).toBeTruthy();
  });
});
