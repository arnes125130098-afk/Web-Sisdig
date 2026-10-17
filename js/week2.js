// MODULE W2: MINGGU 2 (Bilangan Negatif & Aritmetika)
// -------------------------------------------------------------
function renderModuleTheoryW2(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto mt-4 space-y-8 pb-20">
            <h1 class="text-3xl font-bold text-slate-900 mb-2">Representasi Bilangan Negatif</h1>
            
            <div class="bg-cyber-800/80 p-6 sm:p-8 rounded-xl border border-slate-300 shadow-lg text-slate-700 space-y-6">
                <h3 class="text-xl font-bold text-cyber-glow">3 Skema Representasi Utama (Dalam 8-bit)</h3>
                <p class="text-sm">Untuk menyimpan bilangan negatif, sistem digital menggunakan bit paling kiri (Most Significant Bit / MSB) sebagai penanda tanda (Sign bit). <strong class="text-slate-900">0 = Positif, 1 = Negatif.</strong></p>
                
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="bg-white/50 p-5 rounded-lg border border-slate-300 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
                        <div class="text-emerald-600 font-bold text-lg mb-2">1. Sign-Magnitude</div>
                        <p class="text-sm mb-4">MSB diubah menjadi 1 untuk negatif, 7 bit sisanya dibiarkan murni sebagai nilai absolut.</p>
                        <ul class="text-xs space-y-1 text-slate-600 border-t border-slate-300 pt-3">
                            <li><span class="text-slate-200">Rentang:</span> -127 s.d +127</li>
                            <li><span class="text-slate-200">Kelemahan:</span> Ada representasi +0 dan -0. Desain sirkuit aritmetika menjadi sangat kompleks.</li>
                        </ul>
                    </div>
                    <div class="bg-white/50 p-5 rounded-lg border border-slate-300 relative overflow-hidden group hover:border-purple-500/50 transition-colors">
                        <div class="text-purple-600 font-bold text-lg mb-2">2. 1's Complement</div>
                        <p class="text-sm mb-4">Mendapatkan nilai negatif dengan membalik (NOT) seluruh bit dari nilai positifnya. 0 jadi 1, 1 jadi 0.</p>
                        <ul class="text-xs space-y-1 text-slate-600 border-t border-slate-300 pt-3">
                            <li><span class="text-slate-200">Rentang:</span> -127 s.d +127</li>
                            <li><span class="text-slate-200">Kelemahan:</span> Masih memiliki +0 dan -0. Penjumlahan butuh tahapan End-Around Carry ekstra.</li>
                        </ul>
                    </div>
                    <div class="bg-white/50 p-5 rounded-lg border-2 border-cyber-accent shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                        <div class="text-cyber-glow font-bold text-lg mb-2 flex items-center gap-2">
                            3. 2's Complement
                            <span class="bg-cyber-accent text-cyber-900 text-[9px] px-1.5 py-0.5 rounded font-black uppercase tracking-widest">Standard</span>
                        </div>
                        <p class="text-sm mb-4">Diperoleh dari nilai 1's Complement yang <strong class="text-slate-900">ditambah 1</strong> (NOT + 1).</p>
                        <ul class="text-xs space-y-1 text-slate-900 font-medium border-t border-slate-300 pt-3">
                            <li>Rentang: -128 s.d +127 (Lebih luas 1 angka)</li>
                            <li>Hanya memiliki SATU nilai nol.</li>
                            <li>Sirkuit pengurangan dapat digabung ke sirkuit penjumlahan (A - B = A + (-B)). Sangat efisien!</li>
                        </ul>
                    </div>
                </div>

                <div class="mt-8 border-t border-slate-300 pt-8">
                    <h3 class="text-xl font-bold text-pink-600 mb-4">Rumus Signed Heksadesimal & Oktal</h3>
                    <div class="bg-white p-6 rounded-lg font-mono text-sm border border-slate-300/50">
                        <p class="font-sans text-slate-700 mb-4">Secara hardware, representasi Heksadesimal dan Oktal untuk bilangan negatif adalah pembacaan langsung dari bit murni <strong>2's Complement</strong>-nya.</p>
                        <p class="text-emerald-600 mb-2">Contoh: Mencari Hex dan Octal dari <strong class="text-slate-900">-37</strong> (8-bit)</p>
                        <div class="space-y-1 ml-4 border-l-2 border-slate-300 pl-4 mb-4 text-slate-700">
                            <div>1. Absolut(37) = <span class="text-slate-600">00100101</span></div>
                            <div>2. NOT (C1)   = <span class="text-purple-300">11011010</span></div>
                            <div>3. Plus 1 (C2)= <span class="text-cyber-glow font-bold">11011011</span></div>
                        </div>
                        
                        <div class="text-slate-600 mb-2 border-t border-slate-300/50 pt-4">// Pengelompokan langsung dari 2's Complement:</div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="bg-cyber-800 p-3 rounded">
                                <div class="text-xs text-pink-500 mb-1">HEX (4-bit chunks)</div>
                                <div><span class="text-cyber-glow">1101</span> <span class="text-cyber-glow">1011</span> ➔ <span class="text-pink-600 font-bold text-lg">0xDB</span></div>
                            </div>
                            <div class="bg-cyber-800 p-3 rounded">
                                <div class="text-xs text-orange-500 mb-1">OCTAL (3-bit chunks)</div>
                                <div><span class="text-slate-600 text-[10px]">0</span><span class="text-cyber-glow">11</span> <span class="text-cyber-glow">011</span> <span class="text-cyber-glow">011</span> ➔ <span class="text-orange-600 font-bold text-lg">0o333</span></div>
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
            <div class="flex flex-col md:flex-row md:items-center gap-4 mb-6 p-4 bg-cyber-800/50 rounded-xl border border-slate-300/50">
                <div class="p-3 bg-cyber-accent/10 rounded-lg text-cyber-accent shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                    <h1 class="text-xl font-bold text-slate-900 mb-1">Simulator 8-bit Signed (C2 Converter)</h1>
                    <p class="text-sm text-slate-600">Ketik bilangan desimal dari rentang <strong>-128 hingga 127</strong> untuk melihat representasi Biner Negatif, Hex, dan Oktalnya secara real-time.</p>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div class="lg:col-span-4 bg-cyber-800 p-6 rounded-xl border border-slate-300 h-fit">
                    <label class="block text-sm font-medium text-slate-700 mb-2">Desimal (+ / -)</label>
                    <input type="number" id="sim-dec" class="cyber-input w-full p-4 rounded-lg text-3xl font-bold text-center" placeholder="-58" autocomplete="off" min="-128" max="127">
                    <div id="sim-err" class="text-red-600 text-xs mt-2 hidden text-center bg-red-500/10 py-1 rounded">Nilai 8-bit harus -128 s.d 127</div>
                    
                    <div class="mt-8 space-y-4">
                        <h3 class="text-slate-600 text-xs font-semibold border-b border-slate-300 pb-2 uppercase tracking-wide">Output (Berdasarkan C2)</h3>
                        <div class="grid grid-cols-2 gap-3">
                            <div class="bg-white/80 p-3 rounded-lg border border-pink-500/30 text-center">
                                <div class="text-[10px] text-pink-600 font-bold mb-1">SIGNED HEX</div>
                                <div id="sim-out-hex" class="text-xl text-slate-900 font-mono uppercase">-</div>
                            </div>
                            <div class="bg-white/80 p-3 rounded-lg border border-orange-500/30 text-center">
                                <div class="text-[10px] text-orange-600 font-bold mb-1">SIGNED OCTAL</div>
                                <div id="sim-out-oct" class="text-xl text-slate-900 font-mono">-</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-8 bg-cyber-800 rounded-xl border border-slate-300 flex flex-col overflow-hidden min-h-[400px]">
                    <div class="p-4 border-b border-slate-300 bg-white/80 flex items-center justify-between">
                        <h3 class="font-semibold text-slate-900 flex items-center gap-2">Breakdown Proses & Perbandingan</h3>
                    </div>
                    <div class="p-6 flex-1 space-y-6 bg-white/30" id="sim-visual">
                        <div class="h-full flex flex-col items-center justify-center text-slate-600 opacity-50">
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
            vis.innerHTML = `<div class="h-full flex flex-col items-center justify-center text-slate-600 opacity-50">Menunggu input bilangan...</div>`;
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
                    <svg class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <div>
                        <h4 class="text-emerald-600 font-bold mb-1">Bilangan Positif Terdeteksi</h4>
                        <p class="text-sm text-slate-700">Bilangan positif direpresentasikan secara langsung dalam biner absolut murni.</p>
                    </div>
                </div>
                <div class="bg-white/80 p-6 rounded-lg border border-cyber-accent shadow-[0_0_20px_rgba(6,182,212,0.15)] flex flex-col items-center justify-center mt-6">
                    <span class="text-slate-600 text-sm mb-2">Representasi 8-bit Final:</span>
                    <div class="flex items-center gap-1 font-mono text-3xl font-black">
                        <span class="text-emerald-600 bg-emerald-400/10 px-2 py-1 rounded" title="Sign Bit (0 = Positif)">${c2Bin[0]}</span>
                        <span class="text-cyber-glow bg-cyber-700/50 px-2 py-1 rounded tracking-[0.1em]">${c2Bin.substring(1)}</span>
                    </div>
                </div>
            `;
        } else {
            let sm = '1' + binAbs.substring(1); 
            html += `
                <div class="text-pink-600 text-sm font-bold flex items-center gap-2 mb-4 border-b border-slate-300 pb-2">
                    Langkah Konversi 2's Complement
                </div>
                <div class="space-y-4 font-mono text-base">
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-lg bg-white border border-slate-300">
                        <span class="text-slate-600 text-sm mb-1 sm:mb-0">1. Biner Absolut (|${val}|):</span>
                        <span class="text-emerald-300 tracking-[0.3em] font-bold text-lg">${binAbs}</span>
                    </div>
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-lg bg-white border border-slate-300 relative group">
                        <span class="text-slate-600 text-sm mb-1 sm:mb-0">2. Invert Bits (1's Comp):</span>
                        <span class="text-purple-300 tracking-[0.3em] font-bold text-lg group-hover:text-purple-600 transition-colors">${c1}</span>
                    </div>
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 rounded-lg bg-cyber-800 border-2 border-cyber-accent shadow-[0_0_15px_rgba(6,182,212,0.2)] relative transform scale-[1.02]">
                        <span class="text-slate-900 font-bold text-sm mb-1 sm:mb-0">3. 2's Complement Final:</span>
                        <div class="flex gap-1">
                            <span class="text-pink-600 font-bold text-xl bg-pink-500/10 px-1.5 py-0.5 rounded" title="Sign Bit (1 = Negatif)">${c2Bin[0]}</span>
                            <span class="text-cyber-glow tracking-[0.3em] font-bold text-xl bg-white/50 px-2 py-0.5 rounded">${c2Bin.substring(1)}</span>
                        </div>
                    </div>
                </div>
                <div class="mt-8 space-y-3">
                    <h4 class="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-2 border-t border-slate-300 pt-6">Tabel Perbandingan 8-Bit</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <div class="bg-white p-3 rounded-lg border border-slate-300/80 hover:border-slate-500 transition-colors">
                            <div class="text-slate-600 text-xs mb-1 font-sans">Sign-Magnitude</div>
                            <div class="text-slate-900 font-mono tracking-widest font-semibold">${sm.substring(0,4)} ${sm.substring(4)}</div>
                        </div>
                        <div class="bg-white p-3 rounded-lg border border-slate-300/80 hover:border-purple-500/50 transition-colors">
                            <div class="text-purple-600 text-xs mb-1 font-sans">1's Complement</div>
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
            <h1 class="text-3xl font-bold text-slate-900 mb-2">Aritmetika & Deteksi Overflow</h1>
            <div class="bg-cyber-800/80 p-6 sm:p-8 rounded-xl border border-slate-300 shadow-lg text-slate-700 space-y-6">
                <section class="space-y-3">
                    <h3 class="text-xl font-bold text-cyber-glow flex items-center gap-2">Pengurangan melalui Penjumlahan (A - B)</h3>
                    <p class="text-sm leading-relaxed">Dalam sistem digital, ALU tidak memerlukan subtractor khusus. Operasi <span class="font-mono text-pink-600 bg-pink-500/10 px-1 rounded">A - B</span> cukup dieksekusi dengan merubah B menjadi negatif lalu dijumlahkan: <span class="font-mono text-emerald-600 bg-emerald-500/10 px-1 rounded">A + (-B)</span>.</p>
                </section>
                <div class="grid md:grid-cols-2 gap-6 items-stretch">
                    <div class="bg-white p-5 rounded-lg border border-slate-300 font-mono text-sm shadow-inner relative">
                        <div class="text-slate-600 mb-3 border-b border-slate-300 pb-2 font-sans font-bold text-slate-900">Hitung: 75 - 103 (8-bit)</div>
                        <div class="flex justify-between text-slate-700 mb-1"><span>A = 75</span> <span class="tracking-widest text-emerald-300">01001011</span></div>
                        <div class="flex justify-between text-slate-700 mb-2"><span>B = 103</span> <span class="tracking-widest text-slate-600">01100111</span></div>
                        <div class="flex justify-between text-cyber-glow mb-2"><span>-B = -103</span> <span class="tracking-widest font-bold text-pink-600">10011001</span></div>
                        <div class="border-b-2 border-dashed border-cyber-600 my-3"></div>
                        <div class="flex justify-between text-slate-900 font-bold bg-cyber-700/50 p-2 rounded">
                            <span>A + (-B) = -28</span> <span class="tracking-widest text-emerald-600">11100100</span>
                        </div>
                    </div>
                    <div class="bg-white p-5 rounded-lg border border-slate-300 shadow-inner flex flex-col justify-between">
                        <div>
                            <h4 class="font-bold text-slate-900 mb-2 font-sans flex items-center gap-2">Deteksi Overflow (C2)</h4>
                            <p class="text-xs text-slate-600 leading-relaxed mb-4 font-sans">Overflow terjadi jika penjumlahan dua bilangan bertanda sama menghasilkan tanda yang berlawanan.</p>
                        </div>
                        <div class="bg-pink-500/10 p-4 rounded-lg border border-pink-500/30">
                            <code class="text-sm text-slate-900 block mb-1">OVF = C<sub>in</sub> ⊕ C<sub>out</sub></code>
                            <p class="text-[10px] text-slate-600 font-sans">Jika Carry-In ke MSB berbeda dengan Carry-Out dari MSB, maka hasilnya 1 (Overflow).</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="bg-cyber-800 p-6 sm:p-8 rounded-xl border border-cyber-accent/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                <h3 class="text-xl font-bold text-slate-900 mb-6">Interactive Quiz</h3>
                <div class="space-y-6" id="quiz-container">
                    <div class="bg-white/60 p-5 rounded-lg border border-slate-300/50">
                        <p class="text-slate-700 mb-4 text-sm">1. Konversikan biner 2's complement <strong class="text-cyber-glow font-mono bg-white px-1 rounded">10111111</strong> ke Desimal.</p>
                        <div class="flex flex-wrap items-center gap-3">
                            <input type="number" id="q2-inp" class="cyber-input p-2.5 rounded-lg w-32 text-center font-bold" placeholder="Misal: 99">
                            <button onclick="checkQuizW2()" class="px-5 py-2.5 bg-cyber-700 hover:bg-cyber-600 text-white rounded-lg transition-colors text-sm font-semibold">Cek & Lihat Penyelesaian</button>
                            <span id="q2-res" class="font-bold text-sm w-full sm:w-auto mt-2 sm:mt-0"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initOverflowQuizW2() {
    window.checkQuizW2 = () => {
        const inp = document.getElementById('q2-inp').value;
        const res = document.getElementById('q2-res');
        if (!inp) return;
        
        let explHtml = `
            <div class="mt-6 bg-white p-6 rounded-xl border border-slate-300 text-sm fade-in w-full text-left shadow-inner">
                <h4 class="font-bold text-cyber-accent mb-4 border-b border-slate-300 pb-2 text-lg">Penyelesaian Detail 2's Complement:</h4>
                <p class="text-slate-600 mb-4">Nilai biner <code class="bg-cyber-800 px-2 py-1 rounded text-pink-600 border border-slate-300 shadow-sm font-mono">10111111</code> memiliki bit paling kiri (MSB) bernilai <strong>1</strong>. Artinya ini bilangan <strong class="text-red-500">Negatif</strong>.</p>
                <ol class="list-decimal pl-5 space-y-4 text-slate-700 font-mono">
                    <li><span class="text-slate-600 text-xs uppercase tracking-wider block mb-1">Data awal:</span> <span class="font-bold text-lg">10111111</span></li>
                    <li><span class="text-slate-600 text-xs uppercase tracking-wider block mb-1">Langkah 1 (Invert bit / NOT):</span> <span class="text-purple-600 font-bold text-lg">01000000</span> <span class="text-slate-600 text-xs ml-2">(Nilai absolut: 64 desimal)</span></li>
                    <li><span class="text-slate-600 text-xs uppercase tracking-wider block mb-1">Langkah 2 (Tambahkan 1 ke LSB):</span> <span class="text-emerald-600 font-bold text-lg">01000001</span> <span class="text-slate-600 text-xs ml-2">(64 + 1 = 65)</span></li>
                    <li><span class="text-slate-600 text-xs uppercase tracking-wider block mb-1">Hasil Akhir:</span> Karena MSB asli negatif, maka nilainya: <strong class="text-2xl text-cyber-glow bg-cyber-800 px-3 py-1 rounded">-65</strong>.</li>
                </ol>
                <p class="mt-6 pt-4 border-t border-slate-300 text-sm text-slate-600 italic"><strong>Cara Alternatif (Bobot MSB Negatif):</strong> <br>-128 + 32 + 16 + 8 + 4 + 2 + 1 = -65</p>
            </div>
        `;
        
        if(inp == '-65') {
            res.innerHTML = '<div class="text-emerald-600 font-bold fade-in mb-2 text-xl">✅ Tepat Sekali!</div>' + explHtml;
        } else {
            res.innerHTML = '<div class="text-red-500 font-bold fade-in mb-2 text-xl">❌ Masih keliru. Berikut langkah penyelesaian benarnya:</div>' + explHtml;
        }
    };
}


// -------------------------------------------------------------
