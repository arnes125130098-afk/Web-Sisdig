function renderModuleTheoryW7(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto mt-4 space-y-8 pb-20">
            <div>
                <h1 class="text-3xl font-bold text-slate-900 mb-2">Decoder & Aplikasi Sistem Digital</h1>
                <p class="text-slate-600 text-sm">Decoder adalah rangkaian logika kombinasi yang mengubah kode biner n-bit menjadi satu output aktif tunggal dari 2^n kemungkinan jalur output.</p>
            </div>

            <!-- Decoder Basics & IC 74138 -->
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-cyber-800 p-6 rounded-xl border border-slate-300 shadow-md space-y-4">
                    <h3 class="text-lg font-bold text-blue-600 border-b border-slate-200 pb-2">Karakteristik Decoder</h3>
                    <ul class="text-xs text-slate-700 space-y-2 list-disc pl-4 leading-relaxed font-sans">
                        <li><strong>Input n-bit:</strong> Menghasilkan 2^n output (misal 2-to-4, 3-to-8).</li>
                        <li><strong>Hanya 1 output aktif</strong> pada satu kombinasi input tertentu.</li>
                        <li><strong>Enable Pin (En):</strong> Sinyal pengaktif seluruh IC decoder. Jika En tidak aktif, seluruh output dinonaktifkan terlepas dari nilai input.</li>
                        <li><strong>IC 74138:</strong> Standar industri untuk 3-to-8 line decoder dengan output active-low.</li>
                    </ul>
                </div>

                <div class="bg-cyber-800 p-6 rounded-xl border border-slate-300 shadow-md space-y-4">
                    <h3 class="text-lg font-bold text-emerald-600 border-b border-slate-200 pb-2">Aplikasi Utama Decoder</h3>
                    <div class="space-y-3 font-sans text-xs text-slate-700">
                        <div class="p-2.5 bg-slate-50 rounded border border-slate-200">
                            <strong class="text-slate-900 block mb-0.5">1. Memory Addressing (CPU):</strong>
                            Alamat 3-bit (A2 A1 A0) memilih salah satu dari 8 blok RAM yang aktif (misal 101 memilih blok RAM 5).
                        </div>
                        <div class="p-2.5 bg-slate-50 rounded border border-slate-200">
                            <strong class="text-slate-900 block mb-0.5">2. Kunci Digital / Keamanan:</strong>
                            Hanya kombinasi biner rahasia tertentu yang membangkitkan sinyal aktif untuk memicu relay kunci.
                        </div>
                        <div class="p-2.5 bg-slate-50 rounded border border-slate-200">
                            <strong class="text-slate-900 block mb-0.5">3. Peripheral Enable:</strong>
                            Mikrokontroler menentukan port I/O mana yang aktif (ADC, UART, Timer).
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderModuleEncoderW7(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto mt-4 space-y-8 pb-20">
            <div>
                <h1 class="text-3xl font-bold text-slate-900 mb-2">Encoder & Priority Encoder</h1>
                <p class="text-slate-600 text-sm">Kebalikan dari decoder: menerima 2^n sinyal input dan mengompresnya menjadi kode biner n-bit.</p>
            </div>

            <!-- Comparison Table -->
            <div class="bg-cyber-800 p-6 rounded-xl border border-slate-300 shadow-md">
                <h3 class="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">Perbandingan Decoder vs Encoder</h3>
                <div class="overflow-x-auto">
                    <table class="w-full text-xs text-left border-collapse border border-slate-200">
                        <thead class="bg-slate-100 font-bold text-slate-800">
                            <tr>
                                <th class="p-2.5 border">Aspek</th>
                                <th class="p-2.5 border text-blue-700">Decoder</th>
                                <th class="p-2.5 border text-pink-700">Encoder</th>
                            </tr>
                        </thead>
                        <tbody class="text-slate-700">
                            <tr><td class="p-2.5 border font-semibold">Arah Fungsi</td><td class="p-2.5 border">Biner ➔ Aktivasi Jalur Tunggal</td><td class="p-2.5 border">Aktivasi Jalur Tunggal ➔ Biner</td></tr>
                            <tr class="bg-slate-50"><td class="p-2.5 border font-semibold">Jumlah Jalur</td><td class="p-2.5 border">n bit input ➔ 2^n output</td><td class="p-2.5 border">2^n input ➔ n bit output</td></tr>
                            <tr><td class="p-2.5 border font-semibold">IC Standar</td><td class="p-2.5 border font-mono">74LS138 (3-to-8)</td><td class="p-2.5 border font-mono">74LS148 (Priority 8-to-3)</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Priority Encoder Feature -->
            <div class="bg-cyber-800 p-6 rounded-xl border border-slate-300 shadow-md space-y-3">
                <h3 class="text-lg font-bold text-pink-600 border-b border-slate-200 pb-2">Konsep Priority Encoder</h3>
                <p class="text-xs text-slate-700 leading-relaxed font-sans">Jika lebih dari satu sinyal input aktif secara bersamaan, encoder biasa akan menghasilkan data yang kacau. <strong>Priority Encoder</strong> menyelesaikan masalah ini dengan memprioritaskan input dengan bobot indeks tertinggi (misal jika D7 dan D3 aktif bersamaan, output yang dihasilkan tetap 111 dari D7).</p>
                <div class="bg-slate-50 p-3 rounded border border-slate-200 text-xs font-mono text-slate-700">
                    Aplikasi Umum: <strong>Matrix Keyboard / Keypad Scanner</strong> pada kalkulator & komputer.
                </div>
            </div>
        </div>
    `;
}

function renderModuleSimulatorW7(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto space-y-8 pb-20">
            <div>
                <h1 class="text-2xl font-bold text-slate-900 mb-2">Simulator Interaktif BCD ke 7-Segment Display</h1>
                <p class="text-slate-600 text-sm">Menampilkan visualisasi 7 LED segmen (a, b, c, d, e, f, g) yang dikendalikan oleh kode 4-Bit BCD (8421) atau Heksadesimal.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-8 items-start">
                <!-- 7-Segment Visualizer Display -->
                <div class="bg-cyber-800 p-8 rounded-xl border border-slate-300 shadow-lg flex flex-col items-center">
                    <span class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Display 7-Segment (Common Cathode)</span>
                    
                    <div class="relative w-40 h-64 select-none my-2">
                        <!-- Segment a (top) -->
                        <div id="seg-a" class="absolute top-0 left-6 w-28 h-5 rounded-sm transition-all duration-300 bg-slate-200"></div>
                        <!-- Segment b (top-right) -->
                        <div id="seg-b" class="absolute top-4 right-1 w-5 h-24 rounded-sm transition-all duration-300 bg-slate-200"></div>
                        <!-- Segment c (bottom-right) -->
                        <div id="seg-c" class="absolute bottom-4 right-1 w-5 h-24 rounded-sm transition-all duration-300 bg-slate-200"></div>
                        <!-- Segment d (bottom) -->
                        <div id="seg-d" class="absolute bottom-0 left-6 w-28 h-5 rounded-sm transition-all duration-300 bg-slate-200"></div>
                        <!-- Segment e (bottom-left) -->
                        <div id="seg-e" class="absolute bottom-4 left-1 w-5 h-24 rounded-sm transition-all duration-300 bg-slate-200"></div>
                        <!-- Segment f (top-left) -->
                        <div id="seg-f" class="absolute top-4 left-1 w-5 h-24 rounded-sm transition-all duration-300 bg-slate-200"></div>
                        <!-- Segment g (middle) -->
                        <div id="seg-g" class="absolute top-28 left-6 w-28 h-5 rounded-sm transition-all duration-300 bg-slate-200"></div>
                        <!-- Decimal Point dp -->
                        <div id="seg-dp" class="absolute bottom-0 -right-6 w-5 h-5 rounded-full transition-all duration-300 bg-slate-200"></div>
                    </div>

                    <div class="mt-8 grid grid-cols-7 gap-1 font-mono text-center text-xs w-full max-w-sm">
                        <div class="p-1 rounded bg-slate-100 border"><span class="block text-slate-400">a</span><strong id="val-a">1</strong></div>
                        <div class="p-1 rounded bg-slate-100 border"><span class="block text-slate-400">b</span><strong id="val-b">1</strong></div>
                        <div class="p-1 rounded bg-slate-100 border"><span class="block text-slate-400">c</span><strong id="val-c">1</strong></div>
                        <div class="p-1 rounded bg-slate-100 border"><span class="block text-slate-400">d</span><strong id="val-d">1</strong></div>
                        <div class="p-1 rounded bg-slate-100 border"><span class="block text-slate-400">e</span><strong id="val-e">1</strong></div>
                        <div class="p-1 rounded bg-slate-100 border"><span class="block text-slate-400">f</span><strong id="val-f">1</strong></div>
                        <div class="p-1 rounded bg-slate-100 border"><span class="block text-slate-400">g</span><strong id="val-g">0</strong></div>
                    </div>
                </div>

                <!-- Digit Picker & BCD Inputs -->
                <div class="bg-cyber-800 p-6 rounded-xl border border-slate-300 shadow-lg space-y-6">
                    <div>
                        <h4 class="font-bold text-slate-800 border-b border-slate-200 pb-2 mb-3">Pilih Karakter Tampilan (0-9, A-F)</h4>
                        <div class="grid grid-cols-4 sm:grid-cols-8 gap-2" id="digit-buttons">
                            <!-- Buttons rendered by JS -->
                        </div>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3 font-mono">
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-slate-600 font-sans">Karakter Terpilih:</span>
                            <span id="lbl-char" class="text-2xl font-bold text-blue-600">0</span>
                        </div>
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-slate-600 font-sans">Representasi 4-Bit (A B C D):</span>
                            <span id="lbl-bin" class="text-xl font-bold text-emerald-600 tracking-widest">0000</span>
                        </div>
                    </div>

                    <div class="text-xs text-slate-600 leading-relaxed font-sans bg-blue-50/50 p-4 rounded-xl border border-blue-200">
                        <strong>Perbedaan Tipe Display:</strong>
                        <ul class="list-disc pl-4 mt-1 space-y-1">
                            <li><strong>Common Cathode (CC):</strong> Katoda digabung ke Ground (0V). Segmen menyala pada logika <strong>HIGH (1)</strong>.</li>
                            <li><strong>Common Anode (CA):</strong> Anoda digabung ke Vcc (+5V). Segmen menyala pada logika <strong>LOW (0)</strong>.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 7-segment segment table for 0-F (a, b, c, d, e, f, g)
const segTable = {
    0: [1, 1, 1, 1, 1, 1, 0],
    1: [0, 1, 1, 0, 0, 0, 0],
    2: [1, 1, 0, 1, 1, 0, 1],
    3: [1, 1, 1, 1, 0, 0, 1],
    4: [0, 1, 1, 0, 0, 1, 1],
    5: [1, 0, 1, 1, 0, 1, 1],
    6: [1, 0, 1, 1, 1, 1, 1],
    7: [1, 1, 1, 0, 0, 0, 0],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 1],
    10: [1, 1, 1, 0, 1, 1, 1], // A
    11: [0, 0, 1, 1, 1, 1, 1], // b
    12: [1, 0, 0, 1, 1, 1, 0], // C
    13: [0, 1, 1, 1, 1, 0, 1], // d
    14: [1, 0, 0, 1, 1, 1, 1], // E
    15: [1, 0, 0, 0, 1, 1, 1]  // F
};

let currentDigit = 0;

function initSimulatorW7() {
    renderDigitButtons();
    setSevenSegment(0);
}

function renderDigitButtons() {
    const cont = document.getElementById('digit-buttons');
    if (!cont) return;
    const chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    cont.innerHTML = chars.map((char, idx) => `
        <button onclick="setSevenSegment(${idx})" class="p-2.5 rounded-lg font-mono font-bold text-sm transition-all ${idx === currentDigit ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'}">${char}</button>
    `).join('');
}

function setSevenSegment(num) {
    currentDigit = num;
    renderDigitButtons();

    const segs = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const activeBits = segTable[num];

    segs.forEach((seg, idx) => {
        const el = document.getElementById('seg-' + seg);
        const valEl = document.getElementById('val-' + seg);
        const isOn = activeBits[idx];
        if (el) {
            el.className = `transition-all duration-200 ${seg === 'a' || seg === 'd' || seg === 'g' ? 'w-28 h-5' : 'w-5 h-24'} rounded-sm ${isOn ? 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]' : 'bg-slate-200'}`;
            if (seg === 'a') el.classList.add('absolute', 'top-0', 'left-6');
            else if (seg === 'b') el.classList.add('absolute', 'top-4', 'right-1');
            else if (seg === 'c') el.classList.add('absolute', 'bottom-4', 'right-1');
            else if (seg === 'd') el.classList.add('absolute', 'bottom-0', 'left-6');
            else if (seg === 'e') el.classList.add('absolute', 'bottom-4', 'left-1');
            else if (seg === 'f') el.classList.add('absolute', 'top-4', 'left-1');
            else if (seg === 'g') el.classList.add('absolute', 'top-28', 'left-6');
        }
        if (valEl) {
            valEl.textContent = isOn;
            valEl.className = isOn ? 'text-red-600 font-bold' : 'text-slate-400';
        }
    });

    const chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    const lblChar = document.getElementById('lbl-char');
    const lblBin = document.getElementById('lbl-bin');
    if (lblChar) lblChar.textContent = chars[num];
    if (lblBin) lblBin.textContent = num.toString(2).padStart(4, '0');
}

