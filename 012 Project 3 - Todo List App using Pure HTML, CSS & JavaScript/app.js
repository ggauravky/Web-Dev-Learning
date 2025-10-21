// =============================================
// TODO APP - COMPLETE FUNCTIONALITY
// =============================================

// DOM Elements
const addTodoBtn = document.getElementById("addTodoBtn");
const inputTag = document.getElementById("todoInput");
const todoListUL = document.getElementById("todoList");
const itemsLeftSpan = document.getElementById("itemsLeft");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const filterBtns = document.querySelectorAll(".filter-btn");

// State
let todos = [];
let currentFilter = 'all'; // all, active, completed
let editingIndex = null;

// =============================================
// LOCAL STORAGE FUNCTIONS
// =============================================

/**
 * Load todos from localStorage
 */
function loadTodos() {
  try {
    const raw = localStorage.getItem("todos");
    if (raw) {
      todos = JSON.parse(raw);
    } else {
      // Initialize from existing DOM items if any
      const staticItems = Array.from(todoListUL.querySelectorAll('.todo-item'));
      if (staticItems.length) {
        todos = staticItems.map(li => {
          const text = li.querySelector('.todo-text')?.textContent?.trim() || '';
          const checked = li.classList.contains('completed') || li.querySelector('.todo-checkbox')?.checked;
          return { 
            id: Date.now() + Math.random(), // Unique ID
            title: text, 
            isCompleted: !!checked,
            createdAt: Date.now()
          };
        });
        saveTodos();
      }
    }
  } catch (e) {
    console.error('Failed to parse todos from localStorage', e);
    todos = [];
  }
}

/**
 * Save todos to localStorage
 */
function saveTodos() {
  try {
    localStorage.setItem('todos', JSON.stringify(todos));
  } catch (e) {
    console.error('Failed to save todos to localStorage', e);
  }
}

// =============================================
// UI UPDATE FUNCTIONS
// =============================================

/**
 * Update the items left counter
 */
function updateItemsLeft() {
  if (!itemsLeftSpan) return;
  const left = todos.filter(t => !t.isCompleted).length;
  itemsLeftSpan.textContent = `${left} item${left !== 1 ? 's' : ''} left`;
}

/**
 * Populate and render todos based on current filter
 */
function renderTodos() {
  if (!todoListUL) return;

  // Filter todos based on current filter
  let filteredTodos = todos;
  if (currentFilter === 'active') {
    filteredTodos = todos.filter(t => !t.isCompleted);
  } else if (currentFilter === 'completed') {
    filteredTodos = todos.filter(t => t.isCompleted);
  }

  // Generate HTML
  let html = '';
  if (filteredTodos.length === 0) {
    html = '<li class="empty-state">No tasks to display</li>';
  } else {
    filteredTodos.forEach((todo, index) => {
      const actualIndex = todos.indexOf(todo);
      html += `
        <li class="todo-item ${todo.isCompleted ? 'completed' : ''}" data-index="${actualIndex}">
          <input 
            type="checkbox" 
            class="todo-checkbox" 
            ${todo.isCompleted ? 'checked' : ''} 
            onchange="toggleTodo(${actualIndex})"
          >
          <span class="todo-text" ondblclick="startEdit(${actualIndex})">${escapeHtml(todo.title)}</span>
          <button class="edit-btn" onclick="startEdit(${actualIndex})" title="Edit task">✏️</button>
          <button class="delete-btn" onclick="deleteTodo(${actualIndex})" title="Delete task">×</button>
        </li>
      `;
    });
  }

  todoListUL.innerHTML = html;
  updateItemsLeft();
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// =============================================
// TODO CRUD OPERATIONS
// =============================================

/**
 * Add a new todo
 */
function addTodo() {
  const title = inputTag.value.trim();
  
  if (!title) {
    // Shake animation for empty input
    inputTag.classList.add('shake');
    setTimeout(() => inputTag.classList.remove('shake'), 500);
    return;
  }

  // Check if we're editing
  if (editingIndex !== null) {
    updateTodo(title);
    return;
  }

  // Create new todo
  const newTodo = {
    id: Date.now() + Math.random(),
    title: title,
    isCompleted: false,
    createdAt: Date.now()
  };

  todos.unshift(newTodo); // Add to beginning
  saveTodos();
  renderTodos();
  inputTag.value = '';
  inputTag.focus();
}

/**
 * Toggle todo completion status
 */
function toggleTodo(index) {
  if (index < 0 || index >= todos.length) return;
  todos[index].isCompleted = !todos[index].isCompleted;
  saveTodos();
  renderTodos();
}

/**
 * Delete a todo
 */
function deleteTodo(index) {
  if (index < 0 || index >= todos.length) return;
  
  // Optional: Add confirmation for deletion
  if (confirm(`Delete task: "${todos[index].title}"?`)) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
  }
}

