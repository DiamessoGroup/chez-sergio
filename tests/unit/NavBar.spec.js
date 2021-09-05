import { mount } from "@vue/test-utils";
import NavBar from "@/components/NavBar/NavBar";

describe("Spec Navbar", function () {
  it("mounts", () => {
    const wrapper = mount(NavBar);
    expect(wrapper).toBeTruthy();
  });
});
