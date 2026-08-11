# Prompt: Landing Page Solint

Crie uma landing page institucional premium, futurista e responsiva para a Solint, uma empresa de tecnologia e inteligência digital.

O projeto deve ser desenvolvido pensando desde o início em uma futura exportação para Next.js, preferencialmente utilizando React, TypeScript, Tailwind CSS e componentes reutilizáveis. O resultado precisa ter uma arquitetura limpa, organizada e fácil de migrar para um projeto Next.js moderno.

## 1. Objetivo do projeto

Criar uma experiência visual que transmita:

- Inteligência
- Tecnologia
- Conectividade
- Automação
- Precisão
- Inovação
- Escalabilidade
- Segurança
- Sofisticação empresarial

A Solint deve ser apresentada como uma empresa que conecta estratégia, dados, tecnologia e resultados por meio de soluções inteligentes.

A página precisa parecer moderna, confiável e premium, evitando um visual genérico de startup.

## 2. Direção visual

Utilize uma estética tecnológica, elegante e minimalista, com forte presença visual.

### Paleta de cores

- Fundo principal: azul-marinho quase preto, como #050A14
- Fundo secundário: #081525
- Azul elétrico: #168CFF
- Ciano luminoso: #35D9FF
- Azul profundo: #174EFF
- Texto principal: branco ou quase branco
- Texto secundário: azul acinzentado claro
- Bordas: azul translúcido com baixa opacidade
- Gradientes sutis em azul, ciano e violeta

Evite excesso de cores. O visual deve ser predominantemente escuro, com brilhos controlados e pontos de luz azulados.

### Tipografia

Utilize uma fonte moderna e legível, como:

- Inter
- Geist
- Manrope
- Sora

A tipografia deve apresentar:

- Títulos grandes e impactantes
- Subtítulos com boa legibilidade
- Hierarquia visual clara
- Espaçamento generoso
- Aparência tecnológica, mas profissional

## 3. Estrutura da página

### Header

O cabeçalho deve conter:

- Logo textual ou símbolo da Solint
- Links de navegação: Início, Soluções, Tecnologia, Sobre nós, Contato
- Botão de ação, como "Fale com a Solint"
- Header fixo ou sticky durante o scroll
- Fundo translúcido com efeito de blur
- Borda inferior discreta
- Menu mobile responsivo com animação suave

O header deve ser elegante, compacto e não ocupar espaço excessivo.

### Hero section

Crie uma primeira dobra visualmente marcante.

Texto principal sugerido: "Tecnologia inteligente para transformar possibilidades em resultados."

Texto de apoio: "A Solint conecta estratégia, dados e inovação para criar soluções digitais mais eficientes, escaláveis e preparadas para o futuro."

Botões: "Conheça nossas soluções" e "Fale com um especialista".

O botão principal deve possuir:

- Gradiente azul para ciano
- Brilho sutil ao passar o mouse
- Animação de elevação
- Bordas arredondadas
- Boa acessibilidade visual

### Elemento 3D do hero

Adicione um núcleo 3D interativo representando uma rede de inteligência formada por:

- Um núcleo central luminoso
- Pequenos nós periféricos
- Linhas conectando os nós
- Partículas discretas
- Aura translúcida
- Efeito de profundidade
- Movimento suave
- Brilhos em azul e ciano

O núcleo deve simbolizar a conexão entre pessoas, dados, sistemas e decisões.

O objeto 3D deve:

- Girar lentamente
- Reagir levemente ao movimento do cursor
- Ter uma rotação ou deslocamento sutil baseado no scroll
- Não interferir na leitura do texto
- Não bloquear cliques ou interações da interface
- Ser visualmente sofisticado, mas não exagerado
- Ter fallback visual para dispositivos que não suportem WebGL

A implementação deve ser preparada para utilizar: three, @react-three/fiber, @react-three/drei.

Caso a ferramenta não consiga exportar o objeto 3D completo, crie uma área bem definida e isolada para receber posteriormente um componente React chamado `<InteractiveCore />`. O componente deverá ser facilmente substituível no futuro.

## 4. Seção de soluções

Crie uma seção apresentando as principais soluções da Solint em cards modernos.

Sugestões de soluções:

