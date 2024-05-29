---
id: como-instalar-o-luca
title: Como Instalar o LUCA
sidebar_label: Como Instalar o LUCA
---

# Como Instalar o LUCA

Essa primeira versão do LUCA necessita que, para ser instalado na loja do seu cliente, seja criado um app personalizado dentro da loja do seu cliente. Isso permitirá criar o tema, instalar componentes e automações necessárias para a montagem da loja.

Não se preocupe, o LUCA não tem acesso a dados sensíveis da sua agência ou do seu cliente, somente o necessário para construir a loja.

## Passo 1: Criar uma Loja no LUCA Admin

1. **Criar uma loja no LUCA Admin:**
   - Clique em **Adicionar uma loja**.
   - Preencha os campos para identificação da loja e, ao concluir, clique em **Continuar**.
   - Dar permissões é basicamente instalar o LUCA na loja do seu cliente. Para isso, é necessário criar um app personalizado na loja do seu cliente.

![Passo 1](/img/tutoriais/primeiros-passos/passo-1-criar.png)

## Passo 2: Criar um App Personalizado

2. **Acesse a loja no Shopify:**
   - Vá em **Configurações > Apps e canais de vendas**.
   - Clique em **Desenvolver apps**.

![Passo 2](/img/tutoriais/primeiros-passos/passo-2-acesse.png)

3. **Permitir o desenvolvimento de apps personalizados:**
   - Clique em **Permitir o desenvolvimento de apps personalizados**.
   - Clique novamente em **Permitir o desenvolvimento de apps personalizados**.

![Passo 2](/img/tutoriais/primeiros-passos/passo-2-permitir.png)

4. **Criar um App:**
   - Clique em **Criar um App**.
   - Nomeie o app como **LUCA App**, ou com outro nome desejado.
   - Conclua clicando em **Criar app**.

![Passo 2](/img/tutoriais/primeiros-passos/passo-2-criar.png)

## Passo 3: Configurar o App

5. **Configurar escopos da API Admin:**
   - Clique em **Configurar escopos da API Admin**.
   - Adicione todas as permissões abaixo, seguindo as etapas de exemplo:
   - Products: `write_products`, `read_products`
   - Content: `write_content`, `read_content`
   - Themes: `write_themes`, `read_themes`
   - Metaobject: `write_metaobject_definitions`, `read_metaobject_definitions`, `write_metaobjects`, `read_metaobjects`
   - Customers: `write_customers`, `read_customers`

![Passo 3](/img/tutoriais/primeiros-passos/passo-3-configurar.png)

:::tip   
Sugerimos utilizar a barra de busca para digitar os tópicos e encontrar as opções com mais agilidade.
:::

## Passo 4: Instalar o App

6. **Instalar o App:**
   - Após salvar, clique em **Instalar app**.
   - Em seguida, clique em **Instalar**.

7. **Revelar o token necessário:**
   - Clique em **Revelar token uma vez**.
   - Copie o token.

![Passo 4](/img/tutoriais/primeiros-passos/passo-4-revelar.png)


8. **Conectar o LUCA à loja do seu cliente:**
   - Volte ao **LUCA Admin** e cole o código no campo **Token de acesso da API Admin**.
   - Por fim, clique em **Continuar** para seguir com o passo a passo da criação da loja.

![Passo 4](/img/tutoriais/primeiros-passos/passo-4-conectar.png)

## Conclusão

Pronto, após terminar o passo a passo da criação da loja, você já pode instalar os temas, componentes e automações necessárias para criar o seu projeto com o LUCA 🕺

Se tiver dúvidas ou sugestões, estamos à disposição no Discord ou por e-mail. Estamos aqui para ajudar!