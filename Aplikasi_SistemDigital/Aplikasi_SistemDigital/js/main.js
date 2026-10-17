
function toggleAccordion(weekId) {
    state.sidebarExpanded[weekId] = !state.sidebarExpanded[weekId];
    renderSidebar();
}

function navigateTo(weekId, moduleId) {
    state.activeWeek = weekId;
    state.activeModule = moduleId;
    state.sidebarExpanded[weekId] = true;
    renderSidebar();
    renderContent();
}

function renderSidebar() {
    const navContainer = document.getElementById('sidebar-nav');
    navContainer.innerHTML = syllabusData.map(week => {
        const isExpanded = state.sidebarExpanded[week.id];
        const isActiveWeek = state.activeWeek === week.id;
        const isUpcoming = week.status === 'upcoming';
        
        const badgeColor = isUpcoming ? 'bg-cyber-700 text-slate-400 border-cyber-600' : 'bg-cyber-accent/10 text-cyber-glow border-cyber-accent/30';
        const titleColor = isActiveWeek ? 'text-white font-semibold' : 'text-slate-300';
        
        return `
            <div class="rounded-lg bg-cyber-900/50 border ${isActiveWeek ? 'border-cyber-accent/40 shadow-[0_0_10px_rgba(6,182,212,0.1)]' : 'border-cyber-700/50'} overflow-hidden transition-all duration-300 mb-2">
                <button 
                    onclick="toggleAccordion('${week.id}')"
                    class="w-full flex items-center justify-between p-3 hover:bg-cyber-700/50 transition-colors focus:outline-none"
                >
                    <div class="flex items-center gap-3">
                        <span class="text-[10px] px-1.5 py-0.5 rounded border uppercase tracking-wider ${badgeColor}">
                            ${isUpcoming ? 'UPC' : 'AKTIF'}
                        </span>
                        <span class="text-sm ${titleColor} text-left leading-tight">${week.title}</span>
                    </div>
                    <svg class="w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                
                <div class="transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}">
                    <div class="p-2 pt-0 flex flex-col gap-1">
                        ${week.modules.map(mod => {
                            const isModActive = state.activeModule === mod.id;
                            const modBtnClass = isModActive 
                                ? 'bg-cyber-accent/20 text-cyber-glow border-l-2 border-cyber-accent' 
                                : 'text-slate-400 hover:bg-cyber-800 hover:text-slate-200 border-l-2 border-transparent';
                            
                            return `
                                <button 
                                    ${isUpcoming ? 'disabled' : ''}
                                    onclick="navigateTo('${week.id}', '${mod.id}')"
                                    class="text-left text-xs sm:text-sm px-3 py-2 rounded-r-md transition-all focus:outline-none ${modBtnClass} ${isUpcoming ? 'cursor-not-allowed opacity-50' : ''}"
                                >
                                    ${mod.title}
                                </button>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderContent() {
    const mainContent = document.getElementById('main-content');
    const headerTitle = document.getElementById('current-page-title');
    const headerBadge = document.getElementById('current-page-badge');

    const week = syllabusData.find(w => w.id === state.activeWeek);
    const mod = week.modules.find(m => m.id === state.activeModule);

    headerTitle.textContent = mod.title;
    headerBadge.textContent = mod.type.toUpperCase();

    // W1
    if (mod.id === '1.1') renderModuleIntro(mainContent);
    else if (mod.id === '1.2') { renderModuleConverter(mainContent); initConverterLogic(); }
    // W2
    else if (mod.id === '2.1') renderModuleTheoryW2(mainContent);
    else if (mod.id === '2.2') { renderModuleSimulatorW2(mainContent); initSimulatorW2(); }
    else if (mod.id === '2.3') { renderModuleOverflowW2(mainContent); initOverflowQuizW2(); }
    // W3
    else if (mod.id === '3.1') renderModuleTheoryW3(mainContent);
    else if (mod.id === '3.2') { renderModuleSimulatorW3(mainContent); initSimulatorW3(); }
    else if (mod.id === '3.3') renderModuleSOPPOSW3(mainContent);
    // W4
    else if (mod.id === '4.1') renderModuleTheoryW4(mainContent);
    else if (mod.id === '4.2') { renderModuleSimulatorW4(mainContent); initSimulatorW4(); }
    else if (mod.id === '4.3') { renderModuleQuizW4(mainContent); initQuizW4(); }
    else mainContent.innerHTML = '<div class="h-full flex items-center justify-center text-slate-500">Materi Segera Hadir</div>';
}

function initTheme() {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleBtn = document.getElementById('theme-toggle');

    if (localStorage.getItem('color-theme') === 'light' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
        document.body.classList.remove('dark');
        themeToggleDarkIcon.classList.remove('hidden');
    } else {
        document.body.classList.add('dark');
        themeToggleLightIcon.classList.remove('hidden');
    }

    themeToggleBtn.addEventListener('click', function() {
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.body.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderSidebar();
    renderContent();
});
