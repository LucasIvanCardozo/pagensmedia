# PagensMedia - Design Specification Document
## Especificación Completa de Diseño y Contenido

---

## 1. Information Architecture

### Site Structure

```
Landing Page (Single Page Application)
├── Navigation (Sticky Header)
│   ├── Logo
│   ├── Nav Links: Servicios, Proceso, Portafolio, FAQ
│   └── CTA Button: "Hablemos"
│
├── Hero Section
│   ├── Gradient Background Effect
│   ├── Headline + Subheadline
│   ├── Dual CTAs
│   └── Social Proof Indicators
│
├── Trust Strip (Benefits Bar)
│   └── 5 Value Propositions
│
├── Services Section
│   └── 6 Service Cards (Grid Layout)
│
├── Why Choose Us (Differentiators)
│   └── 4-5 Unique Selling Points
│
├── Process Section
│   └── 4 Steps Timeline
│
├── Portfolio Section
│   └── 4 Case Study Cards
│
├── Testimonials Section
│   └── 3 Client Testimonials
│
├── FAQ Section
│   └── 6 Accordion Items
│
├── Final CTA Section
│   └── Conversion Block
│
└── Footer
    ├── Navigation Links
    ├── Contact Info
    └── Legal Links
```

### User Journey Mapping

**Primary Journey: Awareness → Interest → Consideration → Action**

1. **Awareness (Hero)**: Visitor understands what we do and feels the premium positioning
2. **Trust (Trust Strip)**: Immediate credibility through benefits
3. **Interest (Services)**: Discover specific solutions for their needs
4. **Consideration (Why Us + Process)**: Understand differentiation and workflow
5. **Validation (Portfolio + Testimonials)**: Social proof and real results
6. **Decision (FAQ)**: Address objections
7. **Action (Final CTA)**: Convert with clear next step

### Navigation Flow

```
┌─────────────────────────────────────────────────────────┐
│  Logo  │  Servicios  │  Proceso  │  Portafolio  │  FAQ  │  [Hablemos]  │
└─────────────────────────────────────────────────────────┘
                            ↓
                    Smooth Scroll to Section
                            ↓
              Section-Specific Anchor Links
```

---

## 2. Visual Design System

### Color Palette

#### Primary Gradient (Vibrant Flow)
```css
--gradient-primary: linear-gradient(135deg, 
  #FF6B9D 0%,      /* Pink - Vibrant Coral */
  #9B59B6 33%,     /* Purple - Royal */
  #3498DB 66%,     /* Blue - Ocean */
  #00D4FF 100%     /* Cyan - Electric */
);
```

#### Background Colors
```css
--bg-primary: #FFFFFF;           /* Pure White */
--bg-secondary: #F8FAFC;         /* Cool Gray 50 */
--bg-tertiary: #F1F5F9;          /* Cool Gray 100 */
--bg-dark: #0F172A;              /* Slate 900 - For dark sections */
--bg-gradient-subtle: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
```

#### Text Colors
```css
--text-primary: #0F172A;         /* Slate 900 - Headlines */
--text-secondary: #475569;       /* Slate 600 - Body */
--text-tertiary: #94A3B8;        /* Slate 400 - Captions */
--text-light: #FFFFFF;           /* White - On dark backgrounds */
--text-gradient: linear-gradient(135deg, #FF6B9D, #9B59B6, #3498DB);
```

#### Accent Colors
```css
--accent-pink: #FF6B9D;
--accent-purple: #9B59B6;
--accent-blue: #3498DB;
--accent-cyan: #00D4FF;
--accent-success: #10B981;       /* Emerald 500 */
--accent-warning: #F59E0B;       /* Amber 500 */
```

#### Utility Colors
```css
--border-light: #E2E8F0;         /* Slate 200 */
--border-medium: #CBD5E1;        /* Slate 300 */
--shadow-color: rgba(15, 23, 42, 0.08);
```

### Typography System

