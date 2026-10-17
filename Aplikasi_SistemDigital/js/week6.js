function renderModuleTheoryW6(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto mt-4 space-y-8 pb-20">
            <div>
                <h1 class="text-3xl font-bold text-slate-900 mb-2">Multilevel Logic & Universal Gates</h1>
                <p class="text-slate-600 text-sm">Gerbang NAND dan NOR disebut <strong>Gerbang Universal</strong> karena kombinasi dari salah satu jenis gerbang tersebut dapat membentuk seluruh fungsi logika dasar (NOT, AND, OR, XOR).</p>
            </div>

            <!-- Universal Gate Proof Cards -->
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-cyber-800 p-6 rounded-xl border border-slate-300 shadow-md space-y-4">
                    <h3 class="text-lg font-bold text-blue-600 border-b border-slate-200 pb-2">Pembentukan Logika dari Gerbang NAND</h3>
                    <div class="space-y-3 font-mono text-xs">
                        <div class="p-3 bg-slate-50 rounded border border-slate-200">
                            <strong class="text-slate-900 font-sans block mb-1">NOT dari NAND:</strong>
                            Y = (A . A)' = <span class="text-emerald-600 font-bold">A'</span> <span class="text-slate-500 font-sans italic">(Input A digabungkan)</span>
                        </div>
                        <div class="p-3 bg-slate-50 rounded border border-slate-200">
                            <strong class="text-slate-900 font-sans block mb-1">AND dari NAND:</strong>
                            Y = ((A . B)')' = <span class="text-emerald-600 font-bold">A . B</span> <span class="text-slate-500 font-sans italic">(NAND diikuti inverter NAND)</span>
                        </div>
                        <div class="p-3 bg-slate-50 rounded border border-slate-200">
                            <strong class="text-slate-900 font-sans block mb-1">OR dari NAND (De Morgan):</strong>
                            A + B = ((A + B)')' = (A' . B')' <span class="text-slate-500 font-sans italic">(NAND dengan input yang di-invers)</span>
                        </div>
                    </div>
                </div>

                <div class="bg-cyber-800 p-6 rounded-xl border border-slate-300 shadow-md space-y-4">
                    <h3 class="text-lg font-bold text-pink-600 border-b border-slate-200 pb-2">Pembentukan Logika dari Gerbang NOR</h3>
                    <div class="space-y-3 font-mono text-xs">
                        <div class="p-3 bg-slate-50 rounded border border-slate-200">
                            <strong class="text-slate-900 font-sans block mb-1">NOT dari NOR:</strong>
                            Y = (A + A)' = <span class="text-pink-600 font-bold">A'</span>
                        </div>
                        <div class="p-3 bg-slate-50 rounded border border-slate-200">
                            <strong class="text-slate-900 font-sans block mb-1">OR dari NOR:</strong>
                            Y = ((A + B)')' = <span class="text-pink-600 font-bold">A + B</span>
                        </div>
                        <div class="p-3 bg-slate-50 rounded border border-slate-200">
                            <strong class="text-slate-900 font-sans block mb-1">AND dari NOR (De Morgan):</strong>
                            A . B = ((A . B)')' = (A' + B')'
                        </div>
                    </div>
                </div>
            </div>

            <!-- SOP with NAND only procedure -->
            <div class="bg-cyber-800 p-6 rounded-xl border border-slate-300 shadow-md">
                <h3 class="text-xl font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">Prosedur Desain SOP dengan Multilevel NAND</h3>
                <div class="text-sm text-slate-700 space-y-3">
                    <p>Contoh: Implementasikan fungsi <code class="font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200 font-bold">F = A + B.C</code> hanya dengan NAND:</p>
                    <ol class="list-decimal pl-5 space-y-2 font-mono text-xs text-slate-800">
                        <li>Identifikasi suku SOP: Suku 1 = A, Suku 2 = B.C</li>
                        <li>Implementasi suku AND: B.C dibuat dengan NAND lalu di-invers: (B.C)'' = B.C</li>
                        <li>Terapkan Hukum De Morgan untuk penggabungan OR: A + BC = ((A + BC)')' = (A' . (BC)')'</li>
                        <li>Hasil akhir seluruh gerbang terwujud murni menggunakan gerbang NAND!</li>
                    </ol>
                </div>
            </div>
        </div>
    `;
}

function renderModuleSimulatorW6(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto space-y-8 pb-20">
            <div>
                <h1 class="text-2xl font-bold text-slate-900 mb-2">Simulator Multiplexer (MUX) 4:1</h1>
                <p class="text-slate-600 text-sm">Multiplexer (Data Selector) memilih salah satu dari 2^k input data untuk diteruskan ke output tunggal berdasarkan status sinyal pada Select Line (S).</p>
            </div>

            <div class="grid md:grid-cols-3 gap-6 items-start">
                <!-- Select Lines Control -->
                <div class="bg-cyber-800 p-6 rounded-xl border border-slate-300 shadow-md space-y-4">
                    <h4 class="font-bold text-slate-800 border-b border-slate-200 pb-2">Select Lines (S1, S0)</h4>
                    <p class="text-xs text-slate-600">Pilih kombinasi jalur input data mana yang akan dihubungkan ke output Y:</p>
                    <div class="flex justify-around items-center pt-2">
                        <div class="text-center">
                            <span class="text-xs font-mono font-bold block mb-1 text-slate-500">S1</span>
                            <button id="btn-s1" onclick="toggleMuxS(1)" class="w-14 h-14 rounded-lg font-mono text-xl font-bold bg-slate-100 text-slate-700 border border-slate-300 shadow-inner">0</button>
                        </div>
                        <div class="text-center">
                            <span class="text-xs font-mono font-bold block mb-1 text-slate-500">S0</span>
                            <button id="btn-s0" onclick="toggleMuxS(0)" class="w-14 h-14 rounded-lg font-mono text-xl font-bold bg-slate-100 text-slate-700 border border-slate-300 shadow-inner">0</button>
                        </div>
                    </div>
                    <div class="mt-4 p-3 bg-blue-50 rounded text-center border border-blue-200">
                        <span class="text-xs text-blue-700 font-bold block">Jalur Terpilih:</span>
                        <span id="selected-channel" class="text-lg font-mono font-bold text-blue-800">Input D0</span>
                    </div>
                </div>

                <!-- Data Inputs -->
                <div class="bg-cyber-800 p-6 rounded-xl border border-slate-300 shadow-md space-y-4">
                    <h4 class="font-bold text-slate-800 border-b border-slate-200 pb-2">Data Inputs (D0 - D3)</h4>
                    <p class="text-xs text-slate-600">Klik tombol di bawah untuk menyetel logika 0 atau 1 pada tiap saluran data:</p>
                    <div class="grid grid-cols-2 gap-3" id="mux-data-inputs">
                        <!-- Rendered by JS -->
                    </div>
                </div>

                <!-- Output Display -->
                <div class="bg-cyber-800 p-6 rounded-xl border border-slate-300 shadow-md flex flex-col justify-between h-full">
                    <div>
                        <h4 class="font-bold text-slate-800 border-b border-slate-200 pb-2">Output MUX (Y)</h4>
                        <div class="mt-6 text-center">
                            <span class="text-xs font-bold text-slate-500 uppercase block mb-1">Status Sinyal Output</span>
                            <div id="mux-output-val" class="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl font-mono font-bold bg-slate-100 text-slate-600 border-2 border-slate-300 shadow-inner">0</div>
                        </div>
                    </div>
                    <div class="mt-6 p-3 bg-slate-50 rounded border border-slate-200 text-xs font-mono">
                        <div class="text-slate-500 mb-1">Persamaan Aktif:</div>
                        <div id="mux-eq" class="font-bold text-blue-700">Y = S1'.S0'.D0</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

let mux_s = [0, 0]; // [S1, S0]
let mux_d = [1, 0, 1, 0]; // [D0, D1, D2, D3]

function initSimulatorW6() {
    renderMuxInputs();
    updateMux();
}

function toggleMuxS(idx) {
    mux_s[idx] = mux_s[idx] ? 0 : 1;
    const btn = document.getElementById(idx === 1 ? 'btn-s1' : 'btn-s0');
    if (btn) {
        btn.textContent = mux_s[idx];
        btn.className = `w-14 h-14 rounded-lg font-mono text-xl font-bold transition-all shadow-inner ${mux_s[idx] ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 border border-slate-300'}`;
    }
    updateMux();
}

function toggleMuxD(idx) {
    mux_d[idx] = mux_d[idx] ? 0 : 1;
    renderMuxInputs();
    updateMux();
}

function renderMuxInputs() {
    const container = document.getElementById('mux-data-inputs');
    if (!container) return;
    const selectedIdx = (mux_s[1] << 1) | mux_s[0];

    container.innerHTML = mux_d.map((val, idx) => {
        const isSelected = idx === selectedIdx;
        return `
            <div class="p-2.5 rounded-lg border transition-all ${isSelected ? 'border-blue-500 bg-blue-50/50 shadow-sm' : 'border-slate-200 bg-slate-50'}">
                <div class="flex items-center justify-between mb-1">
                    <span class="text-xs font-mono font-bold ${isSelected ? 'text-blue-700' : 'text-slate-600'}">D${idx}</span>
                    ${isSelected ? '<span class="text-[9px] bg-blue-600 text-white px-1.5 py-0.2 rounded font-bold uppercase">Aktif</span>' : ''}
                </div>
                <button onclick="toggleMuxD(${idx})" class="w-full py-2 rounded font-mono font-bold text-base transition-colors ${val ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white text-slate-500 border border-slate-300'}">${val}</button>
            </div>
        `;
    }).join('');
}

function updateMux() {
    const selectedIdx = (mux_s[1] << 1) | mux_s[0];
    const outVal = mux_d[selectedIdx];

    const selCh = document.getElementById('selected-channel');
    if (selCh) selCh.textContent = `Input D${selectedIdx} (S1=${mux_s[1]}, S0=${mux_s[0]})`;

    const outEl = document.getElementById('mux-output-val');
    if (outEl) {
        outEl.textContent = outVal;
        outEl.className = `w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl font-mono font-bold transition-all ${outVal ? 'bg-emerald-600 text-white shadow-[0_0_20px_rgba(5,150,105,0.4)]' : 'bg-slate-100 text-slate-600 border-2 border-slate-300'}`;
    }

    const eqEl = document.getElementById('mux-eq');
    if (eqEl) {
        const s1Part = mux_s[1] ? 'S1' : "S1'";
        const s0Part = mux_s[0] ? 'S0' : "S0'";
        eqEl.textContent = `Y = ${s1Part}.${s0Part}.D${selectedIdx} = ${outVal}`;
    }

    renderMuxInputs();
}

function renderModuleQuizW6(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto mt-4 space-y-8 pb-20">
            <div>
                <h1 class="text-3xl font-bold text-slate-900 mb-2">Desain Rangkaian MUX & Latihan</h1>
                <p class="text-slate-600 text-sm">Persamaan umum Multiplexer 2^k : 1 adalah <strong>Y = ∑ Di . mi(S)</strong>, di mana mi(S) adalah minterm select lines yang mengaktifkan input data Di.</p>
            </div>

            <!-- Quiz W6 -->
            <div class="bg-cyber-800 p-6 sm:p-8 rounded-xl border border-cyber-accent/30 shadow-lg relative overflow-hidden">
                <h3 class="text-xl font-bold text-cyber-accent mb-4">Latihan: Seleksi Jalur Multiplexer 4:1</h3>
                <p class="text-slate-700 mb-6 text-base">Pada sebuah multiplexer 4:1, diberikan input select line <strong class="font-mono bg-white px-2 py-1 rounded border border-slate-300 text-blue-600">S1 = 1, S0 = 0</strong>, dan input data bernilai <strong class="font-mono bg-white px-2 py-1 rounded border border-slate-300 text-pink-600">D0=0, D1=0, D2=1, D3=0</strong>. Berapakah nilai output <strong>Y</strong> dan saluran mana yang dipilih?</p>
                <div class="grid sm:grid-cols-2 gap-4 mb-6">
                    <label class="flex items-center gap-3 cursor-pointer p-4 bg-white rounded-lg border border-slate-300 hover:border-cyber-accent transition-colors shadow-sm">
                        <input type="radio" name="q6" value="A" class="form-radio text-cyber-accent w-4 h-4"> <span class="font-mono text-base font-bold">Y = 0, Jalur D1</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer p-4 bg-white rounded-lg border border-slate-300 hover:border-cyber-accent transition-colors shadow-sm">
                        <input type="radio" name="q6" value="B" class="form-radio text-cyber-accent w-4 h-4"> <span class="font-mono text-base font-bold text-emerald-600">Y = 1, Jalur D2</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer p-4 bg-white rounded-lg border border-slate-300 hover:border-cyber-accent transition-colors shadow-sm">
                        <input type="radio" name="q6" value="C" class="form-radio text-cyber-accent w-4 h-4"> <span class="font-mono text-base font-bold">Y = 1, Jalur D3</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer p-4 bg-white rounded-lg border border-slate-300 hover:border-cyber-accent transition-colors shadow-sm">
                        <input type="radio" name="q6" value="D" class="form-radio text-cyber-accent w-4 h-4"> <span class="font-mono text-base font-bold">Y = 0, Jalur D2</span>
                    </label>
                </div>
                <button onclick="checkQuizW6()" class="px-6 py-3 bg-cyber-accent text-white rounded-lg transition-colors text-sm font-semibold hover:bg-cyber-glow shadow-md">Cek & Lihat Penjelasan Detail</button>
                <div id="q6-res" class="mt-6"></div>
            </div>
        </div>
    `;
}

window.checkQuizW6 = () => {
    const sel = document.querySelector('input[name="q6"]:checked');
    const res = document.getElementById('q6-res');
    if (!sel) return;

    let explHtml = `
        <div class="mt-6 bg-white p-6 rounded-xl border border-slate-300 text-sm fade-in w-full text-left shadow-inner">
            <h4 class="font-bold text-cyber-accent mb-4 border-b border-slate-300 pb-2 text-lg">Penyelesaian Detail Pemilihan Multiplexer:</h4>
            <div class="space-y-4 text-slate-700 font-mono">
                <div>
                    <span class="text-xs uppercase font-sans font-bold text-slate-500 block">1. Menentukan Desimal Select Line:</span>
                    <div class="mt-1 bg-slate-50 p-3 rounded border border-slate-200">
                        Kombinasi (S1, S0) = (1, 0)₂ = (1 × 2¹) + (0 × 2⁰) = <strong class="text-blue-600 text-base">2₁₀</strong>.
                        <div class="text-xs font-sans text-slate-600 mt-1">Artinya MUX mengaktifkan jalur input <strong class="text-slate-900">D2</strong>.</div>
                    </div>
                </div>
                <div>
                    <span class="text-xs uppercase font-sans font-bold text-slate-500 block">2. Menghitung Persamaan Output MUX 4:1:</span>
                    <div class="mt-1 bg-slate-50 p-3 rounded border border-slate-200">
                        <div>Y = (S1'.S0'.D0) + (S1'.S0.D1) + (S1.S0'.D2) + (S1.S0.D3)</div>
                        <div class="mt-1">Y = (0 . 0) + (0 . 0) + (1 . 1 . 1) + (0 . 0) = <strong class="text-emerald-600 text-lg">1</strong></div>
                    </div>
                </div>
                <div class="border-t border-slate-200 pt-3 text-sm font-sans">
                    <strong>Kesimpulan Akhir:</strong> Jalur yang terpilih adalah <strong>D2</strong>, dan karena nilai sinyal pada D2 adalah 1, maka output <strong>Y = 1</strong>.
                </div>
            </div>
        </div>
    `;

    if (sel.value === 'B') {
        res.innerHTML = '<div class="text-emerald-600 font-bold fade-in mb-2 text-xl">✅ Luar Biasa! Jawaban Anda Benar!</div>' + explHtml;
    } else {
        res.innerHTML = '<div class="text-red-500 font-bold fade-in mb-2 text-xl">❌ Kurang tepat. Simak pembahasan lengkapnya di bawah:</div>' + explHtml;
    }
};
