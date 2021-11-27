const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', () => {
  if (sidebar.classList.contains('show-sidebar')) {
    sidebar.classList.remove('show-sidebar')
  } else {
    sidebar.classList.add('show-sidebar')
  }
})

const closeSidebar = () => {
  sidebar.classList.remove('show-sidebar')
}

closeBtn.addEventListener('click', closeSidebar)
