
export interface Destination {
  id: string;
  title: string;
  tag: string;
  image: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
}

export interface TripStats {
  duration: string;
  groupSize: string;
  accommodation: string;
  meals: string;
}

export interface TripHighlight {
  iconName: 'Ship' | 'Waves' | 'Moon' | 'Landmark' | 'Palmtree' | 'ShoppingBag' | 'BedDouble' | 'Users' | 'Calendar' | 'Utensils';
  title: string;
  description: string;
}

export interface ItineraryDay {
  day: string;
  title: string;
  image: string;
  activities: string[];
}
