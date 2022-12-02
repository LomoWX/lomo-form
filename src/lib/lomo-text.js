export default {
  name: "lomo-text",
  functional: true,
  props: {
    value: {
      default: "",
    },
    valueFormat: Function,
  },
  render(h, context) {
    const { valueFormat, value } = context.props;
    return h("span", { class: "lomo-text", ...context.data }, valueFormat ? valueFormat(value) : value);
  },
};