- Estratégia Digital: planejamento tecnológico para transformar objetivos de negócio em soluções escaláveis
- Automação Inteligente: automação de processos para reduzir custos, erros e tarefas repetitivas
- Dados e Inteligência: organização, análise e visualização de dados para apoiar decisões melhores
- Integração de Sistemas: conexão entre ferramentas, plataformas e operações em um ecossistema integrado
- Experiências Digitais: criação de produtos e interfaces digitais simples, eficientes e memoráveis
- Segurança e Escalabilidade: arquiteturas preparadas para crescimento, estabilidade e proteção dos dados

### Estilo dos cards

- Fundo levemente translúcido
- Bordas finas em azul com baixa opacidade
- Ícones lineares
- Efeito de glow discreto
- Animação hover
- Pequeno deslocamento vertical ao passar o mouse
- Gradiente radial sutil
- Boa organização em desktop, tablet e mobile

Evite cards excessivamente grandes ou visualmente carregados.

## 5. Seção "Como trabalhamos"

Crie uma seção apresentando o processo da Solint em quatro etapas:

- Entender: investigamos o contexto, os objetivos e os desafios do negócio
- Estruturar: organizamos dados, processos e prioridades
- Construir: desenvolvemos soluções digitais eficientes e escaláveis
- Evoluir: medimos resultados e aprimoramos continuamente a solução

Utilize uma linha visual conectando as etapas, com pequenos pontos luminosos ou elementos de rede.

A seção deve reforçar clareza, método e confiança.

## 6. Seção de impacto

Crie uma área com números ou indicadores de impacto, por exemplo:

- Processos mais eficientes
- Decisões orientadas por dados
- Operações mais integradas
- Soluções preparadas para escala

Os números podem ser apresentados em uma composição visual elegante, sem inventar estatísticas específicas. Caso utilize valores fictícios para demonstração, deixe-os claramente preparados para substituição.

## 7. Seção tecnológica

Crie uma seção destacando que a Solint trabalha com tecnologia moderna.

Inclua referências visuais a: cloud, APIs, inteligência artificial, dados, automação, integrações, sistemas escaláveis, segurança.

Essa seção pode utilizar uma composição abstrata com linhas, partículas, pequenos diagramas e elementos conectados.

Não exiba logotipos de empresas ou tecnologias específicas sem necessidade.

## 8. Seção sobre a Solint

Crie uma seção institucional com o título: "Tecnologia com propósito, estratégia com impacto."

O texto deve comunicar que a Solint não entrega apenas tecnologia, mas soluções alinhadas aos objetivos reais de cada negócio.

Utilize uma composição dividida: texto à esquerda, elemento visual abstrato ou gráfico tecnológico à direita.

## 9. CTA final

Crie uma seção de chamada para ação com bastante destaque.

Título sugerido: "Pronto para transformar sua operação?"

Texto: "Vamos construir uma solução mais inteligente, conectada e preparada para o futuro."

Botão: "Falar com a Solint"

Essa seção deve ter:

- Fundo com gradiente radial
- Aura azul/ciano
- Elementos de partículas
- Contraste suficiente
- Layout centralizado
- Animação sutil no background

## 10. Footer

O rodapé deve conter:

- Logo da Solint
- Breve descrição
- Links institucionais
- Links para soluções
- Informações de contato
- Redes sociais
- Política de privacidade
- Termos de uso
- Copyright

O footer deve ser simples, escuro e organizado.

## 11. Interações e animações

Utilize animações modernas, mas discretas. A página deve incluir:

- Fade-in progressivo ao entrar na viewport
- Animações de entrada com pequenos deslocamentos
- Hover nos botões
- Hover nos cards
- Brilho controlado em elementos interativos
- Movimento parallax muito sutil
- Transições suaves entre estados
- Reações leves ao cursor
- Animação de partículas no background
- Rotação lenta do núcleo 3D

Evite:

- Animações exageradas
- Efeitos que prejudiquem a leitura
- Movimento constante excessivo
- Scroll hijacking
- Animações que deixem a página lenta
- Efeitos pesados em dispositivos móveis

Respeite a preferência do usuário por movimento reduzido utilizando prefers-reduced-motion.

## 12. Responsividade

O layout deve ser totalmente responsivo para desktop, notebook, tablet e smartphone.

No mobile:

