const state = {};

var data = [
    {
        "id": "1",
        "Rua": "ALFREDO ROGADO (AR)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "5",
        "CEP": "18542-458",
    },
    {
        "id": "2",
        "Rua": "ALAN KARDEC (AK)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "6",
        "CEP": "18542-434",
    },
    {
        "id": "3",
        "Rua": "ANGELO FUSTAINO (AF)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "1 - FRANCIELLE",
        "CEP": "18542-380",
    },
    {
        "id": "4",
        "Rua": "APARICIO PIRES (AP)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "5",
        "CEP": "18542-456",
    },
    {
        "id": "5",
        "Rua": "AURELIA VERONEZE GUTIERREZ (AVG)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "3 - ANDREIA",
        "CEP": "18542-388",
    },
    {
        "id": "6",
        "Rua": "BENEDITO APARECIDO MANFRINATI (BAM)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "3 - ANDREIA",
        "CEP": "18542-390",
    },
    {
        "id": "7",
        "Rua": "BOM JESUS (BJ)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "6",
        "CEP": "18542-438",
    },
    {
        "id": "8",
        "Rua": "BOM PASTOR (BP)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "6",
        "CEP": "18542-432",
    },
    {
        "id": "9",
        "Rua": "DANIEL DE CAMARGO TABORDA (DCT) - (5-484)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "4 - GUILHERME",
        "CEP": "18542-460",
    },
    {
        "id": "10",
        "Rua": "HANS REDER (HR)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "5",
        "CEP": "18542-454",
    },
    {
        "id": "11",
        "Rua": "JOAO DIANA SOBRINHO (JDS) - 348 em diante",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "1 - FRANCIELLE",
        "CEP": "18542-324",
    },
    {
        "id": "12",
        "Rua": "MAESTRO MANOEL JOSE DE CACALAZANS (MMJC)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "4 - GUILHERME",
        "CEP": "18542-374",
    },
    {
        "id": "13",
        "Rua": "MAHATMA GANDHI (MG)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "6",
        "CEP": "18542-430",
    },
    {
        "id": "14",
        "Rua": "MARCO AURELIO BATISTELA (MAB)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "5",
        "CEP": "18542-472",
    },
    {
        "id": "15",
        "Rua": "MARIA EUGENIA PIMENTA DIANA (MEPD) - 137-303",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "2",
        "CEP": "18542-330",
    },
    {
        "id": "16",
        "Rua": "MARIO PIRES DE ALMEIDA (MPA)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "1 - FRANCIELLE",
        "CEP": "18542-320",
    },
    {
        "id": "17",
        "Rua": "OLIVIO TOME (OT)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "2",
        "CEP": "18542-326",
    },
    {
        "id": "18",
        "Rua": "OSVALDO NOVAES DE CARVALHO (ONC) - 125-309",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "4 - GUILHERME",
        "CEP": "18542-366",
    },
    {
        "id": "19",
        "Rua": "OTONIEL RODRIGUES (OR)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "5",
        "CEP": "18542-474",
    },
    {
        "id": "20",
        "Rua": "PADRE JOSE DE ANCHIETA (PJA)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "4 - GUILHERME",
        "CEP": "18542-368",
    },
    {
        "id": "21",
        "Rua": "PLINIO MARTINS SIQUEIRA (PMS)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "3 - ANDREIA",
        "CEP": "18542-384",
    },
    {
        "id": "22",
        "Rua": "REI DAVI (RD)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "6",
        "CEP": "18542-436",
    },
    {
        "id": "23",
        "Rua": "SILVIO BOSCOLO (SB)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "3 - ANDREIA",
        "CEP": "18542-386",
    },
    {
        "id": "24",
        "Rua": "SILVIO PELEGRINE - (SP) - 156-302",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "2",
        "CEP": "18542-364",
    },
    {
        "id": "25",
        "Rua": "SUZETE TOME ALCALA (STA)",
        "Medico": "PEDRO",
        "Enfermeira": "Milena",
        "Equipe": "PRATA",
        "Micro": "1 - FRANCIELLE",
        "CEP": "18542-322",
    },
    {
        "id": "26",
        "Rua": "VALTER ALBIEIRO (VA)",
        "Medico": "PEDRO",
        "Enfermeira": "Milena",
        "Equipe": "PRATA",
        "Micro": "4 - GUILHERME",
        "CEP": "18542-372",
    },
    {
        "id": "27",
        "Rua": "WALTER CASTELUCCI (WC)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "1 - FRANCIELLE",
        "CEP": "18542-382",
    },
    {
        "id": "28",
        "Rua": "AGEU AUGUSTO DA SILVA (AAS)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-308",
    },
    {
        "id": "29",
        "Rua": "ALZIRA PREVITALI (AP)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-318",
    },
    {
        "id": "30",
        "Rua": "ANGELO GASTARDELLO (AG)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "2",
        "CEP": "18542-358",
    },
    {
        "id": "31",
        "Rua": "ANGELO GIOVANI MENEGON (AGM)",
        "Medico": "AMARELA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "2",
        "CEP": "18542-350",
    },
    {
        "id": "32",
        "Rua": "ANTONIO GIBIM (AG)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "6 - JÉSSICA",
        "CEP": "18542-276",
    },
    {
        "id": "33",
        "Rua": "ARMANDO SALES DE OLIVEIRA (ASO) - 653 A 1070",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "6 - JÉSSICA",
        "CEP": "18542-260",
    },
    {
        "id": "34",
        "Rua": "AGOSTINHO ZARDETO (AZ)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "2",
        "CEP": "18542-354",
    },
    {
        "id": "35",
        "Rua": "AURORA MACHADO GUIMARAES (AMG)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-362",
    },
    {
        "id": "36",
        "Rua": "AVELINO ALVES DE OLIVEIRA (AAO)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "2",
        "CEP": "18542-352",
    },
    {
        "id": "37",
        "Rua": "BENEDITA DE ALMEIDA LEAL (BAL)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "2",
        "CEP": "18542-314",
    },
    {
        "id": "38",
        "Rua": "DARIO MARTELI (DM)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "4",
        "CEP": "18542-226",
    },
    {
        "id": "39",
        "Rua": "FELICIO CASTELUCCI (FC) - 131 EM DIANTE",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "4",
        "CEP": "18542-244",
    },
    {
        "id": "40",
        "Rua": "GESSIA ODETE MORAES LISBOA (GOML) - 35 A 250",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "4",
        "CEP": "18542-220",
    },
    {
        "id": "41",
        "Rua": "HUMBERTO MARTELLI (HM) - 134 EM DIANTE",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "4",
        "CEP": "18542-240",
    },
    {
        "id": "42",
        "Rua": "ITAMAR SEGUNDO ALVES DE SANTANA (ISAS) - 29 A 181",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "1 - CLEISE",
        "CEP": "18542-312",
    },
    {
        "id": "43",
        "Rua": "JOAO DIANA SOBRINHO (JDS) - 15 A 257",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-324",
    },
    {
        "id": "44",
        "Rua": "JOAO MARINONIO DE CAMARGO (JMC) - 157 EM DIANTE",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "4",
        "CEP": "18542-348",
    },
    {
        "id": "45",
        "Rua": "JOAO VICENTE FERREIRA (JVF)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "6 - JÉSSICA",
        "CEP": "18542-278",
    },
    {
        "id": "46",
        "Rua": "JOSE CAETANO JESUS (JCJ) - 39, 17, 13",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "1 - CLEISE",
        "CEP": "18542-306",
    },
    {
        "id": "47",
        "Rua": "JOSE MARTINS TELES (JMT) - 05 A 835",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-300",
    },
    {
        "id": "48",
        "Rua": "JULIEN FOUQUE (JF) - 20 A 505",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "1 - CLEISE",
        "CEP": "18542-316",
    },
    {
        "id": "49",
        "Rua": "JULIO SOARES DIEL (JSD)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "4",
        "CEP": "18542-230",
    },
    {
        "id": "50",
        "Rua": "LAZARO DIAS SANTOS (LDS)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-346",
    },
    {
        "id": "51",
        "Rua": "LUIZ CARLOS LISBOA (LCL) - 15 A 90",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "4",
        "CEP": "18542-222",
    },
    {
        "id": "52",
        "Rua": "LUZIA DANIEL GHILBERT (LDG) - 47 A 77",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "1 - CLEISE",
        "CEP": "18542-302",
    },
    {
        "id": "53",
        "Rua": "MADRE SERAFINA (MS) - 164 A 420",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "5 - BRENA",
        "CEP": "18542-268",
    },
    {
        "id": "54",
        "Rua": "MARIA EUGENIA PIMENTA DIANA (MEPD) - 8-88",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-360",
    },
    {
        "id": "55",
        "Rua": "MARIA MARGARIDA PASCOAL (MMP)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-310",
    },
    {
        "id": "56",
        "Rua": "MONSENHOR PIRES (MP) - 318 A 604",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "5 - BRENA",
        "CEP": "18542-272",
    },
    {
        "id": "57",
        "Rua": "OSVALDO NOVAES DE CARVALHO (ONC) - ATÉ 56",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "2",
        "CEP": "18542-366",
    },
    {
        "id": "58",
        "Rua": "OTACILIO VALINI (OV)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "",
        "CEP": "18542-280",
    },
    {
        "id": "59",
        "Rua": "OTONIEL MOTTA (OM) - 41 A 322",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "5 - BRENA",
        "CEP": "18542-274*",
    },
    {
        "id": "60",
        "Rua": "PADRE ALEXANDRE HOLDEAU (PAH) - 125 A 445",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "5 - BRENA",
        "CEP": "18542-270",
    },
    {
        "id": "61",
        "Rua": "RODOLFO MOTTA (RM)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "6 - JÉSSICA",
        "CEP": "18542-266",
    },
    {
        "id": "62",
        "Rua": "ROSA GUARINI MARTELLI (RGM)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "4",
        "CEP": "18542-228",
    },
    {
        "id": "63",
        "Rua": "SAID NEIFE (SN)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-342",
    },
    {
        "id": "64",
        "Rua": "SILVIA MARTELLI (SM)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "4",
        "CEP": "18542-224",
    },
    {
        "id": "65",
        "Rua": "SILVIO PELEGRINE (SP) - 7 A 87",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-364",
    },
    {
        "id": "66",
        "Rua": "SUZANA FRANCO ROCO (SFR)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "2",
        "CEP": "",
    },
    {
        "id": "67",
        "Rua": "VALDEREZ PIRES (VP) - 115, 120, 112, 171, 102, 98",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "1 - CLEISE",
        "CEP": "18542-304",
    },
    {
        "id": "68",
        "Rua": "VILMA MARIA BOSCOLO (VMB)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "2",
        "CEP": "18542-450",
    },
    {
        "id": "69",
        "Rua": "VIRGILINO DE OLIVEIRA SANTOS (VOS)",
        "Medico": "ANA PAULA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "2",
        "CEP": "18542-340",
    },
    {
        "id": "70",
        "Rua": "ADA CALGARO CAVALANTE (AGC)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "1 - DAIANE",
        "CEP": "18542-520",
    },
    {
        "id": "71",
        "Rua": "ALZIRO CARLOS (AC)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "6",
        "CEP": "18545-276",
    },
    {
        "id": "72",
        "Rua": "ANTONIO DARIO (AD)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "5",
        "CEP": "18545-132",
    },
    {
        "id": "73",
        "Rua": "BENEDITO PRESTES SOUZA (BPS)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "1 - DAIANE",
        "CEP": "18542-514",
    },
    {
        "id": "74",
        "Rua": "DOUTOR CELIO PRADO (DCP)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "6",
        "CEP": "18545-278",
    },
    {
        "id": "75",
        "Rua": "CLARICE SANNA SERRALHEIRO (CSS)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "4 - JULIA",
        "CEP": "18545-156",
    },
    {
        "id": "76",
        "Rua": "CLEITON BAZZO CUCHERA (CBC)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18545-244",
    },
    {
        "id": "77",
        "Rua": "DANIEL DE CAMARGO TABORDA (DCT) - 485 EM DIANTE",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "6",
        "CEP": "18542-470",
    },
    {
        "id": "78",
        "Rua": "DANIEL DA SILVA BRAGA (DSB)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18542-492",
    },
    {
        "id": "79",
        "Rua": "DANTE CAREZIA (DC)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "6",
        "CEP": "18545-288",
    },
    {
        "id": "80",
        "Rua": "EDGAR DE MORAES (EM)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "5",
        "CEP": "18545-266",
    },
    {
        "id": "81",
        "Rua": "FELIPE MANOEL DE CAMPOS (FMC)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "3",
        "CEP": "18542-476",
    },
    {
        "id": "82",
        "Rua": "FLAVIA SAMPAIO BELLO (FSB)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "5",
        "CEP": "18545-136",
    },
    {
        "id": "83",
        "Rua": "FRANCISCO MIGUEL MACEDO (FMM)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "1 - DAIANE",
        "CEP": "18542-494",
    },
    {
        "id": "84",
        "Rua": "IRENE SEGATO (IS)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18545-242",
    },
    {
        "id": "85",
        "Rua": "JOAO BRASILIO DA SILVA (JBS)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "4 - JULIA",
        "CEP": "18545-150",
    },
    {
        "id": "86",
        "Rua": "JOAO GASTARDELI (JG)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "2 - RENATA",
        "CEP": "18542-498",
    },
    {
        "id": "87",
        "Rua": "JOSE BARBOSA (JB)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "1 - DAIANE",
        "CEP": "18542-516",
    },
    {
        "id": "88",
        "Rua": "JOSE MARTINS TELES (JMT) - 1135 A 1143",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18545-282",
    },
    {
        "id": "89",
        "Rua": "JOSE ROBERTO BATISTELA (JRB)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "6",
        "CEP": "18545-272",
    },
    {
        "id": "90",
        "Rua": "LAURO GALVAO (LG)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "2 - RENATA",
        "CEP": "18542-458",
    },
    {
        "id": "91",
        "Rua": "LAURA STEINER DE CARVALHO (LSC)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "4 - JULIA",
        "CEP": "18545-154",
    },
    {
        "id": "92",
        "Rua": "LUIS TEMPESTA (LT)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "2 - RENATA",
        "CEP": "18542-496",
    },
    {
        "id": "93",
        "Rua": "MARIO CAMILO FILHO (MCF)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "1 - DAIANE",
        "CEP": "18542-518",
    },
    {
        "id": "94",
        "Rua": "MARIO COVAS (MC) - 1985 A 2945",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "5",
        "CEP": "",
    },
    {
        "id": "95",
        "Rua": "NORBERTO COELHO DE OLIVEIRA (NCO)",
        "Medico": "Madrid",
        "Enfermeira": "Jun 15, 2017",
        "Equipe": "ROSA",
        "Micro": "5",
        "CEP": "18542-458",
    },
    {
        "id": "96",
        "Rua": "OCIREMA FERNANDES STETNER (OFS)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "5",
        "CEP": "18545-138",
    },
    {
        "id": "97",
        "Rua": "OLGA BRUGNEROTTO SGARIBOLDI (OBS",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18545-248",
    },
    {
        "id": "98",
        "Rua": "PAULO DE OLIVEIRA TAUHYL (POT)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "2 - RENATA",
        "CEP": "18542-500",
    },
    {
        "id": "99",
        "Rua": "PEDRO SGARIBOLDI (PS)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18545-284",
    },
    {
        "id": "100",
        "Rua": "PLINIO MARTINS TELES (PMT)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "4 - JULIA",
        "CEP": "18545-264",
    },
    {
        "id": "101",
        "Rua": "ROBERVAL CAMARGO DE MORAES (RCM)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "1 - DAIANE",
        "CEP": "18542-508",
    },
    {
        "id": "102",
        "Rua": "ROMEU CASTELUCCI (RC)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "6",
        "CEP": "18545-270",
    },
    {
        "id": "103",
        "Rua": "SANTA LUCIA MAGOGA (SLM)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18545-236",
    },
    {
        "id": "104",
        "Rua": "SANTO SGARIBOLDI (SS)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "6",
        "CEP": "18545-250",
    },
    {
        "id": "105",
        "Rua": "REVERENDO SILES BACARO (SB)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18545-238",
    },
    {
        "id": "106",
        "Rua": "ULISSES ALVES MACHADO (UAM)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "4 - JULIA",
        "CEP": "18545-152",
    },
    {
        "id": "107",
        "Rua": "VALDEMAR VERONEZE (VV)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "6",
        "CEP": "18545-268",
    },
    {
        "id": "108",
        "Rua": "VERGINIO ANGELIERE (VA)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "2 - RENATA",
        "CEP": "18542-478",
    },
    {
        "id": "109",
        "Rua": "ADOLFO FERRARI (AF)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "",
        "CEP": "18542-262",
    },
    {
        "id": "110",
        "Rua": "AMADEU MARTELLI (AM)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "3",
        "CEP": "18542-076",
    },
    {
        "id": "111",
        "Rua": "ANTONIO BELLO (AB)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-096",
    },
    {
        "id": "112",
        "Rua": "ANTONIO LEITE ALMEIDA (ALA)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "6 - TATIANE",
        "CEP": "18542-058",
    },
    {
        "id": "113",
        "Rua": "ARMANDO RAMOS (AR) - 38 a 214",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "6 - TATIANE",
        "CEP": "18542-060",
    },
    {
        "id": "114",
        "Rua": "ARMANDO SALES DE OLIVEIRA (ASO) - 174-585",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "5 - KAREN",
        "CEP": "18542-074",
    },
    {
        "id": "115",
        "Rua": "ARMANDO SALES DE OLIVEIRA (ASO) - 12-169",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "6 - TATIANE",
        "CEP": "18542-074",
    },
    {
        "id": "116",
        "Rua": "ATILIO COLI (AC)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "3",
        "CEP": "18542-068",
    },
    {
        "id": "117",
        "Rua": "BENEDITO PIRES DE ARRUDA (BPA)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "5 - KAREN",
        "CEP": "18542-072",
    },
    {
        "id": "118",
        "Rua": "BENEDITO DE TOLEDO VIEGAS / VIEIRA (BTV)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-106",
    },
    {
        "id": "119",
        "Rua": "BENEDITO VAZ CARDOSO (BVC)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-070",
    },
    {
        "id": "120",
        "Rua": "BOITUVA",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-156",
    },
    {
        "id": "121",
        "Rua": "CABREUVA",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "5 - KAREN",
        "CEP": "18542-158",
    },
    {
        "id": "122",
        "Rua": "CANTIDIO / CANDIDO DE OLIVEIRA (CO)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "5 - KAREN",
        "CEP": "18542-064",
    },
    {
        "id": "123",
        "Rua": "CERQUILHO",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "3",
        "CEP": "18542-164",
    },
    {
        "id": "124",
        "Rua": "EVARISTO BAPTISTELLA (EB)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-100",
    },
    {
        "id": "125",
        "Rua": "FELICIO CASTELUCCI (FC) - ATÉ 130",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-244",
    },
    {
        "id": "126",
        "Rua": "GENESIO RODRIGUES (GR)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "6 - TATIANE",
        "CEP": "18542-056",
    },
    {
        "id": "127",
        "Rua": "HUMBERTO MARTELLI (HM) - ATÉ 120",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-240",
    },
    {
        "id": "128",
        "Rua": "INDAIATUBA",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "3",
        "CEP": "18542-166",
    },
    {
        "id": "129",
        "Rua": "ITU",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-172",
    },
    {
        "id": "130",
        "Rua": "JOAO BATISTA DE CAMPOS (JBC)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-182",
    },
    {
        "id": "131",
        "Rua": "JOAO MARINONIO DE CAMARGO (JMC) - ATÉ 140",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-242 - VM",
    },
    {
        "id": "132",
        "Rua": "JOAO RODRIGUES DA SILVA (JRS)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18542-062",
    },
    {
        "id": "133",
        "Rua": "Song",
        "Medico": "Madrid",
        "Enfermeira": "Jun 15, 2017",
        "Equipe": "OURO",
        "Micro": "5",
        "CEP": "18542-458",
    },
    {
        "id": "134",
        "Rua": "JOAQUIM PIRES ALMEIDA (JPA)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "5 - KAREN",
        "CEP": "18542-066",
    },
    {
        "id": "135",
        "Rua": "JOSE GUERINE (JG)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-098",
    },
    {
        "id": "136",
        "Rua": "JOSE MARCELINO ANTUNES (JMA)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-102",
    },
    {
        "id": "137",
        "Rua": "JOSE TEIXEIRA DA FONSECA (JTF)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "3",
        "CEP": "18542-078",
    },
    {
        "id": "138",
        "Rua": "LUIZ ANTONIO VIEIRA (LAV)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-110",
    },
    {
        "id": "139",
        "Rua": "LUIS CARLOS RINCK (LCR)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-108",
    },
    {
        "id": "140",
        "Rua": "LUIS MARTELI (LM)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "3",
        "CEP": "18542-254",
    },
    {
        "id": "141",
        "Rua": "MADRE SERAFINA (MS) - ATÉ 163",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "5 - KAREN",
        "CEP": "18542-268",
    },
    {
        "id": "142",
        "Rua": "MARIA MARGARIDA COSSONICHE (MMC)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-184",
    },
    {
        "id": "143",
        "Rua": "MONSENHOR PIRES (MP) - ATÉ 286",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "5 - KAREN",
        "CEP": "18542-272",
    },
    {
        "id": "144",
        "Rua": "NATALIO TAUHYL (NT)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-104",
    },
    {
        "id": "145",
        "Rua": "OLAVO ASSUMPÇAO FLEURY (OAF) - ATÉ 96",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "6 - TATIANE",
        "CEP": "18542-152",
    },
    {
        "id": "146",
        "Rua": "PADRE ALEXANDRE HORDEAU (PAH) - ATÉ 39",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "5 - KAREN",
        "CEP": "18542-270",
    },
    {
        "id": "147",
        "Rua": "PASCOA BONINE GUERINE (PBG)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-092",
    },
    {
        "id": "148",
        "Rua": "PEDRO PAULO DE OLIVEIRA (PPO)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "5 - KAREN",
        "CEP": "18545-138",
    },
    {
        "id": "149",
        "Rua": "PIRAPORA",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-458",
    },
    {
        "id": "150",
        "Rua": "ROQUE PLINIO DE CARVALHO (RPC)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "6 - TATIANE ",
        "CEP": "18542-052",
    },
    {
        "id": "151",
        "Rua": "SALTO",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "3",
        "CEP": "18542-162",
    },
    {
        "id": "152",
        "Rua": "SANTA ROSA (SR)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-150",
    },
    {
        "id": "153",
        "Rua": "SOROCABA",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-168",
    },
    {
        "id": "154",
        "Rua": "TATUI",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-174",
    },
    {
        "id": "155",
        "Rua": "TIETE",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-170",
    },
    {
        "id": "156",
        "Rua": "ULISSES CORNELIO VITORINO (UCV)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "6 - TATIANE",
        "CEP": "18542-054",
    },
    {
        "id": "157",
        "Rua": "VITORIO BELO (VB)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-094",
    },
    {
        "id": "158",
        "Rua": "GENESIO AZOLINE (GA)",
        "Medico": "BRUNO",
        "Enfermeira": "Ana Beatriz",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-124",
    },
    {
        "id": "159",
        "Rua": "ALFREDO SALEM (AS)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "4 - JULIA",
        "CEP": "18545-262",
    },
    {
        "id": "160",
        "Rua": "VICTORIO MARTELETTO (VM)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18545-234",
    },
    {
        "id": "161",
        "Rua": "MARIA DE LOURDES RIBEIRO DA SILVA SERAFIM (MLRSS)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18545-274",
    },
    {
        "id": "162",
        "Rua": "JOSE OLIVEIRA DE SOUZA (JOS)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18545-240",
    },
    {
        "id": "163",
        "Rua": "LEONILDE CADETE DA SILVA (LCS)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18545-208",
    },
    {
        "id": "164",
        "Rua": "MARIO MARTINS DE CAMARGO / TERRAS DO PORTO (MMC)",
        "Medico": "RENAN",
        "Enfermeira": "Maria Ap Maciel",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18546-438",
    },
    {
        "id": "165",
        "Rua": "PERES VENTURA (PV)",
        "Medico": "PEDRO",
        "Enfermeira": "Milene",
        "Equipe": "PRATA",
        "Micro": "4 - GUILHERME",
        "CEP": "18542-368",
    },
];

