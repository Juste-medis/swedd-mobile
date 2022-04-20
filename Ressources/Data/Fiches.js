import {generateRandom} from '../../Helpers/Utils';
import {
  arrondissements,
  classes,
  communes,
  confessionReligieux,
  critereVulnerabilites,
  cycles,
  decisionFinaleEtablissement,
  departements,
  frequenceCours,
  icons,
  niveauEtude,
  periodescolaire,
  series,
  variants,
} from './properties';
import {styleFicheForm as styles} from '../../Ressources/Styles';

const collectteurfield = {
    key: 'collecteur',
    type: 'select',
    label: 'Agent enrégistreur',
    multiple: false,
    searchInputPlaceholder: 'Veillez sélectionner le collecteur',
    value: ['/api/collecteurs/1'],
    values: [
      {
        label: 'SISI',
        value: '/api/collecteurs/1',
      },
      {
        label: 'Cokou',
        value: '/api/collecteurs/2',
      },
    ],
  },
  depconarron = [
    {
      key: 'departement',
      type: 'select',
      label: 'DEPARTEMENTS',
      multiple: false,
      searchInputPlaceholder: 'Veuillez sélectionner le département',
      values: departements,
      dependent: 'commune',
    },
    {
      key: 'commune',
      type: 'select',
      label: 'COMMUNES',
      multiple: false,
      searchInputPlaceholder: 'Veuillez sélectionner la commune',
      dependencie: ['departement', 'DEPARTEMENTS'],
      dependent: 'arrondissement',
      values: communes,
    },
    {
      key: 'arrondissement',
      type: 'select',
      label: 'ARRONDISSEMENTS',
      dependencie: ['commune', 'COMMUNES'],
      multiple: false,
      searchInputPlaceholder: "Veuillez sélectionner l'arrondissement",
      values: arrondissements,
    },
  ],
  formationfield = {
    key: 'collecteur',
    type: 'select',
    label: 'Agent enrégistreur',
    multiple: false,
    searchInputPlaceholder: 'Veillez sélectionner le collecteur',
    value: ['/api/collecteurs/1'],
    values: [
      {
        label: 'SISI',
        value: '/api/formation_animateurs/3',
      },
      {
        label: 'Cokou',
        value: '/api/collecteurs/2',
      },
    ],
  },
  projetsfield = {
    key: 'projet',
    type: 'select',
    label: 'Agent enrégistreur',
    multiple: false,
    searchInputPlaceholder: 'Veillez sélectionner le collecteur',
    value: ['/api/collecteurs/1'],
    values: [
      {
        label: '/api/projets/1',
        value: '/api/projets/1',
      },
      {
        label: '/api/projets/2',
        value: '/api/projets/2',
      },
    ],
  },
  sous_projetsfield = {
    key: 'sous_projets',
    type: 'select',
    label: 'Agent enrégistreur',
    multiple: false,
    searchInputPlaceholder: 'Veillez sélectionner le collecteur',
    value: ['/api/collecteurs/1'],
    values: [
      {
        label: '/api/sous_projets/1',
        value: '/api/sous_projets/1',
      },
      {
        label: '/api/sous_projets/2',
        value: '/api/sous_projets/2',
      },
    ],
  },
  fichdescription = [
    '',
    'En termes de fréquentation scolaire, 45 % des filles du premier cycle du secondaire ne sont pas scolarisées (contre 28 % des garçons).',
    'Si cette dynamique démographique se poursuit, la population béninoise pourrait doubler au cours des 30 prochaines années',
    'ce qui entraînerait une pression accrue sur les dépenses sociales et économiques et risquerait de retarder davantage la transition',
    'Il faut cependant attendre les élections législatives françaises de 1951 pour que la rupture soit effective. L’obtention d’un second siège au Palais Bourbon pour la circonscription du Dahomey est alors considérée, par Hubert Maga et ses partisans, comme l’occasion donnée à l’UPD de démontrer son attachement aux intérêts du',
    'En termes de fréquentation scolaire, 45 % des filles du premier cycle du secondaire ne sont pas scolarisées (contre 28 % des garçons).',
    'Si cette dynamique démographique se poursuit, la population béninoise pourrait doubler au cours des 30 prochaines années',
    'ce qui entraînerait une pression accrue sur les dépenses sociales et économiques et risquerait de retarder davantage la transition',
    'Il faut cependant attendre les élections législatives françaises de 1951 pour que la rupture soit effective. L’obtention d’un second siège au Palais Bourbon pour la circonscription du Dahomey est alors considérée, par Hubert Maga et ses partisans, comme l’occasion donnée à l’UPD de démontrer son attachement aux intérêts du',
    'En termes de fréquentation scolaire, 45 % des filles du premier cycle du secondaire ne sont pas scolarisées (contre 28 % des garçons).',
    'Si cette dynamique démographique se poursuit, la population béninoise pourrait doubler au cours des 30 prochaines années',
    'ce qui entraînerait une pression accrue sur les dépenses sociales et économiques et risquerait de retarder davantage la transition',
    'Si cette dynamique démographique se poursuit, la population béninoise pourrait doubler au cours des 30 prochaines années',
    'ce qui entraînerait une pression accrue sur les dépenses sociales et économiques et risquerait de retarder davantage la transition',
    'Si cette dynamique démographique se poursuit, la population béninoise pourrait doubler au cours des 30 prochaines années',
  ];
