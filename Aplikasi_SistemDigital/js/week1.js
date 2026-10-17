// -------------------------------------------------------------
// MODULE W1: MINGGU 1 
// -------------------------------------------------------------
function renderModuleIntro(container) {
    container.innerHTML = `
        <div class="fade-in max-w-3xl mx-auto mt-8">
            <h1 class="text-3xl font-bold text-slate-900 mb-6">Pengenalan Sistem Bilangan</h1>
            <div class="bg-cyber-800/80 p-8 rounded-xl border border-slate-300 shadow-lg text-slate-700 space-y-5 leading-relaxed">
                <p>Dalam dunia komputasi dan sistem digital, mesin beroperasi menggunakan state on/off yang direpresentasikan sebagai logika <strong class="text-cyber-glow">Biner (Basis 2)</strong>.</p>
                <p>Angka biner bisa menjadi panjang dan sulit dibaca. Oleh karena itu digunakan sistem bilangan lain:</p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                    <li><strong class="text-purple-600">Oktal (Basis 8):</strong> Mengelompokkan setiap 3 bit biner.</li>
                    <li><strong class="text-pink-600">Heksadesimal (Basis 16):</strong> Mengelompokkan setiap 4 bit (nibble) biner.</li>
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
            <div class="flex flex-col md:flex-row md:items-center gap-4 mb-6 p-4 bg-cyber-800/50 rounded-xl border border-slate-300/50">
                <div class="p-3 bg-cyber-accent/10 rounded-lg text-cyber-accent shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                </div>
                <div>
                    <h1 class="text-xl font-bold text-slate-900 mb-1">Binary Central Hub</h1>
                    <p class="text-sm text-slate-600">Setiap input akan dikonversi ke Biner terlebih dahulu, kemudian didistribusikan ke basis lainnya. (Positif Murni / Unsigned)</p>
                </div>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                <div class="xl:col-span-5 space-y-4">
                    <div class="bg-cyber-800 p-5 rounded-xl border border-slate-300 relative overflow-hidden group focus-within:border-emerald-500/50 transition-colors">
                        <div class="absolute top-0 right-0 px-3 py-1 bg-emerald-500/10 text-emerald-600 text-[10px] font-bold rounded-bl-lg tracking-wider">BASIS 10</div>
                        <label class="block text-sm font-medium text-slate-600 mb-2">Desimal Unsigned</label>
                        <input type="text" id="inp-10" class="cyber-input w-full p-4 rounded-lg text-xl" placeholder="Contoh: 255" autocomplete="off">
                        <div class="text-xs text-red-600 mt-2 hidden" id="err-10">Karakter tidak valid!</div>
                    </div>
                    <div class="bg-cyber-800 p-6 rounded-xl border-2 border-cyber-accent relative shadow-[0_0_20px_rgba(6,182,212,0.15)] focus-within:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-shadow transform scale-[1.02] z-10">
                        <div class="absolute top-0 right-0 px-3 py-1 bg-cyber-accent text-cyber-900 text-[10px] font-bold rounded-bl-lg tracking-wider">CENTRAL HUB (BASIS 2)</div>
                        <label class="block text-sm font-medium text-slate-200 mb-2">Biner (0 & 1)</label>
                        <input type="text" id="inp-2" class="cyber-input w-full p-4 rounded-lg text-2xl font-bold text-cyber-glow text-center tracking-[0.2em]" placeholder="11111111" autocomplete="off">
                        <div class="text-xs text-red-600 mt-2 hidden text-center" id="err-2">Hanya 0 dan 1!</div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-cyber-800 p-5 rounded-xl border border-slate-300 relative focus-within:border-purple-500/50 transition-colors">
                            <div class="absolute top-0 right-0 px-3 py-1 bg-purple-500/10 text-purple-600 text-[10px] font-bold rounded-bl-lg tracking-wider">BASIS 8</div>
                            <label class="block text-sm font-medium text-slate-600 mb-2">Oktal (0-7)</label>
                            <input type="text" id="inp-8" class="cyber-input w-full p-3 rounded-lg text-lg" placeholder="Contoh: 377" autocomplete="off">
                        </div>
                        <div class="bg-cyber-800 p-5 rounded-xl border border-slate-300 relative focus-within:border-pink-500/50 transition-colors">
                            <div class="absolute top-0 right-0 px-3 py-1 bg-pink-500/10 text-pink-600 text-[10px] font-bold rounded-bl-lg tracking-wider">BASIS 16</div>
                            <label class="block text-sm font-medium text-slate-600 mb-2">Hex (0-9, A-F)</label>
                            <input type="text" id="inp-16" class="cyber-input w-full p-3 rounded-lg text-lg uppercase" placeholder="Contoh: FF" autocomplete="off">
                        </div>
                    </div>
                </div>

                <div class="xl:col-span-7 bg-cyber-800 rounded-xl border border-slate-300 flex flex-col h-[600px] xl:h-full overflow-hidden relative">
                    <div class="p-4 border-b border-slate-300 flex justify-between items-center bg-white/80 shrink-0">
                        <h3 class="font-semibold text-slate-900 flex items-center gap-2 text-sm sm:text-base">Breakdown</h3>
                        <label class="flex items-center cursor-pointer select-none">
                            <span class="mr-3 text-[10px] sm:text-xs text-slate-600 font-medium uppercase tracking-wide">Tampilkan Langkah</span>
                            <div class="relative">
                                <input type="checkbox" id="toggle-steps" class="sr-only" checked>
                                <div class="block bg-white w-10 h-6 rounded-full border border-cyber-600 transition-colors"></div>
                                <div class="dot absolute left-1 top-1 bg-slate-400 w-4 h-4 rounded-full transition-transform transform"></div>
                            </div>
                        </label>
                    </div>
                    <div id="step-container" class="p-6 flex-1 overflow-y-auto custom-scrollbar font-mono text-sm sm:text-base space-y-10 transition-opacity duration-300">
                        <div class="h-full flex flex-col items-center justify-center text-slate-600 opacity-50">Menunggu input...</div>
                    </div>
                </div>
            </div>
                    <!-- Quiz W1 -->
            <div class="mt-12 bg-cyber-800 p-6 sm:p-8 rounded-xl border border-cyber-accent/30 shadow-lg relative overflow-hidden">
                <h3 class="text-xl font-bold text-cyber-accent mb-4">Latihan: Konversi Desimal ke Biner</h3>
                <p class="text-slate-600 mb-4 text-sm">Coba hitung manual: Berapakah nilai Biner dari desimal <strong>45</strong>?</p>
                <div class="flex flex-wrap items-center gap-3 mb-4">
                    <input type="text" id="q1-inp" class="cyber-input p-2.5 rounded-lg w-48 text-center font-bold font-mono" placeholder="101... ">
                    <button onclick="checkQuizW1()" class="px-5 py-2.5 bg-cyber-accent text-white rounded-lg transition-colors text-sm font-semibold hover:bg-cyber-glow shadow-md">Cek & Lihat Penjelasan</button>
                </div>
                <div id="q1-res" class="mt-4"></div>
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
                document.getElementById('step-container').innerHTML = '<div class="h-full flex flex-col items-center justify-center text-slate-600 opacity-50">Menunggu input...</div>';
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
            document.getElementById('step-container').innerHTML = `<div class="text-emerald-600 font-bold p-4">Konversi sukses: Biner ${binaryStr}</div>`;
        });
    });

    window.checkQuizW1 = () => {
        const inp = document.getElementById('q1-inp').value.trim();
        const res = document.getElementById('q1-res');
        if(!inp) return;
        
        let explHtml = `
            <div class="mt-4 bg-white p-6 rounded-xl border border-slate-300 text-sm fade-in shadow-inner">
                <h4 class="font-bold text-cyber-accent mb-4 border-b border-slate-300 pb-2 text-lg">Penyelesaian Detail (Metode Pembagian 2):</h4>
                <ul class="list-none space-y-3 text-slate-700 font-mono">
                    <li class="flex items-center gap-4"><span class="w-20 text-right">45 ÷ 2 = 22</span> <span class="text-xs">sisa</span> <strong class="text-pink-600 text-lg bg-pink-100 px-2 rounded">1</strong> <span class="text-xs text-slate-600">(LSB - Kanan)</span></li>
                    <li class="flex items-center gap-4"><span class="w-20 text-right">22 ÷ 2 = 11</span> <span class="text-xs">sisa</span> <strong class="text-pink-600 text-lg bg-pink-100 px-2 rounded">0</strong></li>
                    <li class="flex items-center gap-4"><span class="w-20 text-right">11 ÷ 2 = 5</span> <span class="text-xs">sisa</span> <strong class="text-pink-600 text-lg bg-pink-100 px-2 rounded">1</strong></li>
                    <li class="flex items-center gap-4"><span class="w-20 text-right">5 ÷ 2 = 2</span> <span class="text-xs">sisa</span> <strong class="text-pink-600 text-lg bg-pink-100 px-2 rounded">1</strong></li>
                    <li class="flex items-center gap-4"><span class="w-20 text-right">2 ÷ 2 = 1</span> <span class="text-xs">sisa</span> <strong class="text-pink-600 text-lg bg-pink-100 px-2 rounded">0</strong></li>
                    <li class="flex items-center gap-4"><span class="w-20 text-right">1 ÷ 2 = 0</span> <span class="text-xs">sisa</span> <strong class="text-pink-600 text-lg bg-pink-100 px-2 rounded">1</strong> <span class="text-xs text-slate-600">(MSB - Kiri)</span></li>
                </ul>
                <p class="mt-6 pt-4 border-t border-slate-300 text-base">Dibaca dari bawah ke atas (MSB ke LSB): <br><strong class="text-emerald-600 text-2xl tracking-widest mt-2 block">101101</strong></p>
            </div>
        `;
        
        if(inp === '101101') {
            res.innerHTML = '<div class="text-emerald-600 font-bold fade-in text-xl mb-2">✅ Benar Sekali!</div>' + explHtml;
        } else {
            res.innerHTML = '<div class="text-red-500 font-bold fade-in text-xl mb-2">❌ Kurang Tepat. Mari kita pelajari langkahnya:</div>' + explHtml;
        }
    };
}

// -------------------------------------------------------------
