
    export type RemoteKeys = 'remote/counter';
    type PackageType<T> = T extends 'remote/counter' ? typeof import('remote/counter') :any;