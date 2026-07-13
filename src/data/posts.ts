import type { BlogPost } from '@/types';

export const posts: BlogPost[] = [
  {
    slug: 'feedback-constructif',
    title: "L'art du feedback constructif : rompre le silence sans briser les équipes",
    excerpt: "Donner un retour négatif est l'un des exercices les plus redoutés en entreprise. Pourtant, le silence organisé détruit plus d'équipes que les mots maladroits. Voici comment faire autrement.",
    date: '10 juil. 2026',
    readTime: '7 min',
    author: 'Klar',
    coverGradient: 'from-emerald-400 to-cyan-400',
    tags: ['Feedback', 'Management', 'Leadership'],
    content: [
      { type: 'p', text: "C'est un paradoxe bien connu dans la vie d'entreprise : nous savons que le feedback est essentiel à la progression, mais nous faisons tout pour l'éviter. On repousse, on adoucit, on noie le message dans un océan de formules de politesse — ou pire, on ne dit rien du tout." },
      { type: 'p', text: "Le résultat ? Les frustrations s'accumulent, les malentendus se multiplient et la performance collective s'érode insidieusement. Une étude de Salesforce (2025) révélait que 57% des employés estiment ne pas recevoir assez de feedback régulier, et que 72% d'entre eux jugent celui qu'ils reçoivent trop vague pour être utile." },
      { type: 'blockquote', text: "« Le silence organisé ne protège personne. Il repousse simplement l'inévitable confrontation, en la rendant plus explosive. » — Kim Scott, auteure de Radical Candor" },
      { type: 'h2', text: 'Pourquoi avons-nous si peur du feedback ?' },
      { type: 'p', text: "La peur du feedback repose sur trois mécanismes psychologiques bien identifiés :" },
      { type: 'ul', items: [
        "L'asymétrie émotionnelle — nous anticipons une réaction négative bien plus forte que ce qui se produit en réalité (biais d'impact).",
        "Le manque de cadre — sans méthode structurée, le feedback devient personnel et blessant plutôt que professionnel et utile.",
        "La culture du 'nice' — dans de nombreuses entreprises, être agréable prime sur être utile, ce qui conduit à une politesse stérile."
      ]},
      { type: 'h2', text: 'La méthode DESC : un cadre simple et puissant' },
      { type: 'p', text: "Développée par Sharon et Gordon Bower dans les années 1970, la méthode DESC reste l'un des outils les plus efficaces pour formuler un feedback constructif. Elle repose sur quatre étapes :" },
      { type: 'h3', text: 'D — Décrire les faits objectifs' },
      { type: 'p', text: "Commencez par décrire la situation de manière factuelle, sans jugement ni interprétation. L'objectif est de créer un terrain neutre où les deux parties peuvent s'accorder sur ce qui s'est passé." },
      { type: 'p', text: '❌ « Tu es toujours en retard et tu ne respectes jamais les deadlines. » ✅ « Sur les trois dernières semaines, le rapport du lundi a été livré après 14h à deux reprises sans communication préalable. »' },
      { type: 'h3', text: 'E — Exprimer votre ressenti' },
      { type: 'p', text: "Partagez l'impact émotionnel ou professionnel de la situation en utilisant le « je » et en évitant les accusations. Cette étape humanise le feedback sans le rendre agressif." },
      { type: 'p', text: '❌ « Tu me fais perdre mon temps. » ✅ « Je me suis senti bloqué dans mon travail car j\'attendais ces données pour finaliser la présentation client. »' },
      { type: 'h3', text: 'S — Suggérer des alternatives' },
      { type: 'p', text: "Proposez des pistes concrètes d'amélioration. L'idée est de co-construire une solution plutôt que d'imposer un changement unilatéral." },
      { type: 'p', text: '« Je te propose qu\'on se mette d\'accord sur un créneau fixe le lundi matin pour la remise du rapport. Et si jamais un imprévu survient, un petit message sur Slack pour prévenir l\'équipe. Qu\'en penses-tu ? »' },
      { type: 'h3', text: 'C — Conclure par une ouverture' },
      { type: 'p', text: "Terminez sur une note constructive qui renforce la relation et l'engagement mutuel." },
      { type: 'p', text: '« Je suis convaincu que ce petit ajustement nous fera gagner en sérénité à tous les deux. Merci d\'avoir pris le temps d\'en parler. »' },
      { type: 'h2', text: "L'écoute active : l'autre moitié du feedback" },
      { type: 'p', text: "Un feedback n'est pas un monologue. Carl Rogers, pionnier de la psychologie humaniste, définissait l'écoute active comme « la capacité d'entendre ce que l'autre dit, y compris ce qu'il n'exprime pas verbalement ». En pratique, cela signifie :" },
      { type: 'ul', items: [
        'Reformuler systématiquement ce que vous venez dentendre pour valider votre compréhension.',
        'Poser des questions ouvertes (« Comment as-tu vécu cette situation ? ») plutôt que fermées.',
        'Accueillir les émotions sans les juger ni les minimiser.',
        'Marquer des pauses silencieuses pour laisser à l\'autre le temps de formuler sa pensée.'
      ]},
      { type: 'h2', text: "Quand donner du feedback ? Le timing fait tout" },
      { type: 'p', text: "La règle d'or : le feedback informel en temps réel, le feedback formel en différé." },
      { type: 'p', text: "Pour les ajustements mineurs, privilégiez le feedback immédiat, à froid et en privé. Plus vous attendez, plus le moment paraîtra difficile et plus votre interlocuteur aura l'impression que vous avez « accumulé » des griefs." },
      { type: 'p', text: "Pour les sujets plus structurels (compétences, comportements récurrents), planifiez un entretien dédié. Le feedback surprise, délivré dans un couloir entre deux réunions, est rarement constructif." },
      { type: 'tip', text: "Une astuce simple : si le feedback peut attendre 24h sans perdre son utilité, attendez 24h. Cela vous permet de vérifier que votre intention est bien d'aider, pas de vous défouler." },
      { type: 'h2', text: 'Et si vous êtes celui qui reçoit le feedback ?' },
      { type: 'p', text: "Recevoir un feedback est souvent plus difficile que d'en donner. Notre réflexe naturel est la défense. Pourtant, c'est dans ces moments inconfortables que se joue la véritable progression." },
      { type: 'ol', items: [
        'Écoutez sans interrompre — laissez la personne terminer avant de réagir.',
        'Remerciez pour le feedback, même si vous êtes en désaccord sur le fond.',
        'Prenez le temps de digérer avant de répondre : « Merci pour ce retour, je vais y réfléchir et je reviens vers toi. »',
        'Identifiez ce qui est utile et applicable, même dans un feedback maladroit.'
      ]},
      { type: 'p', text: "Construire une culture du feedback ne se fait pas en un jour. Cela commence par des gestes simples : un remerciement sincère après un retour difficile, une invitation régulière à échanger, et la volonté de donner l'exemple. Avec le temps, le feedback cesse d'être une épreuve pour devenir un levier de confiance et de performance." },
    ],
  },
  {
    slug: 'asynchrone-vs-synchrone',
    title: 'Asynchrone vs Synchrone : optimiser ses canaux de communication en 2026',
    excerpt: "Entre Slack, Teams, email et réunions en cascade, la charge mentale informationnelle explose. Et si la clé était de choisir le bon canal au bon moment ?",
    date: '5 juil. 2026',
    readTime: '6 min',
    author: 'Klar',
    coverGradient: 'from-violet-400 to-fuchsia-400',
    tags: ['Productivité', 'Télétravail', 'Outils'],
    content: [
      { type: 'p', text: "Nous navons jamais été aussi connectés et jamais aussi submergés. En 2026, un employé de bureau reçoit en moyenne 126 notifications par jour (source : RescueTime, 2026). Entre les messages Slack, les notifications Teams, les emails, les mentions dans les documents partagés et les réunions à rallonge, la journée de travail s'apparente à un incessant jeu de whac-a-mole informationnel." },
      { type: 'p', text: "Mais le problème n'est pas la quantité d'outils. Le problème est que nous utilisons souvent le mauvais canal pour le mauvais message. Et cela a un coût direct sur la productivité et la santé mentale des équipes." },
      { type: 'blockquote', text: "« Passer de l'asynchrone au synchrone sans raison, c'est interrompre le travail profond de quelqu'un pour une question qui aurait pu attendre 20 minutes. » — Cal Newport, Deep Work" },
      { type: 'h2', text: 'Synchrone vs Asynchrone : de quoi parle-t-on ?' },
      { type: 'p', text: "La communication synchrone exige la présence simultanée des interlocuteurs : réunion en présentiel, visioconférence, appel téléphonique, chat instantané avec attente de réponse immédiate. Elle est précieuse pour la construction de lien social, la résolution de problèmes complexes et les décisions urgentes." },
      { type: 'p', text: "La communication asynchrone, elle, permet à chacun de répondre selon son propre rythme : email, document partagé, message vocal, ticket, outil de gestion de projet. Elle favorise le travail profond, la réflexion et l'inclusion des fuseaux horaires différents." },
      { type: 'h2', text: "Le coût caché de l'interruption" },
      { type: 'p', text: "Une étude menée par Gloria Mark (UC Irvine) — et confirmée depuis par de nombreuses réplications — montre qu'il faut en moyenne 23 minutes pour retrouver sa concentration après une interruption. Imaginez : chaque notification intrusive vous coûte près d'une demi-heure de productivité réelle." },
      { type: 'p', text: "Le problème s'aggrave avec le 'switching context' : lorsque vous alternez rapidement entre plusieurs tâches, votre cerveau consomme davantage de glucose et d'oxygène, ce qui accélère la fatigue mentale. En fin de journée, vous pouvez avoir l'impression d'avoir beaucoup travaillé sans avoir rien accompli de significatif." },
      { type: 'h2', text: 'Quand utiliser chaque canal ?' },
      { type: 'p', text: "Voici un guide pratique pour choisir le bon canal selon la situation :" },
      { type: 'h3', text: '🟢 Communication synchrone — à privilégier quand :' },
      { type: 'ul', items: [
        'Le sujet est complexe et nécessite un échange itératif (brainstorming, résolution de problème).',
        'La décision est urgente et ne peut pas attendre.',
        'Le sujet est émotionnellement sensible (feedback difficile, conflit, annonce importante).',
        'Vous construisez une relation de confiance avec un nouveau collaborateur.'
      ]},
      { type: 'h3', text: '🔵 Communication asynchrone — à privilégier quand :' },
      { type: 'ul', items: [
        'Le message est factuel et ne nécessite pas de discussion (information, rapport, compte-rendu).',
        'Vous avez besoin de temps pour formuler une réponse réfléchie.',
        'Le destinataire est dans un fuseau horaire différent.',
        'La question concerne plusieurs personnes qui doivent toutes avoir le temps de contribuer.'
      ]},
      { type: 'h2', text: "3 règles d'or pour une communication canal-consciente" },
      { type: 'p', text: 'Règle n°1 : le message détermine le canal, pas l\'inverse. Ne partez pas de l\'outil disponible ; partez du message que vous voulez transmettre. « J\'ai une question rapide » n\'est pas une raison suffisante pour interrompre quelqu\'un. Demandez-vous : est-ce que ça peut attendre 30 minutes, 2 heures, demain ?' },
      { type: 'p', text: 'Règle n°2 : respectez les plages de travail profond. Définissez dans votre équipe des « heures de focus » (par exemple de 10h à 12h et de 14h à 16h) pendant lesquelles les notifications asynchrones sont les bienvenues mais les sollicitations synchrones sont interdites sauf urgence réelle. Slack permet de configurer des statuts ; utilisez-les.' },
      { type: 'p', text: "Règle n°3 : documentez ce qui doit l'être, discutez du reste. Une règle simple : si une décision a été prise lors d'une réunion, quelqu'un doit la synthétiser par écrit dans les 24h. Cela évite les malentendus et crée une trace consultable. À l'inverse, si un échange asynchrone commence à tourner en rond (plus de 5 messages sur le même sujet), c'est le signe qu'il faut passer en synchrone." },
      { type: 'h2', text: 'Et la charge mentale dans tout ça ?' },
      { type: 'p', text: "La charge mentale informationnelle est l'une des principales causes d'épuisement professionnel en 2026. Notre cerveau n'est pas conçu pour traiter 126 notifications par jour. Chaque notification non traitée reste en mémoire de travail, créant une 'taxe cognitive' invisible mais épuisante." },
      { type: 'p', text: "Quelques pistes pour réduire cette charge :" },
      { type: 'ul', items: [
        'Regroupez vos consultations de messagerie : 3 fois par jour (matin, midi, fin d\'après-midi) plutôt qu\'en continu.',
        'Désactivez les notifications non urgentes. Ce qui est important finira par vous trouver.',
        'Utilisez les statuts de disponibilité de manière honnête : « En réunion », « Travail profond », « Disponible ».',
        'N\'hésitez pas à dire : « Je préfère qu\'on en parle en synchrone, ce sera plus efficace. »'
      ]},
      { type: 'p', text: "Maîtriser la communication asynchrone et synchrone, ce n'est pas ajouter une couche de complexité à votre quotidien. C'est au contraire reprendre le contrôle sur votre attention et votre énergie. Et dans un monde où l'attention est devenue la ressource la plus rare, c'est probablement le meilleur investissement que vous puissiez faire." },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
