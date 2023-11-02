import UidsStub from "../../components/stub/Stub.vue";

export default {
  title: 'Not implemented/Stat',
  // https://github.com/storybookjs/storybook/issues/14442#issuecomment-1089165153
  parameters: { options: { showPanel: false } },
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { UidsStub },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <uids-stub
      path="stat--default.html"
      title="Stat"
    >
    </uids-stub>
  `,
});

export const Stat = Template.bind({})
