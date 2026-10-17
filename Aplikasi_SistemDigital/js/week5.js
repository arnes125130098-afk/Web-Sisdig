function renderModuleTheoryW5(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto mt-4 space-y-8 pb-20">
            <h1 class="text-3xl font-bold text-slate-900 mb-2">Rangkaian Adder & Subtractor</h1>
            <p class="text-slate-600 text-sm">Blok dasar aritmetika digital yang digunakan pada Arithmetic Logic Unit (ALU) prosesor untuk penjumlahan, pengurangan, dan operasi aritmetika turunan.</p>
            
            <div class="grid md:grid-cols-2 gap-6 items-stretch">
                <!-- Half Adder -->
                <div class="bg-cyber-800 p-6 rounded-xl border border-slate-300 shadow-md flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
                            <h3 class="text-xl font-bold text-blue-600">Half Adder (HA)</h3>
                            <span class="text-xs font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold">2 Input (A, B)</span>
                        </div>
                        <p class="text-sm text-slate-700 mb-4">Menjumlahkan 2 bit biner tanpa memperhitungkan carry dari posisi sebelumnya.</p>
                        <div class="bg-slate-50 p-4 rounded-lg font-mono text-sm border border-slate-200 space-y-2 mb-4">
                            <div class="text-emerald-600 font-bold">Sum (S) = A ⊕ B <span class="text-xs text-slate-500 font-sans font-normal">(XOR Gate)</span></div>
                            <div class="text-purple-600 font-bold">Carry (C) = A . B <span class="text-xs text-slate-500 font-sans font-normal">(AND Gate)</span></div>
                        </div>
                        <table class="w-full text-xs font-mono text-center border-collapse border border-slate-200">
                            <tr class="bg-slate-100 font-bold text-slate-700">
                                <th class="p-1 border border-slate-200">A</th><th class="p-1 border border-slate-200">B</th>
                                <th class="p-1 border border-slate-200 text-emerald-600">S (Sum)</th><th class="p-1 border border-slate-200 text-purple-600">C (Carry)</th>
                            </tr>
                            <tr><td class="p-1 border">0</td><td class="p-1 border">0</td><td class="p-1 border">0</td><td class="p-1 border">0</td></tr>
                            <tr><td class="p-1 border">0</td><td class="p-1 border">1</td><td class="p-1 border">1</td><td class="p-1 border">0</td></tr>
                            <tr><td class="p-1 border">1</td><td class="p-1 border">0</td><td class="p-1 border">1</td><td class="p-1 border">0</td></tr>
                            <tr class="bg-blue-50/50"><td class="p-1 border font-bold">1</td><td class="p-1 border font-bold">1</td><td class="p-1 border font-bold text-emerald-600">0</td><td class="p-1 border font-bold text-purple-600">1</td></tr>
                        </table>
                    </div>
                    <div class="mt-4 text-xs text-amber-700 bg-amber-50 p-2.5 rounded border border-amber-200">
                        <strong>Kekurangan:</strong> Tidak memiliki input Carry-in (Cin), sehingga tidak cukup untuk operasi multi-bit (hanya bit LSB).
                    </div>
                </div>

                <!-- Full Adder -->
                <div class="bg-cyber-800 p-6 rounded-xl border border-slate-300 shadow-md flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
                            <h3 class="text-xl font-bold text-emerald-600">Full Adder (FA)</h3>
                            <span class="text-xs font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">3 Input (A, B, Cin)</span>
                        </div>
                        <p class="text-sm text-slate-700 mb-4">Menjumlahkan 3 bit: dua operand bit plus satu carry-in dari bit sebelumnya.</p>
                        <div class="bg-slate-50 p-4 rounded-lg font-mono text-sm border border-slate-200 space-y-2 mb-4">
                            <div class="text-emerald-600 font-bold">Sum (S) = A ⊕ B ⊕ Cin</div>
                            <div class="text-purple-600 font-bold">Cout = (A . B) + (Cin . (A ⊕ B))</div>
                        </div>
                        <p class="text-xs text-slate-600 leading-relaxed">Terdiri dari 2 buah Half Adder dan 1 gerbang OR. Mampu dirangkai berantai untuk membentuk penjumlahan multi-bit (seperti 4-bit, 32-bit, atau 64-bit).</p>
                    </div>
                    <div class="mt-4 text-xs text-emerald-800 bg-emerald-50 p-2.5 rounded border border-emerald-200">
                        <strong>Keunggulan:</strong> Merupakan blok pondasi arsitektur Ripple Carry Adder (RCA) dan ALU modern.
                    </div>
                </div>
            </div>

            <!-- Subtractor Section -->
            <div class="bg-cyber-800 p-6 rounded-xl border border-slate-300 shadow-md">
                <h3 class="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Rangkaian Subtractor (Pengurang Biner)</h3>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="space-y-3">
                        <h4 class="font-bold text-pink-600">Half Subtractor (HS)</h4>
                        <p class="text-sm text-slate-700">Mengurangi bit A (minuend) dengan bit B (subtrahend).</p>
                        <div class="bg-slate-50 p-3 rounded font-mono text-xs border border-slate-200 space-y-1">
                            <div>Difference (D) = A ⊕ B</div>
                            <div>Borrow (Bout) = A' . B <span class="text-slate-500 font-sans italic">(Pinjam jika 0 - 1)</span></div>
                        </div>
                    </div>
                    <div class="space-y-3">
                        <h4 class="font-bold text-indigo-600">Full Subtractor (FS)</h4>
                        <p class="text-sm text-slate-700">Pengurangan 3 input dengan pinjaman sebelumnya (Bin):</p>
                        <div class="bg-slate-50 p-3 rounded font-mono text-xs border border-slate-200 space-y-1">
                            <div>Difference (D) = A ⊕ B ⊕ Bin</div>
                            <div>Bout = A' . (B + Bin) + (B . Bin)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderModuleSimulatorW5(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto space-y-8 pb-20">
            <div>
                <h1 class="text-2xl font-bold text-slate-900 mb-2">Simulator Adder-Subtractor 4-Bit Terintegrasi</h1>
                <p class="text-slate-600 text-sm">Rangkaian cerdas yang memanfaatkan 4 Full Adder dan gerbang XOR untuk melakukan penjumlahan (M=0) atau pengurangan 2's Complement (M=1) dalam satu modul perangkat keras tunggal.</p>
            </div>

            <!-- Mode Selector Control -->
            <div class="bg-cyber-800 p-6 rounded-xl border border-slate-300 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Kontrol Mode Operasi (M)</span>
                    <h3 id="mode-label" class="text-xl font-bold text-blue-600">Mode Penjumlahan (Addition: A + B)</h3>
                    <p id="mode-desc" class="text-xs text-slate-600 mt-1">Gerbang XOR menyalurkan B apa adanya (B ⊕ 0 = B) dan Cin awal = 0.</p>
                </div>
                <div class="flex items-center gap-3 bg-slate-100 p-2 rounded-xl border border-slate-300">
                    <button id="btn-mode-add" onclick="setOpMode(0)" class="px-5 py-2.5 rounded-lg font-bold text-sm bg-blue-600 text-white shadow-md transition-all">Add (M=0)</button>
                    <button id="btn-mode-sub" onclick="setOpMode(1)" class="px-5 py-2.5 rounded-lg font-bold text-sm bg-white text-slate-700 hover:bg-slate-200 transition-all">Subtract (M=1)</button>
                </div>
            </div>

            <!-- Bit Input Rows -->
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-cyber-800 p-6 rounded-xl border border-slate-300 shadow-sm space-y-4">
                    <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                        <h4 class="font-bold text-slate-800">Operand A (4-Bit)</h4>
                        <span id="dec-a" class="font-mono text-sm font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">Desimal: 9</span>
                    </div>
                    <div class="flex justify-around" id="row-a">
                        <!-- Bit buttons for A -->
                    </div>
                </div>

                <div class="bg-cyber-800 p-6 rounded-xl border border-slate-300 shadow-sm space-y-4">
                    <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                        <h4 class="font-bold text-slate-800">Operand B (4-Bit)</h4>
                        <span id="dec-b" class="font-mono text-sm font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded border border-pink-200">Desimal: 5</span>
                    </div>
                    <div class="flex justify-around" id="row-b">
                        <!-- Bit buttons for B -->
                    </div>
                </div>
            </div>

            <!-- Full Adder Chain Display -->
            <div class="bg-cyber-800 p-6 rounded-xl border border-slate-300 shadow-lg">
                <h4 class="font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2 flex items-center justify-between">
                    <span>Propagasi Bit Pada Full Adder Chain</span>
                    <span class="text-xs font-mono text-slate-500 font-normal">Bit 3 (MSB) ➔ Bit 0 (LSB)</span>
                </h4>
                
                <div class="grid grid-cols-4 gap-3 text-center font-mono" id="fa-chain">
                    <!-- Dynamic bit stages will render here -->
                </div>

                <!-- Final Output Display -->
                <div class="mt-8 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border">
                    <div>
                        <span class="text-xs text-slate-500 font-bold uppercase block">Hasil Operasi Digital</span>
                        <div class="text-2xl font-mono font-bold text-slate-900 mt-1 flex items-center gap-2">
                            <span class="text-xs text-purple-700 bg-purple-100 px-2 py-1 rounded" id="cout-badge">Cout = 1</span>
                            <span id="bin-result" class="text-emerald-600 tracking-widest text-3xl">0100</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="text-xs text-slate-500 font-bold uppercase block">Nilai Desimal Ekuivalen</span>
                        <div id="dec-result" class="text-3xl font-mono font-bold text-blue-600">4</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

let w5_mode = 0; // 0 = Add, 1 = Sub
let w5_a = [1, 0, 0, 1]; // [A3, A2, A1, A0] = 9
let w5_b = [0, 1, 0, 1]; // [B3, B2, B1, B0] = 5

function initSimulatorW5() {
    renderBitsW5();
    calculateW5();
}

function setOpMode(m) {
    w5_mode = m;
    const btnAdd = document.getElementById('btn-mode-add');
    const btnSub = document.getElementById('btn-mode-sub');
    const lbl = document.getElementById('mode-label');
    const desc = document.getElementById('mode-desc');

    if (m === 0) {
        btnAdd.className = "px-5 py-2.5 rounded-lg font-bold text-sm bg-blue-600 text-white shadow-md transition-all";
        btnSub.className = "px-5 py-2.5 rounded-lg font-bold text-sm bg-white text-slate-700 hover:bg-slate-200 transition-all";
        lbl.textContent = "Mode Penjumlahan (Addition: A + B)";
        lbl.className = "text-xl font-bold text-blue-600";
        desc.textContent = "Gerbang XOR menyalurkan B apa adanya (B ⊕ 0 = B) dan Cin awal = 0.";
    } else {
        btnSub.className = "px-5 py-2.5 rounded-lg font-bold text-sm bg-pink-600 text-white shadow-md transition-all";
        btnAdd.className = "px-5 py-2.5 rounded-lg font-bold text-sm bg-white text-slate-700 hover:bg-slate-200 transition-all";
        lbl.textContent = "Mode Pengurangan (Subtraction: A - B)";
        lbl.className = "text-xl font-bold text-pink-600";
        desc.textContent = "Gerbang XOR menginversi B (B ⊕ 1 = B') dan Cin awal = 1, menghasilkan 2's Complement: A + B' + 1 = A - B.";
    }
    calculateW5();
}

function toggleBitW5(arrName, idx) {
    if (arrName === 'A') w5_a[idx] = w5_a[idx] ? 0 : 1;
    else w5_b[idx] = w5_b[idx] ? 0 : 1;
    renderBitsW5();
    calculateW5();
}

function renderBitsW5() {
    const rowA = document.getElementById('row-a');
    const rowB = document.getElementById('row-b');
    if (!rowA || !rowB) return;

    rowA.innerHTML = w5_a.map((bit, idx) => `
        <div class="text-center">
            <span class="text-[10px] text-slate-400 font-mono block mb-1">A${3-idx}</span>
            <button onclick="toggleBitW5('A', ${idx})" class="w-12 h-12 rounded-lg text-lg font-mono font-bold transition-all shadow-sm ${bit ? 'bg-blue-600 text-white shadow-blue-200' : 'bg-slate-100 text-slate-600 border border-slate-300'}">${bit}</button>
        </div>
    `).join('');

    rowB.innerHTML = w5_b.map((bit, idx) => `
        <div class="text-center">
            <span class="text-[10px] text-slate-400 font-mono block mb-1">B${3-idx}</span>
            <button onclick="toggleBitW5('B', ${idx})" class="w-12 h-12 rounded-lg text-lg font-mono font-bold transition-all shadow-sm ${bit ? 'bg-pink-600 text-white shadow-pink-200' : 'bg-slate-100 text-slate-600 border border-slate-300'}">${bit}</button>
        </div>
    `).join('');

    const decA = parseInt(w5_a.join(''), 2);
    const decB = parseInt(w5_b.join(''), 2);
    document.getElementById('dec-a').textContent = `Desimal: ${decA}`;
    document.getElementById('dec-b').textContent = `Desimal: ${decB}`;
}

function calculateW5() {
    const chainEl = document.getElementById('fa-chain');
    if (!chainEl) return;

    let cin = w5_mode; // 0 for Add, 1 for Sub
    let sums = [];
    let carries = [cin];

    // Compute from LSB (index 3) to MSB (index 0)
    for (let i = 3; i >= 0; i--) {
        let ai = w5_a[i];
        let bi_effective = w5_b[i] ^ w5_mode; // XOR with M
        let sum_i = ai ^ bi_effective ^ cin;
        let cout_i = (ai & bi_effective) | (cin & (ai ^ bi_effective));
        sums.unshift(sum_i);
        carries.unshift(cout_i);
        cin = cout_i;
    }

    // Render 4 stages (MSB to LSB: Bit 3 down to Bit 0)
    chainEl.innerHTML = [0, 1, 2, 3].map(pos => {
        let bitIdx = 3 - pos;
        let ai = w5_a[pos];
        let bi_raw = w5_b[pos];
        let bi_eff = bi_raw ^ w5_mode;
        let c_in_stage = carries[pos + 1];
        let s_stage = sums[pos];
        let c_out_stage = carries[pos];

        return `
            <div class="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
                <div class="text-xs font-bold text-slate-500 border-b border-slate-100 pb-1 mb-2">FA ${bitIdx}</div>
                <div class="space-y-1 text-xs text-left mb-3">
                    <div class="flex justify-between"><span>A${bitIdx}:</span> <strong>${ai}</strong></div>
                    <div class="flex justify-between"><span>B${bitIdx}⊕M:</span> <strong class="${w5_mode ? 'text-pink-600' : ''}">${bi_eff}</strong></div>
                    <div class="flex justify-between"><span>Cin:</span> <strong class="text-slate-500">${c_in_stage}</strong></div>
                </div>
                <div class="border-t border-slate-100 pt-2 text-xs">
                    <div class="text-emerald-600 font-bold text-base mb-1">S${bitIdx} = ${s_stage}</div>
                    <div class="text-purple-600 font-mono text-[11px]">Cout = ${c_out_stage}</div>
                </div>
            </div>
        `;
    }).join('');

    const binStr = sums.join('');
    document.getElementById('bin-result').textContent = binStr;
    const finalCout = carries[0];
    const coutBadge = document.getElementById('cout-badge');
    const decResEl = document.getElementById('dec-result');

    const decA = parseInt(w5_a.join(''), 2);
    const decB = parseInt(w5_b.join(''), 2);

    if (w5_mode === 0) {
        coutBadge.textContent = `Cout final = ${finalCout}`;
        coutBadge.className = "text-xs text-purple-700 bg-purple-100 px-2 py-1 rounded font-bold";
        const total = decA + decB;
        decResEl.textContent = `${total} (${decA} + ${decB})`;
    } else {
        coutBadge.textContent = finalCout ? "Cout = 1 (No Borrow)" : "Cout = 0 (Borrow)";
        coutBadge.className = `text-xs px-2 py-1 rounded font-bold ${finalCout ? 'text-emerald-700 bg-emerald-100' : 'text-red-700 bg-red-100'}`;
        const diff = decA - decB;
        decResEl.textContent = `${diff} (${decA} - ${decB})`;
    }
}

function renderModuleQuizW5(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto mt-4 space-y-8 pb-20">
            <div>
                <h1 class="text-3xl font-bold text-slate-900 mb-2">Analisis Performa: RCA vs CLA</h1>
                <p class="text-slate-600 text-sm">Perbandingan antara Ripple Carry Adder (serial) dan Carry Lookahead Adder (paralel) untuk mengatasi keterbatasan propagation delay pada komputasi CPU.</p>
            </div>

            <div class="bg-cyber-800 p-6 rounded-xl border border-slate-300 shadow-md">
                <h3 class="text-xl font-bold text-blue-600 mb-4 border-b border-slate-200 pb-2">Tabel Perbandingan Arsitektur</h3>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left border-collapse border border-slate-200">
                        <thead class="bg-slate-100 text-slate-800 font-bold">
                            <tr>
                                <th class="p-3 border">Aspek</th>
                                <th class="p-3 border text-blue-700">Ripple Carry Adder (RCA)</th>
                                <th class="p-3 border text-emerald-700">Carry Lookahead Adder (CLA)</th>
                            </tr>
                        </thead>
                        <tbody class="text-slate-700">
                            <tr><td class="p-3 border font-semibold">Desain & Struktur</td><td class="p-3 border">Sederhana, berantai serial</td><td class="p-3 border">Kompleks, logika paralel</td></tr>
                            <tr class="bg-slate-50"><td class="p-3 border font-semibold">Propagation Delay</td><td class="p-3 border text-red-600 font-bold">Tinggi (linear O(N))</td><td class="p-3 border text-emerald-600 font-bold">Sangat Rendah (konstan O(1))</td></tr>
                            <tr><td class="p-3 border font-semibold">Kebutuhan Hardware</td><td class="p-3 border">Hemat gerbang logika</td><td class="p-3 border">Banyak gerbang (Generate & Propagate)</td></tr>
                            <tr class="bg-slate-50"><td class="p-3 border font-semibold">Skalabilitas Bit</td><td class="p-3 border">Hanya cocok untuk jumlah bit kecil</td><td class="p-3 border font-bold text-blue-600">Standar prosesor modern (32/64-bit)</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Quiz W5 -->
            <div class="bg-cyber-800 p-6 sm:p-8 rounded-xl border border-cyber-accent/30 shadow-lg relative overflow-hidden">
                <h3 class="text-xl font-bold text-cyber-accent mb-4">Latihan: Hitung Output Full Adder</h3>
                <p class="text-slate-700 mb-6 text-base">Sebuah Full Adder memiliki 3 input biner: <strong class="font-mono bg-white px-2 py-1 rounded border border-slate-300 text-blue-600">A = 1, B = 1, Cin = 1</strong>. Berapakah nilai dari <strong>Sum (S)</strong> dan <strong>Carry-Out (Cout)</strong>?</p>
                <div class="grid sm:grid-cols-2 gap-4 mb-6">
                    <label class="flex items-center gap-3 cursor-pointer p-4 bg-white rounded-lg border border-slate-300 hover:border-cyber-accent transition-colors shadow-sm">
                        <input type="radio" name="q5" value="A" class="form-radio text-cyber-accent w-4 h-4"> <span class="font-mono text-base font-bold">S = 0, Cout = 1</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer p-4 bg-white rounded-lg border border-slate-300 hover:border-cyber-accent transition-colors shadow-sm">
                        <input type="radio" name="q5" value="B" class="form-radio text-cyber-accent w-4 h-4"> <span class="font-mono text-base font-bold text-emerald-600">S = 1, Cout = 1</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer p-4 bg-white rounded-lg border border-slate-300 hover:border-cyber-accent transition-colors shadow-sm">
                        <input type="radio" name="q5" value="C" class="form-radio text-cyber-accent w-4 h-4"> <span class="font-mono text-base font-bold">S = 1, Cout = 0</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer p-4 bg-white rounded-lg border border-slate-300 hover:border-cyber-accent transition-colors shadow-sm">
                        <input type="radio" name="q5" value="D" class="form-radio text-cyber-accent w-4 h-4"> <span class="font-mono text-base font-bold">S = 0, Cout = 0</span>
                    </label>
                </div>
                <button onclick="checkQuizW5()" class="px-6 py-3 bg-cyber-accent text-white rounded-lg transition-colors text-sm font-semibold hover:bg-cyber-glow shadow-md">Cek & Lihat Penjelasan Detail</button>
                <div id="q5-res" class="mt-6"></div>
            </div>
        </div>
    `;
}

window.checkQuizW5 = () => {
    const sel = document.querySelector('input[name="q5"]:checked');
    const res = document.getElementById('q5-res');
    if (!sel) return;

    let explHtml = `
        <div class="mt-6 bg-white p-6 rounded-xl border border-slate-300 text-sm fade-in w-full text-left shadow-inner">
            <h4 class="font-bold text-cyber-accent mb-4 border-b border-slate-300 pb-2 text-lg">Penyelesaian Detail Rumus Full Adder:</h4>
            <div class="space-y-4 text-slate-700 font-mono">
                <div>
                    <span class="text-xs uppercase font-sans font-bold text-slate-500 block">1. Menghitung Sum (S = A ⊕ B ⊕ Cin):</span>
                    <div class="mt-1 bg-slate-50 p-3 rounded border border-slate-200">
                        <div>S = 1 ⊕ 1 ⊕ 1</div>
                        <div>S = (1 ⊕ 1) ⊕ 1 <span class="text-xs text-slate-500 font-sans italic">(Karena 1 ⊕ 1 = 0)</span></div>
                        <div class="text-emerald-600 font-bold text-lg mt-1">S = 0 ⊕ 1 = 1</div>
                    </div>
                </div>
                <div>
                    <span class="text-xs uppercase font-sans font-bold text-slate-500 block">2. Menghitung Carry-Out (Cout = (A . B) + (Cin . (A ⊕ B))):</span>
                    <div class="mt-1 bg-slate-50 p-3 rounded border border-slate-200">
                        <div>Cout = (1 . 1) + (1 . (1 ⊕ 1))</div>
                        <div>Cout = 1 + (1 . 0) = 1 + 0</div>
                        <div class="text-purple-600 font-bold text-lg mt-1">Cout = 1</div>
                    </div>
                </div>
                <div class="border-t border-slate-200 pt-3 text-sm font-sans">
                    <strong>Konfirmasi Aritmetika Biner:</strong> <br>
                    Secara desimal: 1 + 1 + 1 = 3₁₀. Dalam biner, angka 3 ditulis sebagai <strong class="text-blue-600 font-mono text-base bg-blue-50 px-2 py-0.5 rounded">11₂</strong>, di mana digit kiri adalah Cout = 1 dan digit kanan adalah S = 1.
                </div>
            </div>
        </div>
    `;

    if (sel.value === 'B') {
        res.innerHTML = '<div class="text-emerald-600 font-bold fade-in mb-2 text-xl">✅ Jawaban Anda Tepat Sekali!</div>' + explHtml;
    } else {
        res.innerHTML = '<div class="text-red-500 font-bold fade-in mb-2 text-xl">❌ Masih kurang tepat. Mari kita pelajari caranya:</div>' + explHtml;
    }
};
