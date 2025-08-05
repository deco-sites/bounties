# 🤖 AI Builders Directory - Bounties Platform

## Visão Geral

Sistema completo para diretório de AI Builders inspirado no **agent.ai/builders** com design visual do **deco.cx**. O projeto permite que usuários encontrem, explorem e conectem-se com profissionais especializados em inteligência artificial.

## 🎯 Funcionalidades Principais

### 1. **Página Inicial Dinâmica**
- **HeroBounties**: Banner principal com busca e CTAs
- Campo de busca centralizado
- Contadores de builders em destaque
- Call-to-actions para cadastro e login

### 2. **Diretório de Builders**
- **BuildersGrid**: Listagem com filtros avançados
- Layout em cards ou lista
- Filtros por certificação L1, especialidade, experiência, localização
- Paginação integrada
- Sistema de ordenação
- **Navegação**: Cards clicáveis para páginas individuais (URL personalizada)

### 3. **Perfis Detalhados**
- **BuilderDetail**: Página completa do profissional
- **BuilderProfile**: Página individual com navbar ⭐ NOVO
- Informações pessoais e profissionais
- Portfólio de projetos em destaque
- Histórico de experiência
- Certificações e educação
- Links sociais e contato
- **URLs Personalizadas**: Cada builder pode ter sua própria URL

### 4. **Sistema de Autenticação**
- **AuthLogin**: Página de login responsiva
- **AuthSignup**: Cadastro com validação
- Suporte a login social (Google, LinkedIn)
- Diferentes tipos de usuário (Builder/Cliente)

## 📁 Estrutura de Arquivos Criados

```
sections/
├── HeroBounties.tsx           # Banner principal com busca
├── BuildersGrid.tsx           # Listagem e filtros de builders  
├── BuilderDetail.tsx          # Página de perfil completo
├── BuilderProfile.tsx         # Página individual de builder ⭐ NOVO
├── AuthLogin.tsx              # Página de login
└── AuthSignup.tsx             # Página de cadastro

components/ui/
└── BuilderCard.tsx            # Componente card do builder (navegação personalizada)
```

## 🔧 Como Usar no Admin Deco

### 1. **Criando uma Página Home**
Adicione as seções nesta ordem:
1. `HeroBounties` - Banner principal
2. `BuildersGrid` - Diretório de builders (opcional na home)

### 2. **Página de Listagem de Builders**
Use:
- `BuildersGrid` com `showFilters: true`
- Configure `profileUrl` em cada builder para URLs personalizadas

### 3. **Página de Perfil Individual**
Use:
- `BuilderProfile` com dados completos do builder
- Inclui navbar com botão "Back to Builders"

### 4. **Páginas de Autenticação**
- `/login` → `AuthLogin`
- `/signup` → `AuthSignup`

## 🔗 **Sistema de Navegação Simples**

### **Como Funciona**
1. **Cards Clicáveis**: Cada `BuilderCard` é clicável
2. **URL Personalizada**: Use `profileUrl` para definir a URL de cada builder
3. **Fallback**: Se não houver `profileUrl`, usa `/builders/{id}`

### **Exemplo de Configuração**
```typescript
// No BuildersGrid, configure cada builder:
{
  id: "sarah-chen",
  name: "Sarah Chen",
  title: "Machine Learning Engineer",
  // ... outros dados
  profileUrl: "/builder/sarah-chen"  // URL personalizada
}

// Ou use URLs padrão:
{
  id: "marcus-johnson",
  name: "Marcus Johnson",
  // ... outros dados
  // profileUrl não definido = usa /builders/marcus-johnson
}
```

### **Página Individual**
Use `BuilderProfile` para criar páginas individuais:
```typescript
{
  builder: {
    // Dados completos do builder
    id: "sarah-chen",
    name: "Sarah Chen",
    // ... todos os dados
  },
  showBackButton: true,
  backButtonUrl: "/builders"
}
```

## 🎨 Personalização de Props
```typescript
{
  title: "Find the Best AI Builders",           // Título principal
  description: "Texto descritivo...",           // Descrição
  searchPlaceholder: "Search builders...",      // Placeholder busca
  backgroundImage: ImageWidget,                 // Imagem de fundo
  featuredBuilders: 3,                         // Número para contador
  ctas: [                                      // Botões de ação
    { text: "Sign Up", href: "/signup", style: "primary" }
  ]
}
```

