import React, { useState } from 'react';
import { BookOpen, Users, MessageCircle, Award, Clock, Target, CheckCircle, Mail, Phone, MessageSquare, ArrowRight, Menu, X, Moon, Sun, ChevronUp, Globe, Video } from 'lucide-react';

const translations = {
  en: {
    brand: 'DLH Global Academy',
    logoAlt: 'DLH Global Academy Logo',
    languageLabel: 'Language',
    nav: {
      home: 'Home',
      courses: 'Courses',
      about: 'About',
      pricing: 'Pricing',
      contact: 'Contact'
    },
    home: {
      badge: 'Online German Academy',
      title: 'Learn German with live classes, real guidance, and global support.',
      introLead: 'DLH Global Academy is a fully online German learning platform you can join from anywhere in the world.',
      introParagraphs: [
        'Join complete German courses, intensive Prüfungstraining, and focused skills classes in Lesen, Hören, Schreiben, and Sprechen. Learn at your pace while staying connected with live instruction and community accountability.',
        'Go beyond language learning with visa interview preparation, embassy Q&A practice, and tailored support for selecting the right Ausbildung programme for your future.'
      ],
      highlights: [
        'Live instructor feedback every session',
        'Exam-ready resources and mock tests',
        'Visa interview preparation & coaching',
        'Career-guided Ausbildung planning'
      ],
      liveClassTitle: 'Live Online Classes',
      liveClassPlatform: 'Google Meet oder Zoom',
      liveClassDuration: '2 hours 30 minutes daily',
      primaryCta: 'Start Your Journey',
      secondaryCta: 'View Courses',
      stats: [
        { label: 'Global Learners', value: '450+' },
        { label: 'Live Sessions', value: 'Daily' },
        { label: 'Success Rate', value: '94%' }
      ],
      statsNote: 'Flexible schedules across time zones',
      cohort: {
        label: 'Next Cohort',
        title: 'Enroll for October',
        items: [
          'Small groups with expert instructors.',
          'Daily WhatsApp support and check-ins.',
          'Exam-ready roadmap from A1 to C1.'
        ]
      },
      logoTagline: 'Excellence in German Education',
      whyTitle: 'Why Choose Us',
      benefits: [
        { title: 'Live Classes', desc: 'Interactive sessions every day' },
        { title: 'Structured', desc: 'Step-by-step curriculum' },
        { title: 'Support', desc: 'Daily WhatsApp assistance' },
        { title: 'Exam Ready', desc: 'Certification preparation' }
      ],
      features: [
        { title: 'Clear Path', desc: 'Proven methodology from beginner to advanced' },
        { title: 'Flexible', desc: '2.5 hours daily sessions' },
        { title: 'Results', desc: 'Students achieve their goals' }
      ]
    },
    courses: {
      badge: 'Our Programme',
      title: 'Our Courses',
      subtitle: 'A clear roadmap from A1 to C1 proficiency',
      roadmapTitle: 'A1 — C1 Roadmap',
      roadmapDescription: 'Follow a structured progression with clear outcomes at every level.',
      enrollCta: 'Enroll Now',
      liveClassTitle: 'Live Online Classes via Google Meet oder Zoom',
      liveClassDuration: '2 hours 30 minutes daily sessions',
      levelLabel: 'Level',
      stepLabel: 'Step',
      focusLabel: 'Focus:',
      outcomeLabel: 'Outcome:',
      stages: [
        {
          level: 'A1',
          title: 'Starter Foundations',
          focus: 'Alphabet, greetings, introductions',
          outcome: 'Communicate basic personal info and daily needs.'
        },
        {
          level: 'A2',
          title: 'Everyday Communication',
          focus: 'Routines, travel, shopping, past tense',
          outcome: 'Handle simple conversations in familiar situations.'
        },
        {
          level: 'B1',
          title: 'Independent Speaker',
          focus: 'Opinions, work topics, longer texts',
          outcome: 'Discuss experiences and plans with confidence.'
        },
        {
          level: 'B2',
          title: 'Upper Intermediate',
          focus: 'Complex grammar, professional contexts',
          outcome: 'Interact fluently in academic or workplace settings.'
        },
        {
          level: 'C1',
          title: 'Advanced Mastery',
          focus: 'Presentations, formal writing, nuance',
          outcome: 'Express ideas precisely in advanced discussions.'
        }
      ],
      moduleTitle: 'Module Training (Hören, Lesen, Sprechen, Schreiben)',
      modulePrice: 'KES 3,500',
      moduleDescription:
        'Focus on one skill module at any level. Each module (Hören, Lesen, Sprechen, Schreiben) is offered at KES 3,500 per module.',
      examTitle: 'Prüfungstraining (Exam Preparation)',
      examA1A2: 'A1 / A2 Exam Prep',
      examB1B2: 'B1 / B2 Exam Prep',
      examA1A2Price: 'KES 5,000',
      examB1B2Price: 'KES 6,500',
      examNote: 'Intensive exam preparation with mock tests, strategy, and feedback.'
    },
    about: {
      title: 'About Us',
      paragraphs: [
        'Our German language programme was founded with one clear mission: to make learning German simple, effective, and accessible for beginners and intermediate learners. We understand that learning a new language can feel challenging, especially at the beginning, which is why our courses are carefully designed to guide students step by step, from the basics to confident communication.',
        'We offer structured German courses from A1 to B2, following a clear learning path that helps students develop strong foundations in grammar, vocabulary, speaking, listening, reading, and writing. Our teaching methods focus on practical usage, ensuring that students not only understand German but can also use it confidently in real-life situations.',
        'All classes are conducted live online via Google Meet or Zoom, allowing students to interact directly with experienced instructors, ask questions in real time, and practice speaking in a supportive environment. Our live lessons are interactive, engaging, and suitable for learners from different backgrounds and time zones.',
        'In addition to live classes, we provide daily support through WhatsApp, where students can ask questions, receive clarifications, practice short exercises, and stay motivated throughout their learning journey. This continuous support helps learners stay consistent and overcome difficulties quickly.',
        'Our programme is ideal for students learning German for studies, work, relocation, or personal development. We focus on clear explanations, consistent practice, and learner-centered teaching to ensure real progress at every level.',
        'At our core, we believe that anyone can learn German with the right guidance, structure, and support. We are committed to helping our students achieve their language goals with confidence and success.'
      ]
    },
    pricing: {
      badge: 'Investment',
      title: 'Pricing',
      subtitle: 'Transparent pricing for every level',
      localLabel: 'Local (KSH)',
      internationalLabel: 'International (USD)',
      mostPopular: 'Most Popular',
      perLevel: 'per level',
      enrollCta: 'Enroll Now',
      levels: [
        {
          level: 'A1',
          title: 'Beginner I',
          ksh: '15,000',
          usd: '130',
          color: 'from-emerald-400 to-emerald-600',
          features: ['Basic vocabulary', 'Simple conversations', 'Present tense', 'Self-introduction']
        },
        {
          level: 'A2',
          title: 'Beginner II',
          ksh: '18,000',
          usd: '155',
          color: 'from-green-400 to-green-600',
          features: ['Expanded vocabulary', 'Past tense', 'Daily routines', 'Shopping & travel']
        },
        {
          level: 'B1',
          title: 'Intermediate I',
          ksh: '25,000',
          usd: '216',
          color: 'from-blue-400 to-blue-600',
          features: ['Complex grammar', 'Opinion expression', 'Work vocabulary', 'Longer texts']
        },
        {
          level: 'B2',
          title: 'Intermediate II',
          ksh: '30,000',
          usd: '259',
          color: 'from-indigo-400 to-indigo-600',
          features: ['Advanced fluency', 'Professional German', 'Exam preparation', 'Academic writing'],
          popular: true
        },
        {
          level: 'C1',
          title: 'Advanced',
          ksh: '35,000',
          usd: '302',
          color: 'from-purple-400 to-purple-600',
          features: ['Advanced fluency', 'Professional writing', 'Presentation skills', 'Academic discourse']
        }
      ],
      includedTitle: "What's Included",
      includedItems: [
        'Google Meet oder Zoom',
        'Study materials',
        'Assignment feedback',
        '2.5 hours daily',
        'Mock examinations',
        'WhatsApp support',
        'Certificate',
        'Flexible payments'
      ]
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to begin your German learning journey?',
      formTitle: 'Send a Message',
      nameLabel: 'Name',
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      messageLabel: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your.email@example.com',
      whatsappPlaceholder: '+254 740 891 695',
      messagePlaceholder: 'Your learning goals...',
      sendButton: 'Send Message',
      sending: 'Sending...',
      successMessage: 'Thank you! We will contact you soon via WhatsApp.',
      errorMessage: 'Oops! Something went wrong. Please try again.',
      contactDetailsTitle: 'Contact Details',
      quickResponseTitle: 'Quick Response',
      quickResponseBody: 'We respond within 24 hours. For immediate help, reach us on WhatsApp.',
      whatsappCtaLabel: 'WhatsApp:',
      emailTitle: 'Email',
      phoneTitle: 'Phone',
      whatsappCommunityTitle: 'WhatsApp Community',
      whatsappCommunityBody: 'Stay updated through our official channel and connect with learners in the group.',
      whatsappChannelButton: 'Join WhatsApp Channel',
      whatsappGroupButton: 'Join WhatsApp Group'
    },
    footer: {
      tagline: 'Making German accessible for everyone'
    }
  },
  de: {
    brand: 'DLH Global Academy',
    logoAlt: 'Logo der DLH Global Academy',
    languageLabel: 'Sprache',
    nav: {
      home: 'Start',
      courses: 'Kurse',
      about: 'Über uns',
      pricing: 'Preise',
      contact: 'Kontakt'
    },
    home: {
      badge: 'Online Deutschakademie',
      title: 'Lerne Deutsch mit Live-Unterricht, klarer Führung und globaler Unterstützung.',
      introLead: 'DLH Global Academy ist eine vollständig online verfügbare Deutschlernplattform, die du von überall aus nutzen kannst.',
      introParagraphs: [
        'Nimm an vollständigen Deutschkursen, intensivem Prüfungstraining und fokussierten Modulen in Lesen, Hören, Schreiben und Sprechen teil. Lerne in deinem Tempo und bleibe durch Live-Unterricht und Community-Support motiviert.',
        'Ergänzend bieten wir Vorbereitung auf Visa-Interviews, Übungsfragen für Botschaften und individuelle Beratung zur passenden Ausbildung.'
      ],
      highlights: [
        'Live-Feedback in jeder Sitzung',
        'Prüfungsmaterial & Probeprüfungen',
        'Vorbereitung auf Visa-Interviews',
        'Ausbildungsberatung nach Ziel'
      ],
      liveClassTitle: 'Live-Online-Kurse',
      liveClassPlatform: 'Google Meet oder Zoom',
      liveClassDuration: '2 Stunden 30 Minuten täglich',
      primaryCta: 'Starte deine Reise',
      secondaryCta: 'Kurse ansehen',
      stats: [
        { label: 'Globale Lernende', value: '450+' },
        { label: 'Live-Sitzungen', value: 'Täglich' },
        { label: 'Erfolgsquote', value: '94%' }
      ],
      statsNote: 'Flexible Zeiten in allen Zeitzonen',
      cohort: {
        label: 'Nächste Gruppe',
        title: 'Anmeldung für Oktober',
        items: [
          'Kleine Gruppen mit Expert:innen.',
          'Tägliche WhatsApp-Betreuung.',
          'Prüfungsplan von A1 bis C1.'
        ]
      },
      logoTagline: 'Exzellenz im Deutschunterricht',
      whyTitle: 'Warum wir?',
      benefits: [
        { title: 'Live-Kurse', desc: 'Interaktive Sitzungen jeden Tag' },
        { title: 'Strukturiert', desc: 'Schritt-für-Schritt-Curriculum' },
        { title: 'Support', desc: 'Tägliche WhatsApp-Unterstützung' },
        { title: 'Prüfungsbereit', desc: 'Vorbereitung auf Zertifikate' }
      ],
      features: [
        { title: 'Klarer Weg', desc: 'Bewährte Methode von Anfänger bis Fortgeschritten' },
        { title: 'Flexibel', desc: '2,5 Stunden täglich' },
        { title: 'Ergebnisse', desc: 'Studierende erreichen ihre Ziele' }
      ]
    },
    courses: {
      badge: 'Unser Programm',
      title: 'Unsere Kurse',
      subtitle: 'Ein klarer Lernpfad von A1 bis C1',
      roadmapTitle: 'A1 — C1 Lernpfad',
      roadmapDescription: 'Strukturierter Fortschritt mit klaren Ergebnissen auf jeder Stufe.',
      enrollCta: 'Jetzt anmelden',
      liveClassTitle: 'Live-Online-Kurse via Google Meet oder Zoom',
      liveClassDuration: '2 Stunden 30 Minuten täglich',
      levelLabel: 'Stufe',
      stepLabel: 'Schritt',
      focusLabel: 'Fokus:',
      outcomeLabel: 'Ergebnis:',
      stages: [
        {
          level: 'A1',
          title: 'Grundlagen',
          focus: 'Alphabet, Begrüßung, Vorstellung',
          outcome: 'Grundlegende persönliche Infos und Alltagssituationen meistern.'
        },
        {
          level: 'A2',
          title: 'Alltagssprache',
          focus: 'Routinen, Reisen, Einkaufen, Vergangenheit',
          outcome: 'Einfache Gespräche in vertrauten Situationen führen.'
        },
        {
          level: 'B1',
          title: 'Selbstständig sprechen',
          focus: 'Meinungen, Beruf, längere Texte',
          outcome: 'Erfahrungen und Pläne sicher besprechen.'
        },
        {
          level: 'B2',
          title: 'Mittelstufe',
          focus: 'Komplexe Grammatik, Berufskontexte',
          outcome: 'Flüssig im Studium oder Beruf kommunizieren.'
        },
        {
          level: 'C1',
          title: 'Fortgeschritten',
          focus: 'Präsentationen, formelles Schreiben, Nuancen',
          outcome: 'Ideen präzise in anspruchsvollen Gesprächen ausdrücken.'
        }
      ],
      moduleTitle: 'Modultraining (Hören, Lesen, Sprechen, Schreiben)',
      modulePrice: 'KES 3.500',
      moduleDescription:
        'Fokussiere dich auf ein Modul pro Stufe. Jedes Modul (Hören, Lesen, Sprechen, Schreiben) kostet KES 3.500.',
      examTitle: 'Prüfungstraining',
      examA1A2: 'A1 / A2 Prüfungstraining',
      examB1B2: 'B1 / B2 Prüfungstraining',
      examA1A2Price: 'KES 5.000',
      examB1B2Price: 'KES 6.500',
      examNote: 'Intensive Vorbereitung mit Probeprüfungen, Strategie und Feedback.'
    },
    about: {
      title: 'Über uns',
      paragraphs: [
        'Unser Deutschprogramm wurde mit einer klaren Mission gegründet: Deutschlernen einfach, effektiv und zugänglich zu machen. Besonders zu Beginn kann eine neue Sprache herausfordernd wirken. Deshalb führen unsere Kurse Schritt für Schritt zu sicherer Kommunikation.',
        'Wir bieten strukturierte Deutschkurse von A1 bis B2 mit einem klaren Lernpfad für Grammatik, Wortschatz, Sprechen, Hören, Lesen und Schreiben. Unser Unterricht ist praxisnah, damit du Deutsch sicher im Alltag anwenden kannst.',
        'Alle Kurse finden live online über Google Meet oder Zoom statt. So kannst du direkt mit erfahrenen Lehrkräften interagieren, Fragen stellen und in einer unterstützenden Umgebung sprechen üben.',
        'Zusätzlich bieten wir tägliche WhatsApp-Unterstützung für Fragen, kurze Übungen und Motivation. Das hilft, konsequent zu bleiben und Hürden schnell zu überwinden.',
        'Unser Programm ist ideal für Studium, Arbeit, Umzug oder persönliche Ziele. Wir setzen auf klare Erklärungen, regelmäßige Übung und lernendenzentriertes Teaching.',
        'Wir glauben, dass jede Person Deutsch mit der richtigen Struktur und Unterstützung lernen kann. Wir begleiten dich auf dem Weg zu deinem Sprachziel.'
      ]
    },
    pricing: {
      badge: 'Investition',
      title: 'Preise',
      subtitle: 'Transparente Preise für jedes Niveau',
      localLabel: 'Lokal (KSH)',
      internationalLabel: 'International (USD)',
      mostPopular: 'Am beliebtesten',
      perLevel: 'pro Stufe',
      enrollCta: 'Jetzt anmelden',
      levels: [
        {
          level: 'A1',
          title: 'Anfänger I',
          ksh: '15,000',
          usd: '130',
          color: 'from-emerald-400 to-emerald-600',
          features: ['Grundwortschatz', 'Einfache Gespräche', 'Präsens', 'Selbstvorstellung']
        },
        {
          level: 'A2',
          title: 'Anfänger II',
          ksh: '18,000',
          usd: '155',
          color: 'from-green-400 to-green-600',
          features: ['Erweiterter Wortschatz', 'Vergangenheit', 'Alltag', 'Reisen & Einkaufen']
        },
        {
          level: 'B1',
          title: 'Mittelstufe I',
          ksh: '25,000',
          usd: '216',
          color: 'from-blue-400 to-blue-600',
          features: ['Komplexe Grammatik', 'Meinungen ausdrücken', 'Arbeitswortschatz', 'Längere Texte']
        },
        {
          level: 'B2',
          title: 'Mittelstufe II',
          ksh: '30,000',
          usd: '259',
          color: 'from-indigo-400 to-indigo-600',
          features: ['Fortgeschrittene Sprache', 'Berufliches Deutsch', 'Prüfungsvorbereitung', 'Akademisches Schreiben'],
          popular: true
        },
        {
          level: 'C1',
          title: 'Fortgeschritten',
          ksh: '35,000',
          usd: '302',
          color: 'from-purple-400 to-purple-600',
          features: ['Hohe Sprachsicherheit', 'Professionelles Schreiben', 'Präsentationen', 'Akademische Diskussion']
        }
      ],
      includedTitle: 'Leistungen',
      includedItems: [
        'Google Meet oder Zoom',
        'Lernmaterial',
        'Feedback zu Aufgaben',
        '2,5 Stunden täglich',
        'Probeprüfungen',
        'WhatsApp-Support',
        'Zertifikat',
        'Flexible Zahlungen'
      ]
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Bereit für deine Deutschreise?',
      formTitle: 'Nachricht senden',
      nameLabel: 'Name',
      emailLabel: 'E-Mail',
      whatsappLabel: 'WhatsApp',
      messageLabel: 'Nachricht',
      namePlaceholder: 'Dein Name',
      emailPlaceholder: 'deine.email@beispiel.com',
      whatsappPlaceholder: '+254 740 891 695',
      messagePlaceholder: 'Deine Lernziele...',
      sendButton: 'Nachricht senden',
      sending: 'Wird gesendet...',
      successMessage: 'Danke! Wir melden uns bald via WhatsApp.',
      errorMessage: 'Ups! Etwas ist schiefgelaufen. Bitte versuche es erneut.',
      contactDetailsTitle: 'Kontaktdaten',
      quickResponseTitle: 'Schnelle Antwort',
      quickResponseBody: 'Wir antworten innerhalb von 24 Stunden. Für schnelle Hilfe schreibe uns auf WhatsApp.',
      whatsappCtaLabel: 'WhatsApp:',
      emailTitle: 'E-Mail',
      phoneTitle: 'Telefon',
      whatsappCommunityTitle: 'WhatsApp-Community',
      whatsappCommunityBody: 'Erhalte Updates im Kanal und tausche dich in der Gruppe aus.',
      whatsappChannelButton: 'WhatsApp-Kanal beitreten',
      whatsappGroupButton: 'WhatsApp-Gruppe beitreten'
    },
    footer: {
      tagline: 'Deutschlernen für alle zugänglich machen'
    }
  },
  fr: {
    brand: 'DLH Global Academy',
    logoAlt: 'Logo de DLH Global Academy',
    languageLabel: 'Langue',
    nav: {
      home: 'Accueil',
      courses: 'Cours',
      about: 'À propos',
      pricing: 'Tarifs',
      contact: 'Contact'
    },
    home: {
      badge: 'Académie d’allemand en ligne',
      title: 'Apprenez l’allemand avec des cours en direct, un accompagnement réel et un soutien mondial.',
      introLead: 'DLH Global Academy est une plateforme d’apprentissage de l’allemand entièrement en ligne, accessible partout.',
      introParagraphs: [
        'Rejoignez des cours complets, un Prüfungstraining intensif et des modules ciblés en Lesen, Hören, Schreiben et Sprechen. Progressez à votre rythme tout en restant connecté aux cours en direct et à la communauté.',
        'Allez plus loin avec la préparation aux entretiens de visa, des simulations de questions d’ambassade et un accompagnement personnalisé pour choisir la bonne Ausbildung.'
      ],
      highlights: [
        'Retour pédagogique à chaque session',
        'Ressources d’examen et tests blancs',
        'Préparation aux entretiens de visa',
        'Orientation Ausbildung personnalisée'
      ],
      liveClassTitle: 'Cours en ligne en direct',
      liveClassPlatform: 'Google Meet ou Zoom',
      liveClassDuration: '2 h 30 par jour',
      primaryCta: 'Commencer',
      secondaryCta: 'Voir les cours',
      stats: [
        { label: 'Apprenants', value: '450+' },
        { label: 'Sessions en direct', value: 'Quotidien' },
        { label: 'Taux de réussite', value: '94%' }
      ],
      statsNote: 'Horaires flexibles selon les fuseaux horaires',
      cohort: {
        label: 'Prochaine cohorte',
        title: 'Inscription pour octobre',
        items: [
          'Petits groupes avec des experts.',
          'Support WhatsApp quotidien.',
          'Parcours d’examen de A1 à C1.'
        ]
      },
      logoTagline: 'Excellence en allemand',
      whyTitle: 'Pourquoi nous choisir',
      benefits: [
        { title: 'Cours en direct', desc: 'Sessions interactives chaque jour' },
        { title: 'Structuré', desc: 'Programme pas à pas' },
        { title: 'Support', desc: 'Assistance WhatsApp quotidienne' },
        { title: 'Prêt à l’examen', desc: 'Préparation aux certifications' }
      ],
      features: [
        { title: 'Parcours clair', desc: 'Méthodologie éprouvée du débutant à l’avancé' },
        { title: 'Flexible', desc: '2 h 30 par jour' },
        { title: 'Résultats', desc: 'Les étudiants atteignent leurs objectifs' }
      ]
    },
    courses: {
      badge: 'Notre programme',
      title: 'Nos cours',
      subtitle: 'Un parcours clair de A1 à C1',
      roadmapTitle: 'Parcours A1 — C1',
      roadmapDescription: 'Une progression structurée avec des résultats clairs à chaque niveau.',
      enrollCta: 'S’inscrire',
      liveClassTitle: 'Cours en direct via Google Meet ou Zoom',
      liveClassDuration: 'Sessions de 2 h 30 par jour',
      levelLabel: 'Niveau',
      stepLabel: 'Étape',
      focusLabel: 'Focus :',
      outcomeLabel: 'Résultat :',
      stages: [
        {
          level: 'A1',
          title: 'Bases',
          focus: 'Alphabet, salutations, présentations',
          outcome: 'Exprimer des informations personnelles et besoins quotidiens.'
        },
        {
          level: 'A2',
          title: 'Communication quotidienne',
          focus: 'Routines, voyage, achats, passé',
          outcome: 'Gérer des conversations simples en situations familières.'
        },
        {
          level: 'B1',
          title: 'Autonomie',
          focus: 'Opinions, travail, textes longs',
          outcome: 'Parler de ses expériences et projets avec assurance.'
        },
        {
          level: 'B2',
          title: 'Intermédiaire avancé',
          focus: 'Grammaire complexe, contexte professionnel',
          outcome: 'Communiquer aisément dans les études ou au travail.'
        },
        {
          level: 'C1',
          title: 'Avancé',
          focus: 'Présentations, écrits formels, nuances',
          outcome: 'Exprimer des idées précises dans des discussions avancées.'
        }
      ],
      moduleTitle: 'Formation par module (Hören, Lesen, Sprechen, Schreiben)',
      modulePrice: 'KES 3 500',
      moduleDescription:
        'Concentrez-vous sur un module par niveau. Chaque module (Hören, Lesen, Sprechen, Schreiben) coûte KES 3 500.',
      examTitle: 'Prüfungstraining (Préparation aux examens)',
      examA1A2: 'Prépa examen A1 / A2',
      examB1B2: 'Prépa examen B1 / B2',
      examA1A2Price: 'KES 5 000',
      examB1B2Price: 'KES 6 500',
      examNote: 'Préparation intensive avec tests blancs, stratégie et feedback.'
    },
    about: {
      title: 'À propos',
      paragraphs: [
        'Notre programme d’allemand a une mission claire : rendre l’apprentissage de l’allemand simple, efficace et accessible. Apprendre une nouvelle langue peut être difficile au début, c’est pourquoi nos cours avancent pas à pas vers une communication confiante.',
        'Nous proposons des cours structurés de A1 à B2 avec un parcours clair pour la grammaire, le vocabulaire, l’expression orale, l’écoute, la lecture et l’écriture. Notre enseignement est pratique pour une utilisation réelle.',
        'Tous les cours se font en direct via Google Meet ou Zoom. Vous interagissez avec des enseignants expérimentés, posez des questions en temps réel et pratiquez dans un environnement bienveillant.',
        'En plus des cours en direct, nous offrons un support WhatsApp quotidien pour les questions, les clarifications et la motivation.',
        'Notre programme convient aux études, au travail, à la mobilité ou à la croissance personnelle. Nous privilégions des explications claires et une pratique régulière.',
        'Nous croyons que chacun peut apprendre l’allemand avec la bonne structure et le bon soutien. Nous vous accompagnons vers vos objectifs.'
      ]
    },
    pricing: {
      badge: 'Investissement',
      title: 'Tarifs',
      subtitle: 'Des prix transparents pour chaque niveau',
      localLabel: 'Local (KSH)',
      internationalLabel: 'International (USD)',
      mostPopular: 'Le plus populaire',
      perLevel: 'par niveau',
      enrollCta: 'S’inscrire',
      levels: [
        {
          level: 'A1',
          title: 'Débutant I',
          ksh: '15,000',
          usd: '130',
          color: 'from-emerald-400 to-emerald-600',
          features: ['Vocabulaire de base', 'Conversations simples', 'Présent', 'Se présenter']
        },
        {
          level: 'A2',
          title: 'Débutant II',
          ksh: '18,000',
          usd: '155',
          color: 'from-green-400 to-green-600',
          features: ['Vocabulaire élargi', 'Passé', 'Routines', 'Voyage & achats']
        },
        {
          level: 'B1',
          title: 'Intermédiaire I',
          ksh: '25,000',
          usd: '216',
          color: 'from-blue-400 to-blue-600',
          features: ['Grammaire complexe', 'Exprimer son opinion', 'Vocabulaire pro', 'Textes longs']
        },
        {
          level: 'B2',
          title: 'Intermédiaire II',
          ksh: '30,000',
          usd: '259',
          color: 'from-indigo-400 to-indigo-600',
          features: ['Aisance avancée', 'Allemand professionnel', 'Préparation examens', 'Écriture académique'],
          popular: true
        },
        {
          level: 'C1',
          title: 'Avancé',
          ksh: '35,000',
          usd: '302',
          color: 'from-purple-400 to-purple-600',
          features: ['Fluidité avancée', 'Écriture pro', 'Techniques de présentation', 'Discours académique']
        }
      ],
      includedTitle: 'Ce qui est inclus',
      includedItems: [
        'Google Meet ou Zoom',
        'Supports de cours',
        'Feedback sur les devoirs',
        '2 h 30 par jour',
        'Examens blancs',
        'Support WhatsApp',
        'Certificat',
        'Paiements flexibles'
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: 'Prêt à commencer votre apprentissage de l’allemand ?',
      formTitle: 'Envoyer un message',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      whatsappLabel: 'WhatsApp',
      messageLabel: 'Message',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'votre.email@exemple.com',
      whatsappPlaceholder: '+254 740 891 695',
      messagePlaceholder: 'Vos objectifs d’apprentissage...',
      sendButton: 'Envoyer',
      sending: 'Envoi...',
      successMessage: 'Merci ! Nous vous contacterons bientôt via WhatsApp.',
      errorMessage: 'Oups ! Une erreur est survenue. Veuillez réessayer.',
      contactDetailsTitle: 'Coordonnées',
      quickResponseTitle: 'Réponse rapide',
      quickResponseBody: 'Nous répondons sous 24 h. Pour une aide immédiate, contactez-nous sur WhatsApp.',
      whatsappCtaLabel: 'WhatsApp :',
      emailTitle: 'E-mail',
      phoneTitle: 'Téléphone',
      whatsappCommunityTitle: 'Communauté WhatsApp',
      whatsappCommunityBody: 'Suivez nos mises à jour via le canal officiel et échangez dans le groupe.',
      whatsappChannelButton: 'Rejoindre le canal WhatsApp',
      whatsappGroupButton: 'Rejoindre le groupe WhatsApp'
    },
    footer: {
      tagline: 'Rendre l’allemand accessible à tous'
    }
  }
};

const ContactPage = ({ darkMode, formData, setFormData, copy }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mnnezdve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          message: formData.message
        })
      });

      if (response.ok) {
        alert(copy.contact.successMessage);
        setFormData({ name: '', email: '', whatsapp: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(copy.contact.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 relative">
      <div className={`fixed inset-0 -z-10 ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-amber-50/30 via-white to-red-50/20'
      }`}></div>

      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h1 className={`text-6xl font-extralight ${darkMode ? 'text-white' : 'text-slate-900'} mb-6 tracking-tighter`}>{copy.contact.title}</h1>
            <p className={`${darkMode ? 'text-slate-400' : 'text-slate-500'} font-light`}>
              {copy.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className={`rounded-3xl backdrop-blur-lg border shadow-2xl p-10 ${
              darkMode 
                ? 'bg-slate-800/40 border-slate-700/50' 
                : 'bg-white/60 border-white/40'
            }`}>
              <h2 className={`text-2xl font-medium mb-10 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{copy.contact.formTitle}</h2>
              <div className="space-y-6">
                <div>
                  <label className={`block text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-600'} mb-2`}>{copy.contact.nameLabel}</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 font-light backdrop-blur-sm transition-all ${
                      darkMode 
                        ? 'border-slate-700/50 bg-slate-900/50 text-white' 
                        : 'border-slate-200/50 bg-white/50 text-slate-800'
                    }`}
                    placeholder={copy.contact.namePlaceholder}
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-600'} mb-2`}>{copy.contact.emailLabel}</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 font-light backdrop-blur-sm transition-all ${
                      darkMode 
                        ? 'border-slate-700/50 bg-slate-900/50 text-white' 
                        : 'border-slate-200/50 bg-white/50 text-slate-800'
                    }`}
                    placeholder={copy.contact.emailPlaceholder}
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-600'} mb-2`}>{copy.contact.whatsappLabel}</label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData((prev) => ({ ...prev, whatsapp: e.target.value }))}
                    className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 font-light backdrop-blur-sm transition-all ${
                      darkMode 
                        ? 'border-slate-700/50 bg-slate-900/50 text-white' 
                        : 'border-slate-200/50 bg-white/50 text-slate-800'
                    }`}
                    placeholder={copy.contact.whatsappPlaceholder}
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-600'} mb-2`}>{copy.contact.messageLabel}</label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 font-light backdrop-blur-sm resize-none transition-all ${
                      darkMode 
                        ? 'border-slate-700/50 bg-slate-900/50 text-white' 
                        : 'border-slate-200/50 bg-white/50 text-slate-800'
                    }`}
                    placeholder={copy.contact.messagePlaceholder}
                    required
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 via-red-500 to-amber-600 hover:from-amber-600 hover:via-red-600 hover:to-amber-700 text-white font-medium py-4 rounded-xl transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                >
                  {isSubmitting ? copy.contact.sending : copy.contact.sendButton}
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className={`rounded-3xl p-10 backdrop-blur-lg border shadow-2xl ${
                darkMode 
                  ? 'bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50' 
                  : 'bg-gradient-to-br from-amber-50/80 to-red-50/80 border-white/40'
              }`}>
                <h2 className={`text-2xl font-medium mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{copy.contact.contactDetailsTitle}</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MessageSquare className={`w-5 h-5 mt-1 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} strokeWidth={1.5} />
                    <div>
                      <p className={`font-light text-sm mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{copy.contact.whatsappLabel}</p>
                      <p className={`font-light ${darkMode ? 'text-white' : 'text-slate-900'}`}>+254 740 891 695</p>
                      <p className={`font-light mt-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>+254 701 483 998</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className={`w-5 h-5 mt-1 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} strokeWidth={1.5} />
                    <div>
                      <p className={`font-light text-sm mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{copy.contact.emailTitle}</p>
                      <p className={`font-light ${darkMode ? 'text-white' : 'text-slate-900'}`}>deutschlhub12@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className={`w-5 h-5 mt-1 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} strokeWidth={1.5} />
                    <div>
                      <p className={`font-light text-sm mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{copy.contact.phoneTitle}</p>
                      <p className={`font-light ${darkMode ? 'text-white' : 'text-slate-900'}`}>+254 740 891 695</p>
                      <p className={`font-light mt-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>+254 701 483 998</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`rounded-3xl p-10 backdrop-blur-lg border shadow-2xl ${
                darkMode 
                  ? 'bg-slate-800/40 border-slate-700/50' 
                  : 'bg-white/60 border-white/40'
              }`}>
                <h3 className={`text-xl font-medium mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{copy.contact.quickResponseTitle}</h3>
                <p className={`text-sm font-light mb-6 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {copy.contact.quickResponseBody}
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/254740891695"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium px-6 py-3 rounded-full transition-all shadow-lg w-full justify-center hover:scale-105"
                  >
                    <MessageSquare size={18} strokeWidth={1.5} />
                    <span>{copy.contact.whatsappCtaLabel} +254 740 891 695</span>
                  </a>
                  <a
                    href="https://wa.me/254701483998"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium px-6 py-3 rounded-full transition-all shadow-lg w-full justify-center hover:scale-105"
                  >
                    <MessageSquare size={18} strokeWidth={1.5} />
                    <span>{copy.contact.whatsappCtaLabel} +254 701 483 998</span>
                  </a>
                </div>
              </div>

              <div className={`rounded-3xl p-10 backdrop-blur-lg border shadow-2xl ${
                darkMode 
                  ? 'bg-slate-800/40 border-slate-700/50' 
                  : 'bg-white/60 border-white/40'
              }`}>
                <h3 className={`text-xl font-medium mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{copy.contact.whatsappCommunityTitle}</h3>
                <p className={`text-sm font-light mb-6 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {copy.contact.whatsappCommunityBody}
                </p>
                <div className="space-y-3">
                  <a
                    href="https://whatsapp.com/channel/0029Vb6ZCvvADTOEL3iD4j3G"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white font-medium px-6 py-3 rounded-full transition-all shadow-lg w-full justify-center hover:scale-105"
                  >
                    <MessageSquare size={18} strokeWidth={1.5} />
                    <span>{copy.contact.whatsappChannelButton}</span>
                  </a>
                  <a
                    href="https://chat.whatsapp.com/CvKoNthwiPPJFKJL8PBKiV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white font-medium px-6 py-3 rounded-full transition-all shadow-lg w-full justify-center hover:scale-105"
                  >
                    <MessageSquare size={18} strokeWidth={1.5} />
                    <span>{copy.contact.whatsappGroupButton}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const DeutschLearnerHub = () => {
  const [activePage, setActivePage] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', message: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currency, setCurrency] = useState('KSH');
  const [language, setLanguage] = useState('en');
  const copy = translations[language];

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const NavBar = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      darkMode 
        ? 'bg-slate-900/70 border-slate-700/50' 
        : 'bg-white/70 border-slate-200/50'
    } backdrop-blur-xl border-b shadow-lg`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center overflow-hidden shadow-lg ring-2 ring-amber-400/30">
              <img 
                src="/logo.jpg" 
                alt={copy.logoAlt} 
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`text-sm sm:text-lg font-light ${darkMode ? 'text-white' : 'text-slate-900'} tracking-wide`}>
              {copy.brand}
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'courses', 'about', 'pricing', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`capitalize text-sm tracking-wide transition-all duration-200 ${
                  activePage === page
                    ? 'text-amber-500 font-medium'
                    : darkMode ? 'text-slate-300 hover:text-amber-400 font-light' : 'text-slate-500 hover:text-amber-500 font-light'
                }`}
              >
                {copy.nav[page]}
              </button>
            ))}
            <div className={`inline-flex items-center rounded-full p-1 backdrop-blur-lg border shadow-lg ${
              darkMode 
                ? 'bg-slate-800/60 border-slate-700/50' 
                : 'bg-white/70 border-white/40'
            }`}>
              {['en', 'de', 'fr'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  aria-label={`${copy.languageLabel}: ${lang.toUpperCase()}`}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    language === lang
                      ? 'bg-gradient-to-r from-amber-500 to-red-500 text-white shadow-lg'
                      : darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-full transition-all duration-200 ${
                darkMode 
                  ? 'bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm shadow-lg' 
                  : 'bg-slate-100/80 hover:bg-slate-200/80 backdrop-blur-sm shadow-lg'
              }`}
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
            </button>
          </div>

          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={`md:hidden py-4 border-t ${darkMode ? 'border-slate-700' : 'border-slate-100'}`}>
            <div className="flex flex-col space-y-3">
              {['home', 'courses', 'about', 'pricing', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setActivePage(page);
                    setMobileMenuOpen(false);
                  }}
                  className={`capitalize text-left px-4 py-2 rounded-lg ${
                    activePage === page
                      ? 'text-amber-600 bg-amber-50 font-normal'
                      : darkMode ? 'text-slate-300 hover:bg-slate-800 font-light' : 'text-slate-700 hover:bg-slate-50 font-light'
                  } transition-colors`}
                >
                  {copy.nav[page]}
                </button>
              ))}
              <div className={`mx-4 mt-2 inline-flex items-center rounded-full p-1 backdrop-blur-lg border shadow-lg ${
                darkMode 
                  ? 'bg-slate-800/60 border-slate-700/50' 
                  : 'bg-white/70 border-white/40'
              }`}>
                {['en', 'de', 'fr'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    aria-label={`${copy.languageLabel}: ${lang.toUpperCase()}`}
                    className={`flex-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      language === lang
                        ? 'bg-gradient-to-r from-amber-500 to-red-500 text-white shadow-lg'
                        : darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const GermanFlagIcon = () => (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 group cursor-pointer">
      <div className="relative">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-xl hover:shadow-2xl transition-all overflow-hidden border-2 border-white/50 backdrop-blur-sm">
          <div className="w-full h-1/3 bg-black"></div>
          <div className="w-full h-1/3 bg-red-600"></div>
          <div className="w-full h-1/3 bg-yellow-400"></div>
        </div>
        <div className="absolute -top-12 right-0 bg-slate-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-light whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
          {copy.brand}
        </div>
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="pt-20 relative">
      <div className={`fixed inset-0 -z-10 ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-amber-50/30 via-white to-red-50/20'
      }`}>
        <div className={`absolute top-0 right-0 w-96 h-96 ${
          darkMode ? 'bg-amber-500/5' : 'bg-amber-400/10'
        } rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-0 left-0 w-96 h-96 ${
          darkMode ? 'bg-red-500/5' : 'bg-red-400/10'
        } rounded-full blur-3xl animate-pulse`}></div>
      </div>

      <section className="py-20 md:py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border text-xs uppercase tracking-[0.2em] font-light mb-6 fade-in-up ${
                darkMode 
                  ? 'bg-white/5 border-white/10 text-amber-300' 
                  : 'bg-white/70 border-white/40 text-amber-700'
              }`}>
                <Globe className="w-4 h-4" />
                <span>Online German Academy</span>
              </div>
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-serif ${darkMode ? 'text-white' : 'text-slate-900'} mb-8 leading-tight fade-in-up`}>
                Learn German with live classes, real guidance, and global support.
              </h1>
              
              <div className={`space-y-6 text-lg font-light ${darkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed fade-in-up delay-1`}>
                <p className={`text-xl ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                  DLH Global Academy is a fully online German learning platform you can join from anywhere in the world.
                </p>
                <p>Join complete German courses, intensive Prüfungstraining, and focused skills classes in Lesen, Hören, Schreiben, and Sprechen. Learn at your pace while staying connected with live instruction and community accountability.</p>
                <p>Go beyond language learning with visa interview preparation, embassy Q&amp;A practice, and tailored support for selecting the right Ausbildung programme for your future.</p>
              </div>

              <div className={`mt-8 grid gap-4 sm:grid-cols-2 text-sm font-light fade-in-up delay-1 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {[
                  'Live instructor feedback every session',
                  'Exam-ready resources and mock tests',
                  'Visa interview preparation & coaching',
                  'Career-guided Ausbildung planning'
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <CheckCircle className={`w-5 h-5 mt-0.5 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className={`mt-8 p-6 rounded-2xl backdrop-blur-lg border fade-in-up delay-2 ${
                darkMode 
                  ? 'bg-white/5 border-white/10 shadow-xl' 
                  : 'bg-white/60 border-white/40 shadow-2xl'
              }`}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-red-500 flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {copy.home.liveClassTitle}
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'} mb-3`}>
                      <span className="font-medium">{copy.home.liveClassPlatform}</span>
                    </p>
                    <div className="flex items-center space-x-2">
                      <Clock className={`w-4 h-4 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                      <span className={`text-sm font-medium ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                        {copy.home.liveClassDuration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => setActivePage('courses')}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 via-red-500 to-amber-600 hover:from-amber-600 hover:via-red-600 hover:to-amber-700 text-white font-medium px-8 py-4 rounded-full text-base transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <span>{copy.home.primaryCta}</span>
                  <ArrowRight size={18} strokeWidth={2} />
                </button>
                <button
                  onClick={() => setActivePage('courses')}
                  className={`inline-flex items-center space-x-2 px-8 py-4 rounded-full text-base font-medium transition-all border ${
                    darkMode 
                      ? 'border-white/20 text-white hover:bg-white/10' 
                      : 'border-slate-300 text-slate-700 hover:bg-white'
                  }`}
                >
                  <span>View Courses</span>
                  <BookOpen size={18} strokeWidth={1.8} />
                </button>
              </div>

              <div className={`mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 text-center ${
                darkMode ? 'text-slate-200' : 'text-slate-700'
              }`}>
                {[
                  { label: 'Global Learners', value: '450+' },
                  { label: 'Live Sessions', value: 'Daily' },
                  { label: 'Success Rate', value: '94%' }
                ].map((stat) => (
                  <div key={stat.label} className={`rounded-2xl px-4 py-4 backdrop-blur-lg border ${
                    darkMode ? 'bg-white/5 border-white/10' : 'bg-white/70 border-white/40'
                  }`}>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className={`text-xs uppercase tracking-[0.25em] mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className={`mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 text-center ${
                darkMode ? 'text-slate-200' : 'text-slate-700'
              }`}>
                {copy.home.stats.map((stat) => (
                  <div key={stat.label} className={`rounded-2xl px-4 py-4 backdrop-blur-lg border ${
                    darkMode ? 'bg-white/5 border-white/10' : 'bg-white/70 border-white/40'
                  }`}>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className={`text-xs uppercase tracking-[0.25em] mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className={`mt-4 text-xs uppercase tracking-[0.3em] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {copy.home.statsNote}
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md space-y-6">
                <div className={`rounded-3xl shadow-2xl flex items-center justify-center p-12 backdrop-blur-xl border ${
                  darkMode 
                    ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-white/10' 
                    : 'bg-gradient-to-br from-white/80 to-slate-50/80 border-white/40'
                }`}>
                  <div className="text-center">
                    <div className="w-56 h-56 mx-auto mb-6 flex items-center justify-center">
                      <img 
                        src="/logo.jpg" 
                        alt="DLH Global Academy Logo" 
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                    <h3 className={`text-2xl font-serif ${darkMode ? 'text-slate-200' : 'text-slate-800'} mb-2`}>DLH Global Academy</h3>
                    <p className={`text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-500'} tracking-wide`}>Excellence in German Education</p>
                  </div>
                </div>
                <div className={`rounded-2xl p-6 backdrop-blur-lg border shadow-xl ${
                  darkMode 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-white/70 border-white/40'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className={`text-xs uppercase tracking-[0.25em] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Next Cohort</p>
                      <p className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Enroll for October</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-red-500 flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <ul className={`space-y-3 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    <li className="flex items-center space-x-3">
                      <Users className="w-4 h-4 text-amber-500" />
                      <span>Small groups with expert instructors.</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <MessageCircle className="w-4 h-4 text-amber-500" />
                      <span>Daily WhatsApp support and check-ins.</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Award className="w-4 h-4 text-amber-500" />
                      <span>Exam-ready roadmap from A1 to C1.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-5xl font-extralight text-center ${darkMode ? 'text-white' : 'text-slate-900'} mb-4 tracking-tighter`}>
            {copy.home.whyTitle}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-20"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {copy.home.benefits.map((benefit, idx) => (
              <div key={idx} className={`text-center group p-6 rounded-2xl backdrop-blur-lg border transition-all hover:scale-105 ${
                darkMode 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                  : 'bg-white/60 border-white/40 hover:bg-white/80'
              }`}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-red-500 flex items-center justify-center shadow-lg">
                  {idx === 0 && <Users className="w-8 h-8 text-white" strokeWidth={1.5} />}
                  {idx === 1 && <BookOpen className="w-8 h-8 text-white" strokeWidth={1.5} />}
                  {idx === 2 && <MessageCircle className="w-8 h-8 text-white" strokeWidth={1.5} />}
                  {idx === 3 && <Award className="w-8 h-8 text-white" strokeWidth={1.5} />}
                </div>
                <h3 className={`text-lg font-medium mb-3 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{benefit.title}</h3>
                <p className={`text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {copy.home.features.map((feature, idx) => (
              <div key={idx} className={`p-10 rounded-2xl backdrop-blur-lg border transition-all hover:scale-105 ${
                darkMode 
                  ? 'bg-slate-800/40 border-slate-700/50 hover:border-amber-500/50' 
                  : 'bg-white/60 border-white/40 hover:border-amber-400/50'
              } shadow-xl`}>
                <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-amber-400 to-red-500 flex items-center justify-center shadow-lg">
                  {idx === 0 && <Target className="w-6 h-6 text-white" strokeWidth={1.5} />}
                  {idx === 1 && <Clock className="w-6 h-6 text-white" strokeWidth={1.5} />}
                  {idx === 2 && <CheckCircle className="w-6 h-6 text-white" strokeWidth={1.5} />}
                </div>
                <h3 className={`text-xl font-medium mb-4 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{feature.title}</h3>
                <p className={`text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const CoursesPage = () => (
    <div className="pt-20 relative">
      <div className={`fixed inset-0 -z-10 ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-amber-50/30 via-white to-red-50/20'
      }`}></div>

      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className={`inline-block mb-6 px-4 py-1.5 rounded-full backdrop-blur-lg border ${
              darkMode 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/60 border-white/40'
            }`}>
              <span className="text-xs font-light text-amber-600 tracking-widest uppercase">{copy.courses.badge}</span>
            </div>
            <h1 className={`text-6xl font-extralight ${darkMode ? 'text-white' : 'text-slate-900'} mb-6 tracking-tighter`}>{copy.courses.title}</h1>
            <p className={`${darkMode ? 'text-slate-400' : 'text-slate-500'} font-light leading-relaxed`}>
              {copy.courses.subtitle}
            </p>
          </div>

          <div className={`rounded-3xl backdrop-blur-lg border shadow-2xl overflow-hidden ${
            darkMode 
              ? 'bg-slate-800/40 border-slate-700/50' 
              : 'bg-white/60 border-white/40'
          }`}>
            <div className="bg-gradient-to-r from-amber-500 via-red-500 to-amber-600 p-2">
              <div className={`${darkMode ? 'bg-slate-800/90' : 'bg-white/90'} backdrop-blur-xl rounded-2xl p-12 md:p-16`}>
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
                  <div>
                    <h2 className={`text-5xl font-extralight ${darkMode ? 'text-white' : 'text-slate-900'} mb-3`}>{copy.courses.roadmapTitle}</h2>
                    <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} font-light`}>
                      {copy.courses.roadmapDescription}
                    </p>
                  </div>
                  <button
                    onClick={() => setActivePage('contact')}
                    className="bg-gradient-to-r from-amber-500 via-red-500 to-amber-600 hover:from-amber-600 hover:via-red-600 hover:to-amber-700 text-white font-medium px-8 py-4 rounded-full transition-all shadow-xl hover:scale-105"
                  >
                    {copy.courses.enrollCta}
                  </button>
                </div>

                <div className={`mb-10 p-6 rounded-xl backdrop-blur-lg border ${
                  darkMode 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-slate-50/60 border-slate-200/40'
                }`}>
                  <div className="flex items-start space-x-4">
                    <Video className={`w-6 h-6 mt-1 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                    <div>
                      <h3 className={`text-base font-medium mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {copy.courses.liveClassTitle}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <Clock className={`w-4 h-4 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                        <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                          {copy.courses.liveClassDuration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {copy.courses.stages.map((stage, idx) => (
                    <div
                      key={stage.level}
                      className={`relative rounded-2xl border p-6 transition-all hover:shadow-xl ${
                        darkMode 
                          ? 'bg-slate-900/40 border-slate-700/50' 
                          : 'bg-white/80 border-slate-200/60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-xs uppercase tracking-widest ${darkMode ? 'text-amber-300' : 'text-amber-600'}`}>
                          {copy.courses.levelLabel} {stage.level}
                        </span>
                        <span className={`text-xs font-light ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          {copy.courses.stepLabel} {idx + 1}
                        </span>
                      </div>
                      <h3 className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-slate-900'} mb-2`}>{stage.title}</h3>
                      <p className={`text-sm font-light ${darkMode ? 'text-slate-300' : 'text-slate-600'} mb-3`}>
                        <span className="font-medium">{copy.courses.focusLabel}</span> {stage.focus}
                      </p>
                      <p className={`text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        <span className="font-medium">{copy.courses.outcomeLabel}</span> {stage.outcome}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                  <div className={`rounded-2xl border p-6 backdrop-blur-lg shadow-xl ${
                    darkMode 
                      ? 'bg-slate-900/40 border-slate-700/50' 
                      : 'bg-white/80 border-slate-200/60'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Module Training (Hören, Lesen, Sprechen, Schreiben)
                      </h3>
                      <span className={`text-sm font-semibold ${darkMode ? 'text-amber-300' : 'text-amber-600'}`}>
                        KES 3,500
                      </span>
                    </div>
                    <p className={`text-sm font-light ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      Focus on one skill module at any level. Each module (Hören, Lesen, Sprechen, Schreiben) is offered at
                      <span className="font-medium"> KES 3,500 per module</span>.
                    </p>
                  </div>

                  <div className={`rounded-2xl border p-6 backdrop-blur-lg shadow-xl ${
                    darkMode 
                      ? 'bg-slate-900/40 border-slate-700/50' 
                      : 'bg-white/80 border-slate-200/60'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Prüfungstraining (Exam Preparation)
                      </h3>
                    </div>
                    <div className={`grid gap-3 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      <div className="flex items-center justify-between border-b border-dashed pb-2">
                        <span>A1 / A2 Exam Prep</span>
                        <span className={`font-semibold ${darkMode ? 'text-amber-300' : 'text-amber-600'}`}>KES 5,000</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>B1 / B2 Exam Prep</span>
                        <span className={`font-semibold ${darkMode ? 'text-amber-300' : 'text-amber-600'}`}>KES 6,500</span>
                      </div>
                      <p className="pt-2 text-xs">
                        Intensive exam preparation with mock tests, strategy, and feedback.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="pt-20 relative">
      <div className={`fixed inset-0 -z-10 ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-amber-50/30 via-white to-red-50/20'
      }`}></div>

      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <h1 className={`text-6xl font-extralight ${darkMode ? 'text-white' : 'text-slate-900'} tracking-tighter`}>{copy.about.title}</h1>
          </div>
          
          <div className={`space-y-8 ${darkMode ? 'text-slate-300' : 'text-slate-600'} font-light leading-loose text-lg`}>
            {copy.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

// ========== END OF PART 1 ==========

// ========== PART 2 OF 3 ==========

  const PricingPage = () => {
    const pricingData = copy.pricing.levels;

    return (
      <div className="pt-20 relative">
        <div className={`fixed inset-0 -z-10 ${
          darkMode 
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
            : 'bg-gradient-to-br from-amber-50/30 via-white to-red-50/20'
        }`}>
          <div className={`absolute top-20 right-20 w-96 h-96 ${
            darkMode ? 'bg-amber-500/5' : 'bg-amber-400/10'
          } rounded-full blur-3xl animate-pulse`}></div>
        </div>

        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className={`inline-block mb-6 px-4 py-1.5 rounded-full backdrop-blur-lg border ${
                darkMode 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-white/60 border-white/40'
              }`}>
                <span className="text-xs font-light text-amber-600 tracking-widest uppercase">{copy.pricing.badge}</span>
              </div>
              <h1 className={`text-6xl font-extralight ${darkMode ? 'text-white' : 'text-slate-900'} mb-6 tracking-tighter`}>{copy.pricing.title}</h1>
              <p className={`text-xl font-light ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {copy.pricing.subtitle}
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <div className={`inline-flex rounded-full p-1 backdrop-blur-lg border shadow-lg ${
                darkMode 
                  ? 'bg-slate-800/60 border-slate-700/50' 
                  : 'bg-white/60 border-white/40'
              }`}>
                <button
                  onClick={() => setCurrency('KSH')}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    currency === 'KSH' 
                      ? 'bg-gradient-to-r from-amber-500 to-red-500 text-white shadow-lg' 
                      : darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  🇰🇪 {copy.pricing.localLabel}
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center space-x-2 ${
                    currency === 'USD' 
                      ? 'bg-gradient-to-r from-amber-500 to-red-500 text-white shadow-lg' 
                      : darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  <Globe size={16} />
                  <span>{copy.pricing.internationalLabel}</span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
              {pricingData.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`relative backdrop-blur-lg border rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-slate-800/40 border-slate-700/50' 
                      : 'bg-white/60 border-white/40'
                  } ${
                    item.popular ? 'ring-2 ring-amber-400 scale-105' : ''
                  }`}
                >
                  {item.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-amber-400 to-red-500 text-white text-xs font-medium px-4 py-1 rounded-full shadow-xl">
                        {copy.pricing.mostPopular}
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xl font-medium mb-6 shadow-xl`}>
                    {item.level}
                  </div>
                  
                  <h3 className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-slate-900'} mb-2`}>{item.title}</h3>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className={`text-4xl font-light ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {currency === 'KSH' ? item.ksh : `$${item.usd}`}
                      </span>
                      <span className={`ml-2 text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {currency === 'KSH' ? 'KSH' : 'USD'}
                      </span>
                    </div>
                    <p className={`text-xs font-light ${darkMode ? 'text-slate-500' : 'text-slate-400'} mt-1`}>
                      {copy.pricing.perLevel}
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {item.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start space-x-2">
                        <CheckCircle className={`w-4 h-4 mt-0.5 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} strokeWidth={1.5} />
                        <span className={`text-sm font-light ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setActivePage('contact')}
                    className={`w-full text-white font-medium py-3 rounded-xl transition-all shadow-lg hover:scale-105 ${
                      darkMode 
                        ? 'bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500' 
                        : 'bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600'
                    }`}
                  >
                    {copy.pricing.enrollCta}
                  </button>
                </div>
              ))}
            </div>

            <div className={`rounded-3xl p-12 text-center backdrop-blur-lg border shadow-2xl ${
              darkMode 
                ? 'bg-slate-800/40 border-slate-700/50' 
                : 'bg-white/60 border-white/40'
            }`}>
              <h2 className={`text-2xl font-medium ${darkMode ? 'text-white' : 'text-slate-900'} mb-4`}>{copy.pricing.includedTitle}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {copy.pricing.includedItems.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-left">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                    <span className={`text-sm font-light ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

// ========== END OF PART 2 ==========

// ========== PART 3 OF 3 ==========

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode ? 'bg-slate-900' : 'bg-white'
    }`}>
      <NavBar />
      {activePage === 'home' && <HomePage />}
      {activePage === 'courses' && <CoursesPage />}
      {activePage === 'about' && <AboutPage />}
      {activePage === 'pricing' && <PricingPage />}
      {activePage === 'contact' && (
        <ContactPage darkMode={darkMode} formData={formData} setFormData={setFormData} copy={copy} />
      )}
      <GermanFlagIcon />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-20 sm:bottom-24 right-4 sm:right-8 z-40 p-3 rounded-full text-white shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-lg ${
            darkMode 
              ? 'bg-amber-600/80 hover:bg-amber-500/90 border border-amber-400/30' 
              : 'bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600'
          }`}
        >
          <ChevronUp size={24} strokeWidth={2} />
        </button>
      )}

      <footer className={`py-12 transition-all backdrop-blur-lg border-t ${
        darkMode 
          ? 'bg-slate-950/80 border-slate-800/50' 
          : 'bg-slate-50/80 border-slate-200/50'
      }`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className={`text-sm font-light ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            © 2025 {copy.brand}
          </p>
          <p className={`text-sm font-light ${darkMode ? 'text-slate-500' : 'text-slate-400'} mt-2`}>
            {copy.footer.tagline}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DeutschLearnerHub;

// ========== END OF PART 3 - COMPLETE! ==========
