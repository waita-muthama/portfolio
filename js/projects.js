/**
 * Project Rendering, Filtering, Search, and Modal Case Studies
 * Jeremiah Muthama Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  const projectsGrid = document.getElementById('projectsGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectSearchInput = document.getElementById('projectSearch');
  const activeCountEl = document.getElementById('projectCount');
  
  // Modal elements
  const modal = document.getElementById('projectModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalBody');

  let currentCategory = 'all';
  let searchQuery = '';

  // Function to render projects
  function renderProjects() {
    if (!projectsGrid) return;

    const filtered = projectsData.filter(project => {
      const matchesCategory = currentCategory === 'all' || project.category === currentCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        project.title.toLowerCase().includes(q) ||
        project.shortDescription.toLowerCase().includes(q) ||
        project.technologies.some(tech => tech.toLowerCase().includes(q)) ||
        project.categoryLabel.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });

    if (activeCountEl) {
      activeCountEl.textContent = `Showing ${filtered.length} of ${projectsData.length} projects`;
    }

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>No projects match your filter</h3>
          <p>Try searching with another keyword or selecting a different category.</p>
          <button class="btn btn-secondary reset-filters-btn" id="resetFilters">Reset Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetFilters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentCategory = 'all';
          searchQuery = '';
          if (projectSearchInput) projectSearchInput.value = '';
          filterButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === 'all'));
          renderProjects();
        });
      }
      return;
    }

    projectsGrid.innerHTML = filtered.map(project => {
      const techBadges = project.technologies.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('');
      const moreCount = project.technologies.length > 4 ? `<span class="tech-tag more">+${project.technologies.length - 4}</span>` : '';
      
      const metricsHtml = project.metrics.map(m => `
        <div class="metric-pill">
          <span class="metric-val">${m.value}</span>
          <span class="metric-lbl">${m.label}</span>
        </div>
      `).join('');

      return `
        <article class="project-card" data-id="${project.id}" data-category="${project.category}">
          <div class="card-thumb-wrap" onclick="window.openProjectModal('${project.id}')">
            <img src="${project.thumbnail}" alt="${project.title}" class="card-thumb" loading="lazy">
            <div class="card-overlay">
              <span class="overlay-cta">View Case Study &rarr;</span>
            </div>
            <span class="category-badge ${project.category}">${project.badge || project.categoryLabel}</span>
          </div>

          <div class="card-body">
            <div class="card-meta">
              <span class="card-cat-label">${project.categoryLabel}</span>
            </div>
            <h3 class="card-title" onclick="window.openProjectModal('${project.id}')">${project.title}</h3>
            <p class="card-desc">${project.shortDescription}</p>

            <div class="card-metrics-grid">
              ${metricsHtml}
            </div>

            <div class="card-tech-stack">
              ${techBadges}
              ${moreCount}
            </div>

            <div class="card-actions">
              <button class="btn btn-primary-outline btn-sm" onclick="window.openProjectModal('${project.id}')">
                <span>Detailed Case Study</span>
              </button>
              ${project.githubUrl ? `
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="icon-link" title="View Source Code" aria-label="GitHub Repository">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>
              ` : ''}
              ${project.liveUrl ? `
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="icon-link" title="Open Live Project / Demo" aria-label="Live Demo Link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              ` : ''}
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Filter Buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.filter;
      renderProjects();
    });
  });

  // Search input
  if (projectSearchInput) {
    projectSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProjects();
    });
  }

  // Open Modal function attached to window
  window.openProjectModal = function(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project || !modal || !modalBody) return;

    const metricsHtml = project.metrics.map(m => `
      <div class="modal-metric-card">
        <span class="modal-metric-value">${m.value}</span>
        <span class="modal-metric-label">${m.label}</span>
      </div>
    `).join('');

    const techBadges = project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('');
    const featuresList = (project.features || []).map(f => `<li>${f}</li>`).join('');

    modalBody.innerHTML = `
      <div class="modal-project-header">
        <span class="category-badge ${project.category}">${project.badge || project.categoryLabel}</span>
        <h2 class="modal-project-title">${project.title}</h2>
        <p class="modal-project-subtitle">${project.shortDescription}</p>
      </div>

      <div class="modal-metrics-bar">
        ${metricsHtml}
      </div>

      <div class="modal-project-media">
        <img src="${project.thumbnail}" alt="${project.title}" class="modal-image">
      </div>

      <div class="modal-details-grid">
        <div class="modal-main-content">
          <section class="modal-section">
            <h3>Project Overview</h3>
            <p>${project.longDescription}</p>
          </section>

          ${project.architecture ? `
            <section class="modal-section">
              <h3>System Architecture &amp; Methodology</h3>
              <p class="architecture-box">${project.architecture}</p>
            </section>
          ` : ''}

          <section class="modal-section">
            <h3>Key Capabilities &amp; Engineering Highlights</h3>
            <ul class="modal-features-list">
              ${featuresList}
            </ul>
          </section>
        </div>

        <aside class="modal-sidebar">
          <div class="sidebar-box">
            <h4>Technology Stack</h4>
            <div class="modal-tech-stack">
              ${techBadges}
            </div>
          </div>

          <div class="sidebar-box">
            <h4>Category</h4>
            <p class="text-sm font-semibold">${project.categoryLabel}</p>
          </div>

          <div class="sidebar-box cta-box">
            <h4>Links &amp; Artifacts</h4>
            <div class="modal-action-buttons">
              ${project.liveUrl ? `
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <span>${project.category === 'research' ? 'Read Paper / Document' : 'View Live Demo'}</span>
                </a>
              ` : ''}
              ${project.githubUrl ? `
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-block">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span>Source Repository</span>
                </a>
              ` : ''}
            </div>
          </div>
        </aside>
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Initial render
  renderProjects();
});

