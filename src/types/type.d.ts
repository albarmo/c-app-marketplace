interface I_Module {
    id: string;
    name: string;
    icon?: string | React.ReactNode;
    path: string;
    submenu?: { id: string; name: string; path: string }[];
}

interface I_SubModule {
    id: string;
    name: string;
    path: string;
}

type T_AppModules = Array<I_Module>;
