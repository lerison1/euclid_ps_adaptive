
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tab__content').forEach(function(tabContent) {
        tabContent.classList.remove('.tab__content-active')
      })
      document.querySelector('[data-target="${path}]').classList.add('tab__content-active')
    })
  })
})
