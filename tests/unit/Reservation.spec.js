import { mount } from "@vue/test-utils";
import Reservation from "@/components/Catering/Catering";

describe("Spec Reservation", function () {
  it("mounts", () => {
    const wrapper = mount(Reservation);
    expect(wrapper).toBeTruthy();
  });
});
