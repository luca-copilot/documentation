import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/doc-public/blog',
    component: ComponentCreator('/doc-public/blog', 'bea'),
    exact: true
  },
  {
    path: '/doc-public/blog/archive',
    component: ComponentCreator('/doc-public/blog/archive', 'efe'),
    exact: true
  },
  {
    path: '/doc-public/blog/first-blog-post',
    component: ComponentCreator('/doc-public/blog/first-blog-post', 'b84'),
    exact: true
  },
  {
    path: '/doc-public/blog/long-blog-post',
    component: ComponentCreator('/doc-public/blog/long-blog-post', '383'),
    exact: true
  },
  {
    path: '/doc-public/blog/mdx-blog-post',
    component: ComponentCreator('/doc-public/blog/mdx-blog-post', 'ce9'),
    exact: true
  },
  {
    path: '/doc-public/blog/tags',
    component: ComponentCreator('/doc-public/blog/tags', '127'),
    exact: true
  },
  {
    path: '/doc-public/blog/tags/docusaurus',
    component: ComponentCreator('/doc-public/blog/tags/docusaurus', '498'),
    exact: true
  },
  {
    path: '/doc-public/blog/tags/facebook',
    component: ComponentCreator('/doc-public/blog/tags/facebook', '87e'),
    exact: true
  },
  {
    path: '/doc-public/blog/tags/hello',
    component: ComponentCreator('/doc-public/blog/tags/hello', 'c76'),
    exact: true
  },
  {
    path: '/doc-public/blog/tags/hola',
    component: ComponentCreator('/doc-public/blog/tags/hola', '9f1'),
    exact: true
  },
  {
    path: '/doc-public/blog/welcome',
    component: ComponentCreator('/doc-public/blog/welcome', '004'),
    exact: true
  },
  {
    path: '/doc-public/markdown-page',
    component: ComponentCreator('/doc-public/markdown-page', 'c31'),
    exact: true
  },
  {
    path: '/doc-public/docs',
    component: ComponentCreator('/doc-public/docs', '13f'),
    routes: [
      {
        path: '/doc-public/docs',
        component: ComponentCreator('/doc-public/docs', 'ee3'),
        routes: [
          {
            path: '/doc-public/docs',
            component: ComponentCreator('/doc-public/docs', '0e3'),
            routes: [
              {
                path: '/doc-public/docs/automacoes/como-criar-agrupamento-de-produtos',
                component: ComponentCreator('/doc-public/docs/automacoes/como-criar-agrupamento-de-produtos', '544'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc-public/docs/automacoes/como-criar-estrutura-de-cores',
                component: ComponentCreator('/doc-public/docs/automacoes/como-criar-estrutura-de-cores', '19b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc-public/docs/automacoes/como-criar-kits-de-produto',
                component: ComponentCreator('/doc-public/docs/automacoes/como-criar-kits-de-produto', '5da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc-public/docs/category/automações',
                component: ComponentCreator('/doc-public/docs/category/automações', '216'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc-public/docs/category/guias-avançados',
                component: ComponentCreator('/doc-public/docs/category/guias-avançados', '33a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc-public/docs/category/primeiros-passos',
                component: ComponentCreator('/doc-public/docs/category/primeiros-passos', '6a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc-public/docs/guias-avancados/boas-praticas-css',
                component: ComponentCreator('/doc-public/docs/guias-avancados/boas-praticas-css', '1c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc-public/docs/intro',
                component: ComponentCreator('/doc-public/docs/intro', '0e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc-public/docs/primeiros-passos/como-instalar-o-luca',
                component: ComponentCreator('/doc-public/docs/primeiros-passos/como-instalar-o-luca', 'a92'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/doc-public/',
    component: ComponentCreator('/doc-public/', 'a96'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
