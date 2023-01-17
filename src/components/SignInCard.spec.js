// 測 Hellow World 有沒有包含 '現在開始' 的文字
import { shallowMount, mount } from '@vue/test-utils'
import SignInCardVue from './SignInCard.vue'
import { describe, expect, it } from 'vitest'
import vuetify from '@/plugins/vuetify'


describe("測試了 SignInCard.vue", () => {
  it('渲染屬性的訊息', () => {
    const wrapper = mount(SignInCardVue, {
      global: {
        plugins: [vuetify]
      }
    })
    expect(wrapper.text()).toMatch(/Google/)
  })
})

describe("math", () => {
  it('test count', () => {
    expect(1 + 1).toBe(2)
  })
})
