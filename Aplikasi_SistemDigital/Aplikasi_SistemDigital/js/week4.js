
function renderModuleTheoryW4(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto mt-4 space-y-8 pb-20">
            <h1 class="text-3xl font-bold text-white mb-2">Penyederhanaan dengan Karnaugh-Map</h1>
            <div class="bg-cyber-800/80 p-6 rounded-xl border border-cyber-700 shadow-lg text-slate-300 space-y-6">
                <p>K-Map adalah metode grafis cepat untuk menyederhanakan ekspresi Boolean tanpa harus menghafal panjang lebar hukum aljabar. K-Map disusun berdasarkan urutan <strong>Kode Gray</strong>, di mana kotak yang bersebelahan hanya berbeda tepat 1 variabel.</p>
                
                <h3 class="text-xl font-bold text-cyber-glow mt-6">Aturan Pengelompokan (Grouping)</h3>
                <ul class="list-disc pl-5 space-y-2 text-sm bg-cyber-900/50 p-4 rounded border border-cyber-700">
                    <li>Kelompokkan sel yang bernilai <strong class="text-emerald-400">1</strong> (untuk SOP).</li>
                    <li>Jumlah anggota kelompok harus <strong>kelipatan pangkat 2</strong> (1, 2, 4, 8, 16).</li>
                    <li>Kelompok boleh berbentuk persegi panjang atau persegi (1x2, 2x2, 2x4, dst). Dilarang menyilang/diagonal.</li>
                    <li><strong>Wrap-around:</strong> Sisi kiri menyambung dengan sisi kanan, sisi atas menyambung dengan sisi bawah (K-Map layaknya donat/silinder).</li>
                    <li>Buat kelompok <strong>sebesar mungkin</strong> untuk mendapatkan ekspresi paling sederhana.</li>
                    <li><strong>Don't Care (X):</strong> Kondisi input yang tidak akan pernah terjadi (atau output tidak relevan). Dapat diabaikan (dianggap 0) atau digabungkan ke kelompok (dianggap 1) jika menguntungkan untuk membuat kelompok lebih besar.</li>
                </ul>
            </div>
        </div>
    `;
}

function renderModuleSimulatorW4(container) {
    container.innerHTML = `
        <div class="fade-in max-w-5xl mx-auto space-y-6 pb-20">
            <h1 class="text-2xl font-bold text-white mb-2">Interactive Visualizer K-Map 2 & 3 Variabel</h1>
            <p class="text-sm text-slate-400 mb-6">Klik pada kotak K-Map di bawah ini untuk mengubah nilai (0/1). Sistem otomatis mendeteksi grup dan meminimumkan fungsinya secara heuristik.</p>
            
            <div class="grid md:grid-cols-2 gap-8">
                <!-- 2 Var K-Map -->
                <div class="bg-cyber-800 p-6 rounded-xl border border-cyber-700 shadow-lg relative">
                    <h3 class="text-lg font-bold text-emerald-400 mb-6 flex justify-between">K-Map 2 Variabel (A, B)</h3>
                    <div class="relative w-48 mx-auto mt-4">
                        <div class="absolute -top-6 left-12 text-slate-400 font-bold">B</div>
                        <div class="absolute top-12 -left-6 text-slate-400 font-bold">A</div>
                        <div class="grid grid-cols-2 gap-1 bg-cyber-700 p-1 rounded shadow-inner">
                            <button id="k2-00" class="k2-cell w-20 h-20 bg-cyber-900 hover:bg-cyber-800 text-2xl font-bold text-slate-600 transition-colors focus:outline-none" data-idx="0">0</button>
                            <button id="k2-01" class="k2-cell w-20 h-20 bg-cyber-900 hover:bg-cyber-800 text-2xl font-bold text-slate-600 transition-colors focus:outline-none" data-idx="1">0</button>
                            <button id="k2-10" class="k2-cell w-20 h-20 bg-cyber-900 hover:bg-cyber-800 text-2xl font-bold text-slate-600 transition-colors focus:outline-none" data-idx="2">0</button>
                            <button id="k2-11" class="k2-cell w-20 h-20 bg-cyber-900 hover:bg-cyber-800 text-2xl font-bold text-slate-600 transition-colors focus:outline-none" data-idx="3">0</button>
                        </div>
                        <div class="flex justify-between text-xs text-slate-500 mt-1 px-4"><span>0</span><span>1</span></div>
                        <div class="absolute top-6 -left-8 text-xs text-slate-500 text-right w-6">0</div>
                        <div class="absolute top-24 -left-8 text-xs text-slate-500 text-right w-6">1</div>
                    </div>
                    <div class="mt-10 bg-cyber-900 p-4 rounded text-center border border-cyber-700">
                        <div class="text-xs text-slate-400 mb-1">Hasil SOP Minimal:</div>
                        <div id="k2-res" class="text-2xl font-bold text-cyber-glow font-mono tracking-wider">Y = 0</div>
                    </div>
                </div>

                <!-- 3 Var K-Map -->
                <div class="bg-cyber-800 p-6 rounded-xl border border-cyber-700 shadow-lg relative">
                    <h3 class="text-lg font-bold text-purple-400 mb-6 flex justify-between">K-Map 3 Variabel (A, B, C)</h3>
                    <div class="relative w-72 mx-auto mt-4">
                        <div class="absolute -top-6 left-24 text-slate-400 font-bold">BC</div>
                        <div class="absolute top-12 -left-6 text-slate-400 font-bold">A</div>
                        <div class="grid grid-cols-4 gap-1 bg-cyber-700 p-1 rounded shadow-inner">
                            <button id="k3-000" class="k3-cell w-16 h-16 bg-cyber-900 hover:bg-cyber-800 text-xl font-bold text-slate-600 transition-colors focus:outline-none" data-idx="0">0</button>
                            <button id="k3-001" class="k3-cell w-16 h-16 bg-cyber-900 hover:bg-cyber-800 text-xl font-bold text-slate-600 transition-colors focus:outline-none" data-idx="1">0</button>
                            <button id="k3-011" class="k3-cell w-16 h-16 bg-cyber-900 hover:bg-cyber-800 text-xl font-bold text-slate-600 transition-colors focus:outline-none" data-idx="3">0</button>
                            <button id="k3-010" class="k3-cell w-16 h-16 bg-cyber-900 hover:bg-cyber-800 text-xl font-bold text-slate-600 transition-colors focus:outline-none" data-idx="2">0</button>
                            
                            <button id="k3-100" class="k3-cell w-16 h-16 bg-cyber-900 hover:bg-cyber-800 text-xl font-bold text-slate-600 transition-colors focus:outline-none" data-idx="4">0</button>
                            <button id="k3-101" class="k3-cell w-16 h-16 bg-cyber-900 hover:bg-cyber-800 text-xl font-bold text-slate-600 transition-colors focus:outline-none" data-idx="5">0</button>
                            <button id="k3-111" class="k3-cell w-16 h-16 bg-cyber-900 hover:bg-cyber-800 text-xl font-bold text-slate-600 transition-colors focus:outline-none" data-idx="7">0</button>
                            <button id="k3-110" class="k3-cell w-16 h-16 bg-cyber-900 hover:bg-cyber-800 text-xl font-bold text-slate-600 transition-colors focus:outline-none" data-idx="6">0</button>
                        </div>
                        <div class="flex justify-between text-xs text-slate-500 mt-1 px-2 font-mono"><span>00</span><span>01</span><span>11</span><span>10</span></div>
                        <div class="absolute top-5 -left-8 text-xs text-slate-500 text-right w-6">0</div>
                        <div class="absolute top-20 -left-8 text-xs text-slate-500 text-right w-6">1</div>
                    </div>
                    <div class="mt-10 bg-cyber-900 p-4 rounded text-center border border-cyber-700">
                        <div class="text-xs text-slate-400 mb-1">Hasil SOP Minimal:</div>
                        <div id="k3-res" class="text-2xl font-bold text-purple-400 font-mono tracking-wider">Y = 0</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initSimulatorW4() {
    let k2 = [0,0,0,0];
    document.querySelectorAll('.k2-cell').forEach(btn => {
        btn.addEventListener('click', (e) => {
            let idx = parseInt(e.target.dataset.idx);
            k2[idx] = k2[idx] ? 0 : 1;
            e.target.textContent = k2[idx];
            e.target.className = `k2-cell w-20 h-20 text-2xl font-bold transition-colors focus:outline-none ${k2[idx] ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]' : 'bg-cyber-900 text-slate-600'}`;
            solveK2();
        });
    });

    function solveK2() {
        let res = "0";
        if(k2[0]&&k2[1]&&k2[2]&&k2[3]) res = "1";
        else {
            let terms = [];
            let cov = [0,0,0,0];
            if(k2[0]&&k2[1]) { terms.push("A'"); cov[0]=1; cov[1]=1; }
            if(k2[2]&&k2[3]) { terms.push("A"); cov[2]=1; cov[3]=1; }
            if(k2[0]&&k2[2]) { terms.push("B'"); cov[0]=1; cov[2]=1; }
            if(k2[1]&&k2[3]) { terms.push("B"); cov[1]=1; cov[3]=1; }
            
            if(k2[0]&&!cov[0]) terms.push("A'B'");
            if(k2[1]&&!cov[1]) terms.push("A'B");
            if(k2[2]&&!cov[2]) terms.push("AB'");
            if(k2[3]&&!cov[3]) terms.push("AB");
            
            if(terms.includes("A'") && terms.includes("A")) res = "1";
            else if(terms.length > 0) res = terms.join(" + ");
        }
        let el = document.getElementById('k2-res');
        if(el) el.textContent = "Y = " + res;
    }

    let k3 = [0,0,0,0, 0,0,0,0]; 
    document.querySelectorAll('.k3-cell').forEach(btn => {
        btn.addEventListener('click', (e) => {
            let idx = parseInt(e.target.dataset.idx);
            k3[idx] = k3[idx] ? 0 : 1;
            e.target.textContent = k3[idx];
            e.target.className = `k3-cell w-16 h-16 text-xl font-bold transition-colors focus:outline-none ${k3[idx] ? 'bg-purple-500/20 text-purple-400 border border-purple-500 shadow-[0_0_10px_rgba(167,139,250,0.3)]' : 'bg-cyber-900 text-slate-600'}`;
            solveK3();
        });
    });

    function solveK3() {
        let el = document.getElementById('k3-res');
        if(!el) return;
        
        if(k3.every(v=>v)) return el.textContent = "Y = 1";
        if(k3.every(v=>!v)) return el.textContent = "Y = 0";
        
        let cov = [0,0,0,0,0,0,0,0];
        let res = [];
        let quads = [
            {idx: [0,1,2,3], term: "A'"}, {idx: [4,5,6,7], term: "A"},
            {idx: [0,1,4,5], term: "C'"}, {idx: [2,3,6,7], term: "C"},
            {idx: [1,3,5,7], term: "B"}, {idx: [0,2,4,6], term: "B'"}
        ];
        // Note: For K-Map 3 var (A on left, BC on top: 00 01 11 10)
        // 0: A'B'C'
        // 1: A'B'C
        // 3: A'BC
        // 2: A'BC'
        // 4: AB'C'
        // 5: AB'C
        // 7: ABC
        // 6: ABC'
        // Quads fix:
        quads = [
            {idx: [0,1,2,3], term: "A'"}, {idx: [4,5,6,7], term: "A"},
            {idx: [1,3,5,7], term: "C"}, {idx: [0,2,4,6], term: "C'"},
            {idx: [2,3,6,7], term: "B"}, {idx: [0,1,4,5], term: "B'"}
        ];
        
        let pairs = [
            {idx: [0,1], term: "A'B'"}, {idx: [2,3], term: "A'B"}, {idx: [4,5], term: "AB'"}, {idx: [6,7], term: "AB"},
            {idx: [1,3], term: "A'C"}, {idx: [5,7], term: "AC"}, {idx: [0,2], term: "A'C'"}, {idx: [4,6], term: "AC'"},
            {idx: [0,4], term: "B'C'"}, {idx: [1,5], term: "B'C"}, {idx: [2,6], term: "BC'"}, {idx: [3,7], term: "BC"}
        ];
        let ones = [
            "A'B'C'", "A'B'C", "A'BC'", "A'BC", "AB'C'", "AB'C", "ABC'", "ABC"
        ];
        
        for(let q of quads) {
            if(q.idx.every(i => k3[i])) { res.push(q.term); q.idx.forEach(i => cov[i] = 1); }
        }
        for(let p of pairs) {
            if(p.idx.every(i => k3[i]) && !p.idx.every(i => cov[i])) { res.push(p.term); p.idx.forEach(i => cov[i] = 1); }
        }
        for(let i=0; i<8; i++) {
            if(k3[i] && !cov[i]) { res.push(ones[i]); cov[i] = 1; }
        }
        
        el.textContent = "Y = " + res.join(" + ");
    }
}

function renderModuleQuizW4(container) {
    container.innerHTML = `
        <div class="fade-in max-w-4xl mx-auto mt-4 space-y-6 pb-20">
            <h1 class="text-3xl font-bold text-white mb-2">Latihan K-Map 4 Variabel</h1>
            <div class="bg-cyber-800 p-6 sm:p-8 rounded-xl border border-cyber-accent/50 shadow-[0_0_15px_rgba(6,182,212,0.1)] relative overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-cyber-accent/10 rounded-full blur-3xl"></div>
                <h3 class="text-xl font-bold text-white mb-4 relative z-10">Studi Kasus Keamanan Gedung</h3>
                <p class="text-slate-300 mb-4 relative z-10 text-sm">Diketahui persamaan SOP minterm dari sistem alarm gedung (4 variabel: A, B, C, D) adalah:</p>
                <div class="bg-cyber-900 border border-cyber-700 p-4 rounded-lg mb-6 shadow-inner relative z-10">
                    <code class="text-lg text-cyber-glow block font-mono">Q(A,B,C,D) = Σm(1,3,5,6,7,9,10,11,13,14,15)</code>
                </div>
                
                <p class="text-sm text-slate-400 mb-3 relative z-10">Tentukan ekspresi Boolean minimum dari fungsi tersebut:</p>
                <div class="space-y-3 relative z-10">
                    <label class="flex items-center gap-3 p-4 bg-cyber-900/50 rounded-lg border border-cyber-700 cursor-pointer hover:border-cyber-accent hover:bg-cyber-800 transition-colors">
                        <input type="radio" name="q4" value="wrong" class="w-4 h-4 text-cyber-accent bg-cyber-900 border-cyber-700" onclick="document.getElementById('q4-res').innerHTML='<span class=\'text-red-400 fade-in\'>Salah. Cek pengelompokan yang paling optimal.</span>'"> 
                        <span class="font-mono text-white tracking-widest text-lg">D + A'C + BC'</span>
                    </label>
                    <label class="flex items-center gap-3 p-4 bg-cyber-900/50 rounded-lg border border-cyber-700 cursor-pointer hover:border-cyber-accent hover:bg-cyber-800 transition-colors">
                        <input type="radio" name="q4" value="right" class="w-4 h-4 text-cyber-accent bg-cyber-900 border-cyber-700" onclick="document.getElementById('q4-res').innerHTML='<span class=\'text-emerald-400 fade-in font-bold\'>Benar! Hasil minimumnya adalah D + AC + BC.</span>'"> 
                        <span class="font-mono text-white tracking-widest text-lg">D + AC + BC</span>
                    </label>
                    <label class="flex items-center gap-3 p-4 bg-cyber-900/50 rounded-lg border border-cyber-700 cursor-pointer hover:border-cyber-accent hover:bg-cyber-800 transition-colors">
                        <input type="radio" name="q4" value="wrong2" class="w-4 h-4 text-cyber-accent bg-cyber-900 border-cyber-700" onclick="document.getElementById('q4-res').innerHTML='<span class=\'text-red-400 fade-in\'>Salah. Terlalu panjang, tidak minimum.</span>'"> 
                        <span class="font-mono text-white tracking-widest text-lg">D + A'C' + BC + ABC</span>
                    </label>
                </div>
                <div id="q4-res" class="mt-6 text-center text-sm relative z-10 h-6"></div>
            </div>
        </div>
    `;
}

function initQuizW4() {}
