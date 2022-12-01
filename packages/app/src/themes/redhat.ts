// import { BackstageOverrides } from '@backstage/core-components';
// import { BackstageOverrides as CatalogReactOverrides } from '@backstage/plugin-catalog-react';
import {BackstageTheme, createTheme, genPageTheme, lightTheme, shapes} from '@backstage/theme';

import { AutocompleteClassKey } from '@material-ui/lab/Autocomplete';
import { AlertClassKey } from '@material-ui/lab/Alert';

// Labs types not included in overrides; https://github.com/mui/material-ui/issues/19427
declare module '@material-ui/core/styles/overrides' {
    export interface ComponentNameToClassKey {
        MuiAlert: AlertClassKey;
        MuiAutocomplete: AutocompleteClassKey;
    }
}

const baseTheme = createTheme({
    palette: {
        ...lightTheme.palette,
        navigation: {
            background: '#222427',
            indicator: '#cc0000',
            color: '#ffffff',
            selectedColor: '#ffffff',
            navItem: {
                hoverBackground: '#4f5255',
            },
        },
    },
    defaultPageTheme: 'home',
    pageTheme: {
        home: genPageTheme({ colors: ['#be0000', '#f56d6d'], shape: shapes.wave }),
        app: genPageTheme({ colors: ['#be0000', '#f56d6d'], shape: shapes.wave }),
        apis: genPageTheme({ colors: ['#be0000', '#f56d6d'], shape: shapes.wave }),
        documentation: genPageTheme({
            colors: ['#be0000', '#f56d6d'],
            shape: shapes.wave,
        }),
        tool: genPageTheme({ colors: ['#be0000', '#f56d6d'], shape: shapes.round }),
        other: genPageTheme({ colors: ['#be0000', '#f56d6d'], shape: shapes.wave }),
    },
});

// const createCustomThemeOverrides = (
//     theme: BackstageTheme,
// ): BackstageOverrides & CatalogReactOverrides => {
//     return {
//         BackstageHeader: {
//             header: {
//                 // backgroundImage: 'unset',
//                 backgroundImage: `url('/header_background2.png')`,
//                 backgroundRepeat: "repeat-x",
//                 backgroundSize: "auto 100px",
//                 boxShadow: 'unset',
//                 paddingBottom: theme.spacing(1),
//             },
//
//         },
//     };
// };

export const redHatTheme: BackstageTheme = {
    ...baseTheme,
    overrides: {
        ...baseTheme.overrides,
        // ...createCustomThemeOverrides(baseTheme),
    },
};