function renderModuleQuizW7(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto mt-4 space-y-8 pb-20">
            <div>
                <h1 class="text-3xl font-bold text-slate-900 mb-2">Kuis Decoder & 7-Segment</h1>
                <p class="text-slate-600 text-sm">Evaluasi pemahaman Anda terkait pengalamatan decoder dan pemetaan segmen tampilan.</p>
            </div>

            <!-- Quiz W7 -->
            <div class="bg-cyber-800 p-6 sm:p-8 rounded-xl border border-cyber-accent/30 shadow-lg relative overflow-hidden">
                <h3 class="text-xl font-bold text-cyber-accent mb-4">Latihan: Address Decoder 3-to-8</h3>
                <p class="text-slate-700 mb-6 text-base">Sebuah CPU mengirimkan alamat 3-bit <strong class="font-mono bg-white px-2 py-1 rounded border border-slate-300 text-blue-600">A2 A1 A0 = 1 0 1</strong> ke sebuah Address Decoder 3-to-8 (Active-High). Jalur output mana yang akan aktif untuk memilih blok memori?</p>
                <div class="grid sm:grid-cols-2 gap-4 mb-6">
                    <label class="flex items-center gap-3 cursor-pointer p-4 bg-white rounded-lg border border-slate-300 hover:border-cyber-accent transition-colors shadow-sm">
                        <input type="radio" name="q7" value="A" class="form-radio text-cyber-accent w-4 h-4"> <span class="font-mono text-base font-bold">Jalur Y3 (Blok Memori 3)</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer p-4 bg-white rounded-lg border border-slate-300 hover:border-cyber-accent transition-colors shadow-sm">
                        <input type="radio" name="q7" value="B" class="form-radio text-cyber-accent w-4 h-4"> <span class="font-mono text-base font-bold text-emerald-600">Jalur Y5 (Blok Memori 5)</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer p-4 bg-white rounded-lg border border-slate-300 hover:border-cyber-accent transition-colors shadow-sm">
                        <input type="radio" name="q7" value="C" class="form-radio text-cyber-accent w-4 h-4"> <span class="font-mono text-base font-bold">Jalur Y6 (Blok Memori 6)</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer p-4 bg-white rounded-lg border border-slate-300 hover:border-cyber-accent transition-colors shadow-sm">
                        <input type="radio" name="q7" value="D" class="form-radio text-cyber-accent w-4 h-4"> <span class="font-mono text-base font-bold">Semua Jalur Y0-Y7 Aktif</span>
                    </label>
                </div>
                <button onclick="checkQuizW7()" class="px-6 py-3 bg-cyber-accent text-white rounded-lg transition-colors text-sm font-semibold hover:bg-cyber-glow shadow-md">Cek & Lihat Penjelasan Detail</button>
                <div id="q7-res" class="mt-6"></div>
            </div>
        </div>
    `;
}

window.checkQuizW7 = () => {
    const sel = document.querySelector('input[name="q7"]:checked');
    const res = document.getElementById('q7-res');
    if (!sel) return;

    let explHtml = `
        <div class="mt-6 bg-white p-6 rounded-xl border border-slate-300 text-sm fade-in w-full text-left shadow-inner">
            <h4 class="font-bold text-cyber-accent mb-4 border-b border-slate-300 pb-2 text-lg">Penyelesaian Detail Address Decoding:</h4>
            <div class="space-y-4 text-slate-700 font-mono">
                <div>
                    <span class="text-xs uppercase font-sans font-bold text-slate-500 block">1. Menghitung Desimal dari Input Biner:</span>
                    <div class="mt-1 bg-slate-50 p-3 rounded border border-slate-200">
                        Input Alamat: (A2, A1, A0) = (1, 0, 1)₂<br>
                        = (1 × 2²) + (0 × 2¹) + (1 × 2⁰)<br>
                        = 4 + 0 + 1 = <strong class="text-blue-600 text-lg">5₁₀</strong>
                    </div>
                </div>
                <div>
                    <span class="text-xs uppercase font-sans font-bold text-slate-500 block">2. Logika Output Decoder 3-to-8:</span>
                    <div class="mt-1 bg-slate-50 p-3 rounded border border-slate-200">
                        Persamaan logika untuk output ke-5 adalah: <strong>Y5 = A2 . A1' . A0</strong>.<br>
                        Karena A2=1, A1=0 (sehingga A1'=1), dan A0=1, maka:<br>
                        Y5 = 1 . 1 . 1 = <strong class="text-emerald-600 text-lg">1 (Aktif)</strong>.<br>
                        Output lainnya (Y0, Y1, Y2, Y3, Y4, Y6, Y7) bernilai 0.
                    </div>
                </div>
                <div class="border-t border-slate-200 pt-3 text-sm font-sans">
                    <strong>Aplikasi pada Memori:</strong> Sinyal Y5 akan mengaktifkan <em>Chip Select</em> (CS) pada <strong>Blok Memori 5</strong>, sehingga data pada alamat tersebut dapat dibaca atau ditulis oleh prosesor.
                </div>
            </div>
        </div>
    `;

    if (sel.value === 'B') {
        res.innerHTML = '<div class="text-emerald-600 font-bold fade-in mb-2 text-xl">✅ Hebat! Analisis Anda Sangat Tepat!</div>' + explHtml;
    } else {
        res.innerHTML = '<div class="text-red-500 font-bold fade-in mb-2 text-xl">❌ Masih kurang tepat. Simak penjelasan rincinya di bawah ini:</div>' + explHtml;
    }
};
