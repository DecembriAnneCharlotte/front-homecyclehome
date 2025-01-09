export type Role = 'super_admin' | 'admin' | 'technicien' | 'client';

export interface User {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  role: Role;
  telephone: string;
  adresse: string;
  marqueBlancheId: number;
}

export interface MarqueBlanche {
  id: number;
  marque: string;
  logo: string;
  email: string;
  couleur1: string;
  couleur2: string;
  couleur3: string;
  sousDomaine: string;
}

export interface Intervention {
  id: number;
  intervention_type: 'maintenance' | 'réparation';
  intervention_prix: number;
  intervention_description: string;
  intervention_commentaire: string;
  intervention_statut: 'planifiée' | 'en cours' | 'terminée' | 'annulée';
  intervention_date: string;
  intervention_duree: number;
  clientUtilisateurIdUtilisateurId: number;
  technicienUtilisateurIdUtilisateurId: number;
  forfaitForfaitIdForfaitId: number;
  zoneZoneIdZoneId: number;
}