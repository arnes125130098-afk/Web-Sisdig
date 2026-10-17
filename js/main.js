
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
    if (!navContainer) return;
    
    navContainer.innerHTML = syllabusData.map(week => {
        const isExpanded = state.sidebarExpanded[week.id];
        const isActiveWeek = state.activeWeek === week.id;
        const isUpcoming = week.status === 'upcoming';
        
        const badgeColor = isUpcoming ? 'bg-slate-100 text-slate-500 border-slate-300' : 'bg-blue-50 text-blue-700 border-blue-300 font-bold';
        const titleColor = isActiveWeek ? 'text-blue-700 font-bold' : 'text-slate-800';
        
        return `
            <div class="rounded-lg bg-white border ${isActiveWeek ? 'border-blue-500 shadow-md ring-1 ring-blue-500/20' : 'border-slate-200'} overflow-hidden transition-all duration-200 mb-2">
                <button 
                    onclick="toggleAccordion('${week.id}')"
                    class="w-full flex items-center justify-between p-3 hover:bg-slate-50 transition-colors focus:outline-none"
                >
                    <div class="flex items-center gap-2.5">
                        <span class="text-[10px] px-1.5 py-0.5 rounded border uppercase tracking-wider ${badgeColor}">
                            ${isUpcoming ? 'UPC' : 'AKTIF'}
                        </span>
                        <span class="text-xs sm:text-sm ${titleColor} text-left leading-tight">${week.title}</span>
                    </div>
                    <svg class="w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                
                <div class="transition-all duration-200 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}">
                    <div class="p-2 pt-0 flex flex-col gap-1 border-t border-slate-100 bg-slate-50/50">
                        ${week.modules.map(mod => {
                            const isModActive = state.activeModule === mod.id;
                            const modBtnClass = isModActive 
                                ? 'bg-blue-600 text-white font-semibold shadow-sm' 
                                : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900';
                            
                            return `
                                <button 
                                    ${isUpcoming ? 'disabled' : ''}
                                    onclick="navigateTo('${week.id}', '${mod.id}')"
                                    class="text-left text-xs px-3 py-2 rounded-md transition-all focus:outline-none ${modBtnClass} ${isUpcoming ? 'cursor-not-allowed opacity-40' : ''}"
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
    if (!week) return;
    const mod = week.modules.find(m => m.id === state.activeModule);
    if (!mod) return;

    if (headerTitle) headerTitle.textContent = mod.title;
    if (headerBadge) headerBadge.textContent = mod.type.toUpperCase();

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
    // W5
    else if (mod.id === '5.1') renderModuleTheoryW5(mainContent);
    else if (mod.id === '5.2') { renderModuleSimulatorW5(mainContent); initSimulatorW5(); }
    else if (mod.id === '5.3') renderModuleQuizW5(mainContent);
    // W6
    else if (mod.id === '6.1') renderModuleTheoryW6(mainContent);
    else if (mod.id === '6.2') { renderModuleSimulatorW6(mainContent); initSimulatorW6(); }
    else if (mod.id === '6.3') renderModuleQuizW6(mainContent);
    // W7
    else if (mod.id === '7.1') renderModuleTheoryW7(mainContent);
    else if (mod.id === '7.2') renderModuleEncoderW7(mainContent);
    else if (mod.id === '7.3') { renderModuleSimulatorW7(mainContent); initSimulatorW7(); }
    else if (mod.id === '7.4') renderModuleQuizW7(mainContent);
    else {
        mainContent.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-slate-500 py-20">
                <svg class="w-16 h-16 text-slate-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                <h3 class="text-xl font-bold text-slate-700 mb-1">Materi Segera Hadir</h3>
                <p class="text-sm text-slate-500">Silabus ini dijadwalkan untuk pertemuan mendatang.</p>
            </div>
        `;
    }
}

function initTheme() {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleBtn = document.getElementById('theme-toggle');

    if (localStorage.getItem('color-theme') === 'dark') {
        document.body.classList.add('dark');
        if (themeToggleLightIcon) themeToggleLightIcon.classList.remove('hidden');
    } else {
        document.body.classList.remove('dark');
        if (themeToggleDarkIcon) themeToggleDarkIcon.classList.remove('hidden');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            if (themeToggleDarkIcon) themeToggleDarkIcon.classList.toggle('hidden');
            if (themeToggleLightIcon) themeToggleLightIcon.classList.toggle('hidden');

            if (document.body.classList.contains('dark')) {
                document.body.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.body.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderSidebar();
    renderContent();
});
