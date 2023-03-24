import { test, expect, describe } from "vitest";
import About from "@/views/About.vue";
//will convert components options into constructor function
//and creates an instance out of the function and mount instance
//import { mount } from "@vue/test-utils";

//limits number of child components it will have
import { shallowMount } from "@vue/test-utils";
describe("About.vue", () => {
  test("renders inner text", () => {
    const wrapper = shallowMount(About);

    expect(wrapper.text()).toContain("about");
  });
});
