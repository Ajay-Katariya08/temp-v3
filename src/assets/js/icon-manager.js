class IconManager {
  constructor({ iconSelector = '[data-icon]', iconsJson = '/assets/data/icons.json' } = {}, iconLibrary = 'tabler') {
    this.iconSelector = iconSelector
    this.iconsJson = iconsJson
    this.iconLibrary = iconLibrary
    this.iconButtons = document.querySelectorAll('[data-icon-library]')
    this.iconRefs = []
    this.selectedIconLibrary = document.getElementById('selected-icon-library')
  }

  async init() {
    this.icons = await this.loadIcons()
    this.captureIconRefs()
    this.renderIcons()
    this.bindSwitchers()
  }

  async loadIcons() {
    try {
      const response = await fetch(this.iconsJson)
      if (!response.ok) throw new Error(`Failed to load ${this.iconsJson}`)
      return await response.json()
    } catch (err) {
      console.error('Icon load error:', err)
      return {}
    }
  }

  captureIconRefs() {
    this.iconRefs = []
    document.querySelectorAll(this.iconSelector).forEach((el) => {
      const iconKey = el.getAttribute('data-icon')
      if (!iconKey) return

      this.iconRefs.push({
        iconKey,
        parent: el.parentElement,
        currentEl: el,
        attributes: Array.from(el.attributes),
        classList: Array.from(el.classList),
      })
    })
  }

  renderIcons() {
    this.iconRefs.forEach((ref) => {
      const iconEntry = this.icons?.[ref.iconKey]?.[this.iconLibrary]
      if (!iconEntry) return

      let iconValue = ''
      let jsonClass = ''

      if (typeof iconEntry === 'object' && iconEntry.icon) {
        iconValue = iconEntry.icon
        jsonClass = iconEntry.class || ''
      } else if (typeof iconEntry === 'string') {
        iconValue = iconEntry
      }

      let newEl

      if (this.iconLibrary.startsWith('solar')) {
        newEl = document.createElement('iconify-icon')
        newEl.setAttribute('icon', `solar:${iconValue}`)
      } else if (this.iconLibrary === 'lucide') {
        newEl = document.createElement('i')
        newEl.setAttribute('data-lucide', iconValue)
      } else {
        newEl = document.createElement('i')

        if (this.iconLibrary === 'tabler') {
          newEl.classList.add('ti', 'ti-' + iconValue)
        }
        if (this.iconLibrary === 'remix') {
          newEl.classList.add('ri', 'ri-' + iconValue)
        }
        if (this.iconLibrary === 'boxicons') {
          newEl.classList.add('bx', iconValue.split(':').join('-'))
        }
      }

      // Merge original classes + jsonClass (JSON class last)
      ref.classList.forEach((cls) => {
        if (cls) newEl.classList.add(cls)
      })
      if (jsonClass) {
        jsonClass.split(' ').forEach((cls) => {
          if (cls) newEl.classList.add(cls)
        })
      }

      // Apply all other attributes
      ref.attributes.forEach((attr) => {
        if (attr.name !== 'data-icon' && attr.name !== 'class') {
          newEl.setAttribute(attr.name, attr.value)
        }
      })

      // Replace old element
      if (ref.currentEl && ref.currentEl.parentNode) {
        ref.currentEl.parentNode.replaceChild(newEl, ref.currentEl)
        ref.currentEl = newEl
      }

      // Re-initialize Lucide if needed
      if (this.iconLibrary === 'lucide' && window.lucide) {
        lucide.createIcons()
      }
    })
  }

  bindSwitchers() {
    this.iconButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const lib = button.dataset.iconLibrary
        if (lib && lib !== this.iconLibrary) {
          this.iconLibrary = lib
          this.renderIcons()
          this.updateSelectedCode()
        }
      })
    })
  }

  updateSelectedCode() {
    if (this.selectedIconLibrary) {
      this.selectedIconLibrary.textContent = this.iconLibrary.toUpperCase()
    }
  }
}

document.addEventListener('DOMContentLoaded', function (e) {
  new IconManager().init()
})
