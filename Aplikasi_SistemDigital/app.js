/**
 * App State & Data Structure
 * Data-driven routing for the 14-week syllabus
 */
const syllabusData = Array.from({ length: 14 }, (_, i) => {
    const weekNum = i + 1;
    if (weekNum === 1) {
        return {
            id: `week-1`,
            title: `Minggu 1: Pengenalan Sistem`,
            status: 'active',
            modules: [
                { id: '1.1', title: '1.1 Pengenalan Sistem Bilangan', type: 'Teori' },
                { id: '1.2', title: '1.2 Konverter Interaktif Multi-Basis', type: 'Simulasi' }
            ]
        };
    } else if (weekNum === 2) {
        return {
            id: `week-2`,
            title: `Minggu 2: Bilangan Negatif & Aritmetika`,
            status: 'active',
            modules: [
                { id: '2.1', title: '2.1 Representasi Bilangan Negatif', type: 'Teori' },
                { id: '2.2', title: '2.2 Simulator 2\'s Complement', type: 'Simulasi' },
                { id: '2.3', title: '2.3 Aritmetika & Deteksi Overflow', type: 'Latihan' }
            ]
        };
    } else if (weekNum === 3) {
        return {
            id: `week-3`,
            title: `Minggu 3: Sistem Kode & BCD`,
            status: 'active',
            modules: [
                { id: '3.1', title: '3.1 Teori BCD, Gray, & ASCII', type: 'Teori' },
                { id: '3.2', title: '3.2 Simulator BCD & Gray Code', type: 'Simulasi' },
                { id: '3.3', title: '3.3 Deteksi Error (Parity Bit)', type: 'Latihan' }
            ]
        };
    } else {
        return {
            id: `week-${weekNum}`,
            title: `Minggu ${weekNum}`,
            status: 'upcoming',
            modules: [
                { id: `${weekNum}.1`, title: 'Materi Segera Hadir', type: 'Placeholder' }
            ]
        };
    }
});

let state = {
    activeWeek: 'week-3', // Default to Week 3 based on user request focus
    activeModule: '3.2',
    sidebarExpanded: { 'week-3': true } 
};


/**
 * Rendering - Sidebar Navigation
 */
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
            <div class="rounded-lg bg-cyber-900/50 border ${isActiveWeek ? 'border-cyber-accent/40 shadow-[0_0_10px_rgba(6,182,212,0.1)]' : 'border-cyber-700/50'} overflow-hidden transition-all duration-300">
                <button 
                    onclick="toggleAccordion('${week.id}')"
                    class="w-full flex items-center justify-between p-3 hover:bg-cyber-700/50 transition-colors"
                >
                    <div class="flex items-center gap-3">
                        <span class="text-[10px] px-1.5 py-0.5 rounded border uppercase tracking-wider ${badgeColor}">
                            ${isUpcoming ? 'UPCOMING' : 'AKTIF'}
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
                                    class="text-left text-xs sm:text-sm px-3 py-2 rounded-r-md transition-all ${modBtnClass} ${isUpcoming ? 'cursor-not-allowed opacity-50' : ''}"
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

/**
 * Rendering - Main Content Area
 */
function renderContent() {
    const mainContent = document.getElementById('main-content');
    const headerTitle = document.getElementById('current-page-title');
    const headerBadge = document.getElementById('current-page-badge');

    const week = syllabusData.find(w => w.id === state.activeWeek);
    const mod = week.modules.find(m => m.id === state.activeModule);

    headerTitle.textContent = mod.title;
    headerBadge.textContent = mod.type.toUpperCase();

    // Router
    if (mod.id === '1.2') {
        renderModuleConverter(mainContent);
        initConverterLogic();
    } else if (mod.id === '1.1') {
        renderModuleIntro(mainContent);
    } else if (mod.id === '2.1') {
        renderModuleTheoryW2(mainContent);
    } else if (mod.id === '2.2') {
        renderModuleSimulatorW2(mainContent);
        initSimulatorW2();
    } else if (mod.id === '2.3') {
        renderModuleOverflowW2(mainContent);
        initOverflowQuizW2();
    } else if (mod.id === '3.1') {
        renderModuleTheoryW3(mainContent);
    } else if (mod.id === '3.2') {
        renderModuleSimulatorW3(mainContent);
        initSimulatorW3();
    } else if (mod.id === '3.3') {
        renderModuleParityW3(mainContent);
        initParityW3();
    } else {
        renderModulePlaceholder(mainContent);
    }
}

