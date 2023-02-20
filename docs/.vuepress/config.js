module.exports = {
  title: 'lomo-form | 使用文档',
  description: '基于 element-ui form 的二次封装加强组件',
  dest: './distdocs',
  base: '/lomo-form/',
  themeConfig: {
    updatePopup: true,
    displayAllHeaders: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/example/' },
      { text: '更新日志', link: '/log' },
      { text: 'Github', link: 'https://github.com/LomoWX/lomo-form.git' }
    ],
    sidebar: [
      {
        title: '表单组件',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/example/',
          '/example/quick-start',
          '/example/lomo-form',
          '/example/edge-cases',
        ]
      },
      {
        title: '单组件',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/component/lomo-form-layout',
          '/component/lomo-checkbox-radio',
          '/component/lomo-select',
          '/component/lomo-tree-select',
          '/component/lomo-upload',
          '/component/lomo-map-input',
          '/component/lomo-dynamic-tags',
        ]
      },
      {
        title: '其他组件',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/component/lomo-search-panel',
          '/component/lomo-form-dialog',
        ]
      },
    ],
  },
};
