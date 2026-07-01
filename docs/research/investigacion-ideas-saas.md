# Investigación de oportunidades de negocio — Micro-SaaS 2026

> Documento de investigación para la decisión de producto de Project Genesis.
> Combina datos de mercado verificados con criterio de CTO.
> Fecha: 2026-07-01.

## Marco y criterios

Filtro aplicado a todas las ideas:

1. Resolver un problema que muchas personas/empresas tengan de verdad.
2. Costos de mantenimiento muy bajos.
3. Evitar dependencia de APIs caras (especialmente tokens de LLM de pago).
4. Construible principalmente con Claude Code (web app, TypeScript/Next.js, sin equipos grandes).
5. Potencial de SaaS rentable por suscripción.
6. Poca competencia o diferenciación clara.

**Sesgo deliberado:** evitar "wrappers de IA" que dependan de tokens de LLM
(matan el margen). Las mejores oportunidades son **software determinista +
regulatorio + datos**.

### Datos de mercado verificados

- El mercado micro-SaaS crece ~30%/año; los negocios bootstrapped sanos operan
  con **>70% de margen** e **infraestructura por <$100/mes**.
- La ventaja del **"boring software"** es real: los fundadores ambiciosos evitan
  nichos aburridos → poca competencia + alta disposición a pagar.
- **Regulación = urgencia y disposición a pagar.** El *European Accessibility
  Act* entró en vigor el **28 de junio de 2025**, exige **WCAG 2.1 AA**, con
  **multas de hasta €100.000** por infracción y demandas ya activas en la UE.

---

## Las 10 ideas

### 1. Monitor de cumplimiento de accesibilidad web (EAA/WCAG) para pymes de la UE
- **Problema:** desde junio 2025 toda web/servicio digital que venda en la UE
  debe cumplir WCAG 2.1 AA; multas de hasta €100k. La mayoría de pymes no sabe
  ni por dónde empezar.
- **Cliente ideal:** pymes europeas con e-commerce/web de servicios por encima
  del umbral de microempresa.
- **Monetización:** suscripción €29–149/mes por escaneo continuo + alertas +
  generación del informe de accesibilidad legalmente exigido.
- **Dificultad:** 4/10 (motores open-source como axe-core/pa11y hacen el
  análisis; tú construyes crawler + dashboard + reportes).
- **Potencial comercial:** 9/10.
- **Riesgos:** competidores grandes (Siteimprove, AudioEye) y los "widgets
  overlay" (accessiBe) — aunque estos últimos tienen mala reputación y demandas.
- **Por qué puede ser grande:** mercado = toda web que toque la UE; tailwind
  regulatorio con deadline ya vencido; costes casi nulos; el monitoreo continuo
  justifica la suscripción.

### 2. Gestor de Certificados de Seguro (COI) para administradores de fincas y constructoras
- **Problema:** propietarios/contratistas deben recolectar y vigilar la
  caducidad de los seguros de cada proveedor/subcontratista. Hoy con Excel y
  emails; un certificado vencido = riesgo legal enorme.
- **Cliente ideal:** property managers, general contractors, facility managers.
- **Monetización:** $49–199/mes según nº de proveedores rastreados.
- **Dificultad:** 4/10.
- **Potencial comercial:** 8/10.
- **Riesgos:** ventas B2B más lentas; competencia (myCOI, TrustLayer) con
  freemium agresivo en el extremo pyme.
- **Por qué puede ser grande:** dolor agudo, recurrente y con alto coste de no
  resolverlo → disposición a pagar alta y baja rotación.

### 3. Rastreador de fechas críticas de contratos de alquiler comercial
- **Problema:** los arrendamientos comerciales tienen fechas que cuestan dinero
  si se olvidan (renovaciones, escalados de renta, ventanas de opción).
- **Cliente ideal:** pequeñas cadenas con varios locales, pequeños landlords,
  despachos que gestionan carteras.
- **Monetización:** $39–149/mes por cartera de contratos.
- **Dificultad:** 5/10.
- **Potencial comercial:** 7/10.
- **Riesgos:** entrada de datos inicial es fricción; precisión legal.
- **Por qué puede ser grande:** cada fecha olvidada cuesta miles → ROI evidente.

