export interface UserLocation {
  neighborhood: string;
  city: string;
  serviceLocation: string;
  outOfServiceRange: boolean;
  address: Record<string, any>;
}
