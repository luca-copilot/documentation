---
id: como-criar-kits-de-produto
title: Kits de Produto
sidebar_label: Kits de Produto
---

# Como criar Kits de Produto

Atualmente, o Shopify não oferece a função de criar kits de produto para o mercado brasileiro. Para atender a essa necessidade, criamos uma automação que utiliza recursos de meta campos e objetos do Shopify para tornar isso possível. Siga os passos abaixo para criar seus kits de produto:

## Passo 1: Instalar a automação e o componente

1. **No Admin do LUCA:**
   - Acesse **Automações**.
   - Instale a automação **📦 Kit de Produtos** no seu projeto.
   - Vá para **Componentes** e instale o componente **Detalhes de Kit Elegante**.

![Passo 1](/img/tutoriais/automacoes/passo-1-instalar.png)

## Passo 2: Configurar no Shopify

2. **No Painel Administrativo do Shopify:**
   - Acesse **Conteúdo > Metaobjetos > Kit**.
   - Clique em **Adicionar Entrada** para criar o primeiro kit.
     - Nomeie o kit.
     - Adicione uma descrição e desconto, se houver.
     - Adicione até 5 produtos ao kit, podendo variar entre cores e tamanhos.
     - Nomeie cada produto que faz parte do kit.
     - Em lista, selecione o produto ou os produtos desejados.

![Passo 2](/img/tutoriais/automacoes/passo-2-config.png)

:::info
### Sobre a lista de produtos
A seleção pode variar de acordo com a forma como você cadastrou seus produtos. Se você criou um produto para cada variação, por exemplo, será necessário selecionar todas as variantes para permitir a troca delas no momento da compra.
:::

## Passo 3: Associar o Kit a um produto

3. **Criar um Produto Representando o Kit:**
   - Vá para **Produtos > Adicionar Produto**.
   - Preencha os campos necessários para o produto que representará o kit.
   - Nos **Metacampos do Produto**, selecione o kit correspondente e clique em **Salvar**.

![Passo 3](/img/tutoriais/automacoes/passo-3-associar.png)

## Passo 4: Criar a página de exibição do kit

4. **Configurar a Página de Detalhes do Kit:**
   - Acesse o construtor de lojas do Shopify em **Canais de Vendas > Loja Online**.
   - Encontre o tema do LUCA e clique em **Personalizar**.
   - No construtor, primeiro certifique-se de que o tema está utilizando a estrutura de metaobjeto para exibir variantes dos produtos:
     - Vá para **Configurações do tema > Elementos de interface > Produto**.
     - Selecione metaobjeto.
   - Em seguida, crie a página de detalhes do kit:
     - Selecione **Páginas** e clique em **Produtos > Criar Modelo**.
     - Use uma página existente como base ou crie uma nova.
     - Adicione o componente **Detalhes de Kit Elegante**.
       - Certifique-se de que há apenas um detalhe de produto ou kit na página, pois o Shopify não permite dois componentes iguais na mesma página.
     - Selecione o kit criado para pré-visualizar e verificar se está tudo correto.

![Passo 4](/img/tutoriais/automacoes/passo-4-criar.png)

## Conclusão

E pronto! Seu kit de produto está configurado e pronto para uso. Se tiver dúvidas ou sugestões, estamos à disposição no Discord ou por e-mail. Estamos aqui para ajudar!