### 4. Control de renovación de licencias, permisos y certificaciones
- **Problema:** restaurantes, clínicas, gremios deben renovar
  licencias/permisos/seguros en fechas dispersas; olvidarlo = multas o cierre.
- **Cliente ideal:** negocios locales multi-licencia y franquicias.
- **Monetización:** $19–79/mes.
- **Dificultad:** 3/10.
- **Potencial comercial:** 7/10.
- **Riesgos:** percepción "esto lo hago con un calendario" → hay que aportar
  plantillas por sector y catálogo de requisitos.
- **Por qué puede ser grande:** mantenimiento casi nulo, horizontal entre muchos
  sectores, fácil de empaquetar por vertical.

### 5. Generador de etiquetas de alérgenos y cumplimiento de etiquetado alimentario
- **Problema:** pequeños productores deben cumplir normativa de etiquetado
  (alérgenos, info nutricional, "Natasha's Law" UK, FIC en la UE).
- **Cliente ideal:** pequeñas marcas de alimentación, obradores, dark kitchens.
- **Monetización:** $25–99/mes o por catálogo de productos.
- **Dificultad:** 5/10.
- **Potencial comercial:** 7/10.
- **Riesgos:** exactitud nutricional (responsabilidad); requiere datos fiables.
- **Por qué puede ser grande:** boom de marcas D2C de comida; regulatorio;
  recurrente al cambiar recetas/productos.

### 6. Monitor de precios MAP para marcas D2C y distribuidores
- **Problema:** revendedores que rompen el precio mínimo (MAP) erosionan margen
  y marca. Detectarlo manualmente es imposible.
- **Cliente ideal:** marcas con red de distribución, fabricantes en marketplaces.
- **Monetización:** $99–499/mes según nº de SKUs/sitios monitorizados.
- **Dificultad:** 6/10 (mantenimiento de scrapers es el coste real).
- **Potencial comercial:** 8/10.
- **Riesgos:** scraping frágil/legalmente sensible; coste de proxies.
- **Por qué puede ser grande:** valor monetario directo y medible → tickets
  altos y sticky.

### 7. Plataforma de administración para comunidades/HOA autogestionadas
- **Problema:** comunidades de vecinos sin administrador gestionan cuotas,
  incidencias, actas y votaciones con WhatsApp y papel.
- **Cliente ideal:** juntas de vecinos voluntarias, pequeñas comunidades.
- **Monetización:** $29–99/mes por comunidad.
- **Dificultad:** 5/10.
- **Potencial comercial:** 7/10.
- **Riesgos:** decisor difuso (junta rotativa); ventas atomizadas.
- **Por qué puede ser grande:** millones de comunidades; muy "boring", baja
  competencia local, expandible a pagos online.

### 8. Registro digital de turnos/cuidados con auditoría para residencias y clínicas
- **Problema:** centros de cuidado pequeños llevan registros en papel; las
  inspecciones exigen trazabilidad. El papel falla auditorías.
- **Cliente ideal:** residencias pequeñas, centros de día, clínicas.
- **Monetización:** $99–299/mes por centro.
- **Dificultad:** 5/10.
- **Potencial comercial:** 8/10.
- **Riesgos:** sector regulado y conservador; ciclo de venta lento; privacidad
  de datos de salud.
- **Por qué puede ser grande:** alto valor (pasar inspecciones), pegajoso,
  expandible a más documentación de compliance.

### 9. Recordkeeping de reparto de propinas y cumplimiento laboral para hostelería
- **Problema:** repartir propinas legalmente y dejar registro auditable es un
  lío; errores = reclamaciones y sanciones laborales.
- **Cliente ideal:** restaurantes/bares independientes.
- **Monetización:** $39–129/mes por local.
- **Dificultad:** 4/10.
- **Potencial comercial:** 6/10.
- **Riesgos:** reglas varían por país/estado (esfuerzo de localización).
- **Por qué puede ser grande:** dolor recurrente cada cierre de turno; integra
  con nómina (upsell).

### 10. Monitor de umbrales de IVA/sales-tax (nexus) para e-commerce pequeño
- **Problema:** al crecer, los vendedores cruzan umbrales de registro fiscal sin
  enterarse → deudas y multas. Las soluciones (Avalara) son caras.
