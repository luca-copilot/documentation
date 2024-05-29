import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentation/blog',
    component: ComponentCreator('/documentation/blog', '486'),
    exact: true
  },
  {
    path: '/documentation/blog/archive',
    component: ComponentCreator('/documentation/blog/archive', 'e26'),
    exact: true
  },
  {
    path: '/documentation/blog/first-blog-post',
    component: ComponentCreator('/documentation/blog/first-blog-post', '5e7'),
    exact: true
  },
  {
    path: '/documentation/blog/long-blog-post',
    component: ComponentCreator('/documentation/blog/long-blog-post', '0ab'),
    exact: true
  },
  {
    path: '/documentation/blog/mdx-blog-post',
    component: ComponentCreator('/documentation/blog/mdx-blog-post', '329'),
    exact: true
  },
  {
    path: '/documentation/blog/tags',
    component: ComponentCreator('/documentation/blog/tags', '389'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/docusaurus',
    component: ComponentCreator('/documentation/blog/tags/docusaurus', '562'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/facebook',
    component: ComponentCreator('/documentation/blog/tags/facebook', '040'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/hello',
    component: ComponentCreator('/documentation/blog/tags/hello', '771'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/hola',
    component: ComponentCreator('/documentation/blog/tags/hola', '1ec'),
    exact: true
  },
  {
    path: '/documentation/blog/welcome',
    component: ComponentCreator('/documentation/blog/welcome', '8da'),
    exact: true
  },
  {
    path: '/documentation/markdown-page',
    component: ComponentCreator('/documentation/markdown-page', '1c7'),
    exact: true
  },
  {
    path: '/documentation/docs',
    component: ComponentCreator('/documentation/docs', '0bf'),
    routes: [
      {
        path: '/documentation/docs',
        component: ComponentCreator('/documentation/docs', '82c'),
        routes: [
          {
            path: '/documentation/docs',
            component: ComponentCreator('/documentation/docs', 'dbd'),
            routes: [
              {
                path: '/documentation/docs/automacoes/como-criar-agrupamento-de-produtos',
                component: ComponentCreator('/documentation/docs/automacoes/como-criar-agrupamento-de-produtos', '837'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/automacoes/como-criar-estrutura-de-cores',
                component: ComponentCreator('/documentation/docs/automacoes/como-criar-estrutura-de-cores', '9d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/automacoes/como-criar-kits-de-produto',
                component: ComponentCreator('/documentation/docs/automacoes/como-criar-kits-de-produto', '5b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/automações',
                component: ComponentCreator('/documentation/docs/category/automações', 'b24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/guias-avançados',
                component: ComponentCreator('/documentation/docs/category/guias-avançados', 'de3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/primeiros-passos',
                component: ComponentCreator('/documentation/docs/category/primeiros-passos', 'f84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/guias-avancados/boas-praticas-css',
                component: ComponentCreator('/documentation/docs/guias-avancados/boas-praticas-css', '89f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/intro',
                component: ComponentCreator('/documentation/docs/intro', '5f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/primeiros-passos/como-instalar-o-luca',
                component: ComponentCreator('/documentation/docs/primeiros-passos/como-instalar-o-luca', '26f'),
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
    path: '/documentation/',
    component: ComponentCreator('/documentation/', '4a1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
