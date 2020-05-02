import { shallowMount } from '@vue/test-utils'
import HelloTile from '@/components/Tiles/HelloTile.vue'

describe('HelloTile.vue', () => {
    it('renders props.name when passed', () => {
        const name = 'Daan'
        const wrapper = shallowMount(HelloTile, {
            propsData: { name }
        })
        expect(wrapper.text()).toMatch(name)
    })
})
