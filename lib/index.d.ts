declare const _default: {
    components: {
        checkmatrix: typeof import("./components/CheckMatrix/CheckMatrix").default;
        firstname: typeof import("./components/FirstName/FirstName").default;
    };
    templates: {
        bootstrap: {
            checkmatrix: {
                form: string;
            };
        };
    };
    options: {
        builder: {
            builder: {
                basic: boolean;
                advanced: boolean;
                layout: boolean;
                data: boolean;
                premium: boolean;
                customBasic: {
                    title: string;
                    default: boolean;
                    weight: number;
                    components: {
                        firstname: boolean;
                    };
                };
            };
        };
    };
};
export default _default;
