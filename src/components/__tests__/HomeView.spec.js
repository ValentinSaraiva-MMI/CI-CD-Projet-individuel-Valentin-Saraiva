import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import HomeView from '@/views/HomeView.vue'

describe('Test du champ de saisie', () => {
  it('devrait afficher le champ de saisie', () => {
    const wrapper = mount(HomeView)
    const input = wrapper.find('input#name')
    expect(input.exists()).toBe(true)
  })

  it('devrait avoir la contrainte de longueur minimale de 4 caractères', () => {
    const wrapper = mount(HomeView)
    const input = wrapper.find('input#name')
    expect(input.attributes('minlength')).toBe('4')
  })

  it('devrait avoir la contrainte de longueur maximale de 8 caractères', () => {
    const wrapper = mount(HomeView)
    const input = wrapper.find('input#name')
    expect(input.attributes('maxlength')).toBe('8')
  })

  it('devrait accepter un nom de longueur valide (5 caractères)', async () => {
    const wrapper = mount(HomeView)
    const input = wrapper.find('input#name')
    await input.setValue('Valid')
    expect(input.element.value).toBe('Valid')
    expect(input.element.validity.valid).toBe(true)
  })
})
