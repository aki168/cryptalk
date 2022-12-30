// 測 Hellow World 有沒有包含 '現在開始' 的文字
import { shollowMount, mount } from '@vue/test-utils'
import HelloWord from "@/components/HelloWorld.vue"
import { describe, expect, it } from 'vitest'
import vuetify from '@/plugins/vuetify'


describe("測試了 HelloWorld.vue", () => {
  it('渲染屬性的訊息', () => {
    const wrapper = mount(HelloWord, {
      global: {
        plugins: [vuetify]
      }
    })

    // console.log(wrapper.text()) // 印出元件內的所有文字
    expect(wrapper.text()).toMatch("現在開始")
  })
})

describe("math", () => {
  it('test count', () => {
    expect(1 + 1).toBe(2)
  })
})