state.data = data;
state.customData = data;
var tbody = document.getElementById("tbody");
state.valueSatus = "";
state.valueMedico = "";
state.numberDisplay = 0;
var tbody = document.getElementById("tbody");


// // for (let key in data) {
// //     // console.log(data[key],key,);
// //     let elem = create_elment(data[key]);
// //     tbody.insertAdjacentHTML('beforeend',elem);

// // }

function getEquipe(self) {
    switch (self) {
        case 'PRATA':
            return 'class="Equipe prata"';
            break;
        case 'OURO':
            return 'class="Equipe ouro"';
            break;
        case 'AMARELA':
            return 'class="Equipe amarela"';
            break;
        case 'ROSA':
            return 'class="Equipe rosa"';
            break;
        default:
            return 'class="Equipe text-success"';
            break;
    }
}

function create_elment(item) {
    return `
    <tr>
        <td>${item.Rua}</td>
        <td><span `+ getEquipe(item.Equipe) + `>•</span> ${item.Equipe}</td>
        <td>${item.Medico}</td>
        <td>${item.Enfermeira}</td>                        
        <td>${item.Micro}</td>
        <td>${item.CEP}</td>
    </tr>
    `;
}


loadData();

// console.log(get_text);
//ds

var numberBD = document.getElementById('number1').innerHTML;
var numberKT = document.getElementById('number2').innerHTML;

