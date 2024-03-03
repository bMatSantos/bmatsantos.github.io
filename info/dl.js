var patches = [
	{
		nomeA: "Super Mario 64", nomeB: null,
		tags: ["N64", "dublado"],
		arquivo_img: "M64Logo",
		mega: "https://mega.nz/#!M1MAmDRb!bJnqQWaRO0oN0unx5I4gmabG3bIOQvpzByEHnV3BQwE",
		gdrive: null,
		github: "https://github.com/bMatSantos/sm64-ptbr/releases/download/1.0/SM64-PTBR-1.0-Console.zip",
		ver: "v1.0", status: "Completo", dataVer: new Date("20 May 2021")
	},
	{
		nomeA: "Super Mario ", nomeB: "Só Estrelas",
		tags: ["Super Nintendo"],
		arquivo_img: "SMSE_alt",
		mega: "https://mega.nz/#!shkgGb7L!jJ67aShpqt7Ulwp1HjnPIC1orPL-Nw5YzdncNHl6AFc",
		gdrive: null,
		github: "https://github.com/bMatSantos/SMAS-W-ptbr/releases/download/t1.12/SMAS-PTBR_1.11-bMatSantos.zip",
		ver: "v1.1", status: "Completo", dataVer: new Date("26 Dec 2022")
	},
	{
		nomeA: "SMSE + Super ", nomeB: "Mundo Mario",
		tags: ["Super Nintendo"],
		arquivo_img: "SMSEM_capa",
		mega: "https://mega.nz/#!x09l3DLB!2Fl-Pq6LJSQk-oIMS1uNRUChPKv3TJWVY5gwo7Phu0U",
		gdrive: null,
		github: "https://github.com/bMatSantos/SMAS-W-ptbr/releases/download/t1.12/SMAS+W-PT-BR_1.12-bMatSantos.zip",
		ver: "v1.12", status: "Completo", dataVer: new Date("28 Dec 2022")
	},
	{
		nomeA: "Mario vs. ", nomeB: "Donkey Kong",
		tags: ["GBA", "dublado"],
		arquivo_img: "MvDK_logo",
		mega: "https://mega.nz/#!V1sUHYLb!7EWnUS8N2nNNZWSk4DNECgb5XYyWsahVJP3GSlSieuI",
		gdrive: "https://drive.google.com/file/d/1AsH4yeCBRU3A6K5NXl15MXJSGzHoHC0y",
		github: null,
		ver: "v1.0", status: "Completo", dataVer: new Date("25 Dec 2023")
	}
];

// Ordenar por data, ordem descendente
patches.sort(function(a, b){return b.dataVer - a.dataVer;});