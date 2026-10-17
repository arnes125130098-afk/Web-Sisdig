
function renderModuleTheoryW3(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto mt-4 space-y-8 pb-20">
            <h1 class="text-3xl font-bold text-white mb-2">Aljabar Boolean & Gerbang Logika</h1>
            <div class="bg-cyber-800/80 p-6 rounded-xl border border-cyber-700 shadow-lg text-slate-300 space-y-6">
                <h3 class="text-xl font-bold text-cyber-glow">Gerbang Logika Dasar</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                    <div class="bg-cyber-900 p-3 rounded border border-cyber-700"><strong class="text-emerald-400 block mb-1 text-lg">AND ( . )</strong>Y = A . B<br><span class="text-xs text-slate-500">Aktif jika SEMUA 1</span></div>
                    <div class="bg-cyber-900 p-3 rounded border border-cyber-700"><strong class="text-purple-400 block mb-1 text-lg">OR ( + )</strong>Y = A + B<br><span class="text-xs text-slate-500">Aktif jika SALAH SATU 1</span></div>
                    <div class="bg-cyber-900 p-3 rounded border border-cyber-700"><strong class="text-pink-400 block mb-1 text-lg">NOT ( ' )</strong>Y = A'<br><span class="text-xs text-slate-500">Inversi (Pembalikan)</span></div>
                    <div class="bg-cyber-900 p-3 rounded border border-cyber-700"><strong class="text-orange-400 block mb-1 text-lg">XOR ( ⊕ )</strong>Y = A ⊕ B<br><span class="text-xs text-slate-500">Aktif jika BERBEDA</span></div>
                </div>

                <h3 class="text-xl font-bold text-cyber-glow mt-8">Hukum & Teorema Boolean</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm font-mono bg-cyber-900/50 p-4 rounded border border-cyber-700">
                    <div><span class="text-slate-500">Identitas:</span> A + 0 = A, A . 1 = A</div>
                    <div><span class="text-slate-500">Idempoten:</span> A + A = A, A . A = A</div>
                    <div><span class="text-slate-500">Komplemen:</span> A + A' = 1, A . A' = 0</div>
                    <div><span class="text-slate-500">Dominansi:</span> A + 1 = 1, A . 0 = 0</div>
                    <div><span class="text-slate-500">Involusi:</span> (A')' = A</div>
                    <div><span class="text-slate-500">De Morgan:</span> (A + B)' = A' . B', (A . B)' = A' + B'</div>
                    <div class="md:col-span-2 text-pink-400 mt-2 border-t border-cyber-700 pt-2">Distributif: A + (B . C) = (A + B) . (A + C)</div>
                </div>
            </div>
        </div>
    `;
}

function renderModuleSimulatorW3(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto space-y-6 pb-20">
            <h1 class="text-2xl font-bold text-white mb-2">Simulator Gerbang Logika 2-Input</h1>
            <div class="flex flex-col md:flex-row gap-8 items-start">
                <div class="flex flex-col gap-6 bg-cyber-800 p-6 rounded-xl border border-cyber-700 w-full md:w-auto shrink-0">
                    <h4 class="text-slate-400 font-bold mb-2 text-center">Input Sinyal (Klik)</h4>
                    <div class="flex items-center gap-4 justify-center">
                        <span class="text-xl font-bold text-cyber-glow w-4 text-center">A</span>
                        <button id="tog-a" class="w-16 h-16 rounded-lg text-2xl font-bold bg-cyber-900 border-2 border-cyber-700 text-slate-500 shadow-inner transition-colors focus:outline-none">0</button>
                    </div>
                    <div class="flex items-center gap-4 justify-center">
                        <span class="text-xl font-bold text-cyber-glow w-4 text-center">B</span>
                        <button id="tog-b" class="w-16 h-16 rounded-lg text-2xl font-bold bg-cyber-900 border-2 border-cyber-700 text-slate-500 shadow-inner transition-colors focus:outline-none">0</button>
                    </div>
                </div>
                <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    <div class="bg-cyber-800 p-4 rounded-xl border border-cyber-700 flex justify-between items-center shadow-inner">
                        <span class="font-bold text-emerald-400">AND (A . B)</span>
                        <span id="out-and" class="text-3xl font-bold text-slate-600 transition-colors">0</span>
                    </div>
                    <div class="bg-cyber-800 p-4 rounded-xl border border-cyber-700 flex justify-between items-center shadow-inner">
                        <span class="font-bold text-purple-400">OR (A + B)</span>
                        <span id="out-or" class="text-3xl font-bold text-slate-600 transition-colors">0</span>
                    </div>
                    <div class="bg-cyber-800 p-4 rounded-xl border border-cyber-700 flex justify-between items-center shadow-inner">
                        <span class="font-bold text-pink-400">NAND (A . B)'</span>
                        <span id="out-nand" class="text-3xl font-bold text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-colors">1</span>
                    </div>
                    <div class="bg-cyber-800 p-4 rounded-xl border border-cyber-700 flex justify-between items-center shadow-inner">
                        <span class="font-bold text-pink-400">NOR (A + B)'</span>
                        <span id="out-nor" class="text-3xl font-bold text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-colors">1</span>
                    </div>
                    <div class="bg-cyber-800 p-4 rounded-xl border border-cyber-700 flex justify-between items-center shadow-inner">
                        <span class="font-bold text-orange-400">XOR (A ⊕ B)</span>
                        <span id="out-xor" class="text-3xl font-bold text-slate-600 transition-colors">0</span>
                    </div>
                    <div class="bg-cyber-800 p-4 rounded-xl border border-cyber-700 flex justify-between items-center shadow-inner">
                        <span class="font-bold text-orange-400">XNOR (A ⊕ B)'</span>
                        <span id="out-xnor" class="text-3xl font-bold text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-colors">1</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initSimulatorW3() {
    let a = 0; let b = 0;
    const btnA = document.getElementById('tog-a');
    const btnB = document.getElementById('tog-b');
    
    function updateGates() {
        btnA.textContent = a; btnB.textContent = b;
        btnA.className = `w-16 h-16 rounded-lg text-2xl font-bold border-2 transition-colors focus:outline-none ${a ? 'bg-cyber-accent/20 border-cyber-accent text-cyber-glow shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'bg-cyber-900 border-cyber-700 text-slate-500 shadow-inner'}`;
        btnB.className = `w-16 h-16 rounded-lg text-2xl font-bold border-2 transition-colors focus:outline-none ${b ? 'bg-cyber-accent/20 border-cyber-accent text-cyber-glow shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'bg-cyber-900 border-cyber-700 text-slate-500 shadow-inner'}`;
        
        const and = a & b; const or = a | b; const xor = a ^ b;
        const nand = and ? 0 : 1; const nor = or ? 0 : 1; const xnor = xor ? 0 : 1;
        
        const outEls = { 'and': and, 'or': or, 'nand': nand, 'nor': nor, 'xor': xor, 'xnor': xnor };
        for(let key in outEls) {
            let el = document.getElementById('out-' + key);
            if(!el) continue;
            el.textContent = outEls[key];
            el.className = `text-3xl font-bold transition-colors ${outEls[key] ? 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]' : 'text-slate-600'}`;
        }
    }
    if(!btnA) return;
    btnA.addEventListener('click', () => { a = a ? 0 : 1; updateGates(); });
    btnB.addEventListener('click', () => { b = b ? 0 : 1; updateGates(); });
}

function renderModuleSOPPOSW3(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto mt-4 space-y-6 pb-20">
            <h1 class="text-3xl font-bold text-white mb-2">SOP & POS</h1>
            <div class="bg-cyber-800/80 p-6 rounded-xl border border-cyber-700 shadow-lg text-slate-300 space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-cyber-900 p-5 rounded border border-emerald-500/50 shadow-inner group hover:border-emerald-400 transition-colors">
                        <h4 class="font-bold text-emerald-400 mb-2 text-lg">Sum of Product (SOP) / Minterm</h4>
                        <p class="text-sm mb-4">Setiap suku adalah hasil perkalian (AND), dan antar suku dijumlahkan (OR).</p>
                        <code class="text-cyber-glow text-base bg-cyber-800 px-3 py-2 rounded block font-mono border border-cyber-700 shadow-sm">Y = AB + A'B'C + BC'</code>
                        <div class="mt-4 p-3 bg-cyber-800/50 rounded text-xs text-slate-400 border border-cyber-700">
                            <strong>Cara Membaca Tabel Kebenaran:</strong>
                            <ul class="list-disc ml-4 mt-1">
                                <li>Fokus pada baris yang outputnya = <strong class="text-emerald-400">1</strong>.</li>
                                <li>Variabel bernilai 1 ditulis normal (A).</li>
                                <li>Variabel bernilai 0 ditulis komplemen (A').</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bg-cyber-900 p-5 rounded border border-pink-500/50 shadow-inner group hover:border-pink-400 transition-colors">
                        <h4 class="font-bold text-pink-400 mb-2 text-lg">Product of Sum (POS) / Maxterm</h4>
                        <p class="text-sm mb-4">Setiap suku adalah hasil penjumlahan (OR), dan antar suku dikalikan (AND).</p>
                        <code class="text-pink-300 text-base bg-cyber-800 px-3 py-2 rounded block font-mono border border-cyber-700 shadow-sm">Y = (A + B) . (A' + B' + C)</code>
                        <div class="mt-4 p-3 bg-cyber-800/50 rounded text-xs text-slate-400 border border-cyber-700">
                            <strong>Cara Membaca Tabel Kebenaran:</strong>
                            <ul class="list-disc ml-4 mt-1">
                                <li>Fokus pada baris yang outputnya = <strong class="text-pink-400">0</strong>.</li>
                                <li>Variabel bernilai 0 ditulis normal (A).</li>
                                <li>Variabel bernilai 1 ditulis komplemen (A').</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mt-4 border-t border-cyber-700 pt-6">
                    <h4 class="font-bold text-white mb-2">Konversi POS ke SOP</h4>
                    <p class="text-sm mb-2">Gunakan Hukum Distributif untuk menyederhanakan perkalian antar penjumlahan:</p>
                    <div class="bg-cyber-900 p-4 rounded font-mono text-sm text-slate-400">
                        <div class="text-white mb-1">Y = (A + B)(A' + B)</div>
                        <div class="ml-4">= AA' + AB + A'B + BB</div>
                        <div class="ml-4">= 0 + AB + A'B + B</div>
                        <div class="ml-4">= (A + A')B + B</div>
                        <div class="ml-4">= (1)B + B = <strong class="text-emerald-400">B</strong></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
