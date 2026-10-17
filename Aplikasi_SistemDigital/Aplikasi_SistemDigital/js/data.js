const syllabusData = [
    {
        id: 'week-1',
        title: 'Minggu 1: Dasar & Konversi',
        status: 'active',
        modules: [
            { id: '1.1', title: '1.1 Dasar Sistem Digital', type: 'Teori' },
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
            { id: '2.3', title: '2.3 Aritmetika & Overflow', type: 'Latihan' }
        ]
    },
    {
        id: 'week-3',
        title: 'Minggu 3: Aljabar Boolean',
        status: 'active',
        modules: [
            { id: '3.1', title: '3.1 Gerbang & Hukum Logika', type: 'Teori' },
            { id: '3.2', title: '3.2 Simulator Gerbang Logika', type: 'Simulasi' },
            { id: '3.3', title: '3.3 SOP, POS & Konversi', type: 'Latihan' }
        ]
    },
    {
        id: 'week-4',
        title: 'Minggu 4: Karnaugh Map',
        status: 'active',
        modules: [
            { id: '4.1', title: '4.1 Konsep K-Map & Grouping', type: 'Teori' },
            { id: '4.2', title: '4.2 Visualizer K-Map 2 & 3 Var', type: 'Simulasi' },
            { id: '4.3', title: '4.3 Latihan Soal K-Map', type: 'Latihan' }
        ]
    }
];

let state = {
    activeWeek: 'week-4',
    activeModule: '4.1',
    sidebarExpanded: { 'week-4': true } 
};
