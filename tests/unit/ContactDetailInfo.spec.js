import { mount } from "@vue/test-utils";
import Contactdetailinfo from "@/components/ContactDetailInfo/ContactDetailInfo";

describe("Spec Contactdetailinfo", function () {
  it("mounts", () => {
    const wrapper = mount(Contactdetailinfo);
    expect(wrapper).toBeTruthy();
  });
});
