const syllabusData = [
    {
        id: 'week-1',
        title: 'Minggu 1: Dasar & Konversi',
        status: 'active',
        modules: [
            { id: '1.1', title: '1.1 Pengantar Sistem Bilangan', type: 'Teori' },
            { id: '1.2', title: '1.2 Konverter Multi-Basis', type: 'Simulasi' }
        ]
    },
    {
        id: 'week-2',
        title: 'Minggu 2: Bilangan Negatif',
        status: 'active',
        modules: [
            { id: '2.1', title: '2.1 Sign-Mag, C1, & C2', type: 'Teori' },
            { id: '2.2', title: '2.2 Simulator 2\'s Complement', type: 'Simulasi' },
            { id: '2.3', title: '2.3 Aritmetika & Deteksi Overflow', type: 'Latihan' }
        ]
    },
    {
        id: 'week-3',
        title: 'Minggu 3: Aljabar Boolean',
        status: 'active',
        modules: [
            { id: '3.1', title: '3.1 Gerbang & Hukum Logika', type: 'Teori' },
            { id: '3.2', title: '3.2 Simulator Gerbang Logika', type: 'Simulasi' },
            { id: '3.3', title: '3.3 SOP, POS & Latihan Soal', type: 'Latihan' }
        ]
    },
    {
        id: 'week-4',
        title: 'Minggu 4: Karnaugh Map',
        status: 'active',
        modules: [
            { id: '4.1', title: '4.1 Konsep K-Map & Grouping', type: 'Teori' },
            { id: '4.2', title: '4.2 Visualizer K-Map 2 & 3 Var', type: 'Simulasi' },
            { id: '4.3', title: '4.3 Studi Kasus K-Map 4 Var', type: 'Latihan' }
        ]
    },
    {
        id: 'week-5',
        title: 'Minggu 5: Adder & Subtractor',
        status: 'active',
        modules: [
            { id: '5.1', title: '5.1 Half & Full Adder/Subtractor', type: 'Teori' },
            { id: '5.2', title: '5.2 Simulator Adder-Subtractor Terintegrasi', type: 'Simulasi' },
            { id: '5.3', title: '5.3 Analisis RCA vs CLA & Kuis', type: 'Latihan' }
        ]
    },
    {
        id: 'week-6',
        title: 'Minggu 6: Multilevel & Multiplexer',
        status: 'active',
        modules: [
            { id: '6.1', title: '6.1 Multilevel NAND & NOR Universal', type: 'Teori' },
            { id: '6.2', title: '6.2 Simulator Multiplexer (MUX)', type: 'Simulasi' },
            { id: '6.3', title: '6.3 Desain Rangkaian MUX & Kuis', type: 'Latihan' }
        ]
    },
    {
        id: 'week-7',
        title: 'Minggu 7: Decoder, Encoder & BCD',
        status: 'active',
        modules: [
            { id: '7.1', title: '7.1 Decoder & Aplikasi Memori', type: 'Teori' },
            { id: '7.2', title: '7.2 Encoder & Priority Encoder', type: 'Teori' },
            { id: '7.3', title: '7.3 Simulator BCD ke 7-Segment', type: 'Simulasi' },
            { id: '7.4', title: '7.4 Kuis & Pembahasan Detail', type: 'Latihan' }
        ]
    },
    {
        id: 'week-8',
        title: 'Minggu 8: Flip-Flop & Latch',
        status: 'upcoming',
        modules: [
            { id: '8.1', title: '8.1 SR, JK, D, & T Flip-Flop', type: 'Teori' },
            { id: '8.2', title: '8.2 Master-Slave & Clocking', type: 'Simulasi' }
        ]
    },
    {
        id: 'week-9',
        title: 'Minggu 9: Register & Shift Register',
        status: 'upcoming',
        modules: [
            { id: '9.1', title: '9.1 SISO, SIPO, PISO, PIPO', type: 'Teori' },
            { id: '9.2', title: '9.2 Universal Shift Register', type: 'Simulasi' }
        ]
    },
    {
        id: 'week-10',
        title: 'Minggu 10: Asynchronous Counter',
        status: 'upcoming',
        modules: [
            { id: '10.1', title: '10.1 Ripple Counter & Modulo', type: 'Teori' },
            { id: '10.2', title: '10.2 Up/Down Ripple Counter', type: 'Simulasi' }
        ]
    },
    {
        id: 'week-11',
        title: 'Minggu 11: Synchronous Counter',
        status: 'upcoming',
        modules: [
            { id: '11.1', title: '11.1 Desain State Counter', type: 'Teori' },
            { id: '11.2', title: '11.2 Ring & Johnson Counter', type: 'Simulasi' }
        ]
    },
    {
        id: 'week-12',
        title: 'Minggu 12: Finite State Machine',
        status: 'upcoming',
        modules: [
            { id: '12.1', title: '12.1 Model Mealy & Moore', type: 'Teori' },
            { id: '12.2', title: '12.2 State Diagram & Reduksi', type: 'Latihan' }
        ]
    },
    {
        id: 'week-13',
        title: 'Minggu 13: Arsitektur Memori',
        status: 'upcoming',
        modules: [
            { id: '13.1', title: '13.1 SRAM, DRAM & ROM', type: 'Teori' },
            { id: '13.2', title: '13.2 Memory Expansion', type: 'Simulasi' }
        ]
    },
    {
        id: 'week-14',
        title: 'Minggu 14: Mini CPU & ALU Design',
        status: 'upcoming',
        modules: [
            { id: '14.1', title: '14.1 Arsitektur Datapath & Control', type: 'Teori' },
            { id: '14.2', title: '14.2 Proyek Terpadu Sistem Digital', type: 'Proyek' }
        ]
    }
];

let state = {
    activeWeek: 'week-1',
    activeModule: '1.1',
    sidebarExpanded: { 'week-1': true } 
};