#### Font Families
```css
/* Display/Headlines - Modern, geometric, distinctive */
--font-display: 'Clash Display', 'Satoshi', 'General Sans', sans-serif;

/* Body - Clean, highly readable */
--font-body: 'Inter', 'Sora', 'DM Sans', system-ui, sans-serif;

/* Accent/Numbers - Technical, modern */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

#### Type Scale

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| Hero H1 | Display | 72px (4.5rem) | 700 | 1.1 | -0.02em |
| H1 | Display | 56px (3.5rem) | 600 | 1.15 | -0.02em |
| H2 | Display | 40px (2.5rem) | 600 | 1.2 | -0.01em |
| H3 | Display | 28px (1.75rem) | 600 | 1.3 | 0 |
| H4 | Body | 24px (1.5rem) | 600 | 1.35 | 0 |
| H5 | Body | 20px (1.25rem) | 600 | 1.4 | 0 |
| Body Large | Body | 20px (1.25rem) | 400 | 1.6 | 0 |
| Body | Body | 18px (1.125rem) | 400 | 1.6 | 0 |
| Body Small | Body | 16px (1rem) | 400 | 1.5 | 0 |
| Caption | Body | 14px (0.875rem) | 500 | 1.4 | 0.02em |
| Label | Body | 12px (0.75rem) | 600 | 1.2 | 0.05em |

#### Responsive Typography

```css
/* Tablet (768px - 1023px) */
@media (max-width: 1023px) {
  --hero-h1: 56px;
  --h1: 48px;
  --h2: 36px;
  --h3: 24px;
}

/* Mobile (< 768px) */
@media (max-width: 767px) {
  --hero-h1: 40px;
  --h1: 36px;
  --h2: 28px;
  --h3: 22px;
  --body: 16px;
}
```

### Spacing System

```css
/* Base unit: 4px */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;

/* Section Spacing */
--section-padding-y: 120px;
--section-padding-y-mobile: 80px;
--container-max-width: 1280px;
--container-padding-x: 24px;
```

### Border Radius System

```css
--radius-sm: 6px;        /* Buttons, inputs */
--radius-md: 12px;       /* Cards, containers */
--radius-lg: 16px;       /* Feature cards */
--radius-xl: 24px;       /* Large cards, sections */
--radius-2xl: 32px;      /* Hero containers */
--radius-full: 9999px;   /* Pills, avatars */
```

### Shadow System

```css
/* Subtle elevation */
--shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.05);

/* Card default */
--shadow-md: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 
             0 2px 4px -2px rgba(15, 23, 42, 0.04);

/* Card hover */
--shadow-lg: 0 10px 15px -3px rgba(15, 23, 42, 0.08), 
             0 4px 6px -4px rgba(15, 23, 42, 0.04);

/* Floating elements */
--shadow-xl: 0 20px 25px -5px rgba(15, 23, 42, 0.08), 
             0 8px 10px -6px rgba(15, 23, 42, 0.04);

