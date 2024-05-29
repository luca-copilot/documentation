---
id: boas-praticas-css
title: Boas práticas para CSS customizado
sidebar_label: Boas práticas para CSS
---

# Boas práticas para CSS customizado

Este documento fornece orientações para personalizar componentes do LUCA usando CSS personalizado em uma loja Shopify. As práticas recomendadas incluem o uso de nomes de classes descritivos, evitar estilos globais excessivos e o uso de seletores específicos do componente. Siga estas práticas para garantir que sua personalização seja consistente e fácil de manter.

## Identificadores de páginas

Todas as páginas contêm um identificador com o tipo/nome da página em `param-case`.

### Exemplo

```html
<body id="page-type-name">
  <main ...>
</body>
```

## Classes de seção e elemento

Todas as seções possuem uma classe com o nome do componente no estilo param-case, alguns embutidos dentro de uma section ou no próprio elemento.

### Exemplo

```html
<section class="component-name">
  <div ...>
</section>

<header class="menu-left">
  <div ...>
</header>
```

Para a customização global de um componente, você pode criar os seus estilos usando apenas a classe do componente seguido de seu elemento sucessor quando o mesmo for embutido dentro de uma section ou diretamente no próprio elemento.

### Exemplo

```html
.component-name > div {
  width: 100%;
  /* outros estilos */
}

.menu-left {
  width: 100%;
  /* outros estilos */
}
```

Caso a necessidade seja a customização de um componente em uma página específica, você pode usar o prefixo do id dessa página seguido da classe do elemento.

```html
#page-type-name > .component-name {
  /* estilos específicos */
}

#page-type-service > .menu-left {
  color: white;
  background-color: black;
}
```

:::warning
Nunca use os ids de section gerados pelo Shopify para fazer qualquer tipo de customização. Esses ids podem mudar se o componente for removido e inserido novamente na página, perdendo assim a referência do mesmo e consequentemente de seus estilos.
:::

## Use rem ao Invés de px

Use sempre rem para especificar os valores da página. Você pode calcular o rem dividindo o valor em px por 16, que é o valor de fonte base usado pelo Tailwind. Caso você precise mudar o valor do font-size padrão por algum motivo, use esse valor para conversão.

### Exemplo

```html
💡 300px = 300/16 = 18.75rem
```

### Suporte para Mobile
Lembre-se sempre de adicionar as media queries correspondentes para o override de cada componente/propriedade na sua folha de estilos, baseado nas propriedades padrão do Tailwind.

| Breakpoint Prefix | Minimum Width | CSS                              |
|-------------------|---------------|----------------------------------|
| sm                | 640px         | `@media (min-width: 640px) { ... }` |
| md                | 768px         | `@media (min-width: 768px) { ... }` |
| lg                | 1024px        | `@media (min-width: 1024px) { ... }` |
| xl                | 1280px        | `@media (min-width: 1280px) { ... }` |
| 2xl               | 1536px        | `@media (min-width: 1536px) { ... }` |


### Exemplo

```css
/**
 * Products
 */
.products-list-variant > div h3 {
  color: white;
}

@media (min-width: 768px) {
  /**
   * Products
   */
  .products-list-variant > div h3 {
    color: black;
  }
}
```

## Sobrescreva Elementos Gerais Globais Apenas Quando Necessário

Essa regra depende de projeto para projeto, mas tome cuidado ao customizar elementos gerais globais (a, button, h1-h6, tokens, etc) para evitar replicar estilos excessivamente em outras páginas da loja. Em alguns casos, pode ser mais produtivo fazer um override global, mas sempre faça uma análise antes de começar.

## Faça Uso Correto dos Seletores

Evite copiar e colar o que o browser sugere ao inspecionar o elemento da página, pois ele sempre trará ids gerados pelo Shopify que podem mudar, incluindo classes que tornam a leitura e manutenção do CSS difíceis.

### Exemplo

```css title="Ruim 👎"
#shopify-section-template--20019652100413__23641507-e331-498c-964e-5824112576ec > div > div.wrapper.flex.items-end.justify-between > div.flex-1.text-gray-700 > h3 {
  text-transform: uppercase;
}
```

```css title="Bom 👍"
.products-list-variant > div h3 {
  text-transform: uppercase;
}
```

## Use Comentários para os Elementos

Como boa prática para leitura e manutenção do seu código, é sempre bom escopar a customização dos seus componentes usando comentários em bloco.

### Exemplo

```css title="Ruim 👎"
.products-list-variant > div h3 {
  text-transform: uppercase;
}

/* outros estilos */

.footer-default-variant form#contact_form {
  gap: 0;
}

/* outros estilos */
```

```css title="Bom 👍"
/**
 * Products
 */
.products-list-variant > div h3 {
  text-transform: uppercase;
}

/* outros estilos */

/**
 * Footer
 */
.footer-default-variant form#contact_form {
  gap: 0;
}

/* outros estilos */
```

## Evite Redundância

Sempre que detectar um padrão de estilo se repetindo, faça o reuso dos mesmos agrupando os seus elementos.

### Exemplo

```css title="Ruim 👎"
.header-short > .relative {
  height: 22.5rem;
}

.header-short > .relative img {
  height: 22.5rem;
}

.header-short > .relative > div:nth-of-type(1) {
  height: 22.5rem;
}
```

```css title="Bom 👍"
/**
 * Header Short
 */
.header-short > .relative,
.header-short > .relative img,
.header-short > .relative > div:nth-of-type(1) {
  height: 22.5rem;
}
```

Isso permite estilos mais reaproveitáveis e consequentemente mais leves para serem carregados na loja.

☝ Isso não é overengineering! O seu CSS pode crescer rapidamente e afetar a performance do site.

## Use !important Apenas Quando Necessário

Por padrão, o LUCA adiciona o custom.css já pensando no override padrão de estilos, dessa forma, raramente será necessário o uso de !important.

Afinal, se tudo é important, nada é realmente important 😏

## Prefira Usar Propriedades Declarativas ao Invés de Genéricas

Isso é importante para não sobrescrever propriedades que não precisam ou não deveriam ser sobrescritas.

### Exemplo

```css title="Ruim 👎"
background: white;
background: cover;
background: url();
background: no-repeat;
```

```css title="Bom 👍"
background-color: white;
background-image: url();
background-size: cover;
background-repeat: no-repeat;
```

Este é um documento vivo e ainda está em construção. Fique à vontade para tirar dúvidas e fazer sugestões sempre que houver necessidade.