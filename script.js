// Your code here.
const itemsContainer = document.querySelector('.items');
let isDragging = false;
let startX, scrollLeft;

itemsContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  itemsContainer.classList.add('active');
  startX = e.pageX - itemsContainer.offsetLeft;
  scrollLeft = itemsContainer.scrollLeft;
});

itemsContainer.addEventListener('mouseleave', () => {
  isDragging = false;
  itemsContainer.classList.remove('active');
});

itemsContainer.addEventListener('mouseup', () => {
  isDragging = false;
  itemsContainer.classList.remove('active');
});

itemsContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - itemsContainer.offsetLeft;
  const walk = (x - startX) * 2; // Increase movement speed
  itemsContainer.scrollLeft = scrollLeft - walk;
});