- O menu deve se transformar em menu hambúrguer
- O núcleo 3D deve reduzir a quantidade de elementos
- O texto do hero deve aparecer antes do elemento visual
- Os botões podem ocupar a largura disponível
- Os cards devem ficar em uma coluna
- O espaçamento deve ser reduzido sem perder sofisticação
- O desempenho deve ser prioridade

A experiência mobile não deve ser apenas uma versão reduzida do desktop. Ela deve ser cuidadosamente adaptada.

## 13. Performance

Prepare o projeto para uma futura implementação em Next.js.

Requisitos:

- Componentes reutilizáveis
- Código organizado
- Separação entre componentes visuais e conteúdo
- Evitar lógica duplicada
- Evitar bibliotecas desnecessárias
- Lazy loading para o componente 3D
- Carregamento condicional do WebGL
- Redução de partículas no mobile
- Imagens otimizadas
- Uso adequado de next/image na futura exportação
- Uso adequado de next/font
- Evitar problemas de hidratação
- Não utilizar APIs do navegador diretamente durante o SSR
- Isolar componentes que dependem de window, document ou WebGL como componentes client-side

O núcleo 3D deve ser carregado de forma dinâmica, equivalente a:

```tsx
const InteractiveCore = dynamic(
  () => import('@/components/InteractiveCore'),
  { ssr: false }
)
```

O código acima deve ser utilizado apenas como referência arquitetural para a futura versão em Next.js.

## 14. Arquitetura esperada para Next.js

Organize o projeto de forma compatível com o App Router.

Sugestão de estrutura:

```
app/
  layout.tsx
  page.tsx
  globals.css

components/
  Header.tsx
  Hero.tsx
  InteractiveCore.tsx
  Solutions.tsx
  Process.tsx
  Impact.tsx
  Technology.tsx
  About.tsx
  FinalCta.tsx
  Footer.tsx
  ui/

lib/
  utils.ts

public/
  images/
  icons/
```

Utilize:

- TypeScript
- Componentes funcionais
- Props tipadas
- Classes utilitárias
- Componentes client-side somente quando necessário
- Conteúdo separado da apresentação sempre que possível

Não crie uma aplicação monolítica em um único arquivo.

## 15. Acessibilidade

Garanta:

- Contraste adequado
- Elementos semânticos
- Uso correto de títulos
- Navegação por teclado
- Estados de foco visíveis
- aria-label quando necessário
- Botões reais para ações
- Links reais para navegação
- Texto alternativo em imagens
- Compatibilidade com leitores de tela
- Respeito a prefers-reduced-motion

O objeto 3D deve ser decorativo e possuir aria-hidden="true" quando não transmitir informação essencial.

## 16. SEO

Prepare a estrutura para SEO no Next.js, incluindo:

- Título da página
- Meta description
- Open Graph
- Twitter Cards
- Estrutura correta de headings
- Conteúdo semântico
- URLs amigáveis
- Possibilidade de adicionar favicon e imagem de compartilhamento

Sugestão de título: "Solint. Tecnologia inteligente para negócios preparados para o futuro"

Sugestão de descrição: "A Solint conecta estratégia, dados e inovação para criar soluções digitais eficientes, escaláveis e preparadas para o futuro."

## 17. Regras importantes para o resultado

- O resultado deve parecer uma landing page real e pronta para apresentação
- Não utilize textos genéricos como "Lorem ipsum"
- Não exagere no uso de efeitos neon
- Não deixe o layout visualmente poluído
- Priorize clareza, conversão e confiança
- Crie uma identidade visual consistente
- Use espaçamentos amplos
- Mantenha o visual premium
- Não utilize imagens aleatórias que não tenham relação com a marca
- Dê preferência a formas abstratas, gráficos e elementos tecnológicos
- Crie todos os estados de hover, foco e responsividade
- Deixe a área do núcleo 3D preparada para substituição por um componente React
- Gere o projeto de forma que a exportação para Next.js seja simples
- Não concentre toda a implementação em um único componente

Antes de finalizar, revise o resultado considerando:

- Clareza da mensagem
- Hierarquia visual
- Responsividade
- Performance
- Acessibilidade
- Facilidade de migração para Next.js
- Qualidade visual do hero
- Consistência da identidade da Solint

Crie uma experiência moderna, tecnológica e elegante, com foco em transmitir que a Solint transforma complexidade em inteligência, conexão e resultado.
