import {generateRandom} from '../../Helpers/Utils';
import {
  arrondissements,
  communes,
  departements,
  descriptions,
  icons,
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
};
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
    description: descriptions[generateRandom(descriptions.length)],
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
          {
            key: 'quartier',
            type: 'text',
            required: true,
            label: 'Village',
            placeholder: 'Veuillez écrire le village de provenance de la fille',
            maxlength: 30,
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
            maxlength: 30,
          },
          {
            key: 'nom',
            label: "Nom de l'enfant enregistré",
            placeholder: "Veuillez écrire le nom de l'enfant enregistré",
            type: 'text',
            required: true,
            maxlength: 30,
          },
          {
            key: 'prenom',
            label: "Prénoms de l'enfant enregistré",
            placeholder:
              "Veuillez écrire le/les prénoms de l'enfant enregistré",
            type: 'text',
            required: true,
            maxlength: 30,
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
            maxlength: 30,
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
            maxlength: 30,
          },
          {
            key: 'residence',
            label: 'Quartier de ville/ Village de résidence',
            placeholder:
              "Veuillez entrer le village/village de résidence de l'enfant à enregistré",
            type: 'text',
            required: true,
            maxlength: 30,
          },
          {
            key: 'critereVulnerabilite',
            required: true,
            label: 'Critères de vulnérabilité',
            placeholder:
              'Veuillez choisir le critère de vulnérabilité de la fille',
            type: 'checkbox-group',
            other: true,
            values: [
              {
                label: 'OEV',
                value: 'oev',
              },
              {
                label: 'PLACEE',
                value: 'placee',
              },
              {
                label: 'SURVIVANTE VBG',
                value: 'survivante_vbg',
              },
              {
                label: 'FILLE - MERE',
                value: 'fille___mere',
              },
              {
                label: 'HANDICAPEE',
                value: 'handicapee',
              },
            ],
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
    description: descriptions[generateRandom(descriptions.length)],
    get content() {
      return [
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
          {
            key: 'nom',
            label: 'Nom de la fille',
            placeholder: 'Veuillez entrer le nom de la fille',
            type: 'text',
            required: true,
            maxlength: 30,
          },
          {
            key: 'prenom',
            label: 'Prénoms de la fille',
            placeholder: 'Veuillez entrer le/les prénoms de la fille',
            type: 'text',
            required: true,
            maxlength: 30,
          },

          {
            key: 'numM2EducMaster',
            label: 'N° Mll /EDUCMASTER',
            placeholder: 'Veuillez entrer le numéro EDUCMASTER de la fille',
            type: 'text',
            required: true,
            subtype: 'tel',
            maxlength: 30,
          },
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
          {
            key: 'quartier',
            type: 'text',
            required: true,
            label: 'Village/Quartier/Maison',
            placeholder:
              'Veuillez entrer le village/quartier/maison de provenance de la fille',
            maxlength: 30,
          },
          {
            key: 'etablissementUniversite',
            label: 'Etablissement/Université',
            placeholder:
              "Veuillez entrer l'établissement/université de la fille",
            maxlength: 30,
            type: 'text',
            required: true,
          },
          {
            key: 'niveauEtudeClasse',
            label: "Niveau d'étude/Classe",
            placeholder:
              "Veuillez entrer le niveau d'étude ou la classe de la fille",
            maxlength: 30,
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
            values: [
              {
                label: 'OEV',
                value: 'oev',
              },
              {
                label: 'PLACEE',
                value: 'placee',
              },
              {
                label: 'SURVIVANTE VBG',
                value: 'survivante_vbg',
              },
              {
                label: 'FILLE - MERE',
                value: 'fille___mere',
              },
              {
                label: 'HANDICAPEE',
                value: 'handicapee',
              },
            ],
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
            maxlength: 30,
            type: 'text',
            required: true,
          },
          {
            key: 'prenom',
            label: 'Prénoms de la personne à contacter',
            placeholder: 'Veuillez entrer le nom de la personne à contacter',
            maxlength: 30,
            type: 'text',
            required: true,
          },
          {
            key: 'affinite',
            label: 'Affinité',
            placeholder:
              'Veuillez entrer le lien existant entre la fille et la personne a contacté',
            maxlength: 30,
            type: 'text',
            required: true,
          },
          {
            key: 'contact',
            label: 'Contacts',
            placeholder:
              'Veuillez entrer le/les contacts de la personne à contacter',
            maxlength: 30,
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
    description: descriptions[generateRandom(descriptions.length)],
    get content() {
      return [
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
            maxlength: 30,
          },
          {
            key: 'prenom',
            label: 'Prénoms de la fille',
            placeholder: 'Veuillez entrer le/les prénoms de la fille',
            type: 'text',
            required: true,
            maxlength: 30,
          },
          {
            key: 'dateNaissance',
            type: 'date',
            label: 'Date de naissance de la fillle',
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
            maxlength: 30,
          },
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
          {
            key: 'quartier',
            type: 'text',
            required: true,
            label: 'Village/Quartier/Maison',
            placeholder:
              'Veuillez entrer le village/quartier/maison de provenance de la fille',
            maxlength: 30,
          },
          {
            key: 'niveauEtudeClasse',
            label: "Niveau d'étude/Classe",
            placeholder:
              "Veuillez entrer le niveau d'étude ou la classe de la fille",
            maxlength: 30,
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
            maxlength: 30,
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
            maxlength: 30,
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
              {
                label: 'Autres',
                value: 'autres',
              },
            ],
          },
          {
            key: 'observationecart', //to check
            label: 'Observation (raison des écarts)',
            placeholder:
              "Veuillez faire des observation s'il y en a sur la raison es écarts entre les moyennes de la fille",
            maxlength: 30,
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
            maxlength: 30,
            type: 'text',
            required: true,
          },
          {
            key: 'prenom',
            label: 'Prénoms de la personne à contacter',
            placeholder: 'Veuillez entrer le nom de la personne à contacter',
            maxlength: 30,
            type: 'text',
            required: true,
          },
          {
            key: 'contact',
            label: 'Contacts',
            placeholder:
              'Veuillez entrer le/les contacts de la personne à contacter',
            maxlength: 30,
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
    description: descriptions[generateRandom(descriptions.length)],
    get content() {
      return [
        [
          {
            key: 'formation',
            type: 'header',
            subtype: 'h3',
            label: this.title,
            style: styles.sectionTitleStyle,
          },
          {
            key: 'libelle',
            label: 'Titre de la formation',
            placeholder:
              'Veuillez écrire le titre de la formation/thématique enseignée',
            required: true,
          },
          {
            key: 'dateDebut',
            label: 'Date de la la formation',
            placeholder: 'Veuillez écrire la date de la formation',
            required: true,
            type: 'date',
            value: new Date().toISOString(),
            dateFormat: 'DD-MM-YYYY',
            disabled: false,
          },
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
          {
            key: 'quartier',
            type: 'text',
            required: true,
            label: 'Village',
            placeholder: 'Veuillez écrire le village de provenance de la fille',
            maxlength: 30,
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
            maxlength: 30,
          },
          {
            key: 'niveauEtudeClasse',
            label: "Niveau d'étude/Classe",
            placeholder:
              "Veuillez entrer le niveau d'étude ou la classe de la fille",
            maxlength: 30,
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
                value: 'autres__si_ou__pr_cisiez',
              },
              {
                label: 'AUTRES (Si ou, Précisiez)',
                value: 'autres__si_ou__pr_cisiez_1',
              },
            ],
          },
          {
            key: 'contact',
            label: 'Contact',
            placeholder: 'Veuillez entrer le/les contacts du bénéficiaire',
            maxlength: 30,
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
    description: descriptions[generateRandom(descriptions.length)],
    get content() {
      return [
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
          {
            key: 'nom',
            label: 'Nom de la fille',
            placeholder: 'Veuillez entrer le nom de la fille',
            type: 'text',
            required: true,
            maxlength: 30,
          },
          {
            key: 'prenom',
            label: 'Prénoms de la fille',
            placeholder: 'Veuillez entrer le/les prénoms de la fille',
            type: 'text',
            required: true,
            maxlength: 30,
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
            label: 'Date de naissance de la fillle',
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
            maxlength: 30,
          },
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
          {
            key: 'quartier',
            type: 'text',
            required: true,
            label: 'Village/Quartier/Maison',
            placeholder:
              'Veuillez entrer le village/quartier/maison de provenance de la fille',
            maxlength: 30,
          },
          {
            key: 'etablissementUniversite',
            label: 'Etablissement/Université',
            placeholder:
              "Veuillez entrer l'établissement/université de la fille",
            maxlength: 30,
            type: 'text',
            required: true,
          },
          {
            key: 'niveauEtudeClasse',
            label: "Niveau d'étude/Classe",
            placeholder:
              "Veuillez entrer le niveau d'étude ou la classe de la fille",
            maxlength: 30,
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
            maxlength: 30,
            type: 'text',
            required: true,
          },
          {
            key: 'prenom',
            label: 'Prénoms de la personne à contacter',
            placeholder: 'Veuillez entrer le nom de la personne à contacter',
            maxlength: 30,
            type: 'text',
            required: true,
          },
          {
            key: 'contact',
            label: 'Contacts',
            placeholder:
              'Veuillez entrer le/les contacts de la personne à contacter',
            maxlength: 30,
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
    description: descriptions[generateRandom(descriptions.length)],
    get content() {
      return [
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
          {
            key: 'numM2EducMaster',
            label: 'N° Mll /EDUCMASTER',
            placeholder: 'Veuillez entrer le numéro EDUCMASTER de la fille',
            type: 'text',
            required: true,
            subtype: 'tel',
            maxlength: 30,
            value: 'edumas',
          },
          {
            key: 'nom',
            label: 'Nom de la fille',
            placeholder: 'Veuillez entrer le nom de la fille',
            type: 'text',
            required: true,
            maxlength: 30,
            value: 'nomfi',
          },
          {
            key: 'prenom',
            label: 'Prénoms de la fille',
            placeholder: 'Veuillez entrer le/les prénoms de la fille',
            type: 'text',
            required: true,
            maxlength: 30,
            value: 'prenomfi',
          },
          {
            key: 'dateNaissance',
            type: 'date',
            label: 'Date de naissance de la fillle',
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
            maxlength: 30,
            value: 'lieufi',
          },
          {
            key: 'departement',
            type: 'select',
            label: 'DEPARTEMENTS',
            multiple: false,
            searchInputPlaceholder: 'Veuillez sélectionner le département',
            values: departements,
            dependent: 'commune',
            value: ['2'],
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
            value: ['2'],
          },
          {
            key: 'arrondissement',
            type: 'select',
            label: 'ARRONDISSEMENTS',
            dependencie: ['commune', 'COMMUNES'],
            multiple: false,
            searchInputPlaceholder: "Veuillez sélectionner l'arrondissement",
            values: arrondissements,
            value: ['1'],
          },
          {
            key: 'quartier',
            type: 'text',
            required: true,
            label: 'Village/Quartier/Maison',
            placeholder:
              'Veuillez entrer le village/quartier/maison de provenance de la fille',
            maxlength: 30,
            value: 'qutieri',
          },
          {
            key: 'etablissementUniversite',
            label: 'Etablissement/Université',
            placeholder:
              "Veuillez entrer l'établissement/université de la fille",
            maxlength: 30,
            type: 'text',
            required: true,
            value: 'etablifill',
          },
          {
            key: 'niveauEtudeClasse',
            label: "Niveau d'étude/Classe",
            placeholder:
              "Veuillez entrer le niveau d'étude ou la classe de la fille",
            maxlength: 30,
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
            values: [
              {
                label: 'OEV',
                value: 'oev',
              },
              {
                label: 'PLACEE',
                value: 'placee',
              },
              {
                label: 'SURVIVANTE VBG',
                value: 'survivante_vbg',
              },
              {
                label: 'FILLE - MERE',
                value: 'fille___mere',
              },
              {
                label: 'HANDICAPEE',
                value: 'handicapee',
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
            maxlength: 30,
            type: 'text',
            required: true,
            value: 'nompecon',
          },
          {
            key: 'prenom',
            label: 'Prénoms de la personne à contacter',
            placeholder:
              'Veuillez entrer le/les prénoms de la personne à contacter',
            maxlength: 30,
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
    description: descriptions[generateRandom(descriptions.length)],
  },
  {
    id: 8,
    title: 'FICHE DE SUIVI DE LA PERFORMANCE SCOLAIRE DE LA FILLE',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
  {
    id: 9,
    title: 'FICHE DE SUIVI DES KITS',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
  {
    id: 10,
    title: 'LISTE DE PRESENCE DES PARTICIPANTS',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
  {
    id: 11,
    title:
      'FICHE DE COLLECTE DE DONNEES SUR LES FORMATIONS DANS LES ESPACES SÛRS',

    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
  {
    id: 12,
    title: 'FICHE DE SUIVI DES ACTIVITES DES MARRAINES OU « DEUXIEMES MAMANS »',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
  {
    id: 13,
    title: 'FICHE SYNTHESE DES FORMATIONS',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
  {
    id: 14,
    title: 'Fiche de suivi des activités communautaires des Leaders Religieux',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
];