/**
 * Start editing a todo
 */
function startEdit(index) {
  if (index < 0 || index >= todos.length) return;
  
  editingIndex = index;
  inputTag.value = todos[index].title;
  inputTag.focus();
  inputTag.select();
  
  // Change button text to indicate editing
  if (addTodoBtn) {
    addTodoBtn.textContent = 'Update';
    addTodoBtn.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
  }
}

/**
 * Update an existing todo
 */
function updateTodo(newTitle) {
  if (editingIndex === null) return;
  
  todos[editingIndex].title = newTitle;
  saveTodos();
  renderTodos();
  
  // Reset editing state
  cancelEdit();
}

/**
 * Cancel editing
 */
function cancelEdit() {
  editingIndex = null;
  inputTag.value = '';
  
  if (addTodoBtn) {
    addTodoBtn.textContent = 'Add';
    addTodoBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  }
}

/**
 * Clear all completed todos
 */
function clearCompleted() {
  const completedCount = todos.filter(t => t.isCompleted).length;
  
  if (completedCount === 0) {
    alert('No completed tasks to clear!');
    return;
  }

  if (confirm(`Clear ${completedCount} completed task${completedCount !== 1 ? 's' : ''}?`)) {
    todos = todos.filter(t => !t.isCompleted);
    saveTodos();
    renderTodos();
  }
}

// =============================================
// FILTER FUNCTIONS
// =============================================

/**
 * Set the current filter and update UI
 */
function setFilter(filter) {
  currentFilter = filter;
  
  // Update active filter button
  filterBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === filter) {
      btn.classList.add('active');
    }
  });
  
  renderTodos();
}

// =============================================
// KEYBOARD SHORTCUTS & UTILITIES
// =============================================

/**
 * Handle keyboard shortcuts
 */
function handleKeyboardShortcuts(e) {
  // ESC key - Cancel editing
  if (e.key === 'Escape' && editingIndex !== null) {
    cancelEdit();
  }
  
  // Ctrl/Cmd + A - Focus input
  if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
    e.preventDefault();
    inputTag.focus();
  }
}

/**
 * Add shake animation class (add to CSS if not present)
 */
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
  }
  .shake {
    animation: shake 0.5s ease;
  }
`;
document.head.appendChild(shakeStyle);

// =============================================
// DRAG AND DROP (BONUS FEATURE)
// =============================================

let draggedIndex = null;

/**
 * Enable drag and drop for todos
 */
function enableDragAndDrop() {
  todoListUL.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('todo-item')) {
      draggedIndex = parseInt(e.target.dataset.index);
      e.target.style.opacity = '0.5';
    }
  });

  todoListUL.addEventListener('dragend', (e) => {
    if (e.target.classList.contains('todo-item')) {
      e.target.style.opacity = '1';
    }
  });

  todoListUL.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  todoListUL.addEventListener('drop', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('todo-item') || e.target.closest('.todo-item')) {
      const dropTarget = e.target.closest('.todo-item');
      const dropIndex = parseInt(dropTarget.dataset.index);
      
      if (draggedIndex !== null && draggedIndex !== dropIndex) {
        // Reorder todos
        const [draggedTodo] = todos.splice(draggedIndex, 1);
        todos.splice(dropIndex, 0, draggedTodo);
        saveTodos();
        renderTodos();
      }
    }
  });
}

// =============================================
// EVENT LISTENERS
// =============================================

/**
 * Initialize event listeners
 */
function initEventListeners() {
  // Add todo button
  if (addTodoBtn) {
    addTodoBtn.addEventListener('click', addTodo);
  }

  // Input field - Enter key
  if (inputTag) {
    inputTag.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTodo();
      }
    });
  }

  // Clear completed button
  if (clearCompletedBtn) {
    clearCompletedBtn.addEventListener('click', clearCompleted);
  }

  // Filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setFilter(btn.dataset.filter);
    });
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', handleKeyboardShortcuts);
  
  // Enable drag and drop
  enableDragAndDrop();
}

// =============================================
// INITIALIZATION
// =============================================

/**
 * Initialize the app
 */
function init() {
  loadTodos();
  renderTodos();
  initEventListeners();
  
  // Set initial filter
  setFilter('all');
  
  console.log('✅ Todo App initialized successfully!');
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Make functions globally available for inline event handlers
window.toggleTodo = toggleTodo;
window.deleteTodo = deleteTodo;
window.startEdit = startEdit;