### BuildersGrid
```typescript
{
  title: "Our AI Builders",                    // Título da seção
  subtitle: "Discover talented...",            // Subtítulo
  builders: Builder[],                         // Array de builders
  layout: "card" | "list",                     // Layout dos cards
  showFilters: true,                          // Mostrar filtros
  showPagination: true,                       // Mostrar paginação
  filterOptions: FilterOptions                // Opções de filtro
}
```

### BuilderDetail
```typescript
{
  builder: DetailedBuilder                     // Dados completos do builder
}
```

## 📊 Estrutura de Dados

### Builder (Básico)
```typescript
interface Builder {
  id: string;
  name: string;
  title: string;                              // Cargo/especialidade
  avatar?: string;
  bio: string;
  specialties: string[];                      // ["Computer Vision", "NLP"]
  isL1Certified: boolean;                     // Certificação L1
  experienceLevel: "Junior" | "Mid" | "Senior" | "Expert";
  location?: string;
  rating?: number;                            // 1-5 estrelas
  projectsCount?: number;
  profileUrl: string;                         // URL do perfil
  skills: string[];                           // Skills técnicas
  price?: {
    currency: string;                         // "$"
    amount: number;                          // 120
    period: "hour" | "project" | "month";   // "hour"
  };
}
```

### DetailedBuilder (Perfil Completo)
Estende `Builder` com:
```typescript
{
  fullBio: string;                           // Biografia completa
  experience: Experience[];                  // Histórico profissional
  projects: Project[];                       // Portfólio
  education: Education[];                    // Formação
  certifications: string[];                 // Certificações
  achievements?: string[];                   // Conquistas
  languages?: { language: string; level: string }[];
  availability?: "Available" | "Busy" | "Not Available";
  responseTime?: string;                     // "Usually responds within 2 hours"
  socialLinks?: {
    linkedin?: string;
    github?: string;
    website?: string;
    twitter?: string;
  };
}
```

## 🎨 Estilos e Design System

### Cores Principais
- **Primário**: Blue-600 (#2563eb)
- **Secundário**: Purple-600 (#9333ea)
- **Sucesso**: Green-600 (#16a34a)
- **Aviso**: Yellow-400 (#facc15)

### Componentes de UI
- **Cards**: Bordas arredondadas (rounded-2xl), sombras sutis
- **Botões**: Três estilos (primary, secondary, outline)
- **Badges**: Cores por nível de experiência
- **Layouts**: Grid responsivo com breakpoints Tailwind

### Tipografia
- **Títulos**: font-bold, tracking-tight
- **Corpo**: leading-relaxed
- **Labels**: font-medium

## 🔄 Funcionalidades Interativas

### Filtros (BuildersGrid)
- **Busca por texto**: Nome, especialidade, skills
- **Certificação L1**: Checkbox dedicado
- **Especialidades**: Multi-select
- **Nível de experiência**: Junior → Expert
- **Faixa de preço**: Por hora
- **Localização**: Cidade/remoto

### Cards Responsivos
- **Desktop**: Grid 3 colunas
- **Tablet**: Grid 2 colunas  
- **Mobile**: 1 coluna ou lista

### Estados Interativos
- **Hover**: Elevação de cards, mudança de cores
- **Loading**: Placeholders para carregamento
- **Empty state**: Quando não há builders

## 🚀 Próximos Passos

### Funcionais
1. **Integração com API**: Conectar com backend real
2. **Busca avançada**: Elasticsearch ou similar
3. **Sistema de favoritos**: Save builders
4. **Mensagens**: Chat interno
5. **Ratings e reviews**: Sistema de avaliação

### Técnicas
1. **Performance**: Lazy loading de imagens
2. **SEO**: Meta tags dinâmicas
3. **Analytics**: Tracking de eventos
4. **A/B Testing**: Variants de components

## 📱 Responsividade

Todos os componentes são totalmente responsivos:
- **Mobile First**: Design otimizado para mobile
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Touch Friendly**: Botões e links adequados para touch
- **Performance**: Imagens otimizadas por device

## 🎯 Métricas de Sucesso

### Para Builders
- Visualizações de perfil
- Cliques em contato
- Taxa de conversão de leads

### Para Clientes  
- Tempo na página
- Uso de filtros
- Taxa de clique em perfis

### Para Plataforma
- Cadastros realizados
- Builders ativos
- Matches realizados

---

Este sistema fornece uma base sólida e escalável para um diretório profissional de AI Builders, com design moderno e experiência de usuário otimizada. Todas as seções são modulares e podem ser facilmente customizadas através do admin visual do Deco.cx.