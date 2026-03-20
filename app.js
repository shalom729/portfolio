// ── Config: replace these URLs with your own ──────────────────────────
const CONFIG = {
  github:   'https://github.com/shalom729',
  linkedin: 'https://www.linkedin.com/in/chong-an-ying',
  email:    'mailto:shalomying729@gmail.com',
}

// ── Project Data ──────────────────────────────────────────────────────
// To add a project: copy one object and add it to this array.
// status: "live" | "wip" | "planned"
const projects = [
  {
    title: '每日新聞摘要 Agent',
    category: 'n8n',
    description: '每天自動抓取重點新聞，經 LLM 整理成摘要後推送通知。全程由 n8n 排程驅動，零手動操作。',
    year: 2025,
    tags: ['n8n', 'LLM', 'Webhook'],
    status: 'live',
    statusLabel: null,
    note: null,
    link: null,
  },
  {
    title: 'Reportify',
    category: 'data',
    description: '品牌數據分析儀表板，串接真實平台 API 自動生成報表，協助品牌追蹤關鍵指標。',
    year: 2025,
    tags: ['Node.js', 'Google API', 'Railway'],
    status: 'live',
    statusLabel: null,
    note: '展示版為示意數據',
    link: null,
  },
  {
    title: '機票 & 職缺自動查詢',
    category: 'n8n',
    description: '自動搜尋機票優惠與目標職缺，定期彙整報告推送通知。',
    year: null,
    tags: ['n8n', 'Webhook'],
    status: 'wip',
    statusLabel: '進行中',
    note: null,
    link: null,
  },
  {
    title: '信箱整理 Agent',
    category: 'agent',
    description: '自動分類、摘要並回覆信箱，讓收件匣永遠整齊。',
    year: null,
    tags: ['AI Agent', 'LLM'],
    status: 'planned',
    statusLabel: '規劃中',
    note: null,
    link: null,
  },
]

// ── CTA Buttons ───────────────────────────────────────────────────────
function renderCTA() {
  const container = document.getElementById('cta-buttons')
  const buttons = [
    { label: 'GitHub',   href: CONFIG.github,   primary: true },
    { label: 'LinkedIn', href: CONFIG.linkedin,  primary: false },
    { label: 'Email',    href: CONFIG.email,     primary: false },
  ]
  container.innerHTML = buttons.map(b =>
    `<a class="${b.primary ? 'btn-primary' : 'btn-secondary'}" href="${b.href}"${b.href.startsWith('mailto') ? '' : ' target="_blank" rel="noopener"'}>${b.label}</a>`
  ).join('')
}

// ── Category badge colors ─────────────────────────────────────────────
const CATEGORY_STYLE = {
  n8n:   { bg: '#f0fdf4', color: '#16a34a', label: 'n8n 自動化' },
  data:  { bg: '#eff6ff', color: '#2563eb', label: '數據工具' },
  agent: { bg: '#fdf4ff', color: '#9333ea', label: 'AI Agent' },
}

const STATUS_STYLE = {
  wip:     { bg: '#fef3c7', color: '#d97706' },
  planned: { bg: '#fdf4ff', color: '#9333ea' },
}

function renderCard(p) {
  const isLive = p.status === 'live'

  const badge = isLive
    ? `<span class="badge" style="background:${CATEGORY_STYLE[p.category].bg};color:${CATEGORY_STYLE[p.category].color}">${CATEGORY_STYLE[p.category].label}</span>`
    : `<span class="badge" style="background:${STATUS_STYLE[p.status].bg};color:${STATUS_STYLE[p.status].color}">${p.statusLabel}</span>`

  const yearEl = isLive
    ? `<span class="card-year">${p.year}</span>`
    : ''

  const noteEl = p.note
    ? `<p class="card-note">${p.note}</p>`
    : ''

  const tagsEl = p.tags.map(t => `<span class="tag">${t}</span>`).join('')

  const linkEl = p.link
    ? `<a class="card-link" href="${p.link}" target="_blank" rel="noopener">查看專案 →</a>`
    : ''

  const textColor = isLive ? '#111' : '#9ca3af'
  const descColor = isLive ? '#6b7280' : '#9ca3af'

  const dataAttr = `data-category="${p.category}"`

  return `
    <div class="${isLive ? 'card' : 'card card-pending'}" ${dataAttr}>
      <div class="card-top">
        ${badge}
        ${yearEl}
      </div>
      <h3 class="card-title" style="color:${textColor}">${p.title}</h3>
      <p class="card-desc" style="color:${descColor}">${p.description}</p>
      ${noteEl}
      <div class="card-tags">${tagsEl}</div>
      ${linkEl}
    </div>
  `
}

function renderProjects() {
  const grid = document.getElementById('projects-grid')
  grid.innerHTML = projects.map(renderCard).join('')
}

// ── Category Filter ───────────────────────────────────────────────────
const FILTERS = [
  { label: '全部',       key: 'all' },
  { label: 'n8n 自動化', key: 'n8n' },
  { label: '數據工具',   key: 'data' },
  { label: 'AI Agent',   key: 'agent' },
]

function renderFilters() {
  const container = document.getElementById('filter-buttons')
  container.innerHTML = FILTERS.map(f =>
    `<button class="filter-btn ${f.key === 'all' ? 'active' : ''}" data-filter="${f.key}">${f.label}</button>`
  ).join('')

  container.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn')
    if (!btn) return
    const key = btn.dataset.filter

    container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')

    document.querySelectorAll('#projects-grid .card').forEach(card => {
      card.style.display = (key === 'all' || card.dataset.category === key) ? '' : 'none'
    })
  })
}

// ── Init ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCTA()
  renderProjects()
  renderFilters()
})
