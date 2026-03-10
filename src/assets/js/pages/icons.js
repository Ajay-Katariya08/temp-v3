class Icons {
    constructor({ iconSelector = '[data-icon]', iconsJson = 'assets/data/icons.json' } = {}) {
        this.iconSelector = iconSelector
        this.iconsJson = iconsJson
    }

    async init() {
        this.icons = await this.loadIcons()
        this.iconEntries = Object.entries(this.icons)
        this.renderIcons()

        const iconSearch = document.getElementById('icon-search')
        if (iconSearch) {
            iconSearch.addEventListener(
                'input',
                this.debounce((e) => this.searchIcons(e.target.value), 200)
            )
        }
    }

    async loadIcons() {
        try {
            const response = await fetch(this.iconsJson)
            if (!response.ok) {
                throw new Error(`Failed to load ${this.iconsJson}`)
            }
            return await response.json()
        } catch (err) {
            console.error('Icon load error:', err)
            return {}
        }
    }

    buildFinalIcon(iconLibrary, entry) {
        const iconValue = typeof entry === 'object' ? entry.icon : entry
        const extraClass = typeof entry === 'object' ? entry.class || '' : ''

        let newEl

        if (iconLibrary.startsWith('solar')) {
            newEl = document.createElement('iconify-icon')
            newEl.setAttribute('icon', `solar:${iconValue}`)
        } else if (iconLibrary === 'lucide') {
            newEl = document.createElement('i')
            newEl.setAttribute('data-lucide', iconValue)
        } else {
            newEl = document.createElement('i')

            if (iconLibrary === 'tabler') {
                newEl.classList.add('ti', `ti-${iconValue}`)
            }
            if (iconLibrary === 'remix') {
                newEl.classList.add('ri', `ri-${iconValue}`)
            }
            if (iconLibrary === 'boxicons') {
                newEl.classList.add('bx', iconValue.split(':').join('-'))
            }
        }

        if (extraClass) {
            extraClass.split(' ').forEach((c) => c && newEl.classList.add(c))
        }
        return newEl
    }

    renderIcons(entries = Object.entries(this.icons)) {
        const iconsRoot = document.getElementById('icons')
        if (!iconsRoot) {
            console.error('Icons root element not found')
            return
        }
        iconsRoot.innerHTML = ''

        const table = document.createElement('table')
        table.className = 'table align-middle mb-0'

        // header
        table.innerHTML = `
    <thead class="fs-xs">
      <tr>
        <th>Icon Name</th>
        <th>Tabler</th>
        <th>Lucide</th>
        <th>Remix</th>
        <th>Boxicons</th>
        <th>Solar Broken</th>
        <th>Solar Duotone</th>
      </tr>
    </thead>
  `

        const tbody = document.createElement('tbody')

        for (const [key, libs] of entries) {
            const tr = document.createElement('tr')

            // icon name cell
            const nameTd = document.createElement('td')
            nameTd.innerHTML = `<code>${key}</code>`
            tr.appendChild(nameTd)

            // library columns in fixed order
            const libOrder = ['tabler', 'lucide', 'remix', 'boxicons', 'solar-broken', 'solar-duotone']

            libOrder.forEach((lib) => {
                const td = document.createElement('td')
                td.className = 'text-center fs-xl'

                const entry = libs[lib]
                if (entry) {
                    const iconEl = this.buildFinalIcon(lib, entry)
                    td.appendChild(iconEl)
                }

                tr.appendChild(td)
            })

            tbody.appendChild(tr)
        }

        table.appendChild(tbody)
        iconsRoot.appendChild(table)

        // hydrate lucide if any
        if (window.lucide) {
            try {
                lucide.createIcons()
            } catch {}
        }

        iconsRoot.dispatchEvent(new CustomEvent('icons:updated'))
    }

    searchIcons(query) {
        const q = (query || '').trim().toLowerCase()
        const filtered = q ? this.iconEntries.filter(([key]) => key.toLowerCase().includes(q)) : this.iconEntries
        this.renderIcons(filtered)
    }

    debounce(fn, delay = 200) {
        let t
        return (...args) => {
            clearTimeout(t)
            t = setTimeout(() => fn.apply(this, args), delay)
        }
    }
}

document.addEventListener('DOMContentLoaded', function (e) {
    const iconsRoot = document.getElementById('icons')
    const iconSearch = document.getElementById('icon-search')
    if (!iconsRoot) {
        console.error('Icons root element not found')
        return
    }
    if (!iconSearch) {
        console.error('Icon search input element not found')
        return
    }
    new Icons().init()
})
