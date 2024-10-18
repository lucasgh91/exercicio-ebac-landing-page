

window.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('[data-tab-button]')

  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', function(e) {
      const alvo = e.target.dataset.tabButton
      const aba = document.querySelector(`[data-tab-id=${alvo}]`)
      fechaAbas()
      removeButtonAtivo()
      aba.classList.add('wallpapers__list--is-active')
      e.target.classList.add('wallpapers__tabs__button--is-active')
    })
  }
})

function fechaAbas() {
  const tabs = document.querySelectorAll('[data-tab-id]')

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('wallpapers__list--is-active')
  }
}

function removeButtonAtivo() {
  const buttons = document.querySelectorAll('[data-tab-button]')

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('wallpapers__tabs__button--is-active')
  }
}