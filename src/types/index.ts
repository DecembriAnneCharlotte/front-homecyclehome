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
  type: 'maintenance' | 'réparation';
  prix: number;
  description: string;
  commentaire: string;
  statut: 'planifiée' | 'en cours' | 'terminée' | 'annulée';
  date: string;
  duree: number;
  clientId: number;
  technicienId: number;
  forfaitId: number;
  zoneId: number;
}