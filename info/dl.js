var patches = [
	{
		nome: "Super Mundo Mario",
		tags: ["Super Nintendo"],
		arquivo_img: "SMM",
		mega: "https://mega.nz/file/FlVETLzB#TO_gJXYb4Hq33kNqaIczBLABjjfnMWa8aucVB1S1d-Y",
		gdrive: null,
		github: "https://github.com/bMatSantos/SMAS-W-ptbr/releases/download/t1.12/SMW-PTBR-2.0-BMatSantos.zip",
		ver: "v2.0", dataVer: new Date("23 Dec 2022"), dataLanc: new Date("04 Apr 2021")
	},
	{
		nome: "Super Mario 64",
		tags: ["N64", "dublado"],
		arquivo_img: "M64Logo",
		mega: "https://mega.nz/#!M1MAmDRb!bJnqQWaRO0oN0unx5I4gmabG3bIOQvpzByEHnV3BQwE",
		gdrive: null,
		github: "https://github.com/bMatSantos/sm64-ptbr/releases/download/1.0/SM64-PTBR-1.0-Console.zip",
		ver: "v1.0", dataVer: new Date("20 May 2021"), dataLanc: new Date("20 May 2021")
	},
	{
		nome: "Super Mario Só Estrelas",
		tags: ["Super Nintendo"],
		arquivo_img: "SMSE_alt",
		mega: "https://mega.nz/#!shkgGb7L!jJ67aShpqt7Ulwp1HjnPIC1orPL-Nw5YzdncNHl6AFc",
		gdrive: null,
		github: "https://github.com/bMatSantos/SMAS-W-ptbr/releases/download/t1.12/SMAS-PTBR_1.11-bMatSantos.zip",
		ver: "v1.1", dataVer: new Date("26 Dec 2022"), dataLanc: new Date("17 Oct 2022")
	},
	{
		nome: "SMSE + Super Mundo Mario",
		tags: ["Super Nintendo"],
		arquivo_img: "SMSEM_capa",
		mega: "https://mega.nz/#!x09l3DLB!2Fl-Pq6LJSQk-oIMS1uNRUChPKv3TJWVY5gwo7Phu0U",
		gdrive: null,
		github: "https://github.com/bMatSantos/SMAS-W-ptbr/releases/download/t1.12/SMAS+W-PT-BR_1.12-bMatSantos.zip",
		ver: "v1.12", dataVer: new Date("28 Dec 2022"), dataLanc: new Date("23 Dec 2022")
	},
	{
		nome: "Super Mario: A Ilha do Yoshi",
		tags: ["Grupo ATLAS", "Super Nintendo"],
		arquivo_img: "SM-AIDY",
		mega: "https://mega.nz/file/kklklIQS#8RnrbOAQL6-UsfLy07QgsNkOMDAFc3mzeE_9caPUloE",
		gdrive: null,
		github: "https://github.com/bMatSantos/YI-ptbr/releases/download/t1.0/YI_PT-BR_1.0-Grupo_Atlas.zip",
		ver: "v1.0", dataVer: new Date("25 Jun 2023"), dataLanc: new Date("25 Jun 2023")
	},
	{
		nome: "Mario vs. Donkey Kong",
		tags: ["GBA", "dublado"],
		arquivo_img: "MvDK_logo",
		mega: "https://mega.nz/#!V1sUHYLb!7EWnUS8N2nNNZWSk4DNECgb5XYyWsahVJP3GSlSieuI",
		gdrive: "https://drive.google.com/file/d/1AsH4yeCBRU3A6K5NXl15MXJSGzHoHC0y",
		github: null,
		ver: "v1.0", dataVer: new Date("25 Dec 2023"), dataLanc: new Date("25 Dec 2023")
	}
];

// Ordenar por lançamento, ordem descendente
patches.sort(function(a, b){return b.dataLanc - a.dataLanc;});

// Ordenar por data da versão, ordem descendente
// patches.sort(function(a, b){return b.dataVer - a.dataVer;});
