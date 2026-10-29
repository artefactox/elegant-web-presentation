// Contenido de la propuesta «Gestión de la galería de Casa Nuestra».
// Todo el texto de la landing vive aquí para editarlo sin tocar el diseño.

export const navLinks = [
  { href: '#propuesta', label: 'Propuesta' },
  { href: '#contexto', label: 'Contexto' },
  { href: '#modelo', label: 'Modelo AAI' },
  { href: '#ruta', label: 'Ruta' },
  { href: '#sostenibilidad', label: 'Sostenibilidad' },
]

export const heroStats = [
  { value: '12', label: 'meses de gestión integral' },
  { value: '4', label: 'etapas de trabajo' },
  { value: '3', label: 'prioridades del primer año' },
  { value: '1', label: 'programa coordinado' },
]

export const priorities = [
  {
    key: 'Cultural',
    color: 'var(--aai-blue)',
    text: 'Construir reconocimiento local con un programa artístico consistente y abierto a la comunidad.',
  },
  {
    key: 'Económica',
    color: 'var(--aai-sky)',
    text: 'Aumentar los ingresos de los artistas y conocer los costos e ingresos reales de la operación.',
  },
  {
    key: 'Institucional',
    color: 'var(--aai-green)',
    text: 'Fortalecer la visibilidad de Casa Nuestra y documentar la experiencia como caso de éxito.',
  },
]

export const pillars = [
  {
    title: 'Identidad curatorial',
    text: 'Una propuesta artística clara, coherente con Casa Nuestra y reconocible para el público.',
  },
  {
    title: 'Relación local',
    text: 'Participación de artistas y habitantes, con acceso público y actividades acordes con la operación del hotel.',
  },
  {
    title: 'Experiencia de visita',
    text: 'Obras con contexto, información legible y opciones para conversar, participar o adquirir.',
  },
  {
    title: 'Sostenibilidad',
    text: 'Ingresos, costos y resultados registrados para decidir qué formatos pueden continuar.',
  },
]

export const services = [
  {
    title: 'Investigación y diagnóstico',
    text: 'Espacio, públicos, contexto de Malinalco, canales actuales, artistas posibles y objetivos de Casa Nuestra.',
    tags: ['Espacio', 'Públicos', 'Mapeo cultural'],
  },
  {
    title: 'Curaduría y museografía',
    text: 'Tema, selección de obra, guion, cédulas, montaje y criterios de rotación.',
    tags: ['Guion', 'Cédulas', 'Montaje'],
  },
  {
    title: 'Posicionamiento y comunicación',
    text: 'Identidad, contenidos, campañas, presencia en redes, producción audiovisual y optimización digital según alcance acordado.',
    tags: ['Campañas', 'Redes', 'Audiovisual'],
  },
  {
    title: 'Herramientas comerciales',
    text: 'Fichas de obra, dossiers, portafolios, catálogo digital, inventario y seguimiento de consultas y ventas.',
    tags: ['Catálogo', 'Inventario', 'Ventas'],
  },
  {
    title: 'Medición y mejora',
    text: 'Métricas de público, visibilidad y economía para revisar y ajustar el programa.',
    tags: ['Público', 'Visibilidad', 'Economía'],
  },
]

export const responsibilities = {
  aai: [
    'Calendario curatorial',
    'Relación con artistas',
    'Preparación de exposiciones',
    'Actividades abiertas',
    'Comunicación',
    'Registro comercial e informes',
  ],
  casa: [
    'Dirección institucional',
    'Recursos acordados',
    'Aprobación de espacios y presupuesto',
    'Contratos y uso de marca',
  ],
}

export const stages = [
  {
    period: 'Meses 1–3',
    focus: 'Fundamentos',
    deliverables: [
      'Diagnóstico del espacio y los públicos',
      'Mapeo cultural',
      'Línea curatorial',
      'Reglas de acceso, operación y venta',
      'Presupuesto y primeras metas',
    ],
  },
  {
    period: 'Meses 4–6',
    focus: 'Lanzamiento',
    deliverables: [
      'Primera exposición',
      'Apertura a la comunidad',
      'Cédulas y catálogo digital',
      'Campaña de comunicación',
      'Registro inicial de visitas y consultas',
    ],
  },
  {
    period: 'Meses 7–9',
    focus: 'Continuidad',
    deliverables: [
      'Rotación de obra',
      'Colaboraciones y actividades',
      'Seguimiento de ventas, participación y visibilidad',
      'Ajustes al calendario y a la experiencia',
    ],
  },
  {
    period: 'Meses 10–12',
    focus: 'Consolidación',
    deliverables: [
      'Evaluación del año',
      'Ajuste del modelo económico',
      'Informe de impacto y aprendizajes',
      'Recomendación de continuidad para el segundo año',
    ],
  },
]

export const rhythm = [
  {
    cadence: 'Mensual',
    text: 'Reporte de actividad, visitas, ventas, consultas, comunicación y gastos del programa.',
  },
  {
    cadence: 'Trimestral',
    text: 'Revisión con Casa Nuestra para confirmar prioridades y ajustar recursos y programación.',
  },
  {
    cadence: 'Anual',
    text: 'Evaluación del mandato, caso de éxito y propuesta económica para el siguiente periodo.',
  },
]

export const revenueSources = [
  {
    title: 'Venta de obra',
    text: 'Consignación o venta con inventario, comisión, pago al artista y condiciones por escrito.',
  },
  {
    title: 'Programación cultural',
    text: 'Talleres, conversaciones o visitas con formatos gratuitos y de pago de acuerdo con el público y los costos.',
  },
  {
    title: 'Colaboraciones',
    text: 'Alianzas o patrocinios compatibles con la línea curatorial y los valores de Casa Nuestra.',
  },
  {
    title: 'Relación con el hotel',
    text: 'Registro separado de consultas o reservas referidas por la galería para evaluar posibles efectos indirectos.',
  },
]

export const costs = [
  'Producción artística',
  'Honorarios',
  'Transporte',
  'Seguros',
  'Montaje',
  'Materiales',
  'Comunicación',
  'Operación',
  'Gestión',
]

export const agreements = [
  'Presupuesto operativo',
  'Honorarios de gestión',
  'Reglas de venta y pagos',
  'Montaje y cuidado',
  'Horarios abiertos al público',
  'Uso de espacios',
  'Procedimiento de aprobación',
]

export const indicators = [
  {
    dimension: 'Ingreso de artistas',
    indicators: 'Obras vendidas, valor de venta e ingreso neto por artista.',
    record: 'Inventario, comprobantes y liquidaciones.',
  },
  {
    dimension: 'Visibilidad de Casa Nuestra',
    indicators:
      'Alcance, consultas, visitas al catálogo y referencias atribuibles al hotel.',
    record: 'Métricas digitales, enlaces etiquetados y registro de consultas.',
  },
  {
    dimension: 'Participación local',
    indicators:
      'Asistencia, artistas y colaboradores locales, recurrencia de actividades.',
    record: 'Conteo de visitas y registro de artistas y eventos.',
  },
  {
    dimension: 'Experiencia de huéspedes',
    indicators: 'Visitas, interacción con obras, comentarios y recomendación.',
    record: 'Registro de visitas y comentarios voluntarios.',
  },
]

export const sources = [
  { label: 'casanuestra.mx', href: 'https://casanuestra.mx/' },
  { label: 'Experiencias', href: 'https://casanuestra.mx/experiencias/' },
  { label: 'Coworking', href: 'https://casanuestra.mx/coworking/' },
  { label: 'Empresas', href: 'https://casanuestra.mx/empresas/' },
]