function loadData() {
    document.getElementById('number1').innerHTML = 1;
    document.getElementById('number2').innerHTML = 5;
    state.valueEntries = 5;
    state.valueEquipe = "Any";
    state.valueMedico = "All";
    let data = state.customData.slice(0, 0);
    tbody.innerHTML = "";
    data.forEach(item => {
        tbody.insertAdjacentHTML('beforeend', create_elment(item));
    })
}


var select = document.getElementById("select-entries");
var num_entries;
var numPage;
var show;

var dem;

//tao li
function create_li(item) {
    return `
        <a onclick="changeclick(this)" href="#" class="page-link">${item}</a>
    `;
}
function changeclick(id) {
    return 1;
}

taosubpag();
ktshow();
chia_theo_show();
function taosubpag() {
    var subpage = document.getElementById("subpage");
    for (var i = 1; i <= Math.ceil(data.length / 5); i++) {
        var li = document.createElement("li");
        li.innerHTML = create_li(i);
        subpage.appendChild(li);
    }
};

function ktshow() {
    document.getElementById('select-entries').addEventListener('change', e => {
        let selectDataforEntry = state.customData.slice(0, e.target.value);
        tbody.innerHTML = "";
        selectDataforEntry.forEach(item => {
            tbody.insertAdjacentHTML('beforeend', create_elment(item));
        })
    });


}
var select = document.getElementById("select-entries");
var num_entries;
var numPage;
function chia_theo_show() {

    select.onchange = function () {
        var option = select.children;
        for (var i = 0; i < option.length; i++) {
            if (option[i].selected) {
                num_entries = option[i].value;
            }
        }
        numPage = Math.ceil(data.length / num_entries);
        document.getElementById('number1').innerHTML = 1;
        document.getElementById('number2').innerHTML = num_entries;
        subpage.innerHTML = "";
        for (var i = 1; i <= numPage; i++) {
            var li = document.createElement("li");
            li.innerHTML = create_li(i);
            li.value = i;
            subpage.appendChild(li);
        }
    }
}


var luaChon = subpage.children;
var page = document.getElementById("page");
var so;
    for (var i = 1; i <= luaChon.length; i++) {
        if (changeclick(luaChon[i])==1)
            so=i;
    }


    var search = document.getElementById("search");
search.addEventListener("keyup", function () {
    var searchValue = (document.getElementById("search").value).toLowerCase();
    tbody.innerHTML = "";
    if (searchValue == "")
        load();
    else {
        for (var i = 0; i < data.length; i++) {
            if (searchValue != "") {
                if (data[i].id.indexOf(searchValue) >= 0 || (data[i].Rua).toLowerCase().indexOf(searchValue) >= 0 || (data[i].Medico).toLowerCase().indexOf(searchValue) >= 0 || (data[i].Equipe).toLowerCase().indexOf(searchValue) >= 0)
                    xuat(data[i]);
            }

        }
    }
});

function xuat(item) {

    var tr = document.createElement("tr");
    tr.innerHTML = create_elment(item);
    tbody.appendChild(tr);
}

function load() {
    /*for (var i = 0; i < 0; i++) {
        //console.log(data[i]);
        //console.log(item);
        var tr = document.createElement("tr");
        tr.innerHTML = create_elment(data[i]);
        tbody.appendChild(tr);
    }*/
}
