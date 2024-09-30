import { describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";
import AlertCustom from "../AlertCustom.vue";

describe('Alert', () => {
  it('is a component', () => {
    const wrapper = shallowMount(AlertCustom); 
    expect(wrapper).toBeTruthy();
  });

  describe('Close button', () => {
    it('closes when the user clicks the close button', async () => {
      const wrapper = shallowMount(AlertCustom);

      const alert = wrapper.find('[data-testid="alert"]');
      expect(alert.isVisible()).toBe(true);
      
      await alert.find('[data-testid="close"]').trigger("click");

      await wrapper.vm.$nextTick();

      expect(wrapper.find('[data-testid="alert"]').exists()).toBe(false); 
    });
  });
});