// -------------------------------------------------------------
// MODULE W1: MINGGU 1 
// -------------------------------------------------------------
function renderModuleIntro(container) {
    container.innerHTML = `
        <div class="fade-in max-w-3xl mx-auto mt-8">
            <h1 class="text-3xl font-bold text-white mb-6">Pengenalan Sistem Bilangan</h1>
            <div class="bg-cyber-800/80 p-8 rounded-xl border border-cyber-700 shadow-lg text-slate-300 space-y-5 leading-relaxed">
                <p>Dalam dunia komputasi dan sistem digital, mesin beroperasi menggunakan state on/off yang direpresentasikan sebagai logika <strong class="text-cyber-glow">Biner (Basis 2)</strong>.</p>
                <p>Angka biner bisa menjadi panjang dan sulit dibaca. Oleh karena itu digunakan sistem bilangan lain:</p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                    <li><strong class="text-purple-400">Oktal (Basis 8):</strong> Mengelompokkan setiap 3 bit biner.</li>
                    <li><strong class="text-pink-400">Heksadesimal (Basis 16):</strong> Mengelompokkan setiap 4 bit (nibble) biner.</li>
                </ul>
                <div class="mt-8 text-right">
                    <button onclick="navigateTo('week-1', '1.2')" class="px-6 py-2.5 bg-cyber-accent text-cyber-900 font-bold rounded-lg hover:bg-cyber-glow transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]">
                        Mulai Simulasi Konverter ➔
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderModuleConverter(container) {
    container.innerHTML = `
        <div class="fade-in max-w-[1400px] mx-auto space-y-6 pb-20">
            <div class="flex flex-col md:flex-row md:items-center gap-4 mb-6 p-4 bg-cyber-800/50 rounded-xl border border-cyber-700/50">
                <div class="p-3 bg-cyber-accent/10 rounded-lg text-cyber-accent shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                </div>
                <div>
                    <h1 class="text-xl font-bold text-white mb-1">Binary Central Hub</h1>
                    <p class="text-sm text-slate-400">Setiap input akan dikonversi ke Biner terlebih dahulu, kemudian didistribusikan ke basis lainnya. (Positif Murni / Unsigned)</p>
                </div>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                <div class="xl:col-span-5 space-y-4">
                    <div class="bg-cyber-800 p-5 rounded-xl border border-cyber-700 relative overflow-hidden group focus-within:border-emerald-500/50 transition-colors">
                        <div class="absolute top-0 right-0 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded-bl-lg tracking-wider">BASIS 10</div>
                        <label class="block text-sm font-medium text-slate-400 mb-2">Desimal Unsigned</label>
                        <input type="text" id="inp-10" class="cyber-input w-full p-4 rounded-lg text-xl" placeholder="Contoh: 255" autocomplete="off">
                        <div class="text-xs text-red-400 mt-2 hidden" id="err-10">Karakter tidak valid!</div>
                    </div>
                    <div class="bg-cyber-800 p-6 rounded-xl border-2 border-cyber-accent relative shadow-[0_0_20px_rgba(6,182,212,0.15)] focus-within:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-shadow transform scale-[1.02] z-10">
                        <div class="absolute top-0 right-0 px-3 py-1 bg-cyber-accent text-cyber-900 text-[10px] font-bold rounded-bl-lg tracking-wider">CENTRAL HUB (BASIS 2)</div>
                        <label class="block text-sm font-medium text-slate-200 mb-2">Biner (0 & 1)</label>
                        <input type="text" id="inp-2" class="cyber-input w-full p-4 rounded-lg text-2xl font-bold text-cyber-glow text-center tracking-[0.2em]" placeholder="11111111" autocomplete="off">
                        <div class="text-xs text-red-400 mt-2 hidden text-center" id="err-2">Hanya 0 dan 1!</div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-cyber-800 p-5 rounded-xl border border-cyber-700 relative focus-within:border-purple-500/50 transition-colors">
                            <div class="absolute top-0 right-0 px-3 py-1 bg-purple-500/10 text-purple-400 text-[10px] font-bold rounded-bl-lg tracking-wider">BASIS 8</div>
                            <label class="block text-sm font-medium text-slate-400 mb-2">Oktal (0-7)</label>
                            <input type="text" id="inp-8" class="cyber-input w-full p-3 rounded-lg text-lg" placeholder="Contoh: 377" autocomplete="off">
                        </div>
                        <div class="bg-cyber-800 p-5 rounded-xl border border-cyber-700 relative focus-within:border-pink-500/50 transition-colors">
                            <div class="absolute top-0 right-0 px-3 py-1 bg-pink-500/10 text-pink-400 text-[10px] font-bold rounded-bl-lg tracking-wider">BASIS 16</div>
                            <label class="block text-sm font-medium text-slate-400 mb-2">Hex (0-9, A-F)</label>
                            <input type="text" id="inp-16" class="cyber-input w-full p-3 rounded-lg text-lg uppercase" placeholder="Contoh: FF" autocomplete="off">
                        </div>
                    </div>
                </div>

                <div class="xl:col-span-7 bg-cyber-800 rounded-xl border border-cyber-700 flex flex-col h-[600px] xl:h-full overflow-hidden relative">
                    <div class="p-4 border-b border-cyber-700 flex justify-between items-center bg-cyber-900/80 shrink-0">
                        <h3 class="font-semibold text-white flex items-center gap-2 text-sm sm:text-base">Breakdown</h3>
                        <label class="flex items-center cursor-pointer select-none">
                            <span class="mr-3 text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wide">Tampilkan Langkah</span>
                            <div class="relative">
                                <input type="checkbox" id="toggle-steps" class="sr-only" checked>
                                <div class="block bg-cyber-900 w-10 h-6 rounded-full border border-cyber-600 transition-colors"></div>
                                <div class="dot absolute left-1 top-1 bg-slate-400 w-4 h-4 rounded-full transition-transform transform"></div>
                            </div>
                        </label>
                    </div>
                    <div id="step-container" class="p-6 flex-1 overflow-y-auto custom-scrollbar font-mono text-sm sm:text-base space-y-10 transition-opacity duration-300">
                        <div class="h-full flex flex-col items-center justify-center text-slate-500 opacity-50">Menunggu input...</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('toggle-steps').addEventListener('change', (e) => {
        const stepContainer = document.getElementById('step-container');
        stepContainer.style.opacity = e.target.checked ? '1' : '0.1';
        stepContainer.style.pointerEvents = e.target.checked ? 'auto' : 'none';
    });
}

const BASE_VALIDATORS = { '10': /^[0-9]+$/, '2': /^[01]+$/, '8': /^[0-7]+$/, '16': /^[0-9A-Fa-f]+$/ };

function initConverterLogic() {
    const inputs = {
        '10': document.getElementById('inp-10'),
        '2': document.getElementById('inp-2'),
        '8': document.getElementById('inp-8'),
        '16': document.getElementById('inp-16')
    };
    let isSyncing = false;

    Object.keys(inputs).forEach(base => {
        const el = inputs[base];
        el.addEventListener('input', (e) => {
            if (isSyncing) return;
            let rawValue = e.target.value.trim();
            
            if (rawValue === '') {
                isSyncing = true;
                Object.keys(inputs).forEach(b => { if (b !== base) inputs[b].value = ''; });
                document.getElementById('step-container').innerHTML = '<div class="h-full flex flex-col items-center justify-center text-slate-500 opacity-50">Menunggu input...</div>';
                isSyncing = false;
                return;
            }

            if (!BASE_VALIDATORS[base].test(rawValue)) {
                const charRegex = new RegExp(`[^${base === '16' ? '0-9A-Fa-f' : base === '2' ? '01' : base === '8' ? '0-7' : '0-9'}]`, 'gi');
                rawValue = rawValue.replace(charRegex, '');
                el.value = rawValue;
                if (rawValue === '') return;
            }

            let binaryStr = '';
            try {
                if (base === '2') binaryStr = rawValue;
                else if (base === '10') binaryStr = BigInt(rawValue).toString(2);
                else if (base === '16') binaryStr = rawValue.split('').map(char => parseInt(char, 16).toString(2).padStart(4, '0')).join('').replace(/^0+(?!$)/, '');
                else if (base === '8') binaryStr = rawValue.split('').map(char => parseInt(char, 8).toString(2).padStart(3, '0')).join('').replace(/^0+(?!$)/, '');
            } catch (err) { return; }

            if (!binaryStr) binaryStr = '0';

            isSyncing = true;
            Object.keys(inputs).forEach(b => {
                if (b !== base) {
                    if (b === '2') inputs[b].value = binaryStr;
                    else if (b === '10') { try { inputs[b].value = BigInt('0b' + binaryStr).toString(10); } catch(e){} }
                    else if (b === '16') {
                        const padded = binaryStr.padStart(Math.ceil(binaryStr.length / 4) * 4, '0');
                        let hex = '';
                        for (let i = 0; i < padded.length; i += 4) hex += parseInt(padded.substr(i, 4), 2).toString(16).toUpperCase();
                        inputs[b].value = hex.replace(/^0+(?!$)/, '') || '0';
                    }
                    else if (b === '8') {
                        const padded = binaryStr.padStart(Math.ceil(binaryStr.length / 3) * 3, '0');
                        let oct = '';
                        for (let i = 0; i < padded.length; i += 3) oct += parseInt(padded.substr(i, 3), 2).toString(8);
                        inputs[b].value = oct.replace(/^0+(?!$)/, '') || '0';
                    }
                }
            });
            isSyncing = false;
            document.getElementById('step-container').innerHTML = `<div class="text-emerald-400 font-bold p-4">Konversi sukses: Biner ${binaryStr}</div>`;
        });
    });
}

