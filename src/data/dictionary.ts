import type { Dictionary } from '@/types';

export const dictionary: Dictionary = {
  standard: [
    { patterns: ["relancer", "arrête de me relancer", "tu me sollicites", "tu me déranges"], response: "Je prends note de ta demande et reviens vers toi dès que possible." },
    { patterns: ["déjà sur", "trucs en même temps", "surchargé", "trop de boulot", "débordé"], response: "Je te confirme que ta demande est bien prise en compte. Je reviens vers toi dès que j'ai de la visibilité sur mon planning." },
    { patterns: ["pas encore fini", "c'est pas compliqué", "t'es lent", "ça traîne"], response: "Merci pour ta patience. Je tiens à te fournir un travail de qualité et je préfère prendre le temps nécessaire pour cela. Je te tiens au courant de l'avancement." },
    { patterns: ["cassé", "ton truc de merde", "marche pas", "n'importe quoi", "bug", "pété"], response: "Merci de m'avoir remonté ce point. Je vais analyser la situation et revenir vers toi avec un plan d'action rapidement." },
    { patterns: ["qui a pondu", "qui a fait", "c'est nul", "c'est moche", "n'importe qui"], response: "Je prends bonne note de ton retour. Je vais échanger avec les parties prenantes concernées pour trouver une solution adaptée." },
    { patterns: ["t'es aveugle", "tu sais pas lire", "j'ai déjà répondu", "tu regardes pas"], response: "Je comprends ta réaction. Je vais vérifier de mon côté et je reviens vers toi avec les éléments demandés." },
    { patterns: ["flemme", "j'ai pas envie", "ça m'intéresse pas", "autre chose à faire"], response: "Merci de partager ton point de vue. Je vais prioriser cette tâche dans mon planning et te donner un retour rapidement." },
    { patterns: ["toujours", "jamais", "encore", "sans arrêt"], response: "Je comprends que cela puisse être récurrent. Je te propose qu'on en discute pour trouver une solution durable ensemble." },
    { patterns: ["ça sert à rien", "inutile", "perte de temps", "pas important"], response: "Merci pour ce retour d'expérience. Je vais recontextualiser le besoin avec l'équipe pour s'assurer de la pertinence." },
    { patterns: ["stresse", "trop de pression", "craquer", "fatigué", "épuisé"], response: "Je comprends que c'est un moment intense. N'hésite pas à solliciter un point avec le management pour prioriser ensemble." },
    { patterns: ["maintenant", "tout de suite", "urgent", "immédiatement"], response: "Je prends en compte le caractère urgent de ta demande. Je reviens vers toi dans les plus brefs délais après vérification de ma charge actuelle." }
  ],
  firme: [
    { patterns: ["relancer", "arrête de me relancer", "tu me sollicites", "tu me déranges"], response: "J'ai bien reçu tes sollicitations. Je traite les dossiers par ordre de priorité et te répondrai quand j'aurai une compréhension complète du sujet." },
    { patterns: ["déjà sur", "trucs en même temps", "surchargé", "trop de boulot", "débordé"], response: "Je te confirme que ta demande est notée. Cependant, ma charge de travail actuelle ne me permet pas de m'y consacrer immédiatement. Je te propose d'en reparler lors de notre prochain point." },
    { patterns: ["pas encore fini", "c'est pas compliqué", "t'es lent", "ça traîne"], response: "Je comprends ton impatience, mais chaque dossier nécessite le temps nécessaire pour être traité correctement. Je te ferai un retour dès que j'aurai avancé." },
    { patterns: ["cassé", "ton truc de merde", "marche pas", "n'importe quoi", "bug", "pété"], response: "Merci pour ce signalement. Pourrais-tu stp créer un ticket avec la procédure habituelle ? Cela permettra un suivi rigoureux." },
    { patterns: ["qui a pondu", "qui a fait", "c'est nul", "c'est moche", "n'importe qui"], response: "Je transmets ton feedback à l'équipe concernée. Je te suggère d'utiliser le canal dédié pour ce type de remarques à l'avenir." },
    { patterns: ["t'es aveugle", "tu sais pas lire", "j'ai déjà répondu", "tu regardes pas"], response: "J'ai bien pris connaissance de ton message. Je t'invite à vérifier de ton côté et à me renvoyer les éléments si nécessaire." },
    { patterns: ["flemme", "j'ai pas envie", "ça m'intéresse pas", "autre chose à faire"], response: "Je comprends. N'hésite pas à partager tes priorités actuelles avec le manager pour qu'on réajuste la répartition." },
    { patterns: ["toujours", "jamais", "encore", "sans arrêt"], response: "Je note que ce point revient fréquemment. Je propose qu'on planifie un point dédié pour identifier ensemble une solution pérenne." },
    { patterns: ["ça sert à rien", "inutile", "perte de temps", "pas important"], response: "Je prends note de ton avis. Je te propose d'en discuter avec le sponsor du projet pour clarifier la vision." },
    { patterns: ["stresse", "trop de pression", "craquer", "fatigué", "épuisé"], response: "Je te suggère de faire un point avec ton responsable pour réévaluer les priorités et la charge de travail." },
    { patterns: ["maintenant", "tout de suite", "urgent", "immédiatement"], response: "J'ai bien noté l'urgence exprimée. Je te propose de contacter directement le chef de projet pour une validation de priorisation." }
  ],
  urgence: [
    { patterns: ["relancer", "arrête de me relancer", "tu me sollicites", "tu me déranges"], response: "⚠️ URGENT — Je traite ta demande en priorité absolue. Un retour détaillé t'est communiqué dans l'heure." },
    { patterns: ["déjà sur", "trucs en même temps", "surchargé", "trop de boulot", "débordé"], response: "⚠️ URGENT — Je mobilise toutes les ressources nécessaires pour traiter ta demande. Point de suivi programmé sous 30 minutes." },
    { patterns: ["pas encore fini", "c'est pas compliqué", "t'es lent", "ça traîne"], response: "⚠️ URGENT — Je priorise ton dossier en haut de ma pile. Livraison estimée dans les plus brefs délais." },
    { patterns: ["cassé", "ton truc de merde", "marche pas", "n'importe quoi", "bug", "pété"], response: "⚠️ URGENT — Incident critique détecté. L'équipe technique est mobilisée pour un correctif immédiat. SLA : 2 heures." },
    { patterns: ["qui a pondu", "qui a fait", "c'est nul", "c'est moche", "n'importe qui"], response: "⚠️ URGENT — Point de crise organisé dans 15 minutes avec l'ensemble des parties prenantes." },
    { patterns: ["t'es aveugle", "tu sais pas lire", "j'ai déjà répondu", "tu regardes pas"], response: "⚠️ URGENT — Je te confirme la prise en charge immédiate. Un point téléphonique est lancé pour résoudre la situation." },
    { patterns: ["flemme", "j'ai pas envie", "ça m'intéresse pas", "autre chose à faire"], response: "⚠️ URGENT — Je transmets ta situation au management pour une décision rapide sur les priorités." },
    { patterns: ["toujours", "jamais", "encore", "sans arrêt"], response: "⚠️ URGENT — Problème récurrent identifié. Mise en place d'un plan d'action correctif immédiat et durable." },
    { patterns: ["ça sert à rien", "inutile", "perte de temps", "pas important"], response: "⚠️ URGENT — Demande de clarification remontée au comité de direction pour validation de la pertinence." },
    { patterns: ["stresse", "trop de pression", "craquer", "fatigué", "épuisé"], response: "⚠️ URGENT — Soutien psychologique et réévaluation de la charge de travail activés. Ressources RH contactées." },
    { patterns: ["maintenant", "tout de suite", "urgent", "immédiatement"], response: "⚠️ URGENT — Réponse immédiate enclenchée. Toutes les équipes concernées sont en ligne pour une résolution rapide." }
  ]
};

export const defaultResponses: Record<import('@/types').Mood, string> = {
  standard: "Merci pour ton message ! Je prends le temps d'analyser ta demande et reviens vers toi rapidement avec des éléments concrets. Belle journée ! ☀️",
  firme: "J'ai bien reçu ta demande. Je te prie de bien vouloir utiliser le canal approprié à l'avenir afin de garantir un suivi optimal. Je reste disponible pour toute question complémentaire. Cordialement.",
  urgence: "⚠️ URGENCE DÉCLENCHÉE — Ta demande a été transmise au comité de crise. Un référent dédié te contactera dans les minutes qui suivent. Merci de ta réactivité."
};
