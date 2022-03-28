import {generateRandom} from '../../Helpers/Utils';
import {departements, descriptions, icons, variants} from './properties';
import {styleFicheForm as styles} from '../../Ressources/Styles';

/* eslint-disable no-unused-vars */
let Fiches;

export default Fiches = [
  {
    id: 'afhRrQdK2NjsBUeou5d8mr',
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
            key: 'title',
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
            onchange: value => {
              setdepartement(value[0]);
            },
          },
          {
            key: 'commune',
            type: 'select',
            label: 'COMMUNES',
            multiple: false,
            searchInputPlaceholder: 'Veuillez sélectionner la commune',
            dependencie: ['departement', 'DEPARTEMENTS'],
            dependent: 'arrondissement',
            onchange: value => {
              setcommune(value[0]);
            },
            values: flatArrayBykey(communes, 'DEPARTEMENTS', departement),
          },
          {
            key: 'arrondissement',
            type: 'select',
            label: 'ARRONDISSEMENTS',
            dependencie: ['commune', 'COMMUNES'],
            multiple: false,
            searchInputPlaceholder: "Veuillez sélectionner l'arrondissement",
          },
          {
            key: 'village',
            type: 'text',
            required: true,
            label: 'Village',
            placeholder: 'Veuillez écrire le village de provenance de la fille',
            subtype: 'text',
            maxlength: 30,
          },
        ],
        [
          {
            key: 'animatorsectiontitle',
            type: 'header',
            subtype: 'h3',
            label: "Informations relatives à l'agent enregistreur",
            style: styles.sectionTitleStyle,
          },
          {
            key: 'animator_lastname',
            type: 'text',
            required: true,
            label: "Nom de l'agent enrégistreur",
            placeholder: 'veillez entrer votre nom',
            subtype: 'text',
            maxlength: 30,
          },
          {
            key: 'animator_firstname',
            label: "Prénoms de l'agent enrégistreur",
            placeholder: 'Veillez entrer vos Prénoms',
            type: 'text',
            required: true,
            subtype: 'text',
            maxlength: 30,
          },
          {
            key: 'animator_Contact',
            label: 'Contact',
            placeholder: 'Veuillez écrire votre numéro',

            type: 'text',
            required: true,
            subtype: 'tel',
            maxlength: 30,
          },
          {
            key: 'animator_Nom_du_superviseur',
            label: 'Nom du superviseur',
            placeholder: 'Veuillez écrire le nom e votre superviseur',
            type: 'textarea',
            required: true,
            subtype: 'text',
            maxlength: 30,
          },
          {
            key: 'animator_Pr_noms_du_superviseur',
            label: 'Prénoms du superviseur',
            placeholder: 'Veuillez écrire le/les prénoms de votre superviseur',
            type: 'text',
            required: true,
            subtype: 'text',
            maxlength: 30,
          },
        ],
        [
          {
            key: 'beneficiairesectiontitle',
            type: 'header',
            subtype: 'h3',
            label:
              "Informations relatives à l'enfant/adolescent (e) enregistré",
            style: styles.sectionTitleStyle,
          },
          {
            key: 'beneficiaire_Num_ro_d_ordre',
            label: "Numéro d'ordre",
            placeholder:
              "Veuillez écrire le numéro d'ordre de l'enfant enregistré",
            type: 'text',
            required: true,
            subtype: 'text',
            maxlength: 30,
          },
          {
            key: 'beneficiaire_Nom_de_l_enfant_enregistr',
            label: "Nom de l'enfant enregistré",
            placeholder: "Veuillez écrire le nom de l'enfant enregistré",
            type: 'text',
            required: true,
            subtype: 'text',
            maxlength: 30,
          },
          {
            key: 'beneficiaire_Pr_noms_de_l_enfant_enregistr',
            label: "Prénoms de l'enfant enregistré",
            placeholder:
              "Veuillez écrire le/les prénoms de l'enfant enregistré",
            type: 'text',
            required: true,
            subtype: 'text',
            maxlength: 30,
          },
          {
            key: 'beneficiaire_Sexe',
            label: 'Sexe',
            placeholder: "Veuillez cochez le sexe de l'enfant enregistré",
            type: 'radio-group',
            other: false,
            required: true,
            values: [
              {
                label: 'Féminin',
                value: 'f_minin',
                selected: true,
              },
              {
                label: 'Masculin',
                value: 'masculin',
              },
            ],
          },
          {
            key: 'beneficiaire_Age_de_l_enfant_enr_gistr',
            label: "Age de l'enfant enrégistré",
            placeholder: "Veuillez entrer l'âge exacte de l'enfant enregistré",
            type: 'text',
            required: true,
            subtype: 'tel',
            maxlength: 30,
          },
          {
            key: 'beneficiaire_Statut_de_l_enfant',
            label: "Statut de l'enfant",
            placeholder: "Veuillez cocher le statut de l'enfant a enregistré",
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
            key: 'beneficiaire_crochage_classe',
            label: "Préciser le niveau d'étude avant décrochage (classe)",
            placeholder:
              "Veuillez écrire le niveau d'étude/classe atteint par l'enfant avant décrochage",
            type: 'text',
            required: true,
            subtype: 'text',
            maxlength: 30,
          },
          {
            key: 'beneficiaire_residence',
            label: 'Quartier de ville/ Village de résidence',
            placeholder:
              "Veuillez entrer le village/village de résidence de l'enfant a enregistré",
            type: 'text',
            required: true,
            subtype: 'text',
            maxlength: 30,
          },
          {
            key: 'beneficiaire_vulnerabilit',
            required: true,
            label: 'Critères de vulnérabilité',
            placeholder:
              'Veuillez choisir le critère de vulnérabilité de la fille',
            type: 'checkbox-group',
            other: true, // optional
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
            key: 'beneficiaire_Logement',
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
            key: 'beneficiaire_Non_mari',
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
            key: 'beneficiaire_Mari',
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
    id: 'akFuu3Yjwnp2LQCyX2pndK',
    title: "FICHE D'ENREGISTREMENT DES FILLES",
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
  {
    id: 'aM3G3UPxF73u25wtrjPcmh',
    title: 'FICHE DE SUIVI SCOLAIRE',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
  {
    id: 'a7tNTKTTwC88ztZg47jxR8',
    title: 'LISTE DE PRESENCE DES PARTICIPANTS AUX FORMATIONS',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
  {
    id: 'a8McuuWNb9RNitPXVFEo38',
    title: 'FICHE DE SUIVI A DOMICILE',

    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
  {
    id: 'apnWvBPiRGXDyUFmLk96HE',
    title: "FICHE D'IDENTIFICATION DES FILLES (Maintien des filles à l'école)",

    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
  {
    id: 'amPgTAnJstQ2a3Bu5LoSGx',
    title: 'FICHE DES FILLES SCOLARISEES',

    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
  {
    id: 'ao4yESbsUPZZQWNtbno6ZK',
    title: 'FICHE DE SUIVI DE LA PERFORMANCE SCOLAIRE DE LA FILLE',

    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
  {
    id: 'abDk3yjb6BvAvaUmrxzrFP',
    title: 'FICHE DE SUIVI DES KITS',

    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
  {
    id: 'aC3pUtw3qL8sshtpAUt9mz',
    title: 'LISTE DE PRESENCE DES PARTICIPANTS',

    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
  {
    id: 'a3uEKqnTyCFcUBmRW9YvxH',
    title:
      'FICHE DE COLLECTE DE DONNEES SUR LES FORMATIONS DANS LES ESPACES SÛRS',

    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
  {
    id: 'aA4AzLmkMNyvJyh9XDysQR',
    title: 'FICHE DE SUIVI DES ACTIVITES DES MARRAINES OU « DEUXIEMES MAMANS »',

    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
  {
    id: 'aiYHyF3t9wQagLxhViEAKH',
    title: 'FICHE SYNTHESE DES FORMATIONS',

    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
  {
    id: 'anVfwjmFiC8JGpfNQ9AfG3',
    title: 'Fiche de suivi des activités communautaires des Leaders Religieux',
    meta_thing: 'Natacha C. G. BAMEYNOU',
    icon: icons[generateRandom(icons.length)],
    variant: variants[generateRandom(variants.length)],
    description: descriptions[generateRandom(descriptions.length)],
  },
];