- **Cliente ideal:** sellers de Shopify/Amazon en expansión.
- **Monetización:** $29–99/mes (solo alerta/monitorización).
- **Dificultad:** 5/10.
- **Potencial comercial:** 7/10.
- **Riesgos:** precisión fiscal sensible; **ya existe competencia directa
  (NexusMonitor, Kintsugi, Sidr) en el Shopify App Store** → DESCARTADA.
- **Por qué podía ser grande:** APIs de tienda baratas/gratis; recurrente.

---

## Análisis reponderado (lente: solo founder + IA, lanzar en 1-2 meses)

Prioridad: mejor equilibrio entre potencial, velocidad de desarrollo y rapidez
para conseguir los primeros clientes (no solo rentabilidad).

| Idea | Potencial | Velocidad build | Coste | Rapidez de clientes | Balance |
|---|:--:|:--:|:--:|:--:|:--:|
| #1 Accesibilidad (EAA/WCAG) | 9 | 8 | 9 | 9 | **8.7 🥇** |
| #5 Etiquetado de alérgenos | 7 | 7 | 9 | 7 | 7.2 🥈 |
| #4 Renovación de licencias | 7 | 9 | 9 | 6 | 7.1 🥉 |
| #2 COI | 8 | 7 | 8 | 4 | 6.4 |
| #6 MAP price monitor | 8 | 5 | 5 | 4 | 5.6 |

**Cambios respecto a la primera ronda (por investigación):**
- **#10 (nexus fiscal) descartada:** ya existe `NexusMonitor` en el Shopify App
  Store, más Kintsugi, Sidr y TaxCloud.
- **#2 (COI) baja para un solista:** TrustLayer regala hasta 50 proveedores
  gratis; el extremo pyme ya está contestado → difícil monetizar rápido en solo.

---

## Deep-dive de las 3 finalistas

### 🥇 Finalista 1 — Monitor de accesibilidad EAA/WCAG para pymes UE

**La investigación la REFUERZA:**
- La FTC multó a **accessiBe con $1M en abril 2025** por afirmar en falso que su
  widget hacía cumplir WCAG.
- **~40% de las empresas demandadas en 2025 ya tenían un "overlay" instalado.**
- Los tribunales **no reconocen los overlays** como cumplimiento real. AudioEye
  cobra **$199–799/mes**; Siteimprove es enterprise.

→ El mercado está lleno de soluciones caras o desacreditadas. Hueco abierto para
"auditoría honesta + remediación real + asequible + en español".

- **MVP en 1-2 meses:** URL → rastreo de N páginas → motor open-source
  `axe-core` (sin coste por uso, sin LLM) → dashboard con violaciones
  priorizadas + cómo arreglarlas → generación del "informe/declaración de
  accesibilidad" en PDF → re-escaneo semanal automático con email de alerta.
- **Recortar del V1:** sin auto-reparación de código, sin multi-idioma, sin
  integraciones. Solo escanear, explicar, documentar, monitorizar.
- **Coste de operar:** <$30/mes. Sin APIs de pago.
- **Primeros 10 clientes:** el producto ES el canal. Escaneo gratis instantáneo
  → muestras violaciones reales → urgencia regulatoria. Sirve para: landing con
  scan gratis (PLG), outreach en frío hiper-personalizado, app en Shopify App
  Store para tiendas hispanohablantes.
- **Riesgos (solista):** competencia establecida → ganar por precio+idioma+
  honestidad. No sobre-prometer "cumplimiento 100%" (por eso multaron a
  accessiBe) → posicionar como auditoría + documentación.
- **Scores:** Potencial 9 · Build 8 · Coste 9 · Clientes 9.

### 🥈 Finalista 2 — Generador de etiquetas de alérgenos / cumplimiento alimentario

- **Problema y por qué ahora:** normativa de etiquetado (FIC UE, "Natasha's Law"
  UK) obliga a declarar alérgenos e info nutricional; hacerlo mal es sancionable.
  Boom de marcas D2C de comida sin herramientas asequibles.
- **Cliente ideal:** pequeñas marcas de alimentación, obradores, dark kitchens.
- **MVP en 1-2 meses:** ingredientes → cálculo nutricional con bases de datos
  públicas gratuitas (BEDCA, USDA, CIQUAL) → detección de alérgenos → etiqueta
  imprimible conforme a normativa en PDF. Sin LLM, todo determinista.
