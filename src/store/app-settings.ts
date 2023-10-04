import { Theme, themeApply } from "@/utils/theme-apply";
import { proxy, subscribe } from "valtio";

export type AppSettings = {
    theme: Theme;
};

const defaultSettings: AppSettings = {
    theme: 'light',
};

export const appSettings = proxy<AppSettings>(initSettings());

const STORE_KEY = "webfont-tools-app-settings";

function initSettings(): AppSettings {
    const savedSettings = localStorage.getItem(STORE_KEY);
    if (savedSettings) {
        try {
            return JSON.parse(savedSettings);
        } catch (error) {
        }
    }
    return defaultSettings;
}

subscribe(appSettings, () => {
    themeApply(appSettings.theme);
    localStorage.setItem(STORE_KEY, JSON.stringify(appSettings));
});
