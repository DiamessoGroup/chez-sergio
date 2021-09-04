import { mount } from "@vue/test-utils";
import Aboutchezsergio from "@/components/AboutChezSergio/AboutChezSergio";

describe("Spec Aboutchezsergio", function () {
  it("mounts", () => {
    const wrapper = mount(Aboutchezsergio);
    expect(wrapper).toBeTruthy();
  });
});
