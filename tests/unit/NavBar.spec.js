import { mount } from "@vue/test-utils";
import NavBar from "@/components/NavBar/NavBar";

describe("Spec Navbar", function () {
  const wrapper = mount(NavBar);
  const findAllLinks = wrapper.findAll("a");

  it("mounts", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should have the navigation links", function () {
    expect(findAllLinks.at(1).text()).toBe("Home");
    expect(findAllLinks.at(2).text()).toBe("About");
    expect(findAllLinks.at(3).text()).toBe("Menu");
    expect(findAllLinks.at(4).text()).toBe("Cart");
  });

  it("should have the right path links", function () {
    expect(findAllLinks.at(1).attributes("href")).toBe("/");
    expect(findAllLinks.at(2).attributes("href")).toBe("/about");
    expect(findAllLinks.at(3).attributes("href")).toBe("/menu");
    expect(findAllLinks.at(4).attributes("href")).toBe("/cart");
  });
});
