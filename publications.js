// ─── PUBLICATIONS ────────────────────────────────────────────────────────────
// Edit this file to add, remove, or update publications.
//
// Each entry has these fields:
//   id        – unique number (increment from the last one)
//   cat       – category: 'monographie' | 'direction' | 'chapitre' | 'article'
//                         | 'actes' | 'programme' | 'communication'
//   authors   – e.g. 'Geylikman Z.' or 'Geylikman Z. & Dupont A.'
//   year      – e.g. '2025', 'accepté', 'en prép.', 'à venir'
//   title     – title of the publication (HTML allowed for <em> etc.)
//   ref       – full reference: journal/publisher/pages (HTML allowed)
//   doi       – DOI only, without 'https://doi.org/' prefix (or '' if none)
//   badges    – optional array of badge keys, e.g. ['accepted'] or ['avenir']
//   badgeLabels – optional object mapping badge key to display text,
//                 e.g. { avenir: 'à venir' }
//
// Badge keys used: 'award', 'accepted', 'prep', 'avenir'
// ─────────────────────────────────────────────────────────────────────────────

const defaultPubs = [
  // MONOGRAPHIE
  { id:1, cat:'monographie', authors:'Geylikman Z.', year:'2022', title:'Baron et chevalier. Une étude sémantique de noms d\'humains dans la société féodale', ref:'Paris, Honoré Champion.', doi:'', badges:['award'], badgeLabels:{award:'Prix Bordin 2022'} },

  // DIRECTION
  { id:2, cat:'direction', authors:'Geylikman Z. & Lambert P. (éds.)', year:'2016', title:'Rythmes d\'évolution en français médiéval. Observations d\'après quelques textes littéraires', ref:'Paris, L\'Harmattan.', doi:'' },
  { id:3, cat:'direction', authors:'Boudes Y., Geylikman Z., Lambert P. & Sanchez A. (éds.)', year:'2019', title:'Rythmes d\'évolution en français médiéval. Observations d\'après quelques textes de savoir', ref:'Paris, L\'Harmattan.', doi:'' },
  { id:4, cat:'direction', authors:'Paccosi T., Geylikman Z., Passarotti M., Bozia E. (eds.)', year:'en prép.', title:'Open Data for Quantitative Diachronic Linguistics', ref:'<a href="https://openhumanitiesdata.metajnl.com/collections/Quantitative-Diachronic" target="_blank">Journal of Open Humanities Data.</a>', doi:'', badges:['prep'] },

  // CHAPITRES
  { id:5, cat:'chapitre', authors:'Geylikman Z. & Parussa G.', year:'en prép.', title:'L\'évolution du système d\'adresse dans la diachronie du français : pronoms et termes d\'adresse', ref:'Dans un volume sur la pragmatique historique du français. Paris, Honoré Champion.', doi:'', badges:['prep'] },
  { id:6, cat:'chapitre', authors:'Geylikman Z.', year:'accepté', title:'Stop talking as a bourgeois, you are a nobleman: people-related stereotyped comparisons in Medieval French (9th-15th century)', ref:'Dans <em>Negotiating Norms: Generics and stereotypes across contexts</em>, De Gruyter Mouton.', doi:'', badges:['accepted'] },
  { id:7, cat:'chapitre', authors:'Geylikman Z.', year:'accepté', title:'Nommer l\'humain dans l\'écriture scientifique en français médiéval : comment et pourquoi ? Le cas du Livre des Météores', ref:'Dans <em>Mélanges en l\'honneur de Joëlle Ducos</em>. Paris, Honoré Champion.', doi:'', badges:['accepted'] },
  { id:8, cat:'chapitre', authors:'Geylikman Z.', year:'à paraître', title:'Le stéréotype nominal lié avec baron et son destin dans la chanson de geste en français médiéval', ref:'Dans <em>Naissance et vie des stéréotypes</em>. Rennes, PUR.', doi:'', badges:['press'] },
  { id:9, cat:'chapitre', authors:'Boudes Y. & Geylikman Z.', year:'2019', title:'Introduction', ref:'Dans Boudes/Geylikman/Lambert/Sanchez (éds.), <em>Rythmes d\'évolution en français médiéval. Textes de savoir</em>. Paris, L\'Harmattan, p. 11-20.', doi:'' },
  { id:10, cat:'chapitre', authors:'Geylikman Z.', year:'2019', title:'Tu parli como ber : le destin de la forme monosyllabique du substantif baron dans la Geste francor', ref:'Dans Dufter/Grübl/Scharinger (éds.), <em>Des parlers d\'oïl à la francophonie</em>. De Gruyter, p. 19-43.', doi:'10.1515/9783110541816-002' },
  { id:11, cat:'chapitre', authors:'Geylikman Z.', year:'2016', title:'Le sémantisme de chevalier en français médiéval : évolution ou variation entre les genres ?', ref:'Dans Geylikman/Lambert (éds.), <em>Les rythmes d\'évolution en français médiéval. Textes littéraires</em>. Paris, L\'Harmattan, p. 53-172.', doi:'' },

  // ARTICLES
  { id:12, cat:'article', authors:'Geylikman Z.', year:'2025', title:'The Emergence of personne as a Negative Indefinite in Medieval and Pre-Classical French', ref:'<em>Journal of French Language Studies</em>.', doi:'10.1017/S0959269525100070' },
  { id:13, cat:'article', authors:'Geylikman Z.', year:'2025', title:'Nul homme en français médiéval : une grammaticalisation qui n\'a jamais eu lieu', ref:'<em>Zeitschrift für romanische Philologie</em>, 141-1.', doi:'10.1515/zrp-2025-0011' },
  { id:14, cat:'article', authors:'Geylikman Z.', year:'2024', title:'Nom d\'humain général personne en français médiéval : l\'interface sociale de l\'être humain', ref:'<em>l\'Information Grammaticale</em>, 180, p. 17-25.', doi:'10.2143/IG.180.0.3292822' },
  { id:15, cat:'article', authors:'Geylikman Z.', year:'2022', title:'La norme d\'adresse orale et écrite en français médiéval sur l\'exemple de baron et chevalier', ref:'<em>Linguistique de l\'écrit</em>, numéro thématique 3.', doi:'10.19079/lde.2022.s3.8' },
  { id:16, cat:'article', authors:'Geylikman Z.', year:'2020', title:'Les noms d\'humains féodaux et la subjectivité de la catégorisation dans un corpus de chroniques en français médiéval', ref:'<em>Langue française</em>, 207, p. 91-106.', doi:'10.3917/lf.207.0091' },

  // ACTES
  { id:17, cat:'actes', authors:'Geylikman Z.', year:'2018', title:'Bachelier léger en français médiéval : une étude sémantique du figement', ref:'Dans <em>Atti del XXVIII Congresso internazionale di linguistica e filologia romanza</em>, vol. 1, p. 706-718.', doi:'' },
  { id:18, cat:'actes', authors:'Geylikman Z.', year:'2017', title:'Le sémantisme large dans la Chanson de Roland : le cas du substantif baron', ref:'Dans François/Ridruejo/Siller-Runggaldier (éds.), <em>Actes du XXVII CILPR</em>. Nancy, p. 83-94.', doi:'' },

  // COMPTES-RENDUS
  { id:28, cat:'comptes-rendus', authors:'Geylikman Z.', year:'accepté', title:'Valentine Eugène 2025. Le Roman de Renart et les péchés de langue. Droz', ref:'Studia Linguistica Romanica', doi:''},

  // PROGRAMME
  { id:19, cat:'programme', authors:'Geylikman Z.', year:'2025', title:'Human Nouns and Social CHANGE: a case study of Medieval French (9th-15th century)', ref:'Programme de recherche soumis au financement.', doi:'10.5281/zenodo.15127027' },

  // COMMUNICATIONS (sélection des plus récentes)
  { id:27, cat:'communication', authors:'Geylikman Z.', year:'2026', title:'Modeling human nouns\' lexicon in diachrony: a methodological essay', ref:'Lexiques/Lexicon/Lexik, ATILF, Nancy, France, décembre 2026.', doi:'', badges:['avenir'], badgeLabels:{avenir:'à venir'} },
  { id:26, cat:'communication', authors:'Geylikman Z.', year:'2026', title:'Stabilité sémantique en diachronie : le cas des noms d\'humain en français médiéval', ref:'DIACHRO VI, Université Sorbonne Nouvelle, juin 2026.', doi:'', badges:['avenir'], badgeLabels:{avenir:'à venir'} },
  { id:20, cat:'communication', authors:'Geylikman Z.', year:'2026', title:'Counting butterflies\' matters: lexical frequencies and agency of power. The case of human nouns in Medieval French', ref:'Quantitative Diachronic Linguistics and Cultural Analytics, King\'s College London, 15-16 janv. 2026.', doi:'' },
  { id:21, cat:'communication', authors:'Geylikman Z.', year:'2025', title:'Stop talking as a bourgeois, you are a nobleman: people-related stereotyped comparisons in Medieval French', ref:'Generics and stereotypes, Leiden University, 5-6 juin 2025.', doi:'' },
  { id:24, cat:'communication', authors:'Geylikman Z.', year:'2025', title:'La norme d\'adresse et sa transgression dans quelques textes en français médiéval', ref:'Séminaire de Master de G. Parussa (invitation).', doi:'' },
  { id:25, cat:'communication', authors:'Geylikman Z.', year:'2025', title:'Quantitative methods on small corpora for historical sociolinguistics: a case study of Old French fabliaux', ref:'Data in Historical Linguistics Seminar, King\'s College London (invitation).', doi:'' },
  { id:22, cat:'communication', authors:'Geylikman Z.', year:'2024', title:'General human nouns in Medieval French: borderline grammaticalization?', ref:'LLcD 2024, Sorbonne Université, 9-11 sept. 2024.', doi:'' },
  { id:23, cat:'communication', authors:'Geylikman Z.', year:'2024', title:'Les termes d\'adresse dans les interactions « homme-femme » sur un corpus de fabliaux en ancien français', ref:'DIACHRO XI, Universidad Complutense de Madrid, 22-24 mai 2024.', doi:'' },
];
