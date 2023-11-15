import { proxy } from "valtio";

type DialogState = {
    isOpen: boolean;
};

export const dialogState = proxy<DialogState>({
    isOpen: false,
});