// -------------------------------------------------------------
// MODULE W2: MINGGU 2 (Bilangan Negatif & Aritmetika)
// -------------------------------------------------------------
function renderModuleTheoryW2(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto mt-4 space-y-8 pb-20">
            <h1 class="text-3xl font-bold text-white mb-2">Representasi Bilangan Negatif</h1>
            
            <div class="bg-cyber-800/80 p-6 sm:p-8 rounded-xl border border-cyber-700 shadow-lg text-slate-300 space-y-6">
                <h3 class="text-xl font-bold text-cyber-glow">3 Skema Representasi Utama (Dalam 8-bit)</h3>
                <p class="text-sm">Untuk menyimpan bilangan negatif, sistem digital menggunakan bit paling kiri (Most Significant Bit / MSB) sebagai penanda tanda (Sign bit). <strong class="text-white">0 = Positif, 1 = Negatif.</strong></p>
                
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="bg-cyber-900/50 p-5 rounded-lg border border-cyber-700 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
                        <div class="text-emerald-400 font-bold text-lg mb-2">1. Sign-Magnitude</div>
                        <p class="text-sm mb-4">MSB diubah menjadi 1 untuk negatif, 7 bit sisanya dibiarkan murni sebagai nilai absolut.</p>
                        <ul class="text-xs space-y-1 text-slate-400 border-t border-cyber-700 pt-3">
                            <li><span class="text-slate-200">Rentang:</span> -127 s.d +127</li>
                            <li><span class="text-slate-200">Kelemahan:</span> Ada representasi +0 dan -0. Desain sirkuit aritmetika menjadi sangat kompleks.</li>
                        </ul>
                    </div>
                    <div class="bg-cyber-900/50 p-5 rounded-lg border border-cyber-700 relative overflow-hidden group hover:border-purple-500/50 transition-colors">
                        <div class="text-purple-400 font-bold text-lg mb-2">2. 1's Complement</div>
                        <p class="text-sm mb-4">Mendapatkan nilai negatif dengan membalik (NOT) seluruh bit dari nilai positifnya. 0 jadi 1, 1 jadi 0.</p>
                        <ul class="text-xs space-y-1 text-slate-400 border-t border-cyber-700 pt-3">
                            <li><span class="text-slate-200">Rentang:</span> -127 s.d +127</li>
                            <li><span class="text-slate-200">Kelemahan:</span> Masih memiliki +0 dan -0. Penjumlahan butuh tahapan End-Around Carry ekstra.</li>
                        </ul>
                    </div>
                    <div class="bg-cyber-900/50 p-5 rounded-lg border-2 border-cyber-accent shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                        <div class="text-cyber-glow font-bold text-lg mb-2 flex items-center gap-2">
                            3. 2's Complement
                            <span class="bg-cyber-accent text-cyber-900 text-[9px] px-1.5 py-0.5 rounded font-black uppercase tracking-widest">Standard</span>
                        </div>
                        <p class="text-sm mb-4">Diperoleh dari nilai 1's Complement yang <strong class="text-white">ditambah 1</strong> (NOT + 1).</p>
                        <ul class="text-xs space-y-1 text-white font-medium border-t border-cyber-700 pt-3">
                            <li>Rentang: -128 s.d +127 (Lebih luas 1 angka)</li>
                            <li>Hanya memiliki SATU nilai nol.</li>
                            <li>Sirkuit pengurangan dapat digabung ke sirkuit penjumlahan (A - B = A + (-B)). Sangat efisien!</li>
                        </ul>
                    </div>
                </div>

                <div class="mt-8 border-t border-cyber-700 pt-8">
                    <h3 class="text-xl font-bold text-pink-400 mb-4">Rumus Signed Heksadesimal & Oktal</h3>
                    <div class="bg-cyber-900 p-6 rounded-lg font-mono text-sm border border-cyber-700/50">
                        <p class="font-sans text-slate-300 mb-4">Secara hardware, representasi Heksadesimal dan Oktal untuk bilangan negatif adalah pembacaan langsung dari bit murni <strong>2's Complement</strong>-nya.</p>
                        <p class="text-emerald-400 mb-2">Contoh: Mencari Hex dan Octal dari <strong class="text-white">-37</strong> (8-bit)</p>
                        <div class="space-y-1 ml-4 border-l-2 border-cyber-700 pl-4 mb-4 text-slate-300">
                            <div>1. Absolut(37) = <span class="text-slate-400">00100101</span></div>
                            <div>2. NOT (C1)   = <span class="text-purple-300">11011010</span></div>
                            <div>3. Plus 1 (C2)= <span class="text-cyber-glow font-bold">11011011</span></div>
                        </div>
                        
                        <div class="text-slate-400 mb-2 border-t border-cyber-700/50 pt-4">// Pengelompokan langsung dari 2's Complement:</div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="bg-cyber-800 p-3 rounded">
                                <div class="text-xs text-pink-500 mb-1">HEX (4-bit chunks)</div>
                                <div><span class="text-cyber-glow">1101</span> <span class="text-cyber-glow">1011</span> ➔ <span class="text-pink-400 font-bold text-lg">0xDB</span></div>
                            </div>
                            <div class="bg-cyber-800 p-3 rounded">
                                <div class="text-xs text-orange-500 mb-1">OCTAL (3-bit chunks)</div>
                                <div><span class="text-slate-500 text-[10px]">0</span><span class="text-cyber-glow">11</span> <span class="text-cyber-glow">011</span> <span class="text-cyber-glow">011</span> ➔ <span class="text-orange-400 font-bold text-lg">0o333</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderModuleSimulatorW2(container) {
    container.innerHTML = `
        <div class="fade-in max-w-6xl mx-auto space-y-6 pb-20">
            <div class="flex flex-col md:flex-row md:items-center gap-4 mb-6 p-4 bg-cyber-800/50 rounded-xl border border-cyber-700/50">
                <div class="p-3 bg-cyber-accent/10 rounded-lg text-cyber-accent shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                    <h1 class="text-xl font-bold text-white mb-1">Simulator 8-bit Signed (C2 Converter)</h1>
                    <p class="text-sm text-slate-400">Ketik bilangan desimal dari rentang <strong>-128 hingga 127</strong> untuk melihat representasi Biner Negatif, Hex, dan Oktalnya secara real-time.</p>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div class="lg:col-span-4 bg-cyber-800 p-6 rounded-xl border border-cyber-700 h-fit">
                    <label class="block text-sm font-medium text-slate-300 mb-2">Desimal (+ / -)</label>
                    <input type="number" id="sim-dec" class="cyber-input w-full p-4 rounded-lg text-3xl font-bold text-center" placeholder="-58" autocomplete="off" min="-128" max="127">
                    <div id="sim-err" class="text-red-400 text-xs mt-2 hidden text-center bg-red-500/10 py-1 rounded">Nilai 8-bit harus -128 s.d 127</div>
                    
                    <div class="mt-8 space-y-4">
                        <h3 class="text-slate-400 text-xs font-semibold border-b border-cyber-700 pb-2 uppercase tracking-wide">Output (Berdasarkan C2)</h3>
                        <div class="grid grid-cols-2 gap-3">
                            <div class="bg-cyber-900/80 p-3 rounded-lg border border-pink-500/30 text-center">
                                <div class="text-[10px] text-pink-400 font-bold mb-1">SIGNED HEX</div>
                                <div id="sim-out-hex" class="text-xl text-white font-mono uppercase">-</div>
                            </div>
                            <div class="bg-cyber-900/80 p-3 rounded-lg border border-orange-500/30 text-center">
                                <div class="text-[10px] text-orange-400 font-bold mb-1">SIGNED OCTAL</div>
                                <div id="sim-out-oct" class="text-xl text-white font-mono">-</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-8 bg-cyber-800 rounded-xl border border-cyber-700 flex flex-col overflow-hidden min-h-[400px]">
                    <div class="p-4 border-b border-cyber-700 bg-cyber-900/80 flex items-center justify-between">
                        <h3 class="font-semibold text-white flex items-center gap-2">Breakdown Proses & Perbandingan</h3>
                    </div>
                    <div class="p-6 flex-1 space-y-6 bg-cyber-900/30" id="sim-visual">
                        <div class="h-full flex flex-col items-center justify-center text-slate-500 opacity-50">
                            Ketik angka desimal di kolom input...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initSimulatorW2() {
    const inp = document.getElementById('sim-dec');
    const err = document.getElementById('sim-err');
    const outHex = document.getElementById('sim-out-hex');
    const outOct = document.getElementById('sim-out-oct');
    const vis = document.getElementById('sim-visual');

    inp.addEventListener('input', (e) => {
        let valStr = e.target.value;
        if (valStr === '' || valStr === '-') {
            vis.innerHTML = `<div class="h-full flex flex-col items-center justify-center text-slate-500 opacity-50">Menunggu input bilangan...</div>`;
            outHex.textContent = '-'; outOct.textContent = '-';
            err.classList.add('hidden');
            inp.classList.remove('invalid');
            return;
        }

        let val = parseInt(valStr, 10);
        if (isNaN(val)) return;

        if (val < -128 || val > 127) {
            err.classList.remove('hidden');
            inp.classList.add('invalid');
            return;
        } else {
            err.classList.add('hidden');
            inp.classList.remove('invalid');
        }

        const absVal = Math.abs(val);
        const binAbs = absVal.toString(2).padStart(8, '0');
        
        let c1 = '';
        for(let i=0; i<8; i++) c1 += binAbs[i] === '0' ? '1' : '0';
        
        let c2Dec = val < 0 ? (256 + val) : val;
        let c2Bin = c2Dec.toString(2).padStart(8, '0');

        outHex.textContent = '0x' + c2Dec.toString(16).toUpperCase().padStart(2, '0');
        outOct.textContent = '0o' + c2Dec.toString(8).padStart(3, '0');

        let html = '<div class="fade-in space-y-6">';
        if (val >= 0) {
            html += `
                <div class="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-lg flex items-start gap-3">
                    <svg class="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <div>
                        <h4 class="text-emerald-400 font-bold mb-1">Bilangan Positif Terdeteksi</h4>
                        <p class="text-sm text-slate-300">Bilangan positif direpresentasikan secara langsung dalam biner absolut murni.</p>
                    </div>
                </div>
                <div class="bg-cyber-900/80 p-6 rounded-lg border border-cyber-accent shadow-[0_0_20px_rgba(6,182,212,0.15)] flex flex-col items-center justify-center mt-6">
                    <span class="text-slate-400 text-sm mb-2">Representasi 8-bit Final:</span>
                    <div class="flex items-center gap-1 font-mono text-3xl font-black">
                        <span class="text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded" title="Sign Bit (0 = Positif)">${c2Bin[0]}</span>
                        <span class="text-cyber-glow bg-cyber-700/50 px-2 py-1 rounded tracking-[0.1em]">${c2Bin.substring(1)}</span>
                    </div>
                </div>
            `;
        } else {
            let sm = '1' + binAbs.substring(1); 
            html += `
                <div class="text-pink-400 text-sm font-bold flex items-center gap-2 mb-4 border-b border-cyber-700 pb-2">
                    Langkah Konversi 2's Complement
                </div>
                <div class="space-y-4 font-mono text-base">
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-lg bg-cyber-900 border border-cyber-700">
                        <span class="text-slate-400 text-sm mb-1 sm:mb-0">1. Biner Absolut (|${val}|):</span>
                        <span class="text-emerald-300 tracking-[0.3em] font-bold text-lg">${binAbs}</span>
                    </div>
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-lg bg-cyber-900 border border-cyber-700 relative group">
                        <span class="text-slate-400 text-sm mb-1 sm:mb-0">2. Invert Bits (1's Comp):</span>
                        <span class="text-purple-300 tracking-[0.3em] font-bold text-lg group-hover:text-purple-400 transition-colors">${c1}</span>
                    </div>
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 rounded-lg bg-cyber-800 border-2 border-cyber-accent shadow-[0_0_15px_rgba(6,182,212,0.2)] relative transform scale-[1.02]">
                        <span class="text-white font-bold text-sm mb-1 sm:mb-0">3. 2's Complement Final:</span>
                        <div class="flex gap-1">
                            <span class="text-pink-400 font-bold text-xl bg-pink-500/10 px-1.5 py-0.5 rounded" title="Sign Bit (1 = Negatif)">${c2Bin[0]}</span>
                            <span class="text-cyber-glow tracking-[0.3em] font-bold text-xl bg-cyber-900/50 px-2 py-0.5 rounded">${c2Bin.substring(1)}</span>
                        </div>
                    </div>
                </div>
                <div class="mt-8 space-y-3">
                    <h4 class="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2 border-t border-cyber-700 pt-6">Tabel Perbandingan 8-Bit</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <div class="bg-cyber-900 p-3 rounded-lg border border-cyber-700/80 hover:border-slate-500 transition-colors">
                            <div class="text-slate-500 text-xs mb-1 font-sans">Sign-Magnitude</div>
                            <div class="text-white font-mono tracking-widest font-semibold">${sm.substring(0,4)} ${sm.substring(4)}</div>
                        </div>
                        <div class="bg-cyber-900 p-3 rounded-lg border border-cyber-700/80 hover:border-purple-500/50 transition-colors">
                            <div class="text-purple-400 text-xs mb-1 font-sans">1's Complement</div>
                            <div class="text-purple-300 font-mono tracking-widest font-semibold">${c1.substring(0,4)} ${c1.substring(4)}</div>
                        </div>
                    </div>
                </div>
            `;
        }
        html += '</div>';
        vis.innerHTML = html;
    });
}

function renderModuleOverflowW2(container) {
    container.innerHTML = `
        <div class="fade-in max-w-4xl mx-auto mt-4 space-y-6 pb-20">
            <h1 class="text-3xl font-bold text-white mb-2">Aritmetika & Deteksi Overflow</h1>
            <div class="bg-cyber-800/80 p-6 sm:p-8 rounded-xl border border-cyber-700 shadow-lg text-slate-300 space-y-6">
                <section class="space-y-3">
                    <h3 class="text-xl font-bold text-cyber-glow flex items-center gap-2">Pengurangan melalui Penjumlahan (A - B)</h3>
                    <p class="text-sm leading-relaxed">Dalam sistem digital, ALU tidak memerlukan subtractor khusus. Operasi <span class="font-mono text-pink-400 bg-pink-500/10 px-1 rounded">A - B</span> cukup dieksekusi dengan merubah B menjadi negatif lalu dijumlahkan: <span class="font-mono text-emerald-400 bg-emerald-500/10 px-1 rounded">A + (-B)</span>.</p>
                </section>
                <div class="grid md:grid-cols-2 gap-6 items-stretch">
                    <div class="bg-cyber-900 p-5 rounded-lg border border-cyber-700 font-mono text-sm shadow-inner relative">
                        <div class="text-slate-400 mb-3 border-b border-cyber-700 pb-2 font-sans font-bold text-white">Hitung: 75 - 103 (8-bit)</div>
                        <div class="flex justify-between text-slate-300 mb-1"><span>A = 75</span> <span class="tracking-widest text-emerald-300">01001011</span></div>
                        <div class="flex justify-between text-slate-300 mb-2"><span>B = 103</span> <span class="tracking-widest text-slate-400">01100111</span></div>
                        <div class="flex justify-between text-cyber-glow mb-2"><span>-B = -103</span> <span class="tracking-widest font-bold text-pink-400">10011001</span></div>
                        <div class="border-b-2 border-dashed border-cyber-600 my-3"></div>
                        <div class="flex justify-between text-white font-bold bg-cyber-700/50 p-2 rounded">
                            <span>A + (-B) = -28</span> <span class="tracking-widest text-emerald-400">11100100</span>
                        </div>
                    </div>
                    <div class="bg-cyber-900 p-5 rounded-lg border border-cyber-700 shadow-inner flex flex-col justify-between">
                        <div>
                            <h4 class="font-bold text-white mb-2 font-sans flex items-center gap-2">Deteksi Overflow (C2)</h4>
                            <p class="text-xs text-slate-400 leading-relaxed mb-4 font-sans">Overflow terjadi jika penjumlahan dua bilangan bertanda sama menghasilkan tanda yang berlawanan.</p>
                        </div>
                        <div class="bg-pink-500/10 p-4 rounded-lg border border-pink-500/30">
                            <code class="text-sm text-white block mb-1">OVF = C<sub>in</sub> ⊕ C<sub>out</sub></code>
                            <p class="text-[10px] text-slate-400 font-sans">Jika Carry-In ke MSB berbeda dengan Carry-Out dari MSB, maka hasilnya 1 (Overflow).</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="bg-cyber-800 p-6 sm:p-8 rounded-xl border border-cyber-accent/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                <h3 class="text-xl font-bold text-white mb-6">Interactive Quiz</h3>
                <div class="space-y-6" id="quiz-container">
                    <div class="bg-cyber-900/60 p-5 rounded-lg border border-cyber-700/50">
                        <p class="text-slate-300 mb-4 text-sm">1. Konversikan biner 2's complement <strong class="text-cyber-glow font-mono bg-cyber-900 px-1 rounded">10111111</strong> ke Desimal.</p>
                        <div class="flex flex-wrap items-center gap-3">
                            <input type="number" id="q1-inp" class="cyber-input p-2.5 rounded-lg w-32 text-center font-bold" placeholder="Misal: 99">
                            <button onclick="checkQuiz1()" class="px-5 py-2.5 bg-cyber-700 hover:bg-cyber-600 text-white rounded-lg transition-colors text-sm font-semibold">Cek Jawaban</button>
                            <span id="q1-res" class="font-bold text-sm w-full sm:w-auto mt-2 sm:mt-0"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initOverflowQuizW2() {
    window.checkQuiz1 = () => {
        const inp = document.getElementById('q1-inp').value;
        const res = document.getElementById('q1-res');
        if (!inp) return;
        if(inp == '-65') {
            res.innerHTML = '<span class="text-emerald-400 fade-in">Benar! (NOT: 01000000 ➔ +1: 01000001 = -65)</span>';
        } else {
            res.innerHTML = '<span class="text-red-400 fade-in">Salah. MSB adalah 1 (Negatif). Terapkan NOT lalu +1.</span>';
        }
    };
}


// -------------------------------------------------------------
// MODULE W3: MINGGU 3 (Sistem Kode & BCD)
// -------------------------------------------------------------
function renderModuleTheoryW3(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto mt-4 space-y-8 pb-20">
            <h1 class="text-3xl font-bold text-white mb-2">Sistem Pengkodean (Coding Systems)</h1>
            
            <div class="bg-cyber-800/80 p-6 sm:p-8 rounded-xl border border-cyber-700 shadow-lg text-slate-300 space-y-6">
                <p>Selain digunakan untuk nilai numerik komputasi murni, bilangan biner juga digunakan untuk <strong>Sistem Pengkodean (Coding)</strong> di mana kombinasi bit mewakili karakter, angka desimal terpisah, atau tujuan khusus seperti perbaikan error.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-cyber-900/50 p-5 rounded-lg border-t-4 border-t-emerald-500 border border-cyber-700 shadow-sm">
                        <h4 class="text-emerald-400 font-bold text-lg mb-2">Binary-Coded Decimal (BCD)</h4>
                        <p class="text-sm mb-3">Setiap digit desimal tunggal (0-9) diwakili secara independen oleh 4 bit biner murni.</p>
                        <ul class="text-xs space-y-2 text-slate-400">
                            <li><strong class="text-white">Contoh:</strong> Desimal <span class="text-emerald-300 font-bold">85</span> = BCD <span class="text-cyber-glow font-mono font-bold bg-cyber-900 px-1 rounded">1000 0101</span></li>
                            <li><strong class="text-white">Keuntungan:</strong> Konversi ke/dari desimal sangat cepat. Sangat berguna untuk display seven-segment (jam digital, instrumen elektronik).</li>
                            <li><strong class="text-white">Kelemahan:</strong> Boros memori (1 byte hanya muat 0-99 BCD). Operasi aritmetika butuh koreksi hardware khusus (+6 jika hasil > 9).</li>
                        </ul>
                    </div>

                    <div class="bg-cyber-900/50 p-5 rounded-lg border-t-4 border-t-purple-500 border border-cyber-700 shadow-sm">
                        <h4 class="text-purple-400 font-bold text-lg mb-2">Gray Code (Reflected Binary)</h4>
                        <p class="text-sm mb-3">Sistem pengkodean di mana dua nilai yang berurutan hanya berbeda tepat <strong>1 bit</strong>.</p>
                        <ul class="text-xs space-y-2 text-slate-400">
                            <li><strong class="text-white">Biner Murni:</strong> 3 (011) ke 4 (100) ➔ 3 bit berubah bersamaan. Sangat rawan error (glitch) pada hardware mekanis jika transisi tidak sempurna.</li>
                            <li><strong class="text-white">Gray Code:</strong> 3 (010) ke 4 (110) ➔ Hanya 1 bit yang berubah. Aman.</li>
                            <li><strong class="text-white">Penggunaan:</strong> Sensor Rotary encoder, penyederhanaan gerbang logika (Karnaugh Map).</li>
                        </ul>
                    </div>
                </div>

                <div class="mt-8 pt-6 border-t border-cyber-700">
                    <h3 class="text-xl font-bold text-pink-400 mb-3">Kode Alfanumerik (ASCII)</h3>
                    <p class="text-sm mb-4">ASCII (American Standard Code for Information Interchange) adalah standar 7-bit (0-127) yang mewakili karakter teks. Bit ke-8 biasanya digunakan sebagai Parity Bit atau untuk Extended ASCII (128-255).</p>
                    <div class="overflow-x-auto rounded-lg border border-cyber-700 shadow-inner">
                        <table class="w-full text-left text-sm text-slate-300 border-collapse">
                            <thead>
                                <tr class="bg-cyber-900 text-white border-b border-cyber-700 text-xs uppercase tracking-wider">
                                    <th class="p-3 font-semibold">Karakter</th>
                                    <th class="p-3 font-semibold">Desimal</th>
                                    <th class="p-3 font-semibold">Hex</th>
                                    <th class="p-3 font-semibold">Biner (7-bit)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-cyber-800/50 hover:bg-cyber-800 transition-colors">
                                    <td class="p-3 text-pink-400 font-bold">'A'</td><td class="p-3">65</td><td class="p-3 font-mono text-slate-400">0x41</td><td class="p-3 font-mono tracking-widest text-cyber-glow">1000001</td>
                                </tr>
                                <tr class="border-b border-cyber-800/50 hover:bg-cyber-800 transition-colors">
                                    <td class="p-3 text-pink-400 font-bold">'a'</td><td class="p-3">97</td><td class="p-3 font-mono text-slate-400">0x61</td><td class="p-3 font-mono tracking-widest text-cyber-glow">1100001</td>
                                </tr>
                                <tr class="border-b border-cyber-800/50 hover:bg-cyber-800 transition-colors">
                                    <td class="p-3 text-pink-400 font-bold">'0'</td><td class="p-3">48</td><td class="p-3 font-mono text-slate-400">0x30</td><td class="p-3 font-mono tracking-widest text-cyber-glow">0110000</td>
                                </tr>
                                <tr class="hover:bg-cyber-800 transition-colors">
                                    <td class="p-3 text-pink-400 font-bold">Space</td><td class="p-3">32</td><td class="p-3 font-mono text-slate-400">0x20</td><td class="p-3 font-mono tracking-widest text-cyber-glow">0100000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderModuleSimulatorW3(container) {
    container.innerHTML = `
        <div class="fade-in max-w-6xl mx-auto space-y-6 pb-20">
            <div class="flex flex-col md:flex-row md:items-center gap-4 mb-6 p-4 bg-cyber-800/50 rounded-xl border border-cyber-700/50">
                <div class="p-3 bg-cyber-accent/10 rounded-lg text-cyber-accent shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </div>
                <div>
                    <h1 class="text-xl font-bold text-white mb-1">Simulator BCD & Gray Code</h1>
                    <p class="text-sm text-slate-400">Masukkan bilangan Desimal (0-9999) untuk melihat proses konversinya secara visual.</p>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <!-- Input Panel -->
                <div class="lg:col-span-4 space-y-6">
                    <div class="bg-cyber-800 p-6 rounded-xl border border-cyber-700">
                        <label class="block text-sm font-medium text-slate-300 mb-2">Desimal (Positif)</label>
                        <input type="number" id="sim3-dec" class="cyber-input w-full p-4 rounded-lg text-3xl font-bold text-center" placeholder="Misal: 45" autocomplete="off" min="0" max="9999">
                        <div id="sim3-err" class="text-red-400 text-xs mt-2 hidden text-center bg-red-500/10 py-1 rounded">Nilai maksimal 9999 dan positif</div>
                    </div>
                    
                    <div class="bg-cyber-900/50 p-5 rounded-lg border border-cyber-700 shadow-inner text-center group hover:border-emerald-500/30 transition-colors">
                        <div class="text-[10px] text-emerald-400 font-bold mb-1 uppercase tracking-widest">Representasi Biner Murni</div>
                        <div id="sim3-bin" class="text-xl text-white font-mono tracking-widest break-all">-</div>
                    </div>
                </div>

                <!-- Visualization Panel -->
                <div class="lg:col-span-8 bg-cyber-800 rounded-xl border border-cyber-700 flex flex-col overflow-hidden min-h-[500px]">
                    <div class="p-4 border-b border-cyber-700 bg-cyber-900/80 flex items-center justify-between shadow-sm z-10">
                        <h3 class="font-semibold text-white flex items-center gap-2">Visualisasi Konversi Real-time</h3>
                    </div>
                    <div class="p-6 flex-1 space-y-8 bg-cyber-900/30 overflow-y-auto custom-scrollbar" id="sim3-visual">
                        <div class="h-full flex flex-col items-center justify-center text-slate-500 opacity-50">
                            <svg class="w-12 h-12 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m8-8H4"></path></svg>
                            Ketik angka desimal...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initSimulatorW3() {
    const inp = document.getElementById('sim3-dec');
    const err = document.getElementById('sim3-err');
    const outBin = document.getElementById('sim3-bin');
    const vis = document.getElementById('sim3-visual');

    inp.addEventListener('input', (e) => {
        let valStr = e.target.value.trim();
        if (valStr === '' || valStr === '-') {
            vis.innerHTML = '<div class="h-full flex flex-col items-center justify-center text-slate-500 opacity-50">Ketik angka desimal...</div>';
            outBin.textContent = '-';
            err.classList.add('hidden');
            inp.classList.remove('invalid');
            return;
        }

        let val = parseInt(valStr, 10);
        if (isNaN(val) || val < 0) return;

        if (val > 9999) {
            err.classList.remove('hidden');
            inp.classList.add('invalid');
            return;
        } else {
            err.classList.add('hidden');
            inp.classList.remove('invalid');
        }

        let rawBin = val.toString(2);
        outBin.textContent = rawBin;

        // --- 1. BCD Logic ---
        let bcdHtml = '';
        let bcdResult = '';
        for(let i=0; i<valStr.length; i++) {
            let digit = valStr[i];
            let bin4 = parseInt(digit).toString(2).padStart(4, '0');
            bcdResult += bin4 + ' ';
            let colorClass = ['text-emerald-400', 'text-pink-400', 'text-purple-400', 'text-orange-400'][i % 4];
            let borderColor = ['border-emerald-500/30', 'border-pink-500/30', 'border-purple-500/30', 'border-orange-500/30'][i % 4];
            
            bcdHtml += `
                <div class="flex flex-col items-center bg-cyber-900/50 p-3 rounded-lg border ${borderColor} shadow-sm">
                    <span class="text-white font-black text-2xl mb-1">${digit}</span>
                    <span class="text-slate-500 text-xs mb-2">⬇</span>
                    <span class="${colorClass} font-mono font-bold tracking-widest bg-cyber-900 px-2 py-1.5 rounded-md border border-cyber-700 shadow-inner">${bin4}</span>
                </div>
            `;
        }

        // --- 2. Gray Code Logic ---
        // G[0] = B[0], G[i] = B[i] XOR B[i-1]
        let grayStr = rawBin[0];
        let grayHtml = `
            <div class="flex flex-col items-center relative group px-2">
                <span class="text-cyber-glow font-mono font-bold text-lg mb-1">${rawBin[0]}</span>
                <span class="text-slate-500 text-xs mb-1">⬇</span>
                <span class="text-white font-mono font-black bg-cyber-900 px-2.5 py-1.5 rounded-md border border-cyber-700 shadow-sm">${grayStr[0]}</span>
            </div>
        `;
        
        for (let i = 1; i < rawBin.length; i++) {
            let bPrev = rawBin[i-1];
            let bCurr = rawBin[i];
            let gBit = (bPrev === bCurr) ? '0' : '1';
            grayStr += gBit;
            
            grayHtml += `
                <div class="flex flex-col items-center relative group px-2">
                    <span class="text-cyber-glow font-mono font-bold text-lg mb-1">${bCurr}</span>
                    <span class="text-slate-500 text-[9px] font-bold my-1 tracking-wider">XOR</span>
                    <span class="text-white font-mono font-black bg-cyber-900 px-2.5 py-1.5 rounded-md border-b-2 shadow-sm ${gBit === '1' ? 'border-purple-500 text-purple-300' : 'border-cyber-700'}">${gBit}</span>
                </div>
            `;
        }

        // --- Render ---
        vis.innerHTML = `
            <div class="fade-in space-y-10">
                <!-- BCD Result -->
                <div>
                    <h4 class="text-emerald-400 font-bold mb-4 border-b border-cyber-700 pb-2 flex items-center gap-2">
                        <span class="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-xs">1</span> Konversi BCD (Binary-Coded Decimal)
                    </h4>
                    <p class="text-xs text-slate-400 mb-4">Setiap digit desimal dikonversi secara independen menjadi 4-bit biner.</p>
                    <div class="flex justify-center sm:justify-start items-center gap-4 flex-wrap mb-4">
                        ${bcdHtml}
                    </div>
                    <div class="bg-cyber-900/80 p-4 rounded-lg border border-cyber-700/50 flex items-center gap-3">
                        <span class="text-sm text-slate-400">Hasil BCD:</span>
                        <strong class="text-emerald-400 text-lg font-mono tracking-widest bg-emerald-500/10 px-3 py-1 rounded">${bcdResult}</strong>
                    </div>
                </div>

                <!-- Gray Code Result -->
                <div class="border-t border-cyber-700/50 pt-8">
                    <h4 class="text-purple-400 font-bold mb-4 border-b border-cyber-700 pb-2 flex justify-between items-center">
                        <div class="flex items-center gap-2">
                            <span class="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded text-xs">2</span> Konversi Gray Code
                        </div>
                        <span class="text-[10px] bg-cyber-900 px-2 py-1 rounded font-mono text-slate-400 border border-cyber-800">G<sub>n</sub> = B<sub>n</sub> ⊕ B<sub>n-1</sub></span>
                    </h4>
                    <p class="text-xs text-slate-400 mb-4">Operasi XOR antara bit biner saat ini dengan bit biner sebelumnya (kecuali MSB yang langsung diturunkan).</p>
                    
                    <div class="bg-cyber-900/30 p-5 rounded-xl overflow-x-auto border border-cyber-700/50 shadow-inner">
                        <div class="flex gap-1 items-end min-w-max justify-center">
                            <div class="flex flex-col justify-between h-full mr-4 text-xs font-bold text-slate-500 font-sans text-right pb-1 gap-8">
                                <div class="text-cyber-glow">BINER</div>
                                <div class="text-white">GRAY</div>
                            </div>
                            <div class="flex gap-1 text-center">
                                ${grayHtml}
                            </div>
                        </div>
                    </div>
                    <div class="bg-cyber-900/80 p-4 rounded-lg border border-cyber-700/50 flex items-center gap-3 mt-5">
                        <span class="text-sm text-slate-400">Hasil Gray Code:</span>
                        <strong class="text-purple-400 text-lg font-mono tracking-[0.2em] bg-purple-500/10 px-3 py-1 rounded">${grayStr}</strong>
                    </div>
                </div>
            </div>
        `;
    });
}

function renderModuleParityW3(container) {
    container.innerHTML = `
        <div class="fade-in max-w-4xl mx-auto mt-4 space-y-6 pb-20">
            <h1 class="text-3xl font-bold text-white mb-2">Deteksi Error (Parity Bit)</h1>
            
            <div class="bg-cyber-800/80 p-6 sm:p-8 rounded-xl border border-cyber-700 shadow-lg text-slate-300 space-y-6">
                
                <section class="space-y-3">
                    <h3 class="text-xl font-bold text-cyber-glow">Mengapa Butuh Deteksi Error?</h3>
                    <p class="text-sm leading-relaxed">Saat data biner (misal kode ASCII) ditransmisikan melalui kabel komunikasi, gangguan gelombang listrik (noise) dapat menyebabkan <i>bit flip</i> (0 menjadi 1 atau sebaliknya). Komputer membutuhkan metode untuk mendeteksi apabila paket data yang diterima telah rusak. Salah satu cara termudahnya adalah dengan menyisipkan 1 bit tambahan yang disebut <strong>Parity Bit</strong>.</p>
                </section>

                <div class="grid md:grid-cols-2 gap-6 items-stretch">
                    <!-- Even Parity -->
                    <div class="bg-cyber-900 p-5 rounded-xl border border-cyber-700 shadow-inner group hover:border-pink-500/50 transition-colors">
                        <div class="font-bold text-pink-400 text-lg mb-2 flex items-center gap-2">
                            <div class="w-2 h-2 bg-pink-400 rounded-full"></div> Even Parity (Genap)
                        </div>
                        <p class="text-xs text-slate-400 mb-4">Parity bit diset sedemikian rupa agar <strong>total seluruh angka '1'</strong> dalam satu transmisi data bernilai Genap.</p>
                        <div class="bg-cyber-800 p-4 rounded-lg font-mono text-sm border border-cyber-700/50">
                            <div class="text-slate-300">Data Transmisi: <span class="text-cyber-glow">1011001</span> (Ada 4 bit '1')</div>
                            <div class="text-pink-300 mt-2">Parity bit tambahan: <span class="font-bold bg-pink-500/20 px-2 py-0.5 rounded border border-pink-500/30">0</span></div>
                            <div class="text-[10px] text-slate-500 mt-2 font-sans italic border-t border-cyber-700 pt-2">Total '1' = 4 + 0 = 4 (Genap) ✔</div>
                        </div>
                    </div>

                    <!-- Odd Parity -->
                    <div class="bg-cyber-900 p-5 rounded-xl border border-cyber-700 shadow-inner group hover:border-orange-500/50 transition-colors">
                        <div class="font-bold text-orange-400 text-lg mb-2 flex items-center gap-2">
                            <div class="w-2 h-2 bg-orange-400 rounded-full"></div> Odd Parity (Ganjil)
                        </div>
                        <p class="text-xs text-slate-400 mb-4">Parity bit diset sedemikian rupa agar <strong>total seluruh angka '1'</strong> dalam satu transmisi data bernilai Ganjil.</p>
                        <div class="bg-cyber-800 p-4 rounded-lg font-mono text-sm border border-cyber-700/50">
                            <div class="text-slate-300">Data Transmisi: <span class="text-cyber-glow">1011001</span> (Ada 4 bit '1')</div>
                            <div class="text-orange-300 mt-2">Parity bit tambahan: <span class="font-bold bg-orange-500/20 px-2 py-0.5 rounded border border-orange-500/30">1</span></div>
                            <div class="text-[10px] text-slate-500 mt-2 font-sans italic border-t border-cyber-700 pt-2">Total '1' = 4 + 1 = 5 (Ganjil) ✔</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quiz Section -->
            <div class="bg-cyber-800 p-6 sm:p-8 rounded-xl border border-cyber-accent/50 shadow-[0_0_20px_rgba(6,182,212,0.15)] relative overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-cyber-accent/10 rounded-full blur-3xl"></div>
                <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2 relative z-10">
                    <svg class="w-6 h-6 text-cyber-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Mini Latihan: Generator Parity
                </h3>
                
                <div class="space-y-6 relative z-10" id="quiz-container">
                    <div class="bg-cyber-900/60 p-6 rounded-xl border border-cyber-700/50">
                        <p class="text-slate-300 mb-5 text-sm leading-relaxed">Karakter <strong class="text-pink-400 font-bold bg-pink-500/10 px-1 rounded">'C'</strong> memiliki kode ASCII biner 7-bit <strong class="text-cyber-glow tracking-widest font-mono bg-cyber-900 px-2 py-1 rounded border border-cyber-700">1000011</strong>. Tentukan angka Parity Bit yang harus disisipkan!</p>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div class="bg-cyber-800 p-4 rounded-lg border border-cyber-700/50 text-center shadow-inner">
                                <label class="text-[11px] text-slate-400 uppercase tracking-widest font-bold mb-3 block">Bit untuk Even Parity</label>
                                <input type="number" id="q3-even" class="cyber-input p-3 rounded-lg w-20 text-center font-bold text-xl" min="0" max="1" placeholder="?">
                            </div>
                            <div class="bg-cyber-800 p-4 rounded-lg border border-cyber-700/50 text-center shadow-inner">
                                <label class="text-[11px] text-slate-400 uppercase tracking-widest font-bold mb-3 block">Bit untuk Odd Parity</label>
                                <input type="number" id="q3-odd" class="cyber-input p-3 rounded-lg w-20 text-center font-bold text-xl" min="0" max="1" placeholder="?">
                            </div>
                        </div>
                        
                        <div class="mt-6 pt-6 border-t border-cyber-700/50 flex flex-wrap gap-4 items-center justify-between">
                            <button onclick="checkParityW3()" class="px-6 py-2.5 bg-cyber-700 hover:bg-cyber-600 text-white rounded-lg transition-colors text-sm font-semibold shadow-md active:scale-95">Cek Jawaban</button>
                            <span id="q3-res" class="font-bold text-sm w-full sm:w-auto text-right"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initParityW3() {
    window.checkParityW3 = () => {
        const ev = document.getElementById('q3-even').value;
        const od = document.getElementById('q3-odd').value;
        const res = document.getElementById('q3-res');
        
        if (ev === '' || od === '') return;
        
        if (ev == '1' && od == '0') {
            res.innerHTML = '<span class="text-emerald-400 fade-in flex items-center justify-end gap-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Benar! Jumlah angka 1 pada 1000011 adalah 3. Even butuh 1, Odd butuh 0.</span>';
        } else {
            res.innerHTML = '<span class="text-red-400 fade-in flex items-center justify-end gap-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Salah. Coba hitung ulang total angka 1 pada data tersebut.</span>';
        }
    };
}


// -------------------------------------------------------------
// APP INITIALIZATION & THEME LOGIC
// -------------------------------------------------------------
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
