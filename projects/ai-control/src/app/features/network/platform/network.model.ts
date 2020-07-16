import { EntityState } from '@ngrx/entity';

export interface Network {
  id: string;
  name: string;
}

export interface NetworkState extends EntityState<Network> {
  current: Network;
}
