function renderModuleTheoryW3(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto mt-4 space-y-8 pb-20">
            <h1 class="text-3xl font-bold text-slate-900 mb-2">Aljabar Boolean & Gerbang Logika</h1>
            <div class="bg-cyber-800/80 p-6 rounded-xl border border-slate-300 shadow-lg text-slate-700 space-y-6">
                <h3 class="text-xl font-bold text-cyber-glow">Gerbang Logika Dasar</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                    <div class="bg-white p-3 rounded border border-slate-300 shadow-sm"><strong class="text-emerald-600 block mb-1 text-lg">AND ( . )</strong>Y = A . B<br><span class="text-xs text-slate-600">Aktif jika SEMUA 1</span></div>
                    <div class="bg-white p-3 rounded border border-slate-300 shadow-sm"><strong class="text-purple-600 block mb-1 text-lg">OR ( + )</strong>Y = A + B<br><span class="text-xs text-slate-600">Aktif jika SALAH SATU 1</span></div>
                    <div class="bg-white p-3 rounded border border-slate-300 shadow-sm"><strong class="text-pink-600 block mb-1 text-lg">NOT ( ' )</strong>Y = A'<br><span class="text-xs text-slate-600">Inversi (Pembalikan)</span></div>
                    <div class="bg-white p-3 rounded border border-slate-300 shadow-sm"><strong class="text-orange-600 block mb-1 text-lg">XOR ( ⊕ )</strong>Y = A ⊕ B<br><span class="text-xs text-slate-600">Aktif jika BERBEDA</span></div>
                </div>

                <h3 class="text-xl font-bold text-cyber-glow mt-8">Hukum & Teorema Boolean</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm font-mono bg-white p-4 rounded border border-slate-300 shadow-sm">
                    <div><span class="text-slate-600 font-semibold">Identitas:</span> A + 0 = A, A . 1 = A</div>
                    <div><span class="text-slate-600 font-semibold">Idempoten:</span> A + A = A, A . A = A</div>
                    <div><span class="text-slate-600 font-semibold">Komplemen:</span> A + A' = 1, A . A' = 0</div>
                    <div><span class="text-slate-600 font-semibold">Dominansi:</span> A + 1 = 1, A . 0 = 0</div>
                    <div><span class="text-slate-600 font-semibold">Involusi:</span> (A')' = A</div>
                    <div><span class="text-slate-600 font-semibold">De Morgan:</span> (A + B)' = A' . B', (A . B)' = A' + B'</div>
                    <div class="md:col-span-2 text-pink-600 mt-2 border-t border-slate-300 pt-2 font-bold">Distributif: A + (B . C) = (A + B) . (A + C)</div>
                </div>
            </div>
        </div>
    `;
}

function renderModuleSimulatorW3(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto space-y-6 pb-20">
            <h1 class="text-2xl font-bold text-slate-900 mb-2">Simulator Gerbang Logika 2-Input</h1>
            <div class="flex flex-col md:flex-row gap-8 items-start">
                <div class="flex flex-col gap-6 bg-cyber-800 p-6 rounded-xl border border-slate-300 w-full md:w-auto shrink-0 shadow-md">
                    <h4 class="text-slate-600 font-bold mb-2 text-center">Input Sinyal (Klik untuk Mengubah)</h4>
                    <div class="flex items-center gap-4 justify-center">
                        <span class="text-xl font-bold text-cyber-glow w-4 text-center">A</span>
                        <button id="tog-a" class="w-16 h-16 rounded-lg text-2xl font-bold bg-white border-2 border-slate-300 text-slate-600 shadow-inner transition-colors focus:outline-none">0</button>
                    </div>
                    <div class="flex items-center gap-4 justify-center">
                        <span class="text-xl font-bold text-pink-600 w-4 text-center">B</span>
                        <button id="tog-b" class="w-16 h-16 rounded-lg text-2xl font-bold bg-white border-2 border-slate-300 text-slate-600 shadow-inner transition-colors focus:outline-none">0</button>
                    </div>
                </div>

                <div class="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                    <div class="bg-cyber-800 p-4 rounded-xl border border-slate-300 text-center shadow-sm">
                        <span class="text-xs text-slate-600 font-bold uppercase block mb-1">AND</span>
                        <div id="out-and" class="text-3xl font-bold text-slate-600">0</div>
                    </div>
                    <div class="bg-cyber-800 p-4 rounded-xl border border-slate-300 text-center shadow-sm">
                        <span class="text-xs text-slate-600 font-bold uppercase block mb-1">OR</span>
                        <div id="out-or" class="text-3xl font-bold text-slate-600">0</div>
                    </div>
                    <div class="bg-cyber-800 p-4 rounded-xl border border-slate-300 text-center shadow-sm">
                        <span class="text-xs text-slate-600 font-bold uppercase block mb-1">NAND</span>
                        <div id="out-nand" class="text-3xl font-bold text-slate-600">1</div>
                    </div>
                    <div class="bg-cyber-800 p-4 rounded-xl border border-slate-300 text-center shadow-sm">
                        <span class="text-xs text-slate-600 font-bold uppercase block mb-1">NOR</span>
                        <div id="out-nor" class="text-3xl font-bold text-slate-600">1</div>
                    </div>
                    <div class="bg-cyber-800 p-4 rounded-xl border border-slate-300 text-center shadow-sm">
                        <span class="text-xs text-slate-600 font-bold uppercase block mb-1">XOR</span>
                        <div id="out-xor" class="text-3xl font-bold text-slate-600">0</div>
                    </div>
                    <div class="bg-cyber-800 p-4 rounded-xl border border-slate-300 text-center shadow-sm">
                        <span class="text-xs text-slate-600 font-bold uppercase block mb-1">XNOR</span>
                        <div id="out-xnor" class="text-3xl font-bold text-slate-600">1</div>
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
        btnA.className = `w-16 h-16 rounded-lg text-2xl font-bold border-2 transition-colors focus:outline-none ${a ? 'bg-cyber-accent/20 border-cyber-accent text-cyber-glow shadow-[0_0_15px_rgba(37,99,235,0.3)]' : 'bg-white border-slate-300 text-slate-600 shadow-inner'}`;
        btnB.className = `w-16 h-16 rounded-lg text-2xl font-bold border-2 transition-colors focus:outline-none ${b ? 'bg-pink-500/20 border-pink-500 text-pink-600 shadow-[0_0_15px_rgba(219,39,119,0.3)]' : 'bg-white border-slate-300 text-slate-600 shadow-inner'}`;
        
        const and = a & b; const or = a | b; const xor = a ^ b;
        const nand = and ? 0 : 1; const nor = or ? 0 : 1; const xnor = xor ? 0 : 1;
        
        const outEls = { 'and': and, 'or': or, 'nand': nand, 'nor': nor, 'xor': xor, 'xnor': xnor };
        for(let key in outEls) {
            let el = document.getElementById('out-' + key);
            if(!el) continue;
            el.textContent = outEls[key];
            el.className = `text-3xl font-bold transition-colors ${outEls[key] ? 'text-emerald-600 drop-shadow-[0_0_8px_rgba(5,150,105,0.5)]' : 'text-slate-600'}`;
        }
    }
    if(!btnA) return;
    btnA.addEventListener('click', () => { a = a ? 0 : 1; updateGates(); });
    btnB.addEventListener('click', () => { b = b ? 0 : 1; updateGates(); });
    updateGates();
}

function renderModuleSOPPOSW3(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto mt-4 space-y-6 pb-20">
            <h1 class="text-3xl font-bold text-slate-900 mb-2">SOP & POS</h1>
            <div class="bg-cyber-800/80 p-6 rounded-xl border border-slate-300 shadow-lg text-slate-700 space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-white p-5 rounded-lg border border-slate-300 shadow-sm">
                        <h4 class="font-bold text-emerald-600 mb-2 text-lg">Sum of Product (SOP) / Minterm</h4>
                        <p class="text-sm mb-4">Setiap suku adalah hasil perkalian (AND), dan antar suku dijumlahkan (OR).</p>
                        <code class="text-emerald-600 text-base bg-slate-50 px-3 py-2 rounded block font-mono border border-slate-300 shadow-sm">Y = (A . B) + (A' . B' . C)</code>
                        <div class="mt-4 p-3 bg-slate-50 rounded text-xs text-slate-600 border border-slate-200">
                            <strong>Cara Membaca Tabel Kebenaran:</strong>
                            <ul class="list-disc ml-4 mt-1">
                                <li>Fokus pada baris yang outputnya = <strong class="text-emerald-600">1</strong>.</li>
                                <li>Variabel bernilai 1 ditulis normal (A).</li>
                                <li>Variabel bernilai 0 ditulis komplemen (A').</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bg-white p-5 rounded-lg border border-slate-300 shadow-sm">
                        <h4 class="font-bold text-pink-600 mb-2 text-lg">Product of Sum (POS) / Maxterm</h4>
                        <p class="text-sm mb-4">Setiap suku adalah hasil penjumlahan (OR), dan antar suku dikalikan (AND).</p>
                        <code class="text-pink-600 text-base bg-slate-50 px-3 py-2 rounded block font-mono border border-slate-300 shadow-sm">Y = (A + B) . (A' + B' + C)</code>
                        <div class="mt-4 p-3 bg-slate-50 rounded text-xs text-slate-600 border border-slate-200">
                            <strong>Cara Membaca Tabel Kebenaran:</strong>
                            <ul class="list-disc ml-4 mt-1">
                                <li>Fokus pada baris yang outputnya = <strong class="text-pink-600">0</strong>.</li>
                                <li>Variabel bernilai 0 ditulis normal (A).</li>
                                <li>Variabel bernilai 1 ditulis komplemen (A').</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mt-4 border-t border-slate-300 pt-6">
                    <h4 class="font-bold text-slate-900 mb-2">Contoh Pembuktian Aljabar Boolean</h4>
                    <p class="text-sm mb-2">Sederhanakan ekspresi <code class="font-mono bg-slate-100 px-1 py-0.5 rounded text-blue-600 font-bold">Y = (A + B)(A' + B)</code> menggunakan hukum Boolean:</p>
                    <div class="bg-slate-50 p-4 rounded font-mono text-sm text-slate-700 border border-slate-200 space-y-1">
                        <div class="text-slate-900 font-bold">Y = (A + B)(A' + B)</div>
                        <div class="ml-4">= AA' + AB + A'B + BB <span class="text-xs text-slate-500 font-sans italic">(Hukum Distributif)</span></div>
                        <div class="ml-4">= 0 + AB + A'B + B <span class="text-xs text-slate-500 font-sans italic">(Karena AA' = 0 dan BB = B)</span></div>
                        <div class="ml-4">= B(A + A') + B <span class="text-xs text-slate-500 font-sans italic">(Faktorisasi B)</span></div>
                        <div class="ml-4">= B(1) + B = B + B <span class="text-xs text-slate-500 font-sans italic">(Komplemen A + A' = 1)</span></div>
                        <div class="ml-4 text-emerald-600 font-bold">= B <span class="text-xs text-slate-500 font-sans italic">(Idempoten B + B = B)</span></div>
                    </div>
                </div>
            </div>

            <!-- Quiz W3 -->
            <div class="mt-12 bg-cyber-800 p-6 sm:p-8 rounded-xl border border-cyber-accent/30 shadow-lg relative overflow-hidden">
                <h3 class="text-xl font-bold text-cyber-accent mb-4">Latihan Aljabar Boolean</h3>
                <p class="text-slate-700 mb-6 text-base">Sederhanakan ekspresi berikut ke bentuk minimumnya: <strong class="text-lg font-mono bg-white px-2 py-1 rounded shadow-sm border border-slate-300 text-blue-600">Y = (A + B)(A' + B)</strong></p>
                <div class="flex flex-col sm:flex-row gap-4 mb-6">
                    <label class="flex items-center gap-3 cursor-pointer p-4 bg-white rounded-lg border border-slate-300 hover:border-cyber-accent transition-colors shadow-sm">
                        <input type="radio" name="q3" value="A" class="form-radio text-cyber-accent w-4 h-4"> <span class="font-mono text-lg font-bold">Y = A</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer p-4 bg-white rounded-lg border border-slate-300 hover:border-cyber-accent transition-colors shadow-sm">
                        <input type="radio" name="q3" value="B" class="form-radio text-cyber-accent w-4 h-4"> <span class="font-mono text-lg font-bold text-emerald-600">Y = B</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer p-4 bg-white rounded-lg border border-slate-300 hover:border-cyber-accent transition-colors shadow-sm">
                        <input type="radio" name="q3" value="1" class="form-radio text-cyber-accent w-4 h-4"> <span class="font-mono text-lg font-bold">Y = 1</span>
                    </label>
                </div>
                <button onclick="checkQuizW3()" class="px-6 py-3 bg-cyber-accent text-white rounded-lg transition-colors text-sm font-semibold hover:bg-cyber-glow shadow-md">Cek & Lihat Penjelasan Detail</button>
                <div id="q3-res" class="mt-6"></div>
            </div>
        </div>
    `;
}

// Global scope checkQuizW3 so it always works
window.checkQuizW3 = () => {
    const sel = document.querySelector('input[name="q3"]:checked');
    const res = document.getElementById('q3-res');
    if(!sel) return;
    
    let explHtml = `
        <div class="mt-6 bg-white p-6 rounded-xl border border-slate-300 text-sm fade-in w-full text-left shadow-inner">
            <h4 class="font-bold text-cyber-accent mb-4 border-b border-slate-300 pb-2 text-lg">Penyelesaian Step-by-Step via Hukum Boolean:</h4>
            <div class="font-mono text-slate-700 space-y-3 mt-4">
                <div class="flex flex-col md:flex-row md:items-center gap-2"><span class="w-32 shrink-0 font-sans text-xs uppercase tracking-widest text-slate-600 font-bold">Soal:</span> <span class="text-base font-bold text-slate-900">Y = (A + B)(A' + B)</span></div>
                <div class="flex flex-col md:flex-row md:items-center gap-2"><span class="w-32 shrink-0 font-sans text-xs uppercase tracking-widest text-slate-600 font-bold">Langkah 1 (Distributif):</span> <span class="text-base">Y = AA' + AB + A'B + BB</span></div>
                <div class="flex flex-col md:flex-row md:items-center gap-2"><span class="w-32 shrink-0 font-sans text-xs uppercase tracking-widest text-slate-600 font-bold">Langkah 2 (Komplemen):</span> <span><span class="text-base">Y = <strong class="text-pink-600 bg-pink-100 px-1.5 py-0.5 rounded">0</strong> + AB + A'B + BB</span> <span class="text-xs text-slate-500 font-sans italic">(Karena AA' = 0)</span></span></div>
                <div class="flex flex-col md:flex-row md:items-center gap-2"><span class="w-32 shrink-0 font-sans text-xs uppercase tracking-widest text-slate-600 font-bold">Langkah 3 (Idempoten):</span> <span><span class="text-base">Y = AB + A'B + <strong class="text-purple-600 bg-purple-100 px-1.5 py-0.5 rounded">B</strong></span> <span class="text-xs text-slate-500 font-sans italic">(Karena BB = B)</span></span></div>
                <div class="flex flex-col md:flex-row md:items-center gap-2"><span class="w-32 shrink-0 font-sans text-xs uppercase tracking-widest text-slate-600 font-bold">Langkah 4 (Faktorkan B):</span> <span class="text-base">Y = B(A + A') + B</span></div>
                <div class="flex flex-col md:flex-row md:items-center gap-2"><span class="w-32 shrink-0 font-sans text-xs uppercase tracking-widest text-slate-600 font-bold">Langkah 5 (Komplemen):</span> <span class="text-base">Y = B(<strong class="text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded">1</strong>) + B = B + B</span></div>
                <div class="flex flex-col md:flex-row md:items-center gap-2 pt-4 border-t border-slate-300"><span class="w-32 shrink-0 font-sans text-xs uppercase tracking-widest text-slate-600 font-bold">Hasil Akhir:</span> <span class="text-emerald-600 font-bold text-2xl bg-emerald-50 px-3 py-1 rounded shadow-sm border border-emerald-200 tracking-widest">Y = B</span> <span class="text-xs ml-4 text-slate-500 font-sans italic pt-2">(Hukum Idempoten B + B = B)</span></div>
            </div>
        </div>
    `;
    
    if(sel.value === 'B') {
        res.innerHTML = '<div class="text-emerald-600 font-bold fade-in mb-2 text-xl">✅ Analisis Anda Sangat Tepat!</div>' + explHtml;
    } else {
        res.innerHTML = '<div class="text-red-500 font-bold fade-in mb-2 text-xl">❌ Kurang tepat. Mari telaah penyelesaian matematisnya:</div>' + explHtml;
    }
};
