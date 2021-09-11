import { mount } from "@vue/test-utils";
import Googlemaps from "@/components/GoogleMaps/GoogleMaps";

describe("Spec Googlemaps", function () {
  it("mounts", () => {
    const wrapper = mount(Googlemaps);
    expect(wrapper).toBeTruthy();
  });
});