/* Glow effects (gradient) */
--shadow-glow: 0 0 40px rgba(155, 89, 182, 0.3);
```

---

## 3. Copywriting (Español - Latinoamérica)

### Section 1: Hero

**Visual Context**: Full viewport height, gradient mesh background, centered content

#### Headline (H1)
```
Diseño Web que Convierte Visitantes en Clientes
```
*Alternative for A/B testing:*
```
Tu Negocio Merece un Sitio Web que Venda por Ti
```

#### Subheadline (Body Large)
```
Creamos experiencias digitales premium para agencias, hoteles, inmobiliarias y empresas de servicios. Sitios web que no solo se ven increíbles, sino que generan resultados reales.
```

#### Primary CTA
```
[Agenda tu Consulta Gratis]
```
*Microcopy below:* `Sin compromiso • Respuesta en 24h`

#### Secondary CTA
```
[Ver Portafolio]
```

#### Social Proof (Below CTAs)
```
★★★★★ 4.9/5 • Más de 50 proyectos entregados • Clientes en 8 países
```

---

### Section 2: Trust Strip (Benefits Bar)

**Visual Context**: Horizontal strip, icons + text, subtle gradient background

| Icon | Benefit Text |
|------|-------------|
| 🚀 | `Entrega en 2-4 semanas` |
| 🎨 | `Diseño 100% personalizado` |
| 📱 | `100% Responsive` |
| ⚡ | `Optimizado para velocidad` |
| 🔒 | `Soporte incluido 30 días` |

---

### Section 3: Services

**Visual Context**: 3x2 grid on desktop, 2-column on tablet, 1-column on mobile

#### Section Header
```
Nuestros Servicios
Soluciones digitales diseñadas para hacer crecer tu negocio
```

#### Service Card 1: Landing Pages de Alto Impacto

**Icon**: Target/Conversion icon

**Title**: Landing Pages que Venden

**Description**: 
```
Diseñamos páginas de aterrizaje estratégicamente creadas para convertir visitantes en clientes. Cada elemento está optimizado para maximizar tus conversiones.
```

**Key Benefits**:
- Copy persuasivo que conecta con tu audiencia
- Formularios optimizados para mayor tasa de respuesta
- A/B testing incluido para mejorar resultados

---

#### Service Card 2: Sitios Web Corporativos

**Icon**: Building/Office icon

**Title**: Sitios Web Profesionales

**Description**:
```
Presencia digital que refleja la calidad de tu marca. Sitios web corporativos que comunican profesionalismo y generan confianza desde el primer clic.
```

**Key Benefits**:
- Diseño que refuerza tu identidad de marca
- Estructura clara que guía a tus visitantes
- SEO técnico integrado desde el inicio

---

#### Service Card 3: E-commerce y Tiendas Online

**Icon**: Shopping/Cart icon

**Title**: Tiendas Online que Generan Ventas

**Description**:
```
Plataformas de comercio electrónico diseñadas para una experiencia de compra fluida y segura. Convierte visitantes en compradores recurrentes.
```

**Key Benefits**:
- Checkout optimizado para reducir abandono
- Integración con múltiples pasarelas de pago
- Panel de administración intuitivo

---

#### Service Card 4: Dashboards y Paneles Admin

**Icon**: Layout/Dashboard icon

**Title**: Paneles de Administración

**Description**:
```
Interfaces internas que simplifican la gestión de tu negocio. Dashboards intuitivos que permiten a tu equipo trabajar de manera más eficiente.
```

**Key Benefits**:
- Visualización clara de métricas importantes
- Flujos de trabajo optimizados
- Accesible desde cualquier dispositivo

---

#### Service Card 5: Rediseño de Sitios Web

**Icon**: Refresh/Update icon

**Title**: Renovación Digital Completa

**Description**:
```
Transformamos sitios web desactualizados en experiencias modernas y efectivas. Mantenemos lo que funciona y mejoramos lo que no.
```

**Key Benefits**:
- Auditoría completa del sitio actual
- Migración sin pérdida de SEO
- Diseño actualizado que refleja tu evolución

---

#### Service Card 6: Mantenimiento y Soporte

**Icon**: Shield/Support icon

**Title**: Mantenimiento Profesional

**Description**:
```
Tu sitio web siempre actualizado, seguro y funcionando a la perfección. Nos encargamos de la técnica para que tú te enfoques en tu negocio.
```

**Key Benefits**:
- Actualizaciones de seguridad mensuales
- Backups automáticos diarios
- Soporte técnico prioritario

---

### Section 4: Why Choose Us

**Visual Context**: Alternating layout (image + text), gradient accents

#### Section Header
```
¿Por Qué Elegir PagensMedia?
No somos solo otra agencia de diseño
```

#### Differentiator 1: Enfoque en Resultados

**Title**: Diseño con Propósito

**Description**:
```
No creamos sitios web solo porque sí. Cada diseño, cada color, cada botón tiene un objetivo: hacer crecer tu negocio. Medimos el éxito por tus resultados, no por lo bonito que se vea.
```

---

#### Differentiator 2: Proceso Transparente

**Title**: Comunicación Clara en Cada Etapa

**Description**:
```
Sabemos lo frustrante que es quedarse en la oscuridad. Por eso te mantenemos informado con actualizaciones semanales y acceso a ver el progreso en tiempo real. Sin sorpresas, sin retrasos ocultos.
```

---

#### Differentiator 3: Especialistas en tu Industria

**Title**: Entendemos tu Mercado

**Description**:
```
Hemos trabajado con agencias, hoteles, inmobiliarias y empresas de servicios. Conocemos los desafíos específicos de tu industria y sabemos qué funciona para convertir visitantes en clientes.
```

---

#### Differentiator 4: Tecnología Moderna

**Title**: Lo Último, Siempre

**Description**:
```
Usamos las tecnologías más actuales que garantizan velocidad, seguridad y escalabilidad. Tu sitio web estará construido para durar y crecer contigo, no para necesitar un rediseño en 6 meses.
```

---

#### Differentiator 5: Soporte Real

**Title**: Estamos Aquí Después del Lanzamiento

**Description**:
```
El lanzamiento es solo el comienzo. Incluimos 30 días de soporte prioritario para asegurarnos de que todo funcione perfectamente. Y si necesitas ayuda después, seguimos aquí.
```

---

### Section 5: Process

**Visual Context**: Horizontal timeline on desktop, vertical on mobile, numbered steps

#### Section Header
```
Nuestro Proceso
De la idea a la realidad en 4 pasos simples
```

#### Step 1: Descubrimiento

**Number**: 01
**Title**: Conocemos tu Negocio

**Description**:
```
Empezamos con una conversación profunda para entender tus objetivos, tu audiencia y lo que hace único a tu negocio. Definimos juntos el alcance y las expectativas.
```

**Duration**: `1-2 días`

---

#### Step 2: Diseño

**Number**: 02
**Title**: Creamos tu Identidad Digital

**Description**:
```
Diseñamos wireframes y prototipos interactivos. Recibes propuestas visuales para aprobar antes de escribir una sola línea de código. Iteramos hasta que estés 100% satisfecho.
```

**Duration**: `5-10 días`

---

#### Step 3: Desarrollo

**Number**: 03
**Title**: Construimos tu Sitio

**Description**:
```
Transformamos los diseños aprobados en un sitio web funcional, rápido y optimizado. Código limpio, SEO integrado y pruebas en múltiples dispositivos.
```

**Duration**: `7-14 días`

---

#### Step 4: Lanzamiento

**Number**: 04
**Title**: Tu Sitio al Mundo

**Description**:
```
Configuramos hosting, dominio, analíticas y todo lo necesario. Te capacitamos para gestionar tu contenido y te acompañamos durante los primeros 30 días.
```

**Duration**: `1-2 días`

---

### Section 6: Portfolio

**Visual Context**: Grid of case studies, hover reveals details

#### Section Header
```
Proyectos Recientes
Resultados que hablan por sí solos
```

#### Case Study 1

**Category**: `Inmobiliaria`
**Title**: Landing Page para Agencia Premium

**Description**:
```
Diseñamos una experiencia de captación de leads para una agencia inmobiliaria de lujo. Resultado: 150% más consultas calificadas en el primer mes.
```

**Tags**: Landing Page • Lead Generation • Diseño Premium

---

#### Case Study 2

**Category**: `Hotel`
**Title**: Sitio Web para Boutique Hotel

**Description**:
```
Rediseño completo que transmitió la esencia única del hotel. Aumento del 80% en reservas directas y reducción de dependencia de OTAs.
```

**Tags**: Rediseño • Booking Directo • SEO Local

---

#### Case Study 3

**Category**: `Agencia`
**Title**: Plataforma de Servicios Digitales

**Description**:
```
Sitio web corporativo con sistema de cotización automática. La agencia redujo un 60% el tiempo de respuesta a prospectos.
```

**Tags**: Web Corporativa • Automatización • UX

---

#### Case Study 4

**Category**: `E-commerce`
**Title**: Tienda Online de Productos Orgánicos

**Description**:
```
E-commerce desde cero con flujo de compra optimizado. Conversión del 4.2% en el primer trimestre, superando el promedio de la industria.
```

**Tags**: E-commerce • Shopify • Conversión

---

### Section 7: Testimonials

**Visual Context**: Card carousel or grid, gradient border accents

#### Section Header
```
Lo Que Dicen Nuestros Clientes
Historias de éxito que nos enorgullecen
```

#### Testimonial 1

> *"PagensMedia entendió exactamente lo que necesitábamos. No solo nos entregaron un sitio web hermoso, sino una herramienta que realmente genera leads. Nuestros clientes ahora nos encuentran más fácil y se convierten más rápido."*

**Name**: *María González* (nombre de ejemplo)
**Role**: Directora de Marketing
**Company**: [Nombre de empresa] (ejemplo)
**Rating**: ★★★★★

---

#### Testimonial 2

> *"El proceso fue increíblemente fluido. Nos mantuvieron informados en cada paso y el resultado final superó nuestras expectativas. Nuestro sitio web ahora refleja la calidad premium de nuestros servicios."*

**Name**: *Carlos Méndez* (nombre de ejemplo)
**Role**: CEO
**Company**: [Nombre de empresa] (ejemplo)
**Rating**: ★★★★★

---

#### Testimonial 3

> *"Después de trabajar con otras agencias que nos dejaron a medias, PagensMedia fue un alivio. Entregaron a tiempo, el soporte post-lanzamiento ha sido excelente, y los resultados son tangibles: más ventas, menos complicaciones."*

**Name**: *Ana Lucía Vargas* (nombre de ejemplo)
**Role**: Fundadora
**Company**: [Nombre de empresa] (ejemplo)
**Rating**: ★★★★★

---

### Section 8: FAQ

**Visual Context**: Accordion-style expandable items, gradient hover states

#### Section Header
```
Preguntas Frecuentes
Todo lo que necesitas saber antes de empezar
```

#### Question 1
**Q**: ¿Cuánto tiempo toma crear mi sitio web?

**A**: 
```
Depende de la complejidad del proyecto. Una landing page puede estar lista en 1-2 semanas, mientras que un sitio web corporativo completo o e-commerce puede tomar 3-4 semanas. Te damos un timeline específico después de entender tus necesidades en la consulta inicial.
```

---

#### Question 2
**Q**: ¿Cuánto cuesta un sitio web?

**A**:
```
Cada proyecto es único, por eso personalizamos nuestras propuestas según tus necesidades específicas. Después de la consulta gratuita, recibes una propuesta detallada sin compromiso. No hay costos ocultos: todo está claro desde el inicio.
```

---

#### Question 3
**Q**: ¿El diseño es 100% personalizado o usan plantillas?

**A**:
```
100% personalizado. No usamos plantillas genéricas. Cada diseño se crea desde cero basándonos en tus objetivos, tu marca y tu audiencia. Tu sitio web será único, como tu negocio.
```

---

#### Question 4
**Q**: ¿Mi sitio web funcionará en celulares?

**A**:
```
Absolutamente. Todos nuestros sitios web son 100% responsive, lo que significa que se ven y funcionan perfectamente en cualquier dispositivo: computadoras, tablets y celulares. Además, optimizamos para velocidad en conexiones móviles.
```

---

#### Question 5
**Q**: ¿Qué pasa si necesito cambios después del lanzamiento?

**A**:
```
Incluimos 30 días de soporte prioritario post-lanzamiento donde hacemos ajustes sin costo adicional. Después de ese período, ofrecemos planes de mantenimiento mensuales o puedes contratar horas de soporte según necesites.
```

---

#### Question 6
**Q**: ¿Necesito tener todo el contenido listo antes de empezar?

**A**:
```
No es necesario. Podemos trabajar con lo que tengas y te asesoramos sobre qué contenido necesitas. También ofrecemos servicios de copywriting y creación de contenido visual si lo requieres. Lo importante es empezar.
```

---

### Section 9: Final CTA

**Visual Context**: Dark section with gradient accent, centered content, strong contrast

#### Headline
```
¿Listo para Transformar tu Presencia Digital?
```

#### Supporting Text
```
Agenda una consulta gratuita de 30 minutos. Analizamos tu situación actual y te mostramos exactamente cómo podemos ayudarte a alcanzar tus objetivos.
```

#### CTA Button
```
[Agenda tu Consulta Gratis]
```

#### Trust Signal Below
```
✓ Sin compromiso  ✓ Respuesta en 24 horas  ✓ Propuesta personalizada
```

---

### Section 10: Footer

**Visual Context**: Multi-column layout, subtle gradient top border

#### Column 1: Brand
```
PagensMedia

