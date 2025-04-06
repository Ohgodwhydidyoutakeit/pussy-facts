

export interface Adapter<T0, T1> {
    adapt(item: T0): T1;
}