- **Coste de operar:** <$30/mes (datasets nutricionales gratis).
- **Clientes:** food-makers muy activos en redes → contenido + comunidad; ferias
  y grupos de productores. Un "antes/después" de etiqueta es muy compartible.
- **Riesgos:** responsabilidad por exactitud → disclaimers y validación cuidada.
  Localización por país.
- **Scores:** Potencial 7 · Build 7 · Coste 9 · Clientes 7.

### 🥉 Finalista 3 — Control de renovación de licencias, permisos y seguros

- **Problema:** negocios regulados renuevan licencias/permisos/seguros en fechas
  dispersas; olvidarlo = multas o cierre.
- **Cliente ideal:** negocios locales con múltiples licencias; pequeñas
  franquicias.
- **MVP en 1-2 meses:** el más rápido — BD de deadlines + motor de recordatorios
  impecable + plantillas por sector. Alertas escalonadas (90/30/7 días).
- **Coste de operar:** mínimo. Solo email/notificaciones.
- **Clientes:** debilidad = objeción "esto lo hago con Google Calendar". Se
  supera empaquetando por vertical con el catálogo de requisitos ya cargado.
- **Riesgos:** diferenciación percibida baja si es genérico; ir vertical por
  vertical.
- **Scores:** Potencial 7 · Build 9 · Coste 9 · Clientes 6.

---

## 🎯 Recomendación: apostar por la Finalista 1 (Accesibilidad EAA)

No es solo la más rentable — es la que **mejor equilibra los tres ejes**, y gana
en el que más importa ahora: **conseguir clientes rápido**.

**Razón decisiva:** en las otras dos, producto y captación son cosas separadas.
En accesibilidad, **el producto ES el canal de adquisición**. Un escaneo gratuito
instantáneo:
1. Es un lead magnet que se comparte solo (PLG).
2. Convierte el outreach en frío en algo hiper-relevante ("tu web tiene 47
   errores sancionables").
3. Crea urgencia real por el marco regulatorio (deadline vencido + multas).

Para una sola persona sin equipo de ventas, eso vale oro. Sumado a: build
realista de 1-2 meses, coste de operar casi nulo (sin APIs de pago, sin tokens
de LLM), competencia cara o desacreditada, y la ventaja de idioma (pymes hispanas
mal atendidas).

**Condición antes de escribir código:** validar 2-3 señales de demanda reales
(¿cuántas tiendas hispanas fallan el escaneo? ¿qué buscan en Google? 5
conversaciones con dueños de tienda). Un fin de semana de validación ahorra meses.

---

## Fuentes

- European Accessibility Act 2025 — Siteimprove:
  https://www.siteimprove.com/blog/european-accessibility-act-what-june-2025-deadline-means/
- EAA Compliance Guide — accessibility.works:
  https://www.accessibility.works/european-accessibility-act/
- EAA 2025 — Kinsta: https://kinsta.com/blog/european-accessibility-act/
- Bootstrapped SaaS Niches 2026 — Entrepreneur Loop:
  https://entrepreneurloop.com/bootstrapped-saas-niches-solo-founders/
- Profitable Micro SaaS Niches 2026 — Superframeworks:
  https://superframeworks.com/articles/profitable-micro-saas-niches
- FTC $1M vs accessiBe + overlay lawsuits — TestParty:
  https://testparty.ai/blog/why-800-businesses-with-accessibe-were-still-sued
- AudioEye pricing & litigation — RatedWithAI:
  https://ratedwithai.com/blog/audioeye-review-2026
- Overlays no reconocidos por tribunales — Adirondack:
  https://adirondackwebsitedesign.com/lawsuits-rise-against-companies-using-overlay-solutions-like-accessibe-and-userway-adirondack-website-design/
- COI (myCOI mín. 200 / TrustLayer 50 gratis) — Certificial:
  https://www.certificial.com/blog-post/we-compared-7-best-coi-tracking-software-in-depth-feedback-and-review
- NexusMonitor en Shopify App Store: https://apps.shopify.com/nexusmonitor

> Nota: las fuentes de listicles de mercado son de calidad media; los hechos
> regulatorios (EAA, FTC) están corroborados por múltiples fuentes independientes.
> La validación de mercado real es el siguiente paso recomendado.