Creamos experiencias digitales que generan resultados reales para agencias, hoteles, inmobiliarias y empresas de servicios.

[LinkedIn Icon] [Instagram Icon] [Twitter/X Icon]
```

#### Column 2: Servicios
```
Servicios

• Landing Pages
• Sitios Web Corporativos
• Tiendas Online
• Paneles Admin
• Rediseño Web
• Mantenimiento
```

#### Column 3: Compañía
```
Compañía

• Sobre Nosotros
• Proceso de Trabajo
• Portafolio
• Blog (próximamente)
• Contacto
```

#### Column 4: Contacto
```
Contacto

📧 hola@pagensmedia.com
📱 +XX XXX XXX XXXX (placeholder)
🌐 www.pagensmedia.com

Horario: Lunes a Viernes, 9am - 6pm (GMT-5)
```

#### Bottom Bar
```
© 2025 PagensMedia. Todos los derechos reservados.

[Política de Privacidad] [Términos de Servicio]
```

---

## 4. Component Specifications

### Navigation Bar

**Layout**: Fixed top, full-width, height 80px
**Background**: White with subtle backdrop blur on scroll
**Shadow**: None initially, `shadow-sm` after scroll

**Responsive Behavior**:
- Desktop: Horizontal nav links visible
- Mobile (< 768px): Hamburger menu, slide-in drawer from right

**Animation**:
- Logo: `scale(1.02)` on hover, duration 200ms
- Nav Links: Underline slides in from left on hover
- CTA Button: Gradient shift + slight lift on hover
- Scroll behavior: Background opacity transition 0 → 1 after 100px scroll

**States**:
- Default: Transparent background
- Scrolled: White background with blur
- Active link: Gradient text color

---

### Hero Section

**Layout**: Full viewport height, centered content, max-width 900px
**Background**: 
- Base: White
- Animated gradient mesh (pink→purple→blue→cyan) at 15% opacity
- Subtle noise texture overlay

**Content Stack** (vertical, gap 32px):
1. Label badge: "AGENCIA DE DISEÑO WEB PREMIUM"
2. H1 Headline (gradient text on key words)
3. Subheadline (max-width 600px, centered)
4. Button group (horizontal on desktop, vertical on mobile)
5. Social proof bar

**Animation Sequence** (on load):
```
0ms:    Background gradient fades in (800ms)
200ms:  Label badge slides up + fades (500ms)
400ms:  Headline words stagger in (600ms)
600ms:  Subheadline fades in (400ms)
800ms:  Buttons slide up (400ms)
1000ms: Social proof fades in (300ms)
```

**Gradient Text Effect**:
```css
.gradient-text {
  background: linear-gradient(135deg, #FF6B9D, #9B59B6, #3498DB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

### Trust Strip

**Layout**: Full-width, horizontal scroll on mobile
**Background**: Subtle gradient (white → cool gray 50)
**Height**: 80px

**Animation**:
- Scroll-triggered fade-in when section enters viewport
- Icons have subtle pulse animation on loop (2s interval)

---

### Service Cards

**Layout**: CSS Grid, 3 columns desktop, 2 tablet, 1 mobile
**Gap**: 32px
**Card Dimensions**: Auto height, min-height 400px

**Card Structure**:
1. Icon container (64x64px, gradient background, rounded-xl)
2. Title (H3)
3. Description (body)
4. Benefits list (3 items with checkmarks)

**Visual Style**:
- Background: White
- Border: 1px solid `--border-light`
- Border-radius: `--radius-xl` (24px)
- Shadow: `--shadow-md`
- Padding: 32px

**Hover State**:
```css
.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: transparent;
}
```

**Animation**:
- Scroll-triggered: Cards stagger in with 100ms delay between each
- Hover: Lift + shadow increase, duration 300ms, ease-out

---

### Differentiators Section

**Layout**: Alternating 2-column grid (image | text, then text | image)
**Background**: Alternating white and `--bg-secondary`

**Animation**:
- Scroll-triggered: Content slides in from respective side
- Image: Subtle parallax effect on scroll
- Icons: Draw-in animation (SVG stroke animation)

---

### Process Timeline

**Layout**: Horizontal on desktop, vertical on mobile
**Line**: Gradient line connecting steps (2px width)

**Step Component**:
- Number badge (circle, 48px, gradient background)
- Title (H4)
- Description
- Duration tag (pill shape)

**Animation**:
- Line draws in as user scrolls (SVG path animation)
- Step numbers scale up sequentially
- Content fades in after number animation

---

### Portfolio Cards

**Layout**: 2x2 grid on desktop, 1 column on mobile
**Aspect Ratio**: 4:3

**Card Structure**:
- Image (cover, full card)
- Overlay (gradient from transparent to dark at bottom)
- Content (absolute positioned at bottom)

**Hover State**:
- Image: Scale 1.05 with overflow hidden
- Overlay: Opacity increases
- Content: Slides up 16px
- "Ver Proyecto" link appears

---

### Testimonial Cards

**Layout**: 3-column grid or carousel
**Background**: White with subtle gradient border

**Card Style**:
- Quote marks (large, gradient, absolute positioned)
- Quote text (italic, body large)
- Author section (avatar + name + role)
- Rating stars (gradient fill)

**Animation**:
- Carousel auto-advances every 6 seconds
- Manual navigation with dots
- Cards have subtle hover lift

---

### FAQ Accordion

**Layout**: Single column, max-width 800px, centered
**Item Structure**:
- Question (H4, clickable)
- Plus/minus icon (animated rotation)
- Answer (expandable content)

**Interaction**:
- Click to expand/collapse
- Only one item open at a time (optional)
- Smooth height transition (300ms)
- Icon rotates 45° to become X

**Visual**:
- Default: Light background, closed
- Open: Slightly darker background, border-left gradient accent

---

### CTA Section

**Layout**: Full-width, centered content
**Background**: Dark (`--bg-dark`) with animated gradient orbs

**Gradient Orbs** (decorative):
```css
.orb-1 {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255,107,157,0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 8s ease-in-out infinite;
}
```

**Animation**:
- Orbs: Continuous floating animation
- Content: Fade in on scroll
- Button: Pulse glow effect on loop

---

### Footer

**Layout**: 4-column grid on desktop, 2-column tablet, 1-column mobile
**Background**: `--bg-dark`
**Text**: Light (`--text-light`)

**Top Border**: Gradient line (full width, 2px height)

**Link Hover**:
- Color shifts to gradient
- Underline slides in from left

---

## 5. SEO Requirements

### Page Metadata

**Title** (50-60 characters):
```
PagensMedia | Diseño Web Premium para Agencias y Empresas
```

**Meta Description** (150-160 characters):
```
Creamos sitios web que convierten visitantes en clientes. Especialistas en landing pages, e-commerce y web corporativa para LATAM. Consulta gratis.
```

### Heading Hierarchy

```
H1: Diseño Web que Convierte Visitantes en Clientes (Hero)
  H2: Nuestros Servicios
    H3: Landing Pages que Venden
    H3: Sitios Web Profesionales
    H3: Tiendas Online que Generan Ventas
    H3: Paneles de Administración
    H3: Renovación Digital Completa
    H3: Mantenimiento Profesional
  H2: ¿Por Qué Elegir PagensMedia?
    H3: Diseño con Propósito
    H3: Comunicación Clara en Cada Etapa
    H3: Entendemos tu Mercado
    H3: Lo Último, Siempre
    H3: Estamos Aquí Después del Lanzamiento
  H2: Nuestro Proceso
    H3: Conocemos tu Negocio
    H3: Creamos tu Identidad Digital
    H3: Construimos tu Sitio
    H3: Tu Sitio al Mundo
  H2: Proyectos Recientes
    H3: [Project Title 1]
    H3: [Project Title 2]
    H3: [Project Title 3]
    H3: [Project Title 4]
  H2: Lo Que Dicen Nuestros Clientes
  H2: Preguntas Frecuentes
  H2: ¿Listo para Transformar tu Presencia Digital?
```

### Keywords to Target

**Primary Keywords**:
- diseño web
- agencia de diseño web
- sitios web profesionales
- landing pages
- diseño web para agencias

**Secondary Keywords**:
- diseño web latinoamérica
- páginas web corporativas
- tiendas online
- rediseño web
- desarrollo web premium
- diseño web hoteles
- diseño web inmobiliarias
- UX/UI design

**Long-tail Keywords**:
- diseño web que convierte visitantes en clientes
- agencia de diseño web para empresas de servicios
- cuánto cuesta un sitio web profesional
- diseño web con entrega rápida
- mantenimiento de sitios web

### Technical SEO

```html
<!-- Canonical URL -->
<link rel="canonical" href="https://www.pagensmedia.com/">

<!-- Open Graph -->
<meta property="og:title" content="PagensMedia | Diseño Web Premium">
<meta property="og:description" content="Creamos sitios web que convierten visitantes en clientes.">
<meta property="og:image" content="https://www.pagensmedia.com/og-image.jpg">
<meta property="og:url" content="https://www.pagensmedia.com/">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="PagensMedia | Diseño Web Premium">
<meta name="twitter:description" content="Creamos sitios web que convierten visitantes en clientes.">

<!-- Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "PagensMedia",
  "description": "Agencia de diseño web especializada en sitios que generan resultados",
  "url": "https://www.pagensmedia.com",
  "areaServed": "Latinoamérica",
  "serviceType": ["Diseño Web", "Desarrollo Web", "Landing Pages", "E-commerce"]
}
</script>
```

### Image SEO

All images should have:
- Descriptive file names (e.g., `diseno-web-hotel-boutique.jpg`)
- Alt text in Spanish
- WebP format with fallbacks
- Lazy loading (except hero image)

---

## 6. Responsive Breakpoints

```css
/* Mobile First Approach */

/* Small devices */
@media (min-width: 640px) { /* sm */ }

/* Tablets */
@media (min-width: 768px) { /* md */ }

/* Small desktops */
@media (min-width: 1024px) { /* lg */ }

/* Large desktops */
@media (min-width: 1280px) { /* xl */ }

/* Extra large */
@media (min-width: 1536px) { /* 2xl */ }
```

### Key Responsive Changes

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Hero H1 | 72px | 56px | 40px |
| Section Padding | 120px | 100px | 80px |
| Services Grid | 3 cols | 2 cols | 1 col |
| Process Timeline | Horizontal | Vertical | Vertical |
| Portfolio Grid | 2x2 | 2 cols | 1 col |
| Navigation | Horizontal | Horizontal | Hamburger |
| CTA Buttons | Horizontal | Horizontal | Stacked |

---

## 7. Animation & Motion Guidelines

### Principles
- Animations enhance, never distract
- Motion guides attention to important elements
- Respect `prefers-reduced-motion`
- Keep durations snappy (200-500ms)

### Easing Functions
```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Performance
- Use `transform` and `opacity` for animations
- Apply `will-change` sparingly
- Lazy-load below-fold animations

---

## 8. Accessibility Requirements

- Color contrast ratio minimum 4.5:1 for body text
- Focus indicators visible on all interactive elements
- Skip to content link
- Alt text for all images
- ARIA labels for icons and interactive elements
- Keyboard navigation support
- Reduced motion support:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

**Document Version**: 1.0
**Created**: April 2025
**Project**: PagensMedia Website Design
**Language**: Spanish (Latin America)
