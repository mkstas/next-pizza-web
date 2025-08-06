export type User = {
  id: string;
  phoneNumber: string;
  name: string;
  role: 'admin' | 'user';
};

export interface UserContextState {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
}
