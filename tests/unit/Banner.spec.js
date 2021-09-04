import { mount } from "@vue/test-utils";
import Banner from "@/components/Banner/Banner";

describe("Spec Banner", function () {
  it("mounts", () => {
    const wrapper = mount(Banner);
    expect(wrapper).toBeTruthy();
  });
});
