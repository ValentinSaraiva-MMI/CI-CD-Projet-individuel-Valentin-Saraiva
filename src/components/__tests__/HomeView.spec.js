import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import HomeView from '@/views/HomeView.vue'

/**
 * Test suite for the HomeView component.
 * @test {HomeView}
 */
describe('Test du champ de saisie', () => {
  /**
   * Test if the input field is displayed.
   */
  it('devrait afficher le champ de saisie', () => {
    const wrapper = mount(HomeView)
    const input = wrapper.find('input#name')
    expect(input.exists()).toBe(true)
  })

  /**
   * Test if the input field has a minimum length constraint of 4 characters.
   */
  it('devrait avoir la contrainte de longueur minimale de 4 caractères', () => {
    const wrapper = mount(HomeView)
    const input = wrapper.find('input#name')
    expect(input.attributes('minlength')).toBe('4')
  })

  /**
   * Test if the input field has a maximum length constraint of 8 characters.
   */
  it('devrait avoir la contrainte de longueur maximale de 8 caractères', () => {
    const wrapper = mount(HomeView)
    const input = wrapper.find('input#name')
    expect(input.attributes('maxlength')).toBe('8')
  })

  /**
   * Test if the input field accepts a valid name of 5 characters.
   */
  it('devrait accepter un nom de longueur valide (5 caractères)', async () => {
    const wrapper = mount(HomeView)
    const input = wrapper.find('input#name')
    await input.setValue('Valid')
    expect(input.element.value).toBe('Valid')
    expect(input.element.validity.valid).toBe(true)
  })
})
