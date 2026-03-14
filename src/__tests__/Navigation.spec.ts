import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Navigation from "@/components/Navigation.vue";
import type { RouteRecordRaw } from "vue-router";

describe("Navigation Component", () => {
  const mockRoutes: RouteRecordRaw[] = [
    { path: "/home", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
    { path: "/hidden", name: undefined },
  ];

  it("renders a route link if the route name exists", () => {
    const wrapper = mount(Navigation, {
      props: {
        routes: mockRoutes,
      },
      global: {
        stubs: {
          RouterLink: {
            template: '<a :href="to"><slot /></a>',
            props: ["to"],
          },
        },
      },
    });

    expect(wrapper.text()).toContain("About");
    expect(wrapper.text()).toContain("Contact");
    expect(wrapper.text()).not.toContain("undefined");
    expect(wrapper.text()).not.toContain("hidden");
  });

  it("does not render nav if routes array is empty", () => {
    const wrapper = mount(Navigation, {
      props: {
        routes: [],
      },
    });
    expect(wrapper.find("nav").exists()).toBe(false);
  });
});