/* eslint-disable no-unused-vars */
let Fiches;
export default Fiches = [
  {
    id: 1,
    title:
      "FICHE D'ENREGISTREMENT DES ADOLESCENTES ET ADOLESCENTS DE 10 - 24 ANS",
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    get description() {
      return fichdescription[this.id];
    },
    get content() {
      return [
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: this.title,
            style: styles.sectionTitleStyle,
          },
          ...depconarron,
          {
            key: 'quartier',
            type: 'text',
            required: true,
            label: 'Village',
            placeholder: 'Veuillez écrire le village de provenance de la fille',
            maxlength: 100,
          },
        ],
        [
          {
            key: 'collecteurtitle',
            type: 'header',
            subtype: 'h3',
            label: "Informations relatives à l'agent enregistreur",
            style: styles.sectionTitleStyle,
          },
          collectteurfield,
        ],
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label:
              "Informations relatives à l'enfant/adolescent (e) enregistré",
            style: styles.sectionTitleStyle,
          },
          {
            key: 'numOrdre',
            label: "Numéro d'ordre",
            placeholder:
              "Veuillez écrire le numéro d'ordre de l'enfant enregistré",
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'nom',
            label: "Nom de l'enfant enregistré",
            placeholder: "Veuillez écrire le nom de l'enfant enregistré",
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'prenom',
            label: "Prénoms de l'enfant enregistré",
            placeholder:
              "Veuillez écrire le/les prénoms de l'enfant enregistré",
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'sexe',
            label: 'Sexe',
            placeholder: "Veuillez cochez le sexe de l'enfant enregistré",
            type: 'radio-group',
            other: false,
            required: true,
            values: [
              {
                label: 'Féminin',
                value: 'F',
                selected: true,
              },
              {
                label: 'Masculin',
                value: 'M',
              },
            ],
          },
          {
            key: 'age',
            label: "Age de l'enfant enrégistré",
            placeholder: "Veuillez entrer l'âge exacte de l'enfant enregistré",
            type: 'text',
            required: true,
            subtype: 'number',
            maxlength: 100,
          },
          {
            key: 'statutEnfant',
            label: "Statut de l'enfant",
            placeholder: "Veuillez cocher le statut de l'enfant à enregistré",
            type: 'radio-group',
            other: false,
            required: true,
            values: [
              {
                label: 'Déscolarisé',
                value: 'd_scolaris',
              },
              {
                label: 'Non scolarisé',
                value: 'non_scolaris',
              },
              {
                label: 'Scolarisé',
                value: 'scolaris',
              },
            ],
          },
          {
            key: 'niveauDecrochageEnfant',
            label: "Préciser le niveau d'étude avant décrochage (classe)",
            placeholder:
              "Veuillez écrire le niveau d'étude/classe atteint par l'enfant avant décrochage",
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'residence',
            label: 'Quartier de ville/ Village de résidence',
            placeholder:
              "Veuillez entrer le village/village de résidence de l'enfant à enregistré",
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'critereVulnerabilite',
            required: true,
            label: 'Critères de vulnérabilité',
            placeholder:
              'Veuillez choisir le critère de vulnérabilité de la fille',
            type: 'checkbox-group',
            other: true,
            values: critereVulnerabilites,
          },
          {
            key: 'logement',
            label: 'Logement',
            type: 'radio-group',
            other: false,
            required: true,
            placeholder:
              "Veuillez cochez la situation familiale de l'enfant enregistré",
            values: [
              {
                label: 'Avec un parent ou les deux',
                value: 'avec_un_parent_ou_les_deux',
              },
              {
                label: 'Sans parent (ni père, ni mère)',
                value: 'sans_parent_ni_p_re_ni_m_re',
              },
            ],
          },
          {
            key: 'nonMarie',
            label: 'Non marié',
            type: 'radio-group',
            other: false,
            required: true,
            placeholder:
              "Veuillez cocher la catégorie dans laquelle se situe l'adolescent enregistré",
            values: [
              {
                label: 'Avec enfants',
                value: 'avec_enfants',
              },
              {
                label: 'Sans enfants',
                value: 'sans_enfants',
              },
            ],
          },
          {
            key: 'marie',
            type: 'radio-group',
            other: false,
            required: true,
            label: 'Marié',
            placeholder:
              "Veuillez cochez la catégorie dans laquelle se situe l'adolescent enregistré",
            values: [
              {
                label: 'Avec enfants',
                value: 'avec_enfants',
              },
              {
                label: 'Sans enfants',
                value: 'sans_enfants',
              },
            ],
          },
        ],
      ];
    },
  },
  {
    id: 2,
    title: "FICHE D'ENREGISTREMENT DES FILLES",
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    get description() {
      return fichdescription[this.id];
    },
    get content() {
      return [
        [
          {
            key: 'collecteurtitle',
            type: 'header',
            subtype: 'h3',
            label:
              this.title + "\n-\nInformations relatives à l'agent enregistreur",
            style: styles.sectionTitleStyle,
          },
          collectteurfield,
        ],
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: 'Informations relatives à la fille',
            style: styles.sectionTitleStyle,
          },
          {
            key: 'nom',
            label: 'Nom de la fille',
            placeholder: 'Veuillez entrer le nom de la fille',
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'prenom',
            label: 'Prénoms de la fille',
            placeholder: 'Veuillez entrer le/les prénoms de la fille',
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'numM2EducMaster',
            label: 'N° Mll /EDUCMASTER',
            placeholder: 'Veuillez entrer le numéro EDUCMASTER de la fille',
            type: 'text',
            required: true,
            subtype: 'tel',
            maxlength: 100,
          },
          ...depconarron,

          {
            key: 'arrondissement',
            type: 'select',
            label: 'ARRONDISSEMENTS',
            dependencie: ['commune', 'COMMUNES'],
            multiple: false,
            searchInputPlaceholder: "Veuillez sélectionner l'arrondissement",
            values: arrondissements,
          },
          {
            key: 'quartier',
            type: 'text',
            required: true,
            label: 'Village/Quartier/Maison',
            placeholder:
              'Veuillez entrer le village/quartier/maison de provenance de la fille',
            maxlength: 100,
          },
          {
            key: 'etablissementUniversite',
            label: 'Etablissement/Université',
            placeholder:
              "Veuillez entrer l'établissement/université de la fille",
            maxlength: 100,
            type: 'text',
            required: true,
          },
          {
            key: 'niveauEtudeClasse',
            label: "Niveau d'étude/Classe",
            placeholder:
              "Veuillez entrer le niveau d'étude ou la classe de la fille",
            maxlength: 100,
            type: 'text',
            required: true,
          },
          {
            key: 'typeAppui',
            label: "Type d'appui",
            placeholder:
              "Veuillez choisir le type d'appui dont bénéficie la fille",
            type: 'radio-group',
            other: false,
            required: true,
            values: [
              {
                label: 'KITS',
                value: 'kits',
              },
              {
                label: 'TMC',
                value: 'tmc',
              },
              {
                label: 'Bourse',
                value: 'bourse',
              },
            ],
          },
          {
            key: 'critereVulnerabilite',
            required: true,
            label: 'Critères de vulnérabilité',
            placeholder:
              'Veuillez choisir le critère de vulnérabilité de la fille',
            type: 'checkbox-group',
            other: true,
            values: critereVulnerabilites,
          },
          {
            key: 'categorieFille',
            label: 'Catégorie',
            placeholder:
              'Veuillez cochez la catégorie dans laquelle se trouve la fille',
            type: 'radio-group',
            other: false,
            required: true,
            values: [
              {
                label: 'Ancienne',
                value: 'ancienne',
              },
              {
                label: 'Nouvelle',
                value: 'nouvelle',
              },
              {
                label: "Rempacement d'une ancienne",
                value: 'rempacement_d_une_ancienne',
              },
            ],
          },
        ],
        [
          {
            key: 'beneficiairePersonneAffiliers',
            type: 'header',
            subtype: 'h3',
            label: "Informations relatives à la personne affilier à l'enfant",
            style: styles.sectionTitleStyle,
          },
          {
            key: 'nom',
            label: 'Nom de la personne à contacter',
            placeholder: 'Veuillez entrer le nom de la personne à contacter',
            maxlength: 100,
            type: 'text',
            required: true,
          },
          {
            key: 'prenom',
            label: 'Prénoms de la personne à contacter',
            placeholder: 'Veuillez entrer le nom de la personne à contacter',
            maxlength: 100,
            type: 'text',
            required: true,
          },
          {
            key: 'affinite',
            label: 'Affinité',
            placeholder:
              'Veuillez entrer le lien existant entre la fille et la personne a contacté',
            maxlength: 100,
            type: 'text',
            required: true,
          },
          {
            key: 'contact',
            label: 'Contacts',
            placeholder:
              'Veuillez entrer le/les contacts de la personne à contacter',
            maxlength: 100,
            type: 'text',
            required: true,
          },
        ],
      ];
    },
  },
  {
    id: 3,
    title: 'FICHE DE SUIVI SCOLAIRE',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    get description() {
      return fichdescription[this.id];
    },
    get content() {
      return [
        [
          {
            key: 'collecteurtitle',
            type: 'header',
            subtype: 'h3',
            label:
              this.title + "\n-\nInformations relatives à l'agent enregistreur",
            style: styles.sectionTitleStyle,
          },
          collectteurfield,
        ],
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: 'Informations relatives à la fille',
            style: styles.sectionTitleStyle,
          },
          {
            key: 'numM2EducMaster',
            label: 'N° Mll /EDUCMASTER',
            placeholder: 'Veuillez entrer le numéro EDUCMASTER de la fille',
            type: 'text',
            required: true,
          },
          {
            key: 'nom',
            label: 'Nom de la fille',
            placeholder: 'Veuillez entrer le nom de la fille',
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'prenom',
            label: 'Prénoms de la fille',
            placeholder: 'Veuillez entrer le/les prénoms de la fille',
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'dateNaissance',
            type: 'date',
            label: 'Date de naissance de la fille',
            placeholder: 'Veuillez entrer la date de naissance de la fille',
            value: new Date().toISOString(),
            dateFormat: 'DD-MM-YYYY',
            required: true,
            disabled: false,
          },
          {
            key: 'lieuNaissance',
            label: 'Lieu de naissance',
            placeholder: 'Veuillez entrer le lieu de naissance de la fille',
            type: 'text',
            required: true,
            maxlength: 100,
          },
          ...depconarron,

          {
            key: 'quartier',
            type: 'text',
            required: true,
            label: 'Village/Quartier/Maison',
            placeholder:
              'Veuillez entrer le village/quartier/maison de provenance de la fille',
            maxlength: 100,
          },
          {
            key: 'niveauEtudeClasse',
            label: "Niveau d'étude/Classe",
            placeholder:
              "Veuillez entrer le niveau d'étude ou la classe de la fille",
            maxlength: 100,
            type: 'text',
            required: true,
          },
          {
            key: 'typeAppui',
            label: "Type d'appui",
            placeholder:
              "Veuillez choisir le type d'appui dont bénéficie la fille",
            type: 'radio-group',
            other: false,
            required: true,
            values: [
              {
                label: 'KITS',
                value: 'kits',
              },
              {
                label: 'TMC',
                value: 'tmc',
              },
              {
                label: 'Bourse',
                value: 'bourse',
              },
            ],
          },
        ],
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: 'Informations relatives au suivi scolaire',
            style: styles.sectionTitleStyle,
          },
          {
            key: 'frequenceCours',
            label: 'Régularité',
            placeholder: 'Veuillez préciser la régularité de la fille au cours',
            maxlength: 100,
            type: 'text',
            required: true,
          },
          {
            key: 'raisonAbsenceCoursFille',
            label: "Raison d'absence",
            placeholder:
              "Veuillez cocher la raison de l'absence au cours de la fille",
            type: 'radio-group',
            other: false,
            required: true,
            values: [
              {
                label: 'Sanitaire',
                value: 'sanitaire',
              },
              {
                label: 'Permission',
                value: 'permission',
              },
              {
                label: 'Travaux champêtres',
                value: 'travaux_champ_tres',
              },
              {
                label: 'Aléas Climatiques',
                value: 'al_as_climatiques',
              },
              {
                label: 'Grossesse',
                value: 'grossesse',
              },
              {
                label: 'Mariage',
                value: 'mariage',
              },
            ],
          },
          {
            key: 'periodeCompoFille',
            label: 'Période',
            placeholder:
              'Veuillez cochez la période relative aux évaluations/compositions de la fille',
            type: 'radio-group',
            other: false,
            required: true,
            values: [
              {
                label: 'S1',
                value: 's1',
              },
              {
                label: 'S2',
                value: 's2',
              },
              {
                label: 'E1',
                value: 'e1',
              },
              {
                label: 'E2',
                value: 'e2',
              },
              {
                label: 'E3',
                value: 'e3',
              },
              {
                label: 'Annuelle',
                value: 'annuelle',
              },
            ],
          },
          {
            key: 'observationMoyenneFille',
            label: 'Moyenne obtenue',
            placeholder:
              "Veuillez notifier la moyenne obtenue pour la composition/l'évaluation choisie plus haut",
            maxlength: 100,
            type: 'text',
            subtype: 'number',
            required: true,
          },
          {
            key: 'decisionFinaleEtablissementFille',
            label: 'Décision finale',
            placeholder:
              "Veuillez cochez la décision finale de l'établissement de la fille à l'issue de l'évaluation/composition",
            type: 'radio-group',
            other: true,
            required: true,
            values: [
              {
                label: 'Passe',
                value: 'passe',
              },
              {
                label: 'Abandon',
                value: 'abandon',
              },
              {
                label: 'Exclu',
                value: 'exclu',
              },
              {
                label: 'Abandon',
                value: 'abandon_1',
              },
            ],
          },
          {
            key: 'observationecart', //to check
            label: 'Observation (raison des écarts)',
            placeholder:
              "Veuillez faire des observation s'il y en a sur la raison es écarts entre les moyennes de la fille",
            type: 'text',
            subtype: 'textarea',
            required: true,
          },
        ],
        [
          {
            key: 'beneficiairePersonneAffiliers',
            type: 'header',
            subtype: 'h3',
            label: "Informations relatives à la personne affilier à l'enfant",
            style: styles.sectionTitleStyle,
          },
          {
            key: 'nom',
            label: 'Nom de la personne à contacter',
            placeholder: 'Veuillez entrer le nom de la personne à contacter',
            maxlength: 100,
            type: 'text',
            required: true,
          },
          {
            key: 'prenom',
            label: 'Prénoms de la personne à contacter',
            placeholder: 'Veuillez entrer le nom de la personne à contacter',
            maxlength: 100,
            type: 'text',
            required: true,
          },
          {
            key: 'contact',
            label: 'Contacts',
            placeholder:
              'Veuillez entrer le/les contacts de la personne à contacter',
            maxlength: 100,
            type: 'text',
            required: true,
          },
        ],
      ];
    },
  },
  {
    id: 4,
    title: 'LISTE DE PRESENCE DES PARTICIPANTS AUX FORMATIONS',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    get description() {
      return fichdescription[this.id];
    },
    get content() {
      return [
        [
          {
            key: 'formation',
            type: 'header',
            subtype: 'h3',
            label: 'Information sur formation',
            style: styles.sectionTitleStyle,
          },
          formationfield,
        ],
        [
          {
            key: 'collecteurtitle',
            type: 'header',
            subtype: 'h3',
            label: "Informations relatives à l'agent enregistreur",
            style: styles.sectionTitleStyle,
          },
          collectteurfield,
        ],
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: 'Informations relatives à la fille',
            style: styles.sectionTitleStyle,
          },
          ...depconarron,
          {
            key: 'quartier',
            type: 'text',
            required: true,
            label: 'Village',
            placeholder: 'Veuillez écrire le village de provenance de la fille',
            maxlength: 100,
          },
          {
            key: 'sexe',
            label: 'Sexe',
            placeholder: "Veuillez cochez le sexe de l'enfant enregistré",
            type: 'radio-group',
            other: false,
            required: true,
            values: [
              {
                label: 'Féminin',
                value: 'F',
                selected: true,
              },
              {
                label: 'Masculin',
                value: 'M',
              },
            ],
          },
          {
            key: 'age',
            label: "Age de l'enfant enrégistré",
            placeholder: "Veuillez entrer l'âge exacte de l'enfant enregistré",
            type: 'text',
            required: true,
            subtype: 'number',
            maxlength: 100,
          },
          {
            key: 'niveauEtudeClasse',
            label: "Niveau d'étude/Classe",
            placeholder:
              "Veuillez entrer le niveau d'étude ou la classe de la fille",
            maxlength: 100,
            type: 'text',
            required: true,
          },
          {
            key: 'cibleDirecte',
            label: 'Cible directe',
            placeholder:
              'Veuillez cochez si la cible est une cible directe ou pas',
            type: 'radio-group',
            other: false,
            required: true,
            values: [
              {
                label: 'Oui',
                value: true,
              },
              {
                label: 'Non',
                value: false,
              },
            ],
          },
          {
            key: 'handicape',
            label: 'Handicapé',
            placeholder:
              'Veuillez cocher si le bénéficiaire est handicapé ou non',
            type: 'radio-group',
            other: false,
            required: true,
            values: [
              {
                label: 'Oui',
                value: true,
              },
              {
                label: 'Non',
                value: false,
              },
            ],
          },
          {
            key: 'typehandicap', // to check
            label: 'Type de handicap',
            placeholder:
              "Veuillez choisir le handicap de l'adolescent/bénéficiaire",
            type: 'radio-group',
            other: true,
            required: true,
            values: [
              {
                label: 'Aveugle',
                value: 'oev',
              },
              {
                label: 'Sourd',
                value: 'placee',
              },
              {
                label: 'Muet',
                value: 'survivante_vbg',
              },
              {
                label: 'Sourd-Muet',
                value: 'fille___mere',
              },
              {
                label: 'Maladies invalidantes',
                value: 'handicapee',
              },
              {
                label: 'Mal voyant',
                value: 'mal_voyant',
              },
            ],
          },
          {
            key: 'contact',
            label: 'Contact',
            placeholder: 'Veuillez entrer le/les contacts du bénéficiaire',
            maxlength: 100,
            type: 'text',
            subtype: 'tel',
            required: true,
          },
          {
            key: 'presencemensuelle', // to check
            label: 'Nombre de jours de présence/XXXX mensuellement',
            placeholder:
              'Précisez le nombre de jours de présence de aux formations du bénéficiaire',
            type: 'text',
            subtype: 'number',
            required: true,
          },
        ],
      ];
    },
  },
  {
    id: 5,
    title: 'FICHE DE SUIVI A DOMICILE',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    get description() {
      return fichdescription[this.id];
    },
    get content() {
      return [
        [
          {
            key: 'collecteurtitle',
            type: 'header',
            subtype: 'h3',
            label:
              this.title + "\n-\nInformations relatives à l'agent enregistreur",
            style: styles.sectionTitleStyle,
          },
          collectteurfield,
        ],
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: 'Informations relatives à la fille',
            style: styles.sectionTitleStyle,
          },
          {
            key: 'nom',
            label: 'Nom de la fille',
            placeholder: 'Veuillez entrer le nom de la fille',
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'prenom',
            label: 'Prénoms de la fille',
            placeholder: 'Veuillez entrer le/les prénoms de la fille',
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'numM2EducMaster',
            label: 'N° Mll /EDUCMASTER',
            placeholder: 'Veuillez entrer le numéro EDUCMASTER de la fille',
            type: 'text',
            required: true,
          },
          {
            key: 'dateNaissance',
            type: 'date',
            label: 'Date de naissance de la fille',
            placeholder: 'Veuillez entrer la date de naissance de la fille',
            value: new Date().toISOString(),
            dateFormat: 'DD-MM-YYYY',
            required: true,
            disabled: false,
          },
          {
            key: 'lieuNaissance',
            label: 'Lieu de naissance',
            placeholder: 'Veuillez entrer le lieu de naissance de la fille',
            type: 'text',
            required: true,
            maxlength: 100,
          },
          ...depconarron,

          {
            key: 'quartier',
            type: 'text',
            required: true,
            label: 'Village/Quartier/Maison',
            placeholder:
              'Veuillez entrer le village/quartier/maison de provenance de la fille',
            maxlength: 100,
          },
          {
            key: 'etablissementUniversite',
            label: 'Etablissement/Université',
            placeholder:
              "Veuillez entrer l'établissement/université de la fille",
            maxlength: 100,
            type: 'text',
            required: true,
          },
          {
            key: 'niveauEtudeClasse',
            label: "Niveau d'étude/Classe",
            placeholder:
              "Veuillez entrer le niveau d'étude ou la classe de la fille",
            maxlength: 100,
            type: 'text',
            required: true,
          },
          {
            key: 'typeAppui',
            label: "Type d'appui",
            placeholder:
              "Veuillez choisir le type d'appui dont bénéficie la fille",
            type: 'radio-group',
            other: false,
            required: true,
            values: [
              {
                label: 'KITS',
                value: 'kits',
              },
              {
                label: 'TMC',
                value: 'tmc',
              },
              {
                label: 'Bourse',
                value: 'bourse',
              },
            ],
          },
        ],
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: 'Informations relatives aux critères de suivi',
            style: styles.sectionTitleStyle,
          },
          {
            key: 'connaissanceAppui',
            label: "Connaissance de l'appui",
            placeholder:
              "Veuillez indiquer la connaissance qu'a l'enfant des appuis du projet",
            type: 'radio-group',
            other: false,
            required: true,
            values: [
              {
                label: 'Oui',
                value: true,
              },
              {
                label: 'Non',
                value: false,
              },
            ],
          },
          {
            key: 'fratrieEnfant',
            label: 'Fratrie',
            placeholder: "Veuillez indiquer si l'enfant à des frères ou sœurs",
            type: 'radio-group',
            other: false,
            required: true,
            values: [
              {
                label: 'Oui',
                value: true,
              },
              {
                label: 'Non',
                value: false,
              },
            ],
          },
          {
            key: 'nombreFratrie', // to check
            label: 'Si Oui, précisez le nombre.',
            placeholder:
              "Si l'enfant a des frères et sœurs, veuillez préciser le nombre",
            type: 'text',
            subtype: 'number',
            required: true,
          },
          {
            key: 'typeFamille',
            label: 'Type de famille',
            placeholder:
              'Veuillez indiquer le type de famille est issue la fille',
            type: 'radio-group',
            other: false,
            required: true,
            values: [
              {
                label: 'Monogamique',
                value: 'monogamique',
              },
              {
                label: 'Polygmique',
                value: 'polygmique',
              },
            ],
          },
          {
            key: 'aRecuKit',
            label: "Complétude de l'appui (kits)",
            placeholder:
              "Veuillez indiquer la complétude (caractère complet du kit) de l'appui reçu par la fille",
            values: [
              {
                label: 'Oui',
                value: true,
              },
              {
                label: 'Non',
                value: false,
              },
            ],
          },
          {
            key: 'encadrementMaison',
            label: 'Encadrement',
            placeholder:
              'Veuillez cocher si oui ou non la fille est encadré à la maison',
            type: 'radio-group',
            other: false,
            required: true,
            values: [
              {
                label: 'Oui',
                value: true,
              },
              {
                label: 'Non',
                value: false,
              },
            ],
          },
          {
            key: 'implicationParentale',
            label:
              "Implication parentale (appréciation du temps d'étude par rapport aux travaux domestiques, suivi des résultats par les parents, mise en œuvre dialogue parent-enfant)",
            placeholder:
              "Veuillez indiquer le degré d'mplication des parents dans en tenant compte des acteurs énumérés",
            type: 'radio-group',
            other: false,
            required: true,
            values: [
              {
                label: 'Faible',
                value: 'faible',
              },
              {
                label: 'Moyenne',
                value: 'moyenne',
              },
              {
                label: 'Forte',
                value: 'forte',
              },
            ],
          },
          {
            key: 'appreciationEnvironnementScolaire',
            label: "Appréciation de l'environnement scolaire",
            placeholder:
              "Veuillez indiquer l'appréciation qu'a la fille de son environnement scolaire",
            type: 'radio-group',
            other: false,
            required: true,
            values: [
              {
                label: 'Bienveillant',
                value: 'bienveillant',
              },
              {
                label: 'Violent',
                value: 'violent',
              },
            ],
          },
        ],
        [
          {
            key: 'beneficiairePersonneAffiliers',
            type: 'header',
            subtype: 'h3',
            label: 'Informations relatives à la personne à contacter',
            style: styles.sectionTitleStyle,
          },
          {
            key: 'nom',
            label: 'Nom de la personne à contacter',
            placeholder: 'Veuillez entrer le nom de la personne à contacter',
            maxlength: 100,
            type: 'text',
            required: true,
          },
          {
            key: 'prenom',
            label: 'Prénoms de la personne à contacter',
            placeholder: 'Veuillez entrer le nom de la personne à contacter',
            maxlength: 100,
            type: 'text',
            required: true,
          },
          {
            key: 'contact',
            label: 'Contacts',
            placeholder:
              'Veuillez entrer le/les contacts de la personne à contacter',
            maxlength: 100,
            type: 'text',
            required: true,
          },
        ],
      ];
    },
  },
  {
    id: 6,
    title: "FICHE D'IDENTIFICATION DES FILLES (Maintien des filles à l'école)",
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    get description() {
      return fichdescription[this.id];
    },
    get content() {
      return [
        [
          {
            key: 'collecteurtitle',
            type: 'header',
            subtype: 'h3',
            label:
              this.title + "\n-\nInformations relatives à l'agent enregistreur",
            style: styles.sectionTitleStyle,
          },
          collectteurfield,
        ],
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: 'Informations relatives à la fille',
            style: styles.sectionTitleStyle,
          },
          {
            key: 'numM2EducMaster',
            label: 'N° Mll /EDUCMASTER',
            placeholder: 'Veuillez entrer le numéro EDUCMASTER de la fille',
            type: 'text',
            required: true,
            subtype: 'tel',
            maxlength: 100,
            value: 'edumas',
          },
          {
            key: 'nom',
            label: 'Nom de la fille',
            placeholder: 'Veuillez entrer le nom de la fille',
            type: 'text',
            required: true,
            maxlength: 100,
            value: 'nomfi',
          },
          {
            key: 'prenom',
            label: 'Prénoms de la fille',
            placeholder: 'Veuillez entrer le/les prénoms de la fille',
            type: 'text',
            required: true,
            maxlength: 100,
            value: 'prenomfi',
          },
          {
            key: 'dateNaissance',
            type: 'date',
            label: 'Date de naissance de la fille',
            placeholder: 'Veuillez entrer la date de naissance de la fille',
            value: new Date().toISOString(),
            dateFormat: 'DD-MM-YYYY',
            required: true,
            disabled: false,
          },
          {
            key: 'lieuNaissance',
            label: 'Lieu de naissance',
            placeholder: 'Veuillez entrer le lieu de naissance de la fille',
            type: 'text',
            required: true,
            maxlength: 100,
            value: 'lieufi',
          },
          ...depconarron,
          {
            key: 'quartier',
            type: 'text',
            required: true,
            label: 'Village/Quartier/Maison',
            placeholder:
              'Veuillez entrer le village/quartier/maison de provenance de la fille',
            maxlength: 100,
            value: 'qutieri',
          },
          {
            key: 'etablissementUniversite',
            label: 'Etablissement/Université',
            placeholder:
              "Veuillez entrer l'établissement/université de la fille",
            maxlength: 100,
            type: 'text',
            required: true,
            value: 'etablifill',
          },
          {
            key: 'niveauEtudeClasse',
            label: "Niveau d'étude/Classe",
            placeholder:
              "Veuillez entrer le niveau d'étude ou la classe de la fille",
            maxlength: 100,
            type: 'text',
            required: true,
            value: 'niclasse',
          },
          {
            key: 'typeAppui',
            label: "Type d'appui",
            placeholder:
              "Veuillez choisir le type d'appui dont bénéficie la fille",
            type: 'radio-group',
            other: false,
            required: true,
            value: 'kits',
            values: [
              {
                label: 'KITS',
                value: 'kits',
              },
              {
                label: 'TMC',
                value: 'tmc',
              },
              {
                label: 'Bourse',
                value: 'bourse',
              },
            ],
          },
          {
            key: 'critereVulnerabilite',
            required: true,
            label: 'Critères de vulnérabilité',
            placeholder:
              'Veuillez choisir le critère de vulnérabilité de la fille',
            type: 'checkbox-group',
            other: true,
            value: {regular: ['oev']},
            values: critereVulnerabilites,
          },
        ],
        [
          {
            key: 'beneficiairePersonneAffiliers',
            type: 'header',
            subtype: 'h3',
            label: 'Informations relatives à la personne à contacter',
            style: styles.sectionTitleStyle,
          },
          {
            key: 'nom',
            label: 'Nom de la personne à contacter',
            placeholder: 'Veuillez entrer le nom de la personne à contacter',
            maxlength: 100,
            type: 'text',
            required: true,
            value: 'nompecon',
          },
          {
            key: 'prenom',
            label: 'Prénoms de la personne à contacter',
            placeholder:
              'Veuillez entrer le/les prénoms de la personne à contacter',
            maxlength: 100,
            type: 'text',
            required: true,
            value: 'prenompecon',
          },
          {
            key: 'contact',
            label: 'Contacts',
            placeholder:
              'Veuillez entrer le/les contacts de la personne à contacter',
            type: 'text',
            required: true,
            value: 'concon',
          },
        ],
      ];
    },
  },
  {
    id: 7,
    title: 'FICHE DES FILLES SCOLARISEES',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    get description() {
      return fichdescription[this.id];
    },
    get content() {
      return [
        [
          {
            key: 'collecteurtitle',
            type: 'header',
            subtype: 'h3',
            label: this.title + "\n-\nInformations sur l'agent collecteur",
            style: styles.sectionTitleStyle,
          },
          collectteurfield,
        ],
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: 'Informations générales sur la fille',
            style: styles.sectionTitleStyle,
          },
          ...depconarron,

          {
            key: 'residence',
            label: 'Ville/Village de résidence',
            placeholder:
              'Veillez renseigner le Village ou la ville de la fille',
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'etablissementUniversite',
            label: 'Etablissement fréquenté par la fille',
            placeholder:
              "Veillez inscrire le nom de l'établissement que fréquente la fille",
            maxlength: 100,
            type: 'text',
            required: true,
          },
          {
            key: 'nom',
            label: "Nom de l'enfant enregistré",
            placeholder: "Veuillez écrire le nom de l'enfant enregistré",
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'prenom',
            label: "Prénoms de l'enfant enregistré",
            placeholder:
              "Veuillez écrire le/les prénoms de l'enfant enregistré",
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'age',
            label: 'Âge de la fille',
            placeholder: "Veillez entrer l'âge exacte de la fille",
            type: 'text',
            required: true,
            subtype: 'number',
            maxlength: 100,
          },
          {
            key: 'groupeFille',
            label: 'Groupe',
            placeholder: 'Veillez indiquer le groupe de la fille',
            maxlength: 100,
            type: 'text',
          },
          {
            key: 'niveauEtude',
            label: "Niveau d'étude de la fille",
            placeholder: "Veillez choisir le niveau d'étude de la fille",
            type: 'radio-group',
            other: false,
            dependent: 'cyclefille',
            required: true,
            values: niveauEtude,
          },
          {
            key: 'cyclefille',
            label: 'Cycle',
            placeholder: 'Veillez choisir le cycle',
            type: 'radio-group',
            value: '',
            dependencie: ['niveauEtude', 'niveau'],
            dependent: 'classefille',
            required: true,
            values: cycles,
          },
          {
            key: 'classefille',
            label: 'Classe de la fille',
            placeholder: 'Veillez choisir la classe de la fille',
            type: 'radio-group',
            other: false,
            required: true,
            dependencie: ['cyclefille', 'cycle'],
            dependent: 'seriefille',
            values: classes,
          },
          {
            key: 'seriefille',
            label: 'Série de la fille',
            placeholder: 'Veillez choisir la série',
            type: 'radio-group',
            other: false,
            dependencie: ['cyclefille', 'cycle'],
            value: '',
            values: series,
          },
          {
            key: 'urlPhotoFille',
            label: 'Photo de la fille',
            placeholder:
              "Demandez l'autorisation de la fille avant de la photographier",
            type: 'image',
          },
        ],
      ];
    },
  },
  {
    id: 8,
    title: 'FICHE DE SUIVI DE LA PERFORMANCE SCOLAIRE DE LA FILLE',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    get description() {
      return fichdescription[this.id];
    },
    get content() {
      return [
        [
          {
            key: 'collecteurtitle',
            type: 'header',
            subtype: 'h3',
            label: this.title + "\n-\nInformations sur l'agent collecteur ",
            style: styles.sectionTitleStyle,
          },
          collectteurfield,
        ],
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: 'Informations générales sur la fille',
            style: styles.sectionTitleStyle,
          },
          ...depconarron,

          {
            key: 'etablissementUniversite',
            label: 'Etablissement fréquenté par la fille',
            placeholder:
              "Veillez inscrire le nom de l'établissement que fréquente la fille",
            maxlength: 100,
            type: 'text',
            required: true,
          },

          {
            key: 'nom',
            label: "Nom de l'enfant enregistré",
            placeholder: "Veuillez écrire le nom de l'enfant enregistré",
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'prenom',
            label: "Prénoms de l'enfant enregistré",
            placeholder:
              "Veuillez écrire le/les prénoms de l'enfant enregistré",
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'age',
            label: 'Âge de la fille',
            placeholder: "Veillez entrer l'âge exacte de la fille",
            type: 'text',
            required: true,
            subtype: 'number',
            maxlength: 100,
          },
          {
            key: 'niveauEtude',
            label: "Niveau d'étude de la fille",
            placeholder: "Veillez choisir le niveau d'étude de la fille",
            type: 'radio-group',
            other: false,
            dependent: 'cyclefille',
            required: true,
            values: niveauEtude,
          },
          {
            key: 'cyclefille',
            label: 'Cycle',
            placeholder: 'Veillez choisir le cycle',
            type: 'radio-group',
            value: '',
            dependencie: ['niveauEtude', 'niveau'],
            dependent: 'classefille',
            required: true,
            values: cycles,
          },
          {
            key: 'classefille',
            label: 'Classe de la fille',
            placeholder: 'Veillez choisir la classe de la fille',
            type: 'radio-group',
            other: false,
            required: true,
            dependencie: ['cyclefille', 'cycle'],
            dependent: 'seriefille',
            values: classes,
          },
          {
            key: 'seriefille',
            label: 'Série de la fille',
            placeholder: 'Veillez choisir la série',
            type: 'radio-group',
            other: false,
            dependencie: ['cyclefille', 'cycle'],
            value: '',
            values: series,
          },
        ],
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: 'Performances scolaires de la fille',
            style: styles.sectionTitleStyle,
          },
          {
            key: 'periodeCompoFille',
            label: 'Période',
            placeholder: "Période de l'année scolaire",
            type: 'radio-group',
            other: false,
            values: periodescolaire,
          },
          {
            key: 'observationMoyenneFille',
            label: 'Inscrire la moyenne obtenue par la fille',
            placeholder: 'En fonction de la période',
            type: 'text',
            subtype: 'number',
            maxlength: 100,
          },
          {
            key: 'decisionFinaleEtablissementFille',
            label: 'Décision finale',
            placeholder:
              "Veuillez cochez la décision finale de l'établissement de la fille à l'issue de l'évaluation/composition",
            type: 'radio-group',
            other: true,
            required: true,
            values: decisionFinaleEtablissement,
          },
          {
            key: 'precision',
            label: 'Précision',
            placeholder:
              "Veuillez faire des observation s'il y en a sur la raison es écarts entre les moyennes de la fille",
            type: 'text',
            subtype: 'textarea',
          },
        ],
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: 'Performances scolaires de la fille',
            style: styles.sectionTitleStyle,
          },
          {
            key: 'periodeCompoFille',
            label: 'Période',
            placeholder: 'En fonction du la période',
            type: 'radio-group',
            other: false,
            values: [
              {
                label: 'Première composition',
                value: 'premi_re_composition',
              },
              {
                label: 'Deuxième composition',
                value: 'deuxi_me_composition',
              },
              {
                label: 'Troisième composition',
                value: 'troisi_me_composition',
              },
              {
                label: 'Composition de passage',
                value: 'composition_de_passage',
              },
            ],
          },
          {
            key: 'observationMoyenneFille',
            label: 'Inscrire la note obtenue par la fille',
            placeholder: 'En fonction de la composition',
            type: 'text',
            subtype: 'number',
            maxlength: 100,
          },
          {
            key: 'decisionFinaleEtablissementFille',
            label: 'Décision finale',
            placeholder:
              "Veuillez cochez la décision finale de l'établissement de la fille à l'issue de l'évaluation/composition",
            type: 'radio-group',
            other: true,
            required: true,
            values: decisionFinaleEtablissement,
          },
          {
            key: 'precision',
            label: 'Précision',
            placeholder:
              "Veuillez faire des observation s'il y en a sur la raison es écarts entre les moyennes de la fille",
            type: 'text',
            subtype: 'textarea',
          },
        ],
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: 'Probables facteurs liés à la performance de la fille ',
            style: styles.sectionTitleStyle,
          },
          {
            key: 'encadrementMaison',
            label: 'Encadrement',
            placeholder: 'La fille est-elle encadrée à la maison ?',
            type: 'radio-group',
            other: false,
            subtype: 'number',
            required: true,
            values: [
              {
                label: 'Oui',
                value: true,
              },
              {
                label: 'Non',
                value: false,
              },
            ],
          },
          {
            key: 'encadreurNom',
            label: "Si Oui, Renseignez le Nom et les Prénoms de l'encadreur",
            placeholder: '',
            type: 'text',
            subtype: 'number',
            maxlength: 100,
          },
          {
            key: 'frequenceCours',
            label: 'Fréquence au cours de la fille',
            placeholder: '',
            type: 'radio-group',
            other: false,
            required: true,
            values: frequenceCours,
          },
          {
            key: 'raisonAbsenceCoursFille',
            label: "Raison d'abscence",
            placeholder: '',
            type: 'text',
            subtype: 'textarea',
            required: true,
          },
          {
            key: 'raisonAbandonCoursFille',
            label: "Raison d'abandon",
            placeholder: '',
            type: 'text',
            subtype: 'textarea',
          },
        ],
      ];
    },
  },
  {
    id: 9,
    title: 'FICHE DE SUIVI DES KITS',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    get description() {
      return fichdescription[this.id];
    },
    get content() {
      return [
        [
          {
            key: 'collecteurtitle',
            type: 'header',
            subtype: 'h3',
            label: this.title + "\n-\nInformations sur l'agent collecteur",
            style: styles.sectionTitleStyle,
          },
          collectteurfield,
        ],
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: 'Informations générales sur la fille',
            style: styles.sectionTitleStyle,
          },
          ...depconarron,

          {
            key: 'etablissementUniversite',
            label: 'Etablissement fréquenté par la fille',
            placeholder:
              "Veillez inscrire le nom de l'établissement que fréquente la fille",
            maxlength: 100,
            type: 'text',
            required: true,
          },
          {
            key: 'nom',
            label: 'Nom de la fille',
            placeholder: "Veuillez écrire le nom de l'enfant enregistré",
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'prenom',
            label: 'Prénoms de la fille',
            placeholder:
              "Veuillez écrire le/les prénoms de l'enfant enregistré",
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'age',
            label: 'Âge de la fille',
            placeholder: "Veillez entrer l'âge exacte de la fille",
            type: 'text',
            required: true,
            subtype: 'number',
            maxlength: 100,
          },
          {
            key: 'niveauEtude',
            label: "Niveau d'étude de la fille",
            placeholder: "Veillez choisir le niveau d'étude de la fille",
            type: 'radio-group',
            other: false,
            dependent: 'cyclefille',
            required: true,
            values: niveauEtude,
          },
          {
            key: 'cyclefille',
            label: 'Cycle',
            placeholder: 'Veillez choisir le cycle',
            type: 'radio-group',
            value: '',
            dependencie: ['niveauEtude', 'niveau'],
            dependent: 'classefille',
            required: true,
            values: cycles,
          },
          {
            key: 'classefille',
            label: 'Classe de la fille',
            placeholder: 'Veillez choisir la classe de la fille',
            type: 'radio-group',
            other: false,
            required: true,
            dependencie: ['cyclefille', 'cycle'],
            dependent: 'seriefille',
            values: classes,
          },
          {
            key: 'seriefille',
            label: 'Série de la fille',
            placeholder: 'Veillez choisir la série',
            type: 'radio-group',
            other: false,
            dependencie: ['cyclefille', 'cycle'],
            value: '',
            values: series,
          },
        ],
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: 'Performances scolaires de la fille',
            style: styles.sectionTitleStyle,
          },
          {
            key: 'periodeCompoFille',
            label: 'Période',
            placeholder: "Période de l'année scolaire",
            type: 'radio-group',
            other: false,
            values: periodescolaire,
          },
          {
            key: 'observationMoyenneFille',
            label: 'Inscrire la moyenne obtenue par la fille',
            placeholder: 'En fonction de la période',
            type: 'text',
            subtype: 'number',
            maxlength: 100,
          },
          {
            key: 'decisionFinaleEtablissementFille',
            label: 'Décision finale',
            placeholder:
              "Veuillez cochez la décision finale de l'établissement de la fille à l'issue de l'évaluation/composition",
            type: 'radio-group',
            other: true,
            required: true,
            values: decisionFinaleEtablissement,
          },
          {
            key: 'precision',
            label: 'Précision',
            placeholder:
              "Veuillez faire des observation s'il y en a sur la raison es écarts entre les moyennes de la fille",
            type: 'text',
            subtype: 'textarea',
          },
        ],
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: 'Performances scolaires de la fille',
            style: styles.sectionTitleStyle,
          },
          {
            key: 'periodeCompoFille',
            label: 'Période',
            placeholder: 'En fonction du la période',
            type: 'radio-group',
            other: false,
            values: [
              {
                label: 'Première composition',
                value: 'premi_re_composition',
              },
              {
                label: 'Deuxième composition',
                value: 'deuxi_me_composition',
              },
              {
                label: 'Troisième composition',
                value: 'troisi_me_composition',
              },
              {
                label: 'Composition de passage',
                value: 'composition_de_passage',
              },
            ],
          },
          {
            key: 'observationMoyenneFille',
            label: 'Inscrire la note obtenue par la fille',
            placeholder: 'En fonction de la composition',
            type: 'text',
            subtype: 'number',
            maxlength: 100,
          },
          {
            key: 'decisionFinaleEtablissementFille',
            label: 'Décision finale',
            placeholder:
              "Veuillez cochez la décision finale de l'établissement de la fille à l'issue de l'évaluation/composition",
            type: 'radio-group',
            other: true,
            required: true,
            values: decisionFinaleEtablissement,
          },
          {
            key: 'precision',
            label: 'Précision',
            placeholder:
              "Veuillez faire des observation s'il y en a sur la raison es écarts entre les moyennes de la fille",
            type: 'text',
            subtype: 'textarea',
          },
        ],
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: 'Probables facteurs liés à la performance de la fille ',
            style: styles.sectionTitleStyle,
          },
          {
            key: 'aRecuKit',
            label: 'La fille a t-elle reçue de kit? ',
            placeholder: '',
            type: 'radio-group',
            other: false,
            values: [
              {
                label: 'Oui',
                value: true,
              },
              {
                label: 'Non',
                value: false,
              },
            ],
          },
          {
            key: 'nbreKitRecu',
            label: 'combien de kits la fille a t-elle reçu',
            placeholder: '',
            subtype: 'number',
          },
        ],
      ];
    },
  },
  {
    id: 10,
    title: 'LISTE DE PRESENCE DES PARTICIPANTS',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    get description() {
      return fichdescription[this.id];
    },
    get content() {
      return [
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: this.title,
            style: styles.sectionTitleStyle,
          },
          ...depconarron,

          {
            key: 'quartier',
            type: 'text',
            required: true,
            label: 'Village de provenance',
            placeholder:
              'Veuillez entrer le village de provenance du participant',
            maxlength: 100,
          },
          {
            key: 'nom',
            label: 'Nom de la fille',
            placeholder: "Veuillez écrire le nom de l'enfant enregistré",
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'prenom',
            label: 'Prénoms de la fille',
            placeholder:
              "Veuillez écrire le/les prénoms de l'enfant enregistré",
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'niveauEtude',
            label: "Niveau d'étude de la fille",
            placeholder: "Veillez choisir le niveau d'étude de la fille",
            type: 'radio-group',
            other: false,
            dependent: 'cyclefille',
            required: true,
            values: niveauEtude,
          },
          {
            key: 'age',
            label: 'Âge de la fille',
            placeholder: "Veillez entrer l'âge exacte de la fille",
            type: 'text',
            required: true,
            subtype: 'number',
            maxlength: 100,
          },
        ],
        [
          {
            key: 'collecteurtitle',
            type: 'header',
            subtype: 'h3',
            label: "Informations sur l'agent collecteur",
            style: styles.sectionTitleStyle,
          },
          collectteurfield,
        ],
        [
          {
            key: 'formation',
            type: 'header',
            subtype: 'h3',
            label: 'Information sur formation',
            style: styles.sectionTitleStyle,
          },
          formationfield,
        ],
      ];
    },
  },
  {
    id: 11,
    title:
      'FICHE DE COLLECTE DE DONNEES SUR LES FORMATIONS DANS LES ESPACES SÛRS',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    get description() {
      return fichdescription[this.id];
    },
    get content() {
      return [
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: this.title,
            style: styles.sectionTitleStyle,
          },
          ...depconarron,

          {
            key: 'quartier',
            type: 'text',
            required: true,
            label: 'Village',
            placeholder: 'Veuillez indiquer le village ',
            maxlength: 100,
          },
          {
            key: 'nbreFilleFreqClub',
            label: 'Nombre de filles fréquentant le club ',
            placeholder:
              'Veuillez entrer le nombre de fille fréquentant le club',
            type: 'text',
            required: true,
            subtype: 'number',
            maxlength: 100,
          },
          {
            key: 'nom',
            label: 'Nom de la fille',
            placeholder: "Veuillez écrire le nom de l'enfant enregistré",
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'prenom',
            label: 'Prénoms de la fille',
            placeholder:
              "Veuillez écrire le/les prénoms de l'enfant enregistré",
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'nomMentor',
            label: 'Nom du mentor',
            placeholder: 'Veuillez entrer le nom  du mentor',
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'prenomMentor',
            label: 'Prénoms du mentor',
            placeholder: 'Veuillez entrer le/les prénoms du mentor',
            type: 'text',
            required: true,
            maxlength: 100,
          },
        ],
        [
          {
            key: 'collecteurtitle',
            type: 'header',
            subtype: 'h3',
            label: "Informations sur l'agent collecteur",
            style: styles.sectionTitleStyle,
          },
          collectteurfield,
        ],
        [
          {
            key: 'formation',
            type: 'header',
            subtype: 'h3',
            label: 'Information sur formation',
            style: styles.sectionTitleStyle,
          },
          formationfield,
        ],
      ];
    },
  },
  {
    id: 12,
    title: 'FICHE DE SUIVI DES ACTIVITES DES MARRAINES OU « DEUXIEMES MAMANS »',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    get description() {
      return fichdescription[this.id];
    },
    get content() {
      return [
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: this.title,
            style: styles.sectionTitleStyle,
          },
          {
            key: 'pays',
            type: 'text',
            required: true,
            label: 'Pays',
            placeholder:
              'Veuillez écrire le pays dans lequel intervient le projet',
            maxlength: 100,
          },
          ...depconarron,

          {
            key: 'nomMentor',
            label: 'Nom du mentor',
            placeholder: 'Veuillez entrer le nom  du mentor',
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'prenomMentor',
            label: 'Prénoms du mentor',
            placeholder: 'Veuillez entrer le/les prénoms du mentor',
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'dateActivite',
            type: 'date',
            label: 'Date de l’activité',
            placeholder: "Veuillez entrer la date de déroulement de l'activité",
            value: new Date().toISOString(),
            dateFormat: 'DD-MM-YYYY',
            required: true,
            disabled: false,
          },
          {
            key: 'dureeActivite',
            label: 'Durée de l’activité',
            placeholder: "Veuillez entrer la durée de l'activité",
            type: 'text',
            required: true,
            subtype: 'number',
            maxlength: 100,
          },
          {
            key: 'quartier',
            type: 'text',
            required: true,
            label: 'Lieu (Village/Quartier)',
            placeholder:
              'Veuillez entrer le village/quartier de ville de provenance des bénéficiaires (Garçons et Filles)',
            maxlength: 100,
          },
          {
            key: 'nbreFemmeFilleFormer',
            label: 'Nombre de Femmes/Filles formées',
            placeholder:
              'Veuillez entrez le nombre de femmes/filles ayant été formées',
            type: 'text',
            required: true,
            subtype: 'number',
            maxlength: 100,
          },
          {
            key: 'nbreHommeGarconFormer',
            label: "Nombre d'hommes/garçons formés",
            placeholder:
              "Veuillez entrez le nombre d'hommes/garçons ayant été formés",
            type: 'text',
            required: true,
            subtype: 'number',
            maxlength: 100,
          },
          {
            key: 'nbreTotalFormer',
            label: 'Nombre total de personnes formées',
            placeholder:
              "Veuillez entrez le nombre total d'hommes/garçons et Femmes/Filles formés",
            type: 'text',
            required: true,
            subtype: 'number',
            maxlength: 100,
          },
          {
            key: 'Observations',
            label: 'Observations',
            placeholder: "Veuillez écrire les observations s'il y en a",
            type: 'textarea',
            required: true,
          },
        ],
        [
          {
            key: 'collecteurtitle',
            type: 'header',
            subtype: 'h3',
            label: "Informations sur l'agent collecteur",
            style: styles.sectionTitleStyle,
          },
          collectteurfield,
        ],
        [
          {
            key: 'formation',
            type: 'header',
            subtype: 'h3',
            label: 'Information sur formation',
            style: styles.sectionTitleStyle,
          },
          formationfield,
        ],
      ];
    },
  },
  {
    id: 13,
    title: 'FICHE SYNTHESE DES FORMATIONS',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    get description() {
      return fichdescription[this.id];
    },
    get content() {
      return [
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: this.title,
            style: styles.sectionTitleStyle,
          },
          ...depconarron,
        ],
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: 'Nombre de personnes de touchées',
            style: styles.sectionTitleStyle,
          },
          {
            key: 'nbreFemmeFilleFormer',
            label: 'Nombre de femmes touchées',
            placeholder:
              'Veillez indiquer le nombre de personnes de sexe Féminin ayant participé à la formation',
            type: 'text',
            required: true,
            subtype: 'number',
            value: 0,
            computation: ['nbreTotalFormer', 'add'],
          },
          {
            key: 'nbreHommeGarconFormer',
            label: "Nombre d'hommes touchés",
            placeholder:
              'Veillez indiquer le nombre de personnes de sexe Masculin ayant participé à la formation',
            type: 'text',
            required: true,
            subtype: 'number',
            value: 0,
            computation: ['nbreTotalFormer', 'add'],
          },
          {
            key: 'nbreTotalFormer',
            label: 'Nombre total de personnes touchées est: ',
            type: 'text',
            required: true,
            disabled: true,
            subtype: 'number',
            value: 0,
            computated: ['nbreTotalFormer'],
          },
        ],
        [
          {
            key: 'collecteurtitle',
            type: 'header',
            subtype: 'h3',
            label: "Informations sur l'agent collecteur",
            style: styles.sectionTitleStyle,
          },
          collectteurfield,
        ],
        [
          {
            key: 'formation',
            type: 'header',
            subtype: 'h3',
            label: 'Information sur formation',
            style: styles.sectionTitleStyle,
          },
          formationfield,
        ],
      ];
    },
  },
  {
    id: 14,
    title: 'Fiche de suivi des activités communautaires des Leaders Religieux',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    get description() {
      return fichdescription[this.id];
    },
    get content() {
      return [
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: this.title,
            style: styles.sectionTitleStyle,
          },
          ...depconarron,
          {
            key: 'nomLeaderReligieux',
            label: 'Nom du Leader Religieux',
            placeholder: '',
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'prenomLeaderReligieux',
            label: 'Prénom du Leader Religieux',
            placeholder: '',
            type: 'text',
            required: true,
            maxlength: 100,
          },
          {
            key: 'confessionLeaderReligieux',
            label: 'Confession Religieuse',
            placeholder: '',
            type: 'radio-group',
            other: false,
            required: true,
            values: confessionReligieux,
          },
          {
            key: 'titreLeaderReligieux',
            label: "Titre dans l'organisation",
            placeholder: '',
            maxlength: 100,
            type: 'text',
            required: true,
          },
          {
            key: 'quartier',
            type: 'text',
            required: true,
            label: 'Lieu (Village/Quartier)',
            placeholder:
              'Veuillez entrer le village/quartier de ville de provenance des bénéficiaires (Garçons et Filles)',
            maxlength: 100,
          },
          {
            key: 'dureeActivite',
            label: "Durée de l'activité (en heures)",
            placeholder: "Veuillez entrer la durée de l'activité",
            type: 'text',
            required: true,
            subtype: 'number',
            maxlength: 100,
          },
          {
            key: 'lieuActivite',
            type: 'text',
            required: true,
            label: "Lieu de l'activité",
            placeholder:
              "Préciser le nom du village ou quartier de ville où s'est déroulée l'activité",
            maxlength: 100,
          },
          {
            key: 'nbreFemmeFilleFormer',
            label: 'Nombre de femmes touchées',
            placeholder:
              'Veuillez préciser le nombre de femmes qui ont participé à la sensibilisation sur la thématique',
            type: 'text',
            required: true,
            subtype: 'number',
            value: 0,
            computation: ['nbreTotalFormer', 'add'],
          },
          {
            key: 'nbreHommeGarconFormer',
            label: "Nombre d'hommes touchés",
            placeholder:
              "Veuillez préciser le nombre d'hommes qui ont participé à la sensibilisation sur la thématique",
            type: 'text',
            required: true,
            subtype: 'number',
            value: 0,
            computation: ['nbreTotalFormer', 'add'],
          },
          {
            key: 'lieuRealisationActivite',
            type: 'text',
            required: true,
            label: "Lieu de réalisation de l'activité",
            placeholder:
              "Préciser le nom du village ou quartier de ville où s'est déroulée l'activité",
            maxlength: 100,
          },
        ],
        [
          {
            key: 'beneficiaire',
            type: 'header',
            subtype: 'h3',
            label: 'Nombre de personnes de touchées',
            style: styles.sectionTitleStyle,
          },
          {
            key: 'nbreFemmeFilleFormer',
            label: 'Nombre de femmes touchées',
            placeholder:
              'Veillez indiquer le nombre de personnes de sexe Féminin ayant participé à la formation',
            type: 'text',
            required: true,
            subtype: 'number',
            value: 0,
            computation: ['nbreTotalFormer', 'add'],
          },
          {
            key: 'nbreHommeGarconFormer',
            label: "Nombre d'hommes touchés",
            placeholder:
              'Veillez indiquer le nombre de personnes de sexe Masculin ayant participé à la formation',
            type: 'text',
            required: true,
            subtype: 'number',
            value: 0,
            computation: ['nbreTotalFormer', 'add'],
          },
          {
            key: 'nbreTotalFormer',
            label: 'Nombre total de personnes touchées est: ',
            type: 'text',
            required: true,
            disabled: true,
            subtype: 'number',
            value: 0,
            computated: ['nbreTotalFormer'],
          },
        ],
        [
          {
            key: 'collecteurtitle',
            type: 'header',
            subtype: 'h3',
            label: "Informations sur l'agent collecteur",
            style: styles.sectionTitleStyle,
          },
          collectteurfield,
        ],
        [
          {
            key: 'formation',
            type: 'header',
            subtype: 'h3',
            label: 'Information sur formation',
            style: styles.sectionTitleStyle,
          },
          formationfield,
        ],
      ];
    },
  },
];
