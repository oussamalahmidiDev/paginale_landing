import orderifyLogo from "./assets/img/apps/orderify-logo.png";

export interface App {
    id: string;
    name: string;
    icon: string;
    description: string;
    screenshots?: string[];
}

export const appsList: App[] = [
    { id: "orderify", name: "Orderify", description: "Orderify Description", icon: orderifyLogo,
    screenshots: [orderifyLogo, orderifyLogo]
    },
    { id: "orderifyo", name: "Orderify", description: "Orderify Description", icon: orderifyLogo },
];
