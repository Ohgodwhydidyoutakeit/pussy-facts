import { AuthState } from "../domain/auth-state";
import { LOCAL_STORAGE_AUTH_KEY } from "../keys/local-storage-key";

export function getInitialAuthState(): AuthState {
    const userName = localStorage.getItem(LOCAL_STORAGE_AUTH_KEY);
    return {
        isLoggedIn: !!userName,
        userName: userName || '',
    };
}